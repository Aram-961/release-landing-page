import { create } from 'zustand';

type UIStoreState = {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
  openDropdown: boolean;
  listProducts: boolean;
};

type UIStoreActions = {
  setIsMobile: (isMobile: boolean) => void;
  setIsTablet: (isTablet: boolean) => void;
  setIsDesktop: (isDesktop: boolean) => void;
  setOpenDropdown: (openDropdown: boolean) => void;
  setListProducts: (listProducts: boolean) => void;
};

const useUIStore = create<UIStoreState & UIStoreActions>((set) => ({
  isDesktop: false,
  isTablet: false,
  isMobile: false,
  openDropdown: false,
  listProducts: false,
  setIsMobile: (isMobile: boolean) => set({ isMobile }),
  setIsTablet: (isTablet: boolean) => set({ isTablet }),
  setIsDesktop: (isDesktop: boolean) => set({ isDesktop }),
  setOpenDropdown: (openDropdown: boolean) => set({ openDropdown }),
  setListProducts: (listProducts: boolean) => set({ listProducts }),
}));

export default useUIStore;
