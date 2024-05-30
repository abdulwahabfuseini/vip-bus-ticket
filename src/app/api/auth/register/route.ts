import prisma from "@/lib/Prismadb";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { name, password, email } = body;

    if (!name || !password || !email) {
      return new NextResponse("Missing Fields", { status: 400 });
    }

    // Add validation rule for username
    const usernamePattern = /^(?=.*[a-zA-Z])(?=.*[#_.-])[a-zA-Z0-9@_.-]{3,}$/;
    if (!usernamePattern.test(name)) {
      return NextResponse.json(
        {
          message:
            "Invalid Username, Please it must contain uppercase, lowercase letters, @, _, or -",
        },
        { status: 400 }
      );
    }

    // Add validation rule for password
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      return NextResponse.json(
        {
          message:
            "Invalid Password, Password must contain at least one uppercase letter, one lowercase letter, one digit, and one of the following special characters: @$!%*?&",
        },
        { status: 400 }
      );
    }

    const userExist = await prisma.user.findUnique({
      where: { email },
    });

    if (userExist) {
      return NextResponse.json(
        { message: "User Already Exists, Please Create New User" },
        {
          status: 400,
        }
      );
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return NextResponse.json(
      { message: "User Created Successfully", data: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Oops!!! Failed to Create New User" },
      { status: 500 }
    );
  }
};

// ===== GET ALL USERS ======
export const GET = async (req: NextRequest) => {
  try {
    const allUsers = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        emailVerified: true,
        image: true,
        password: false,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: allUsers,
        message: "Users Retrieved Successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching Users:", error);
    return NextResponse.json("Database Error, Please try again.", {
      status: 503,
    });
  }
};
