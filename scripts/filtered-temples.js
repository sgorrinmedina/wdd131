document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
   {
    templeName: "Auckland New Zealand",
    location: "Auckland, New Zealand",
    dedicated: "2020, June, 13",
    area:  45456,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/auckland-new-zealand-temple/auckland-new-zealand-temple-56277-main.jpg"
  },
  {
    templeName: "Bangkok Thailand",
    location: "Bangkok, Thailand",
    dedicated: "2019, January, 26",
    area:   48525,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg"
  },
  {
    templeName: "Bentonville Arkansas",
    location: "Arkansas, United States",
    dedicated: "2020, November, 7",
    area:    28472,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bentonville-arkansas-temple/bentonville-arkansas-temple-55568-main.jpg"
  },
  // Add more temple objects here...
];


// Assuming you have a container in your HTML
const templeContainer = document.getElementById('temple-container');

// Loop through each temple and create a card
temples.forEach(temple => {
  // Create a card container
  const card = document.createElement('div');
  card.className = 'temple-card';

  // Create and append the temple name
  const name = document.createElement('h2');
  name.textContent = temple.templeName;
  card.appendChild(name);

  // Create and append the location
  const location = document.createElement('p');
  location.textContent = `Location: ${temple.location}`;
  card.appendChild(location);

  // Create and append the dedication date
  const dedicated = document.createElement('p');
  dedicated.textContent = `Dedicated: ${temple.dedicated}`;
  card.appendChild(dedicated);

  // Create and append the area
  const area = document.createElement('p');
  area.textContent = `Area: ${temple.area} sq ft`;
  card.appendChild(area);

  // Create and append the image
  const image = document.createElement('img');
  image.src = temple.imageUrl;
  image.alt = temple.templeName;
  image.loading = 'lazy';
  card.appendChild(image);

  // Append the card to the container
  templeContainer.appendChild(card);
});


// Function to clear the current cards
function clearTempleCards() {
    templeContainer.innerHTML = '';
}

// Function to display an array of temples
function displayTemples(array) {
    clearTempleCards();
    array.forEach(temple => {
        const card = document.createElement('div');
        card.className = 'temple-card';

        const name = document.createElement('h2');
        name.textContent = temple.templeName;
        card.appendChild(name);

        const location = document.createElement('p');
        location.textContent = `Location: ${temple.location}`;
        card.appendChild(location);

        const dedicated = document.createElement('p');
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        card.appendChild(dedicated);

        const area = document.createElement('p');
        area.textContent = `Area: ${temple.area} sq ft`;
        card.appendChild(area);

        const image = document.createElement('img');
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = 'lazy';
        card.appendChild(image);

        templeContainer.appendChild(card);
    });
}

// Initial display of all temples
displayTemples(temples);

// Grab all nav links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const filter = link.textContent.trim(); // Get the text of the link

        let filteredTemples = [];

        switch(filter) {
            case 'Home':
                filteredTemples = temples;
                break;
            case 'Old':
                filteredTemples = temples.filter(t => {
                    const year = new Date(t.dedicated).getFullYear();
                    return year < 1900;
                });
                break;
            case 'New':
                filteredTemples = temples.filter(t => {
                    const year = new Date(t.dedicated).getFullYear();
                    return year > 2000;
                });
                break;
            case 'Large':
                filteredTemples = temples.filter(t => t.area > 90000);
                break;
            case 'Small':
                filteredTemples = temples.filter(t => t.area < 10000);
                break;
            default:
                filteredTemples = temples;
        }

        displayTemples(filteredTemples);
    });
});
