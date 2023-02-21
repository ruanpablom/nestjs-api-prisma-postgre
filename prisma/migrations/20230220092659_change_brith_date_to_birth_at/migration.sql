/*
  Warnings:

  - You are about to drop the column `birt_date` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "birt_date",
ADD COLUMN     "birt_at" DATE;
