import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'

type Props = {
  children?: ReactNode
  title?: string
}
// Don't use a layout if the app will be different per page

const Layout = ({ children, title = 'Xstream' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <main>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <Navbar />
        <div className='md:col-span-1'>{children}</div>
      </div>
    </main>
  </div>
)

export default Layout
