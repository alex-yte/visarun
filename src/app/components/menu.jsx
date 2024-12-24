'use client';

import Link from "next/link";
import styles from "./menu.module.css";
import { usePathname } from "next/navigation";

export default function Menu() {

    const pathname = usePathname();

    return (
        <nav className={styles.nav} role="navigation">
            <ul className={styles.navigation + ' ' + 'py-3 text-[1.5rem]'} role="navigation">
                <li>
                    <Link href="/" className={` ${styles.link} ${pathname === '/' ? `${styles.active}` : ''}`}>
                        Главная
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
                        История
                    </Link>
                </li>
            </ul>
        </nav>
    );
}