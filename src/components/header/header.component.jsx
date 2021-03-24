import './header.style.scss';
import {Link} from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                ТОВАРЫ
            </Link>
            <Link className='option' to='/shop'>
                КОНТАКТЫ
            </Link>
        </div>
    </div>
)

export default Header;