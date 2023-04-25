'use client';
import React, { useState } from 'react';
import Logo from '../Logo';
import { BsSearch, BsArrowLeft } from 'react-icons/bs';

const SearchSide = () => {
   const [isFocused, setIsFocused] = useState(false);

   const handleFocus = () => {
      setIsFocused(true);
   };

   const handleBlur = () => {
      setIsFocused(false);
   };

   return (
      <div className="w-full gap-2 flex flex-row justify-start items-center">
         <div className="logo">
            {isFocused ? (
               <BsArrowLeft
                  size={18}
                  fill="#E4E6EB"
                  className="transition-all cursor-pointer"
               />
            ) : (
               <Logo />
            )}
         </div>
         <div className="relative overflow-hidden focus-within:shadow-outline-blue focus-within:shadow-outline">
            <input
               className="py-[10px] pr-2 pl-12 focus:pl-4 transition-all focus:placeholder-[#e4e6eb8c] group bg-[#3a3b3c] w-full outline-none text-[#E4E6EB] rounded-[50px] focus:shadow-outline-blue focus:shadow-outline"
               type="text"
               placeholder="Search Facebook"
               onFocus={handleFocus}
               onBlur={handleBlur}
            />
            <div className="bs-search">
               <BsSearch
                  size={18}
                  fill="#E4E6EB"
                  className="absolute left-[12px] cursor-pointer transition-all top-[50%] transform -translate-y-1/2"
               />
            </div>
         </div>
      </div>
   );
};

export default SearchSide;
