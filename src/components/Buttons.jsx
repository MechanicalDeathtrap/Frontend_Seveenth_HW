
function CreateButtons({property}){
    return(
        <>
            <button type="button" className="first-button chosen-button" >
                <span className="button-text">{property[0]}</span>
            </button>
            <button type="button" className="second-button" >
                <span className="button-text">{property[1]}</span>
            </button>
        </>
    )
}

export default CreateButtons;