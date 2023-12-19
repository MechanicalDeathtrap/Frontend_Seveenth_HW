import "../styles/header.css";
import {NavLink, Outlet, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
function Header() {

    const location = useLocation();
    const [path, setPath] = useState("none");

    console.log(path);

    function changePath( path) {
        setPath(path);
    }


    useEffect(() => {
        const currentPath = () => {
            switch (location.pathname) {

                case "/" || "/welcome-page":
                    changePath("none")
                    break;

                case "/collection":
                    changePath("Collection")
                    break;

                case "/search":
                    changePath("Search")
                    break;

                case "/add-to-watch-later":
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
                        <NavLink to={'/collection'} key="Collection" className="link">
                            <div className={(path === "Collection")? "selected-button collection-button" : "collection-button"}
                                     onClick={() => changePath("Collection")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none"  >
                                        <path d="M9.13274 9.13274C9.55752 8.70796 9.87611 8.0708 9.87611 7.43363C9.87611 6.90265 9.66372 6.37168 9.34513 5.84071C7.75221 6.47788 6.47788 7.75221 5.84071 9.34513C6.26549 9.66372 6.79646 9.87611 7.43363 9.87611C8.0708 9.87611 8.70796 9.55752 9.13274 9.13274Z" />
                                        <path d="M9.13274 14.9735C8.70796 14.5487 8.0708 14.2301 7.32743 14.2301C6.79646 14.2301 6.26549 14.4425 5.73451 14.7611C6.37168 16.354 7.64602 17.5221 9.23894 18.2655C9.55752 17.8407 9.76991 17.3097 9.76991 16.6726C9.87611 16.0354 9.55752 15.3982 9.13274 14.9735Z" />
                                        <path d="M14.9735 9.13274C15.3982 9.55752 16.0354 9.87611 16.7788 9.87611C17.3097 9.87611 17.8407 9.66372 18.3717 9.34513C17.7345 7.75221 16.4602 6.58407 14.8673 5.84071C14.5487 6.26549 14.3363 6.79646 14.3363 7.43363C14.2301 8.0708 14.4425 8.70796 14.9735 9.13274Z"/>
                                        <path d="M14.9735 14.9735C14.5487 15.3982 14.2301 16.0354 14.2301 16.7788C14.2301 17.3097 14.4425 17.8407 14.7611 18.3717C16.354 17.7345 17.5221 16.4602 18.2655 14.8673C17.8407 14.5487 17.3097 14.3363 16.6726 14.3363C16.0354 14.2301 15.3982 14.4425 14.9735 14.9735Z" />
                                        <path d="M12 0C5.41593 0 0 5.41593 0 12C0 18.5841 5.41593 24 12 24C18.5841 24 24 18.5841 24 12C24 5.41593 18.6903 0 12 0ZM9.55752 18.7965C8.38938 19.9646 6.47788 19.9646 5.30973 18.7965C4.14159 17.6283 4.14159 15.7168 5.30973 14.5487C6.47788 13.3805 8.38938 13.3805 9.55752 14.5487C10.7257 15.7168 10.7257 17.6283 9.55752 18.7965ZM9.55752 9.55752C8.38938 10.7257 6.47788 10.7257 5.30973 9.55752C4.14159 8.38938 4.0354 6.47788 5.30973 5.30973C6.47788 4.14159 8.38938 4.14159 9.55752 5.30973C10.7257 6.47788 10.7257 8.38938 9.55752 9.55752ZM13.0619 13.0619C12.4248 13.6991 11.469 13.6991 10.9381 13.0619C10.3009 12.4248 10.3009 11.469 10.9381 10.9381C11.5752 10.3009 12.531 10.3009 13.0619 10.9381C13.6991 11.5752 13.6991 12.531 13.0619 13.0619ZM18.7965 18.7965C17.6283 19.9646 15.7168 19.9646 14.5487 18.7965C13.3805 17.6283 13.3805 15.7168 14.5487 14.5487C15.7168 13.3805 17.6283 13.3805 18.7965 14.5487C19.9646 15.7168 19.9646 17.6283 18.7965 18.7965ZM18.7965 9.55752C17.6283 10.7257 15.7168 10.7257 14.5487 9.55752C13.3805 8.38938 13.3805 6.47788 14.5487 5.30973C15.7168 4.14159 17.6283 4.14159 18.7965 5.30973C19.9646 6.47788 19.9646 8.38938 18.7965 9.55752Z" />
                                    </svg>
                                    {/*<img src="/public/Vector.svg" alt="collection" className="collection-icon"/>*/}
                                    <span className="collection-title">Коллекция</span>

                            </div>
                        </NavLink>
                        <NavLink to={'/add-to-watch-later'} key="Add" className={(path === "Add")? "selected-button link" : 'link'}>
                                <div className="add-button " onClick={e => changePath(e, "Add")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" className="add-icon">
                                        <path d="M9.33333 0H11.6667V21H9.33333V0Z" />
                                        <path d="M21 9.33333V11.6667L0 11.6667L8.15943e-08 9.33333H21Z" />
                                    </svg>
                                    {/* <img src="/public/plus.svg" alt="plus" className="add-icon"/>*/}
                                    <span className="add-title">Добавить</span>
                                </div>
                        </NavLink>
                    </div>

                    <div className="site-main-logo">
                        <img src="/public/Watch_Later_Logo_Short.svg" alt="header-logo" className="main-logo"/>
                    </div>
                    <div className="header__right-buttons">
                        <NavLink to={'/search'} onClick={() => changePath( "Search")}
                                 key="Search" className={(path === "Search")? "selected-button search-button link" : "search-button link"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" className="search-icon">
                                    <path d="M8.57621 16.99C10.4275 16.99 12.1561 16.3935 13.5613 15.3993L18.8476 20.6355C19.0929 20.8785 19.4164 21 19.7509 21C20.4758 21 21 20.4477 21 19.7407C21 19.4093 20.8885 19.0999 20.6431 18.8569L15.3903 13.6428C16.4944 12.2067 17.1524 10.4282 17.1524 8.495C17.1524 3.8222 13.2937 0 8.57621 0C3.84758 0 0 3.8222 0 8.495C0 13.1678 3.84758 16.99 8.57621 16.99ZM8.57621 15.1562C4.88476 15.1562 1.8513 12.1405 1.8513 8.495C1.8513 4.84955 4.88476 1.83377 8.57621 1.83377C12.2565 1.83377 15.3011 4.84955 15.3011 8.495C15.3011 12.1405 12.2565 15.1562 8.57621 15.1562Z" />
                                </svg>
                                {/*<img src="/public/magnifying-glass.svg" alt="magnifying-glass" className="search-icon"/>*/}
                                <span className="search-title">Поиск</span>
                        </NavLink>
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

export default Header