import header from './Header.module.css'

import logo from '../assets/Logo.svg'

export function Header(){
    return (
        <>
            <header className={header.header}>
                <img src={logo}/>
            </header>
        </>
    )
}