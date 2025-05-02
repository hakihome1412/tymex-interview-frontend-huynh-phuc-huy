import { useQuery } from "@tanstack/react-query";

import { Category } from "@/types";
import { getCategories } from "@/services/categories";

export default function useCategories() {
  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
}
