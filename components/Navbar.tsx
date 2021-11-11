import React, { ReactElement } from 'react'
import AppIcon from './SVG/AppIcon'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

function Navbar(): ReactElement {
  const router = useRouter()

  const goHome = () => {
    router.push('/')
  }

  return (
    <nav className='z-20 flex flex-col items-center justify-between w-32 h-screen bg-white border-r border-gray-200 dark:to-black'>
      <i className='mt-10 cursor-pointer' onClick={goHome}>
        <AppIcon width={48} height={48} />
      </i>

      <ul className='flex flex-col items-center w-full justify-evenly'>
        <li className='p-4 text-gray-600 cursor-pointer hover:text-gray-900 hover:shadow-md rounded-2xl'>
          <Link href='/stream'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-8 h-8'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z' />
            </svg>
          </Link>
        </li>
        <li className=''>
          <Link href='/calendar'>
            <div className='p-4 text-gray-600 cursor-pointer hover:text-gray-900 hover:shadow-md rounded-2xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-8 h-8'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </Link>
        </li>
        <li className='p-4 text-gray-600 cursor-pointer rounded-2xl hover:text-gray-900 hover:shadow-md'>
          <Link href='/chat'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-8 h-8'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z' />
              <path d='M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z' />
            </svg>
          </Link>
        </li>
      </ul>

      <div className='p-1 mb-10 text-gray-600 rounded-full cursor-pointer hover:shadow-xl hover:text-gray-900'>
        <Link href='/account'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-12 h-12'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
              clipRule='evenodd'
            />
          </svg>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
