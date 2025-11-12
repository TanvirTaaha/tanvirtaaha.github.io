'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { GalleryItem } from '@/types';

interface GalleryProps {
  items: GalleryItem[];
}

interface GalleryMetadata {
  filename: string;
  title?: string;
  alt?: string;
  caption?: string;
  subCaption?: string;
  category?: string;
}

export default function Gallery({ items }: GalleryProps) {
  const [availableImages, setAvailableImages] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadGallery = async () => {
      // Load metadata from JSON
      const metadataMap: Record<string, GalleryMetadata> = {};
      try {
        const metadataResponse = await fetch('/gallery/metadata.json');
        if (metadataResponse.ok) {
          const metadataArray: GalleryMetadata[] = await metadataResponse.json();
          metadataArray.forEach((item) => {
            metadataMap[item.filename] = item;
          });
        }
      } catch {
        // Metadata file doesn't exist, continue without it
      }

      // Check which images exist
      const validItems: GalleryItem[] = [];
      
      for (const item of items) {
        try {
          const response = await fetch(item.imageUrl, { method: 'HEAD' });
          if (response.ok) {
            // Merge with metadata if available
            const itemMetadata = metadataMap[item.filename];
            validItems.push({
              ...item,
              title: itemMetadata?.title || item.title,
              alt: itemMetadata?.alt || item.alt || item.title || 'Gallery item',
              caption: itemMetadata?.caption || item.caption,
              subCaption: itemMetadata?.subCaption || item.subCaption,
              category: itemMetadata?.category || item.category,
            });
          }
        } catch {
          // Image doesn't exist, skip it
        }
      }
      
      setAvailableImages(validItems);
      setIsLoading(false);
    };

    loadGallery();
  }, [items]);

  // Don't render section if no images available
  if (!isLoading && availableImages.length === 0) {
    return null;
  }

  if (isLoading) {
    return (
      <section id="gallery" className="py-8 px-4 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4">
            <p className="text-[var(--accent)] text-xs uppercase tracking-wider mb-1">My Gallery</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">Visual Showcase</h2>
          </div>
          <div className="text-center text-[var(--text-secondary)] text-sm">Loading gallery...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="py-8 px-4 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <p className="text-[var(--accent)] text-xs uppercase tracking-wider mb-1">My Gallery</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)]">
            Visual Showcase ({availableImages.length} {availableImages.length === 1 ? 'Image' : 'Images'})
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {availableImages.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square bg-[var(--bg-card)] border border-[var(--border)] rounded-lg overflow-hidden hover:border-[var(--accent)] transition-all duration-200"
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.imageUrl}
                  alt={item.alt || item.title || 'Gallery item'}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              {(item.title || item.caption || item.subCaption) && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="absolute bottom-0 left-0 right-0 p-2">
                    {item.title && (
                      <p className="text-white text-xs font-medium">{item.title}</p>
                    )}
                    {item.caption && (
                      <p className="text-white/90 text-xs mt-0.5">{item.caption}</p>
                    )}
                    {item.subCaption && (
                      <p className="text-white/70 text-xs mt-0.5">{item.subCaption}</p>
                    )}
                    {item.category && (
                      <p className="text-white/60 text-xs mt-0.5">{item.category}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
