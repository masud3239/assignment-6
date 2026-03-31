import React from 'react';

const Status = () => {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-purple-500 text-white py-10 text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className='md:border-r md:border-white/40'>
          <h2 className="text-6xl font-extrabold">50K+</h2>
          <p className="text-2xl font-medium">Active Users</p>
        </div>

        <div className='md:border-r md:border-white/40'>
          <h2 className="text-6xl font-extrabold">200+</h2>
          <p className="text-2xl font-medium">Premium Tools</p>
        </div>

        <div>
          <h2 className="text-6xl font-extrabold">4.9</h2>
          <p className="text-2xl font-medium">Rating</p>
        </div>
      </div>
    </div>
    );
};

export default Status;