import { User } from '@prisma/client';
import Image from 'next/image';
import { BsArrowRepeat } from 'react-icons/bs';

interface AccountChangeProps {
   currentUser: User | null;
}

const AccountChange: React.FC<AccountChangeProps> = ({ currentUser }) => {
   return (
      <div className="bg-transparent p-1 w-full rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
         <div className="flex rounded-lg pl-3 pr-5 py-3 hover:bg-[#4c48489b] transition-all gap-16 flex-row justify-between items-center">
            <div className="flex flex-row gap-2 justify-start items-center">
               <div className="">
                  <Image
                     alt="Image User"
                     width={40}
                     className="rounded-full cursor-pointer"
                     height={40}
                     src={currentUser?.image as string}
                  />
               </div>
               <div className="text-white font-medium text-xl">
                  {`${currentUser?.firstname} ${currentUser?.lastname}`}
               </div>
            </div>
            <div className="flex relative flex-row justify-end items-center">
               <Image
                  width={20}
                  height={20}
                  className="cursor-pointer rounded-full"
                  alt="Image Page User"
                  src={
                     (currentUser?.image as string)
                        ? (currentUser?.image as string)
                        : '/images/noneuser.jpg'
                  }
               />

               <BsArrowRepeat
                  className="absolute cursor-pointer top-[50%] left-[50%] transform -translate-y-[50%] -translate-x-[50%]"
                  fill="#E4E6EB"
                  size={38}
               />
            </div>
         </div>
         <div className="w-full">
            <hr className="my-1 mx-3 h-[1px] bg-[#373333]" />
         </div>

         <div className="flex rounded-lg pl-3 pr-5 py-3 hover:bg-[#4c48489b] transition-all gap-10 flex-row justify-between items-center">
            <div className="text-sky-400 text-base font-light cursor-pointer">
               See all profiles
            </div>
            <div className="relative w-6 rounded-full bg-red-600 h-6">
               <div className="absolute text-base font-light left-[50%] transform translate-x-[-50%] translate-y-[-50%] top-[50%] ">
                  3
               </div>
            </div>
         </div>
      </div>
   );
};

export default AccountChange;
