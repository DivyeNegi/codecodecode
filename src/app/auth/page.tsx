'use client';
import React, { use } from 'react';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Image from 'next/image';
import Navbar from '../components/Navbar';
import AuthModal from '../components/Modals/AuthModal';
import { useRecoilBridgeAcrossReactRoots_UNSTABLE, useRecoilValue } from 'recoil';
import { authModalAtom } from '../atoms/authModalAtom';

type AuthPageProps = {

};

const AuthPage: React.FC<AuthPageProps> = () => {
  const authModal = useRecoilValue(authModalAtom);
  return (
		<div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
			<div className='max-w-7xl mx-auto'>
				<Navbar />
				<div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none'>
					<Image src='/logo.png' alt='Hero img' width={70} height={70} />
				</div>
        {authModal.isOpen && <AuthModal />}
			</div>
		</div>
  );
};

export default AuthPage;
