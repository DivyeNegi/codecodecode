'use client'
import React, { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import Login from './Login';
import Signup from './Signup';
import Reset from './Reset';
import { useAuthModalStore } from '@/store/authModalStore';



const AuthModal: React.FC = () => {
    let typeOfModal = useAuthModalStore((state) => state.type);

    const handleClick = () => {
        useAuthModalStore.setState(() => ({ isOpen: false }));
    };

    handleEscape();

    return (
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60'>
            <div className='w-full sm:w-[450px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex justify-center items-center'>
                <div className='relative w-full h-full mx-auto flex items-center justify-center'>
                    <div className='bg-white rounded-lg shadow relative w-full bg-gradient-to-b from-brand-orange to-slate-900 mx-6'>
                        <div className='flex justify-end p-2'>
                            <button
                                type='button'
                                className='bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white'
                                onClick={handleClick}
                            >
                                <IoClose />
                            </button>
                        </div>
                        {typeOfModal === 'login' ? <Login /> : typeOfModal === 'signup' ? <Signup /> : <Reset />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;

function handleEscape() {
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                useAuthModalStore.setState({ isOpen: false });
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);
    return null;
}