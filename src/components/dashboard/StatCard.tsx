import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function StatCard({ label, value, change }: any) {
  const isPositive = change.includes("+");
  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl hover:border-blue-500/50 transition-all">
      <p className="text-slate-400 text-sm font-medium">{label}</p>
      <div className="flex justify-between items-end mt-2">
        <h3 className="text-2xl font-bold text-white">{value}</h3>
        <span className={`text-xs font-bold flex items-center ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
          {change} {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        </span>
      </div>
    </div>
  );
}
