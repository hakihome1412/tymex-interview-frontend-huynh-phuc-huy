import { Category } from "@/types";
import { delay } from "@/utils";
import categoriesData from "@/mocks/categories.json";

export async function getCategories(): Promise<Category[]> {
  await delay(Math.random() * 1000 + 1000);
  return categoriesData;
}
