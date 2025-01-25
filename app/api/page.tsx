'use client';
import React from 'react';
import { TextField, InputAdornment, Chip } from '@mui/material';
import Image from 'next/image';
import ApiCards from '../components/ApiCards/ApiCards';

const actions = [
  'Get MarketPrice History',
  'Get MarketPrice end-of...',
  'Get all MarketPrice',
  'Get Live Orderbook',
  'Get Trade History',
  'Get Company Filings',
  'Get Stocks Splits',
];

const CodeResponse = [
  'Get MarketPrice History',
  'Get MarketPrice end-of-day History',
  'Get all MarketPrice',
  'Get Live Orderbook',
  'Get Trade History',
  'Get Company Filings',
  'Get Stocks Splits',
];

const API = () => {
  return (
    <div className='p-6 md:p-2'>
      <div className='px-8 md:px-2 flex md:flex-col'>
        <div className='flex-1 bg-[#e9ecf0] p-4 h-screen flex flex-col justify-start items-start gap-4'>
          <TextField
            variant='outlined'
            placeholder='Search...'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Image
                    className=''
                    src='/search.svg'
                    alt='logo'
                    width={15}
                    height={15}
                    priority
                  />
                </InputAdornment>
              ),
            }}
            className='rounded-lg bg-white'
            sx={{
              width: '250px',
              height: '40px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                height: '40px',
                '& fieldset': {
                  borderColor: '#94a2b8',
                },
                '&:hover fieldset': {
                  borderColor: '#94a2b8',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#94a2b8',
                },
              },
              '& .MuiInputAdornment-root': {
                color: '#94a2b8',
              },
            }}
          />

          <div className='flex flex-col gap-4'>
            {actions.map((action: string, index: number) => (
              <div
                key={index}
                className='flex justify-start items-center gap-2 hover:bg-[#f2f5f7] rounded-lg p-2'
              >
                <Chip
                  label='GET'
                  className='!rounded-[4px] !w-[auto] !h-[20px] !text-[14px] !font-medium !leading-[16px] !text-[rgb(33,42,54)] !bg-[rgba(33,42,54,0.1)] !px-[0px] !py-[4px]'
                />
                <p className='text-[14px] font-sans font-normal leading-[20px] text-[rgb(33,42,54)]'>
                  {action}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='flex-[2] flex-col overflow-y-auto bg-white p-6 gap-4 flex h-screen md:p-2'>
          <h1 className='text-2xl font-bold'>API Documentation</h1>
          <div className='flex flex-col gap-4'>
            <ApiCards />
          </div>
        </div>

        <div className='flex-1 bg-[#e9ecf0] p-4 flex flex-col gap-4 h-screen'>
          <h3 className='text-[12px] font-mono font-semibold leading-[16px] text-[rgba(33,42,54,0.7)]'>
            Code Response
          </h3>

          <div className='flex flex-col gap-2'>
            {CodeResponse.map((action, index) => (
              <p
                key={index}
                className='text-[12px] font-mono font-semibold leading-[16px] text-[rgba(33,42,54,0.7)]'
              >
                {action}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default API;
