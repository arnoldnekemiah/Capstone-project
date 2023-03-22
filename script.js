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
    h3.textContent = `Speaker ${i + 1}`;
    speakerIntro.appendChild(h3);

    const intro = document.createElement('p');
    intro.classList.add('intro');
    intro.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    speakerIntro.appendChild(intro);

    const autobio = document.createElement('p');
    autobio.classList.add('autobio');
    autobio.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere orci velit, eu aliquam orci iaculis vel. Donec imperdiet mauris vel magna efficitur, vitae lacinia mauris lobortis. Aliquam erat volutpat.';
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
    h8.textContent = 'Jane Doe';
    speakerIntro3.appendChild(h8);

    const intro3 = document.createElement('p');
    intro3.classList.add('intro');
    intro3.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    speakerIntro3.appendChild(intro3);
  }
}

// Call the function with 6 speakers when media screen is large
if (window.matchMedia('(min-width: 768px)').matches) {
  generateSpeakers(6);
}
