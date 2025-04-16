'use client';

import Image from 'next/image';
import Link from 'next/link';
import { WallpaperPack } from '../types';

interface WallpaperCardProps {
  pack: WallpaperPack;
}

export default function WallpaperCard({ pack }: WallpaperCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <Link href={`/packs/${pack.slug}`}>
        <div className="relative aspect-[4/3]">
          <Image
            src={pack.previewImages[0]}
            alt={pack.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {pack.title}
            </h3>
            <span className="px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
              ${pack.price.toFixed(2)}
            </span>
          </div>
          <p className="text-gray-600 mb-4 line-clamp-2">{pack.description}</p>
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {pack.previewImages.length} wallpapers
          </div>
        </div>
      </Link>
    </div>
  );
} 