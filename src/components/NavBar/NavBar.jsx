import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

function NavBar() {
    return (
    <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.activeLink}>Профиль</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' activeClassName={s.activeLink}>Сообщения</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' activeClassName={s.activeLink}>Новости</NavLink>
        </div>
        <div className={s.item}>
            <a href='/'>Музыка</a>
        </div>
        <div className={s.item}>
            <a href='/'>Настройки</a>
        </div>
    </nav>

    )
}

export default NavBar;