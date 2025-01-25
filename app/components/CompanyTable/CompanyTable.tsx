import { CompanyData } from '@/app/types';
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Image from 'next/image';

const CompanyTable: React.FC<{ data: CompanyData[] }> = ({ data }) => {
  return (
    <div className='w-full'>
      <TableContainer
        className='rounded-md border border-[#171717]'
        style={{ borderRadius: '8px' }}
      >
        <Table>
          <TableHead>
            <TableRow className=' hover:bg-[#c8d0db]'>
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
                MarketPrice
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
                Est. Valuation
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
                vs Last Round
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
                Performance (3M)
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
                Last Primary Round
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
                Last Trade
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
                Recent Trading History
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={index}
                className='hover:bg-[#c8d0db] transition-colors duration-200'
                // sx={{
                //   borderTop: '1.4px solid #171717', // Add border to each row
                // }}
              >
                <TableCell
                  padding='none'
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
                  <div className='flex justify-center items-center'>
                    <div className='w-2 h-2 rounded-full bg-green-500 mx-2'></div>
                    <Image
                      className='rounded-lg mr-2'
                      src='/placeholder.svg'
                      alt='logo'
                      width={24}
                      height={24}
                    />
                    {row.company}
                  </div>
                </TableCell>
                <TableCell
                  padding='none'
                  width={100}
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
                  ${row.marketPrice}
                </TableCell>
                <TableCell
                  padding='none'
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
                  ${row.estValuation}
                </TableCell>
                <TableCell
                  padding='none'
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
                  <div
                    className={
                      row.vsLastRound.startsWith('↓')
                        ? 'text-red-500'
                        : 'text-green-500'
                    }
                  >
                    {row.vsLastRound}
                  </div>
                </TableCell>
                <TableCell
                  padding='none'
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
                  <div
                    className={`${
                      row.performance3M.startsWith('↓')
                        ? 'text-red-600'
                        : 'text-green-600'
                    }`}
                  >
                    {row.performance3M}
                  </div>
                </TableCell>

                <TableCell
                  padding='none'
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
                    <p>{row.lastPrimaryRound.Amount}</p>
                    <p>{row.lastPrimaryRound.volume}</p>
                    <p>{row.lastPrimaryRound.date}</p>
                  </div>
                </TableCell>
                <TableCell
                  padding='none'
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
                    <p>{row.lastTrade.Amount}</p>
                    <p>{row.lastTrade.volume}</p>
                    <p>{row.lastTrade.date}</p>
                  </div>
                </TableCell>
                <TableCell
                  padding='none'
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
                    <p>{row.recentTradingHistory.Amount}</p>
                    <p>{row.recentTradingHistory.volume}</p>
                    <p>{row.recentTradingHistory.bid_volume} bid volume</p>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CompanyTable;
