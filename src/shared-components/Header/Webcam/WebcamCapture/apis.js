import axios from 'axios';
import { SERVER_URL } from 'constants/appConstants';

export const getPresignedUrlApi = () => {
  return axios.post(`${SERVER_URL}presigned_url`, {
    drive_id: localStorage.getItem('driveID'),
    candidate_id: localStorage.getItem('candidateId'),
  })
    .then((response) => {
      return response.data.data.url;
    })
    .catch((error) => {
      console.log(error);
    });
};

const postSaveImageUrl = (presignedUrl) => {
  return axios.post(`${SERVER_URL}snapshots`, {
    drive_id: localStorage.getItem('driveID'),
    candidate_id: localStorage.getItem('candidateId'),
    presigned_url: presignedUrl,
  })
    .then((response) => {
      return response.data.data.snapshot;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const putSaveScreenshotApi = async (presignedUrl, imageSrc) => {
  const resp = await fetch(imageSrc);
  const imageBody = await resp.blob();
  const response = await fetch(
    new Request(presignedUrl, {
      method: 'PUT',
      body: imageBody,
      headers: new Headers({
        'Content-Type': 'image/jpeg',
      }),
    }),
  );
  if (response.status === 200) {
    return postSaveImageUrl(presignedUrl);
  }
  console.log('Error while uploading image');
};
