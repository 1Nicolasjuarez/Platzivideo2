/* eslint-disable arrow-parens */
import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {

    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data));

  }, []);
  return videos;
};
export default useInitialState;

// fetch('http://localhost:3000/initialState')
