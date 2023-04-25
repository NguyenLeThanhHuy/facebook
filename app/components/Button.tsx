'use client';

import { IconType } from 'react-icons';

interface ButtonProps {
   label: string;
   onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
   disabled?: boolean;
   outline?: boolean;
   small?: boolean;
   icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
   label,
   onClick,
   disabled,
   outline,
   small,
   icon: Icon,
}) => {
   return (
      <button
         disabled={disabled}
         onClick={onClick}
         className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        mx-auto block
        hover:opacity-80
        transition
        font-semibold
        text-white
        ${outline ? 'bg-[#42b72a]' : 'bg-[#1877f2]'}
        ${small ? 'text-[17px]' : 'text-[20px]'}
        ${small ? 'w-[70%] lg:w-[50%]' : 'w-full'}
        ${small ? 'p-4' : 'py-3'}
      `}
      >
         {Icon && (
            <Icon
               size={24}
               className="
            absolute
            left-4
            top-3
          "
            />
         )}
         {label}
      </button>
   );
};

export default Button;
