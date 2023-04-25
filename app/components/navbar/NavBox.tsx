'use client';
import { useRef } from 'react';
import NavBoxSub from './NavBoxSub';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPlayBtnFill } from 'react-icons/bs';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { MdGroups } from 'react-icons/md';
import { IoGameController } from 'react-icons/io5';
import { usePathname } from 'next/navigation';

const NavBox = () => {
   const listNavBox = useRef([
      {
         title: 'Home',
         icon: AiFillHome,
         path: '/',
      },
      {
         title: 'Watch',
         icon: BsFillPlayBtnFill,
         path: '/watch',
      },
      {
         title: 'Marketplace',
         icon: SiHomeassistantcommunitystore,
         path: '/marketplace',
      },
      {
         title: 'Groups',
         icon: MdGroups,
         path: '/groups',
      },
      {
         title: 'Gaming',
         icon: IoGameController,
         path: '/gaming',
      },
   ]);

   const pathname = usePathname();

   return (
      <div className="flex flex-row justify-center items-center">
         {listNavBox.current.map((item) => (
            <NavBoxSub
               key={item.path}
               title={item.title}
               icon={item.icon}
               path={item.path}
               selected={pathname === item.path}
            />
         ))}
      </div>
   );
};

export default NavBox;
