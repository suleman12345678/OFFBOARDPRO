"use client";

import React from "react";
import { X, Key, Check, Minus, Shield } from "lucide-react";
import { ROLE_PERMISSIONS_MATRIX } from "@/data/guideData";

interface RoleMatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RoleMatrixModal: React.FC<RoleMatrixModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-amber-50/60 via-white to-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500 text-white shadow-sm shadow-amber-500/30">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-lg">
                Role-Based Access Control (RBAC) Permissions Matrix
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Official entitlement and capability comparison across all 5 operator tiers.
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

        {/* Matrix Table */}
        <div className="flex-1 overflow-auto p-4 sm:p-6">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-600">
                <th className="py-3 px-4 font-bold">Console Capability / Feature</th>
                <th className="py-3 px-3 text-center font-bold text-purple-700">Super Admin</th>
                <th className="py-3 px-3 text-center font-bold text-blue-700">IT Admin</th>
                <th className="py-3 px-3 text-center font-bold text-emerald-700">HR Mgr</th>
                <th className="py-3 px-3 text-center font-bold text-amber-700">Dept Mgr</th>
                <th className="py-3 px-3 text-center font-bold text-sky-700">Team Lead</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {ROLE_PERMISSIONS_MATRIX.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-50/80 transition-colors"
                >
                  <td className="py-3 px-4 font-medium text-slate-800">
                    {row.feature}
                  </td>
                  <td className="py-3 px-3 text-center">
                    {row.superAdmin ? (
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    ) : (
                      <Minus className="w-4 h-4 mx-auto text-slate-300" />
                    )}
                  </td>
                  <td className="py-3 px-3 text-center">
                    {row.itAdmin ? (
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    ) : (
                      <Minus className="w-4 h-4 mx-auto text-slate-300" />
                    )}
                  </td>
                  <td className="py-3 px-3 text-center">
                    {row.hrManager ? (
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    ) : (
                      <Minus className="w-4 h-4 mx-auto text-slate-300" />
                    )}
                  </td>
                  <td className="py-3 px-3 text-center">
                    {row.deptManager ? (
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    ) : (
                      <Minus className="w-4 h-4 mx-auto text-slate-300" />
                    )}
                  </td>
                  <td className="py-3 px-3 text-center">
                    {row.teamLead ? (
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    ) : (
                      <Minus className="w-4 h-4 mx-auto text-slate-300" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-slate-400" />
            Configurable under Chapter 10: User Management & RBAC
          </span>
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
