
export default function Modale({isactive, setisactive}) {
    
    return (
        <>
            <div className="popupContainer">
                <div className="popup">
                    <button className="close" onClick={() => setisactive(null)}>X</button>
                    <h3 className="detailsTitle">{isactive.descriptionTitle}</h3>
                    <p className="details">{isactive.description}</p>
                    <h5>🔵 Esperienza Personale (Uso Quotidiano) 🔵</h5>
                    <p className="details">{isactive.descriptionUse}</p>
                    <h5>🔵 Aggiornamento Periodico (Dopo 1 Mese di Utilizzo) 🔵</h5>
                    <p className="details">{isactive.descriptionUpdate}</p>
                    <h5>🔥 Conclusione 🔥</h5>
                    <p className="details">{isactive.descriptionClose}</p>
                    <a className="details" target="blank" href={isactive.url}>{isactive.url}</a>
                    <p className="details">In qualità di affiliato Amazon, ricevo un guadagno dagli acquisti idonei.</p>
                </div>
            </div>
        </>
    )
}