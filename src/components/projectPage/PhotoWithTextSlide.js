import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image/withIEPolyfill'

import { SingleSlideWrapper, ImageDescription } from './GalleryElements'

const PhotoWithTextSlide = ({ image, imageDescription, imageText }) => (
  <SingleSlideWrapper>
    <Image
      fluid={image.childImageSharp.fluid}
      title={imageDescription}
      alt={imageDescription}
      style={{ width: '100%' }}
    />
    {imageText && <ImageDescription>{imageText}</ImageDescription>}
  </SingleSlideWrapper>
)

PhotoWithTextSlide.propTypes = {
  image: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
  imageDescription: PropTypes.string.isRequired,
  imageText: PropTypes.string,
}

export default PhotoWithTextSlide
