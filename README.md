#### Click [to view in your browser](https://sjroma.github.io/soundcloud)

# SoundCloud
SoundCloud is an online audio distribution platform and music sharing website based in Berlin, Germany that enables its users to upload, promote, and share audio.
## SoundCloud Music Search
As your final project for this portion of the course, let's take stock of all you have learned 
and build a real application that is useful and you can share with friends. For this app, we 
will be using SoundCloud and, specifically, their Developer API to pull data from.   

You'll use this data to pull songs based on a search that your user performs. Here is an idea of 
what the [end result](https://tiy-learn-content.s3.amazonaws.com/c888498b-musicapp.jpg) should 
look like, though you can have fun with the design.   

Here are the steps you'll need to take in order to complete this project.  
  * Sign up to [SoundCloud for Developers](https://developers.soundcloud.com/) and get an API key.  
  * Build a simple form that has an `<input>` where a user can fill in their favorite band, like 
  [Billy Joel](https://soundcloud.com/billyjoel), and it will return a handful of songs by them or 
  with their name in it.  
  * When the user types in a band name and presses the submit button, you should then make the 
  search request. You can trap this with the `onSubmit()` event.  
  * Once you have the data, you should `fetch` the specific data and use the results to display 
  a listing of songs related to the search term.  
  * Then to add some features, you should set it up so when a user clicks on one of the songs, 
  it should then play in an `<audio>` tag that you've also added to the page.  

## Hints & Tips

There will be some new concepts you'll need to work through on this project, so feel free to ask for 
assistance along the way.

* [API Documents](https://developers.soundcloud.com/docs/api/reference)  
  * You've likely never worked with a robust API before, so you'll need to take time to read 
  through the documentation before getting started. Everything you'll need to know is in there.  
  * **Hint:** _Your API key is important to both getting the results and playing the song_ 
  * Also, note there are some SDK's etc that SoundCloud offers, no need for this, just use their standard REST API ([docs here](https://developers.soundcloud.com/docs/api/reference))  
* Form Submission  
  * You should use the `onSubmit()` method on your form. This will trap when the `submit` button 
  was pressed, thus allowing you to write a handler function.  
  * You'll also need to use the `.value` on the input to get the current value after the 
  submission has happened.  
* Fetching Data  
  * You'll need to take the value from above and use that to build out your URL to send to
  SoundCloud. (Don't forget to send your API token as well)  
* Playing a Song  
  * You'll need to research the `<audio>` tag for this part - 
  [docs here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)  
  * **Hint:** You'll need to dynamically change the `src` value  
The biggest gotcha will likely be getting the song to play. Since your JavaScript has already run, 
if you added an `onClick` event listener to your page, but you add the content after the fact it 
won't register. You need to get creative here, by putting your `onClick` around the entire results
section, and then making sure to get the correct item clicked on. Here is a great article on 
[Event Delegation](https://davidwalsh.name/event-delegate)  

##### ~/tiy/week-four-project/soundcloud
