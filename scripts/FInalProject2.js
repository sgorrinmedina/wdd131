document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Ultima Vez Modificado: " + document.lastModified;

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
    description: "Tipo de muestra: Exo-endo. Cambios en la flora vaginal sugestivos de vaginosis bacteriana con presencia de celulas guía (Clue cells) y elementos inflamatorios (EI)"
  },
  {
    imageUrl:"images/vaginosis 2.JPG",
    title: "V",
    description: "Tipo de muestra: Exo-endo, celulas guía y EI con anfofilia"
  },
  {
    imageUrl:
    "images/20251031_134614.jpg",
    title: "V",
    description: "Tipo de muestra: Exo-endo, celulas guía y EI"
  },
  {
    imageUrl:
    "images/20251031_134951.jpg",
    title: "V",
    description: "Tipo de muestra: Exo-endo, clue cells y EI, obsérvese la variada coloración tanto eosinofila como cianofila"
  },
  {
    imageUrl: "images/20251031_135314.jpg",
    title: "V",
    description: "Tipo de muestra: Exo-endo, celulas guía en fila"
  },
  {
    imageUrl: "images/20251031_135422.jpg",
    title: "V",
    description: "Tipo de muestra: Exo-endo, presencia de clue cells, nótese los rebordes característicos de la VB"
  },
  {
    imageUrl: "images/candida 1.jpg",
    title: "C",
    description: "Tipo de muestra: Exo-endo, Elementos micóticos morfológicamente compatibles con Candida sp, presencia de esporas y EI"
  },
   {
    imageUrl:"images/candida 2.jpg",
    title: "C",
    description: "Tipo de muestra: Exo-endo, se observan esporas y polimorfonucleares abundantes"
  },
  {
    imageUrl: "images/candida 3.JPG",
    title: "C",
    description: "Tipo de muestra: Exo-endo, abundantes esporas y polimorfonucleares"
  },
  {
    imageUrl: "images/candida 4.JPG",
    title: "C",
    description: "Tipo de muestra: Exo-endo, nótese las esporas que, aunque pequeñas, estan presentes"
  },
  {
    imageUrl: "images/20250916_131832.jpg",
    title: "C",
    description: "Tipo de muestra: Exo-endo, observese la hifa con forma curva y los escasos polimorfos"
  },
  {
    imageUrl: "images/20250925_135240.jpg",
    title: "C",
    description: "Tipo de muestra: Exo-endo, se observa el efecto inflamatorio en la binucleación producida por Candida sp"
  },
  {
    imageUrl: "images/trichomonas 1.JPG",
    title: "T",
    description: "Tipo de muestra: Exo-endo, Trichomonas vaginalis, con presencia de infiltrado inflamatorio abundante y microbiota bacteriana, nótese los trofozoítos piriformes"
  },
  {
    imageUrl: "images/20251031_125340.jpg",
    title: "T",
    description: "Tipo de muestra: Exo-endo, trofozoíto observable en el apuntador"
  },
  {
    imageUrl: "images/trichomonas 3.JPG",
    title: "T",
    description: "Tipo de muestra: Exo-endo, con abundante exudado inflamatorio"
  },
  {
    imageUrl: "images/trichomonas 4.jpg",
    title: "T",
    description: "Tipo de muestra: Exo-endo, obsérvese los trofozoítos más pequeños que una celula"
  },
  {
    imageUrl: "images/20251002_121330.jpg",
    title: "T",
    description: "Tipo de muestra: Exo-endo, Trichomonas vaginalis"
  },
  {
    imageUrl: "images/trichomonas 6.JPG",
    title: "T",
    description: "Tipo de muestra: Exo-endo, nótese los halos claros alrededor de los trofozoítos, un hallazgo característico pero no patognomónico de la trichomoniasis"
  },
  {
    imageUrl: "images/ffa2e439-a9c0-4e1d-8c77-18c9b517f21c.JPG",
    title: "T",
    description: "Tipo de muestra: Exo-endo, véase las celulas endocervicales en grupo más abajo de las celulas con PMN alrededor"
  },
  {
    imageUrl: "images/2c179df1-36b6-4135-a0a0-7807c7bffb0e.JPG",
    title: "T",
    description: "Tipo de muestra: Exo-endo, trofozoíto de Trichomonas vaginalis"
  },
  {
    imageUrl: "images/LSIL 1.JPG",
    title: "LSIL",
    description: "Tipo de muestra: Exo-endo, anormalidad de células epiteliales agarndamiento nuclear leve, abundantes PMN, aumento de relación N/C y células anfofilicas"
  },
  {
    imageUrl: "images/LSIL 2.JPG",
    title: "LSIL",
    description: "Tipo de muestra: Exo-endo, véase las celulas en grupo con bordes citoplásmicos bien definidos, PMN abundantes y binucleación"
  },
  {
    imageUrl: "images/LSIL 3.JPG",
    title: "LSIL",
    description: "Tipo de muestra: Exo-endo, nótese las células con elevada R N/C y cromatina irregular"
  },
  {
    imageUrl: "images/LSIL 4.JPG",
    title: "LSIL",
    description: "Tipo de muestra: Exo-endo, con notable aumento de los tamaños nucleares y relación N/C elevada"
  },
  {
    imageUrl: "images/LSIL 5.jpg",
    title: "LSIL",
    description: "Tipo de muestra: Exo-endo, véase la pequeña célula coilocitica justo arriba de la celula binucleada en el medio"
  },
  {
    imageUrl: "images/LSIL 6.JPG",
    title: "LSIL",
    description: "Tipo de muestra: Exo-endo, obsérvese la célula coilocitica binucleada cianófila con su característico halo perinuclear, hallazgo clave de una LIE-BG"
  },
];

const samplesContainer = document.getElementById('samples-container');
const webPageTitle = document.getElementById('webpageTitle');

// Create lightbox element
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.innerHTML = `
    <span id="lightbox-close">&times;</span>
    <img id="lightbox-img" src="" alt="Enlarged view">
`;
document.body.appendChild(lightbox);

// Function to open lightbox
function openLightbox(imageSrc, imageAlt) {
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imageSrc;
    lightboxImg.alt = imageAlt;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Function to close lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close button event
document.getElementById('lightbox-close').addEventListener('click', closeLightbox);

// Close when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Close with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
        closeLightbox();
    }
});

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
        image.style.cursor = 'pointer'; // Show it's clickable
        
        // Add click event to open lightbox
        image.addEventListener('click', () => {
            openLightbox(sample.imageUrl, sample.title);
        });
        
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
                filteredSamples = samples.filter(s => s.title === 'V');
                break;
            case 'Candida sp':
                titleText = 'Candida sp (Candidiasis)';
                filteredSamples = samples.filter(s => s.title === 'C');
                break;
            case 'Trichomonas Vaginalis':
                titleText = 'Trichomonas Vaginalis (Trichomoniasis)';
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

        webPageTitle.textContent = titleText;
        displaySamples(filteredSamples);
    });
});