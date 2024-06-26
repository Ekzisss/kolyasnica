import { create } from "zustand";

export const useHoveredStep = create((set) => ({
  hoveredStep: null,
  setHoveredStep: (step) => set((state) => ({ hoveredStep: step })),
  resetHoveredStep: () => set({ hoveredStep: null }),
}));
