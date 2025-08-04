import { auth } from '@/firebase/firebase';
import { useAuthModalStore } from '@/store/authModalStore';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

type LoginProps = {

};

const Login: React.FC<LoginProps> = () => {
    const router = useRouter();

    const [inputValues, setInputValues] = React.useState({
        email: '',
        password: ''
    });
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setInputValues(prev => ({ ...prev, [id]: value }));
        // console.log(inputValues);
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const { email, password } = inputValues;
        if (!email || !password) {
            toast.error("Please fill in all fields");
            return;
        }
        const loggedUser = await signInWithEmailAndPassword(email, password);
        if (!loggedUser) {
            console.error("Error logging in:", (error) ? error.message : "Unknown error");
            return;
        }
        // console.log("User logged in:", loggedUser);
        router.push('/');
        useAuthModalStore.setState({ isOpen: false, type: 'login' });
    };

    return <form onSubmit={handleLogin}>
        <h3 className='text-2xl font-bold text-center mb-6'>Sign In</h3>
        <div className='m-4 px-2'>
            <label htmlFor='email' className='block text-sm font-medium mb-1'>Email</label>
            <input type='email' id='email' className='border border-gray-300 rounded-md p-2 w-full' placeholder='Enter your email' value={inputValues.email} onChange={handleChange} />
        </div>
        <div className='m-4 px-2'>
            <label htmlFor='password' className='block text-sm font-medium mb-1'>Password</label>
            <input type='password' id='password' className='border border-gray-300 rounded-md p-2 w-full' placeholder='Enter your password' value={inputValues.password} onChange={handleChange} />
        </div>
        <div className='m-4 px-2'>
            <button type='submit' className='w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600'>{loading ? 'Cooking...' : 'Log In'}</button>
        </div>
        <div className='m-4 px-2'>
            <button type='button' className='w-full bg-gray-300 text-gray-800 rounded-md p-2 hover:bg-gray-400' onClick={() => useAuthModalStore.setState({ isOpen: true, type: 'reset' })}>Forgot Password ?</button>
        </div>
        <div className='text-center text-sm text-gray-500 py-3'>
            Don't have an account? <button className='text-blue-500 hover:underline' onClick={() => useAuthModalStore.setState({ isOpen: true, type: 'signup' })}>Sign Up</button>
        </div>
    </form>
}
export default Login;