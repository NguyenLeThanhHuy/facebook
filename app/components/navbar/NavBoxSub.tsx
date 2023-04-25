'use client';
import { useRouter } from 'next/navigation';
import { IconType } from 'react-icons/lib';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

interface NavBoxSubProps {
   title: string;
   icon: IconType;
   path: string;
   selected?: boolean;
}

const NavBoxSub: React.FC<NavBoxSubProps> = ({
   title,
   icon: Icon,
   path,
   selected,
}) => {
   const router = useRouter();

   return (
      <Tippy
         content={title}
         arrow={false}
         className="bg-[#cacdd3c7] text-neutral-800 text-base font-light py-2 px-3 rounded-xl"
         popperOptions={{
            modifiers: [
               { name: 'preventOverflow', options: { boundary: 'window' } },
            ],
         }}
      >
         <div
            onClick={() => router.push(path)}
            className={`flex flex-row py-4 ${
               selected
                  ? 'border-[#2877e2] border-b-[3px]'
                  : 'hover:bg-[#3a3b3c] rounded-lg'
            } px-14 justify-center items-center cursor-pointer rounded-t-lg  transition-all`}
         >
            <div className="">
               <Icon size={24} fill={selected ? '#2877e2' : '#E4E6EB'} />
            </div>
         </div>
      </Tippy>
   );
};

export default NavBoxSub;
