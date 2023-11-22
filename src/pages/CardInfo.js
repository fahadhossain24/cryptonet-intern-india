import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const CardInfo = () => {
    const [cardData, setCardData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
            .then(res => res.json())
            .then(data => {
                if(data.results.length !== 0){
                    setCardData(data.results);
                    setLoading(false);
                }else{
                    alert('data not found');
                    // setLoading(false);
                }
            });
    }, [])

    return (
        <div>
            {
                loading ? <p className='text-center text-2xl mt-10'>Loading...</p> : <Card cardData={cardData}/>
            }
        </div>
    );
};

export default CardInfo;