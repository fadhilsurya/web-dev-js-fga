/*
  Warnings:

  - Added the required column `PostTypeId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "PostTypeId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "PostTypes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PostTypes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_PostTypeId_fkey" FOREIGN KEY ("PostTypeId") REFERENCES "PostTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
