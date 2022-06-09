import * as React from "react"
import { Link } from "gatsby"

const Announcement = () => (
  <div class="announcement">
      <div class="container">
          <p>BluBlock secures a landmark NFT licensing deal with Funko!</p>
          <Link to="/announcement">
              Learn More!
            <svg data-testid="arrow-icon" class="cta-link__arrow" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 5L6 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 5L11 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </Link>
      </div>
  </div>
)

export default Announcement
