import { atom } from 'recoil';

type AuthModalState = {
    isOpen: boolean;
    mode: 'login' | 'signup' | 'reset';
};

const initialAuthModalState: AuthModalState = {
    isOpen: false,
    mode: 'login',
};

export const authModalAtom = atom<AuthModalState>({
    key: 'authModalAtom',
    default: initialAuthModalState,
});