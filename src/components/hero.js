import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Bg from "./bg"

const Hero = () => (
  <hero class="hero">
      <div class="container">
        <Bg />        
        <div class="center">
            <h1>Unlock NFT Licensing</h1>
            <h6>If your NFTs have commercial licensing rights, then BluBlock turns those rights into revenue.</h6>
            <div class="cta-container">
                <a href="" class="btn btn-cta">Sign up as holder</a>
                <span>or</span>
                <a href="" class="btn btn-secondary">Get started as a brand</a>
            </div>
        </div>
      </div>
  </hero>
)

export default Hero
