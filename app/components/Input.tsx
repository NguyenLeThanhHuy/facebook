'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { MdOutlineError } from 'react-icons/md';

interface InputProps {
   id: string;
   label: string;
   type?: string;
   disabled?: boolean;
   required?: boolean;
   register: UseFormRegister<FieldValues>;
   errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
   id,
   label,
   type = 'text',
   disabled,
   register,
   required,
   errors,
}) => {
   return (
      <div className="w-full relative">
         <input
            id={id}
            disabled={disabled}
            placeholder={label}
            {...register(id, { required })}
            type={type}
            className={`
          w-full
          py-3
          lg:text-xl
          text-base
          px-4
          font-medium 
          bg-white 
          border-[1px]
          rounded-md
          placeholder-[##9094a9]
          focus:placeholder-[#bec3c9]
          outline-none
          focus:border-[#1877f2]
          transition-all
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
          ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
        `}
         />
         {errors[id] && (
            <div className="absolute right-2 top-[50%] transform -translate-y-[50%]">
               <MdOutlineError size={20} fill="#b94a48" />
            </div>
         )}
      </div>
   );
};

export default Input;
