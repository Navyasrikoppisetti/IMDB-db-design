// Fetch movies from the database and display them
function fetchMovies() {
    fetch('api/movies')
      .then(response => response.json())
      .then(data => {
        const moviesContainer = document.getElementById('movies');
        data.forEach(movie => {
          const movieElement = document.createElement('div');
          movieElement.innerHTML = `
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.release_date}</p>
            <p>Duration: ${movie.duration} mins</p>
            <p>Description: ${movie.description}</p>
          `;
          moviesContainer.appendChild(movieElement);
        });
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }
  
  // Fetch artists from the database and display them
  function fetchArtists() {
    fetch('api/artists')
      .then(response => response.json())
      .then(data => {
        const artistsContainer = document.getElementById('artists');
        data.forEach(artist => {
          const artistElement = document.createElement('div');
          artistElement.innerHTML = `
            <h3>${artist.artist_name}</h3>
          `;
          artistsContainer.appendChild(artistElement);
        });
      })
      .catch(error => {
        console.error('Error fetching artists:', error);
      });
  }
  