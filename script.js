// Anime data
let animeData = [
    {
      name: "Anime 1",
      rating: 8.5,
      genre: "Action",
      image: "https://example.com/anime1.jpg",
      opinion: "This is a great anime with fantastic action scenes."
    },
    {
      name: "Anime 2",
      rating: 9.2,
      genre: "Fantasy",
      image: "https://example.com/anime2.jpg",
      opinion: "An epic fantasy story with breathtaking animation."
    },
    // Add more anime data here...
  ];
  
  // Function to generate anime entries on the index page
  function generateAnimeEntries() {
    const entriesContainer = document.getElementById('entries');
  
    animeData.forEach(anime => {
      const entryContainer = document.createElement('div');
      entryContainer.classList.add('entry');
      entryContainer.innerHTML = `
        <div class="entry-image">
          <img src="${anime.image}" alt="${anime.name}">
        </div>
        <div class="entry-details">
          <h3>${anime.name}</h3>
          <p>${anime.genre}</p>
          <p>Rating: ${anime.rating}</p>
          <p>${anime.opinion}</p>
        </div>
      `;
  
      entriesContainer.appendChild(entryContainer);
    });
  }
  
  // Call the function to generate anime entries on page load
  window.addEventListener('DOMContentLoaded', generateAnimeEntries);
  