"use client";

import React from "react";
import {
  Shield,
  Search,
  Printer,
  ExternalLink,
  GitBranch,
  Key,
  BookOpen,
} from "lucide-react";

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenPipeline: () => void;
  onOpenMatrix: () => void;
  activeChapterTitle?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenPipeline,
  onOpenMatrix,
  activeChapterTitle,
}) => {
  return (
    <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all lg:pl-72">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Mobile Left Branding (hidden on desktop because sidebar has the logo) */}
        <div className="flex items-center gap-3 lg:hidden">
          <div className="h-9 w-9 rounded-xl bg-slate-950 flex items-center justify-center text-white shadow-sm">
            <Shield className="w-4 h-4 fill-white text-white stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base tracking-tight text-slate-900">
                OffboardPro
              </span>
              <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-slate-900 text-white tracking-wider uppercase">
                PRO
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Active Chapter Indicator */}
        <div className="hidden lg:flex items-center gap-2.5">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            Manual Guide
          </span>
          <span className="text-slate-300">/</span>
          <span className="text-sm font-bold text-slate-800 truncate max-w-sm">
            {activeChapterTitle || "Overview"}
          </span>
        </div>

        {/* Center Search Bar Trigger */}
        <div className="flex-1 max-w-md mx-2 hidden md:block">
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-3.5 py-2 text-sm text-slate-500 bg-slate-100 hover:bg-slate-200/70 border border-slate-200 rounded-xl transition group focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="flex items-center gap-2.5">
              <Search className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition" />
              <span>Search manual, procedures, screens...</span>
            </div>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[11px] font-mono font-semibold text-slate-400 bg-white border border-slate-200 rounded shadow-sm">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Right Action Tools */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search on mobile */}
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="md:hidden p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-lg"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Lifecycle Pipeline button */}
          <button
            onClick={onOpenPipeline}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-sm transition hover:border-slate-300"
          >
            <GitBranch className="w-3.5 h-3.5 text-blue-600" />
            <span className="hidden sm:inline">5-Phase</span> Pipeline
          </button>

          {/* RBAC Matrix button */}
          <button
            onClick={onOpenMatrix}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-sm transition hover:border-slate-300"
          >
            <Key className="w-3.5 h-3.5 text-amber-500" />
            <span className="hidden sm:inline">Roles</span> Matrix
          </button>

          {/* Print button */}
          <button
            onClick={() => window.print()}
            title="Print or Save as PDF"
            className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-xl border border-transparent transition"
          >
            <Printer className="w-4 h-4" />
          </button>

          {/* Live App Pill */}
          <a
            href="https://offboard-client.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition hover:shadow-glow"
          >
            <span>Live Console</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </header>
  );
};
