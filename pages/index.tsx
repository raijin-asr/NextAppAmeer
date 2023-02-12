import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-black min-h-screen text-white items-center flex justify-center'>
   home page
    </div>
  )
}
