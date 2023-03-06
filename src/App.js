import './App.css';
import axios from 'axios';
import  {React, useState, useEffect } from 'react';

function App() {
  const [images, setImages] = useState([])

  const options = {
    method: 'GET',
    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
    params: {q: 'taylor swift', pageNumber: '1', pageSize: '2', autoCorrect: 'true'},
    headers: {
      'X-RapidAPI-Key': '977a5b648bmsh2c2dc55f0a331e2p127ba6jsnaa485c7ab02a',
      'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
    }
  };

    const [data, setData] = useState([]);
    
    const getImages = async () => {
      const { data } = await axios.request(options);
      setImages(data);
      console.log(data.value)
    };

    useEffect(() => {
      getImages();
    }, []);

    console.log(images)
  

  return (
    <div className="App">

      <h1>Hello World</h1>
    </div>
  );
}

export default App;
