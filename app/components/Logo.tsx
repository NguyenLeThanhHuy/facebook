'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
   const router = useRouter();
   return (
      <Image
         className="rounded-full cursor-pointer transition-all"
         alt="Logo"
         onClick={() => router.push('/')}
         src={'/images/logo.png'}
         width={40}
         height={40}
      />
   );
};

export default Logo;
