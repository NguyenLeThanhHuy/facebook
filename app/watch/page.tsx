import getCurrentUser from '../actions/getCurrentUser';
import Navbar from '../components/navbar/Navbar';

export default async function Watch() {
   const currentUser = await getCurrentUser();
   return (
      <div className="">
         <div className="">
            <Navbar currentUser={currentUser} />
         </div>
         Watch
      </div>
   );
}
