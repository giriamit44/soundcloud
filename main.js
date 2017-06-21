/*
  Here is a guide for the steps you could take:
*/
console.log("talking");
// 1. First select and store the elements you'll be working with
let searchIn = document.getElementById("search_field");
let submit = document.getElementById('submit_button');
let searchResults;

let player = document.getElementsByClassName('music-player');
//console.log("what's in search?:", search);


// 2. Create your `onSubmit` event for getting the user's search term
//commenting out for now.  Research...returns following error;
//main.js:16 Uncaught TypeError: Failed to execute 'addEventListener' on 'EventTarget': 2 arguments required, but only 1 present.
//submit.addEventListener('click', function() {});

// 3. Create your `fetch` request that is called after a submission
// NOTE: *I think* this fetch needs to be wrapped in a function so I can include the search string as input

//fetch('https://api.soundcloud.com/tracks?client_id=8538a1744a7fdaa59981232897501e04&q=' + search)

fetch('https://api.soundcloud.com/tracks?client_id=8538a1744a7fdaa59981232897501e04&q=billy_joel')
  .then(
    function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }

      // 4. Create a way to append the fetch results to your page

      response.json().then(function (data) {
        //console.log("fetch worked:", data[0].title);
        for (let i = 0; i < data.length; i++) {
          console.log("show each title:", data[i].title);
          let markup = `
          <div class="artist_container">
          <div class="avatar_container">
           <img class="avatar" src=${data[i].user.avatar_url}>
          </div>
           <div class="title_artist">
             <ul>
               <li id="title">${data[i].title}</li>
               <li id="artist">${data[i].user.username}</li>
             </ul>
           </div>
          </div>
         `
          document.getElementById("results").innerHTML += markup;
        }
      });
    }
  )

// 5. Create a way to listen for a click that will play the song in the audio play
// ?? data[i].stream_url  ??