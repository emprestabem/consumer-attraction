import { css } from 'styled-components';

export const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 376
}

const mediaFactory = size => (...args) => css`
    @media (min-width: ${size}px) {
        ${css(...args)}
    }
`

export const media = {
  desktop: mediaFactory(sizes.desktop),
  tablet: mediaFactory(sizes.tablet),
  phone: mediaFactory(sizes.phone)
}
