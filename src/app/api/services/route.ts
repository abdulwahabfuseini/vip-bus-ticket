import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/Prismadb";
import { connectMongoDB } from "@/lib/mongodb";

// Create Hiring
export const POST = async (req: NextRequest) => {
  await connectMongoDB(); // Connecting to Mongodb
  try {
    const body = await req.json();

    const {
      company,
      email,
      phoneNumber,
      address,
      pickup,
      destination,
      duration,
      time,
      typeofbus,
      buses,
      purpose,
    } = body;

    // Check if any of the required fields are missing
    if (
      !company ||
      !time ||
      !duration ||
      !address ||
      !pickup ||
      !destination ||
      !typeofbus ||
      !phoneNumber ||
      !email ||
      !buses ||
      !purpose
    ) {
      return NextResponse.json({ message: "Missing Fields" }, { status: 400 });
    }

    const BusHiring = await prisma.hiring.create({
      data: {
        company,
        email,
        phoneNumber,
        address,
        pickup,
        destination,
        duration,
        time,
        typeofbus,
        buses,
        purpose,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: BusHiring,
        message: "Hiring Created Successfully",
      },
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error creating Hiring:", error);
    return NextResponse.json(
      {
        message: "Database Error",
        error, // Log the error object
      },
      { status: 500 }
    );
  }
};

// Get all Hiring
export const GET = async (req: NextRequest) => {
  try {
    const allHiring = await prisma.hiring.findMany();

    return NextResponse.json(
      {
        success: true,
        data: allHiring,
        message: "Hiring Retrieved Successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching Hiring:", error);
    return NextResponse.json("Database Error, Please try again.", {
      status: 503,
    });
  }
};
