'use client';
import React, { use, useEffect } from 'react';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Image from 'next/image';
import Navbar from '../components/Navbar';
import AuthModal from '../components/Modals/AuthModal';
import { useAuthModalStore } from '../../store/authModalStore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/navigation';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type AuthPageProps = {

};

const AuthPage: React.FC<AuthPageProps> = () => {

  const router = useRouter();

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      router.push('/'); // Redirect to home page if user is logged in
    }
  }, [user]);

  const isOpen = useAuthModalStore((state) => state.isOpen);

  return (
    <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
      <div className='max-w-7xl mx-auto'>
        <Navbar />
        <div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none'>
          <Image src='/logo.png' alt='Hero img' width={70} height={70} />
        </div>
        {isOpen && <AuthModal />}
      </div>
    <ToastContainer aria-label="Notification Toasts" />
    </div>
  );
};

export default AuthPage;
