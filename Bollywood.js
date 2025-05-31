let actors = document.querySelector('.actors-container');

let displayMovie = document.querySelector('#movie-name-1-letter');
let displayHero = document.querySelector('#hero-name-1-letter');
let displayHeroine = document.querySelector('#heroine-name-1-letter');
let drawingElement = document.querySelector('#drawing');

let heros = [];
let heroines = [];

let inputMovie_Value;
let movie_Name;

// Store all movie names for suggestions
let allMovieNames = [];
let enableMovieSuggestions = false;
let correctHeroGuessed = false;
let correctHeroineGuessed = false;


function loadCSV() {
    heros = [];
    heroines = [];

    fetch('movies.csv')
        .then(response => response.text())
        .then(csvText => {
        const result = Papa.parse(csvText, { header: true, skipEmptyLines: true });
        const entries = result.data.map(row => ({
            movie: row.movie,
            // Check if row.actor is not undefined before splitting
            actor: row.actor?.split(',').map(x => x.trim()) || [],
            // Check if row.actress is not undefined before splitting
            actress: row.actress?.split(',').map(x => x.trim()) || []
        }));

        const random = entries[Math.floor(Math.random() * entries.length)];

        inputMovie_Value = random.movie;

        for(let i = 0; i < random.actor.length; i++){
            heros.push(random.actor[i]);
        }
        // heros.push(random.actor);

        for(let i = 0; i < random.actress.length; i++){
            heroines.push(random.actress[i]);
        }
        // heroines.push(random.actress);

        let footerElement = document.querySelector("footer");
        let drawMovieName = document.querySelector('#draw-Movie');

        let drawActorsElement = document.querySelector('#draw-actor');

        footerElement.classList.remove('visibility-hidden');
    
        displayMovie.classList.add('js-display-bg-color');
        displayHero.classList.add('js-display-bg-color');
        displayHeroine.classList.add('js-display-bg-color');

        movie_Name = inputMovie_Value.toUpperCase().replaceAll(' ','');

        

        console.log(inputMovie_Value);
        let movieName_1_letter = inputMovie_Value[0].toUpperCase();
        console.log(movieName_1_letter);

        displayMovie.innerHTML = `
            <span class="lable_Movie">Movie Name start with</span>
            <span class="dot_Movie"> : </span>
            <span class="Movie-1">${movieName_1_letter}</span>
        `;

        drawingElement.classList.add('js-drawing');
        drawMovieName.innerText = `${movieName_1_letter}`;
        drawMovieName.classList.add('js-draw-Movie');

        drawActorsElement.innerHTML = `
            <h5 id="draw-Hero"></h5>
            <h5 id="draw-Heroine"></h5>
        `;

        displayHero.innerHTML = `
            <span class="lable_Hero">Hero Name start with</span>
            <span class="dot_Hero"> : </span>
        `;
        displayHeroine.innerHTML = `
            <span class="lable_Heroine">Heroine Name start with</span>
            <span class="dot_Heroine"> : </span>
        `;


        let heroName_1_letter;
        let drawHeroName = document.querySelector('#draw-Hero');

        for(let i = 0; i<heros.length ; i++){
            heroName_1_letter = heros[i][0].toUpperCase();
            console.log(heros[i]);
            console.log(heroName_1_letter);

            if(displayHero.innerText.length === 22){
                displayHero.innerHTML += `<span class="Hero-1">${heroName_1_letter}</span>  `;
                drawHeroName.innerHTML += ` ${heroName_1_letter} `;
            } else {
                document.querySelector('.Hero-1').innerText += ` , ${heroName_1_letter} `;
                // displayHero.innerText += ` , ${heroName_1_letter} `;
                drawHeroName.innerHTML += ` <br>${heroName_1_letter} `;
            }
        }
    
        drawHeroName.classList.add('js-draw-Hero');


        let heroineName_1_letter;
        let drawHeroineName = document.querySelector('#draw-Heroine');


        for(let i = 0; i<heroines.length ; i++){
            heroineName_1_letter = heroines[i][0].toUpperCase();
            console.log(heroines[i]);
            console.log(heroineName_1_letter);

            if(displayHeroine.innerText.length === 25){
                displayHeroine.innerHTML += `<span class="Heroine-1">${heroineName_1_letter}</span>  `;
                drawHeroineName.innerHTML += ` ${heroineName_1_letter} `;
            } else {
                document.querySelector('.Heroine-1').innerText += ` , ${heroineName_1_letter} `;
                // displayHero.innerText += ` , ${heroName_1_letter} `;
                drawHeroineName.innerHTML += ` <br>${heroineName_1_letter} `;
            }
        }
    
        drawHeroineName.classList.add('js-draw-Heroine');
  
    startGame();
    });
}


