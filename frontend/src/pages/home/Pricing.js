import React, { useState } from 'react'
import { Button } from '../../styles/Essentials.styles'
import { BuyNow, CompanyLink, CompanyLogo, FaqAns, FaqColumn, FaqContainer, FaqDropDown, FaqDropDownAns, FaqDropDownWrap, FaqGrid, FaqHeading, FaqQuestion, FaqWrap, GoodCompanyColumn, GoodCompanyContainer, GoodCompanyGrid, GoodCompanyHeading, GoodCompanyWrap, HeroHeading, HeroWrap, PlanDesc, PlanHeading, PlanLink, PlanOffer, PlanOffersHeading, PlanPrice, PlanStarts, PricingColumn, PricingContainer, PricingGrid, PricingWrap,   } from '../styles/home/Pricing.styles'
import {Link} from 'react-router-dom'
import {BsCheckLg} from 'react-icons/bs'

import companyLogo1 from '../../assets/images/company-logo-1.webp'
import companyLogo2 from '../../assets/images/company-logo-2.webp'
import companyLogo3 from '../../assets/images/company-logo-3.webp'
import companyLogo4 from '../../assets/images/company-logo-4.webp'


export default function Pricing() {
    return (
        <>
            <HeroWrap>
                <HeroHeading>Marketing smarts for growing businesses</HeroHeading>
            </HeroWrap>

            <PricingWrap>
                <PricingContainer>
                    <PricingGrid wrap="wrap">
                        <PricingColumn lg={3} md={6} sx={12}>
                            <PlanHeading>Premium</PlanHeading>
                            <PlanDesc>Advanced features for pros who need more customization.</PlanDesc>
                            <PlanStarts>Starts at</PlanStarts>
                            <PlanPrice>299</PlanPrice>
                            <PlanStarts>/month based on 10,000 contacts*</PlanStarts>
                            <PlanLink to="#">How many contacts do you have?</PlanLink>
                            <BuyNow>Buy Now</BuyNow>
                            <PlanOffersHeading>Everything in Standard, plus:</PlanOffersHeading>
                            <PlanOffer><BsCheckLg style={{marginRight:"10px"}}  color='var(--color-primary)' />Advanced Segmentation</PlanOffer>
                            <PlanOffer><BsCheckLg style={{marginRight:"10px"}}  color='var(--color-primary)' />Multivariate Testing</PlanOffer>
                            <PlanOffer><BsCheckLg style={{marginRight:"10px"}}  color='var(--color-primary)' />Comparative Reporting</PlanOffer>
                            <PlanOffer><BsCheckLg style={{marginRight:"10px"}}  color='var(--color-primary)' />Unlimited Seats & Role-Based Access</PlanOffer>
                            <PlanOffer><BsCheckLg style={{marginRight:"10px"}}  color='var(--color-primary)' />Phone & Priority Support</PlanOffer> 
                            <PlanLink style={{    marginTop: "15px"}} to="#">About Premium</PlanLink>
                        </PricingColumn> 
                        <PricingColumn lg={3} md={6} sx={12}>
                            <PlanHeading>Standard</PlanHeading>
                            <PlanDesc>Data-driven automation and optimization tools for businesses that want to grow faster.</PlanDesc>
                            <PlanStarts>Starts at</PlanStarts>
                            <PlanPrice>14</PlanPrice>
                            <PlanStarts>/month based on 5000 contacts*</PlanStarts>
                            <PlanLink to="#">How many contacts do you have?</PlanLink>
                            <BuyNow>Buy Now</BuyNow>
                            <PlanOffersHeading>Everything in Standard, plus:</PlanOffersHeading>
                            <PlanOffer><BsCheckLg style={{marginRight:"10px"}}  color='var(--color-primary)' />Customer Journey Builder + Branching Points</PlanOffer>
                            <PlanOffer><BsCheckLg style={{marginRight:"10px"}}  color='var(--color-primary)' />Send Time Optimization</PlanOffer>
                            <PlanOffer><BsCheckLg style={{marginRight:"10px"}}  color='var(--color-primary)' />Behavioral Targeting</PlanOffer>
                            <PlanOffer><BsCheckLg style={{marginRight:"10px"}}  color='var(--color-primary)' />Custom Templates</PlanOffer>
                            <PlanOffer><BsCheckLg style={{marginRight:"10px"}}  color='var(--color-primary)' />Dynamic Content</PlanOffer> 
                            <PlanLink style={{    marginTop: "15px"}} to="#">About Premium</PlanLink>
                        </PricingColumn> 
                        <PricingColumn lg={3} md={6} sx={12}>
                            <PlanHeading>Essentials</PlanHeading>
                            <PlanDesc>Great for email-only senders who want around-the-clock support.</PlanDesc>
                            <PlanStarts>Starts at</PlanStarts>
                            <PlanPrice>9</PlanPrice>
                            <PlanStarts>/month based on 10,000 contacts*</PlanStarts>
                            <PlanLink to="#">How many contacts do you have?</PlanLink>
                            <BuyNow>Buy Now</BuyNow>
                            <PlanOffersHeading>Everything in Standard, plus:</PlanOffersHeading>
                            <PlanOffer><BsCheckLg style={{marginRight:"10px"}}  color='var(--color-primary)' />Email & Landing Page Templates</PlanOffer>
                            <PlanOffer><BsCheckLg style={{marginRight:"10px"}}  color='var(--color-primary)' />Customer Journey Builder</PlanOffer>
                            <PlanOffer><BsCheckLg style={{marginRight:"10px"}}  color='var(--color-primary)' />Custom Branding</PlanOffer>
                            <PlanOffer><BsCheckLg style={{marginRight:"10px"}}  color='var(--color-primary)' />A/B Testing</PlanOffer>
                            <PlanOffer><BsCheckLg style={{marginRight:"10px"}}  color='var(--color-primary)' />24/7 Email & Chat Support</PlanOffer> 
                            <PlanLink style={{    marginTop: "15px"}} to="#">About Premium</PlanLink>
                        </PricingColumn> 
                        <PricingColumn lg={3} md={6} sx={12}>
                            <PlanHeading>Free</PlanHeading>
                            <PlanDesc>All the multi-channel tools you need to build your business and grow your audience.</PlanDesc>
                            <PlanStarts>Starts at</PlanStarts>
                            <PlanPrice>0</PlanPrice>
                            <PlanStarts>/month based on 10,000 contacts*</PlanStarts>
                            <PlanLink to="#">How many contacts do you have?</PlanLink>
                            <BuyNow>Buy Now</BuyNow>
                            <PlanOffersHeading>Everything in Standard, plus:</PlanOffersHeading>
                            <PlanOffer><BsCheckLg style={{marginRight:"10px"}}  color='var(--color-primary)' />Marketing CRM</PlanOffer>
                            <PlanOffer><BsCheckLg style={{marginRight:"10px"}}  color='var(--color-primary)' />Creative Assistant</PlanOffer>
                            <PlanOffer><BsCheckLg style={{marginRight:"10px"}}  color='var(--color-primary)' />Website Builder</PlanOffer>
                            <PlanOffer><BsCheckLg style={{marginRight:"10px"}}  color='var(--color-primary)' />Mailchimp Domain</PlanOffer>
                            <PlanOffer><BsCheckLg style={{marginRight:"10px"}}  color='var(--color-primary)' />Forms & Landing Pages</PlanOffer> 
                            <PlanLink style={{    marginTop: "15px"}} to="#">About Premium</PlanLink>
                        </PricingColumn> 
                    </PricingGrid>
                </PricingContainer>
            </PricingWrap>

            <GoodCompanyWrap>
                <GoodCompanyContainer >
                    <GoodCompanyHeading>You’ll be in good <br /> company</GoodCompanyHeading>
                    <GoodCompanyGrid wrap="wrap" justify="space-around" >
                        <GoodCompanyColumn lg={3}  >
                            <CompanyLink to="#"><CompanyLogo src={companyLogo1} /></CompanyLink>
                        </GoodCompanyColumn>
                        <GoodCompanyColumn lg={3}  >
                            <CompanyLink to="#"><CompanyLogo src={companyLogo2} /></CompanyLink>
                        </GoodCompanyColumn>
                        <GoodCompanyColumn lg={3} >
                            <CompanyLink to="#"><CompanyLogo src={companyLogo3} /></CompanyLink>
                        </GoodCompanyColumn>
                        <GoodCompanyColumn lg={3}  >
                            <CompanyLink to="#"><CompanyLogo src={companyLogo4} /></CompanyLink>
                        </GoodCompanyColumn>
                    </GoodCompanyGrid>
                </GoodCompanyContainer>
                
            </GoodCompanyWrap>


            <FaqWrap>
                <FaqContainer>
                    <FaqHeading>Frequently asked questions</FaqHeading>
                    <FaqGrid wrap="wrap" justify="space-around" >
                        <FaqColumn lg={12}  ><DropDown /></FaqColumn>
                    </FaqGrid>
                </FaqContainer>
            </FaqWrap>
            
        </>
    )
}

 

function DropDown() {
    const [showDropDown, setShowDropDown] = useState(false)

    return (
        <>
            <FaqDropDownWrap>
                <FaqDropDown onClick={() => setShowDropDown(!showDropDown)}>
                    <FaqQuestion>What payment methods do you offer?</FaqQuestion>
                </FaqDropDown>
                {
                    showDropDown && (
                <FaqDropDownAns  >
                    <FaqAns>We accept all major credit cards, PayPal, and (in select countries) direct debit. We also support transactions in a range of currencies.</FaqAns>
                </FaqDropDownAns>
                    )
                }
            </FaqDropDownWrap>
        </>
    )
}
