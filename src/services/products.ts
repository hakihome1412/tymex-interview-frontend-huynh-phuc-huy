import productsData from "@/mocks/products.json";
import { Product } from "@/types";
import { delay } from "@/utils";

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  hasMore: boolean;
}

interface GetProductsParams {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  priceMin?: number;
  priceMax?: number;
  tier?: string;
  theme?: string;
  time?: string;
  price_type?: string;
}

export async function getProducts(
  params: GetProductsParams = {}
): Promise<PaginatedResponse<Product>> {
  const {
    page = 1,
    limit = 20,
    search = "",
    category = "",
    priceMin = 0,
    priceMax = 200,
    tier = "",
    theme = "",
    time = "",
    price_type = "",
  } = params;

  // Random delay between 1-2 seconds
  await delay(Math.random() * 1000 + 1000);

  // Apply filters
  let filteredData = [...productsData];

  // Search filter
  if (search) {
    const searchLower = search.toLowerCase();
    filteredData = filteredData.filter((product) =>
      product.title.toLowerCase().includes(searchLower)
    );
  }

  // Category filter
  if (category && category !== "All") {
    filteredData = filteredData.filter(
      (product) => product.category === category
    );
  }

  // Price range filter
  filteredData = filteredData.filter(
    (product) => product.price >= priceMin && product.price <= priceMax
  );

  // Tier filter
  if (tier && tier !== "All") {
    filteredData = filteredData.filter((product) => product.tier === tier);
  }

  // Theme filter
  if (theme && theme !== "All") {
    filteredData = filteredData.filter((product) => product.theme === theme);
  }

  // Time filter - sort by createdAt date
  if (time) {
    switch (time) {
      case "Latest":
        // Sort by newest first (descending order)
        filteredData.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "Oldest":
        // Sort by oldest first (ascending order)
        filteredData.sort((a, b) => 
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        break;
      default:
        break;
    }
  }

  // Price type filter - sort by price
  if (price_type) {
    switch (price_type) {
      case "Low to high":
        // Sort by price ascending
        filteredData.sort((a, b) => a.price - b.price);
        break;
      case "High to low":
        // Sort by price descending
        filteredData.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
  }

  // Apply pagination
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedData = filteredData.slice(start, end);

  return {
    data: paginatedData,
    total: filteredData.length,
    hasMore: end < filteredData.length,
  };
}

export async function getProductsBanner(): Promise<Product[]> {
  await delay(Math.random() * 1000 + 1000);
  // Return only first 5 products for banner
  return productsData.slice(0, 6);
}
