'use client';

import Link from "next/link";
import styles from "./menu.module.css";
import { usePathname } from "next/navigation";

export default function Menu() {

    const pathname = usePathname();

    return (
        <nav className={styles.nav} role="navigation">
            <ul className={styles.navigation} role="navigation">
                <li>
                    <Link href="/" className={` ${styles.link} ${pathname === '/' ? `${styles.active}` : ''}`}>
                        Home
                    </Link>
                </li>
                {/* <li>
                    <Link href="" className={` ${styles.link} ${pathname === '/' ? `${styles.active}` : ''}`}>
                        About
                    </Link>
                </li> */}
                {/* <li>
                    <Link href="" className={` ${styles.link} ${pathname === '/' ? `${styles.active}` : ''}`}>
                        Contact
                    </Link>
                </li> */}
                <li>
                    <Link href="/pages/login" className={` ${styles.link} ${pathname === '/pages/login' ? `${styles.active}` : ''}`}>
                        Profile
                    </Link>
                </li>
            </ul>
        </nav>
    );
}