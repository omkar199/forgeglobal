'use client';
import React from 'react';
import { Box, Pagination } from '@mui/material';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const TablePagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  return (
    <Box className='flex items-center justify-between mt-4'>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(_, page) => onPageChange(page)}
        variant='outlined'
        shape='rounded'
        siblingCount={1}
        boundaryCount={1}
      />
      <div className='flex gap-2 justify-center items-center'>
        show
        <button
          className={`px-4 py-2 rounded-lg font-medium text-sm bg-white text-gray-900 border border-[#171717] hover:bg-gray-100`}
        >
          {currentPage}{' '}
        </button>
        {totalPages} companis found
      </div>
    </Box>
  );
};

export default TablePagination;
