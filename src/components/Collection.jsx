
import "../styles/collection.css";
import CreateList from "./CreateList.jsx";
import CreateButtons from "./Buttons.jsx";

function Collection(){
    return(
        <div className="collection-container">
            <div className="container-header">
                <h1 className="page-title">Коллекция</h1>
                <div className="collection__buttons">
                    <div className="left-buttons">
                        <CreateButtons property={["Буду смотреть", "Просмотрено"]}/>
                    </div>
                    <div className="change-view-button">
                        <img src="/public/Icon_List.svg" alt="list-icon" className="change-view-icon"/>
                    </div>
                </div>
            </div>

            <div className="collection__table" >
                <ul className="collection-list">
                    <CreateList property={collectionJson}/>
                </ul>
            </div>
        </div>
    )
}

const collectionJson=
    [
        {
            id: 1,
            name: "Годзилла",
            src:"public/годзилла.png",
            rating: 6.1
        },
        {
            id: 2,
            name: "Девушка, пода...",
            src:"public/девушка.png",
            rating: 6.8
        },
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
            id: 8,
            name: "Отец",
            src:"public/отец.png",
            rating: 7.9
        },
        {
            id: 9,
            name: "Солнцестояние",
            src:"public/солнцестояние.png",
            rating: 6.6
        },
    ];

export default Collection;