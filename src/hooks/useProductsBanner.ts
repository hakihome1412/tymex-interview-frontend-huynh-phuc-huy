import { useQuery } from "@tanstack/react-query";
import { getProductsBanner, Product } from "@/services/products";

export default function useProductsBanner() {
  return useQuery<Product[]>({
    queryKey: ["productsBanner"],
    queryFn: getProductsBanner,
  });
}
