import { WallpaperPack } from '../types';

export const wallpaperPacks: WallpaperPack[] = [
  {
    id: '1',
    slug: 'minimalist-mountains',
    title: 'Minimalist Mountains',
    description: 'A collection of serene mountain landscapes in minimalist style',
    price: 1.00,
    previewImages: [
      '/previews/mountains-1.jpg',
      '/previews/mountains-2.jpg',
      '/previews/mountains-3.jpg'
    ],
    downloadUrl: '/downloads/minimalist-mountains.zip',
    createdAt: '2024-04-16'
  },
  {
    id: '2',
    slug: 'urban-nights',
    title: 'Urban Nights',
    description: 'Vibrant cityscapes and neon-lit streets',
    price: 1.00,
    previewImages: [
      '/previews/urban-1.jpg',
      '/previews/urban-2.jpg',
      '/previews/urban-3.jpg'
    ],
    downloadUrl: '/downloads/urban-nights.zip',
    createdAt: '2024-04-16'
  }
]; 