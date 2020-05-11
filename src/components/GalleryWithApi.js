import React, { useState, useEffect, useCallback } from 'react'
import Layout from './Layout'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { snippets } from '../snippets'
import { SRLWrapper } from 'simple-react-lightbox'

const options = {
  buttons: {
    hideButtonsAfter: false
  }
}

const callbacks = {
  onCountSlides: total => console.log(total)
}

const GalleryWithApi = () => {
  const [images, setImages] = useState([])

  console.log(images)

  let page = 0

  const fetchData = useCallback(async () => {
    page++
    const response = await fetch(
      'https://api.unsplash.com/photos/?client_id=gOy8fHKqCXN_JqPwTMZutDnp3aVAmyk-0aXKJCCg7b0&page=' +
        page
    )
    const data = await response.json()
    setImages(prevData => {
      return [...prevData, ...data]
    })
  }, [page])

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Layout>
      <div className="instructions">
        <div className="container content">
          <div className="row">
            <div className=" col-md-4 col-12">
              <div className="instruction">
                <p>
                  Fetching your images using API? No problem. Simple React
                  Lightbox will detected changes on the{' '}
                  <strong>"SRLWrapper"</strong> and re-render.
                </p>
                <p>
                  Try to hit the "Fetch more images" button and you will see
                  that more images will be added and the light-box will work as
                  usual.
                </p>

                <p>
                  <strong>PLEAE NOTE:</strong> if you just see the "loading..."
                  text or the button is not working is because I have reached
                  the maximum API Calls using "unsplash". Try again later.
                </p>

                <button
                  onClick={fetchData}
                  className="SRL_CTA-OpenLightbox light"
                >
                  fetch more images
                </button>
              </div>
            </div>
            <div className=" col-md-8 col-12">
              <SyntaxHighlighter language="jsx" style={darcula}>
                {snippets.withApi}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
      <SRLWrapper options={options} callbacks={callbacks}>
        <div id="content-page-one" className="container content">
          {!images ? (
            <div className="row">
              <div className="col-12">
                <h1>LOADING...</h1>
              </div>
            </div>
          ) : (
            <div className="row">
              {images.map(({ id, urls, alt_description }) => (
                <div key={id} className="col-md-4 col-6 col-image-small">
                  <a href={urls.regular} data-attribute="SRL">
                    <img src={urls.small} alt={alt_description} />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </SRLWrapper>
    </Layout>
  )
}

export default GalleryWithApi