function movieName(){

    let footerElement = document.querySelector("footer");

    inputMovie_Value = document.querySelector('#movie-name').value;
    console.log(inputMovie_Value);
    // console.log(" ansh Patel  ".replaceAll(' ',''));

    let drawMovieName = document.querySelector('#draw-Movie');

    let drawActorsElement = document.querySelector('#draw-actor');

    let play = document.querySelector('#play-btn');
    play.innerHTML = ``;

    heros = [];
    heroines = [];

    if(inputMovie_Value !== ''){

        let randomMovieBTN = document.querySelector("#random_movie");
        randomMovieBTN.classList.add('visibility-hidden');

        footerElement.classList.remove('visibility-hidden');
    
        displayMovie.classList.add('js-display-bg-color');
        displayHero.classList.add('js-display-bg-color');
        displayHeroine.classList.add('js-display-bg-color');

        movie_Name = inputMovie_Value.toUpperCase().replaceAll(' ','');

        let movieName_1_letter = inputMovie_Value[0].toUpperCase();
        console.log(movieName_1_letter);

        // document.querySelector('#movie-name').value = '';
        // inputMovie_Value = '';

        
        displayMovie.innerHTML = `
            <span class="lable_Movie">Movie Name start with</span>
            <span class="dot_Movie"> : </span>
            <span class="Movie-1">${movieName_1_letter}</span>
        `;

        drawingElement.classList.add('js-drawing');
        drawMovieName.innerText = `${movieName_1_letter}`;
        drawMovieName.classList.add('js-draw-Movie');


        actors.innerHTML = `
            <div id="actors">
                <div id="Heros">
                    <div id="grid_heros">
                        <label class="hero_inputs" id="hero_label" for="hero-name">Hero : </label>
                        <input class="hero_inputs" id="hero-name" type="text" placeholder="Enter Hero Name">
                        <button class="hero_inputs actor_btn" onclick="
                            herosName();
                        ">ADD Hero</button>
                    </div>

                    <h3 id="Hero_fullname">Hero's Name</h3>
                </div>

                <div id="Heroine">
                    <div id="grid_heroines">
                        <label class="heroine_inputs" id="heroine_label" for="heroine-name">Heroine : </label>
                        <input class="heroine_inputs" id="heroine-name" type="text" placeholder="Enter Heroine Name">
                        <button class="heroine_inputs actor_btn" onclick="
                            heroinesName();
                        ">ADD Heroine</button>
                    </div>

                    <h3 id="Heroine_fullname">Heroine's Name</h3>
                </div>
            </div>
        `;

        drawActorsElement.innerHTML = `
            <h5 id="draw-Hero"></h5>
            <h5 id="draw-Heroine"></h5>
        `;

        displayHero.innerHTML = `
            <span class="lable_Hero">Hero Name start with</span>
            <span class="dot_Hero"> : </span>
        `;
        displayHeroine.innerHTML = `
            <span class="lable_Heroine">Heroine Name start with</span>
            <span class="dot_Heroine"> : </span>
        `;

    } else {
        alert('You Must Enter MOVIE Name...!!!');
    }
}



let Hero = false;

function herosName(){

    let inputHeroName_Value = document.querySelector('#hero-name').value;
    let heroName = inputHeroName_Value.toUpperCase().replaceAll(' ','');
    let flag = false;

    let heroFullName = document.querySelector('#Hero_fullname');
    let drawHeroName = document.querySelector('#draw-Hero');
    
    
    // console.log(inputHeroName_Value);
    // console.log(heroName);

    // let showWarning = document.querySelector('#warning');
    if(Hero === true){
        for(let i = 0; i < heros.length ; i++){
            if(heroName === heros[i].toUpperCase().replaceAll(' ','')){
                flag = true;
                alert('This Hero is Already Added !!');

                break;
                // showWarning.innerText = '';
            } 
        }
    } 
    
    if(flag === false){
        if(inputHeroName_Value !== ''){
            heros.push(inputHeroName_Value);
            Hero = true;
    
            console.log(heroName);
    
            let heroName_1_letter = inputHeroName_Value[0].toUpperCase();
            console.log(heroName_1_letter);
    
            document.querySelector('#hero-name').value = '';      // for Clear Hero input Field
        
            if(displayHero.innerText.length === 22){
                displayHero.innerHTML += `<span class="Hero-1">${heroName_1_letter}</span>  `;
                drawHeroName.innerHTML += ` ${heroName_1_letter} `;
            } else {
                document.querySelector('.Hero-1').innerText += ` , ${heroName_1_letter} `;
                // displayHero.innerText += ` , ${heroName_1_letter} `;
                drawHeroName.innerHTML += ` <br>${heroName_1_letter} `;
            }
    
            drawHeroName.classList.add('js-draw-Hero');
            heroFullName.innerHTML += `
                <span class="delete-btn-arrange">
                    <h4 id="Hero-names-list">${inputHeroName_Value}</h4>
                    <button class="delete-button" onclick="deleteHero('${inputHeroName_Value}');">
                        <span class="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                </span>
            `;
            playButton();
        } else {
            alert('Please Enter a Hero Name.');
        }
    }
}

