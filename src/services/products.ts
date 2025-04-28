import productsData from '@/mocks/products.json';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  isFavorite: boolean;
  createdAt: string;
  theme: string;
  tier: string;
  imageId: number;
  authorId: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  hasMore: boolean;
}

interface GetProductsParams {
  page?: number;
  limit?: number;
}

export async function getProducts(params: GetProductsParams = {}): Promise<PaginatedResponse<Product>> {
  const { page = 1, limit = 20 } = params;
  const start = (page - 1) * limit;
  const end = start + limit;
  
  // Random delay between 1-2 seconds
  await delay(Math.random() * 1000 + 1000);
  
  const paginatedData = productsData.slice(start, end);
  
  return {
    data: paginatedData,
    total: productsData.length,
    hasMore: end < productsData.length
  };
}

export async function getProductsBanner(): Promise<Product[]> {
  await delay(Math.random() * 1000 + 1000);
  // Return only first 5 products for banner
  return productsData.slice(0, 4);
} 