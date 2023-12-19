import CreateList from "./CreateList.jsx";
import "../styles/search.css";

function SearchComponent(){
    return(
        <div className="body-container">
            <div className="search-header">
                <h1 className="page-title">Поиск</h1>
                <div className="search-input__container">
                    <input type="text" className="search-input" placeholder="Введите название фильма, например «Титаник»"/>
                </div>
            </div>
            <div className="search-collection">
                <section className="images-section">
                    <div className="section-buttons">
                        <h3 className="section-buttons__title">Рекомендации</h3>
                        <a href="#" className="section-buttons__link">Все</a>
                    </div>
                    <div className="section-items">
                        <ul className="items-list">
                            <CreateList property={recommendationJson}/>
                        </ul>
                    </div>
                </section>
                <section className="images-section">
                    <div className="section-buttons">
                        <h3 className="section-buttons__title">Оскар 2021</h3>
                        <a href="#" className="section-buttons__link">Все</a>
                    </div>
                    <div className="section-items">
                        <ul className="items-list">
                            <CreateList property={oskarJson}/>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}


const recommendationJson =
[
        {
            id: 2,
            name: "Девушка, пода...",
            src:"public/девушка.png",
            rating: 6.8
        },
        {
            id: 6,
            name: "Манк",
            src:"public/манк.png",
            rating: 7.1
        },
        {
            id: 7,
            name: "Минари",
            src:"public/минари.png",
            rating: 6.9
        },
        {
            id: 9,
            name: "Солнцестояние",
            src:"public/солнцестояние.png",
            rating: 6.6
        }
];

const oskarJson=
    [
        {
            id: 3,
            name: "Душа",
            src:"public/душа.png",
            rating: 8.3
        },
        {
            id: 4,
            name: "Ещё по одной",
            src:"public/ещё.png",
            rating: 7.5
        },
        {
            id: 5,
            name: "Земля кочевни...",
            src:"public/земля.png",
            rating: 7.3
        },
        {
            id: 8,
            name: "Отец",
            src:"public/отец.png",
            rating: 7.9
        }
    ];

export default SearchComponent;