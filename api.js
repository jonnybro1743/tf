
const accessToken = 'JhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTE0ZjgwOWZkOGQ5YjM1NTcxNzlmZTM0NWNhYzdkZiIsInN1YiI6IjY1YjRjMThhMTI0MjVjMDE0NzQ4MDk2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fn5Ap24YooEQR6i6ApUx1Pc2a2N8U7nR2Jd2f-LOVa4';
const endpoint1 = 'https://api.themoviedb.org/3/genre/movie/list';
const endpoint2 = 'https://api.themoviedb.org/3/movie/popular';
const endpoint3 = 'https://api.themoviedb.org/3/movie/top_rated';  // New endpoint for top-rated movies
var data1;//genre
var data2;
var data3;
var i;var page=1;
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`
  }
};

// Make request to endpoint1
fetch(endpoint1, options)
  .then(res => res.json())
  .then(data => {
    console.log('Data from endpoint1:', data);
    data1 = data;
    for(i=0;i<20;i++){
      readDataGenre(i);}
    // Process the data as needed
  })
  .catch(err => {
    console.error('Error fetching data from endpoint1:', err);
  });

// Make request to endpoint2
fetch(endpoint2, options)
  .then(res => res.json())
  .then(data => {
    
    console.log('Data from endpoint2:', data);
    data2=data;
    for(i=-1;i<=14;i++){
     
      if(i==14){
        readData(i);
        imageContainer.style.width = '1190px';
      imageContainer.style.height = '500px';    
        let posterPath = data2.results[i].backdrop_path;
      }
      else{
        readData(i);
      }  //readDataForDisplay(i);
      page++;
      for(i=-1;i<=14;i++){
        readData(i,page);
      }
    }
    // Process the data as needed
  })
  .catch(err => {
    console.error('Error fetching data from endpoint2:', err);
  });
  fetch(endpoint3, options)
  .then(res => res.json())
  .then(data => {
    console.log('Data from endpoint3:', data);
    data3 = data;
    for(i=0;i<=14;i++){


      readData_data3(i);
    }
    // You can process the data from endpoint3 as needed
  })
  .catch(err => {
    console.error('Error fetching data from endpoint3:', err);
  });
  
  async function readDataGenre(i) {
    try {
      // Check if data1 and data1.results are defined
      if (data1 && data1.genres && data1.genres.length >= 0) {
        let name = data1.genres[i].name;
  
        // Assuming 'general' is the id of the container where you want to append the content
        let generalContainer = document.querySelector('.genre');
  
        // Create a new content element for each genre
        let contentElement = document.createElement('div');
        contentElement.innerHTML = `
          <h2 >${name}</h2>
        `;
  
        // Append the content to the 'general' container
        generalContainer.appendChild(contentElement);
      } else if (data1 && !data1.genres) {
        console.error('No genres property in data1:', data1);
      } else {
        console.error('Invalid data1 structure:', data1);
      }
    } catch (error) {
      console.error('Error in readDataGenre:', error);
    }
  }

async function readData(i,page) {
  try {
    // Check if data2 and data2.results are defined
    if (data2 && data2.results && data2.results.length > 0) {
      let name = data2.results[i].title;
      let rating = data2.results[i].vote_average;
      let overview = data2.results[i].overview;
      let posterPath = data2.results[i].poster_path;

        console.log(name);
      // Assuming 'A1' is the id of an HTML element
      let imageContainer = document.getElementById("A" + i);
      let imageContainerB = document.getElementById("B" + i);
      let imageContainerC = document.getElementById("G" + i);
      // Set the background image using the TMDb image URL
      const baseImageUrl = 'https://image.tmdb.org/t/p/';
      const imageSize = 'original';  // Adjust this based on your needs
      const fullImageUrl = `${baseImageUrl}${imageSize}/${posterPath}`;

      // Set the background properties
      imageContainer.style.background = `url(${fullImageUrl})`;
      imageContainer.style.backgroundSize = 'contain';
      imageContainer.style.backgroundRepeat = 'no-repeat';

      // Optionally, you can set the width and height of the container
     // imageContainer.style.width = '190px';
      //imageContainer.style.height = '245px';

      // Create a new content element for each movie
      let contentElement = document.createElement('div');
      contentElement.innerHTML = `
  
  <p >     ${rating}</p>
`;

    

      // Append the content to the specific imageContainer
      imageContainer.appendChild(contentElement);
    } else if (data2 && !data2.results) {
      console.error('No results property in data2:', data2);
    } else {
      console.error('Invalid data2 structure:', data2);
    }
  } catch (error) {
    console.error('Error in readData:', error);
  }
}
async function readData_data3(i) {
  try {
    // Check if data3 and data3.results are defined
    if (data3 && data3.results && data3.results.length > 0) {
      let name = data3.results[i].title;
      let rating = data3.results[i].vote_average;
      let overview = data3.results[i].overview;
      let posterPath = data3.results[i].poster_path;

      // Assuming 'B1', 'B2', etc. are the ids of HTML elements
      let imageContainerB = document.getElementById("B" + i);
      
      // Set the background image using the TMDb image URL
      const baseImageUrl = 'https://image.tmdb.org/t/p/';
      const imageSize = 'original';  // Adjust this based on your needs
      const fullImageUrl = `${baseImageUrl}${imageSize}/${posterPath}`;

      // Set the background properties
      imageContainerB.style.background = `url(${fullImageUrl})`;
      imageContainerB.style.backgroundSize = 'cover';
      imageContainerB.style.backgroundRepeat = 'no-repeat';

      // Optionally, you can set the width and height of the container
      imageContainerB.style.width = '190px';
      imageContainerB.style.height = '245px';

      // Create a new content element for each movie
      let contentElementB = document.createElement('div');
      
      contentElementB.innerHTML = `
      
      <p >     ${rating}</p>
`;


      // Append the content to the specific imageContainerB
      imageContainerB.appendChild(contentElementB);
    } else if (data3 && !data3.results) {
      console.error('No results property in data3:', data3);
    } else {
      console.error('Invalid data3 structure:', data3);
    }
  } catch (error) {
    console.error('Error in readData:', error);
  }
}