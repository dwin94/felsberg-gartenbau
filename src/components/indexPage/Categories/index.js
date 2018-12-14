import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import HoverHandler from '../../helper/HoverHandler'

import CategoryText from './CategoryText'
import CategoriesContainer from './CategoriesContainer'
import CategoryLink from './CategoryLink'
import CategoryTitle from './CategoryTitle'
import CategoryImage from './CategoryImage'

// TODO: add short description instead of showing html -> Erfahren Sie mehr über...
const Categories = ({ defaultCategory }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: {
            frontmatter: { categoryOnHomepage: { visible: { eq: true } } }
          }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                categoryOnHomepage {
                  order
                }
                image {
                  childImageSharp {
                    fixed(width: 250, height: 250) {
                      ...GatsbyImageSharpFixed_withWebp_tracedSVG
                    }
                  }
                }
                shortDescription
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => (
      <HoverHandler defaultItem={defaultCategory}>
        {({ hoveredItem: hoveredCategory, handleHover, handleUnhover }) => (
          <div onMouseLeave={handleUnhover}>
            <CategoryText
              title={hoveredCategory.frontmatter.title}
              shortDescription={hoveredCategory.frontmatter.shortDescription}
            />

            <CategoriesContainer>
              {allMarkdownRemark.edges
                .sort(
                  (edgeA, edgeB) =>
                    edgeA.node.frontmatter.categoryOnHomepage.order -
                    edgeB.node.frontmatter.categoryOnHomepage.order,
                )
                .map(({ node }) => {
                  const hovered = Number(
                    node.id === hoveredCategory.id,
                  ) /* https://github.com/styled-components/styled-components/issues/1198 */

                  return (
                    <CategoryLink
                      key={node.frontmatter.title}
                      to={node.fields.slug}
                      onMouseEnter={() => handleHover(node)}
                    >
                      <CategoryImage
                        fixed={node.frontmatter.image.childImageSharp.fixed}
                        hovered={hovered}
                      />
                      <CategoryTitle hovered={hovered}>
                        {node.frontmatter.title}
                      </CategoryTitle>
                    </CategoryLink>
                  )
                })}
            </CategoriesContainer>
          </div>
        )}
      </HoverHandler>
    )}
  />
)

Categories.propTypes = {
  defaultCategory: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.object.isRequired,
      shortDescription: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default Categories
