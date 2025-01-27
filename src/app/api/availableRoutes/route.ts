import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/Prismadb";
import { connectMongoDB } from "@/lib/mongodb";
import moment from "moment";

interface ScheduleCreateInput {
  time: string;
  seats: number;
  price: number;
  arrival: string;
  carNumber: string;
}

interface RouteCreateInput {
  from: string;
  to: string;
  type: string;
  date: string;
  terminal: {
    connect: { id: string };
  };
}

// Create Route
export const POST = async (req: NextRequest) => {
  await connectMongoDB(); // Connecting to MongoDB
  try {
    const body = await req.json();
    const { routes, terminalId } = body;

    if (!routes || !terminalId) {
      return NextResponse.json({ message: "Missing Fields" }, { status: 400 });
    }

    const createdRoutes = [];
    for (const routeData of routes) {
      const { from, to, type, schedule, date } = routeData;
      const formatedDate = moment(date).format("YYYY-MM-DD");

      if (!from || !to || !type || !schedule || !formatedDate) {
        return NextResponse.json(
          { message: "Missing Fields in Route" },
          { status: 400 }
        );
      }

      const newRoute = await prisma.route.create({
        data: {
          from,
          to,
          type,
          date: formatedDate,
          terminal: {
            connect: { id: terminalId },
          },
          schedule: {
            create: schedule.map((sched: any) => ({
              time: sched.time,
              seats: sched.seats,
              price: sched.price,
              arrival: sched.arrival,
              carNumber: sched.carNumber,
            })),
          },
        } as RouteCreateInput,
      });
      createdRoutes.push(newRoute);
    }

    return NextResponse.json(
      {
        success: true,
        data: createdRoutes,
        message: "Routes Created Successfully",
      },
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error creating Routes:", error);
    return NextResponse.json(
      {
        message: "Database Error",
        error: error,
      },
      { status: 500 }
    );
  }
};

// Get all Routes
export const GET = async () => {
  try {
    const allRoutes = await prisma.route.findMany({
      include: {
        terminal: true, // Include terminal data
        schedule: true, // Include schedule data
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: allRoutes,
        message: "Routes Retrieved Successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching Routes:", error);
    return NextResponse.json("Database Error, Please try again.", {
      status: 503,
    });
  }
};