function deleteHero(deleteHeroName){
    console.log(deleteHeroName);

    let heroFullName = document.querySelector('#Hero_fullname');
    let drawHeroName = document.querySelector('#draw-Hero');

    for(let i = 0; i < heros.length; i++){
        if(heros[i] === deleteHeroName){
            heros.splice(i, 1);
            break;
        }
    }

    // displayHero.innerText = `Hero Name start with :`;
    displayHero.innerHTML = `
        <span class="lable_Hero">Hero Name start with</span>
        <span class="dot_Hero"> : </span>
    `;

    drawHeroName.innerHTML = ``;
    heroFullName.innerHTML = `Hero's Name`;
    for(let i = 0; i < heros.length; i++){

        if(displayHero.innerText.length === 22){
            displayHero.innerHTML += `<span class="Hero-1">${heros[i][0].toUpperCase()}</span>  `;
            // displayHero.innerText += ` ${heros[i][0].toUpperCase()} `;
            drawHeroName.innerHTML += ` ${heros[i][0].toUpperCase()} `;
        } else {
            document.querySelector('.Hero-1').innerText += ` , ${heros[i][0].toUpperCase()} `;
            // displayHero.innerText += ` , ${heros[i][0].toUpperCase()} `;
            drawHeroName.innerHTML += ` <br>${heros[i][0].toUpperCase()} `;
        }
        
        heroFullName.innerHTML += `
            <span class="delete-btn-arrange">
                <h4 id="Hero-names-list">${heros[i]}</h4>
                <button class="delete-button" onclick="deleteHero('${heros[i]}');">
                    <span class="material-symbols-outlined">
                        delete
                    </span>
                </button>
            </span>
        `;
    }
}


let Heroine = false;

function heroinesName(){

    let inputHeroineName_Value = document.querySelector('#heroine-name').value;
    let heroineName = inputHeroineName_Value.toUpperCase().replaceAll(' ','');
    let flag = false;

    let heroineFullName = document.querySelector('#Heroine_fullname');
    let drawHeroineName = document.querySelector('#draw-Heroine');
    
    // console.log(inputHeroineName_Value);

    // let showWarning = document.querySelector('#warning');
    if(Heroine === true){
        for(let i = 0; i < heroines.length ; i++){
            if(heroineName === heroines[i].toUpperCase().replaceAll(' ','')){
                flag = true;
                alert('This Heroine is Already Added !!');

                break;
                // showWarning.innerText = '';
            } 
        }
    }
    

    if(flag === false){
        if(inputHeroineName_Value !== ''){
            heroines.push(inputHeroineName_Value);
            Heroine = true;

            console.log(heroineName);

            let heroineName_1_letter = inputHeroineName_Value[0].toUpperCase();
            console.log(heroineName_1_letter);
            
            document.querySelector('#heroine-name').value = '';      // for Clear Heroine input Field


            if(displayHeroine.innerText.length === 25){
                displayHeroine.innerHTML += `<span class="Heroine-1">${heroineName_1_letter}</span>  `;
                // displayHeroine.innerText += ` ${heroineName_1_letter} `;
                drawHeroineName.innerHTML += ` ${heroineName_1_letter} `;
            } else {
                document.querySelector('.Heroine-1').innerText += ` , ${heroineName_1_letter} `;
                // displayHeroine.innerText += ` , ${heroineName_1_letter} `;
                drawHeroineName.innerHTML += ` <br>${heroineName_1_letter} `;
            }


            drawHeroineName.classList.add('js-draw-Heroine');
            heroineFullName.innerHTML += `
                <span class="delete-btn-arrange">
                    <h4 id="Heroine-names-list">${inputHeroineName_Value}</h4>
                    <button class="delete-button" onclick="deleteHeroine('${inputHeroineName_Value}');">
                        <span class="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                </span>
            `;
            playButton();
        } else {
            alert('Please Enter a Heroine Name.');
        }
    }
}

