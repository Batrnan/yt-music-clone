import { create } from 'zustand';

const useUIState = create((set) => ({
  homeCategory: '',
  headerImageSrc:
    'https://images.unsplash.com/photo-1719465263924-eff2bd34fa6c?q=80&w=2350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  setHomeCategory: (value) => set({ homeCategory: value }),
  setHeaderImageSrc: (src) => set({ headerImageSrc: src }),
}));

export default useUIState;
