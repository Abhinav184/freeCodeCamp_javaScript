

/* =============== First Solution =============== */

// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside['glove box']; // only this passes the tests
// var gloveBoxContents = myStorage['car'].inside['glove box']; // Okay solution (but does not pass)
// var gloveBoxContents = myStorage['car']['inside']['glove box']; // Okay solution (but does not pass)
