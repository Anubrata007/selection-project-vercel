import React from 'react'

const Modal = ({ visible, onClose, apiData }) => {

    const handleOnClose = () => {
        onClose()
    };

    if (!visible) return null;

    return (
        <div onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className="bg-white p-10 rounded-lg shadow-md">
                <h1 className="text-xl font-bold">{apiData.name}</h1>
                <p className="tracking-wide">AGE: {apiData.age}</p>
                <p className="tracking-wide">{apiData.email}</p>
                <p className="tracking-wide">{apiData.phone}</p>
                <div className="mt-4 mb-10">
                    <p className="text-gray-600">Course 75% completed</p>
                    <div className="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                        <div className="bg-teal-400 w-3/4 h-full rounded-lg shadow-md"></div>
                    </div>
                </div>
                <h3 className="text-xs uppercase">Course:</h3>
                <h2 className="tracking-wide">
                    {apiData.courses[0]}, {apiData.courses[1]}
                    <br />
                    (GPA: {apiData.gpa})
                </h2>
                <button className="bg-teal-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75">Go back</button>
            </div>
        </div>
    )
}

export default Modal