/*
  Here is a guide for the steps you could take:
*/
console.log("talking");
// 1. First select and store the elements you'll be working with
let search = document.getElementById("search_field").value;
console.log("what's in search?:", search);


// 2. Create your `onSubmit` event for getting the user's search term

//  =submit_button.onclick

// 3. Create your `fetch` request that is called after a submission
//fetch('https://api.soundcloud.com/tracks?client_id=8538a1744a7fdaa59981232897501e04')

fetch('https://api.soundcloud.com/tracks?client_id=8538a1744a7fdaa59981232897501e04&q=asdf')
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
               <li>${data[i].title}</li>
               <li>${data[i].user.username}</li>
             </ul>
           </div>
          </div>
         `
          document.getElementById("results").innerHTML += markup;
        }
      });
      //      response.json().then(function (data) {
      //        //console.log("fetch worked:", data[0].title);
      //        for (let i = 0; i < data.length; i++) {
      //          console.log("show each title:", data[ i].title);
      //          let markup = `
      //           <div class="title">
      //             <ul>
      //               <li><img src=${data[i].user.avatar_url}></li>
      //               <li>${data[i].title}</li>
      //               <li>${data[i].user.username}</li>
      //             </ul>
      //           </div>
      //         `
      //          document.getElementById("results").innerHTML += markup;
      //        }
      //      });
    }
  )

// 5. Create a way to listen for a click that will play the song in the audio play
