import React from 'react'
import { Button } from '../../styles/Essentials.styles'
import { BuyNow, HeroHeading, HeroWrap, PlanDesc, PlanHeading, PlanLink, PlanOffer, PlanOffersHeading, PlanPrice, PlanStarts, PricingColumn, PricingContainer, PricingGrid, PricingWrap,   } from '../styles/home/Pricing.styles'
import {Link} from 'react-router-dom'
import {BsCheckLg} from 'react-icons/bs'

export default function Pricing() {
    return (
        <>
            <HeroWrap>
                <HeroHeading>Marketing smarts for growing businesses</HeroHeading>
            </HeroWrap>

            <PricingWrap>
                <PricingContainer>
                    <PricingGrid wrap="wrap">
                        <PricingColumn lg={3}>
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
                        <PricingColumn lg={3}>
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
                        <PricingColumn lg={3}>
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
                        <PricingColumn lg={3}>
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
        </>
    )
}
