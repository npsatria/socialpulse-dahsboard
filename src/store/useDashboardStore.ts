import { create } from 'zustand';

// Definisi tipe data untuk State kita
interface DashboardState {
  isSidebarOpen: boolean;
  isDarkMode: boolean;
  toggleSidebar: () => void;
  toggleDarkMode: () => void;
}

// Membuat store dengan Zustand
export const useDashboardStore = create<DashboardState>((set) => ({
  isSidebarOpen: true,
  isDarkMode: true, // Default dark mode
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
