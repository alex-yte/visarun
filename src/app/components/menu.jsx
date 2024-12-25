'use client';

import Link from "next/link";
import styles from "./menu.module.css";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";
import { ClerkProvider } from "@clerk/nextjs";

export default function Menu() {

    const pathname = usePathname();

    return (
        <ClerkProvider>
            <nav className={styles.nav} role="navigation">
                <ul className={styles.navigation + ' ' + 'py-3 text-[1rem]'} role="navigation">
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
            
                    <SignedIn>
                        <li>
                            <Link href="/pages/profile" className={` ${styles.link} ${pathname === '/' ? `${styles.active}` : ''}`}>
                                Аккаунт
                            </Link>
                        </li>
                        <li>
                            <SignOutButton>
                                Выйти
                            </SignOutButton>
                        </li>
                    </SignedIn>
                    <SignedOut>
                        <li>
                            <Link href="/pages/login" className={` ${styles.link} ${pathname === '/pages/login' || pathname === '/pages/register' ? `${styles.active}` : ''}`}>
                                Авторизация
                            </Link>
                        </li>
                    </SignedOut>
                </ul>
            </nav>
        </ClerkProvider>
    );
}