import React from 'react';

type SignupProps = {
    
};

const Signup:React.FC<SignupProps> = () => {
    
    return <form>
        <h3 className='text-2xl font-bold text-center mb-6'>Sign Up</h3>
        <div className='m-4 px-2'>
            <label htmlFor='username' className='block text-sm font-medium mb-1'>Username</label>
            <input type='text' id='username' className='border border-gray-300 rounded-md p-2 w-full' placeholder='Enter your username' />
        </div>
        <div className='m-4 px-2'>
            <label htmlFor='email' className='block text-sm font-medium mb-1'>Email</label>
            <input type='email' id='email' className='border border-gray-300 rounded-md p-2 w-full' placeholder='Enter your email' />
        </div>
        <div className='m-4 px-2'>
            <label htmlFor='password' className='block text-sm font-medium mb-1'>Password</label>
            <input type='password' id='password' className='border border-gray-300 rounded-md p-2 w-full' placeholder='Enter your password' />
        </div>
        <div className='m-4 px-2'>
            <label htmlFor='confirm-password' className='block text-sm font-medium mb-1'>Confirm Password</label>
            <input type='password' id='confirm-password' className='border border-gray-300 rounded-md p-2 w-full' placeholder='Confirm your password' />
        </div>
        <div className='m-4 px-2 pt-3'>
            <button type='submit' className='w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600'>Sign Up</button>
        </div>
        <div className='text-center text-sm text-gray-500 py-3'>
            Already have an account? <a href='/auth/login' className='text-blue-500 hover:underline'>Log In</a>
        </div>
    </form>
}
export default Signup;