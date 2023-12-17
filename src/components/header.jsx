import "../styles/header.css";
import {Link, Outlet, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
function Header() {
    const MenuButtons = props => {
        const location = useLocation();
        const [path, setPath] = useState("");

        function changePath(path) {
            setPath(path);
        }


        useEffect(() => {
            const currentPath = () => {
                switch (location.pathname) {

                    case "/" || "/welcome-page":
                        changePath("")
                        break;

                    case "/collection":
                        changePath("Collection")
                        break;

                    case "/search":
                        changePath("Search")
                        break;

                    case "add-to-watch-later":
                        changePath("Add")
                        break;

                }

            }
            currentPath();
        }, [path, location]);

        return (
            <>
                <header className="header__container">
                    <div className="header__left-buttons">
                        <Link to={'/collection'}>
                            <div className="collection-button" onClick={() => changePath("Collection")}>
                                <img src="/public/Vector.svg" alt="collection" className="collection-icon"/>
                                <span className="collection-title">Коллекция</span>
                            </div>
                        </Link>
                        <Link to={'/add-to-watch-later'}>
                            <div className="add-button" onClick={() => changePath("Add")}>
                                <img src="/public/plus.svg" alt="plus" className="add-icon"/>
                                <span className="add-title">Добавить</span>
                            </div>
                        </Link>
                    </div>

                    <div className="site-main-logo">
                        <img src="/public/Watch_Later_Logo_Short.svg" alt="header-logo" className="main-logo"/>
                    </div>
                    <div className="header__right-buttons">
                        <Link to={'/search'} className="search-button" onClick={() => changePath("Search")}>
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
}

export default Header