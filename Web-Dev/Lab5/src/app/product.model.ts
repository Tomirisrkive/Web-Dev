export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  categoryId: number;
  isFavorite: boolean; // 🔥 обязательно
}
