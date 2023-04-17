/*
  Warnings:

  - You are about to drop the column `Link` on the `Wishlist` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Wishlist" DROP COLUMN "Link",
ADD COLUMN     "link" TEXT;
