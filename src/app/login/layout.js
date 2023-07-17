import Link from "next/link";
import './login.css'
const Layout=({children})=>{
    return (
        <div>
            <ul className="login-menu">
                <li>
                    <Link href='/login'>Login Main</Link>
                </li>
                <li>
                    <Link href='/login/loginstudent'>Student Main</Link>
                </li>
                <li>
                    <Link href='/login/loginteacher'>Teacher Main</Link>
                </li>
            </ul>
            {
                children
            }
        </div>
    )
}

export default Layout;