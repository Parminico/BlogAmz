
export default function Modale({isactive, setisactive}) {
    
    return (
        <>
            <div className="popupContainer">
                <div className="popup">
                    <button className="close" onClick={() => setisactive(null)}>X</button>
                    <h3 className="details-title">{isactive.title}</h3>
                    <p className="details-description">{isactive.description}</p>
                    <p className="details-copy"></p>
                </div>
            </div>
        </>
    )
}