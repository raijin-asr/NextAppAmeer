import sidebarData from "@/datas/sidebar.data";
import Head from "next/head";
import Link from "next/link";
import {BsList} from 'react-icons/bs'
import {BiUserCircle} from 'react-icons/bi'
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
interface Props{
    title?:string;
    children?:React.ReactNode
}

const Mainlayout=({title,children}:Props)=>{
    return(
        <>
        <Head>
            <title>{title||'demo'}</title>
            <link rel="stylesheet" href="" />
        </Head>
    <main className="w-full">
         <Sidebar/>
            <div className="ml-[17rem]">
              <Navbar/>
              
              <div className="pt-16">
              {children} 
              </div>
            </div>
        </main>
        </>
    )
}


export default Mainlayout