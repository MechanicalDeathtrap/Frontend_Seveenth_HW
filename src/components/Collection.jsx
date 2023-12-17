import {useMemo, useState} from "react";


function Collection(){
    const [button, setButton] = useState("WillWatch");
    //const collectionElements = ({button} === "WillWatch") ? ;

    return(
        <div className="collection-container">
            <span className="page-title">Коллекция</span>
            <div className="collection__buttons">
                <div className="left-buttons">
                    <button className="will-watch-button" onClick={() => setButton("WillWatch")}>Буду смотреть {button}</button>
                    <button className="watched-button" onClick={() => setButton("Watched")}>Просмотрено</button>
                </div>
                <div className="change-view-button">
                    <img src="" alt="" className="change-view-icon"/>
                </div>
            </div>
            <div className="collection__table" >
                <CreateList/>
            </div>
        </div>
    )
}

function CreateList(){
    const collectionList = [];
    const htmlList = [];
    const json = ParseString();


    Object.keys(json).forEach((key) => {
        collectionList.push(json[key]);
    });

    collectionList.map((item, index) => {

        console.log(collectionList.length);
        Object.values(item).map((value) => {
                htmlList.push(<ul key={index}>
                    <li>
                        {/*<img src={value} alt="collection-image"/>*/}
                        <span>{value}</span>
                        <span>{value}</span>
                    </li>
                </ul>);
            })
        })
    return htmlList;
}

function ParseString() {
    const file = "[\n" +
        "    {\n" +
        "        \"id\": 1,\n" +
        "        \"name\": \"Годзилла\",\n" +
        "        \"src\": \"C:\\\\Users\\\\korik\\\\FrontendLessons\\\\frontend_last_hw\\\\public\\\\годзилла.png\",\n" +
        "        \"rating\": \"6.1\"\n" +
        "    },\n" +
        "    {\n" +
        "        \"id\": 2,\n" +
        "        \"name\": \"Девушка, подающая надежды\",\n" +
        "        \"src\": \"C:\\\\Users\\\\korik\\\\FrontendLessons\\\\frontend_last_hw\\\\public\\\\девушка.png\",\n" +
        "        \"rating\": \"6.8\"\n" +
        "    },\n" +
        "    {\n" +
        "        \"id\": 3,\n" +
        "        \"name\": \"Душа\",\n" +
        "        \"src\": \"C:\\\\Users\\\\korik\\\\FrontendLessons\\\\frontend_last_hw\\\\public\\\\душа.png\",\n" +
        "        \"rating\": \"8.3\"\n" +
        "    },\n" +
        "    {\n" +
        "        \"id\": 4,\n" +
        "        \"name\": \"Ещё по одной\",\n" +
        "        \"src\": \"C:\\\\Users\\\\korik\\\\FrontendLessons\\\\frontend_last_hw\\\\public\\\\ещё.png\",\n" +
        "        \"rating\": \"7.5\"\n" +
        "    },\n" +
        "    {\n" +
        "        \"id\": 5,\n" +
        "        \"name\": \"Земля кочевников\",\n" +
        "        \"src\": \"C:\\\\Users\\\\korik\\\\FrontendLessons\\\\frontend_last_hw\\\\public\\\\земля.png\",\n" +
        "        \"rating\": \"7.3\"\n" +
        "    },\n" +
        "    {\n" +
        "        \"id\": 6,\n" +
        "        \"name\": \"Манк\",\n" +
        "        \"src\": \"C:\\\\Users\\\\korik\\\\FrontendLessons\\\\frontend_last_hw\\\\public\\\\манк.png\",\n" +
        "        \"rating\": \"7.1\"\n" +
        "    },\n" +
        "    {\n" +
        "        \"id\": 7,\n" +
        "        \"name\": \"Минари\",\n" +
        "        \"src\": \"C:\\\\Users\\\\korik\\\\FrontendLessons\\\\frontend_last_hw\\\\public\\\\минари.png\",\n" +
        "        \"rating\": \"6.9\"\n" +
        "    },\n" +
        "    {\n" +
        "        \"id\": 8,\n" +
        "        \"name\": \"Отец\",\n" +
        "        \"src\": \"C:\\\\Users\\\\korik\\\\FrontendLessons\\\\frontend_last_hw\\\\public\\\\отец.png\",\n" +
        "        \"rating\": \"7.9\"\n" +
        "    },\n" +
        "    {\n" +
        "        \"id\": 9,\n" +
        "        \"name\": \"Солнцестояние\",\n" +
        "        \"src\": \"C:\\\\Users\\\\korik\\\\FrontendLessons\\\\frontend_last_hw\\\\public\\\\солнцестояние.png\",\n" +
        "        \"rating\": \"6.6\"\n" +
        "    }\n" +
        "]";

    return  JSON.parse(file);
}

export default Collection;