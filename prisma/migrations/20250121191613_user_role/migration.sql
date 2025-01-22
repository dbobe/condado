/*
  Warnings:

  - Added the required column `userRole` to the `memberships` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "UserRole" ADD VALUE 'SUPER_ADMIN';

-- AlterTable
ALTER TABLE "memberships" ADD COLUMN     "userRole" "UserRole" NOT NULL;
