
export default function Modale({isactive, setisactive}) {
    
    return (
        <>
            <div className="popupContainer">
                <div className="popup">
                    <button className="close" onClick={() => setisactive(null)}>X</button>
                    <h3 className="details">{isactive.title}</h3>
                    <p className="details">{isactive.description}</p>
                    <a className="details" target="blank" href={isactive.url}>{isactive.url}</a>
                    <p className="details">In qualità di affiliato Amazon, ricevo un guadagno dagli acquisti idonei.</p>
                </div>
            </div>
        </>
    )
}