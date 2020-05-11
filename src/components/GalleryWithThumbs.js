import React from 'react'
import Layout from './Layout'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { snippets } from '../snippets'

import { SRLWrapper } from 'simple-react-lightbox'

const options = {
  buttons: {
    backgroundColor: 'rgba(140, 94, 88, 0.8)',
    iconColor: 'rgba(241, 191, 152, 0.7)'
  },
  settings: {
    overlayColor: 'rgba(255, 237, 225, 0.95)',
    showThumbnails: false,
    transitionSpeed: 1000,
    transitionTimingFunction: 'linear'
  },
  caption: {
    showCaption: false
  }
}

function GalleryWithLinks() {
  return (
    <Layout>
      <div className="instructions">
        <div className="container content">
          <div className="row">
            <div className=" col-md-4 col-12">
              <div className="instruction">
                <p>
                  This examples shows how you can create a gallery with
                  thumbnails. By using the <strong>data-attribute="SRL"</strong>{' '}
                  you can select the image that you want to open (which is going
                  to be the link that wraps the thumbnail).
                </p>
                <a
                  href="https://github.com/michelecocuccio/simple-react-lightbox#custom-gallery"
                  target="__blank"
                >
                  Documentation on how to use it
                </a>
              </div>
            </div>
            <div className=" col-md-8 col-12">
              <SyntaxHighlighter language="jsx" style={darcula}>
                {snippets.withDataAttribute}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
      <SRLWrapper options={options}>
        <div id="gallery-with-links" className="container content">
          <div className="row">
            <div className="col-md-4 col-6 col-image-with-link">
              <a
                href="https://www.simple-react-lightbox.dev/docs/gallery/unsplash17.jpg"
                data-attribute="SRL"
                className="pseudo-element"
              >
                <img
                  src="https://www.simple-react-lightbox.dev/docs/gallery/thumbnails/unsplash17.jpg"
                  alt="A small boat"
                />
              </a>
            </div>
            <div className="col-md-4 col-6 col-image-with-link">
              <a
                href="https://www.simple-react-lightbox.dev/docs/gallery/unsplash19.jpg"
                data-attribute="SRL"
                className="pseudo-element"
              >
                <img
                  src="https://www.simple-react-lightbox.dev/docs/gallery/thumbnails/unsplash19.jpg"
                  alt="Penguins kissed by the sun"
                />
              </a>
            </div>
            <div className="col-md-4 col-6 col-image-with-link">
              <a
                href="https://www.simple-react-lightbox.dev/docs/gallery/unsplash04.jpg"
                data-attribute="SRL"
                className="pseudo-element"
              >
                <img
                  src="https://www.simple-react-lightbox.dev/docs/gallery/thumbnails/unsplash04.jpg"
                  alt="Penguins kissed by the sun"
                />
              </a>
            </div>
            <div className="col-md-3 col-6 col-image-with-link">
              <a
                href="https://www.simple-react-lightbox.dev/docs/gallery/unsplash05.jpg"
                data-attribute="SRL"
                className="pseudo-element"
              >
                <img
                  src="https://www.simple-react-lightbox.dev/docs/gallery/thumbnails/unsplash05.jpg"
                  alt="A peaceful lake."
                />
              </a>
            </div>
            <div className="col-md-3 col-6 col-image-with-link">
              <a
                href="https://www.simple-react-lightbox.dev/docs/gallery/unsplash20.jpg"
                data-attribute="SRL"
                className="pseudo-element"
              >
                <img
                  src="https://www.simple-react-lightbox.dev/docs/gallery/thumbnails/unsplash20.jpg"
                  alt="A peaceful lake."
                />
              </a>
            </div>
            <div className="col-md-3 col-6 col-image-with-link">
              <a
                href="https://www.simple-react-lightbox.dev/docs/gallery/unsplash21.jpg"
                data-attribute="SRL"
                className="pseudo-element"
              >
                <img
                  src="https://www.simple-react-lightbox.dev/docs/gallery/thumbnails/unsplash21.jpg"
                  alt="Small insect"
                />
              </a>
            </div>
            <div className="col-md-3 col-6 col-image-with-link">
              <a
                href="https://www.simple-react-lightbox.dev/docs/gallery/unsplash22.jpg"
                data-attribute="SRL"
                className="pseudo-element"
              >
                <img
                  src="https://www.simple-react-lightbox.dev/docs/gallery/thumbnails/unsplash22.jpg"
                  alt="Desert lizard"
                />
              </a>
            </div>
          </div>
        </div>
      </SRLWrapper>
    </Layout>
  )
}

export default GalleryWithLinks
