import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Team = () => (
  <div class="team">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 1680 40" class="curve"><path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff"></path></svg>
      <div class="container">
          <h2>We are <span>BluBlock.</span></h2>
          <p class="team-desc">The team has closed over $500 MM+ in licensing deal flow.</p>
          <div class="grid">
            <div class="item">
                <StaticImage
                    src="../images/ash-profile.png"
                    loading="eager"
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="{siteTitle}"
                />
                <p class="name">Ash Akula</p>
                <p class="desc">Legal + Biz Dev</p>
                <div class="socials">
                    <a target="_blank" href="https://twitter.com/AshAkula">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/ashwant-venkatram-410031126/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                </div>
                
            </div>
            <div class="item item-middle">
                <StaticImage
                    src="../images/hunter-profile.png"
                    loading="eager"
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="{siteTitle}"
                />
                <p class="name">Hunter Davis</p>
                <p class="desc">Software + Product</p>
                <div class="socials">
                    <a target="_blank" href="https://twitter.com/Rockstox">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/hunter-davis-8931a142/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                </div>
            </div>
            <div class="item item-small">
            <StaticImage
                src="../images/franklin-ape.png"
                loading="eager"
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="{siteTitle}"
            />
            <p class="name">Franklin</p>
            <p class="desc">53 Apes + Trader</p>
            <div class="socials">
                    <a target="_blank" href="https://twitter.com/franklinisbored">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </a>
                </div>
            </div>
            {/* <div class="item item-small">
            <StaticImage
                src="../images/ken-ape.png"
                loading="eager"
                width={200}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="{siteTitle}"
            />
            <p class="name">Ken Browning</p>
            <p class="desc">Legal</p>
            </div> */}
          </div>
      </div>
  </div>
)

export default Team