import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

export const paginate = (array: unknown[], page: number, pageSize: number) => {
  return array.slice((page - 1) * pageSize, page * pageSize);
};

export const getTotalPages = (array: unknown[], pageSize: number) => {
  return Math.ceil(array.length / pageSize);
};
