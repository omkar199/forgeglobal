'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button, InputAdornment, TextField } from '@mui/material';
import TradeTable from '../components/TradeTable/TradeTable';
import { TradeData } from '@/helper/data';
import TablePagination from '../components/CompanyTable/TablePagination';

const Trade = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(TradeData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className='p-6'>
      <div className='px-4'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl font-bold'>Trade</h1>
          {/* search and filters */}
          <div className='flex justify-start items-center gap-2'>
            <TextField
              variant='outlined'
              placeholder='Search Trades . . .'
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
              variant='outlined'
              size='small'
              sx={{
                width: '67.5625px',
                height: '40px',
                borderRadius: '6px',
                fontSize: '14px',
                fontFamily:
                  'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                fontWeight: 500,
                textAlign: 'center',
                whiteSpace: 'nowrap',
                lineHeight: '20px',
                color: 'rgb(0, 0, 0)',
                padding: '8px 16px',
                border: '1px solid rgb(0, 0, 0)',
              }}
            >
              Filters
            </Button>
            <Button
              variant='outlined'
              size='small'
              sx={{
                width: '67.5625px',
                height: '40px',
                borderRadius: '6px',
                fontSize: '14px',
                fontFamily:
                  'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                fontWeight: 500,
                textAlign: 'center',
                whiteSpace: 'nowrap',
                lineHeight: '20px',
                color: 'rgb(0, 0, 0)',
                padding: '8px 16px',
                border: '1px solid rgb(0, 0, 0)',
              }}
            >
              Sort
            </Button>
          </div>
          {/* Table & Pagination */}
          <div className='flex flex-col gap-4 w-full'>
            <TradeTable data={TradeData} />
            <TablePagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
