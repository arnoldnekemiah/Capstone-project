// Create speaakers section element
const section = document.createElement('section');
section.classList.add('speakers');

// Create content div
const contentDiv = document.createElement('div');
contentDiv.classList.add('content');
section.appendChild(contentDiv);

// Create top div
const topDiv = document.createElement('div');
topDiv.classList.add('top');
contentDiv.appendChild(topDiv);

// Create h2 element and append to top div
const h2 = document.createElement('h2');
h2.classList.add('feature-title');
h2.textContent = 'Featured Speakers';
topDiv.appendChild(h2);

// Create hr element and append to top div
const hr = document.createElement('hr');
hr.classList.add('line1');
topDiv.appendChild(hr);

// Create speaker container div and append to content div
const speakerContainer = document.createElement('div');
speakerContainer.classList.add('speaker-container');
contentDiv.appendChild(speakerContainer);

// Create first speaker div
const speaker1 = document.createElement('div');
speaker1.classList.add('speaker');
speakerContainer.appendChild(speaker1);

// Create img element and append to speaker1 div
const img1 = document.createElement('img');
img1.classList.add('speaker1');
img1.src = './images/speaker1.png';
img1.alt = 'Speaker1';
speaker1.appendChild(img1);

// Create speaker-intro div and append to speaker1 div
const speakerIntro1 = document.createElement('div');
speakerIntro1.classList.add('speaker-intro');
speaker1.appendChild(speakerIntro1);

// Create h3 element and append to speaker-intro1 div
const h = document.createElement('h3');
h.classList.add('name');
h.textContent = 'Yochai Benkler';
speakerIntro1.appendChild(h);

// Create p elements and append to speaker-intro1 div
const intro1 = document.createElement('p');
intro1.classList.add('intro');
intro1.textContent = 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School';
speakerIntro1.appendChild(intro1);

const autobio1 = document.createElement('p');
autobio1.classList.add('autobio');
autobio1.textContent = 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006';
speakerIntro1.appendChild(autobio1);

// Create second speaker div
const speaker2 = document.createElement('div');
speaker2.classList.add('speaker');
speakerContainer.appendChild(speaker2);

// Create img element and append to speaker2 div
const img2 = document.createElement('img');
img2.classList.add('speaker1');
img2.src = './images/speaker2.png';
img2.alt = 'Speaker2';
speaker2.appendChild(img2);

// Create speaker-intro div and append to speaker2 div
const speakerIntro2 = document.createElement('div');
speakerIntro2.classList.add('speaker-intro');
speaker2.appendChild(speakerIntro2);

// Create h3 element and append to speaker-intro2 div
const tit = document.createElement('h3');
tit.classList.add('name');
tit.textContent = 'SohYeong Noh';
speakerIntro2.appendChild(tit);

// Create p elements and append to speaker-intro2 div
const intro2 = document.createElement('p');
intro2.classList.add('intro');
intro2.textContent = 'Director of Art Centre Nabi and a board member of CC Korea';
speakerIntro2.appendChild(intro2);

const autobio2 = document.createElement('p');
autobio2.classList.add('autobio');
autobio2.textContent = 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.';
speakerIntro2.appendChild(autobio2);

// Create more-div and more-more divs and append to section
const moreDiv = document.createElement('div');
moreDiv.classList.add('more-div');
section.appendChild(moreDiv);

const moreMoreDiv = document.createElement('div');
moreMoreDiv.classList.add('more-more');
moreDiv.appendChild(moreMoreDiv);

// Create p element and append to more-more div
const moreP = document.createElement('p');
moreP.classList.add('more');
moreP.textContent = 'MORE';
moreMoreDiv.appendChild(moreP);

// Create img element and append to more-more div
const moreImg = document.createElement('img');
moreImg.classList.add('arrow');
moreImg.src = './images/arrow_down.png';
moreImg.alt = 'Drop down arrow';
moreMoreDiv.appendChild(moreImg);

// Append section to the document body
document.body.appendChild(section);

