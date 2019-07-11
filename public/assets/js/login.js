$(document).ready(function() {
  var images = [
    "./assets//images/image1.jpg",
    "./assets/images/image2.jpg",
    "./assets//images/image3.jpg",
    "./assets//images/image4.jpg",
    "./assets//images/image5.jpg",
    "./assets//images/image6.jpg",
    "./assets//images/image7.jpg",
    "./assets//images/image8.jpg",
    "./assets//images/image9.jpg"
  ];

  var showImage;
  var count = 1;

  startSlideshow();

  function startSlideshow() {
    // Use showImage to hold the setInterval to run nextImage.
    showImage = setInterval(nextImage, 5000);
  }

  function nextImage() {
    // console.log("In nextimage " + count);
    // Use a setTimeout to run displayImage
    setTimeout(displayImage, 5000);

    // Increment count
    count++;
    if (count === images.length) {
      count = 0;
    }
  }

  // This function will replace display whatever image it's given
  // in the 'src' attribute of the img tag.
  function displayImage() {
    // console.log("In displayImage " + count);

    $("body").css("background-image", 'url("' + images[count] + '")');
  }

  // Login System
  // Loop through Array of Objects
  var users = [
    {
      // Object @ 0 index
      Email: "marilynsEmail",
      password: "password"
    },
    {
      // Object @ 1 index
      Email: "paulsEmail",
      password: "password"
    },
    {
      // Object @ 2 index
      Email: "serenagbrown24@gmail.com",
      password: "password"
    }
  ];

  // Easy login
  $("#easyLogin").on("click", function(event) {
    window.location = "./admin.html";
    return;
  });
  $("#easyLogin2").on("click", function(event) {
    window.location = "./admin.html";
    return;
  });
  $("#easyLogin3").on("click", function(event) {
    window.location = "./admin.html";
    return;
  });

  // //localStorage
  $("#signIn").on("click", function(event) {
    console.log("Here3");
    event.preventDefault();
    var password = $("#password")
      .val()
      .trim();
    var email = $("#Email")
      .val()
      .trim();

    for (var i = 0; i < users.length; i++) {
      // check is user input matches Email and password of a current index of the users array
      if (email == users[i].Email && password == users[i].password) {
        console.log(email + " is logged in!!!");
        // stop the function if this is found to be true
        window.location = "./admin.html";
        return;
      }
      console.log("incorrect Email or password");
    }
  });
});

var signUpButton = document.getElementById("signUp");
var signInButton = document.getElementById("signIn");
var container = document.getElementById("container");

$("#signUp").on("click", function(event) {
  event.preventDefault();
  console.log("Here1");
});

$("#signUp2").on("click", function(event) {
  event.preventDefault();
  console.log("Here2");
  container.classList.add("left-panel-active");
});

$("#signIn2").on("click", function() {
  console.log("Here4");
  container.classList.add("left-panel-active");
});

signUpButton.addEventListener("click", () => {
  console.log("Herea");
  container.classList.add("right-panel-active");
  container.classList.remove("left-panel-active");
});

signInButton.addEventListener("click", () => {
  console.log("Hereb");
  container.classList.add("left-panel-active");
  container.classList.remove("right-panel-active");
});
