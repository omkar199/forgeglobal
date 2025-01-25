import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavLinks = () => {
  return (
    <div className='flex flex-col px-4'>
      <div className='p-4 flex justify-center items-center'>
        <Image
          className=''
          src='/logo.svg'
          alt='logo'
          width={100}
          height={28}
          priority
        />
      </div>

      <div className='flex flex-col gap-2 mt-4 md:gap-4'>
        <Link href='/'>
          <div className='flex justify-start items-center gap-2'>
            <Image
              className=''
              src='/dashboard.svg'
              alt='logo'
              width={15}
              height={15}
              priority
            />
            <p className='cursor-pointer'>Dashboard</p>
          </div>
        </Link>
        <Link href='/companies'>
          <div className='flex justify-start items-center gap-2'>
            <Image
              className=''
              src='/companies.svg'
              alt='logo'
              width={15}
              height={15}
              priority
            />
            <p className='cursor-pointer'>Companies</p>
          </div>
        </Link>
        <Link href='/markets'>
          <div className='flex justify-start items-center gap-2'>
            <Image
              className=''
              src='/markets.svg'
              alt='logo'
              width={15}
              height={15}
              priority
            />
            <p className='cursor-pointer'>Markets</p>
          </div>
        </Link>
        <Link href='/trades'>
          <div className='flex justify-start items-center gap-2'>
            <Image
              className=''
              src='/trade.svg'
              alt='logo'
              width={15}
              height={15}
              priority
            />
            <p className='cursor-pointer'>Trades</p>
          </div>
        </Link>
        <Link href='/news'>
          <div className='flex justify-start items-center gap-2'>
            <Image
              className=''
              src='/news.svg'
              alt='logo'
              width={15}
              height={15}
              priority
            />
            <p className='cursor-pointer'>News</p>
          </div>
        </Link>
        <Link href='/api'>
          <div className='flex justify-start items-center gap-2'>
            <Image
              className=''
              src='/api.svg'
              alt='logo'
              width={15}
              height={15}
              priority
            />
            <p className='cursor-pointer'>API</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavLinks;
