/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import Image from 'next/image';

const ImageOverlayApp = () => {
  const [baseImage, setBaseImage] = useState('');
  const [overlayImage, setOverlayImage] = useState('');
  const [opacity, setOpacity] = useState(50);

  const baseImages = [
    { src: '/base1.png', label: 'Base Image 1' },
    { src: '/base2.png', label: 'Base Image 2' },
    { src: '/base3.png', label: 'Base Image 3' }
  ];

  const overlayImages = [
    { src: '/overlay1.png', label: 'Overlay Image 1' },
    { src: '/overlay2.png', label: 'Overlay Image 2' },
    { src: '/overlay3.png', label: 'Overlay Image 3' }
  ];

  return (
    <div className="app-container">
      <h1>Image Overlay App</h1>

      <div className="dropdown-container">
        <label htmlFor="base-image">Select Base Image:</label>
        <select
          id="base-image"
          value={baseImage}
          onChange={(e) => setBaseImage(e.target.value)}
        >
          <option value="">-- Select Base Image --</option>
          {baseImages.map((img, index) => (
            <option key={index} value={img.src}>{img.label}</option>
          ))}
        </select>
      </div>

      <div className="dropdown-container">
        <label htmlFor="overlay-image">Select Overlay Image:</label>
        <select
          id="overlay-image"
          value={overlayImage}
          onChange={(e) => setOverlayImage(e.target.value)}
        >
          <option value="">-- Select Overlay Image --</option>
          {overlayImages.map((img, index) => (
            <option key={index} value={img.src}>{img.label}</option>
          ))}
        </select>
      </div>

      <div className="opacity-slider">
        <label htmlFor="opacity">Adjust Overlay Opacity:</label>
        <input
          type="range"
          id="opacity"
          min="0"
          max="100"
          value={opacity}
          onChange={(e) => setOpacity(Number(e.target.value))}
        />
      </div>

      <div className="image-container">
        {baseImage && (
          <Image
            src={baseImage}
            alt="Base Image"
            layout="fill"
            objectFit="contain"
            className="base-image"
          />
        )}
        {overlayImage && (
          <Image
            src={overlayImage}
            alt="Overlay Image"
            layout="fill"
            objectFit="contain"
            className="overlay-image"
            style={{ opacity: opacity / 100 }}
          />
        )}
      </div>

      <style jsx>{`
        .app-container {
          font-family: Arial, sans-serif;
          padding: 20px;
          max-width: 800px;
          margin: auto;
        }

        h1 {
          text-align: center;
        }

        .dropdown-container {
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 5px;
        }

        select {
          width: 100%;
          padding: 10px;
          font-size: 16px;
        }

        .opacity-slider {
          margin-top: 10px;
          text-align: center;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 500px;
          border: 1px solid #ccc;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .base-image {
          position: absolute;
        }

        .overlay-image {
          position: absolute;
        }
      `}</style>
    </div>
  );
};

export default ImageOverlayApp;
