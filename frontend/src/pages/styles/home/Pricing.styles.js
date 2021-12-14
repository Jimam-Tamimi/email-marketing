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
    margin: 20px 0px;
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



export const GoodCompanyWrap = styled.section`
    padding: 100px 0px;

`
export const GoodCompanyContainer = styled(Container)`

    ${Flex}
    flex-direction: column;
    align-items: center;
`
export const GoodCompanyGrid = styled(Grid)`

`
export const GoodCompanyHeading = styled.h1`
    text-align: center;
    font-size: 3.2rem;
    font-weight: 500;
    margin: 50px 0px;


`
export const GoodCompanyColumn = styled(Column)`

`
export const CompanyLink = styled(Link)`

`
export const CompanyLogo = styled.img`
    width: 80%;
`




export const FaqWrap = styled.section`
    
`
export const FaqHeading = styled.h1`
    
`
export const FaqContainer = styled(Container)`
    ${Flex}
    flex-direction: column;
`
export const FaqGrid = styled(Grid)`
    
`

export const FaqColumn = styled(Column)`
    
`
export const FaqDropDownWrap = styled.div`
width: 100%;
    
`
export const FaqDropDown = styled.div`

`
export const FaqQuestion = styled.h2`

`
export const FaqDropDownAns = styled.div`

`
export const FaqAns = styled.p`

`