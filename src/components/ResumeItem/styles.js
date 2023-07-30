
import styled from 'styled-components'

export const container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #ffff;
border-radius: 5px;
padding: 5px 15px;
width: 30%;
box-shadow: 0px 1px 3px black;

@media (max-width: 750px) {
    width: 20%;

    p{
        font-size: 12px;
    }
    span{
        font-size: 20px;
    }
    svg{
        display: none;
    }
}
`

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
gap:10px;
margin: 20px auto;

svg{
    width: 20px;
    height: 25px;
    color: #820ad1;
}
`

export const HeaderTitle = styled.p`
font-size: 20px;
`

export const Total = styled.span`
font-size: 30px;
font-weight: bold;

`
