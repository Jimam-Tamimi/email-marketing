import styled from 'styled-components';
import {Column, Flex, Grid} from "../../../styles/Essentials.styles"

export const HeroWrap = styled.div`
    ${Flex}
    /* height: 80vh; */
    /* padding: 175px 0px; */
    background: #C5DBF2;

`;

export const HeroGrid = styled(Grid)`
    max-width: 1660px;
`;  

export const HeroColumn = styled(Column)`
    width: 65%;
    font-size: 18px;
    @media screen and (max-width: 1300px) {
    width: 85%;
    font-size: 12px;
    }
    margin: 60px 0px;
    padding: 10px 0px  233px 0px;
    @media screen and (max-width: 800px) {
        padding: 10px 0px 133px 0px;
        
    } 
    @media screen and (max-width: 550px) {
        padding: 10px 0px 7 3px 0px;
        
    } 
`;  

 
export const HeroTextUp = styled.h4`
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    margin: 10px 0px;

`;  

export const HeroTextMain = styled.h1`
    font-size: 2.3em;
    /* max-width: 800px; */
    text-align: center;
    font-weight: 600;
    margin-top: 1.875rem;
    @media screen and (max-width: 1300px) {
    margin-top: .51em;
        
    }
`;  

export const HeroTextDown = styled.h3`
    text-align: center;
    font-size: 1.175em;
    font-weight: 400;
    letter-spacing: 2px;
    margin-top: 1.875em;
    /* max-width: 950px; */


`;  

export const HeroImage = styled.img`
    width: 100%;
    max-width: 770px;
    position: absolute;
    
`