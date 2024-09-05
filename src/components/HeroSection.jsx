import React, { useState, useEffect } from 'react'
import Card from './Card';
import axios from 'axios';
import Modal from './Modal';
import Footer from './Footer';


const HeroSection = () => {

    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [clickedItem, setClickedItem] = useState("");

    useEffect(() => {
        axios.get("https://freetestapi.com/api/v1/students")
            .then((res) => setMyData(res.data))
            .catch((err) => setIsError(err.message));
    }, []);

    const handleOnClose = () => setShowModal(false);


    return (
        <>
            {isError !== "" && <h1 className='text-red-700'>{isError}</h1>}
            <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 lg:gap-1 justify-items-center mt-10'>
                {myData.map((item, index) => {
                    const { name, address, email, phone } = item;
                    return (
                        <div className='rounded shadow-md hover:shadow-lg container mx-auto overflow-hidden' key={index} onClick={() => {
                            setShowModal(true)
                            setClickedItem(index);
                        }}>
                            <Card name={name} email={email} phone={phone} country={address.country} city={address.city} />
                        </div>
                    )
                })}
            </div>
            <Footer />

            <Modal onClose={handleOnClose} visible={showModal} apiData={myData[clickedItem]} />
        </>
    )
}

export default HeroSection