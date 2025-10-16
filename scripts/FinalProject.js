document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;


const samples = [
  {
    imageUrl:"https://grupoinfeccsomamfyc.wordpress.com/wp-content/uploads/2017/10/gardnerella.jpg?w=254&h=228",
    title: "VBS",
    description: ""
  },
  {
    imageUrl:"https://static.elsevier.es/multimedia/0210573X/0000003600000006/v1_201305030911/S0210573X09000859/v1_201305030911/es/main.assets/gr1.jpeg",
    title: "VBS",
    description: ""
  },
  {
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    title: "VBS",
    description: ""
  },
  {
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    title: "VBS",
    description: ""
  },
  {
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    title: "VBS",
    description: ""
  },
  {
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    title: "VBS",
    description: ""
  },
  {
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    title: "VBS",
    description: ""
  },
   {
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/auckland-new-zealand-temple/auckland-new-zealand-temple-56277-main.jpg",
    title: "CS",
    description: ""
  },
  {
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg",
    title: "CS",
    description: ""
  },
  {
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bentonville-arkansas-temple/bentonville-arkansas-temple-55568-main.jpg",
    title: "CS",
    description: ""
  },
  // Add more temple objects here...
];


// Assuming you have a container in your HTML
const samplesContainer = document.getElementById('samples-container');

// Loop through each temple and create a card
samples.forEach(sample => {
  // Create a card container
  const card = document.createElement('div');
  card.className = 'sample-card';

  // Create and append the temple name
  const description = document.createElement('p');
  description.textContent = sample.description;
  card.appendChild(description);

  // Create and append the image
  const image = document.createElement('img');
  image.src = sample.imageUrl;
  image.alt = sample.title;
  image.loading = 'lazy';
  card.appendChild(image);

  // Append the card to the container
  samplesContainer.appendChild(card);
});


// Function to clear the current cards
function clearSampleCards() {
    samplesContainer.innerHTML = '';
}

// Function to display an array of temples
function displaySamples(array) {
    clearSampleCards();
    array.forEach(sample => {
        const card = document.createElement('div');
        card.className = 'sample-card';

  // Create and append the temple name
  const description = document.createElement('p');
  description.textContent = sample.description;
  card.appendChild(description);

  // Create and append the image
  const image = document.createElement('img');
  image.src = sample.imageUrl;
  image.alt = sample.title;
  image.loading = 'lazy';
  card.appendChild(image);

  // Append the card to the container
  samplesContainer.appendChild(card);
    });
}

// Initial display of all temples
displaySamples(samples);

// Grab all nav links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const filter = link.textContent.trim(); // Get the text of the link

        let filteredSamples = [];

        switch(filter) {
            case 'Bacterial Vaginosis':
                filteredSemples = samples.filter(s => s.title.includes('VB'));
                break;
            case 'Candida sp':
                filteredSemples = samples.filter(s => s.title.includes('CS'));
                break;
            case 'Trichomonas vaginalis':
                filteredSemples = samples.filter(s => s.title.includes('TV'));
                break;
            case 'LSIL':
                filteredSemples = samples.filter(s => s.title.includes('LIEBG'));
                break;
            default:
                filteredSemples = samples;
        }

        displaySamples(filteredSamples);
    });
});
