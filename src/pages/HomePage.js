
import './HomePage.styles.scss'

const HomePage = () => {
    return (
        <div className='homepage'>
            <div className='directory-menu'>
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
        </div>
    )
}

export default HomePage;