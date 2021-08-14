import React from 'react'
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';
import { ServicesCard, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesContainer, ServicesWrapper } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>My Hobbies and Interest</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>First Interest</ServicesH2>
                    <ServicesP>Description of the same</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>FSeconf Interest</ServicesH2>
                    <ServicesP>Description of the same</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Third Interest</ServicesH2>
                    <ServicesP>Description of the same</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
