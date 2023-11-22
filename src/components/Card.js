import React from 'react';

const Card = ({ cardData }) => {
    return (
        <div>
            {
                cardData.map((item, index) => (
                    <div key={index} className='w-[40%] mx-auto flex gap-5 border-4 border-black items-center mt-10 p-4'>
                        <div className='border-2 border-red'>
                            <img src={item.picture.medium} alt="" className='w-[100px] h-[100px]'/>
                        </div>
                        <div className='text-black font-semibold text-xl'>
                            <div className='flex gap-3'>
                                <h2>{item.name.first}</h2>
                                <h2>{item.name.last}</h2>
                            </div>
                            <p>{item.gender}</p>
                            <p>{item.phone}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Card;