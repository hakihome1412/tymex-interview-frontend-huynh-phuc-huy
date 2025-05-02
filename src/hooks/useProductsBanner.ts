import { useQuery } from "@tanstack/react-query";

import { getProductsBanner } from "@/services/products";
import { Product } from "@/types";

export default function useProductsBanner() {
  return useQuery<Product[]>({
    queryKey: ["productsBanner"],
    queryFn: getProductsBanner,
    refetchInterval: 60000,
  });
}
