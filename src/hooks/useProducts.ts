import { useInfiniteQuery } from "@tanstack/react-query";

import { getProducts, PaginatedResponse } from "@/services/products";
import { Product } from "@/types";
import { LIMIT_DEFAULT } from "@/constants";

interface ProductsFilters {
  search?: string;
  category?: string;
  priceMin?: number;
  priceMax?: number;
  tier?: string;
  theme?: string;
  time?: string;
  price_type?: string;
}

export default function useProducts(limit: number = LIMIT_DEFAULT, filters: ProductsFilters = {}) {
  const { 
    search, 
    category, 
    priceMin, 
    priceMax, 
    tier, 
    theme, 
    time, 
    price_type 
  } = filters;

  return useInfiniteQuery<
    PaginatedResponse<Product>,
    Error,
    PaginatedResponse<Product>,
    [string, number, ProductsFilters],
    number
  >({
    queryKey: ["products", limit, filters],
    queryFn: ({ pageParam = 1 }) => getProducts({ 
      page: pageParam, 
      limit,
      search,
      category,
      priceMin,
      priceMax,
      tier,
      theme,
      time,
      price_type
    }),
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.hasMore) return undefined;
      return allPages.length + 1;
    },
    initialPageParam: 1,
    refetchInterval: 60000,
  });
}
