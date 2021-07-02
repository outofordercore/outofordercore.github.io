/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/avatar.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          <strong>{author.name}</strong> {author?.summary || null}
          <br/>
          <strong>Note</strong>: Hyperlinks below open a new tab.
          <br/>
          {"You can reach out to me via "}
          <strong>
            <a href={`mailto:kprateeknayak@gmail.com`} rel="noreferrer" target={"_blank"}>
              Email
            </a>
          </strong>
          {", "}
          <strong>
            <a href={`https://twitter.com/${social?.twitter || ``}`} rel="noreferrer" target={"_blank"}>
              Twitter
            </a>
          </strong>
          {", or "}
          <strong>
            <a href={`https://github.com/outofordercore/outofordercore.github.io/issues`} rel="noreferrer" target={"_blank"}>
              Github
            </a>
          </strong>
          <br/>
          {"Avatar stolen from "}
          <strong>
            <a href={`https://knowyourmeme.com/photos/1896667-soy-boy-face-soyjak`} rel="noreferrer" target={"_blank"}>
              KnowYourMeme
            </a>
          </strong>
        </p>
      )}
    </div>
  )
}

export default Bio