function deleteHeroine(deleteHeroineName){
    console.log(deleteHeroineName);

    let heroineFullName = document.querySelector('#Heroine_fullname');
    let drawHeroineName = document.querySelector('#draw-Heroine');

    for(let i = 0; i < heroines.length; i++){
        if(heroines[i] === deleteHeroineName){
            heroines.splice(i, 1);
            break;
        }
    }

    // displayHeroine.innerText = `Heroine Name start with :`;
    displayHeroine.innerHTML = `
        <span class="lable_Heroine">Heroine Name start with</span>
        <span class="dot_Heroine"> : </span>
    `;

    drawHeroineName.innerHTML = ``;
    heroineFullName.innerHTML = `Heroine's Name`;
    for(let i = 0; i < heroines.length; i++){

        if(displayHeroine.innerText.length === 25){
            displayHeroine.innerHTML += `<span class="Heroine-1">${heroines[i][0].toUpperCase()}</span>  `;
            // displayHeroine.innerText += ` ${heroines[i][0].toUpperCase()} `;
            drawHeroineName.innerHTML += ` ${heroines[i][0].toUpperCase()} `;
        } else {
            document.querySelector('.Heroine-1').innerText += ` , ${heroines[i][0].toUpperCase()} `;
            // displayHeroine.innerText += ` , ${heroines[i][0].toUpperCase()} `;
            drawHeroineName.innerHTML += ` <br>${heroines[i][0].toUpperCase()} `;
        }
        
        heroineFullName.innerHTML += `
            <span class="delete-btn-arrange">
                <h4 id="Heroine-names-list">${heroines[i]}</h4>
                <button class="delete-button" onclick="deleteHeroine('${heroines[i]}');">
                    <span class="material-symbols-outlined">
                        delete
                    </span>
                </button>
            </span>
        `;
    }
}

function noneHeroHTML(){
    displayHero.innerHTML = `
        <span class="lable_Hero">Hero</span>
        <span class="dot_Hero"> : </span>
        <span class="Hero-1">None (No Hero in Movie)</span> 
    `;

    return displayHero.innerHTML;
}

function noneHeroineHTML(){
    displayHeroine.innerHTML = `
        <span class="lable_Heroine">Heroine</span>
        <span class="dot_Heroine"> : </span>
        <span class="Heroine-1">None (No Heroine in Movie)</span> 
    `;

    return displayHeroine.innerHTML;
}

function resetHeroHTML(){
    displayHero.innerHTML = `
        <span class="lable_Hero">Hero Name start with</span>
        <span class="dot_Hero"> : </span>
    `;

    return displayHero.innerHTML;
}

function resetHeroineHTML(){
    displayHeroine.innerHTML = `
        <span class="lable_Heroine">Heroine Name start with</span>
        <span class="dot_Heroine"> : </span>
    `;

    return displayHeroine.innerHTML;
}

function playButton(){
    let play = document.querySelector('#play-btn');

    // <a href="Play Bollywood Game.html"></a>

    play.innerHTML = `
        <button id="lets-play-btn" onclick="

        if(displayHero.innerText.length === 22 || displayHeroine.innerText.length === 25)
        {
            if(displayHero.innerText.length === 22){
                noneHeroHTML();
            }

            if(displayHeroine.innerText.length === 25){
                noneHeroineHTML();
            }

            if(displayHero.innerText.length === 30 && displayHeroine.innerText.length === 36){
                alert('Please Enter a Hero/Heroine Name.');

                resetHeroHTML();
                resetHeroineHTML();

            } else {
                startGame();
            }
        }

        startGame();
        
        ">
            <span class="material-symbols-outlined">
                play_circle
            </span>

            <span>Let's Play</span>

            <span class="material-symbols-outlined">
                sports_esports
            </span>
        </button>
    `;

    loadAndParseCSV();
}


