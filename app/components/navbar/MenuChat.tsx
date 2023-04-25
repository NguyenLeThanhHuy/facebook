'use client';

import { RiGridFill, RiSettings5Fill } from 'react-icons/ri';
import {
   BsArrowLeft,
   BsArrowUpRight,
   BsFillQuestionCircleFill,
   BsMessenger,
} from 'react-icons/bs';
import { FaBell, FaMoon, FaUserLock } from 'react-icons/fa';
import Image from 'next/image';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import React, { useCallback, useRef, useState } from 'react';
import { User } from '@prisma/client';
import TippyShow from '../TippyShow';
import {
   MdArrowForwardIos,
   MdBusiness,
   MdFeedback,
   MdOutlineLanguage,
   MdOutlineLogout,
} from 'react-icons/md';
import { HiLockClosed } from 'react-icons/hi';
import { AiOutlineBars } from 'react-icons/ai';
import { GiBarbedNails } from 'react-icons/gi';
import { signOut } from 'next-auth/react';

interface MenuChatProps {
   currentUser: User | null;
}

const MenuChat: React.FC<MenuChatProps> = ({ currentUser }) => {
   const [showTippy, setShowTippy] = useState(false);

   const listNavBox = [
      {
         label: 'Meta Business Suite',
         beforeIcon: MdBusiness,
         afterIcon: BsArrowUpRight,
         to: '/meta-business-suite',
      },
      {
         label: 'Settings & privacy',
         beforeIcon: RiSettings5Fill,
         afterIcon: MdArrowForwardIos,
         children: {
            icon: BsArrowLeft,
            title: 'Settings & privacy',
            data: [
               {
                  beforeIcon: RiSettings5Fill,
                  label: 'Settings',
                  to: '/settings',
               },
               {
                  beforeIcon: FaUserLock,
                  label: 'Privacy Checkup',
                  to: '/privacy-checkup',
               },
               {
                  beforeIcon: HiLockClosed,
                  label: 'Privacy Center',
                  to: '/privacy-center',
               },
               {
                  beforeIcon: AiOutlineBars,
                  label: 'Activity log',
                  to: '/activity-log',
               },
               {
                  beforeIcon: GiBarbedNails,
                  label: 'Feed',
                  to: '/feed',
               },
               {
                  beforeIcon: MdOutlineLanguage,
                  label: 'Language',
                  to: '/languge',
               },
            ],
         },
      },
      {
         label: 'Help & support',
         beforeIcon: BsFillQuestionCircleFill,
         afterIcon: MdArrowForwardIos,
      },
      {
         label: 'Display & accessibility',
         beforeIcon: FaMoon,
         afterIcon: MdArrowForwardIos,
      },
      {
         label: 'Give feedback',
         beforeIcon: MdFeedback,
         to: '/feedback',
      },
      {
         label: 'Log Out',
         beforeIcon: MdOutlineLogout,
         onSignOut: () => signOut(),
      },
   ];

   const handleClick = useCallback(() => {
      setShowTippy(!showTippy);
   }, [showTippy]);

   const handleHide = useCallback(() => {
      setShowTippy(false);
   }, []);

   return (
      <div className="flex flex-row gap-2 justify-end items-center">
         <Tippy
            content={'Menu'}
            arrow={false}
            className="bg-[#cacdd3c7] text-neutral-800 text-base font-light py-2 px-3 rounded-xl"
            popperOptions={{
               modifiers: [
                  {
                     name: 'preventOverflow',
                     options: { boundary: 'window' },
                  },
               ],
            }}
         >
            <div className="p-3 bg-[#5d606178] rounded-full hover:bg-[#989da27f] cursor-pointer transition-all">
               <RiGridFill size={24} fill="#fff" />
            </div>
         </Tippy>
         <Tippy
            content={'Messenger'}
            arrow={false}
            className="bg-[#cacdd3c7] text-neutral-800 text-base font-light py-2 px-3 rounded-xl"
            popperOptions={{
               modifiers: [
                  {
                     name: 'preventOverflow',
                     options: { boundary: 'window' },
                  },
               ],
            }}
         >
            <div className="p-3 bg-[#5d606178] rounded-full hover:bg-[#989da27f] cursor-pointer transition-all">
               <BsMessenger size={24} fill="#fff" />
            </div>
         </Tippy>
         <Tippy
            content={'Notifications'}
            arrow={false}
            className="bg-[#cacdd3c7] text-neutral-800 text-base font-light py-2 px-3 rounded-xl"
            popperOptions={{
               modifiers: [
                  {
                     name: 'preventOverflow',
                     options: { boundary: 'window' },
                  },
               ],
            }}
         >
            <div className="p-3 bg-[#5d606178] rounded-full hover:bg-[#989da27f] cursor-pointer transition-all">
               <FaBell size={24} fill="#fff" />
            </div>
         </Tippy>

         <div className="cursor-pointer">
            <Tippy
               content={
                  <TippyShow currentUser={currentUser} menuArr={listNavBox} />
               }
               placement="bottom-end"
               arrow={false}
               popperOptions={{
                  modifiers: [
                     {
                        name: 'preventOverflow',
                        options: { boundary: 'window' },
                     },
                  ],
               }}
               visible={showTippy}
            >
               <Tippy
                  content={'Account'}
                  arrow={false}
                  className="bg-[#cacdd3c7] text-neutral-800 text-base font-light py-2 px-3 rounded-xl"
                  popperOptions={{
                     modifiers: [
                        {
                           name: 'preventOverflow',
                           options: { boundary: 'window' },
                        },
                     ],
                  }}
               >
                  <Image
                     className="rounded-full"
                     width={40}
                     height={40}
                     src={'/images/noneuser.jpg'}
                     alt="Image User"
                     onClick={handleClick}
                  />
               </Tippy>
            </Tippy>
         </div>
      </div>
   );
};

export default MenuChat;
