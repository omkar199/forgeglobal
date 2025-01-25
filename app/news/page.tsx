'use client';
import React from 'react';
import {
  TextField,
  InputAdornment,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';
import Image from 'next/image';
import { NewsData } from '@/helper/data';
import NewsTable from '../components/NewsTable/NewsTable';

const News = () => {
  return (
    <div className='p-6 md:p-2'>
      <div className='px-6 md:px-2'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl font-bold'>News</h1>
          <div className='flex gap-2 md:flex-col'>
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
            <div>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        '&.Mui-checked': {
                          color: 'black',
                        },
                        '& .MuiIconButton-root': {
                          borderRadius: '50%',
                        },
                      }}
                    />
                  }
                  label='Only Watchlist companies'
                  sx={{
                    '& .MuiFormControlLabel-label': {
                      fontSize: '14px',
                      fontFamily:
                        'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                      fontWeight: 400,
                      lineHeight: '20px',
                      color: 'rgb(33, 42, 54)',
                    },
                  }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        '&.Mui-checked': {
                          color: 'black',
                        },
                        '& .MuiIconButton-root': {
                          borderRadius: '50%',
                        },
                      }}
                    />
                  }
                  label='Only highlighted news'
                  sx={{
                    '& .MuiFormControlLabel-label': {
                      fontSize: '14px',
                      fontFamily:
                        'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                      fontWeight: 400,
                      lineHeight: '20px',
                      color: 'rgb(33, 42, 54)',
                    },
                  }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{
                        '&.Mui-checked': {
                          color: 'black',
                        },
                        '& .MuiIconButton-root': {
                          borderRadius: '50%',
                        },
                      }}
                    />
                  }
                  label='Include companies without bids or asks'
                  sx={{
                    '& .MuiFormControlLabel-label': {
                      fontSize: '14px',
                      fontFamily:
                        'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                      fontWeight: 400,
                      lineHeight: '20px',
                      color: 'rgb(33, 42, 54)',
                    },
                  }}
                />
              </FormGroup>
            </div>
            <div className='flex gap-2'>
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
                  color: 'rgb(0, 0, 0)', // Black text
                  padding: '8px 16px',
                  border: '1px solid rgb(0, 0, 0)', // Black border
                }}
              >
                Filter
              </Button>
              <Button
                variant='contained'
                size='small'
                sx={{
                  width: '98.5156px',
                  height: '40px',
                  borderRadius: '6px',
                  background: 'rgb(33, 42, 54)',
                  color: 'white',
                  fontSize: '14px',
                  fontFamily:
                    'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                  fontWeight: 500,
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  lineHeight: '20px',
                  padding: '8px 16px',
                  border: '1px solid rgb(0, 0, 0)', // Black border
                }}
              >
                Subscribe
              </Button>
            </div>
          </div>
          <div>
            <NewsTable data={NewsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
