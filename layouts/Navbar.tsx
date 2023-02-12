import { BiUserCircle } from "react-icons/bi";
import { BsList } from "react-icons/bs";

export default function Navbar(){
    return(
             <div className="fixed p-5  ml-[17rem]  text-black shadow-md flex justify-between left-0 right-0">
                <div>
                  <span><BsList size={25} /></span>
                </div>
                <div className="flex gap-3 items-center">
                   <span>Ameer</span>
                   <span><BiUserCircle size={25}/></span>
                </div>
               </div>
    )
}