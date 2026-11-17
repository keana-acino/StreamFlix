// ============================================================
// 1. Movie card helper
// Each title has its own small function below. This helper makes
// the card so we do not have to repeat the same HTML each time.
// ============================================================
const movieCatalog = [];

function makeCard(title) {
  const savedTitleIds = getSavedTitleIds();
  const isSaved = savedTitleIds.includes(title.id);
  const savedIcon = isSaved ? '✓' : '+';
  const savedClass = isSaved ? 'saved' : '';
  return `
    <div class="col movie-column" data-type="${title.type}" data-genre="${title.genre}">
      <article class="movie-card" data-card="${title.id}" tabindex="0" aria-label="Open ${title.title} details">
        <div class="poster-wrap">
          <img src="${title.image}" alt="Artwork for ${title.title}" loading="lazy">
          <span class="rank">${String(movieCatalog.indexOf(title) + 1).padStart(2, '0')}</span>
          <button class="save-icon ${savedClass}" data-save="${title.id}" aria-label="${isSaved ? 'Remove from' : 'Add to'} My List">${savedIcon}</button>
          <span class="poster-label">${title.title.toUpperCase()}</span>
        </div>
        <div class="card-info">
          <h3 class="card-title">${title.title}</h3>
          <div class="card-meta">
            <span>${title.year} · ${title.type} · ${title.genre}</span>
            <span class="rating">★ ${title.rating}</span>
          </div>
        </div>
      </article>
    </div>`;
}

function addMovieCard(title) {
  movieCatalog.push(title);
  const gridId = title.type === 'Series' ? '#series-grid' : '#movies-grid';
  document.querySelector(gridId).insertAdjacentHTML('beforeend', makeCard(title));
}

// ============================================================
// 2. One function for each movie card
// To add a title, copy one function, change its details, and add
// the new function name to loadAllMovieCards() near the bottom.
// A title function should look like this:
// function addMyMovieCard() {
//   addMovieCard({ id: 'my-movie', title: 'My Movie', genre: 'Action',
//     year: 2025, rating: '8.0', type: 'Movie', image: 'image/my-movie.jpg',
//     description: 'Write a short movie description.' });
// }
// ============================================================

// FINAL DESTINATION: BLOODLINES CARD
function addFinalDestinationCard() {
  addMovieCard({ id: 'final', title: 'Final Destination: Bloodlines', genre: 'Thriller', year: 2025, rating: '7.0', type: 'Movie', image: 'image/final-destination.jpg', description: 'A new generation faces the one force that never loses its way. The future is written in blood.' });
}

// DUNE: PART TWO CARD
function addDuneCard() {
  addMovieCard({ id: 'dune', title: 'Dune: Part Two', genre: 'Sci-Fi', year: 2024, rating: '8.5', type: 'Movie', image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=700&q=85', description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.' });
}