// media querries
// add more speakers on applying media queries
function generateSpeakers(numSpeakers) {
  const speakerContainer = document.querySelector('.speaker-container');

  for (let i = 3; i < numSpeakers; i += 1) {
    const speaker = document.createElement('div');
    speaker.classList.add('speaker');
    speakerContainer.appendChild(speaker);

    const img = document.createElement('img');
    img.classList.add(`speaker${i + 1}`);
    img.src = `./images/speaker${i + 1}.png`;
    img.alt = `Speaker${i + 1}`;
    speaker.appendChild(img);

    const speakerIntro = document.createElement('div');
    speakerIntro.classList.add('speaker-intro');
    speaker.appendChild(speakerIntro);

    const h3 = document.createElement('h3');
    h3.classList.add('name');
    if (i === 4) {
      h3.textContent = 'Lila tretikov'; // Assign a different name for the 5th speaker
    } else if (i === 5) {
      h3.textContent = 'Ryan Merkley'; // Assign a different name for the 6th speaker
    } else {
      h3.textContent = 'Julia Leda'; // Assign a default name for other speakers
    }
    speakerIntro.appendChild(h3);

    const intro = document.createElement('p');
    intro.classList.add('intro');
    if (i === 4) {
      intro.textContent = 'Executive Director of the Wikimedia Foundation'; // Assign a different name for the 5th speaker
    } else if (i === 5) {
      intro.textContent = 'CEO of Creativve Commons, ex COO of the Mozilla Foundation';
    } else {
      intro.textContent = 'President of Young Pirates of Europe';
    }
    speakerIntro.appendChild(intro);

    const autobio = document.createElement('p');
    autobio.classList.add('autobio');
    if (i === 4) {
      autobio.textContent = 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.';
    } else if (i === 5) {
      autobio.textContent = 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment';
    } else {
      autobio.textContent = 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July';
    }
    speakerIntro.appendChild(autobio);
  }

  // Show the third speaker if the screen size is larger than 768px
  const screenWidth = window.innerWidth;
  if (screenWidth > 768) {
    const speaker3 = document.createElement('div');
    speaker3.classList.add('speaker');
    speakerContainer.insertBefore(speaker3, speakerContainer.children[2]);

    const img3 = document.createElement('img');
    img3.classList.add('speaker3');
    img3.src = './images/speaker3.png';
    img3.alt = 'Speaker3';
    speaker3.appendChild(img3);

    const speakerIntro3 = document.createElement('div');
    speakerIntro3.classList.add('speaker-intro');
    speaker3.appendChild(speakerIntro3);

    const h8 = document.createElement('h3');
    h8.classList.add('name');
    h8.textContent = 'Kilnam Chon';
    speakerIntro3.appendChild(h8);

    const intro3 = document.createElement('p');
    intro3.classList.add('autobio');
    intro3.textContent = 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame';
    speakerIntro3.appendChild(intro3);
  }
}

// call generateSpeakers function for different screen sizes
const mediaQuery1 = window.matchMedia('(min-width: 768px)');
const mediaQuery2 = window.matchMedia('(max-width: 768px)');

const handleMediaQuery1 = (mq) => {
  if (mq.matches) {
    generateSpeakers(6);
  }
};

const handleMediaQuery2 = (mq) => {
  if (mq.matches) {
    generateSpeakers(2);
  }
};

mediaQuery1.addListener(handleMediaQuery1);
mediaQuery2.addListener(handleMediaQuery2);

handleMediaQuery1(mediaQuery1);
handleMediaQuery2(mediaQuery2);

let speakersVisible = false;

const toggleButton = document.querySelector('.more-div');
const moreImg2 = document.querySelector('#more-img');

toggleButton.addEventListener('click', () => {
  const speakers = document.querySelectorAll('.speaker:nth-of-type(n+4)');
  if (speakersVisible) {
    // Hide additional speakers
    speakers.forEach((speaker) => {
      speaker.style.display = 'none';
    });
    toggleButton.textContent = 'MORE';
    moreImg2.src = './images/arrow_down.png';
  } else {
    // Show additional speakers
    speakers.forEach((speaker) => {
      speaker.style.display = 'block';
    });
    toggleButton.textContent = 'LESS';
    moreImg2.src = './images/arrow_up.png';
  }
  speakersVisible = !speakersVisible;
});

// Humburger menu
/* menu dropdown codes....... */
const openHambuger = document.querySelector('.fa-bars');
const menu = document.querySelector('.newMenu');
const closeButton = document.querySelector('.fa-times');
/* open button */
openHambuger.addEventListener('click', () => {
  menu.style.visibility = 'visible';
  openHambuger.style.display = 'none';
  closeButton.style.display = 'block';
});

/* clossing button ... */
closeButton.addEventListener('click', () => {
  menu.style.display = 'none';
  openHambuger.style.display = 'block';
  closeButton.style.display = 'none';
});

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menu.style.display = 'none';
    openHambuger.style.display = 'block';
    closeButton.style.display = 'none';
  });
});
