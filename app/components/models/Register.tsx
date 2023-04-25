'use client';
import useRegisterModal from '@/app/hooks/useRegister';
import React, { useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Button from '../Button';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Input from '../Input';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import CalendarComponent from '../Calendar';
import { User } from '@prisma/client';

interface RegisterProps {
   currentUser?: User;
}

const Register: React.FC<RegisterProps> = ({ currentUser }) => {
   const registerModal = useRegisterModal();
   const [showModal, setShowModal] = useState(registerModal.isOpen);
   const router = useRouter();
   const [isLoading, setIsLoading] = useState(false);

   const [dateOfBirth, setDateOfBirth] = useState(new Date());

   useEffect(() => {
      setShowModal(registerModal.isOpen);
   }, [registerModal.isOpen]);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FieldValues>({
      defaultValues: {
         firstname: '',
         lastname: '',
         phone: '',
         password: '',
      },
   });

   const onSubmit: SubmitHandler<FieldValues> = (data) => {
      setIsLoading(true);

      const sexElement = document.getElementById('sex') as HTMLSelectElement;
      const sexValue = sexElement.value;

      axios
         .post('/api/register', {
            ...data,
            sex: sexValue,
            birthday: dateOfBirth,
         })
         .then(() => {
            toast.success('Registered!');
            registerModal.onClose();
         })
         .catch((error) => {
            toast.error(error);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   const handleClose = useCallback(() => {
      setShowModal(false);
      setTimeout(() => {
         registerModal.onClose();
      }, 300);
   }, [registerModal.onClose]);

   return (
      <div className="">
         {registerModal.isOpen && (
            <>
               <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-[#ffffffcc]
        "
               >
                  <div
                     className=" relative w-full md:w-3/6 lg:w-3/6 xl:w-[30%] my-6 mx-auto h-full lg:h-auto md:h-auto
          "
                  >
                     <div
                        className={`translate duration-300 h-full
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
          `}
                     >
                        <div
                           className=" translate h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none
            "
                        >
                           {/*header*/}
                           <div
                              className="flex items-center rounded-t justify-between relative border-b-[1px]
                          "
                           >
                              <div className="flex flex-col py-[10px] px-4">
                                 <div className="text-3xl font-bold capitalize text-neutral-800">
                                    Đăng Ký
                                 </div>
                                 <div className="text-lg font-light text-neutral-600">
                                    Nhanh chóng và dễ dàng
                                 </div>
                              </div>
                              <button
                                 className=" p-1 border-0  hover:opacity-70 transition absolute right-[10px] top-[12px]
                            "
                                 onClick={handleClose}
                              >
                                 <IoMdClose size={24} />
                              </button>
                           </div>
                           <hr className="w-full" />
                           <div className="p-4 w-full relative rounded-bl-lg rounded-br-lg">
                              <div className="flex flex-row justify-between gap-3">
                                 <Input
                                    label="Họ"
                                    errors={errors}
                                    id="firstname"
                                    register={register}
                                    required
                                    disabled={isLoading}
                                 />
                                 <Input
                                    label="Tên"
                                    errors={errors}
                                    id="lastname"
                                    register={register}
                                    required
                                    disabled={isLoading}
                                 />
                              </div>
                              <div className="w-full my-3">
                                 <Input
                                    label="Số di động hoặc email"
                                    errors={errors}
                                    id="email"
                                    register={register}
                                    required
                                    disabled={isLoading}
                                 />
                              </div>
                              <div className="w-full mb-3">
                                 <Input
                                    label="Mật khẩu mới"
                                    errors={errors}
                                    type="password"
                                    id="password"
                                    register={register}
                                    required
                                    disabled={isLoading}
                                 />
                              </div>

                              <div className="w-full flex flex-row justify-start gap-3">
                                 <div className="flex w-1/2 lg:w-1/3 flex-col gap-2 justify-center">
                                    <div className="text-sm flex justify-start gap-1">
                                       Sinh nhật
                                       <AiFillQuestionCircle
                                          fill="#606770"
                                          size={18}
                                       />
                                    </div>
                                    <div className="flex flex-row w-full">
                                       <CalendarComponent
                                          date={dateOfBirth}
                                          onDateChange={setDateOfBirth}
                                       />
                                    </div>
                                 </div>

                                 <div className="flex flex-col justify-center w-full gap-2">
                                    <div className="text-sm flex justify-start gap-1">
                                       Giới tính
                                       <AiFillQuestionCircle
                                          fill="#606770"
                                          size={18}
                                       />
                                    </div>
                                    <div className="flex flex-row justify-between gap-3 ">
                                       <div className="flex rounded-md border-[1px] w-full py-3 px-4 flex-row justify-between">
                                          <label htmlFor="famale">Nữ</label>
                                          <input
                                             required
                                             type="radio"
                                             id="sex"
                                             name="Sex"
                                             value="Famale"
                                             disabled={isLoading}
                                          />
                                       </div>
                                       <div className="flex rounded-md py-3 w-full border-[1px] px-4 flex-row justify-between">
                                          <label htmlFor="male">Nam</label>
                                          <input
                                             required
                                             type="radio"
                                             id="sex"
                                             name="Sex"
                                             value="Male"
                                             disabled={isLoading}
                                          />
                                       </div>
                                    </div>
                                 </div>
                              </div>

                              <div className="text-sm text-neutral-600 my-4">
                                 Những người dùng dịch vụ của chúng tôi có thể
                                 đã tải thông tin liên hệ của bạn lên Facebook.
                                 <span
                                    onClick={() => router.push('/learnmore')}
                                    className="inline-block text-[#385898] cursor-pointer hover:underline transition-all"
                                 >
                                    Tìm hiểu thêm
                                 </span>
                              </div>

                              <div className="text-sm text-neutral-600 my-4">
                                 Bằng cách nhấp vào Đăng ký, bạn đồng ý với và{' '}
                                 <span
                                    onClick={() => router.push('/dieukhoan')}
                                    className="inline text-[#385898] cursor-pointer hover:underline transition-all"
                                 >
                                    Điều khoản, Chính sách quyền riêng tư
                                 </span>{' '}
                                 và{' '}
                                 <span
                                    onClick={() =>
                                       router.push('/chinhsachcookie')
                                    }
                                    className="inline-block text-[#385898] cursor-pointer hover:underline transition-all"
                                 >
                                    Chính sách cookie
                                 </span>{' '}
                                 của chúng tôi. Bạn có thể nhận được thông báo
                                 của chúng tôi qua SMS và hủy nhận bất kỳ lúc
                                 nào.
                              </div>

                              <div className="w-full">
                                 <Button
                                    label="Đăng Ký"
                                    outline
                                    onClick={handleSubmit(onSubmit)}
                                    small
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </>
         )}
      </div>
   );
};

export default Register;
