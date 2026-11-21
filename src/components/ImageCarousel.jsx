import React, { useState } from 'react'

export default function ImageCarousel({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!Array.isArray(images) || images.length === 0) return null

  const showPrevious = () => {
    setCurrentIndex(index => (index === 0 ? images.length - 1 : index - 1))
  }

  const showNext = () => {
    setCurrentIndex(index => (index + 1) % images.length)
  }

  const currentImage = images[currentIndex]

  return (
    <div className="image-carousel" aria-label={`${title} image gallery`}>
      <div className="carousel-viewport">
        <img
          className="detail-image"
          src={`/${currentImage}`}
          alt={`${title}, image ${currentIndex + 1} of ${images.length}`}
        />
        {images.length > 1 && (
          <>
            <button
              className="carousel-button carousel-button-previous"
              type="button"
              onClick={showPrevious}
              aria-label="Show previous image"
            >
              <span aria-hidden="true">&#8592;</span>
            </button>
            <button
              className="carousel-button carousel-button-next"
              type="button"
              onClick={showNext}
              aria-label="Show next image"
            >
              <span aria-hidden="true">&#8594;</span>
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="carousel-controls">
          <span aria-live="polite">Image {currentIndex + 1} of {images.length}</span>
          <div className="carousel-dots" aria-label="Choose an image">
            {images.map((image, index) => (
              <button
                key={image + index}
                className={`carousel-dot ${index === currentIndex ? 'is-active' : ''}`}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Show image ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}