import React from 'react';

type ResetProps = {
    
};

const Reset:React.FC<ResetProps> = () => {
    
    return (
    <div>
        <h3 className='text-2xl font-bold text-center mb-6'>Reset Password</h3>
        <div className='m-4 px-2'>
            <label htmlFor='email' className='block text-sm font-medium mb-1'>Forgot your password? We will send you an email to reset your password</label>
            <input type='email' id='email' className='border border-gray-300 rounded-md p-2 mt-4 w-full' placeholder='Enter your email' />
        </div>
        <div className='m-4 px-2 pt-3'>
            <button type='submit' className='w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600'>Reset Password</button>
        </div>
    </div>
    );
}
export default Reset;