'use client';
import { Chip, Divider } from '@mui/material';
import React from 'react';

const ApiCards = () => {
  const jsonData = {
    companyMeta: {
      name: 'Stripe',
      domain: 'stripe.com',
      caplightId: '12d314bkjf90',
    },
    marketPriceHistory: [{}],
  };
  return (
    <div className='w-[461.297px] h-fit rounded-lg border-[1px] border-[rgb(148,162,184)] shadow-sm md:w-auto'>
      {/* header */}
      <div className='p-6 flex flex-col gap-2 justify-start items-start'>
        <div className='flex justify-start items-center gap-2'>
          <Chip
            label='GET'
            className='!rounded-[4px] !w-[auto] !h-[25px] !text-[14px] !font-medium !leading-[16px] !text-[rgb(33,42,54)] !bg-[rgba(33,42,54,0.1)] !px-[0px] !py-[4px]'
          />
          <p className='text-[14px] font-mono font-normal leading-[20px] text-[rgb(33,42,54)]'>
            / market-price-history
          </p>
        </div>
        <h1 className='text-[20px] font-semibold leading-[28px] text-[rgb(33,42,54)] tracking-[-0.5px] font-sans'>
          Get MarketPrice history
        </h1>
        <p className='text-[14px] font-normal leading-[20px] text-[rgb(33,42,54)] font-sans'>
          Returns MarketPrice estimate history for a company by lookup field.
          One (and only one) lookup field must be provided.
        </p>
      </div>
      {/* body */}
      <div className='px-6 pb-6'>
        <h3 className='text-[16px] font-medium leading-[24px] text-[rgb(33,42,54)] font-sans'>
          Query Parameters
        </h3>
        <div className='flex gap-8'>
          <p className='text-[14px] font-mono font-normal leading-[20px] text-[rgb(33,42,54)]'>
            caplightId
          </p>
          <div className='flex flex-col gap-1'>
            <p className='text-[14px] font-normal leading-[20px] text-[rgb(33,42,54)] font-sans'>
              string
            </p>

            <p className='text-[14px] font-normal leading-[20px] text-[rgb(33,42,54)] font-sans'>
              Company Caplight Id
            </p>
            <p className='text-[14px] font-normal leading-[20px] text-[rgb(33,42,54)] font-sans'>
              Example:{' '}
              <span className='bg-[rgb(148,162,184)] text-[rgb(33,42,54)] text-[12px] font-mono font-normal leading-[16px] py-[2px] px-[4px] inline-box border-0 rounded-[4px]'>
                caplightId=13591n9df6519k1
              </span>
            </p>
          </div>
        </div>
        <Divider className='!my-4' />
        <div className='flex gap-8'>
          <p className='text-[14px] font-mono font-normal leading-[20px] text-[rgb(33,42,54)]'>
            pitchbookId
          </p>
          <div className='flex flex-col gap-1'>
            <p className='text-[14px] font-normal leading-[20px] text-[rgb(33,42,54)] font-sans'>
              string
            </p>

            <p className='text-[14px] font-normal leading-[20px] text-[rgb(33,42,54)] font-sans'>
              Company Caplight Id
            </p>
            <p className='text-[14px] font-normal leading-[20px] text-[rgb(33,42,54)] font-sans'>
              Example:{' '}
              <span className='bg-[rgb(148,162,184)] text-[rgb(33,42,54)] text-[12px] font-mono font-normal leading-[16px] py-[2px] px-[4px] inline-box border-0 rounded-[4px]'>
                caplightId=13591n9df6519k1
              </span>
            </p>
          </div>
        </div>
        <Divider className='!mt-2' />
      </div>
      {/* response */}
      <div className='px-6 pb-6 flex flex-col gap-4'>
        <h1 className='text-[16px] font-sans font-medium leading-[24px] text-[rgb(33, 42, 54)]'>
          Response
        </h1>
        <div className='flex gap-2'>
          <Chip
            label='GET'
            className='!rounded-[4px] !w-auto !h-[24px] !text-[12px] !font-medium !leading-[16px] !text-custom-green !bg-custom-green-light !px-[4px] !py-[8px]'
          />
          <p className='text-[14px] font-sans font-normal leading-[20px] text-[#212A36]'>
            application/json
          </p>
        </div>
        <div className='w-full max-w-[411.297px] h-fit p-4 rounded-lg bg-gray-900'>
          <pre className='text-[14px] font-monospace leading-[20px] text-white whitespace-pre'>
            {JSON.stringify(jsonData, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ApiCards;