// EVERYTHING EVERYWHERE ALL AT ONCE CARD
function addEverythingEverywhereCard() {
  addMovieCard({ id: 'everything', title: 'Everything Everywhere All at Once', genre: 'Action', year: 2022, rating: '7.8', type: 'Movie', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=85', description: 'An exhausted laundromat owner discovers she can access the lives of her many selves across the multiverse.' });
}

// PAST LIVES CARD
function addPastLivesCard() {
  addMovieCard({ id: 'pastlives', title: 'Past Lives', genre: 'Romcom', year: 2023, rating: '7.8', type: 'Movie', image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=700&q=85', description: 'Two deeply connected childhood friends reunite years later and reflect on the lives they might have shared.' });
}

// SPIDER-MAN: ACROSS THE SPIDER-VERSE CARD
function addSpiderVerseCard() {
  addMovieCard({ id: 'spiderverse', title: 'Spider-Man: Across the Spider-Verse', genre: 'Animation', year: 2023, rating: '8.6', type: 'Movie', image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=700&q=85', description: 'Miles Morales swings across the multiverse and encounters a team of Spider-People protecting it.' });
}

// THE BATMAN CARD
function addBatmanCard() {
  addMovieCard({ id: 'batman', title: 'The Batman', genre: 'Action', year: 2022, rating: '7.8', type: 'Movie', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=85', description: 'A trail of clues sends Batman into Gotham’s underworld as a killer targets the city’s elite.' });
}

// ARRIVAL CARD
function addArrivalCard() {
  addMovieCard({ id: 'arrival', title: 'Arrival', genre: 'Sci-Fi', year: 2016, rating: '7.9', type: 'Movie', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=700&q=85', description: 'A linguist works with the military to communicate with alien lifeforms after twelve spacecraft appear.' });
}

// WHIPLASH CARD
function addWhiplashCard() {
  addMovieCard({ id: 'whiplash', title: 'Whiplash', genre: 'Drama', year: 2014, rating: '8.5', type: 'Movie', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=700&q=85', description: 'A promising young drummer is pushed to his limits at a cut-throat music conservatory.' });
}

// INCEPTION CARD
function addInceptionCard() {
  addMovieCard({ id: 'inception', title: 'Inception', genre: 'Sci-Fi', year: 2010, rating: '8.8', type: 'Movie', image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=700&q=85', description: 'A skilled thief is offered a chance to erase his past by planting an idea inside a target’s mind.' });
}

// INTERSTELLAR CARD
function addInterstellarCard() {
  addMovieCard({ id: 'interstellar', title: 'Interstellar', genre: 'Adventure', year: 2014, rating: '8.7', type: 'Movie', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=700&q=85', description: 'Explorers travel beyond this galaxy to discover whether mankind has a future among the stars.' });
}

// KNIVES OUT CARD
function addKnivesOutCard() {
  addMovieCard({ id: 'knivesout', title: 'Knives Out', genre: 'Mystery', year: 2019, rating: '7.9', type: 'Movie', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=85', description: 'A detective untangles a web of family secrets after a famous mystery novelist dies.' });
}

// GET OUT CARD
function addGetOutCard() {
  addMovieCard({ id: 'getout', title: 'Get Out', genre: 'Horror', year: 2017, rating: '7.8', type: 'Movie', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=700&q=85', description: 'A weekend visit with his girlfriend’s family takes a disturbing turn for a young photographer.' });
}

// LA LA LAND CARD
function addLaLaLandCard() {
  addMovieCard({ id: 'la-la-land', title: 'La La Land', genre: 'Romcom', year: 2016, rating: '8.0', type: 'Movie', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=85', description: 'A musician and an aspiring actor fall in love while chasing their dreams in Los Angeles.' });
}

// CRAZY RICH ASIANS CARD
function addCrazyRichAsiansCard() {
  addMovieCard({ id: 'crazyrichasians', title: 'Crazy Rich Asians', genre: 'Romcom', year: 2018, rating: '6.9', type: 'Movie', image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=700&q=85', description: 'A New Yorker discovers her boyfriend’s family is one of Singapore’s wealthiest and most demanding.' });
}

// THE MENU CARD
function addTheMenuCard() {
  addMovieCard({ id: 'the-menu', title: 'The Menu', genre: 'Thriller', year: 2022, rating: '7.2', type: 'Movie', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=85', description: 'A couple travels to an exclusive restaurant where the menu comes with an unexpected twist.' });
}

// COCO CARD
function addCocoCard() {
  addMovieCard({ id: 'coco', title: 'Coco', genre: 'Animation', year: 2017, rating: '8.4', type: 'Movie', image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=700&q=85', description: 'A young musician journeys to the Land of the Dead to uncover his family’s long-hidden story.' });
}

// TOP GUN: MAVERICK CARD
function addTopGunCard() {
  addMovieCard({ id: 'topgun', title: 'Top Gun: Maverick', genre: 'Action', year: 2022, rating: '8.2', type: 'Movie', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=700&q=85', description: 'After decades of service, Maverick trains a new generation for a dangerous mission.' });
}

// BARBIE CARD
function addBarbieCard() {
  addMovieCard({ id: 'barbie', title: 'Barbie', genre: 'Comedy', year: 2023, rating: '6.8', type: 'Movie', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=85', description: 'Barbie leaves her perfect world to discover what it means to live in the real one.' });
}

// LITTLE WOMEN CARD
function addLittleWomenCard() {
  addMovieCard({ id: 'littlewomen', title: 'Little Women', genre: 'Drama', year: 2019, rating: '7.8', type: 'Movie', image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=700&q=85', description: 'Four sisters come of age in post-Civil War America and find their own paths.' });
}

// A QUIET PLACE CARD
function addQuietPlaceCard() {
  addMovieCard({ id: 'quietplace', title: 'A Quiet Place', genre: 'Horror', year: 2018, rating: '7.5', type: 'Movie', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=85', description: 'A family must live in silence to survive in a world hunted by sound-sensitive creatures.' });
}

// FREE GUY CARD
function addFreeGuyCard() {
  addMovieCard({ id: 'freeguy', title: 'Free Guy', genre: 'Comedy', year: 2021, rating: '7.1', type: 'Movie', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=85', description: 'A bank teller discovers he is a background character in a video game and decides to become the hero.' });
}

// JUMANJI CARD
function addJumanjiCard() {
  addMovieCard({ id: 'jumanji', title: 'Jumanji: Welcome to the Jungle', genre: 'Adventure', year: 2017, rating: '6.9', type: 'Movie', image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=700&q=85', description: 'Four teenagers get pulled into a video game and must work together to find their way home.' });
}

// GLASS ONION CARD
function addGlassOnionCard() {
  addMovieCard({ id: 'glassonion', title: 'Glass Onion', genre: 'Mystery', year: 2022, rating: '7.1', type: 'Movie', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=85', description: 'A detective joins a tech billionaire’s island getaway and unravels a new mystery.' });
}

// YOUR NAME CARD
function addYourNameCard() {
  addMovieCard({ id: 'yourname', title: 'Your Name.', genre: 'Animation', year: 2016, rating: '8.4', type: 'Movie', image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=700&q=85', description: 'Two teenagers mysteriously begin switching lives across distance and time.' });
}

// THE BEAR SERIES CARD
function addTheBearCard() {
  addMovieCard({ id: 'bear', title: 'The Bear', genre: 'Drama', year: 2022, rating: '8.5', type: 'Series', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=700&q=85', description: 'A young chef returns to Chicago to run his family’s sandwich shop amid grief, pressure, and big dreams.' });
}

// WEDNESDAY SERIES CARD
function addWednesdayCard() {
  addMovieCard({ id: 'wednesday', title: 'Wednesday', genre: 'Mystery', year: 2022, rating: '8.0', type: 'Series', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=85', description: 'Wednesday Addams investigates a murder mystery at her new school for outcasts.' });
}

// STRANGER THINGS SERIES CARD
function addStrangerThingsCard() {
  addMovieCard({ id: 'strangerthings', title: 'Stranger Things', genre: 'Sci-Fi', year: 2016, rating: '8.7', type: 'Series', image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=700&q=85', description: 'A group of friends uncover secret experiments and supernatural forces in their small town.' });
}

// BRIDGERTON SERIES CARD
function addBridgertonCard() {
  addMovieCard({ id: 'bridgerton', title: 'Bridgerton', genre: 'Romcom', year: 2020, rating: '7.4', type: 'Series', image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=700&q=85', description: 'The Bridgerton siblings navigate love and scandal in Regency-era London.' });
}

// ONE PIECE SERIES CARD
function addOnePieceCard() {
  addMovieCard({ id: 'onepiece', title: 'One Piece', genre: 'Adventure', year: 2023, rating: '8.3', type: 'Series', image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=700&q=85', description: 'A young pirate and his crew set sail in search of the world’s greatest treasure.' });
}

// ONLY MURDERS IN THE BUILDING SERIES CARD
function addOnlyMurdersCard() {
  addMovieCard({ id: 'onlymurders', title: 'Only Murders in the Building', genre: 'Comedy', year: 2021, rating: '8.1', type: 'Series', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=85', description: 'Three neighbors obsessed with true crime start a podcast while investigating a death in their building.' });
}

// THE LAST OF US SERIES CARD
function addLastOfUsCard() {
  addMovieCard({ id: 'lastofus', title: 'The Last of Us', genre: 'Drama', year: 2023, rating: '8.7', type: 'Series', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=700&q=85', description: 'A hardened survivor escorts a teenager across a dangerous, changed America.' });
}

// THE QUEEN'S GAMBIT SERIES CARD
function addQueensGambitCard() {
  addMovieCard({ id: 'queensgambit', title: 'The Queen’s Gambit', genre: 'Drama', year: 2020, rating: '8.5', type: 'Series', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=700&q=85', description: 'An orphaned chess prodigy rises through the ranks while battling her own demons.' });
}

// SQUID GAME SERIES CARD
function addSquidGameCard() {
  addMovieCard({ id: 'squidgame', title: 'Squid Game', genre: 'Thriller', year: 2021, rating: '8.0', type: 'Series', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=85', description: 'Cash-strapped contestants enter a mysterious competition with life-changing stakes.' });
}

// ARCANE SERIES CARD
function addArcaneCard() {
  addMovieCard({ id: 'arcane', title: 'Arcane', genre: 'Animation', year: 2021, rating: '9.0', type: 'Series', image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=700&q=85', description: 'Two sisters find themselves on opposing sides of a conflict between cities.' });
}

// LUPIN SERIES CARD
function addLupinCard() {
  addMovieCard({ id: 'lupin', title: 'Lupin', genre: 'Action', year: 2021, rating: '7.5', type: 'Series', image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=85', description: 'A master thief draws inspiration from the gentleman burglar Arsène Lupin.' });
}

// THE GOOD PLACE SERIES CARD
function addGoodPlaceCard() {
  addMovieCard({ id: 'goodplace', title: 'The Good Place', genre: 'Comedy', year: 2016, rating: '8.2', type: 'Series', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=85', description: 'A woman arrives in the afterlife and tries to become a better person.' });
}

// ============================================================
// 3. Put all movie cards on the page
// ============================================================
function loadAllMovieCards() {
  addFinalDestinationCard();
  addDuneCard();
  addEverythingEverywhereCard();
  addPastLivesCard();
  addSpiderVerseCard();
  addBatmanCard();
  addArrivalCard();
  addWhiplashCard();
  addInceptionCard();
  addInterstellarCard();
  addKnivesOutCard();
  addGetOutCard();
  addLaLaLandCard();
  addCrazyRichAsiansCard();
  addTheMenuCard();
  addCocoCard();
  addTopGunCard();
  addBarbieCard();
  addLittleWomenCard();
  addQuietPlaceCard();
  addFreeGuyCard();
  addJumanjiCard();
  addGlassOnionCard();
  addYourNameCard();
  addTheBearCard();
  addWednesdayCard();
  addStrangerThingsCard();
  addBridgertonCard();
  addOnePieceCard();
  addOnlyMurdersCard();
  addLastOfUsCard();
  addQueensGambitCard();
  addSquidGameCard();
  addArcaneCard();
  addLupinCard();
  addGoodPlaceCard();

  // Show the first six titles again in the compact trending row.
  movieCatalog.slice(0, 6).forEach((movie) => {
    document.querySelector('#trending-grid').insertAdjacentHTML('beforeend', makeCard(movie));
  });
}

// ============================================================
// 4. Movie information popup
// ============================================================
function showMovieDetails(movieId) {
  const movie = movieCatalog.find((item) => item.id === movieId);
  if (!movie) return;

  document.querySelector('#movie-modal-title').textContent = movie.title;
  document.querySelector('#movie-modal-type').textContent = `${movie.type} · ${movie.genre} · ${movie.year}`;
  document.querySelector('#movie-modal-description').textContent = movie.description;
  document.querySelector('#movie-modal-art').style.backgroundImage = `linear-gradient(0deg, #12131a, transparent 80%), url("${movie.image}")`;

  const modal = bootstrap.Modal.getOrCreateInstance(document.querySelector('#movie-modal'));
  modal.show();
}

// ============================================================
// 5. My List (saved cards)
// ============================================================
function getSavedTitleIds() {
  try {
    return JSON.parse(localStorage.getItem('streamflix-list') || '[]');
  } catch {
    return [];
  }
}

function updateSavedList() {
  const savedTitleIds = getSavedTitleIds();
  const savedGrid = document.querySelector('#saved-grid');
  savedGrid.innerHTML = '';

  movieCatalog.forEach((movie) => {
    if (savedTitleIds.includes(movie.id)) {
      savedGrid.insertAdjacentHTML('beforeend', makeCard(movie));
    }
  });

  document.querySelector('#list-count').textContent = savedTitleIds.length;
  document.querySelector('#list-count').hidden = savedTitleIds.length === 0;
  document.querySelector('#list-empty').hidden = savedTitleIds.length !== 0;
}

function toggleSavedTitle(movieId) {
  let savedTitleIds = getSavedTitleIds();
  const wasAlreadySaved = savedTitleIds.includes(movieId);

  if (wasAlreadySaved) {
    savedTitleIds = savedTitleIds.filter((id) => id !== movieId);
  } else {
    savedTitleIds.push(movieId);
  }

  localStorage.setItem('streamflix-list', JSON.stringify(savedTitleIds));

  document.querySelectorAll(`[data-save="${movieId}"]`).forEach((button) => {
    const isSaved = savedTitleIds.includes(movieId);
    button.classList.toggle('saved', isSaved);
    button.textContent = isSaved ? '✓' : '+';
  });

  const heroListButton = document.querySelector(`[data-info="${movieId}"]`);
  if (heroListButton) {
    const isSaved = savedTitleIds.includes(movieId);
    heroListButton.innerHTML = isSaved ? '<span>✓</span> My list' : '<span>＋</span> My list';
  }

  updateSavedList();
  showToast(wasAlreadySaved ? 'Removed from My List' : 'Added to My List');
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1900);
}

// ============================================================
// 6. Search and category filters
// ============================================================
function filterMovieCards() {
  const searchText = document.querySelector('#search').value.toLowerCase().trim();
  const selectedFilter = document.querySelector('.filter.active').dataset.filter;

  document.querySelectorAll('.movie-column').forEach((column) => {
    const movie = movieCatalog.find((item) => item.id === column.querySelector('[data-card]').dataset.card);
    const matchesSearch = `${movie.title} ${movie.genre} ${movie.type}`.toLowerCase().includes(searchText);
    const matchesFilter = selectedFilter === 'All'
      || movie.type === selectedFilter
      || movie.genre === selectedFilter;

    column.hidden = !matchesSearch || !matchesFilter;
  });
}

document.querySelector('#search').addEventListener('input', filterMovieCards);

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.filter.active').classList.remove('active');
    button.classList.add('active');
    filterMovieCards();
  });
});

// Click a movie card to open its information. Click + to save it.
document.addEventListener('click', (event) => {
  const detailsButton = event.target.closest('[data-details]');
  if (detailsButton) {
    showMovieDetails(detailsButton.dataset.details);
    return;
  }

  const playButton = event.target.closest('[data-play]');
  if (playButton) {
    showMovieDetails(playButton.dataset.play);
    return;
  }

  const heroListButton = event.target.closest('[data-info]');
  if (heroListButton) {
    toggleSavedTitle(heroListButton.dataset.info);
    return;
  }

  const saveButton = event.target.closest('[data-save]');
  if (saveButton) {
    event.stopPropagation();
    toggleSavedTitle(saveButton.dataset.save);
    return;
  }

  const movieCard = event.target.closest('[data-card]');
  if (movieCard) showMovieDetails(movieCard.dataset.card);
});

// Let keyboard users open a focused movie card with Enter or Space.
document.addEventListener('keydown', (event) => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('[data-card]')) {
    event.preventDefault();
    showMovieDetails(event.target.dataset.card);
  }
});

document.querySelector('#profile').addEventListener('click', () => {
  showToast('You’re watching as Alex');
});

// Start the page by putting all the cards on the screen.
loadAllMovieCards();
updateSavedList();
