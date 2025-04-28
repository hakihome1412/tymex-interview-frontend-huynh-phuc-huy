import { useInfiniteQuery } from "@tanstack/react-query";

import { getProducts, Product, PaginatedResponse } from "@/services/products";

export default function useProducts(limit: number = 20) {
  return useInfiniteQuery<
    PaginatedResponse<Product>,
    Error,
    PaginatedResponse<Product>,
    [string, number],
    number
  >({
    queryKey: ["products", limit],
    queryFn: ({ pageParam = 1 }) => getProducts({ page: pageParam, limit }),
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.hasMore) return undefined;
      return allPages.length + 1;
    },
    initialPageParam: 1,
  });
}
