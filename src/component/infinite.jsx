import React from 'react'
import vogue from "../assets/inftslider/VOUGE.svg"
import Economic from "../assets/inftslider/Economic.svg"
import india from "../assets/inftslider/indiatoday.svg"
import cnbc from "../assets/inftslider/CNBC.svg"
import retail from "../assets/inftslider/Retail.svg"
import news from "../assets/inftslider/news18.svg"
import refine from "../assets/inftslider/Rifinary.svg"
import forbos from "../assets/inftslider/forbse.svg"
import hello from "../assets/inftslider/hello.svg"
import austrelia from "../assets/inftslider/Australia.svg"
import by from "../assets/inftslider/byrdie.svg"
import knot from "../assets/inftslider/knot.svg"
import prevent from "../assets/inftslider/prevention.svg"
import mideum from "../assets/inftslider/Medium.svg"

const Infinite = () => {
  return (
    <>
    <div > 
      <marquee behavior="" direction="right" onmouseover="this.stop();" onmouseout="this.start();">
        <div className='flex gap-20'>
            <img className='h-8' src={vogue} alt="" />
            <img className='h-8' src={Economic} alt="" />
            <img className='h-8' src={india} alt="" />
            <img className='h-8' src={cnbc} alt="" />
            <img className='h-8' src={retail} alt="" />
            <img className='h-8' src={news} alt="" />
            <img className='h-8' src={refine} alt="" />
            <img className='h-8' src={forbos} alt="" />
            <img className='h-8' src={hello} alt="" />
            <img className='h-8' src={austrelia} alt="" />
            <img className='h-8' src={by} alt="" />
            <img className='h-8' src={knot} alt="" />
            <img className='h-8' src={prevent} alt="" />
            <img className='h-8' src={mideum} alt="" />
        </div>
      </marquee></div>
    </>
  )
}

export default Infinite
