'use client';

import { useState } from 'react';
import { Artifact } from '@/lib/portfolio-data';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ArtifactGalleryProps {
  artifacts: Artifact[];
  layout?: 'grid' | 'carousel';
  columns?: 1 | 2 | 3;
}

export function ArtifactGallery({
  artifacts,
  layout = 'grid',
  columns = 2,
}: ArtifactGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (artifacts.length === 0) return null;

  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
  };

  return (
    <>
      {layout === 'grid' ? (
        <div className={`grid gap-4 ${gridColsClass[columns]} animate-stagger`}>
          {artifacts.map((artifact, idx) => (
            <button
              key={artifact.id}
              onClick={() => setSelectedIndex(idx)}
              className="text-left group cursor-pointer animate-fade-in-up"
            >
              <div className="relative w-full h-48 rounded-lg overflow-hidden bg-muted mb-2">
                <Image
                  src={artifact.src}
                  alt={artifact.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              {artifact.caption && (
                <p className="text-sm text-muted-foreground">{artifact.caption}</p>
              )}
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative w-full h-80 rounded-lg overflow-hidden bg-muted">
            <Image
              src={artifacts[0].src}
              alt={artifacts[0].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          {artifacts[0].caption && (
            <p className="text-sm text-muted-foreground">{artifacts[0].caption}</p>
          )}
          {artifacts.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {artifacts.map((artifact, idx) => (
                <button
                  key={artifact.id}
                  onClick={() => setSelectedIndex(idx)}
                  className="flex-shrink-0 relative w-20 h-20 rounded-lg overflow-hidden bg-muted hover:opacity-75 transition-opacity"
                >
                  <Image
                    src={artifact.src}
                    alt={artifact.alt}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex flex-col">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-10 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Main image */}
            <div
              className="relative flex-1 rounded-lg overflow-hidden bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={artifacts[selectedIndex].src}
                alt={artifacts[selectedIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>

            {/* Info and navigation */}
            <div className="mt-4 text-white">
              {artifacts[selectedIndex].caption && (
                <p className="text-sm mb-4">{artifacts[selectedIndex].caption}</p>
              )}

              {artifacts.length > 1 && (
                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={() =>
                      setSelectedIndex((prev) =>
                        prev === null ? 0 : (prev - 1 + artifacts.length) % artifacts.length
                      )
                    }
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>

                  <span className="text-sm">
                    {selectedIndex + 1} / {artifacts.length}
                  </span>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={() =>
                      setSelectedIndex((prev) =>
                        prev === null ? 0 : (prev + 1) % artifacts.length
                      )
                    }
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
