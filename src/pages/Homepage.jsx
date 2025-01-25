import { useLocation } from "react-router-dom"

export default function Homepage(){
    const location = useLocation();
    const {username} = location.state || "";
    return <>Homepage
Hii {username}
    </>
}