import styled from 'styled-components';

const DivContainer = styled.div `
    display: flex;
    justify-content: space-evenly;
    text-align: center;

    @media (max-width: 576px) {
        align-items: center;
        flex-direction: column;
    
}
`

export default function PortfolioDetail({icon, url, name}) {

    return (
        <DivContainer>
            <div>
            <i className={icon}></i>
            </div>
            <div>
                <a href={url} target='blank' style={{color: 'white'}}>{name}</a>
            </div>
        </DivContainer>
    )
}