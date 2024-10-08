'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    {name:'Home',href:'/'},
    {name:'Posts',href:'/blog/posts'},
    {name:'About',href:'/blog/about'},
    {name:'Contact',href:'/blog/contact'},
]
export default function NavLink(){
    const pathname = usePathname();
    return (
        <nav>
        {links.map((link)=>{
            const isActive = pathname === link.href;
            return (
                <Link
                key={link.name}
                href={link.href}>
                    <h1                 className={clsx({'bg-purple-500':isActive})}
style={{fontWeight:isActive?'bold':'normal'}}>
                        {link.name}</h1>
                </Link>
            );
        })}
        </nav>
    )
}
    