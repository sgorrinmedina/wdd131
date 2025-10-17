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
    imageUrl:"https://grupoinfeccsomamfyc.wordpress.com/wp-content/uploads/2017/10/gardnerella.jpg?w=254&h=228",
    title: "V",
    description: "Clue cells in a group of cells"
  },
  {
    imageUrl:"https://static.elsevier.es/multimedia/0210573X/0000003600000006/v1_201305030911/S0210573X09000859/v1_201305030911/es/main.assets/gr1.jpeg",
    title: "V",
    description: "Triangle of clue cells"
  },
  {
    imageUrl:
    "https://www.researchgate.net/publication/276440235/figure/fig1/AS:614185792729089@1523444712320/Showing-the-characteristic-clue-cells-of-bacterial-vaginosis.png",
    title: "V",
    description: "More clue cells"
  },
  {
    imageUrl:
    "https://www.researchgate.net/publication/373463744/figure/fig5/AS:11431281184291541@1693314967014/Clue-cell-in-bacterial-vaginosis-Papanicolaou-stain-400-X.jpg",
    title: "V",
    description: ""
  },
  {
    imageUrl: "https://screening.iarc.fr/pic/cyt14710.jpg",
    title: "V",
    description: ""
  },
  {
    imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjApUif7jAx7IaX9pt6rAUqnbPZ6qB9CIAgd4TWIUvrKkeNeMw7RZX6pp4Ta4V1JEkbIBrexBDw5OW-hiW1Ej_vvUYTz2C8w0AYjOcvEtiLTQcj3i0747ikY0B9yJ7er7qULYhraasaHgU/s1600/Clue+Cell.jpg",
    title: "V",
    description: "Comparison of a normal cell and a clue cell"
  },
  {
    imageUrl: "https://www.shutterstock.com/image-photo/candida-albicans-infecion-pap-smearview-260nw-436155541.jpg",
    title: "C",
    description: ""
  },
   {
    imageUrl:"https://citopatologiageneral.wordpress.com/wp-content/uploads/2014/07/candida-sp.jpg?w=1200",
    title: "C",
    description: ""
  },
  {
    imageUrl: "https://sociedaddecitologia.org.ar/wp-content/uploads/2022/08/img06182020020431-1024x768-1-300x225.jpg",
    title: "C",
    description: ""
  },
  {
    imageUrl: "https://www.shutterstock.com/image-photo/view-microscopic-candida-spp-woman-260nw-669895288.jpg",
    title: "C",
    description: ""
  },
  {
    imageUrl: "https://medlineplus.gov/images/YeastInfection_share.jpg",
    title: "C",
    description: ""
  },
  {
    imageUrl: "https://win.eurocytology.eu/static/eurocytology/image/mod5img2c.jpg",
    title: "C",
    description: ""
  },
  {
    imageUrl: "https://static.elsevier.es/multimedia/0210573X/0000003800000004/v1_201305030930/S0210573X10001206/v1_201305030930/es/main.assets/gr5.jpeg",
    title: "T",
    description: ""
  },
  {
    imageUrl: "https://static.elsevier.es/multimedia/0210573X/0000003800000004/v1_201305030930/S0210573X10001206/v1_201305030930/es/main.assets/gr1.jpeg",
    title: "T",
    description: ""
  },
  {
    imageUrl: "https://static.elsevier.es/multimedia/0210573X/0000003800000004/v1_201305030930/S0210573X10001206/v1_201305030930/es/main.assets/gr7.jpeg",
    title: "T",
    description: ""
  },
  {
    imageUrl: "https://static.elsevier.es/multimedia/0210573X/0000003800000004/v1_201305030930/S0210573X10001206/v1_201305030930/es/main.assets/gr3.jpeg",
    title: "T",
    description: ""
  },
  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Pap_test_trichomonas.JPG/250px-Pap_test_trichomonas.JPG",
    title: "T",
    description: ""
  },
  {
    imageUrl: "https://screening.iarc.fr/pic/cyt14606a.jpg",
    title: "T",
    description: ""
  },
  {
    imageUrl: "https://www.mypathologyreport.ca/wp-content/uploads/2021/07/low-grade-squamous-intraepithelial-lesion-cervix.jpg",
    title: "LSIL",
    description: ""
  },
  {
    imageUrl: "https://live.staticflickr.com/7228/13889629235_b4644b29f4_b.jpg",
    title: "LSIL",
    description: ""
  },
  {
    imageUrl: "https://screening.iarc.fr/pic/cyt14557.jpg",
    title: "LSIL",
    description: ""
  },
  {
    imageUrl: "https://i.ytimg.com/vi/idNfOvPtVls/maxresdefault.jpg",
    title: "LSIL",
    description: ""
  },
  {
    imageUrl: "https://screening.iarc.fr/pic/cyto7300a.jpg",
    title: "LSIL",
    description: ""
  },
  {
    imageUrl: "https://live.staticflickr.com/3784/9239632249_644c6a7125_b.jpg",
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
webPageTitle.textContent = 'All Samples';
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
            case 'Bacterial Vaginosis':
                titleText = 'Bacterial Vaginosis (BV)';
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
                titleText = 'Low-grade Squamous Intraepithelial Lesion (LSIL)';
                filteredSamples = samples.filter(s => s.title === 'LSIL');
                break;
            default:
                titleText = 'All Samples';
                filteredSamples = samples;
        }

        // UPDATE THE H1 ELEMENT
        webPageTitle.textContent = titleText;
        displaySamples(filteredSamples);
    });
});