import React, { useEffect } from 'react';

import Webcam from 'react-webcam';
import { getPresignedUrlApi, putSaveScreenshotApi } from 'shared-components/Header/Webcam/WebcamCapture/apis';

const WebcamCapture = () => {
  const videoConstraints = {
    width: 128,
    height: 128,
    facingMode: 'user',
  };
  const webcamRef = React.useRef(null);

  const saveScreenshot = async (imageSrc) => {
    const presignedUrl = await getPresignedUrlApi();
    putSaveScreenshotApi(presignedUrl, imageSrc);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (webcamRef.current != null) {
        const imageSrc = webcamRef.current.getScreenshot({ width: 500, height: 500 });
        if (!imageSrc) {
          alert('Please turn your camera on, otherwise you will be disqualified from the test');
        } else {
          saveScreenshot(imageSrc);
        }
      }
    }, 1000 * 60 * 2);
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