async function loadAndParseCSV() {
      const response = await fetch('movies.csv');
      const csvText = await response.text();

      const results = Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true
      });

      const data = results.data;
      const actorSet = new Set();
      const actressSet = new Set();

      data.forEach(row => {
        const actorStr = row['actor'] || '';
        const actressStr = row['actress'] || '';

        actorStr.split(',').forEach(actor => {
          const trimmed = actor.trim();
          if (trimmed) actorSet.add(trimmed);
        });

        actressStr.split(',').forEach(actress => {
          const trimmed = actress.trim();
          if (trimmed) actressSet.add(trimmed);
        });
      });

      setupSuggestions('Play-guess-hero-name', 'actor-suggestions', Array.from(actorSet));
      setupSuggestions('Play-guess-heroine-name', 'actress-suggestions', Array.from(actressSet));
    }

    function setupSuggestions(inputId, listId, dataList) {
      const input = document.getElementById(inputId);
      const list = document.getElementById(listId);
      let currentFocus = -1;

      input.addEventListener('input', () => {
        const value = input.value.toLowerCase();
        list.innerHTML = '';
        currentFocus = -1;

        if (!value) return;

        const matches = dataList.filter(item => item.toLowerCase().includes(value)).slice(0, 5);
        matches.forEach((match, index) => {
          const div = document.createElement('div');
          div.className = 'suggestion-item';
          div.textContent = match;

          // Hover just highlights
          div.addEventListener('mouseenter', () => {
            currentFocus = index;
            setActive(list.querySelectorAll('.suggestion-item'));
          });

          // ✅ FIX: Use mousedown instead of click so it runs before blur
          div.addEventListener('mousedown', (e) => {
            e.preventDefault(); // Prevent input from losing focus
            input.value = match;
            list.innerHTML = '';
          });

          list.appendChild(div);
        });
      });

      input.addEventListener('keydown', (e) => {
        const items = list.querySelectorAll('.suggestion-item');
        if (e.key === 'ArrowDown') {
          currentFocus++;
          if (currentFocus >= items.length) currentFocus = 0;
          setActive(items);
          input.value = items[currentFocus].textContent;
        } else if (e.key === 'ArrowUp') {
          currentFocus--;
          if (currentFocus < 0) currentFocus = items.length - 1;
          setActive(items);
          input.value = items[currentFocus].textContent;
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (currentFocus > -1 && items[currentFocus]) {
            input.value = items[currentFocus].textContent;
            list.innerHTML = '';
          }
        }
      });

      function setActive(items) {
        items.forEach((item, index) => {
          item.classList.toggle('active', index === currentFocus);
        });
        if (items[currentFocus]) {
          items[currentFocus].scrollIntoView({ block: 'nearest' });
        }
      }

      input.addEventListener('blur', () => {
        // Slight delay to allow mousedown event to fire
        setTimeout(() => {
          list.innerHTML = '';
          currentFocus = -1;
        }, 100);
      });
    }


// Fetch all movie names on load
function fetchAllMovieNames() {
    fetch('movies.csv')
        .then(response => response.text())
        .then(csvText => {
            const result = Papa.parse(csvText, { header: true, skipEmptyLines: true });
            allMovieNames = result.data.map(row => row.movie).filter(Boolean);
        });
}
fetchAllMovieNames();

// Setup movie suggestions (autocomplete)
function setupMovieSuggestions() {
    const input = document.getElementById('Paly-guess-movie-name');
    if (!input) return;
    let suggestionBox = document.getElementById('movie-suggestions');
    if (!suggestionBox) {
        suggestionBox = document.createElement('div');
        suggestionBox.className = 'suggestions';
        suggestionBox.id = 'movie-suggestions';
        input.parentNode.appendChild(suggestionBox);
    }
    let currentFocus = -1;

    input.addEventListener('input', () => {
        if (!enableMovieSuggestions) return;
        const value = input.value.toLowerCase();
        suggestionBox.innerHTML = '';
        currentFocus = -1;
        if (!value) return;
        const matches = allMovieNames.filter(name => name.toLowerCase().includes(value)).slice(0, 3);
        matches.forEach((match, index) => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.textContent = match;
            div.addEventListener('mousedown', (e) => {
                e.preventDefault();
                input.value = match;
                suggestionBox.innerHTML = '';
            });
            suggestionBox.appendChild(div);
        });
    });

    input.addEventListener('keydown', (e) => {
        if (!enableMovieSuggestions) return;
        const items = suggestionBox.querySelectorAll('.suggestion-item');
        if (e.key === 'ArrowDown') {
            currentFocus++;
            if (currentFocus >= items.length) currentFocus = 0;
            setActive(items);
            if (items[currentFocus]) input.value = items[currentFocus].textContent;
        } else if (e.key === 'ArrowUp') {
            currentFocus--;
            if (currentFocus < 0) currentFocus = items.length - 1;
            setActive(items);
            if (items[currentFocus]) input.value = items[currentFocus].textContent;
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (currentFocus > -1 && items[currentFocus]) {
                input.value = items[currentFocus].textContent;
                suggestionBox.innerHTML = '';
            }
        }
    });

    function setActive(items) {
        items.forEach((item, index) => {
            item.classList.toggle('active', index === currentFocus);
        });
        if (items[currentFocus]) {
            items[currentFocus].scrollIntoView({ block: 'nearest' });
        }
    }

    input.addEventListener('blur', () => {
        setTimeout(() => {
            suggestionBox.innerHTML = '';
            currentFocus = -1;
        }, 100);
    });
}

