import Container from '../common/container'
import styled, {css} from 'styled-components'
import React from 'react'

const Hero = ({className, title, description, background, children}) => (
  <section className={className}>
    <img {...background} className="hero__background" />
    <Container className="hero__container">
      <div className="hero__holder">
        <div className="hero__information">
          {
            React.Children.count(children) > 0 ? children : (
              <React.Fragment>
                <h1 className="hero__title">{title}</h1>
                <p className="hero__description">{description}</p>
              </React.Fragment>
            )
          }
        </div>
      </div>
    </Container>
  </section>
)

Hero.displayName = 'Hero'

export default styled(Hero)`
    position: relative;
    height: calc( 100vh - 56px);
    z-index: 1;
    &:before {
        content: "";
        background: url(http://themexriver.com/miex/assets/images/home-1-hero-bg.png) center center/cover no-repeat local;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: -56px;
        z-index: 1;
        
        ${({hue}) => css`filter: hue-rotate(${hue || '190deg'});`}
    }
    .hero__background {
        position: absolute;
        right: 0;
        top: -56px;
        height: calc( 100vh - 56px );
    }
    .hero__container {
        height: calc( 100vh - 56px);
        display: table;
        position:relative;
        z-index: 1;
    }
    .hero__holder{
        display: table-cell;
        vertical-align: middle;
    }
    .hero__information {
        width: 58%;
        padding-left: 5%;
        height: 75%;
    }
    .hero__description{
        width: 75%;
        line-height: 1.75rem;
        padding-left: 2rem;
    }
    .hero__title {
        font-size: 4rem;
    }
`
