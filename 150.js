/*
const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTE0ZjgwOWZkOGQ5YjM1NTcxNzlmZTM0NWNhYzdkZiIsInN1YiI6IjY1YjRjMThhMTI0MjVjMDE0NzQ4MDk2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fn5Ap24YooEQR6i6ApUx1Pc2a2N8U7nR2Jd2f-LOVa4';
const popularMoviesEndpoint = 'https://api.themoviedb.org/3/movie/11/recommendations';
let currentPage = 1;
const moviesPerPage = 20; // Adjust the number of movies per page as needed
let recommendationsData2; // Declare recommendationsData2 at the beginning

async function displayRecommendation2(i) {
  try {
    // Check if recommendationsData2 and recommendationsData2.results are defined
    if (recommendationsData2 && recommendationsData2.results && recommendationsData2.results.length > 0) {
      let name = recommendationsData2.results[i].title;
      let rating = recommendationsData2.results[i].vote_average;
      let overview = recommendationsData2.results[i].overview;
      let posterPath = recommendationsData2.results[i].poster_path;

      console.log(name);
      console.log(rating);
      console.log(overview);
      console.log(posterPath);

      let imageContainerC = document.getElementById("G" + i);
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
      console.error('Invalid recommendationsData2 structure:', recommendationsData2);
    }
  } catch (error) {
    console.error('Error in displayRecommendation2:', error);
  }
}

async function fetchMovies(page) {
  try {
    const response = await fetch(`${popularMoviesEndpoint}?api_key=${accessToken}&page=${page}`);
    recommendationsData2 = await response.json();
    for (let i = 0; i < moviesPerPage; i++) {
      displayRecommendation2(i);
    }
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

// Fetch the first page of popular movies
for (let i = 0; i < 1; i++) {
  fetchMovies(currentPage);
  currentPage++;
}

// Fetch the second page of popular movies
for (let j = 21; j < 40; j++) {
  fetchMovies(currentPage);
  currentPage++;
}
*/