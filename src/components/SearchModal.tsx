"use client";

import React, { useState, useEffect } from "react";
import { Search, X, ChevronRight, BookOpen } from "lucide-react";
import { GUIDE_CHAPTERS } from "@/data/guideData";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectChapter: (id: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectChapter,
}) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Filter results across chapters, titles, whatIsThis, and whatItIsDoing
  const filteredChapters = GUIDE_CHAPTERS.filter((ch) => {
    const q = query.toLowerCase();
    const matchTitle = ch.title.toLowerCase().includes(q);
    const matchShort = ch.shortTitle.toLowerCase().includes(q);
    const matchCategory = ch.category.toLowerCase().includes(q);
    const matchParts = ch.parts.some(
      (p) =>
        p.partTitle.toLowerCase().includes(q) ||
        p.whatIsThis.toLowerCase().includes(q) ||
        p.whatItIsDoing.some((action) => action.toLowerCase().includes(q))
    );
    return matchTitle || matchShort || matchCategory || matchParts;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/60 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[75vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 bg-slate-50/60">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            type="text"
            placeholder="Search screens, actions, features (e.g. Dashboard, Entra ID, Purge, SMTP)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
          {filteredChapters.length === 0 ? (
            <div className="py-12 text-center text-slate-400 space-y-2">
              <BookOpen className="w-8 h-8 mx-auto opacity-50" />
              <p className="text-sm font-medium">No screens found for "{query}"</p>
              <p className="text-xs">Try searching for "Dashboard", "Audit", "SMTP", "MFA", or "RBAC"</p>
            </div>
          ) : (
            filteredChapters.map((ch) => (
              <button
                key={ch.id}
                onClick={() => {
                  onSelectChapter(ch.id);
                  onClose();
                }}
                className="w-full text-left p-3.5 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-200 transition group flex items-start justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-blue-600 bg-blue-100/60 px-1.5 py-0.5 rounded">
                      Ch {ch.number}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {ch.category}
                    </span>
                    {ch.parts.length > 1 && (
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                        {ch.parts.length} Parts
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition">
                    {ch.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-1">
                    {ch.parts[0]?.whatIsThis}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 mt-2 flex-shrink-0" />
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>{filteredChapters.length} screens matched</span>
          <div className="flex items-center gap-2">
            <span>Esc to close</span>
          </div>
        </div>
      </div>
    </div>
  );
};
