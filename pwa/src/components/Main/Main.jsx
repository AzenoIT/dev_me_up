import {NavLink} from "react-router-dom";

import '../../styles/main.scss'

function Main() {
    return (
        <div className='body'>
            <header>
                <nav>
                    <NavLink to='/'>Main Page</NavLink>
                    <NavLink to='/battle'>Battle</NavLink>
                    <NavLink to='/ranking'>Ranking</NavLink>
                    <NavLink to='/profile'>Profile</NavLink>
                </nav>
            </header>
        </div>
    );
}

export default Main;