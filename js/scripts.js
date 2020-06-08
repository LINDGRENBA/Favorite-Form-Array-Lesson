// business logic

    function addTo(item1, item2, item3, item4) {
      let favoriteArray = [];
      favoriteArray.push(item1, item2, item3, item4);
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

    let newArray = [];
    newArray.push(finalArray[1], finalArray[0], finalArray[2]);
    console.log(newArray);


  });
});