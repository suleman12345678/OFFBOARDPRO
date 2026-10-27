"use client";

import React from "react";
import {
  Gauge,
  UserMinus,
  Users,
  CheckCircle2,
  LayoutGrid,
  FileText,
  SlidersHorizontal,
  Terminal,
  ShieldCheck,
  Mail,
  Settings,
  ChevronRight,
  Shield,
  KeyRound,
  LogOut,
  Activity,
  X,
  Menu,
} from "lucide-react";

interface SidebarProps {
  activeChapterId: string;
  onSelectChapter: (id: string) => void;
  isOpenMobile: boolean;
  onToggleMobile: () => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

interface NavSection {
  header: string;
  items: NavItem[];
}

const NAV_STRUCTURE: NavSection[] = [
  {
    header: "OVERVIEW",
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: Gauge,
      },
    ],
  },
  {
    header: "LIFECYCLE WORKFLOWS",
    items: [
      {
        id: "offboarding-requests",
        label: "Offboarding Requests",
        icon: UserMinus,
      },
      {
        id: "employee-directory",
        label: "Employees Directory",
        icon: Users,
      },
      {
        id: "approvals-governance",
        label: "Approvals Queue",
        icon: CheckCircle2,
      },
    ],
  },
  {
    header: "INTEGRATIONS & RULES",
    items: [
      {
        id: "services-integrations",
        label: "Services & Connectors",
        icon: LayoutGrid,
      },
      {
        id: "offboarding-policies",
        label: "Offboarding Policies",
        icon: FileText,
      },
      {
        id: "system-automation",
        label: "System Automation",
        icon: SlidersHorizontal,
      },
    ],
  },
  {
    header: "SECURITY & GOVERNANCE",
    items: [
      {
        id: "audit-trail",
        label: "Audit Logs",
        icon: Terminal,
      },
      {
        id: "user-management-rbac",
        label: "User Access & RBAC",
        icon: ShieldCheck,
      },
      {
        id: "email-smtp",
        label: "Email & SMTP Relay",
        icon: Mail,
      },
      {
        id: "tenant-settings",
        label: "Tenant Settings",
        icon: Settings,
      },
    ],
  },
];

export const Sidebar: React.FC<SidebarProps> = ({
  activeChapterId,
  onSelectChapter,
  isOpenMobile,
  onToggleMobile,
}) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          onClick={onToggleMobile}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Floating Mobile Trigger */}
      <div className="lg:hidden fixed bottom-5 right-5 z-50">
        <button
          onClick={onToggleMobile}
          className="flex items-center gap-2 px-4 py-3 bg-[#0c0d12] border border-slate-700 text-white font-semibold rounded-full shadow-2xl hover:bg-black transition"
        >
          {isOpenMobile ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          <span>{isOpenMobile ? "Close Menu" : "OffboardPro Menu"}</span>
        </button>
      </div>

      {/* Sidebar Canvas */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 w-72 bg-[#0c0d12] text-slate-300 border-r border-[#1e222d] flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-in-out lg:translate-x-0 select-none ${
          isOpenMobile ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 pt-5 space-y-6">
          {/* Logo Header matching real screenshot */}
          <div className="flex items-center justify-between px-2 pt-1">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-white flex items-center justify-center text-slate-950 shadow-md">
                <Shield className="w-5 h-5 fill-slate-950 text-slate-950 stroke-[2.5]" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-[18px] tracking-tight text-white">
                  OffboardPro
                </span>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#20242e] text-slate-300 border border-slate-700/60 uppercase tracking-wider">
                  PRO
                </span>
              </div>
            </div>
          </div>

          {/* Sign In Console Guide */}
          <div className="px-2">
            <button
              onClick={() => {
                onSelectChapter("authentication");
                if (isOpenMobile) onToggleMobile();
              }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition border ${
                activeChapterId === "authentication"
                  ? "bg-white text-slate-950 border-white shadow-md font-bold"
                  : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border-white/5"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <KeyRound
                  className={`w-4 h-4 ${
                    activeChapterId === "authentication"
                      ? "text-slate-950"
                      : "text-amber-400"
                  }`}
                />
                <span className="text-[13px]">Sign In Console Guide</span>
              </div>
              {activeChapterId === "authentication" && (
                <ChevronRight className="w-4 h-4 text-slate-950 stroke-[2.5]" />
              )}
            </button>
          </div>

          {/* Nav Sections - Linewise order with clear spacing between names */}
          <nav className="space-y-6 px-1">
            {NAV_STRUCTURE.map((section) => (
              <div key={section.header} className="space-y-2">
                {/* Header in uppercase muted bold text */}
                <h3 className="px-3 text-[11px] font-extrabold tracking-wider text-[#737887] uppercase font-sans">
                  {section.header}
                </h3>

                {/* Items with comfortable gap between names */}
                <div className="space-y-2 pt-1">
                  {section.items.map((item) => {
                    const isActive = activeChapterId === item.id;
                    const IconComponent = item.icon;

                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          onSelectChapter(item.id);
                          if (isOpenMobile) onToggleMobile();
                        }}
                        className={`w-full text-left transition-all duration-150 flex items-center justify-between ${
                          isActive
                            ? "bg-white text-slate-950 font-bold rounded-2xl py-3 px-4 shadow-lg shadow-black/20"
                            : "text-[#9da3af] hover:text-white hover:bg-white/5 font-medium rounded-xl py-2.5 px-4"
                        }`}
                      >
                        <div className="flex items-center gap-4 min-w-0">
                          <IconComponent
                            className={`w-[18px] h-[18px] flex-shrink-0 transition ${
                              isActive
                                ? "text-slate-950 stroke-[2.2]"
                                : "text-[#8e95a3] stroke-[1.8]"
                            }`}
                          />
                          <span
                            className={`truncate text-[13.5px] ${
                              isActive ? "font-bold text-slate-950" : "font-medium"
                            }`}
                          >
                            {item.label}
                          </span>
                        </div>

                        {/* Active right chevron matching screenshot */}
                        {isActive && (
                          <ChevronRight className="w-4 h-4 text-slate-950 flex-shrink-0 stroke-[2.5]" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom Operator Card (From real console in Image 2 1) */}
        <div className="p-4 border-t border-[#1e222d] bg-[#0c0d12]">
          <div className="p-3 bg-[#13161f] rounded-2xl border border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#202534] border border-slate-700/60 flex items-center justify-center text-white font-bold text-sm">
                R
              </div>
              <div>
                <p className="text-xs font-bold text-white tracking-wide">RIB</p>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  TEAM LEAD
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onSelectChapter("dashboard")}
                title="Activity Live Sync"
                className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-white/5 transition"
              >
                <Activity className="w-4 h-4" />
              </button>
              <button
                onClick={() => onSelectChapter("authentication")}
                title="Logout / Sign In Console"
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-white/5 transition"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
