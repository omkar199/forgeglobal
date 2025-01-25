'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { MarketData } from '@/helper/data';
import { Button, InputAdornment, TextField } from '@mui/material';
import MarketTable from '../components/MarketTable/MarketTable';
import TablePagination from '../components/CompanyTable/TablePagination';

const Market = () => {
  const [isSelected, setIsSelected] = useState<string>('Offer');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(MarketData.length / itemsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleButtonClick = (button: string) => {
    setIsSelected(button);
  };

  return (
    <div className='p-6'>
      <div className='px-4'>
        {/* header */}
        <div className='flex flex-col gap-4'>
          <div className='flex justify-between items-center'>
            <h1 className='text-3xl font-bold'>Markets</h1>
            <Button
              variant='outlined'
              size='small'
              sx={{
                width: 'auto',
                height: '40px',
                borderRadius: '6px',
                fontSize: '14px',
                fontFamily:
                  'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                fontWeight: 500,
                textAlign: 'center',
                whiteSpace: 'nowrap',
                lineHeight: '20px',
                color: 'rgb(0, 0, 0)', // Black text
                padding: '8px 16px',
                border: '1px solid rgb(0, 0, 0)', // Black border
                textTransform: 'none',
              }}
            >
              Advanced Filters
            </Button>
          </div>
          <div className='flex gap-4'>
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
                width: '900px',
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
            <Button
              variant={isSelected === 'All' ? 'contained' : 'outlined'}
              size='small'
              onClick={() => handleButtonClick('All')}
              sx={{
                width: 'auto',
                height: '40px',
                borderRadius: '6px',
                background: isSelected === 'All' ? 'rgb(33, 42, 54)' : '',
                color: isSelected === 'All' ? 'white' : 'black',
                fontSize: '14px',
                fontFamily:
                  'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                fontWeight: 500,
                textAlign: 'center',
                whiteSpace: 'nowrap',
                lineHeight: '20px',
                padding: '8px 16px',
                border: '1px solid rgb(0, 0, 0)', // Black border
                textTransform: 'none', // Prevent uppercase text
              }}
            >
              All
            </Button>
            <Button
              variant={isSelected === 'Bid' ? 'contained' : 'outlined'}
              size='small'
              onClick={() => handleButtonClick('Bid')}
              sx={{
                width: 'auto',
                height: '40px',
                borderRadius: '6px',
                background: isSelected === 'Bid' ? 'rgb(33, 42, 54)' : '',
                color: isSelected === 'Bid' ? 'white' : 'black',
                fontSize: '14px',
                fontFamily:
                  'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                fontWeight: 500,
                textAlign: 'center',
                whiteSpace: 'nowrap',
                lineHeight: '20px',
                padding: '8px 16px',
                border: '1px solid rgb(0, 0, 0)', // Black border
                textTransform: 'none',
              }}
            >
              Bid
            </Button>
            <Button
              variant={isSelected === 'Offer' ? 'contained' : 'outlined'}
              size='small'
              onClick={() => handleButtonClick('Offer')}
              sx={{
                width: 'auto',
                height: '40px',
                borderRadius: '6px',
                background: isSelected === 'Offer' ? 'rgb(33, 42, 54)' : '',
                color: isSelected === 'Offer' ? 'white' : 'black',
                fontSize: '14px',
                fontFamily:
                  'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                fontWeight: 500,
                textAlign: 'center',
                whiteSpace: 'nowrap',
                lineHeight: '20px',
                padding: '8px 16px',
                border: '1px solid rgb(0, 0, 0)', // Black border
                textTransform: 'none',
              }}
            >
              Offer
            </Button>
          </div>
        </div>
        {/* table and pagination */}
        <div className='flex flex-col gap-2 mt-4'>
          <MarketTable data={MarketData} />
          <TablePagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Market;
