import Image from 'next/image';

const Logo = () => {
   return (
      <Image
         className="rounded-full cursor-pointer transition-all"
         alt="Logo"
         src={'/images/logo.png'}
         width={40}
         height={40}
      />
   );
};

export default Logo;
