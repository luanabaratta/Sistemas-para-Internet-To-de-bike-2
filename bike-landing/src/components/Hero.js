import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Video from '../assets/videos/banner.mp4'

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>Destinos Surreais</HeroH1>
          <HeroP>Com as melhores bikes</HeroP>
          <Button primary="true" round="true" small="false">Pedale agora</Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;

  :before {
  content:"";
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
  background: linear-gradient(
    180deg, 
    rgba(0,0,0,0.2) 0%, 
    rgba(0,0,0,0.6) 100%),
  linear-gradient(
    180deg, 
    rgba(0,0,0,0.2) 0%, 
    transparent 100%)
}
`

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`
const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vh - 1300px) / 2);
`
const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
`
const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
  font-weight: 700;
`
const HeroP = styled.p`
  font-size: clamp(1rem, 2vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 300;
`
