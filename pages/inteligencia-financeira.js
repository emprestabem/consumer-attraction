import Header from '../components/header'
import Hero from '../components/hero'
import InstallmentValue from '../components/calculators/installmentValue'

import React from 'react'
export default () => (
  <React.Fragment>
    <Header />
    <Hero
      background={
        {
          src: 'https://images.freeimages.com/images/large-previews/2ea/blue-balloon-1193182.jpg',
          alt: 'saude financeira'
        }
      }
      hue="300deg"
      title='Invista na sua inteligencia financeira' description='Incremente seu arsenal com nossas ferramentas de inteligencia financeira. Calcule de forma simples os juros, desconto na amortização, saldo devedor e muito mais.'>
      <InstallmentValue />

    </Hero>
  </React.Fragment>
)
