/*
  Warnings:

  - You are about to drop the column `PostTypeId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `PostTypes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_PostTypeId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "PostTypeId";

-- DropTable
DROP TABLE "PostTypes";
