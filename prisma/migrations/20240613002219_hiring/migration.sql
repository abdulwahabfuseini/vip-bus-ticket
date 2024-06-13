-- CreateTable
CREATE TABLE "Hiring" (
    "_id" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "pickup" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "typeofbus" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "buses" TEXT NOT NULL,
    "purpose" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hiring_pkey" PRIMARY KEY ("_id")
);
