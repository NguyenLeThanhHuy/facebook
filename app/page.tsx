import getCurrentUser from './actions/getCurrentUser';
import Navbar from './components/navbar/Navbar';

export default async function Home() {
   const currentUser = await getCurrentUser();

   return (
      <>
         <div className="">
            <Navbar currentUser={currentUser} />
         </div>
         <div className="">Home</div>
      </>
   );
}
