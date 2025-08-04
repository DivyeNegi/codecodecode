'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { useAuthModalStore } from '@/store/authModalStore';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BsList } from 'react-icons/bs';

type TopbarProps = {
    isProblemsPage?: boolean;
};

const Topbar: React.FC<TopbarProps> = ({ isProblemsPage }) => {
    const router = useRouter();

    const [user, initLoading, initError] = useAuthState(auth);

    const [signOut, loading, error] = useSignOut(auth);

    const handleSubmit = async () => {
        if (user) {
            await handleLogout();
        } else {
            useAuthModalStore.setState({ isOpen: true, type: 'login' });
            router.push('/auth');
        }
    };

    const handleLogout = async () => {
        const success = await signOut();
        if (!success) {
            console.error("Error logging out:", error ? error.message : "Unknown error");
            return;
        }
        console.log("User logged out successfully");
        alert("Logged out successfully");
        router.push('/');
    }

    return (
        <nav className='flex items-center bg-[rgb(26,26,26)] justify-between sm:px-12 px-2 md:px-24'>
            <Link href='/' className='flex items-center justify-center h-20'>
                <Image src='/logo.png' alt='LeetClone' height={50} width={50} />
            </Link>
            {isProblemsPage && (
                <div className='flex text-white items-center gap-4 flex-1 justify-center'>
                    <div className='flex items-center justify-center rounded-full bg-gray-800 p-2'>
                        <FaChevronLeft />
                    </div>
                    <Link href='/' className='flex items-center gap-2 font-medium text-white max-w-[170px] text-gray cursor-pointer'>
                        <div>
                            <BsList />
                        </div>
                        <p>Problem List</p>
                    </Link>
                    <div className='flex items-center justify-center rounded-full bg-gray-800 p-2'>
                        <FaChevronRight />
                    </div>
                </div>
            )}
            <div className='flex items-center'>
                {user && (
                    <div className='flex items-center gap-4 mr-4'>
                        <div className='relative group'>
                            <img src={user.photoURL || '/default-avatar.svg'} alt='User Avatar' width={40} height={40} className='rounded-full' />
                            <div className='absolute top-10 left-1/2 -translate-x-1/2 mx-auto bg-gray-800 p-2 rounded group-hover:scale-100 scale-0 transition-all duration-300 ease-in-out'>
                                <p className='text-sm'>{user.email}</p>
                            </div>
                        </div>
                    </div>
                )}
                <button
                    className='bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                hover:text-brand-orange hover:bg-white hover:border-2 hover:text-black hover:border-brand-orange border-2 border-transparent
                transition duration-300 ease-in-out' onClick={handleSubmit}>
                    {initLoading ? 'Loading...' : user ? 'Logout' : 'Sign In'}
                </button>
            </div>
        </nav>
    );
}
export default Topbar;