import prisma from "@/lib/Prismadb";
import { NextRequest, NextResponse } from "next/server";

// ===== GET SINGLE MAINTENANCE =====

export const GET = async (req: NextRequest, { params: { id } }: any) => {
  try {
    const item_id = parseInt(id, 10);
    const newHiring = await prisma.hiring.findUnique({
      where: {
        id: item_id,
      },
    })

    if (!newHiring) {
      return NextResponse.json(
        { message: "Hiring Not Found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Single Hiring", data: newHiring },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to get Hiring" },
      { status: 500 }
    );
  }
};

// ===== UPDATE MAINTENANCE =====

export const PUT = async (req: NextRequest, { params: { id } }: any) => {
  try {
    const body = await req.json();
    const item_id = parseInt(id, 10);
    const updateData: any = {};

    if (body.newLevel) {
      updateData.level = body.newLevel;
    }
    if (body.newDescription) {
      updateData.description = body.newDescription;
    }
    if (body.newStation) {
      updateData.station = body.newStation;
    }

    const updatedHiring = await prisma.hiring.update({
      where: {
        id: item_id,
      },
      data: updateData,
    });

    return NextResponse.json(
      {
        success: true,
        data: updatedHiring,
        message: "Hiring Updated Successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating Hiring:", error);
    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }
};

// ===== DELETE MAINTENANCE =====

export const DELETE = async (req: NextRequest, { params: { id } }: any) => {
  try {
    const item_id = parseInt(id, 10);
    const deleteHiring = await prisma.hiring.delete({
      where: {
        id: item_id,
      },
    });

    if (!deleteHiring) {
      return NextResponse.json(
        { message: "Hiring Not Found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Hiring Deleted", data: deleteHiring },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete Hiring" },
      { status: 500 }
    );
  }
};
