import React, { useRef } from 'react'
import Slider from 'react-slick'

import Layout from './Layout'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { snippets } from '../snippets'

import { SRLWrapper } from 'simple-react-lightbox'

// Settings for Slick
const slickSettings = {
  dots: true,
  speed: 500,
  adaptiveHeight: true,
  infinite: false,
  draggable: false,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1
}

const ContentPageTwo = () => {
  const sliderRef = useRef()

  // Function to Sync the slide with Slick (Must be an arrow function)
  const syncSlide = index => {
    sliderRef.current.slickGoTo(index)
  }

  // Callback(s) to be passed to the SRLWrapper
  const callbacks = {
    onSlideChange: slide => console.log(slide),
    onLightboxOpened: current => console.log(current),
    onLightboxClosed: current => console.log(current),
    onCountSlides: total => console.log(total)
  }

  return (
    <Layout>
      <div className="instructions">
        <div className="container content">
          <div className="row">
            <div className=" col-md-4 col-12">
              <div className="instruction">
                <p>
                  This examples shows how you can use callbacks that can be
                  useful in some cases. Callbacks are simple functions that you
                  pass to the SRLWrapper component. Some of them gives you some
                  arguments that you can use{' '}
                  <strong>in your own function</strong>.
                </p>
                <p>
                  In this example we use the <strong>onSlideChange</strong>{' '}
                  callback and access one of the argument (the index of the
                  slide) to sync it with the Slick carousel. So your carousel
                  and the light-box are now synced!
                  <a
                    href="https://github.com/michelecocuccio/simple-react-lightbox#callbacks"
                    target="__blank"
                  >
                    Documentation on callbacks
                  </a>
                </p>
              </div>
            </div>
            <div className=" col-md-8 col-12">
              <SyntaxHighlighter language="jsx" style={darcula}>
                {snippets.withCallbacks}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
      <SRLWrapper callbacks={callbacks}>
        <div id="container-with-slick" className="container content">
          <div className="row">
            <div className="col-12">
              <Slider ref={sliderRef} {...slickSettings}>
                <div>
                  <img
                    src="https://www.simple-react-lightbox.dev/docs/gallery/unsplash17.jpg"
                    alt="Lake and mountains"
                  />
                </div>
                <div>
                  <img
                    src="https://www.simple-react-lightbox.dev/docs/gallery/unsplash18.jpg"
                    alt="A beautiful island"
                  />
                </div>
                <div>
                  <img
                    src="https://www.simple-react-lightbox.dev/docs/gallery/unsplash19.jpg"
                    alt="Waves"
                  />
                </div>
                <div>
                  <img
                    src="https://www.simple-react-lightbox.dev/docs/gallery/unsplash20.jpg"
                    alt="Desert of stones"
                  />
                </div>
                <div>
                  <img
                    src="https://www.simple-react-lightbox.dev/docs/gallery/unsplash16.jpg"
                    alt="Lighthouse"
                  />
                </div>
                <div>
                  <img
                    src="https://www.simple-react-lightbox.dev/docs/gallery/unsplash22.jpg"
                    alt="Waves..."
                  />
                </div>
                <div>
                  <img
                    src="https://www.simple-react-lightbox.dev/docs/gallery/unsplash23.jpg"
                    alt="Roar or Yawn?"
                  />
                </div>
                <div>
                  <img
                    src="https://www.simple-react-lightbox.dev/docs/gallery/unsplash13.jpg"
                    alt="Big mountain"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </SRLWrapper>
    </Layout>
  )
}

export default ContentPageTwo
