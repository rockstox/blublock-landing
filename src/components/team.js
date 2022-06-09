import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Team = () => (
  <div class="team">
      <div class="container">
          <h2>We are BluBlock.</h2>
          <p class="team-desc">NFT licensing requires a very specific blend of legal, engineering, and media expertise.</p>
          <div class="grid">
            <div class="item">
                <StaticImage
                    src="../images/ash-ape.png"
                    loading="eager"
                    width={200}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="{siteTitle}"
                />
                <p class="name">Ash Akula</p>
                <p class="desc">Legal + Biz Dev</p>
                <a href="twitter.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
            </div>
            <div class="item">
                <StaticImage
                    src="../images/hunter-ape.png"
                    loading="eager"
                    width={200}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="{siteTitle}"
                />
                <p class="name">Hunter Davis</p>
                <p class="desc">Software + Product</p>
            </div>
            <div class="item item-small">
            <StaticImage
                src="../images/franklin-ape.png"
                loading="eager"
                width={200}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="{siteTitle}"
            />
            <p class="name">Franklin</p>
            <p class="desc">53 Apes + Trader</p>
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