// business logic

    function addTo(item1, item2, item3, item4) {
      let favoriteArray = [];
      favoriteArray.push(item1);
      favoriteArray.push(item2);
      favoriteArray.push(item3);
      favoriteArray.push(item4);
      console.log("first console.log" + favoriteArray);
      return favoriteArray;
    }

//user interface logic
$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();

    let userFirstName = $('#firstname').val();
    let userLastName = $('#lastname').val();
    let userFavoriteDestination = $('#destination').val();
    let userFavoritePlant = $('#plant').val();
    let finalArray = addTo(userFirstName, userLastName, userFavoriteDestination, userFavoritePlant);
    console.log("second console.log" + finalArray)

  });
});