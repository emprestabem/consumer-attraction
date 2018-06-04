import styled from 'styled-components'
import { media } from 'utils/media'

const Container = ({className, children, ...props}) => (
  <div className={className}>
    {children}
  </div>
)
Container.displayName = 'Container'

export default styled(Container)`
    ${media.tablet`
        max-width: 1180px;
        width: calc(100% - 20px);
        margin: 0 auto;
    `}
`
