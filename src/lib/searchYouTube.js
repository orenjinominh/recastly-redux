// var searchYouTube = ({key, query, max = 5}, callback) => {
//   $.get('https://www.googleapis.com/youtube/v3/search', {
//     part: 'snippet',
//     key: key,
//     q: query,
//     maxResults: max,
//     type: 'video',
//     videoEmbeddable: 'true'
//   })
//     .done(({items}) => {
//       if (callback) {
//         callback(items);
//       }
//     })
//     .fail(({responseJSON}) => {
//       responseJSON.error.errors.forEach((err) =>
//         console.error(err)
//       );
//     });
// };


// https://www.googleapis.com/youtube/v3/search/part=snippet&key=AIzaSyAi3PObXqu7aQzc4idXaGeQWdwmRKQU-NQ&q=boxer+puppies&maxResults=5&type=video&videoEmbeddable=true

var searchYouTube = ({key, query, max = 5}, callback) => {
  fetch('https://www.googleapis.com/youtube/v3/search/?' + new URLSearchParams({
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  }))
    .then( response => response.json())
    .then( data => {
      console.log(data);
      if (callback) {
        callback(data.items);
      }
    })
    .catch((error) => console.error(error));
};


export default searchYouTube;
