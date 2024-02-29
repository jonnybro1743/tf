
const endpoint4 = `https://api.themoviedb.org/3/movie/11/recommendations`;
//const endpoint5= `https://api.themoviedb.org/3/movie/111/recommendations`;
let movie_id=50;
//const endpoint5='https://api.themoviedb.org/3/movie/${movie_id}/recommendations';
var j=0;

var recommendationsData2;
let recommendationsData;

fetch(endpoint4, options)
  .then(res => res.json())
  .then(data => {
    console.log('Data from endpoint4:', data);
    recommendationsData = data;
    for (let i = 1; i <= 20; i++) {
      displayRecommendation(i);
      }
    
    // Process the data as needed
  })
  .catch(err => {
    console.error('Error fetching data from endpoint4:', err);
  });

  async function displayRecommendation(i) {
    try {
      // Check if recommendationsData and recommendationsData.results are defined
      if (recommendationsData && recommendationsData.results && recommendationsData.results.length > 0) {
        let name = recommendationsData.results[i].title;
        let rating = recommendationsData.results[i].vote_average;
        let overview = recommendationsData.results[i].overview;
        let posterPath = recommendationsData.results[i].poster_path;
  
        let imageContainerC = document.getElementById("G" + i);
  
        // Check if the element with ID "G" + i exists
        if (imageContainerC) {
          // Set the background image using the TMDb image URL
          const baseImageUrl = 'https://image.tmdb.org/t/p/';
          const imageSize = 'w300';
          const fullImageUrl = `${baseImageUrl}${imageSize}/${posterPath}`;
  
          // Set the background properties
          imageContainerC.style.background = `url(${fullImageUrl})`;
          imageContainerC.style.backgroundSize = 'cover';
          imageContainerC.style.backgroundRepeat = 'no-repeat';
  
          // Optionally, you can set the width and height of the container
          imageContainerC.style.width = '190px';
          imageContainerC.style.height = '245px';
  
          // Create a new content element for each movie
          let contentElement = document.createElement('div');
          contentElement.innerHTML = `
            <h2 style="color: white; font-size: 22px;">${name}</h2>
            <p style="color: white; text-align: center; font-size: 18px;">Rating: ${rating}</p>
          `;
  
          // Append the content to the specific imageContainer
          imageContainerC.appendChild(contentElement);
        } else {
          console.error(`Element with ID "G${i}" not found.`);
        }
      } else if (recommendationsData && !recommendationsData.results) {
        console.error('No results property in recommendationsData:', recommendationsData);
      } else {
        console.error('Invalid recommendationsData structure:', recommendationsData);
      }
    } catch (error) {
      console.error('Error in displayRecommendation:', error);
    }
  }
  
