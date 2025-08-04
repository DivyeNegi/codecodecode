'use client';
import { auth } from '@/firebase/firebase';
import { useAuthModalStore } from '@/store/authModalStore';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

type ResetProps = {

};

const Reset: React.FC<ResetProps> = () => {
    const router = useRouter();
    const [inputValues, setInputValues] = React.useState({
        email: ''
    });

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { id, value } = e.target;
        setInputValues(prev => ({ ...prev, [id]: value }));
        // console.log(inputValues);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { email } = inputValues;
        if (!email) {
            toast.error("Please enter your email");
            return;
        }
        const success = await sendPasswordResetEmail(email);
        if (success) {
            toast.success('Sent email, please check your inbox or spam folder !');
        }else{
            console.error("Error sending reset email:", error ? error.message : "Unknown error");
            toast.error("Error sending reset email. Please try again.");
            return;
        }
        useAuthModalStore.setState({ isOpen: true, type: 'login' });
        router.push('/auth');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3 className='text-2xl font-bold text-center mb-6'>Reset Password</h3>
            <div className='m-4 px-2'>
                <label htmlFor='email' className='block text-sm font-medium mb-1'>Forgot your password? We will send you an email to reset your password</label>
                <input type='email' id='email' className='border border-gray-300 rounded-md p-2 w-full' placeholder='Enter your email' value={inputValues.email} onChange={handleChange} />
            </div>
            <div className='m-4 px-2 pt-3'>
                <button type='submit' className='w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600'>{ sending ? "Sending Email..." : "Reset Password" }</button>
            </div>
            <div className='m-4 px-2 pt-3'>
                <button className='w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600' onClick={() => useAuthModalStore.setState({ isOpen: true, type: 'login' })}>Back to Login</button>
            </div>
        </form>
    );
}
export default Reset;