
import './HomePage.styles.scss'

import NavItem from './components/NavItem';

const HomePage = () => {
    return (
        <div className='homepage'>
            <div className='directory-menu'>
                <NavItem />
            </div>
        </div>
    )
}

export default HomePage;