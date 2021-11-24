import React from 'react'

import { HiClipboardList } from 'react-icons/hi';
import { AiOutlineDashboard,AiOutlineShop } from "react-icons/ai";
import { RiMotorbikeFill } from "react-icons/ri";
import { SiBrandfolder } from 'react-icons/si';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import {GrMail} from 'react-icons/gr'

import { BiNews } from 'react-icons/bi';
export const sidebarData = [
    {
        title :'Dashboard',
        path :'/',
        icon :<AiOutlineDashboard/>,
        cName :'nav-text'
    },
    {
        title :'Bikes',
        path :'/bike',
        icon :<RiMotorbikeFill/>,
        cName :'nav-text'
    },
    {
        title :'Bikes category',
        path :'/bike/category',
        icon :<HiClipboardList/>,
        cName :'nav-text'
    },
    {
        title :'Bikes brand',
        path :'/bike/brand',
        icon :<SiBrandfolder/>,
        cName :'nav-text'
    },
    
    {
        title :'Showrooms',
        path :'/bike/showrooms',
        icon :<AiOutlineShop/>,
        cName :'nav-text'
    },
    {
        title :'Helmets brand',
        path :'/helmets/brand',
        icon :<SiBrandfolder/>,
        cName :'nav-text'
    },
    {
        title :'Helmets',
        path :'/helmets',
        icon :<GiFullMotorcycleHelmet/>,
        cName :'nav-text'
    },
    {
        title :'News',
        path :'/news',
        icon :<BiNews/>,
        cName :'nav-text'
    },
    {
        title :'Inbox',
        path :'/user/message',
        icon :<GrMail/>,
        cName :'nav-text'
    }

]
    
