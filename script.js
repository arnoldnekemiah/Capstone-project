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