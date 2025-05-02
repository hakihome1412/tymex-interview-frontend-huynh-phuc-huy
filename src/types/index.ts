export type Product = {
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
};

export type Category = {
  id: number;
  name: string;
};

export type AuthorOnlineStatus = "online" | "offline" | "busy" | "idle";

export type ProductTier = "Basic" | "Deluxe" | "Premium";

export type ProductTheme = "Light" | "Dark" | "Colorful" | "Halloween";

export type Author = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  avatar: string;
  onlineStatus: AuthorOnlineStatus;
};
