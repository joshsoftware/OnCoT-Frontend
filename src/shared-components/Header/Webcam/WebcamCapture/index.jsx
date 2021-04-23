import React, { useEffect } from 'react';

import Webcam from 'react-webcam';

const WebcamCapture = () => {
  const videoConstraints = {
    width: 128,
    height: 128,
    facingMode: 'user',
  };
  const webcamRef = React.useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (webcamRef.current != null) {
        const imageSrc = webcamRef.current.getScreenshot();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Webcam
        audio={false}
        height={80}
        ref={webcamRef}
        screenshotFormat='image/jpeg'
        width={80}
        videoConstraints={videoConstraints}
      />
    </>
  );
};

export default WebcamCapture;
