import React from 'react';
import Delete from '../assets/delete.svg';
import Flag from '../assets/flag.svg';
import Pencil from '../assets/pencil.svg';
import Call from '../assets/phone.svg';

const Card = (props) => {
    return (
        <div className='py-4'>
            <div className='rounded overflow-hidden shadow-md hover:shadow-lg max-w-sm'>
                <div className='px-4 py-4'>
                    <h3 className='font-bold text-xl mb-1 text-gray-700'>{props.name}</h3>
                    <p className='text-gray-600'>{props.email}</p>
                    <div className='flex items-center'>
                        <img src={Call} alt='phone' className='h-5 w-5 pr-1' />
                        <p className='text-gray-600'>{props.phone}</p>
                    </div>
                    <p className='text-gray-600'>{props.country} <span>({props.city})</span></p>
                </div>
                <div className='grid grid-cols-3 gap-5 pb-2 px-4 justify-items-center'>
                    <button>
                        <img className='h-6 w-6' src={Pencil} alt='Pencil' />
                    </button>
                    <button>
                        <img className='h-6 w-6' src={Flag} alt='Flag' />
                    </button>
                    <button>
                        <img className='h-6 w-6' src={Delete} alt='Delete' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card