function startGame(){

    localStorage.setItem('Movie Name', inputMovie_Value);
    localStorage.setItem('Heros', heros);
    // localStorage.setItem('Heros', JSON.stringify(heros));
    localStorage.setItem('Heroines', heroines);

    let lable_hero_element = document.querySelector('.lable_Hero');
    let dot_hero_element = document.querySelector('.dot_Hero');
    let hero_1_element = document.querySelector('.Hero-1');

    let lable_heroine_element = document.querySelector('.lable_Heroine');
    let dot_heroine_element = document.querySelector('.dot_Heroine');
    let heroine_1_element = document.querySelector('.Heroine-1');

    let lable_Movie_element = document.querySelector('.lable_Movie');
    let dot_Movie_element = document.querySelector('.dot_Movie');
    let Movie_1_element = document.querySelector('.Movie-1');


    document.body.innerHTML = `
        <div class="js-drawing">${drawingElement.innerHTML}</div>

        <div class="play-display-name-container">
            <h1 class="js-display-bg-color" id="movie-name-1-letter">
                <span>${lable_Movie_element.innerText}</span>
                <span>${dot_Movie_element.innerText}</span>
                <span class="Display_Movie-1">${Movie_1_element.innerText}</span>
            </h1>

            <h1 id="play-hero-name-1-letter">
                <span>${lable_hero_element.innerText}</span>
                <span>${dot_hero_element.innerText}</span>
                <span class="Display_Hero-1">${hero_1_element.innerText}</span>
            </h1>

            <h1 id="play-heroine-name-1-letter">
                <span>${lable_heroine_element.innerText}</span>
                <span>${dot_heroine_element.innerText}</span>
                <span class="Display_Heroine-1">${heroine_1_element.innerText}</span>
            </h1>
        </div>

        <h2 id="win-result"></h2>

        <h3 id="result"></h3>

        <div id="play-game-container"></div>
    `;

    let win_result_element = document.querySelector('#win-result');
    win_result_element.classList.add('visibility-hidden');


    let playDisplayHero = document.querySelector('#play-hero-name-1-letter');
    let playDisplayHeroine = document.querySelector('#play-heroine-name-1-letter');


    if(playDisplayHero.innerText.length !== 30){

        playDisplayHero.classList.add('js-display-bg-color');

    } else {

        playDisplayHero.innerHTML = `
            <span class="lable_Heroine">Hero</span>
            <span class="dot_Heroine"> : </span>
            <span class="Heroine-1">None (No Hero in Movie)</span> 
        `;

        playDisplayHero.classList.add('js-actors-name-html-change');
    }
    

    if(playDisplayHeroine.innerText.length !== 36){

        playDisplayHeroine.classList.add('js-display-bg-color');

    } else {

        playDisplayHeroine.innerHTML = `
            <span class="lable_Heroine">Heroine</span>
            <span class="dot_Heroine"> : </span>
            <span class="Heroine-1">None (No Heroine in Movie)</span> 
        `;

        playDisplayHeroine.classList.add('js-actors-name-html-change');
    }


    let playGameContainer = document.querySelector('#play-game-container');

    playGameContainer.innerHTML = `
        <div class="Play-guessing-container">
            <label class="Play-Guessing Play-guess-lable" for="Paly-guess-movie-name">Guess the Movie</label>
            <span class="Play-Guessing"> : </span>
            <div style="position:relative;">
                <input list="moviesList" class="Play-Guessing" id="Paly-guess-movie-name" type="text" placeholder="Enter Movie Name">
                <!-- Suggestions will be appended here -->
            </div>
            <button class="Play-Guessing play-check-btn" onclick="movieNameCheck();">Check</button>
        </div>
    `;

    if(!displayHero.innerText.match('None')){
        playGameContainer.innerHTML += `
            <div class="Play-guessing-container">
                <label class="Play-Guessing Play-guess-lable" for="Play-guess-hero-name">Guess the Hero</label>
                <span class="Play-Guessing"> : </span>

                <div style="position:relative;">
                    <input list="actorList" class="Play-Guessing" id="Play-guess-hero-name" type="text" placeholder="Enter Hero Name">

                    <div class="suggestions" id="actor-suggestions"></div>
                </div>

                <button class="Play-Guessing play-check-btn" onclick="HeroNameCheck();">Check</button>
                
            </div>

            
        `;
    }

    if(!displayHeroine.innerText.match('None')){
        playGameContainer.innerHTML += `
            <div class="Play-guessing-container">
                <label class="Play-Guessing Play-guess-lable" for="Play-guess-heroine-name">Guess the Heroine</label>
                <span class="Play-Guessing"> : </span>

                <div style="position:relative;">
                    <input list="actressList" class="Play-Guessing" id="Play-guess-heroine-name" type="text" placeholder="Enter Heroine Name">

                    <div class="suggestions" id="actress-suggestions"></div>
                </div>

                <button class="Play-Guessing play-check-btn" onclick="heroineNameCheck();">Check</button>
            </div>
        `;
    }

    loadAndParseCSV();

    // Make the "play-showing-Right" section mobile responsive
    document.body.innerHTML += `
        <div class="play-showing-Right" >
            <h1 id="guess-movie">
                <span class="Right_Movie_lable">Right Movie</span>
                <span class="Right_Movie_dot"> : </span>
                <span class="Right_Movie-1"></span>
            </h1>
        </div>
    `;

    let result_element = document.querySelector('#result');
    result_element.classList.add('visibility-hidden');

    let show_Right_Element = document.querySelector('.play-showing-Right');
    show_Right_Element.classList.add('visibility-hidden');

    if(!displayHero.innerText.match('None')){
        show_Right_Element.innerHTML += `
            <h1 id="guess-hero">
                <span class="Right_Hero_lable">Right Hero</span>
                <span class="Right_Hero_dot"> : </span>
                <span class="Right_Hero-1"></span>
            </h1>
        `;
    }

    if(!displayHeroine.innerText.match('None')){
        show_Right_Element.innerHTML += `
            <h1 id="guess-heroine">
                <span class="Right_Heroine_lable">Right Heroine</span>
                <span class="Right_Heroine_dot"> : </span>
                <span class="Right_Heroine-1"></span>
            </h1>
        `;
    }

    document.body.innerHTML += `<footer>
        <button id="play_again_btn" class="visibility-hidden" onclick="window.location.href='Bollywood.html';">
            <span class="material-symbols-outlined">
                play_circle
            </span>

            <span>Play Again</span>

            <span class="material-symbols-outlined">
                sports_esports
            </span>
        </button>
        <div id="credit">Game Created By : Ansh Patel 😇</div>
    </footer>`;
}

