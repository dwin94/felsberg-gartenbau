import { Link } from 'gatsby'
import styled from 'styled-components'

import { COLORS, FONTS, media, BREAKPOINTS } from '../../styles/styleguide'

const Logo = styled(Link)`
  ${FONTS.STANDARD_TEXT_BOLD}
  color: ${COLORS.GREEN};
  text-decoration: none;
  text-align: center;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  border-right: 1px solid ${COLORS.BLACK_TRANSPARENT};

  ${media.lessThan(BREAKPOINTS.LARGE_MINUS_ONE)`
    padding: 0 10px;
  `}
`

export default Logo
