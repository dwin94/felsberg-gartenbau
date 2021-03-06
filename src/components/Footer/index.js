import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import { linkPrefixes } from '../contactPage/constants'
import {
  FooterElement,
  Address,
  AddressItem,
  FooterLink,
} from './FooterElements'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(frontmatter: { title: { eq: "Kontakt" } }) {
          frontmatter {
            address {
              name
              street
              city
              googleMapsLink
            }
            furtherAdressInformation {
              contactInfo
              name
              type
            }
          }
        }
      }
    `}
    render={({
      markdownRemark: {
        frontmatter: {
          address: { name, street, city, googleMapsLink },
          furtherAdressInformation,
        },
      },
    }) => (
      <FooterElement>
        <FooterLink href={googleMapsLink} target="_blank" rel="noopener">
          <Address>
            <AddressItem>{name}</AddressItem>
            <AddressItem>{street}</AddressItem>
            <AddressItem>{city}</AddressItem>
          </Address>
        </FooterLink>

        {furtherAdressInformation.map(addressInfo => (
          <FooterLink
            key={addressInfo.contactInfo}
            href={`${linkPrefixes[addressInfo.type]}${addressInfo.contactInfo}`}
          >
            {addressInfo.name}: {addressInfo.contactInfo}
          </FooterLink>
        ))}

        <FooterLink as={Link} to="/datenschutz">
          Datenschutz
        </FooterLink>
      </FooterElement>
    )}
  />
)

export default Footer
