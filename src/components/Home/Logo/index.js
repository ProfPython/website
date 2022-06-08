import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-w1.png'
import './index.scss'

const Logo = () => { 
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .fromTo(outlineLogoRef.current, 
        {
            drawSVG: "0 5%"
        }, 
        {
            duration: 20, drawSVG: "95% 100%"
        }
      )

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

<svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="#fff"
        >
          <path
            ref={outlineLogoRef}
            d="M 50.94 15.19 L 37.17 61.88 H 25.91 L 6.76 0.38 H 18.63 L 31.54 47.07 h 0.17 L 45.4 0.38 H 56.92 L 70.61 47.07 h 0.17 L 83.78 0.38 H 95.3 L 76.15 61.88 H 64.89 L 51.12 15.19 Z"/>
        </g>
      </svg>
    </div>
  )
}

export default Logo