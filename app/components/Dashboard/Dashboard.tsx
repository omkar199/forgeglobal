'use client';
import { Button } from '@mui/material';
import { useState } from 'react';
import React from 'react';
import DashboardCards from './DashboardCards';

const Dashboard = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className='p-6 md:p-2'>
      <div className='px-8 md:px-4'>
        <div className='flex justify-between items-center md:flex-col md:gap-2'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-3xl font-bold text-slate-900 md:text-2xl'>
              Direct Investment Opportunities
            </h1>
            <p>
              If you are interested in investing in companies not listed below,
              please visit Companies or contact your Private Market Specialist.
            </p>
          </div>
          <Button
            variant='outlined'
            onClick={handleClick}
            sx={{
              borderColor: 'black',
              color: clicked ? 'black' : '',
              fontWeight: '500',
              fontSize: '14px',
              borderRadius: '6px',
              '&:hover': {
                borderColor: 'black',
                color: 'black',
              },
            }}
          >
            See All 9
          </Button>
        </div>
        <div className='mt-4 grid grid-cols-3 gap-8 md:flex md:flex-col'>
          <DashboardCards />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
