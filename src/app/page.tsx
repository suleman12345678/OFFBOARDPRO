"use client";

import React, { useState } from "react";
import { GUIDE_CHAPTERS } from "@/data/guideData";
import { Sidebar } from "@/components/Sidebar";
import { ChapterView } from "@/components/ChapterView";
import { ImageModal } from "@/components/ImageModal";
import { Shield, Menu } from "lucide-react";

export default function GuideHomePage() {
  const [activeChapterId, setActiveChapterId] = useState<string>("dashboard");
  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState<boolean>(false);

  // Image modal state
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
  const [modalInitialPartIndex, setModalInitialPartIndex] = useState<number>(0);

  // Current active chapter
  const currentChapterIndex = GUIDE_CHAPTERS.findIndex(
    (ch) => ch.id === activeChapterId
  );
  const currentChapter =
    currentChapterIndex !== -1 ? GUIDE_CHAPTERS[currentChapterIndex] : GUIDE_CHAPTERS[0];

  const prevChapter =
    currentChapterIndex > 0 ? GUIDE_CHAPTERS[currentChapterIndex - 1] : null;
  const nextChapter =
    currentChapterIndex < GUIDE_CHAPTERS.length - 1
      ? GUIDE_CHAPTERS[currentChapterIndex + 1]
      : null;

  const handleOpenImageModal = (partIndex: number) => {
    setModalInitialPartIndex(partIndex);
    setIsImageModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Mobile-only header to toggle sidebar */}
      <div className="lg:hidden sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-[#0c0d12] text-white border-b border-[#1e222d] shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-xl bg-white flex items-center justify-center text-slate-950 shadow-sm">
            <Shield className="w-4 h-4 fill-slate-950 text-slate-950 stroke-[2.5]" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-base tracking-tight text-white">
              OffboardPro
            </span>
            <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-[#20242e] text-slate-300 border border-slate-700/60 uppercase">
              PRO
            </span>
          </div>
        </div>
        <button
          onClick={() => setIsSidebarOpenMobile(true)}
          className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition"
          aria-label="Open Navigation"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Main Workspace Layout */}
      <div className="flex-1 flex w-full">
        {/* Left Navigation Sidebar matching real app screenshot */}
        <Sidebar
          activeChapterId={activeChapterId}
          onSelectChapter={(id) => {
            setActiveChapterId(id);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          isOpenMobile={isSidebarOpenMobile}
          onToggleMobile={() => setIsSidebarOpenMobile(!isSidebarOpenMobile)}
        />

        {/* Right Content Area - Focused strictly on Image + What is this + What it is doing */}
        <main className="flex-1 lg:pl-72 p-5 sm:p-8 lg:p-10 min-w-0 transition-all">
          <ChapterView
            chapter={currentChapter}
            onOpenImageModal={handleOpenImageModal}
            onNavigatePrev={
              prevChapter
                ? () => {
                    setActiveChapterId(prevChapter.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                : undefined
            }
            onNavigateNext={
              nextChapter
                ? () => {
                    setActiveChapterId(nextChapter.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                : undefined
            }
            prevChapterTitle={prevChapter ? prevChapter.shortTitle : undefined}
            nextChapterTitle={nextChapter ? nextChapter.shortTitle : undefined}
          />
        </main>
      </div>

      {/* High-Resolution Zoom Lightbox */}
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        parts={currentChapter.parts}
        initialPartIndex={modalInitialPartIndex}
        chapterTitle={currentChapter.title}
      />
    </div>
  );
}
