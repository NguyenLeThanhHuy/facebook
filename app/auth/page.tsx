'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import logo from '@/public/images/dF5SId3UHWd.svg';
import Image from 'next/image';
import Input from '../components/Input';
import Button from '../components/Button';
import Container from '../components/Container';
import { HiOutlinePlus } from 'react-icons/hi';
import { useRef } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegisterModal from '../hooks/useRegister';

const Authentication = () => {
   const router = useRouter();
   const [isLoading, setIsLoading] = useState(false);
   const registerModal = useRegisterModal();

   const onSubmit: SubmitHandler<FieldValues> = (data) => {
      setIsLoading(true);

      signIn('credentials', {
         ...data,
         redirect: false,
      }).then((callback) => {
         setIsLoading(false);

         if (callback?.ok) {
            toast.success('Logged in');
            router.push('/');
            router.refresh();
         }

         if (callback?.error) {
            toast.error(callback.error);
         }
      });
   };

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FieldValues>({
      defaultValues: {
         email: '',
         password: '',
      },
   });

   const listLanguage = useRef([
      {
         language: 'Tiếng Việt',
      },
      {
         language: 'English (UK)',
      },
      {
         language: '中文 (台灣)',
      },
      {
         language: '한국어',
      },
      {
         language: '日本語',
      },
      {
         language: 'Français',
      },
      {
         language: 'ภาษาไทย',
      },
      {
         language: 'Español',
      },
      {
         language: 'Português (Brasil)',
      },
      {
         language: 'Deutsch (France)',
      },
      {
         language: 'Italiano',
      },
   ]);

   const listFuncRef = useRef([
      {
         name: 'Đăng ký',
      },
      {
         name: 'Đăng nhập',
      },
      {
         name: 'Messenger',
      },
      {
         name: 'Facebook Lite',
      },
      {
         name: 'Watch',
      },
      {
         name: 'Địa điểm',
      },
      {
         name: 'Trò chơi',
      },
      {
         name: 'Marketplace',
      },
      {
         name: 'Meta Pay',
      },
      {
         name: 'Cửa hàng trên Meta',
      },
      {
         name: 'Meta Quest',
      },
      {
         name: 'Instagram',
      },
      {
         name: 'Bulletin',
      },
      {
         name: 'Chiến dịch gây quỹ',
      },
      {
         name: 'Dịch vụ',
      },
      {
         name: 'Trung tâm thông tin bỏ phiếu',
      },
      {
         name: 'Chính sách quyền riêng tư',
      },
      {
         name: 'Trung tâm quyền riêng tư',
      },
      {
         name: 'Nhóm',
      },
      {
         name: 'Giới thiệu',
      },
      {
         name: 'Tạo quảng cáo',
      },
      {
         name: 'Tạo trang',
      },
      {
         name: 'Nhà phát triển',
      },
      {
         name: 'Dịch vụ',
      },
      {
         name: 'Cookie',
      },
      {
         name: 'Lựa chọn quảng cáo',
      },
      {
         name: 'Điều khoản',
      },
      {
         name: 'Trợ giúp',
      },
      {
         name: 'Tải thông tin liên hệ lên & đối tượng không phải người dùng',
      },
   ]);

   return (
      <>
         <div className="relative">
            <div className="lg:min-w-[500px] bg-[#f0f2f5] lg:pb-[112px] lg:pt-[72px]">
               <div className="lg:w-[980px] lg:py-6 mx-auto flex flex-col lg:flex-row items-start justify-center">
                  <div className="flex flex-col items-center lg:items-start w-full">
                     <div className="lg:pt-[112px] transform lg:m-[-28px] lg:pb-[16px]">
                        <Image
                           priority
                           src={logo}
                           className="h-auto"
                           alt="Logo"
                           width={301.6}
                        />
                     </div>
                     <div className="w-[80%] lg:w-full pb-5">
                        <h2 className=" text-2xl lg:text-3xl text-center lg:text-left font-normal">
                           Facebook giúp bạn kết nối và chia sẻ với mọi người
                           trong cuộc sống của bạn.
                        </h2>
                     </div>
                  </div>
                  <div className="w-full mt-3 lg:mt-12 flex flex-row justify-center lg:justify-end items-center">
                     <div className="w-[400px] min-h-[300px] lg:min-h-[456px]">
                        <div className="bg-white rounded-lg shadow-lg  w-full">
                           <form method="post">
                              <div className="p-5 flex flex-col gap-4">
                                 <Input
                                    id="email"
                                    label="Email hoặc số điện thoại"
                                    errors={errors}
                                    register={register}
                                    required
                                    disabled={isLoading}
                                 />

                                 <Input
                                    errors={errors}
                                    register={register}
                                    id="password"
                                    label="Mật khẩu"
                                    type="password"
                                    required
                                    disabled={isLoading}
                                 />
                              </div>
                              <div className="w-full px-5">
                                 <Button
                                    label="Đăng nhập"
                                    onClick={handleSubmit(onSubmit)}
                                 />
                              </div>
                              <div className="w-full p-5">
                                 <div
                                    onClick={() =>
                                       router.push('/forgetpassword')
                                    }
                                    className="text-[#1877f2] hover:underline transition-all text-lg font-medium text-center cursor-pointer"
                                 >
                                    {' '}
                                    Quên mật khẩu?
                                 </div>
                              </div>
                              <div className="w-full px-5">
                                 <hr className="w-full bg-[#000]" />
                              </div>
                              <div className="w-full p-6 mt-2">
                                 <Button
                                    onClick={(e) => {
                                       e.preventDefault();
                                       registerModal.onOpen();
                                    }}
                                    small
                                    label="Tạo tài khoản mới"
                                    outline
                                 />
                              </div>
                           </form>
                        </div>
                        <div className="w-full text-center mt-7 mb-7 lg:mb-0">
                           <span
                              onClick={() => router.push('/createpage')}
                              className="inline-block font-bold cursor-pointer hover:underline transition-all"
                           >
                              Tạo Trang
                           </span>
                           <span>
                              {' '}
                              dành cho người nổi tiếng, thương hiệu hoặc doanh
                              nghiệp.
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <Container>
               <div className="lg:pt-5">
                  <ul className="pt-2 flex flex-row flex-wrap items-center list-none text-[#737373]">
                     {listLanguage.current.map((item, index) => (
                        <li
                           key={index}
                           className={`text-sm cursor-pointer hover:underline ${
                              index === 0 ? 'lg:pl-0 pl-[10px]' : 'pl-[10px]'
                           } ${
                              index === listLanguage.current.length - 1
                                 ? 'pr-0'
                                 : ''
                           }`}
                        >
                           {item.language}
                        </li>
                     ))}
                     <li className="py-[2px] bg-[#f5f6f7] px-2 border border-[#ccd0d5] ml-[10px]">
                        <HiOutlinePlus fill="#6a7180" size={17} />
                     </li>
                  </ul>
                  <div className="w-full my-2">
                     <hr className="border-t-[1px] border-[#dddfe2] my-4" />
                  </div>

                  <div className="text-[#737373]">
                     <ul className="-ml-5 flex flex-row flex-wrap">
                        {listFuncRef.current.map((item, index) => (
                           <li
                              key={index}
                              className="pl-5 cursor-pointer hover:underline transition-all text-sm"
                           >
                              {item.name}
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div className="mt-5 mb-0 lg:mb-5">
                     <span className="text-[11px] text-[#737373]">
                        {' '}
                        Meta © 2023
                     </span>
                  </div>
               </div>
            </Container>
         </div>
      </>
   );
};

export default Authentication;
