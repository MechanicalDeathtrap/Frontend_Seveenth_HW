import "../styles/adding.css";
import CreateButtons from "./Buttons.jsx";

function Adding(){
    return(
        <div className="body-container">
            <div className="adding-container-header">
                <h1 className="page-title">О фильме</h1>
                <div className="collection-adding__buttons">
                    <div className="buttons">
                        <CreateButtons property={["Кинопоиск", "Вручную"]}/>
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