import styled from 'styled-components'
import Image from 'gatsby-image'

import { COLORS } from '../../../styles/styleguide'

const CategoryImage = styled(Image)`
  border-radius: 50%;
  border: 3px solid ${COLORS.GREEN};
  position: relative;

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${COLORS.BLACK_TRANSPARENT};
  }
`

export default CategoryImage
