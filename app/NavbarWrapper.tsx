import Navbar from "@/components/Navbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const NavbarWrapper = async ()=>{
    const {isAuthenticated}=getKindeServerSession();
    const isAuth= await isAuthenticated();
    return (
        <Navbar isAuthenticated={isAuth}/>
    )
}
export default NavbarWrapper;