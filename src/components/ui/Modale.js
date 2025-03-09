
export default function Modale({isactive, setisactive}) {
    
    return (
        <>
            <div className="popupContainer">
                <div className="popup">
                    <button className="close" onClick={() => setisactive(null)}>X</button>
                    <h3 className="details">{isactive.title}</h3>
                    <p className="details">{isactive.description}</p>
                    <a className="details" target="blank" href={isactive.url}>{isactive.url}</a>
                    <p className="details">As an Amazon Associate, I earn from qualifying purchases.</p>
                </div>
            </div>
        </>
    )
}