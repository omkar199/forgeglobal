'use client';
import React from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Eye, ArrowUpRight } from '@phosphor-icons/react';
import { MarketDataType } from '@/app/types';
import Image from 'next/image';

const MarketTable: React.FC<{ data: MarketDataType[] }> = ({ data }) => {
  return (
    <>
      <TableContainer
        className='rounded-md border border-[#171717]'
        style={{ borderRadius: '8px' }}
      >
        <Table>
          <TableHead>
            <TableRow className='hover:bg-[#c8d0db]'>
              <TableCell
                className='font-semibold text-left text-sm leading-5'
                sx={{
                  fontSize: '14px',
                  fontFamily:
                    'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  lineHeight: '20px',
                  color: 'rgb(33, 42, 54)',
                }}
              >
                Company
              </TableCell>
              <TableCell
                className='font-semibold text-left text-sm leading-5'
                sx={{
                  fontSize: '14px',
                  fontFamily:
                    'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  lineHeight: '20px',
                  color: 'rgb(33, 42, 54)',
                }}
              >
                type
              </TableCell>
              <TableCell
                className='font-semibold text-left text-sm leading-5'
                sx={{
                  fontSize: '14px',
                  fontFamily:
                    'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  lineHeight: '20px',
                  color: 'rgb(33, 42, 54)',
                }}
              >
                Price
              </TableCell>

              <TableCell
                className='font-semibold text-left text-sm leading-5'
                sx={{
                  fontSize: '14px',
                  fontFamily:
                    'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  lineHeight: '20px',
                  color: 'rgb(33, 42, 54)',
                }}
              >
                Size
              </TableCell>
              <TableCell
                className='font-semibold text-left text-sm leading-5'
                sx={{
                  fontSize: '14px',
                  fontFamily:
                    'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  lineHeight: '20px',
                  color: 'rgb(33, 42, 54)',
                }}
              >
                Structure
              </TableCell>
              <TableCell
                className='font-semibold text-left text-sm leading-5'
                sx={{
                  fontSize: '14px',
                  fontFamily:
                    'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  lineHeight: '20px',
                  color: 'rgb(33, 42, 54)',
                }}
              >
                Share Class
              </TableCell>
              <TableCell
                className='font-semibold text-left text-sm leading-5'
                sx={{
                  fontSize: '14px',
                  fontFamily:
                    'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  lineHeight: '20px',
                  color: 'rgb(33, 42, 54)',
                }}
              >
                Source
              </TableCell>
              <TableCell
                className='font-semibold text-left text-sm leading-5'
                sx={{
                  fontSize: '14px',
                  fontFamily:
                    'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  lineHeight: '20px',
                  color: 'rgb(33, 42, 54)',
                }}
              >
                Updated
              </TableCell>
              <TableCell
                className='font-semibold text-left text-sm leading-5'
                sx={{
                  fontSize: '14px',
                  fontFamily:
                    'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  lineHeight: '20px',
                  color: 'rgb(33, 42, 54)',
                }}
              >
                Submitted
              </TableCell>
              <TableCell
                className='font-semibold text-left text-sm leading-5'
                sx={{
                  fontSize: '14px',
                  fontFamily:
                    'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  lineHeight: '20px',
                  color: 'rgb(33, 42, 54)',
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={index}
                className='hover:bg-[#c8d0db]'
                // sx={{
                //   borderTop: '1.4px solid #171717', // Add border to each row
                // }}
              >
                <TableCell
                  className='flex items-center'
                  sx={{
                    fontSize: '14px',
                    fontFamily:
                      'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    lineHeight: '20px',
                    color: 'rgb(33, 42, 54)',
                  }}
                >
                  <div className='flex justify-start items-center px-2'>
                    <Image
                      className='rounded-lg mr-2'
                      src='/placeholder.svg'
                      alt='logo'
                      width={24}
                      height={24}
                    />
                    <p className='text-[14px] font-[500] whitespace-nowrap leading-[20px] text-[rgb(33,42,54)]'>
                      {row.company}
                    </p>
                  </div>
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '14px',
                    fontFamily:
                      'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    lineHeight: '20px',
                    // color: 'rgb(33, 42, 54)',
                    padding: '8px 16px',
                  }}
                >
                  <div
                    className={`w-auto h-[20px] p-[2px_10px] border-0 inline-flex items-center box-border rounded-full 
    ${row.type === 'BID' ? 'bg-red-500' : 'bg-black'}`}
                  >
                    <p className='text-[12px] font-[500] whitespace-nowrap leading-[16px] text-white'>
                      {row.type}
                    </p>
                  </div>
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '14px',
                    fontFamily:
                      'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    lineHeight: '20px',
                    color: 'rgb(33, 42, 54)',
                    padding: '8px 16px',
                  }}
                >
                  <div className='flex flex-col px-4'>
                    <p>{row.price}</p>
                    <p
                      className={`text-[14px] font-[400] whitespace-nowrap leading-[20px] ${
                        row.priceVsLast?.startsWith('-')
                          ? 'text-red-500'
                          : 'text-green-500'
                      }`}
                    >
                      {row.priceVsLast}
                    </p>
                    <p
                      className={`text-[14px] font-[400] whitespace-nowrap leading-[20px] ${
                        row.priceVsMarket?.startsWith('-')
                          ? 'text-red-500'
                          : 'text-green-500'
                      }`}
                    >
                      {row.priceVsMarket}
                    </p>
                  </div>
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '14px',
                    fontFamily:
                      'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    lineHeight: '20px',
                    color: 'rgb(33, 42, 54)',
                    padding: '8px 16px',
                  }}
                >
                  {row.size}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '14px',
                    fontFamily:
                      'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    lineHeight: '20px',
                    color: 'rgb(33, 42, 54)',
                    padding: '8px 16px',
                  }}
                >
                  {row.structure}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '14px',
                    fontFamily:
                      'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    lineHeight: '20px',
                    color: 'rgb(33, 42, 54)',
                    padding: '8px 16px',
                  }}
                >
                  {row.shareClass}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '14px',
                    fontFamily:
                      'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    lineHeight: '20px',
                    color: 'rgb(33, 42, 54)',
                    padding: '8px 16px',
                  }}
                >
                  <div className='w-auto h-[20px] p-[2px_10px] border-0 inline-flex items-center box-border rounded-full bg-[rgb(219,234,254)]'>
                    <p className='text-[12px] font-[500] whitespace-nowrap leading-[16px] text-[rgb(30,64,175)]'>
                      {row.source}
                    </p>
                  </div>
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '14px',
                    fontFamily:
                      'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    lineHeight: '20px',
                    color: 'rgb(33, 42, 54)',
                    padding: '8px 16px',
                  }}
                >
                  {row.updated}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '14px',
                    fontFamily:
                      'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    lineHeight: '20px',
                    color: 'rgb(33, 42, 54)',
                    padding: '8px 16px',
                  }}
                >
                  {row.submitted}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '14px',
                    fontFamily:
                      'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    lineHeight: '20px',
                    color: 'rgb(33, 42, 54)',
                    padding: '20px 16px',
                    display: 'flex', // Ensure it's using flex
                    gap: 0, // Reset the gap property
                  }}
                  className='flex' // Apply flex here
                >
                  <Button
                    variant='outlined'
                    size='small'
                    startIcon={<Eye size={16} />}
                    sx={{
                      width: 'auto',
                      height: '36px',
                      borderRadius: '6px',
                      color: 'black',
                      fontSize: '14px',
                      fontFamily:
                        'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                      fontWeight: 500,
                      textAlign: 'center',
                      whiteSpace: 'nowrap',
                      lineHeight: '20px',
                      padding: '2px 8px',
                      border: '1px solid rgb(0, 0, 0)', // Black border
                      textTransform: 'none', // Prevent uppercase text
                      marginRight: '8px', // Add right margin to create space between buttons
                    }}
                  >
                    View
                  </Button>
                  <Button
                    variant='contained'
                    size='small'
                    startIcon={<ArrowUpRight size={16} />}
                    sx={{
                      width: 'auto',
                      height: '36px',
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
                      padding: '2px 8px',
                      border: '1px solid rgb(0, 0, 0)',
                      textTransform: 'none',
                    }}
                  >
                    Contact
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MarketTable;
