import './App.css';
import axios from 'axios';
import  {React, useState, useEffect } from 'react';

function App() {
  const [images, setImages] = useState([])

  const options = {
    method: 'GET',
    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
    params: {q: 'ice cream', pageNumber: '1', pageSize: '2', autoCorrect: 'true'},
    headers: {
      'X-RapidAPI-Key': '1f337ed6e9mshbfacca2cfdfb894p120943jsn7edec953a7e2',
      'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
    }
  };


    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.request(options);
        // console.log(response.data)
        setImages(response.data.value);
      };
      fetchData();
    }, []);

    console.log(images)
  

  return (
    <div className="App">
      <h1>Hello World</h1>
      {images.map((image, index) => {
        return (
          <img src={image.url} alt="images" width="400" height="400"/>
        )
      })}
    </div>
  );
}

export default App;