// let showResult = document.querySelector('#result');
// showResult = '';

function movieNameCheck(){

    let play_again_btn = document.querySelector('#play_again_btn');

    let result_element = document.querySelector('#result');
    result_element.classList.remove('visibility-hidden');

    let show_Right_Element = document.querySelector('.play-showing-Right');
    let win_result_element = document.querySelector('#win-result');

    let userMovie = document.querySelector('#Paly-guess-movie-name');

    let showResult = document.querySelector('#result');

    if(userMovie.value !== ''){
        let guessMovie = userMovie.value.toUpperCase().replaceAll(' ','');

        let rightMovie = document.querySelector('.Right_Movie-1');
        let finalResult = document.querySelector('#win-result');

        let rightHeros = document.querySelector('.Right_Hero-1');
        let rightHeroines = document.querySelector('.Right_Heroine-1');

        if(guessMovie === movie_Name){
            show_Right_Element.classList.remove('visibility-hidden');
            showResult.innerText = `🎉Congratulations !!🎊 You are Guessing Right Movie.👏`;

            if((rightMovie.innerText.toUpperCase().replaceAll(' ','')).match(guessMovie) === null){
                rightMovie.innerText += ` ${inputMovie_Value} `;
            }

            win_result_element.classList.remove('visibility-hidden');
            finalResult.innerText = `🥳 Huurrayyy...!!! 🏆Congratulations You Won the Game.🏆`;

            if(rightHeros !== null){
                rightHeros.innerText = '';
                for(let i = 0; i < heros.length; i++){

                    if(document.querySelector('#guess-hero').innerText.length === 12){
                        rightHeros.innerText += ` ${heros[i]} `;
                    } else {
                        rightHeros.innerText += ` , ${heros[i]} `;
                    }
                }
            }

            if(rightHeroines !== null){
                rightHeroines.innerText = '';
                for(let i = 0; i < heroines.length; i++){

                    if(document.querySelector('#guess-heroine').innerText.length === 15){
                        rightHeroines.innerText += ` ${heroines[i]} `;
                    } else {
                        rightHeroines.innerText += ` , ${heroines[i]} `;
                    }
                }
            }

            play_again_btn.classList.remove('visibility-hidden');
            
        }else{
            showResult.innerText = `❌ Sorry, Guess another Movie. 😅`;
        }
    } else {
        showResult.innerText = `😐Please, Enter a Movie Name.🙄`;
    }
}

