import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("voxera-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("voxera-theme", theme);
    set({ theme });
  },
}));
