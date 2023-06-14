// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
  
    const nameInput = document.getElementById('name');
    const ratingInput = document.getElementById('rating');
    const genreInput = document.getElementById('genre');
    const imageInput = document.getElementById('image');
    const opinionInput = document.getElementById('opinion');
  
    const anime = {
      name: nameInput.value,
      rating: parseFloat(ratingInput.value),
      genre: genreInput.value,
      image: imageInput.value,
      opinion: opinionInput.value,
    };
  
    generateAnimeHTMLFile(anime);
    addAnimeEntry(anime);
  
    nameInput.value = '';
    ratingInput.value = '';
    genreInput.value = '';
    imageInput.value = '';
    opinionInput.value = '';
  }
  
  // Function to generate HTML file for the new anime entry
  function generateAnimeHTMLFile(anime) {
    const template = `
      <!DOCTYPE html>
      <html>
      <!-- ... Rest of the HTML code ... -->
      </html>
    `;
  
    const fileName = `${anime.name.replace(/\s/g, '-').toLowerCase()}.html`;
  
    // Create a new Blob with the HTML template
    const blob = new Blob([template], { type: 'text/html' });
  
    // Create a URL object from the Blob
    const url = URL.createObjectURL(blob);
  
    // Create a link element for downloading the HTML file
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
  
    // Append the link to the document body
    document.body.appendChild(link);
  
    // Programmatically click the link to trigger the download
    link.click();
  
    // Remove the link from the document body
    document.body.removeChild(link);
  
    // Revoke the URL object to free up memory
    URL.revokeObjectURL(url);
  }
  
  // Function to add the new anime entry to the index page
  function addAnimeEntry(anime) {
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
  
    const entriesContainer = document.getElementById('entries');
    entriesContainer.appendChild(entryContainer);
  }
  
  // Attach event listener to the form submission
  const animeForm = document.getElementById('anime-form');
  animeForm.addEventListener('submit', handleFormSubmission);
  