"use client";

import React, { useState, useEffect } from "react";
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { ImagePart } from "@/data/guideData";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  parts: ImagePart[];
  initialPartIndex?: number;
  chapterTitle: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  parts,
  initialPartIndex = 0,
  chapterTitle,
}) => {
  const [currentPartIndex, setCurrentPartIndex] = useState(initialPartIndex);
  const [zoomScale, setZoomScale] = useState(1);

  useEffect(() => {
    setCurrentPartIndex(initialPartIndex);
    setZoomScale(1);
  }, [initialPartIndex, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && currentPartIndex < parts.length - 1) {
        setCurrentPartIndex((prev) => prev + 1);
        setZoomScale(1);
      }
      if (e.key === "ArrowLeft" && currentPartIndex > 0) {
        setCurrentPartIndex((prev) => prev - 1);
        setZoomScale(1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentPartIndex, parts.length, onClose]);

  if (!isOpen || parts.length === 0) return null;

  const currentPart = parts[currentPartIndex];

  const handleZoomIn = () => setZoomScale((prev) => Math.min(prev + 0.3, 3));
  const handleZoomOut = () => setZoomScale((prev) => Math.max(prev - 0.3, 0.7));
  const handleResetZoom = () => setZoomScale(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-2 sm:p-6 transition-opacity">
      <div className="relative w-full max-w-6xl h-[92vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
        {/* Top Header */}
        <div className="px-5 py-3.5 border-b border-slate-200 flex items-center justify-between bg-slate-50/90">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/70 px-2 py-0.5 rounded">
                Part {currentPart.partNumber} of {parts.length}
              </span>
              <h3 className="font-bold text-slate-800 text-sm sm:text-base truncate max-w-lg">
                {currentPart.partTitle}
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5 truncate hidden sm:block">
              {chapterTitle}
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handleZoomOut}
              className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 transition"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-medium text-slate-500 w-12 text-center">
              {Math.round(zoomScale * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 transition"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 transition"
              title="Reset Zoom"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <div className="w-px h-5 bg-slate-300 mx-1" />
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Canvas Container */}
        <div className="flex-1 overflow-auto bg-slate-100 flex items-center justify-center p-4 relative select-none">
          {/* Previous Part Button */}
          {parts.length > 1 && currentPartIndex > 0 && (
            <button
              onClick={() => {
                setCurrentPartIndex((p) => p - 1);
                setZoomScale(1);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-lg border border-slate-200 transition hover:scale-105"
              title="Previous Part"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Next Part Button */}
          {parts.length > 1 && currentPartIndex < parts.length - 1 && (
            <button
              onClick={() => {
                setCurrentPartIndex((p) => p + 1);
                setZoomScale(1);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-lg border border-slate-200 transition hover:scale-105"
              title="Next Part"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Rendered Image */}
          <div
            className="transition-transform duration-200 ease-out origin-center"
            style={{ transform: `scale(${zoomScale})` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentPart.imageSrc}
              alt={currentPart.partTitle}
              className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-lg border border-slate-300"
            />
          </div>
        </div>

        {/* Bottom Part Switcher Tabs (if multi-part) */}
        {parts.length > 1 && (
          <div className="px-5 py-3 border-t border-slate-200 bg-white flex items-center justify-between gap-4">
            <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
              Multi-Part UI Views:
            </span>
            <div className="flex items-center gap-2 overflow-x-auto py-1">
              {parts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentPartIndex(idx);
                    setZoomScale(1);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                    idx === currentPartIndex
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  Part {p.partNumber}: {p.partTitle.replace(/^Part \d+:\s*/, "")}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
