"use client";
import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const pathName = usePathname();
//   console.log({ pathName });
  return (
    <div>
      <ul className="login-menu">
        <li>
          <h4> Login Navbar</h4>
        </li>
        {pathName !== "/login/loginteacher" && (
          <li>
            <Link href="/login">Login Main</Link>
          </li>
        )}
        <li>
          <Link href="/login/loginstudent">Student Main</Link>
        </li>
        <li>
          <Link href="/login/loginteacher">Teacher Main</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Layout;
