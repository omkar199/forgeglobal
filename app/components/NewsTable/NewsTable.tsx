import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { NewsDatatype } from '@/app/types';

const NewsTable: React.FC<{ data: NewsDatatype[] }> = ({ data }) => {
  return (
    <div>
      <TableContainer
        className='rounded-md border border-[#171717]'
        style={{ borderRadius: '8px' }}
      >
        <Table>
          <TableHead>
            <TableRow className=''>
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
                Headline
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
                Sector
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
                Date
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
                Sentiment
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={index}
                className=''
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
                    {row.company}
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
                  <p className='text-blue-600 text-base font-normal leading-6 hover:underline cursor-pointer'>
                    {row.headline}
                  </p>
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
                  {row.sector}
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
                  {row.date}
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
                  <div
                    className={`w-2 h-2 rounded-full mx-2 ${
                      row.sentiment === 'Positive'
                        ? 'bg-green-500'
                        : 'bg-red-500'
                    }`}
                  ></div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default NewsTable;
