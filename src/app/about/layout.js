import Link from "next/link"
import './about.css'
const Layout =({children})=>{

    return(
        <div>
            <ul className="about-menu">
                <li>
                    <h4>
                        About Navbar
                    </h4>
                </li>
                <li>
                    <Link href='/about'>About Main</Link>
                </li>
                <li>
                    <Link href='/about/aboutcollege'>College Main</Link>
                </li>
                <li>
                    <Link href='/about/aboutStudent'>Stuent Main</Link>
                </li>
            </ul>
            {
                children
            }
        </div>
    )
}

export default Layout;