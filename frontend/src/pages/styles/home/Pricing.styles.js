import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Column, Container, Flex, Grid } from "../../../styles/Essentials.styles";

export const HeroWrap = styled.section`
    width: 100vw;
    padding-top: 112px;
    ${Flex}
    background-color: #FFE01B;
`

export const HeroHeading = styled.h1`
     padding: 115px 0px;
     font-size: 3rem;
    letter-spacing: -.03125rem;
    font-weight: 500;
`

export const PricingWrap = styled.section`
 
`

export const PricingContainer = styled(Container)`

`

export const PricingGrid = styled(Grid)`

`

export const PricingColumn = styled(Column)`
    border: 2px solid red;
    flex-direction: column;
    align-items: flex-start;
    padding: 50px 40px;
    border: 1px solid #dbd9d2;
`
export const PlanHeading = styled.h2`
font-size: 1.89rem;
    font-weight: 500;
`
export const PlanDesc = styled.p`

font-size: .9rem;
    margin: 22px 0px;

`
export const PlanStarts = styled.p`
    font-size: .88rem;

`
export const PlanLink = styled(Link)`
    font-size: .92rem;
    font-weight: 600;
    &:hover {
        text-decoration: underline;
    }
`
export const PlanPrice = styled.h1`
    font-size: 3.2rem;
    &::before{
        content: '$';
        font-size: .9rem;
        margin-right: 5px;
        
    }
    
`
export const PlanOffer = styled.p`
    font-weight: 400;
    font-size: 1.06rem;
    margin: 9px 0px;
    ${Flex}
`
export const PlanOffersHeading = styled.h6`
    font-size: .82rem;
    font-weight: 600;
`
export const BuyNow = styled(Button)`
    width: 100%;
    margin: 30px 0px;
`