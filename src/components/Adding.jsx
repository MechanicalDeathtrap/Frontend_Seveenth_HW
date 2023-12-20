import "../styles/adding.css";

function Adding(){
    return(
        <div className="body-container">
            <div className="adding-container-header">
                <h1 className="page-title">О фильме</h1>
                <div className="collection-adding__buttons">
                    <div className="buttons">
                        <button className="kinopoisk-button chosen-adding-button" >КиноПоиск</button>
                        <button className="manually-button" >Вручную</button>
                    </div>
                </div>
            </div>
            <div className="search-container">
                <h3 className="search-container__title">Название</h3>
                <div className="search-input__container">
                    <input type="text" className="search-input" placeholder="Например, Титаник"/>
                </div>
            </div>
        </div>
    )
}

export default Adding;