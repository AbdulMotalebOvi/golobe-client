import React from 'react';

const Spinner = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-[240px] text-center'>
            <progress className="progress w-56"></progress>
        </div>
    );
};

export default Spinner;