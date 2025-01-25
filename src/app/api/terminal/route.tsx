import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/Prismadb";
import { connectMongoDB } from "@/lib/mongodb";

// Create Cities and Terminals
export const POST = async (req: NextRequest) => {
  await connectMongoDB(); // Connecting to MongoDB
  try {
    const body = await req.json();
    const { cities } = body;

    if (!cities || !Array.isArray(cities) || cities.length === 0) {
      return NextResponse.json(
        { message: "Missing or invalid city data" },
        { status: 400 }
      );
    }

    const createdCities = [];

    for (const cityData of cities) {
      const { name, terminals } = cityData;

      if (!name || !terminals || !Array.isArray(terminals)) {
        return NextResponse.json(
          { message: "Missing city name or terminals array" },
          { status: 400 }
        );
      }

      const newCity = await prisma.city.create({
        data: {
          name,
          terminals: {
            create: terminals.map((terminal: { name: string }) => ({
              name: terminal.name,
            })),
          },
        },
      });
      createdCities.push(newCity);
    }

    return NextResponse.json(
      {
        success: true,
        data: createdCities,
        message: "Cities and Terminals Created Successfully",
      },
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error creating Cities and Terminals:", error);
    return NextResponse.json(
      {
        message: "Database Error",
        error,
      },
      { status: 500 }
    );
  }
};

// Get all Cities and their Terminals
export const GET = async () => {
  try {
    const allCities = await prisma.city.findMany({
      include: {
        terminals: true, // Include terminals for each city
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: allCities,
        message: "Cities Retrieved Successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching Cities:", error);
    return NextResponse.json("Database Error, Please try again.", {
      status: 503,
    });
  }
};
