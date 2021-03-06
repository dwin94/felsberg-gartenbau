import React from 'react'
import PropTypes from 'prop-types'

import { CategoryContainer, InnerContainer } from './Container'
import { MobileImageLink, DesktopImageLink, ButtonLink } from './Links'
import { CategoryTitle, CategoryText } from './TextElements'
import CategoryImage from './CategoryImage'

const Category = ({ image, shortDescription, slug, title }) => (
  <CategoryContainer>
    <InnerContainer>
      <CategoryTitle>{title}</CategoryTitle>
      <MobileImageLink to={slug}>
        <CategoryImage fluid={image.childImageSharp.fluid} />
      </MobileImageLink>
      <CategoryText>{shortDescription}</CategoryText>
      <ButtonLink to={slug}>Mehr</ButtonLink>
    </InnerContainer>
    <DesktopImageLink to={slug}>
      <CategoryImage fluid={image.childImageSharp.fluid} />
    </DesktopImageLink>
  </CategoryContainer>
)

Category.propTypes = {
  image: PropTypes.shape({
    childImageSharp: PropTypes.object.isRequired,
  }).isRequired,
  shortDescription: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Category
