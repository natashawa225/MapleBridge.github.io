"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  ArrowRight,
} from "lucide-react";
import { portfolioData, type IterationStage } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

interface DesignEvolutionProps {
  stages?: IterationStage[];
}

// Before/After Comparison Slider Component
function ComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current || !isDragging) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
      setSliderPosition(percent);
    },
    [isDragging]
  );

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMove]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/9] overflow-hidden rounded-xl cursor-col-resize select-none"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <Image src={afterImage} alt="After" fill className="object-cover" />
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-foreground text-background text-xs font-medium">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image src={beforeImage} alt="Before" fill className="object-cover" />
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs font-medium">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-background shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background shadow-xl flex items-center justify-center">
          <div className="flex items-center gap-0.5">
            <ChevronLeft className="w-3 h-3 text-muted-foreground" />
            <ChevronRight className="w-3 h-3 text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ConceptEvolution({
  stages = portfolioData.design.conceptEvolution,
}: DesignEvolutionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStageIndex, setModalStageIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 20);
      setCanScrollRight(
        container.scrollLeft <
          container.scrollWidth - container.clientWidth - 20
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      checkScroll();
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev + 1;
        if (next >= stages.length) {
          setIsAutoPlaying(false);
          return prev;
        }
        scrollToIndex(next);
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, stages.length]);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth =
        container.querySelector("[data-card]")?.clientWidth || 600;
      const scrollAmount =
        direction === "left" ? -cardWidth - 48 : cardWidth + 48;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (container) {
      const cards = container.querySelectorAll("[data-card]");
      if (cards[index]) {
        cards[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
        setActiveIndex(index);
      }
    }
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const cards = container.querySelectorAll("[data-card]");
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
      checkScroll();
    }
  };

  const openModal = (stageIndex: number) => {
    setModalStageIndex(stageIndex);
    setModalOpen(true);
  };

  const stageLabels: Record<string, { label: string; color: string }> = {
    initial: {
      label: "Iteration 1",
      color: "bg-muted-foreground/20 text-muted-foreground",
    },
    refined: { label: "Refinement", color: "bg-primary/10 text-foreground" },
    final: { label: "Final Concept", color: "bg-foreground text-background" },
  };

  return (
    <section className="relative w-full py-12 md:py-20">
      {/* Sticky Header */}
      <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border/40 pb-5 pt-3 mb-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            

            <div className="flex items-center gap-4">
              {/* Timeline Progress Indicator */}
              <div className="hidden md:flex items-center gap-1">
                {stages.map((stage, index) => (
                  <button
                    key={stage.id}
                    onClick={() => scrollToIndex(index)}
                    className="group flex items-center"
                  >
                    <div className="relative">
                      <span
                        className={cn(
                          "w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300",
                          activeIndex === index
                            ? "bg-foreground text-background ring-4 ring-foreground/10"
                            : "bg-muted text-muted-foreground hover:bg-muted-foreground/20"
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {/* Tooltip */}
                      <span
                        className={cn(
                          "absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium text-muted-foreground",
                          "opacity-0 group-hover:opacity-100 transition-opacity"
                        )}
                      >
                        {stage.title}
                      </span>
                    </div>
                    {index < stages.length - 1 && (
                      <div
                        className={cn(
                          "w-8 h-0.5 mx-1 transition-colors duration-500",
                          activeIndex > index
                            ? "bg-foreground"
                            : "bg-border"
                        )}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Control Buttons */}
              <div className="flex items-center gap-2">                

                <div className="w-px h-6 bg-border mx-1" />

                {/* Navigation Arrows */}
                <button
                  onClick={() => scroll("left")}
                  disabled={!canScrollLeft}
                  className={cn(
                    "w-9 h-9 rounded-full border border-border flex items-center justify-center transition-all duration-200",
                    canScrollLeft
                      ? "hover:bg-muted hover:border-foreground/20 text-foreground"
                      : "text-muted-foreground/30 cursor-not-allowed"
                  )}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  disabled={!canScrollRight}
                  className={cn(
                    "w-9 h-9 rounded-full border border-border flex items-center justify-center transition-all duration-200",
                    canScrollRight
                      ? "hover:bg-muted hover:border-foreground/20 text-foreground"
                      : "text-muted-foreground/30 cursor-not-allowed"
                  )}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison View */}
      {showComparison && stages.length >= 2 && (
        <div className="max-w-5xl mx-auto px-6 md:px-12 mb-8">
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground">
                Before → After Comparison
              </h3>
              <button
                onClick={() => setShowComparison(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <ComparisonSlider
              beforeImage={stages[0].artifacts[0]?.src || ""}
              afterImage={stages[stages.length - 1].artifacts[0]?.src || ""}
              beforeLabel="Initial"
              afterLabel="Final"
            />
          </div>
        </div>
      )}

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex gap-12 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 md:px-12 pb-8"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* Left Spacer */}
        <div className="flex-shrink-0 w-[calc(50vw-440px)] hidden xl:block" />

        {stages.map((stage, index) => (
          <div key={stage.id} className="flex items-center gap-6">
            {/* Evolution Card */}
            <div
              data-card
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={cn(
                "relative flex-shrink-0 w-[88vw] md:w-[680px] lg:w-[780px] snap-center",
                "group transition-all duration-500 ease-out",
                activeIndex === index
                  ? "scale-100"
                  : "scale-[0.96] opacity-70"
              )}
            >
              {/* Card Container */}
              <div
                className={cn(
                  "relative bg-card rounded-2xl border border-border overflow-hidden",
                  "transition-all duration-400",
                  hoveredIndex === index &&
                    "shadow-2xl shadow-foreground/[0.06] border-foreground/10"
                )}
              >
                {/* Image Container */}
                <div
                  className="relative aspect-[16/9] overflow-hidden bg-muted cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  <Image
                    src={stage.artifacts[0]?.src || "/placeholder.svg"}
                    alt={stage.artifacts[0]?.alt || stage.title}
                    fill
                    className={cn(
                      "object-cover transition-transform duration-700 ease-out",
                      hoveredIndex === index && "scale-[1.03]"
                    )}
                    priority={index === 0}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent",
                      "opacity-0 transition-opacity duration-300",
                      hoveredIndex === index && "opacity-100"
                    )}
                  />

                  {/* Zoom Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(index);
                    }}
                    className={cn(
                      "absolute top-4 right-4 w-10 h-10 rounded-full bg-background/95 backdrop-blur-sm",
                      "flex items-center justify-center text-foreground shadow-lg",
                      "opacity-0 translate-y-2 transition-all duration-300",
                      hoveredIndex === index && "opacity-100 translate-y-0"
                    )}
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>

                  {/* Stage Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={cn(
                        "px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-wide uppercase backdrop-blur-sm",
                        stageLabels[stage.stage].color
                      )}
                    >
                      {stageLabels[stage.stage].label}
                    </span>
                  </div>

                  {/* Large Step Number */}
                  <div className="absolute bottom-4 left-5">
                    <span className="text-7xl md:text-8xl font-bold text-background/[0.15] leading-none select-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
                        {stage.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {stage.description}
                      </p>
                    </div>

                    {/* Thumbnail Gallery */}
                    {stage.artifacts.length > 1 && (
                      <div className="flex gap-1.5 flex-shrink-0">
                        {stage.artifacts.slice(0, 3).map((artifact, i) => (
                          <button
                            key={artifact.id}
                            onClick={() => openModal(index)}
                            className="relative w-11 h-11 rounded-lg overflow-hidden border border-border hover:border-foreground/30 transition-colors"
                          >
                            <Image
                              src={artifact.src}
                              alt={artifact.alt}
                              fill
                              className="object-cover"
                            />
                            {i === 2 && stage.artifacts.length > 3 && (
                              <div className="absolute inset-0 bg-foreground/70 flex items-center justify-center text-background text-[10px] font-semibold">
                                +{stage.artifacts.length - 3}
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Connector Arrow */}
            {index < stages.length - 1 && (
              <div className="hidden md:flex items-center justify-center flex-shrink-0">
                <div className="relative flex items-center">
                  <div className="w-10 h-[2px] bg-gradient-to-r from-border via-muted-foreground/40 to-border rounded-full" />
                  <ArrowRight
                    className={cn(
                      "w-5 h-5 text-muted-foreground/40 -ml-1",
                      "transition-all duration-400",
                      activeIndex === index &&
                        "text-foreground scale-110 translate-x-0.5"
                    )}
                  />
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Right Spacer */}
        <div className="flex-shrink-0 w-[calc(50vw-440px)] hidden xl:block" />
      </div>

      {/* Mobile Progress Dots */}
      <div className="flex md:hidden items-center justify-center gap-2 mt-4">
        {stages.map((stage, index) => (
          <button
            key={stage.id}
            onClick={() => scrollToIndex(index)}
            className={cn(
              "transition-all duration-300 rounded-full",
              activeIndex === index
                ? "w-6 h-2 bg-foreground"
                : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
          />
        ))}
      </div>

      {/* Expanded Modal */}
      {modalOpen && modalStageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/98 backdrop-blur-lg"
          onClick={() => setModalOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setModalOpen(false)}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-muted-foreground/20 transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (modalStageIndex > 0) setModalStageIndex(modalStageIndex - 1);
            }}
            className={cn(
              "absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-muted flex items-center justify-center z-20",
              modalStageIndex === 0
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-muted-foreground/20 text-foreground"
            )}
            disabled={modalStageIndex === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              if (modalStageIndex < stages.length - 1)
                setModalStageIndex(modalStageIndex + 1);
            }}
            className={cn(
              "absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-muted flex items-center justify-center z-20",
              modalStageIndex === stages.length - 1
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-muted-foreground/20 text-foreground"
            )}
            disabled={modalStageIndex === stages.length - 1}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Content */}
          <div
            className="relative w-[94vw] md:w-[90vw] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Stage Info */}
            <div className="mb-4 text-center">
              <span
                className={cn(
                  "inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase mb-2",
                  stageLabels[stages[modalStageIndex].stage].color
                )}
              >
                {stageLabels[stages[modalStageIndex].stage].label}
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-1">
                {stages[modalStageIndex].title}
              </h3>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                {stages[modalStageIndex].description}
              </p>
            </div>

            {/* Image */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-muted">
              <Image
                src={stages[modalStageIndex].artifacts[0]?.src || ""}
                alt={stages[modalStageIndex].artifacts[0]?.alt || ""}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Caption */}
            {stages[modalStageIndex].artifacts[0]?.caption && (
              <p className="mt-4 text-sm text-muted-foreground text-center">
                {stages[modalStageIndex].artifacts[0].caption}
              </p>
            )}

            {/* Thumbnail Navigation */}
            <div className="flex items-center justify-center gap-3 mt-6">
              {stages.map((stage, index) => (
                <button
                  key={stage.id}
                  onClick={() => setModalStageIndex(index)}
                  className={cn(
                    "relative w-16 h-10 md:w-20 md:h-12 rounded-lg overflow-hidden border-2 transition-all",
                    modalStageIndex === index
                      ? "border-foreground ring-2 ring-foreground/20"
                      : "border-transparent opacity-50 hover:opacity-80"
                  )}
                >
                  <Image
                    src={stage.artifacts[0]?.src || ""}
                    alt={stage.title}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
