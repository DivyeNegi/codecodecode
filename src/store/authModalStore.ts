import { create } from 'zustand';

interface AuthModalState {
  isOpen: boolean;
  type: 'login' | 'signup' | 'reset';
}

export const useAuthModalStore = create<AuthModalState>((set) => ({
  isOpen: false,
  type: 'login',
  switchTo: (type: 'login' | 'signup' | 'reset') => set({ type }),
  close: () => set({ isOpen: false }),
}));
