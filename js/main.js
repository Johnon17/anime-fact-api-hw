//Event listener waiting for the "Go!" to be clicked
document.querySelector("button").addEventListener("click", getFact);

function getFact() {

  //API actions and grabs info
  fetch("https://anime-facts-rest-api.herokuapp.com/api/v1/dragon_ball")
    .then(response => response.json()) //parse response as JSON
    .then(data => {
      //Generate random number which will be used to select fact to display
      let num = Math.floor(Math.random() * (Math.floor(data.data.length - 1) - Math.ceil(0)) - Math.ceil(0))

      //Replace the h1 text with our randomly selected fact from the API returned data
      document.querySelector("h1").innerText = data.data[num].fact
      // //Insert the image of the getFact function on the page
      document.querySelector("img").src = data.img
      //Change button text so they can ask for a new fact
      document.querySelector("button").innerText = "New Fact"

      document.querySelector("h3").innerText = "Hope you didn't think DB was Database"
    })
    //Error Message
    .catch(err => console.error(err))
}