export const DASHBOARD_STATS = [
  { label: "Twitter Followers", value: "12,450", change: "+12%", platform: "twitter" },
  { label: "YouTube Subs", value: "45,200", change: "+5.2%", platform: "youtube" },
  { label: "IG Engagement", value: "8.4%", change: "-1.5%", platform: "instagram" },
  { label: "Total Reach", value: "1.2M", change: "+24%", platform: "all" },
];

export const CHART_DATA = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Monthly Views",
      data: [3000, 5000, 4500, 7000, 8500, 12000],
      borderColor: "#3b82f6",
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      fill: true,
      tension: 0.4,
    },
  ],
};
