document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const hamburgerButton = document.getElementById('hamburger-menu');
const navigation = document.querySelector('nav');

hamburgerButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
});

const samples = [
  {
    imageUrl:"images/20251031_133621.jpg",
    title: "V",
    description: "Clue cells in a group of cells"
  },
  {
    imageUrl:"images/20251031_134246.jpg",
    title: "V",
    description: "Triangle of clue cells"
  },
  {
    imageUrl:
    "images/20251031_134614.jpg",
    title: "V",
    description: "More clue cells"
  },
  {
    imageUrl:
    "images/20251031_134951.jpg",
    title: "V",
    description: ""
  },
  {
    imageUrl: "images/20251031_135314.jpg",
    title: "V",
    description: ""
  },
  {
    imageUrl: "images/20251031_135422.jpg",
    title: "V",
    description: "Comparison of a normal cell and a clue cell"
  },
  {
    imageUrl: "images/20250916_115629.jpg",
    title: "C",
    description: ""
  },
   {
    imageUrl:"images/20250916_122327.jpg",
    title: "C",
    description: ""
  },
  {
    imageUrl: "images/20250916_123852.jpg",
    title: "C",
    description: ""
  },
  {
    imageUrl: "images/20250916_125452.jpg",
    title: "C",
    description: ""
  },
  {
    imageUrl: "images/20250916_131832.jpg",
    title: "C",
    description: ""
  },
  {
    imageUrl: "images/20250925_135240.jpg",
    title: "C",
    description: ""
  },
  {
    imageUrl: "images/IMG-20251029-WA0027.jpg",
    title: "T",
    description: ""
  },
  {
    imageUrl: "images/20251031_125340.jpg",
    title: "T",
    description: ""
  },
  {
    imageUrl: "images/20250925_144712.jpg",
    title: "T",
    description: ""
  },
  {
    imageUrl: "images/20251002_114318.jpg",
    title: "T",
    description: ""
  },
  {
    imageUrl: "images/20251002_121330.jpg",
    title: "T",
    description: ""
  },
  {
    imageUrl: "images/20251017_121413.jpg",
    title: "T",
    description: ""
  },
  {
    imageUrl: "images/20251017_124327.jpg",
    title: "T",
    description: ""
  },
  {
    imageUrl: "images/IMG_7645.jpg",
    title: "T",
    description: ""
  },
  {
    imageUrl: "images/20250916_134016.jpg",
    title: "LSIL",
    description: ""
  },
  {
    imageUrl: "images/20250916_140259.jpg",
    title: "LSIL",
    description: ""
  },
  {
    imageUrl: "images/20251002_130607.jpg",
    title: "LSIL",
    description: ""
  },
  {
    imageUrl: "images/20251002_125315.jpg",
    title: "LSIL",
    description: ""
  },
  {
    imageUrl: "images/20251002_133712.jpg",
    title: "LSIL",
    description: ""
  },
  {
    imageUrl: "images/20251017_130615.jpg",
    title: "LSIL",
    description: ""
  },
];

const samplesContainer = document.getElementById('samples-container');
const webPageTitle = document.getElementById('webpageTitle'); // SELECT THE H1 ELEMENT

// Function to clear the current cards
function clearSampleCards() {
    samplesContainer.innerHTML = '';
}

// Function to display an array of samples
function displaySamples(array) {
    clearSampleCards();
    array.forEach(sample => {
        const card = document.createElement('div');
        card.className = 'sample-card';

        // Create and append the image FIRST
        const image = document.createElement('img');
        image.src = sample.imageUrl;
        image.alt = sample.title;
        image.loading = 'lazy';
        card.appendChild(image);

        // Create and append the description AFTER the image
        const description = document.createElement('p');
        description.textContent = sample.description;
        card.appendChild(description);

        // Append the card to the container
        samplesContainer.appendChild(card);
    });
}

// Initial display of all samples with a default title
webPageTitle.textContent = 'Todas las Muestras';
displaySamples(samples);

// Grab all nav links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const filter = link.textContent.trim();

        let filteredSamples = [];
        let titleText = '';

        switch(filter) {
            case 'Vaginosis Bacteriana':
                titleText = 'Vaginosis Bacteriana (VB)';
                filteredSamples = samples.filter(s => s.title === 'V'); // Use === for exact match
                break;
            case 'Candida sp':
                titleText = 'Candida sp (Candidiasis)';
                filteredSamples = samples.filter(s => s.title === 'C');
                break;
            case 'Trichomonas Vaginalis': // FIXED: Capital V in Vaginalis
                titleText = 'Trichomonas Vaginalis (TV)';
                filteredSamples = samples.filter(s => s.title === 'T');
                break;
            case 'LSIL':
                titleText = 'Lesion Intraepitelial Escamosa de Bajo Grado (LSIL)';
                filteredSamples = samples.filter(s => s.title === 'LSIL');
                break;
            default:
                titleText = 'Todas las Muestras';
                filteredSamples = samples;
        }

        // UPDATE THE H1 ELEMENT
        webPageTitle.textContent = titleText;
        displaySamples(filteredSamples);
    });
});