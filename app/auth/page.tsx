import logo from '@/public/images/dF5SId3UHWd.svg';
import Image from 'next/image';

const Authentication = () => {
   return (
      <>
         <div className="relative">
            <div className="min-w-[500px] bg-[##f0f2f5] pb-[112px] pt-[72px]">
               <div className="w-[980px] py-5 mx-auto flex flex-row items-start justify-center">
                  <div className="flex flex-col w-full">
                     <div className="pt-[112px] pb-[16px]">
                        <Image src={logo} alt="Logo" height={106} />
                     </div>
                     <div className="w-[86%] pb-5">
                        <h2 className="text-3xl">
                           Facebook giúp bạn kết nối và chia sẻ với mọi người
                           trong cuộc sống của bạn.
                        </h2>
                     </div>
                  </div>
                  <div className="">
                     <div className="pb-6 pt-3">
                        <form action="" method="post"></form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Authentication;
