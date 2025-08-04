'use client';
import { auth } from '@/firebase/firebase';
import { useAuthModalStore } from '@/store/authModalStore';
import React from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

type SignupProps = {

};

const Signup: React.FC<SignupProps> = () => {
    const router = useRouter();

    const [inputValues, setInputValues] = React.useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setInputValues(prev => ({ ...prev, [id]: value }));
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValues.username || !inputValues.email || !inputValues.password || !inputValues.confirmPassword) {
            toast.error("Please fill in all fields", {position: "top-right", autoClose: 5000});
            return;
        }
        if (inputValues.password !== inputValues.confirmPassword) {
            toast.error("Passwords do not match", {position: "top-right", autoClose: 5000});
            return;
        }
        const newUser = await createUserWithEmailAndPassword(inputValues.email, inputValues.password);
        if (!newUser) {
            console.error("Error creating user:", (error) ? error.message : "Unknown error");
            return;
        }
        useAuthModalStore.setState({ isOpen: false, type: 'login' });
        setInputValues({ username: '', email: '', password: '', confirmPassword: '' });
        router.push('/auth');
    };

    return <form onSubmit={handleRegister}>
        <h3 className='text-2xl font-bold text-center mb-6'>Sign Up</h3>
        <div className='m-4 px-2'>
            <label htmlFor='username' className='block text-sm font-medium mb-1'>Username</label>
            <input
                type='text' id='username' className='border border-gray-300 rounded-md p-2 w-full' placeholder='Enter your username' value={inputValues.username} onChange={handleChange} />
        </div>
        <div className='m-4 px-2'>
            <label htmlFor='email' className='block text-sm font-medium mb-1'>Email</label>
            <input type='email' id='email' className='border border-gray-300 rounded-md p-2 w-full' placeholder='Enter your email' value={inputValues.email} onChange={handleChange} />
        </div>
        <div className='m-4 px-2'>
            <label htmlFor='password' className='block text-sm font-medium mb-1'>Password</label>
            <input type='password' id='password' className='border border-gray-300 rounded-md p-2 w-full' placeholder='Enter your password' value={inputValues.password} onChange={handleChange} />
        </div>
        <div className='m-4 px-2'>
            <label  className='block text-sm font-medium mb-1'>Confirm Password</label>
            <input type='password' id='confirmPassword' className='border border-gray-300 rounded-md p-2 w-full' placeholder='Confirm your password' value={inputValues.confirmPassword} onChange={handleChange} />
        </div>
        <div className='m-4 px-2 pt-3'>
            <button type='submit' className='w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600'>{loading ? 'Just a sec...' : 'Sign Up'}</button>
        </div>
        <div className='text-center text-sm text-gray-500 py-3'>
            Already have an account? <button className='text-blue-500 hover:underline' onClick={() => useAuthModalStore.setState({ isOpen: true, type: 'login' })}>Log In</button>
        </div>
    </form>
}
export default Signup;