function HeroNameCheck(){

    let result_element = document.querySelector('#result');
    result_element.classList.remove('visibility-hidden');

    let show_Right_Element = document.querySelector('.play-showing-Right');

    let userHero = document.querySelector('#Play-guess-hero-name');

    let showResult = document.querySelector('#result');

    if(userHero.value !== ''){
        let guessHero = userHero.value.toUpperCase().replaceAll(' ','').trim();
        let rightHeros = document.querySelector('.Right_Hero-1');
        let rightHeroFlag = false;
        for(let i = 0; i < heros.length; i++){
            if(guessHero === String(heros[i]).toUpperCase().replaceAll(' ','')){
                show_Right_Element.classList.remove('visibility-hidden');
                showResult.innerText = '🎉Congratulations !!🎊 You are Guessing Right Hero.👏';

                if((rightHeros.innerText).match(heros[i]) === null){

                    if(document.querySelector('#guess-hero').innerText.length === 12){
                        rightHeros.innerText += ` ${heros[i]} `;
                    } else {
                        rightHeros.innerText += ` , ${heros[i]} `;
                    }

                }
                rightHeroFlag = true;
                break;
            }
        }

        if(rightHeroFlag){
            correctHeroGuessed = true;
            if(correctHeroGuessed && correctHeroineGuessed) {
                enableMovieSuggestions = true;
                setupMovieSuggestions();
            }
        }

        if(!rightHeroFlag){
            showResult.innerText = `❌ Sorry, Guess another Hero. 😅`;
        }
    } else {
        showResult.innerText = `😐Please, Enter a Hero Name.🙄`;
    }
}

function heroineNameCheck(){

    let result_element = document.querySelector('#result');
    result_element.classList.remove('visibility-hidden');

    let show_Right_Element = document.querySelector('.play-showing-Right');

    let userHeroine = document.querySelector('#Play-guess-heroine-name');

    let showResult = document.querySelector('#result');

    if(userHeroine.value !== ''){
        let guessHeroine = userHeroine.value.toUpperCase().replaceAll(' ','').trim();
        let rightHeroines = document.querySelector('.Right_Heroine-1');
        let rightHeroineFlag = false;
        for(let i = 0; i < heroines.length; i++){
            if(guessHeroine === String(heroines[i]).toUpperCase().replaceAll(' ','')){
                show_Right_Element.classList.remove('visibility-hidden');
                showResult.innerText = `🎉Congratulations !!🎊 You are Guessing Right Heroine.👏`;

                if((rightHeroines.innerText).match(heroines[i]) === null){

                    if(document.querySelector('#guess-heroine').innerText.length === 15){
                        rightHeroines.innerText += ` ${heroines[i]} `;
                    } else {
                        rightHeroines.innerText += ` , ${heroines[i]} `;
                    }
                }
                rightHeroineFlag = true;
                break;
            }
        }

        if(rightHeroineFlag){
            correctHeroineGuessed = true;
            if(correctHeroGuessed && correctHeroineGuessed) {
                enableMovieSuggestions = true;
                setupMovieSuggestions();
            }
        }

        if(!rightHeroineFlag){
            showResult.innerText = `❌ Sorry, Guess another Heroine. 😅`;
        }
    } else {
        showResult.innerText = `😐Please, Enter a Heroine Name.🙄`;
    }
}
