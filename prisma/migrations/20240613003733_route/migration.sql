/*
  Warnings:

  - The primary key for the `Account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `_id` on the `Account` table. All the data in the column will be lost.
  - The primary key for the `Hiring` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `_id` on the `Hiring` table. All the data in the column will be lost.
  - The primary key for the `Regions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `_id` on the `Regions` table. All the data in the column will be lost.
  - The primary key for the `Routes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `_id` on the `Routes` table. All the data in the column will be lost.
  - The primary key for the `Terminal` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `_id` on the `Terminal` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `_id` on the `User` table. All the data in the column will be lost.
  - Changed the type of `userId` on the `Account` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `regionId` on the `Routes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `region_id` on the `Terminal` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "Routes" DROP CONSTRAINT "Routes_regionId_fkey";

-- DropForeignKey
ALTER TABLE "Terminal" DROP CONSTRAINT "Terminal_region_id_fkey";

-- AlterTable
ALTER TABLE "Account" DROP CONSTRAINT "Account_pkey",
DROP COLUMN "_id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Account_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Hiring" DROP CONSTRAINT "Hiring_pkey",
DROP COLUMN "_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Hiring_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Regions" DROP CONSTRAINT "Regions_pkey",
DROP COLUMN "_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Regions_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Routes" DROP CONSTRAINT "Routes_pkey",
DROP COLUMN "_id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "regionId",
ADD COLUMN     "regionId" INTEGER NOT NULL,
ADD CONSTRAINT "Routes_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Terminal" DROP CONSTRAINT "Terminal_pkey",
DROP COLUMN "_id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "region_id",
ADD COLUMN     "region_id" INTEGER NOT NULL,
ADD CONSTRAINT "Terminal_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Routes" ADD CONSTRAINT "Routes_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Regions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Terminal" ADD CONSTRAINT "Terminal_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "Regions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
