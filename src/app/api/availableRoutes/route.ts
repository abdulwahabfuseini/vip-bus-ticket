import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/Prismadb";
import { connectMongoDB } from "@/lib/mongodb";

// Create Route
export const POST = async (req: NextRequest) => {
  await connectMongoDB(); // Connecting to MongoDB
  try {
    const body = await req.json();

    const { from, to, type, price, seats, arrival, schedule, terminalId } = body;

    // Check if any of the required fields are missing
    if (!from || !to || !type || !price || !seats || !arrival || !schedule || !terminalId) {
      return NextResponse.json({ message: "Missing Fields" }, { status: 400 });
    }

    const newRoute = await prisma.route.create({
      data: {
        from,
        to,
        type,
        price,
        seats,
        arrival,
        schedule: {
          create: schedule, // Assuming `schedule` is an array of related objects
        },
        terminal: {
          connect: { id: terminalId }, // Connect to the associated terminal
        },
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: newRoute,
        message: "Route Created Successfully",
      },
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error creating Route:", error);
    return NextResponse.json(
      {
        message: "Database Error",
        error, // Log the error object
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
