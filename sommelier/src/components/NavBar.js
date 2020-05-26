import React from 'react';

const Navbar = props => {
    const { view, changeView, username } = props;
    return (
        <div className="simple-flex-row top">
            {username ? <div onClick={() => changeView('home')}> Welcome to Sommelier, {username} </div>
            :  <div onClick={() => changeView('home')}> Wine Pair App </div>}
            <div className={view === 'login' ? 'btn active' : 'btn inactive'} onClick={() => changeView('login')}>Login</div>
        </div>
    )
}

export default Navbar;