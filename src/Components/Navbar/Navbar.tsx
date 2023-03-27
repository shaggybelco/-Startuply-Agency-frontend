import Button from '../Button/Button';
import './nav.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import {useState} from 'react';

function Navbar() {

    const [activeLink, setActiveLink] = useState('Features');

    const styles: React.CSSProperties = {
        width: 'auto',
        height: 'auto',
        padding: '15px 8px',
        borderRadius: '5px',
        borderWidth: 0,
        backgroundColor: '#FFFFFF26',
        color: '#fdfdfd'
    }

    function menuBtn(e: any) {
        const menu = document.querySelector('.menu-btn');
        const nav = document.querySelector('nav');

        nav?.classList.add('show');
        menu?.classList.add('hide');
    }

    function closeMenu(e: any) {
        const menu = document.querySelector('.menu-btn');
        const nav = document.querySelector('nav');

        nav?.classList.remove('show');
        menu?.classList.remove('hide');
    }

    function ActiveToggle(tab: string){
        setActiveLink(tab);
    }

    return (
        <div className='container'>
            <nav>
                <div className='logo'>
                    <a href='#' className='logo_text'>Ask nicely</a>
                </div>

                <ul className='nav_list'>
                    <div className="icon cancel-btn" onClick={closeMenu}>
                        <GrClose />
                    </div>
                    <li onClick={()=>ActiveToggle('Features')}><a className={activeLink === 'Features' ? 'active': ''}>Features</a></li>
                    <li onClick={()=>ActiveToggle('Intergrations')}><a className={activeLink === 'Intergrations' ? 'active': ''}>Intergrations</a></li>
                    <li onClick={()=>ActiveToggle('Pricing')}><a className={activeLink === 'Pricing' ? 'active': ''}>Pricing</a></li>
                    <li onClick={()=>ActiveToggle('Blog')}><a className={activeLink === 'Blog' ? 'active': ''}>Blog</a></li>
                    <li onClick={()=>ActiveToggle('Login')}><a className={activeLink === 'Login' ? 'active': ''}>Login</a></li>
                    <li className='btn'><a><Button label={'Get started'} clickHere={undefined} styles={styles} /></a></li>
                </ul>
                <div className='icon menu-btn' onClick={menuBtn}>
                    <GiHamburgerMenu />
                </div>
            </nav>
        </div>
    )
}

export default Navbar