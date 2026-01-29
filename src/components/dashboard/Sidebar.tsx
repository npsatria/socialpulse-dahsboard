import { LayoutDashboard, BarChart3, Users, Settings, Share2, Moon, Sun } from "lucide-react";
import { useDashboardStore } from "@/store/useDashboardStore";

const menuItems = [
  { icon: LayoutDashboard, label: "Overview" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Users, label: "Audience" },
  { icon: Share2, label: "Platforms" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 border-r border-slate-800 p-6 flex flex-col sticky top-0">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-8 h-8 bg-[##1D3461] rounded-lg flex items-center justify-center font-bold text-white">S</div>
        <span className="text-xl font-bold text-white tracking-tight">SocialPulse</span>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-3 p-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-all group"
          >
            <item.icon size={20} className="group-hover:text-blue-500" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="pt-6 border-t border-slate-800">
        <button className="flex items-center gap-3 p-3 text-slate-400 w-full">
          <Moon size={20} />
          <span>Dark Mode</span>
        </button>
      </div>
    </aside>
  );
}
