import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Bg from "./bg"

const Hero = () => (
  <hero class="hero">
      <div class="container">
        <Bg />        
        <div class="center">
            <h1>We turn NFT licensing rights into revenue</h1>
            <h6>BluBlock is a blend of media, engineering, and NFT experts that are revolutionizing NFT licensing.</h6>
            <div class="cta-container">
                <a href="https://uinxq3fcctl.typeform.com/to/BhFTUOQ7" target="_blank" class="btn btn-cta">Collaborate with us <svg data-testid="arrow-icon" class="cta-link__arrow" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 5L6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 5L11 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
                <span>or</span>
                <a href="" class="btn btn-secondary">Apply for the DAO</a>
            </div>
        </div>
      </div>
  </hero>
)

export default Hero
