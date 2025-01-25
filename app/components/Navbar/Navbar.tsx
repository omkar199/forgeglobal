'use client';
import React from 'react';
import NavLinks from '@/app/components/Navbar/NavLinks';
import { TextField, InputAdornment } from '@mui/material';
import Image from 'next/image';
import NavMobile from './NavMobile';

const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className='flex h-screen'>
        <div className='flex-none w-1/6 border-t-2 md:hidden'>
          <NavLinks />
        </div>
        <div className='flex-grow flex-col border-[1px] border-black  overflow-y-auto'>
          <div className='border-b-[1px] border-black p-4 flex items-center'>
            <div className='md:block hidden md:mr-2'>
              <NavMobile />
            </div>
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
              className='rounded-lg bg-white !md:w-auto'
              sx={{
                width: '500px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  height: '40px',
                  '& fieldset': {
                    borderColor: '#171717',
                  },
                  '&:hover fieldset': {
                    borderColor: '#171717',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#171717',
                  },
                },
                '& .MuiInputAdornment-root': {
                  color: '#171717',
                },
              }}
            />
          </div>
          <div className=''>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
