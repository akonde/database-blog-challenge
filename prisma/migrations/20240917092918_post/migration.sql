/*
  Warnings:

  - You are about to drop the column `pictureURL` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `profilePictureURL` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.
  - Added the required column `profilePictureUrl` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Post_userId_key";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "pictureURL",
ADD COLUMN     "pictureUrl" TEXT;

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "profilePictureURL",
ADD COLUMN     "profilePictureUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "phone";
