import { Button } from '../ButtonElement';
import React, {useState} from 'react';
import Video from '../../videos/video.mp4';

import { HeroContainer, HeroBg, VideoBg, ArrowRight, ArrowForward, HeroBtnWrapper, HeroH1, HeroP, HeroContent } from './HeroSectionElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Heading</HeroH1>
                <HeroP>
                   More Info About Person
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
