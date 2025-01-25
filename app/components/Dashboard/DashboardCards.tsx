'use client';
import { Button } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import React from 'react';

const DashboardCards = () => {
  const [clicked, setClicked] = useState(false);
  console.log('🚀 ~ DashboardCards ~ clicked:', clicked);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className='rounded-lg border-[1px] border-black w-[365px] h-[345px] md:w-auto'>
      <div className='flex justify-start items-center p-6 gap-4 border-b-[0.5px] border-b-solid border-b-[rgb(148,162,184)]'>
        <div className='w-10 h-10 bg-slate-100 rounded-md flex justify-center items-center '>
          <Image
            className='rounded-lg'
            src='/placeholder.svg'
            alt='logo'
            width={24}
            height={24}
          />
        </div>
        <h3 className='text-xl tracking-tight font-semibold'>Turo</h3>
      </div>
      <div className='p-6 flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <div className='w-full flex justify-between items-center'>
            <p
              className='text-slate-600 text-base font-normal leading-7
'
            >
              Price Per Share
            </p>
            <p
              className='font-semibold
 font-base leading-7 text-slate-900'
            >
              $12.00
            </p>
          </div>
          <div className='w-full flex justify-between items-center'>
            <p
              className='text-slate-600 text-base font-normal leading-7
'
            >
              Security Type
            </p>
            <p
              className='font-normal
 font-base leading-7 text-slate-900'
            >
              Common Stock
            </p>
          </div>
          <div className='w-full flex justify-between items-center'>
            <p
              className='text-slate-600 text-base font-normal leading-7
'
            >
              Last Round Price Per Share
            </p>
            <p
              className='font-normal
 font-base leading-7 text-slate-900'
            >
              $10.14{' '}
            </p>
          </div>
          <div className='w-full flex justify-between items-center'>
            <p
              className='text-slate-600 text-base font-normal leading-7
'
            >
              Last Round Date
            </p>
            <p
              className='font-normal
 font-base leading-7 text-slate-900'
            >
              Feb 2020
            </p>
          </div>
          <div className='w-full flex justify-between items-center'>
            <p
              className='text-slate-600 text-base font-normal leading-7
'
            >
              Last Round Valuation
            </p>
            <p
              className='font-normal
 font-base leading-7 text-slate-900'
            >
              $1.24B
            </p>
          </div>
        </div>
        <div>
          <Button
            variant='outlined'
            fullWidth
            onClick={handleClick}
            sx={{
              borderColor: '#ea580b',
              color: '#ea580b',
              // color: clicked ? 'black' : '',
              fontWeight: '500',
              fontSize: '14px',
              font: 'bold',
              borderRadius: '6px',
              borderWidth: '2px',
              '&:hover': {
                borderColor: '#ea580b',
                color: '#ea580b',
              },
            }}
          >
            INDICATE INTEREST
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
