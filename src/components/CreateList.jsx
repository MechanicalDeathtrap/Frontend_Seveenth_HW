function CreateList({property}){
    const collectionList = [];
    const htmlList = [];
    const json = property;


    Object.keys(json).forEach((key) => {
        collectionList.push(json[key]);
    });

    collectionList.forEach((item) => {
        htmlList.push(
            <li key={item.id} className="list-item">
                <img src={item.src} alt="collection-image" className="item-image"/>
                <span className="item-name">{item.name}</span>
                <div className="rating-container">
                    <span className="item-rating">{item.rating}</span>
                </div>

            </li> );
    })

    return htmlList;
}

export default CreateList;