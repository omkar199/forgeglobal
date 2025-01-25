'use client';
import React from 'react';
import { useState } from 'react';
import { TextField } from '@mui/material';
import CompanyTable from '../components/CompanyTable/CompanyTable';
import TablePagination from '../components/CompanyTable/TablePagination';
import { CompanyData } from '@/helper/data';

const Companies = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isMarketPriceSelected, setIsMarketPriceSelected] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(CompanyData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedData = CompanyData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  console.log('🚀 ~ Companies ~ paginatedData:', paginatedData, setCurrentPage);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const handleMarketPriceClick = () => {
    setIsMarketPriceSelected(!isMarketPriceSelected);
  };

  return (
    <div className='p-6 md:p-2'>
      <div className='px-8 md:px-2'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl font-bold'>All Companies</h1>
          <div className=''>
            <div className='flex flex-col justify-start items-center w-full gap-4'>
              <TextField
                variant='outlined'
                placeholder='Search Companies'
                fullWidth
                className='rounded-lg bg-white'
                sx={{
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
              <div className='flex justify-start items-start gap-2 w-full md:flex-col'>
                <button
                  onClick={handleClick}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-300 border border-[#171717] ${
                    isSelected
                      ? 'bg-gray-900 text-white hover:bg-gray-800 '
                      : 'bg-white text-gray-900  hover:bg-gray-100'
                  }`}
                >
                  Only Watchlist companies
                </button>

                <button
                  onClick={handleMarketPriceClick}
                  className={`px-4 py-2 rounded-lg border border-[#171717] font-medium text-sm transition-colors duration-300 ${
                    isMarketPriceSelected
                      ? 'bg-gray-900 text-white hover:bg-gray-800 '
                      : 'bg-white text-gray-900  hover:bg-gray-100'
                  }`}
                >
                  Only MarketPrice companies
                </button>
                <div className='flex justify-center items-center gap-2 md:flex-col md:mt-2'>
                  <p className='text-sm font-normal'>Time Period</p>
                  <button
                    className={`px-4 py-2 rounded-lg font-medium text-sm bg-white text-gray-900 border border-[#171717] hover:bg-gray-100`}
                  >
                    Only MarketPrice companies
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg font-medium text-sm bg-white text-gray-900 border border-[#171717] hover:bg-gray-100`}
                  >
                    Only MarketPrice companies
                  </button>
                </div>
              </div>

              <div className='w-full'>
                <CompanyTable data={CompanyData} />
                <TablePagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
