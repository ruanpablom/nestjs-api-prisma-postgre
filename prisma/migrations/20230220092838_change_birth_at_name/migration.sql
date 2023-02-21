/*
  Warnings:

  - You are about to drop the column `birt_at` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "birt_at",
ADD COLUMN     "birth_at" DATE;
