import styled from 'styled-components';
import {Column, Container, Flex, Grid} from "../../../styles/Essentials.styles"
import {Link} from "react-router-dom";
export const HeroWrap = styled.div`
    ${Flex}
    /* height: 80vh; */
    /* padding: 175px 0px; */
    background: #C5DBF2;
    margin-bottom: 300px;
    @media screen and (max-width: 1000px) { 
    margin-bottom: 250px;
    }
    @media screen and (max-width: 700px) { 
    margin-bottom: 200px;
    }
    @media screen and (max-width: 600px) { 
    margin-bottom: 150px;
    }
    @media screen and (max-width: 500px) { 
    margin-bottom: 100px;
    }
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



// highlight section 

export const HighlightContainer = styled(Container)`
    max-width: 1660px;
    margin: 60px auto;

    
`

export const HighlightGrid = styled(Grid)`
    width: 85%;
    margin: 0 auto;
`

export const HighlightColumn = styled(Column)`
 
`

export const HighlightImg = styled.img`
        width: 100%;

`
export const HighlightText = styled.div`
    ${Flex}
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    ${({pl, pr}) => pl?`
    padding-left: 140px;
    @media screen and (max-width: 992px) {
padding-left: 0px;
    }
    `:pr?`
    padding-right: 140px;
    @media screen and (max-width: 992px) {
padding-right: 0px;
    }
    `:''}

`
export const HighlightHeading = styled.h2`
    font-size: 2rem;
    letter-spacing: 0;
    color: #241c15;
    font-weight: 500;
    line-height: 1.1;
`
export const HighlightSubtitle = styled.p`
    margin: 40px 0px;
    line-height: 1.6;

`
export const HighlightLink = styled(Link)`
    font-size: 20px;
    font-weight: 400;
    ${Flex}
    transition: var(--main-transition);
    &:hover {

        color: var(--color-primary);

    }
`

export const MoreDetailsWrap = styled.section`
background: #f6f6f4;
padding: 60px 0px;


`

export const MoreDetailsContainer = styled(Container)`

`

export const MoreDetailsGrid = styled(Grid)`
    width: 85%;
    margin: 0 auto;
    font-size: 16px;
    @media screen and (max-width: 1000px) {
    font-size: 13px;
    } 

`

export const MoreDetailsHeading = styled.h1`
 
    text-align: center;
    font-size: 3.175em;
    max-width: 50%;

    letter-spacing: 2px;
    font-weight: 400;
    line-height: 1;
    @media screen and (max-width: 1000px) {
        max-width: 70%;
    }
    @media screen and (max-width: 765px) {
        max-width: 90%;
    }
`

export const MoreDetailsTextColumn = styled(Column)`
        padding: 21px 70px;
        @media screen and (max-width: 1200px) {
            padding: 21px 50px;
    }
        @media screen and (max-width: 1100px) {
            padding: 15px 25px;
    }
        @media screen and (max-width: 700px) {
            padding: 5px 15px;
    }
    margin: 10px 0px;
`

export const MoreDetailsColumnHeading = styled.h3`
    font-size: 1.4em;
    font-weight: 500;
    margin-bottom: 15px;
 
`
export const MoreDetailsColumnSubtitle = styled.p`

text-align: center;

`