import React from 'react';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
    
    return <form>
        <h3 className='text-2xl font-bold text-center mb-6'>Sign In</h3>
        <div className='m-4 px-2'>
            <label htmlFor='email' className='block text-sm font-medium mb-1'>Email</label>
            <input type='email' id='email' className='border border-gray-300 rounded-md p-2 w-full' placeholder='Enter your email' />
        </div>
        <div className='m-4 px-2'>
            <label htmlFor='password' className='block text-sm font-medium mb-1'>Password</label>
            <input type='password' id='password' className='border border-gray-300 rounded-md p-2 w-full' placeholder='Enter your password' />
        </div>
        <div className='m-4 px-2'>
            <button type='submit' className='w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600'>Log In</button>
        </div>
        <div className='m-4 px-2'>
            <button type='button' className='w-full bg-gray-300 text-gray-800 rounded-md p-2 hover:bg-gray-400'>Forgot Password ?</button>
        </div>
        <div className='text-center text-sm text-gray-500 py-3'>
            Don't have an account? <a href='/auth/signup' className='text-blue-500 hover:underline'>Sign Up</a>
        </div>
    </form>
}
export default Login;