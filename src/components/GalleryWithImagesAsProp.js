import React from 'react'
import Layout from './Layout'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { snippets } from '../snippets'
import { SRLWrapper } from 'simple-react-lightbox'
import Button from './Button'

const options = {
  buttons: {
    backgroundColor: '#1C7293',
    iconColor: '#e8eddf',
    iconPadding: '7px'
  },
  caption: {
    captionColor: '#e8eddf',
    captionFontSize: '22px'
  },
  thumbnails: {
    thumbnailsOpacity: 1
  },
  settings: {
    overlayColor: 'rgba(6, 90, 130, 0.9)'
  }
}

const images = [
  {
    src: 'https://www.simple-react-lightbox.dev/docs/gallery/unsplash01.jpg',
    thumbnail:
      'https://www.simple-react-lightbox.dev/docs/gallery/thumbnails/unsplash01.jpg',
    caption: 'Lorem ipsum dolor sit amet',
    width: 1920,
    height: 'auto'
  },
  {
    src: 'https://www.simple-react-lightbox.dev/docs/gallery/unsplash02.jpg',
    thumbnail:
      'https://www.simple-react-lightbox.dev/docs/gallery/thumbnails/unsplash02.jpg',
    caption: 'Consecutur adiscip elit',
    width: 2000,
    height: 'auto'
  },
  {
    src: 'https://www.simple-react-lightbox.dev/docs/gallery/unsplash03.jpg',
    thumbnail:
      'https://www.simple-react-lightbox.dev/docs/gallery/thumbnails/unsplash03.jpg',
    caption: 'Commodo commodo dolore',
    width: 1024,
    height: 'auto'
  }
]

// Callback(s) to be passed to the SRLWrapper
const callbacks = {
  onSlideChange: slide => console.log(slide),
  onLightboxOpened: current => console.log(current),
  onLightboxClosed: current => console.log(current),
  onCountSlides: total => console.log(total)
}

const Content = () => {
  return (
    <Layout>
      <div className="instructions">
        <div className="container content">
          <div className="row">
            <div className=" col-md-4 col-12">
              <div className="instruction">
                <p>
                  This is a more traditional approach which I honestly don't
                  like but I have added it anyway. If you want to discover the
                  reason why Simple React Lightbox is different, check the "my
                  idea" section on the documentation where I explain what's
                  different compared from a traditional light-box;
                </p>
                <Button light />
                <a
                  href="https://github.com/michelecocuccio/simple-react-lightbox#a-brief-introduction"
                  target="__blank"
                >
                  Why Simple React Lightbox is different?
                </a>
              </div>
            </div>
            <div className=" col-md-8 col-12">
              <SyntaxHighlighter language="jsx" style={darcula}>
                {snippets.withProps}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
      <SRLWrapper options={options} images={images} callbacks={callbacks} />
    </Layout>
  )
}

export default Content
