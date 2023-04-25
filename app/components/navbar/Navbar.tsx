'use client';
import { User } from '@prisma/client';
import SearchSide from './SearchSide';
import NavBox from './NavBox';
import MenuChat from './MenuChat';

interface NavbarProps {
   currentUser: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
   return (
      <div className="bg-[#242526] w-full px-4 flex flex-row justify-between items-center">
         <div className="w-1/4">
            <SearchSide />
         </div>
         <div className="w-1/2">
            <NavBox />
         </div>
         <div className="w-1/4">
            <MenuChat currentUser={currentUser} />
         </div>
      </div>
   );
};

export default Navbar;
