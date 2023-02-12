import {FaUserAlt} from 'react-icons/fa'
import  {BiMoney} from 'react-icons/bi'
interface   SidebarInterface{
      title:string;
      icon:React.ReactNode
      link:string;
} 
const sidebarData:SidebarInterface[]=[
    {
        title:'Employee',
        icon:<FaUserAlt/>,
        link:'/employee'
    },
    {
        title:'Salary',
        icon:<BiMoney/>,
        link:'/salary   '
    },
    {
        title:'Attendence',
        icon:<FaUserAlt/>,
        link:'/attendance'
    },
    {
        title:'Shipment',
        icon:<FaUserAlt/>,
        link:'shipment'
    },
    {
        title:'User',
        icon:<FaUserAlt/>,
        link:'user'
    }
]
export default sidebarData;