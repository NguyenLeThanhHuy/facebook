import { IconType } from 'react-icons/lib';

interface HeadTippyProps {
   icon?: IconType;
   title?: string;
   onBack: () => void;
}

const HeadTippy: React.FC<HeadTippyProps> = ({ icon: Icon, title, onBack }) => {
   return (
      <div className="w-full p-3 rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
         <div className="flex flex-row justify-start gap-4 items-center ">
            {Icon && (
               <Icon
                  className="cursor-pointer"
                  onClick={() => onBack()}
                  size={24}
                  fill="#E4E6EB"
               />
            )}
            <div className="text-3xl font-bold text-white">{title}</div>
         </div>
      </div>
   );
};

export default HeadTippy;
