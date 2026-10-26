"use client";

import React, { useState, useEffect } from "react";
import { GuideChapter } from "@/data/guideData";
import {
  Maximize2,
  HelpCircle,
  Zap,
  ArrowRight,
  ArrowLeft,
  Layers,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

interface ChapterViewProps {
  chapter: GuideChapter;
  onOpenImageModal: (partIndex: number) => void;
  onNavigatePrev?: () => void;
  onNavigateNext?: () => void;
  prevChapterTitle?: string;
  nextChapterTitle?: string;
}

export const ChapterView: React.FC<ChapterViewProps> = ({
  chapter,
  onOpenImageModal,
  onNavigatePrev,
  onNavigateNext,
  prevChapterTitle,
  nextChapterTitle,
}) => {
  const [activePartIndex, setActivePartIndex] = useState(0);

  // Reset to first part when chapter changes
  useEffect(() => {
    setActivePartIndex(0);
  }, [chapter.id]);

  const activePart = chapter.parts[activePartIndex] || chapter.parts[0];

  return (
    <div className="max-w-[1600px] w-full mx-auto space-y-6 pb-16">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
            <span>{chapter.category}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-blue-600 font-bold">{chapter.title}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            {chapter.title}
          </h1>
        </div>

        {/* Expand / Zoom Button */}
        <button
          onClick={() => onOpenImageModal(activePartIndex)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-sm transition hover:border-slate-300 self-start sm:self-auto"
        >
          <Maximize2 className="w-3.5 h-3.5 text-blue-600" />
          <span>Zoom Screenshot</span>
        </button>
      </div>

      {/* Multi-Part Switcher (for chapters with Part 1, Part 2, etc.) */}
      {chapter.parts.length > 1 && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Select Screen Section ({chapter.parts.length} Parts):</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {chapter.parts.map((part, idx) => (
              <button
                key={idx}
                onClick={() => setActivePartIndex(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center gap-2 border ${
                  activePartIndex === idx
                    ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm"
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-mono font-bold ${
                    activePartIndex === idx
                      ? "bg-blue-700 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {part.partNumber}
                </span>
                <span>{part.partTitle}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* SIDE-BY-SIDE LAYOUT: Image on the Left, Information on the Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (Image) - 7 to 8 columns */}
        <div className="lg:col-span-7 xl:col-span-8 bg-white p-3 sm:p-4 rounded-2xl border border-slate-200/90 shadow-sm">
          <div
            onClick={() => onOpenImageModal(activePartIndex)}
            className="relative group cursor-pointer overflow-hidden rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-center min-h-[350px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activePart.imageSrc}
              alt={activePart.partTitle}
              className="w-full h-auto object-contain max-h-[720px] transition duration-200 group-hover:scale-[1.008]"
            />

            {/* Hover Hint */}
            <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-3.5 py-1.5 bg-white/95 backdrop-blur-sm text-slate-900 text-xs font-bold rounded-lg shadow-md border border-slate-200 flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5 text-blue-600" />
                Click to view full screen
              </span>
            </div>
          </div>
        </div>

        {/* Right Column (Side Information) - 5 to 4 columns, Sticky on Desktop */}
        <div className="lg:col-span-5 xl:col-span-4 space-y-4 lg:sticky lg:top-6">
          {/* Card 1: What is this? */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm space-y-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-4 h-4 stroke-[2.5]" />
              </div>
              <h2 className="text-base font-bold text-slate-900">
                What is this?
              </h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {activePart.whatIsThis}
            </p>
          </div>

          {/* Card 2: What it is doing? */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm space-y-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 stroke-[2.5]" />
              </div>
              <h2 className="text-base font-bold text-slate-900">
                What it is doing?
              </h2>
            </div>
            <ul className="space-y-2.5 text-sm text-slate-600">
              {activePart.whatItIsDoing.map((action, aIdx) => (
                <li key={aIdx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{action}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Clean Bottom Navigation */}
      <div className="pt-6 border-t border-slate-200 flex items-center justify-between gap-4">
        {onNavigatePrev ? (
          <button
            onClick={onNavigatePrev}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition"
          >
            <ArrowLeft className="w-4 h-4 text-slate-500" />
            <span>{prevChapterTitle || "Previous"}</span>
          </button>
        ) : (
          <div />
        )}

        {onNavigateNext && (
          <button
            onClick={onNavigateNext}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition"
          >
            <span>{nextChapterTitle || "Next"}</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        )}
      </div>
    </div>
  );
};
