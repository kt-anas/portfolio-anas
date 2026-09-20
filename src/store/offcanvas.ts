import { create } from 'zustand';

type OffcanvasStore = {
    isOpen: boolean;
    openMenu: () => void;
    closeMenu: () => void;
    toggleMenu: () => void;
};

export const useOffcanvasStore = create<OffcanvasStore>((set) => ({
    isOpen: false,

    openMenu: () => set({ isOpen: true }),

    closeMenu: () => set({ isOpen: false }),

    toggleMenu: () =>
        set((state) => ({
            isOpen: !state.isOpen,
        })),
}));