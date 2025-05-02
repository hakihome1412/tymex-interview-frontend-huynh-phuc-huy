import { useState } from "react";

import useCategories from "@/hooks/useCategories";
import useProducts from "@/hooks/useProducts";
import {
  CATEGORY_DEFAULT,
  LIMIT_DEFAULT,
  OPTIONS_PRICE,
  OPTIONS_THEME,
  OPTIONS_TIERS,
  OPTIONS_TIME,
} from "@/constants";
import useAuthors from "@/hooks/useAuthors";
import { Product } from "@/types";
import { PaginatedResponse } from "@/services/products";
import Content from "@/pages/Marketplace/components/Content";
import Banner from "@/pages/Marketplace/components/Banner";

type FormValues = {
  search: string;
  category: string;
  price: [number, number];
  tier: string;
  theme: string;
  time: string;
  price_type: string;
};

// Interface representing the actual structure returned by useInfiniteQuery
interface ProductDataPages {
  pages: Array<PaginatedResponse<Product>>;
}

export default function Marketplace() {
  // State to hold current filter values
  const [filters, setFilters] = useState<Partial<FormValues>>({
    search: "",
    category: CATEGORY_DEFAULT.name,
    price: [0, 200] as [number, number],
    tier: OPTIONS_TIERS[0].value,
    theme: OPTIONS_THEME[0].value,
    time: OPTIONS_TIME[0].value,
    price_type: OPTIONS_PRICE[0].value,
  });

  const { data: categories = [], isFetching: isFetchingCategories } =
    useCategories();

  // Pass filters to useProducts hook
  const {
    data: productData,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useProducts(LIMIT_DEFAULT, {
    search: filters.search,
    category: filters.category,
    priceMin: filters.price?.[0],
    priceMax: filters.price?.[1],
    tier: filters.tier,
    theme: filters.theme,
    time: filters.time,
    price_type: filters.price_type,
  });

  const { data: authors } = useAuthors();

  // Extract products from the infinite query result
  const products: Product[] =
    (productData as unknown as ProductDataPages)?.pages?.flatMap(
      (page) => page.data
    ) || [];

  return (
    <div
      className="relative z-10"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <Banner />

      <Content
        authors={authors || []}
        categories={categories}
        products={products}
        isFetchingCategories={isFetchingCategories}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        setFilters={setFilters}
      />
    </div>
  );
}
