import React from 'react';
import { TradeDataType } from '@/app/types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Image from 'next/image';

const TradeTable: React.FC<{ data: TradeDataType[] }> = ({ data }) => {
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
                Type
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
                Closed Date
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
                Upload Date
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
                Price Per Share{' '}
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
                Price vs Last Round
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
                Price vs Market Price
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
                Volume
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
                    padding: '8px 16px',
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
                  padding='none'
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
                  <div className='w-[111.844px] h-[20px] p-[2px_10px] border-0 inline-flex items-center box-border rounded-full bg-[rgb(219,234,254)]'>
                    <p className='text-[12px] font-[500] whitespace-nowrap leading-[16px] text-[rgb(30,64,175)]'>
                      {row.type}
                    </p>
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
                  <p
                    className='text-[14px] font-[400] whitespace-nowrap leading-[20px] text-[rgb(33,42,54)]'
                    style={{
                      fontFamily:
                        'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    }}
                  >
                    {row.closedDate}
                  </p>
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
                  <p
                    className='text-[14px] font-[400] whitespace-nowrap leading-[20px] text-[rgb(33,42,54)]'
                    style={{
                      fontFamily:
                        'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    }}
                  >
                    {row.uploadDate}
                  </p>
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
                  <p
                    className='text-[14px] font-[400] whitespace-nowrap leading-[20px] text-[rgb(33,42,54)]'
                    style={{
                      fontFamily:
                        'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    }}
                  >
                    {row.pricePerShare}
                  </p>
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
                  <p
                    className='text-[14px] font-[400] whitespace-nowrap leading-[20px] text-[rgb(33,42,54)]'
                    style={{
                      fontFamily:
                        'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    }}
                  >
                    {row.estValuation}
                  </p>
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
                  <p
                    className={` text-[14px] font-[400] whitespace-nowrap leading-[20px] ${
                      row.priceVsLastRound &&
                      (row.priceVsLastRound.startsWith('+') ||
                        Number(row.priceVsLastRound) > 0)
                        ? 'text-green-500'
                        : 'text-red-500'
                    }`}
                  >
                    {row.priceVsLastRound}
                  </p>
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
                  <p
                    className={`text-[14px] font-[400] whitespace-nowrap leading-[20px] ${
                      row.priceVsMarketPrice &&
                      (row.priceVsMarketPrice.startsWith('+') ||
                        Number(row.priceVsMarketPrice) > 0)
                        ? 'text-green-500'
                        : 'text-red-500'
                    }`}
                  >
                    {row.priceVsMarketPrice}
                  </p>
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
                  <p
                    className='text-[14px] font-[400] whitespace-nowrap leading-[20px] text-[rgb(33,42,54)]'
                    style={{
                      fontFamily:
                        'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    }}
                  >
                    {row.volume}
                  </p>
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
                  <p
                    className='text-[14px] font-[400] whitespace-nowrap leading-[20px] text-[rgb(33,42,54)]'
                    style={{
                      fontFamily:
                        'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    }}
                  >
                    {row.structure}
                  </p>
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
                  <p
                    className='text-[14px] font-[400] whitespace-nowrap leading-[20px] text-[rgb(33,42,54)]'
                    style={{
                      fontFamily:
                        'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    }}
                  >
                    {row.shareClass}
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TradeTable;
