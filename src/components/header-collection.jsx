import {Link, Outlet} from "react-router-dom";

function HeaderCollection(){
    return(
        <>
            <header className="header__container">
                <div className="header__left-buttons">
                    <Link to={'/collection'} className="collection-button" >
                        <img src="/public/Vector-white.svg" alt="collection" className="collection-icon"/>
                        <span className="collection-title">Коллекция</span>
                    </Link>
                    <Link to={'/add-to-watch-later'}  className="add-button">
                        <img src="/public/plus.svg" alt="plus" className="add-icon"/>
                        <span className="add-title">Добавить</span>
                    </Link>
                </div>
                <div className="site-main-logo">
                    <img src="/public/Watch_Later_Logo_Short.svg" alt="header-logo" className="main-logo"/>
                </div>
                <div className="header__right-buttons">
                    <Link to={'/search'} className="search-button">
                        <img src="/public/magnifying-glass.svg" alt="magnifying-glass" className="search-icon"/>
                        <span className="search-title">Поиск</span>
                    </Link>
                    <div className="profile-photo">
                        <img src="/public/Web-Button-Profile.svg" alt="profile-photo" className="user-photo"/>
                    </div>
                </div>
            </header>
            <div>
                <Outlet/>
            </div>
        </>
    )
}

export default HeaderCollection;