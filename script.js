// This code is only used for displaying data in the class pop up and also for displaying the pop up itself

// Your existing code...

// Variable to track whether the pop-up is open
var isPopupOpen = false;
function openPopup(contentId) {
  // Check if the pop-up is already open
  if (isPopupOpen) {
    console.log('Popup is already open. Click on the existing pop-up to view details.');
    return;
  }

  // Fetch the movie data based on contentId
  let movieData;
  if (contentId.startsWith('A')) {
    // Content from endpoint2 (popular movies)
    movieData = data2.results[parseInt(contentId.substring(1)) - 1];
  } else if (contentId.startsWith('B')) {
    // Content from endpoint3 (top-rated movies)
    movieData = data3.results[parseInt(contentId.substring(1)) - 1];
  } 
   if (contentId.startsWith('G')) {
    // Content from endpoint3 (top-rated movies)
    movieData = recommendationsData.results[parseInt(contentId.substring(1)) - 1];
  }

  // Display movie details in the pop-up
  let popupImage = document.getElementById('popupimg');
  let popupParagraph = document.getElementById('popup-paragraph');
  let popupDetails = document.getElementById('popup-details');
  let imageContainer = document.getElementById('imageContainer');

  // Set the backdrop image using the TMDb image URL
  const baseImageUrl = 'https://image.tmdb.org/t/p/';
  const imageSize = 'original';  // Adjust this based on your needs
  const fullImageUrl = `${baseImageUrl}${imageSize}/${movieData.backdrop_path}`;

  // Set the background image for the specified container
  imageContainer.style.background = `url(${fullImageUrl})`;
  imageContainer.style.backgroundSize = 'cover';
  imageContainer.style.backgroundRepeat = 'no-repeat';
  imageContainer.style.margin='0';
  imageContainer.style.padding='0';

  // Optionally, you can set the width and height of the container
  imageContainer.style.width = '925px';
  imageContainer.style.height = '500px';

  // Display other movie details
  popupParagraph.innerHTML = `<h2>${movieData.title}</h2>`;
  popupDetails.innerHTML = `
    <p>Overview: ${movieData.overview}</p>
    <p>Rating: ${movieData.vote_average}</p>
    <!-- Add more details as needed -->
  `;

  // Set the display style to block
  document.getElementById('popup').style.display = 'block';
  isPopupOpen = true;

  // You can now use the contentId variable to know which content was clicked
  console.log('Clicked Content ID:', contentId);

  // Example usage of separateNumbers with contentId
  //separateNumbers(contentId);
}
function closePopup() {
  document.getElementById('popup').style.display = 'none';
  isPopupOpen = false;
}
function separateNumbers(inputString) {
  // Use regex to match digits in the input string
  let matches = inputString.match(/\d+/g);

  if (matches) {
    // Output each matched number
    matches.forEach(function (number) {
      console.log("Number:", number);
    });
  } else {
    console.log("No numbers found in the string.");
  }
}

// Your updated array of movie results

 