import React from 'react'
import { ArrowRight, Setting, Icon1,Icon2,Icon3,Icon4,Icon5,Icon6 } from '../utils/Icones'

const NavBtn = ({ icon, text, link, active, multi }) => {
    return (
        <a href={link} className={`flex ${active ? 'bg-[#5932EA] text-white' : ' text-[#9197B3]'} flex-row rounded-lg justify-between items-center p-2.75`}>
            <div className='flex gap-3.5 items-center'>
                {icon}
                <h2 className='text-[14px] leading-[100%] tracking-[-1%] font-medium'>{text}</h2>
            </div>
            {multi && <ArrowRight />}
        </a>
    )
}

const NavItems = [
    {
        icon: <Icon1 />,
        text: 'Dashboard',
        link: '/dashboard',
        active: false,
        multi: false
    },
    {
        icon: <Icon2 />,
        text: 'Product',
        link: '/settings',
        active: false,
        multi: true
    },
    {
        icon: <Icon3 />,
        text: 'Customers',
        link: '/settings',
        active: true,
        multi: true
    },
    {
        icon: <Icon4 />,
        text: 'Income',
        link: '/settings',
        active: false,
        multi: true
    },
    {
        icon: <Icon5 />,
        text: 'Promote',
        link: '/settings',
        active: false,
        multi: true
    },
    {
        icon: <Icon6 />,
        text: 'Help',
        link: '/settings',
        active: false,
        multi: true
    }
]

function Sidebar() {

    return (
        <div className='w-76.5 md:flex sticky top-0 bg-white px-7 py-9 h-full hidden flex-col justify-between  min-h-screen' >
            <div className='flex flex-col mb-40 ' >
                <div className='flex flex-row items-center gap-2 mb-10'>
                    <Setting />
                    <h2 className='text-[26px] flex items-baseline font-semibold leading-[100%] tracking-[1%] text-[#000000]'>
                        Dashboard
                        <span className='text-[10px] font-medium tracking-[-1%]'>
                            v.01
                        </span>
                    </h2>
                </div>
                <div className='flex flex-col gap-3' >
                    {NavItems.map((item, index) => (
                        <NavBtn
                            key={index}
                            icon={item.icon}
                            text={item.text}
                            link={item.link}
                            active={item.active}
                            multi={item.multi}
                        />
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-12' >
                <div className='bg-linear-to-r from-[#EAABF0] to-[#4623E9] py-6.5 px-8.5 text-center rounded-[20px] ' >
                    <p className='text-[14px] text-white font-semibold leading-[100%] tracking-[1%]  '>Upgrade to  PRO to get access all Features!</p>
                    <button className='w-full rounded-full py-2.5  mt-5 bg-white text-[#4925E9] text-[14px] font-semibold'>
                        Get Pro Now!
                    </button>
                </div>
                <div className='flex flex-row justify-between' >
                    <div className='flex flex-row gap-3'>
                        <img src="/Ellipse.png" alt="profil" />
                        <div className='flex flex-col text-sm ' >
                            <span className='text-sm font-medium' >Evano</span>
                            <span className='text-[#757575] text-xs' >Project Manager</span>
                        </div>
                    </div>

                    <ArrowRight />
                </div>
            </div>
        </div>
    )
}

export default Sidebar