
import Link from 'next/link;

import {NavLinkContainer} from './styles';

export default function NavLink(){
    return (
        <NavLinkContainer>
            <Link href="/">
                <a></a>
            </Link>
        </NavLinkContainer>
    )
}