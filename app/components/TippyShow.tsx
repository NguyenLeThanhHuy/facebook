'use client';

import { User } from '@prisma/client';
import React, { useState } from 'react';
import AccountChange from './AccoutChange';
import HeadTippy from './HeadTippy';
import { IconType } from 'react-icons/lib';
import { useRouter } from 'next/navigation';

interface HistoryItem {
   data: any[];
   icon?: IconType;
   title?: string;
}

interface TippyShowProps {
   currentUser: User | null;
   menuArr: any[];
}

const TippyShow: React.FC<TippyShowProps> = ({ currentUser, menuArr }) => {
   const [history, setHistory] = useState<HistoryItem[]>([{ data: menuArr }]);
   const current = history[history.length - 1];
   const router = useRouter();

   return (
      <div className="bg-[#242526] transition-all px-2 py-4 top-0 rounded-b-xl">
         <div className="px-2">
            {history.length > 1 ? (
               <HeadTippy
                  icon={current.icon}
                  title={current.title}
                  onBack={() => {
                     setHistory((prev) => prev.slice(0, prev.length - 1));
                  }}
               />
            ) : (
               <AccountChange currentUser={currentUser} />
            )}
         </div>

         <div className="py-3 flex flex-col min-w-[330px] transition-all ">
            {current.data.map((item, index) => {
               const isParent = !!item.children;
               return (
                  <div
                     key={index}
                     onClick={() => {
                        if (isParent && item.children) {
                           setHistory((prev) => [...prev, item.children]);
                        } else {
                           if (item.onSignOut) {
                              item.onSignOut();
                           }

                           if (item.to) {
                              router.push(item.to);
                           }
                        }
                     }}
                     className="flex hover:bg-[#4c48489b] rounded-xl transition-all flex-row w-full justify-between items-center p-2"
                  >
                     <div className="flex-row flex gap-2 items-center justify-start ">
                        <div className="p-2 bg-[#5d606178] rounded-full">
                           {item.beforeIcon && (
                              <item.beforeIcon size={20} fill="#E4E6EB" />
                           )}
                        </div>
                        <div className="font-medium text-base text-white">
                           {item.label}
                        </div>
                     </div>
                     <div className="relative">
                        {item.afterIcon && (
                           <item.afterIcon
                              className=""
                              size={20}
                              fill="#E4E6EB"
                           />
                        )}
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default TippyShow;
