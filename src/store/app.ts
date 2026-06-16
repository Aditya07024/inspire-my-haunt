import { create } from "zustand";

type Theme = "light" | "dark";

interface AppState {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  hydrateTheme: () => void;

  isAuthed: boolean;
  userName: string;
  login: (name?: string) => void;
  logout: () => void;

  favorites: string[];
  toggleFavorite: (id: string) => void;

  walletBalance: number;
  addMoney: (amt: number) => void;
}

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem("mdg-theme", theme);
  } catch {
    /* ignore */
  }
}

export const useApp = create<AppState>((set, get) => ({
  theme: "light",
  setTheme: (t) => {
    applyTheme(t);
    set({ theme: t });
  },
  toggleTheme: () => get().setTheme(get().theme === "dark" ? "light" : "dark"),
  hydrateTheme: () => {
    if (typeof window === "undefined") return;
    let t: Theme = "light";
    try {
      const stored = localStorage.getItem("mdg-theme");
      if (stored === "dark" || stored === "light") t = stored;
      else if (window.matchMedia("(prefers-color-scheme: dark)").matches) t = "dark";
    } catch {
      /* ignore */
    }
    if (window.location.pathname.startsWith("/frontend")) t = "light";
    applyTheme(t);
    set({ theme: t });
  },

  isAuthed: false,
  userName: "Aarav",
  login: (name) => set({ isAuthed: true, ...(name ? { userName: name } : {}) }),
  logout: () => set({ isAuthed: false }),

  favorites: ["d2"],
  toggleFavorite: (id) =>
    set((s) => ({
      favorites: s.favorites.includes(id)
        ? s.favorites.filter((f) => f !== id)
        : [...s.favorites, id],
    })),

  walletBalance: 1240,
  addMoney: (amt) => set((s) => ({ walletBalance: s.walletBalance + amt })),
}));
