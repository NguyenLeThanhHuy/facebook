import getCurrentUser from '@/app/actions/getCurrentUser';
import Navbar from '../components/navbar/Navbar';

export default async function Feedback() {
   const currentUser = await getCurrentUser();
   return (
      <div className="">
         <div className="">
            <Navbar currentUser={currentUser} />
         </div>
         Feedback
      </div>
   );
}
