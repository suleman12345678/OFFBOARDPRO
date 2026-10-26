"use client";

import React, { useState } from "react";
import { X, GitBranch, ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle, Layers } from "lucide-react";
import { WORKFLOW_PHASES } from "@/data/guideData";

interface WorkflowPipelineModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToChapter: (chapterId: string) => void;
}

export const WorkflowPipelineModal: React.FC<WorkflowPipelineModalProps> = ({
  isOpen,
  onClose,
  onNavigateToChapter,
}) => {
  const [selectedPhaseIndex, setSelectedPhaseIndex] = useState(0);

  if (!isOpen) return null;

  const currentPhase = WORKFLOW_PHASES[selectedPhaseIndex];

  const phaseChapterMap: Record<string, string> = {
    "01": "offboarding-requests",
    "02": "employee-directory",
    "03": "approvals-governance",
    "04": "services-integrations",
    "05": "audit-trail",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-blue-50/80 via-white to-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600 text-white shadow-sm shadow-blue-500/30">
              <GitBranch className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-lg">
                5-Phase Lifecycle Execution Pipeline
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Standard operating procedure mapping progressive employee deboarding states.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Phase Step Sequence Bar */}
        <div className="p-6 bg-slate-50 border-b border-slate-200">
          <div className="grid grid-cols-5 gap-2 sm:gap-3">
            {WORKFLOW_PHASES.map((p, idx) => {
              const isSelected = idx === selectedPhaseIndex;
              return (
                <button
                  key={p.phase}
                  onClick={() => setSelectedPhaseIndex(idx)}
                  className={`p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                    isSelected
                      ? "bg-white border-blue-500 shadow-md ring-2 ring-blue-500/20"
                      : "bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-mono font-bold text-slate-400">
                      Phase {p.phase}
                    </span>
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        idx === 0
                          ? "bg-blue-500"
                          : idx === 1
                          ? "bg-amber-500"
                          : idx === 2
                          ? "bg-purple-500"
                          : idx === 3
                          ? "bg-emerald-500"
                          : "bg-rose-500"
                      }`}
                    />
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-800 truncate">
                    {p.name}
                  </h4>
                </button>
              );
            })}
          </div>
        </div>

        {/* Phase Details Card */}
        <div className="p-6 sm:p-8 space-y-5 flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border ${currentPhase.bgBadge} mb-1.5`}>
                Phase {currentPhase.phase}: {currentPhase.name}
              </span>
              <h4 className="text-xl font-extrabold text-slate-900">
                {currentPhase.name} Lifecycle State
              </h4>
            </div>

            <button
              onClick={() => {
                const targetChapter = phaseChapterMap[currentPhase.phase] || "dashboard";
                onNavigateToChapter(targetChapter);
                onClose();
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-sm transition"
            >
              <span>Read Full Chapter</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
            {currentPhase.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 space-y-2">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                Primary Console Module:
              </span>
              <p className="text-sm font-semibold text-slate-800">
                {currentPhase.handledIn}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 space-y-2">
              <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Required Verification:
              </span>
              <p className="text-sm font-semibold text-slate-800">
                {selectedPhaseIndex === 2
                  ? "HR, IT, Dept Mgr & Team Lead Sign-Off"
                  : selectedPhaseIndex === 3
                  ? "OAuth2 & Graph API Tokens Revoked"
                  : selectedPhaseIndex === 4
                  ? "Audit Exception Investigation"
                  : "Automatic Identity Reconciliation"}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Click any phase above to inspect operational guidelines.</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 text-slate-600 hover:text-slate-900 font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
