import StatCard from "@/components/dashboard/StatCard";
import { DASHBOARD_STATS } from "@/lib/mock-data";

export default function Home() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
        <p className="text-slate-500 mt-1">Welcome back! Here is what's happening today.</p>
      </div>

      {/* Grid Kartu Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {DASHBOARD_STATS.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Placeholder untuk Chart */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 h-[400px] flex flex-col items-center justify-center text-slate-600">
        <div className="w-full h-full border-2 border-dashed border-slate-800 rounded-xl flex items-center justify-center italic">
          Chart.js visualization will be rendered here
        </div>
      </div>
    </div>
  );
}
