import type { GatsbyConfig } from "gatsby"

require("dotenv").config({
  path: ".env.development",
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Luxwook",
    siteUrl: "https://luxwook.netlify.app",
    description: "Luxwood",
  },
  plugins: [
    // `gatsby-plugin-sass`,
  ],
}

export default config
