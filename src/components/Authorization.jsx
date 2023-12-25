import "../styles/authorization.css"
function AuthorizationComponent(){
    return(
        <div className="authorization-container">
            <div className="site-logo">
                <img src="/public/Watch_Later_Logo_Full.svg" alt="site-icon" className="site-icon"/>
            </div>
            <div className="authorization-form-container">
                <form className="authorization-form">
                    <div className="form-inputs">
                        <input type="email" className="form-inputs__input" placeholder="Адрес электронной почты"/>
                        <input type="password" className="form-inputs__input" placeholder="Пароль"/>
                    </div>
                    <div className="form-button">
                        <button type="button" className="form-button__buttons">Войти</button>
                    </div>
                </form>
                <div className="registration-container">
                    <span className="registration-text">
                        Ещё не зарегистрированы?
                        <a href="" className="registration-link"> Регистрация</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AuthorizationComponent;