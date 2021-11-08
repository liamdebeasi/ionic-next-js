import React, { useEffect } from 'react'

const Accordion = class extends HTMLElement {
  constructor() {
    super();
  }
}

const defineCustomElements = (win: Window) => {
  if (typeof (win as any) !== 'undefined') {
    win.customElements.define('ion-accordion', Accordion);
  }
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    defineCustomElements(window)
  })
  return (
    <div>
      Hello World
    </div>
  )
}

export default MyApp
