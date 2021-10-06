import  './NavItem.styles.scss';


const NavItem = () => {
    return (
        <div>
        <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>All Tasks</h1>
                        <span className='subtitle'>Let's Go</span>
                    </div>
                </div>
                <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'> New Task</h1>
                    <span className='subtitle'>Let's Go</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>My Tasks</h1>
                    <span className='subtitle'>Let's Go</span>
                </div>
            </div>
            </div>
    )
}

export default NavItem;