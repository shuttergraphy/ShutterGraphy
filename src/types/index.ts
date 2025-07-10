export interface User {
  id: string;
  email: string;
  username: string;
  fullName: string;
  avatar?: string;
  role: 'photographer' | 'buyer' | 'admin';
  joinedDate: string;
  bio?: string;
  location?: string;
  socialLinks?: {
    instagram?: string;
    website?: string;
    twitter?: string;
  };
}

export interface Photo {
  id: string;
  title: string;
  description: string;
  photographer: User;
  imageUrl: string;
  watermarkedUrl: string;
  category: string;
  tags: string[];
  price: number;
  resolution: {
    width: number;
    height: number;
  };
  fileSize: string;
  uploadDate: string;
  downloads: number;
  likes: number;
  isLiked?: boolean;
  rating: number;
  reviews: Review[];
}

export interface Review {
  id: string;
  user: User;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  photo: Photo;
  quantity: number;
}

export interface Purchase {
  id: string;
  photo: Photo;
  purchaseDate: string;
  price: number;
  downloadUrl: string;
  downloadCount: number;
  maxDownloads: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  photoCount: number;
}