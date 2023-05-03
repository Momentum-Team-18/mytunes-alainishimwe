let mainContainer = document.querySelector("#mainContainer")
console.log(mainContainer)
let searchForm = document.querySelector("#search-form");
let searchField = document.querySelector("#search-field")
console.log(searchField.value)
let itunesURL = "https://proxy-itunes-api.glitch.me/search?term="
let button = document.querySelector("#searchButton")
let clearButton = document.querySelector(".clearButton")

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(searchField.value)

    let itunesURL = "https://proxy-itunes-api.glitch.me/search?term="
    let searchURL = `${itunesURL}${searchField.value}`
    

    console.log(searchURL)

    fetch(searchURL, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data)
    
            for (let song of data.results) {
    
                //console.log(data)
                let songCard = document.createElement('div')
                let songImage = document.createElement('img')
                let songName = document.createElement ('h3')
                let songAudio = document.createElement('audio')
                    songAudio.controls = 'controls'
                let songSource = document.createElement('source')
                    songSource.src = song.previewUrl
                    songAudio.appendChild(songSource)
                    songImage.src = song.artworkUrl100
                //console.log(songImage)
                console.log(songAudio)
                songCard.appendChild(songImage)
                songCard.appendChild(songAudio)
                songCard.classList.add("songCard")
                songImage.classList.add("image")
    
    
                songName.innerText = song.trackName;
                songCard.appendChild(songName)
                songName.classList.add("songName")
                mainContainer.appendChild(songCard);
            
                clearButton.addEventListener('click', (event) => {
                    event.preventDefault()
                    songCard.replaceChildren()
                })
                
                
            }
       
       
            
        });



})




// let myButton = document.getElementById('searchButton')
// myButton.addEventListener('click', searchArtist)
// function searchArtist() {
//let artist = 'Shakira';
    //artist = document.getElementById("nameOfArtist").value










    