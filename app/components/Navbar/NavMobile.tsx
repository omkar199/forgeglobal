'use client';
import React, { useState } from 'react';
import { List, X } from '@phosphor-icons/react';
import { Drawer, IconButton } from '@mui/material';
import NavLinks from './NavLinks';

const NavMobile = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <div>
        <IconButton onClick={toggleDrawer}>
          <List size={24} />
        </IconButton>

        <Drawer anchor='left' open={isDrawerOpen} onClose={toggleDrawer}>
          <IconButton
            onClick={toggleDrawer}
            style={{ justifyContent: 'flex-start', padding: '10px' }}
          >
            <X size={24} />
          </IconButton>
          <div className='w-auto'>
            <NavLinks />
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default NavMobile;
