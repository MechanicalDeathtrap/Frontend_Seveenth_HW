import '../styles/welcome-page.sass'
function WelcomeComponent(){
    return(
        <>
            <div className="welcome-page">
                <div className="main-logo">
                    <img src="/public/Watch_Later_Logo_Full.svg" alt="main-logo" className="main-big-logo"/>
                </div>
                <div className="agona-logo">
                    <img src="/public/Агона_логотип.svg" alt="agona" className="agona-icon"/>
                </div>
            </div>
        </>
    )
}

export default WelcomeComponent;