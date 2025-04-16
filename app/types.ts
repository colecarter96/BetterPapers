export interface WallpaperPack {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  previewImages: string[];
  downloadUrl: string;
  createdAt: string;
}

export interface Purchase {
  packId: string;
  email: string;
  downloadUrl: string;
  purchasedAt: string;
} 