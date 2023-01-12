// Get the swatches and the image element
var yellowSwatch = document.getElementById("yellow");
var blueSwatch = document.getElementById("blue");
var redSwatch = document.getElementById("red");
var whiteSwatch = document.getElementById("white");
var image = document.getElementById("product-photo");

// Get the price element
var price = document.getElementById("price");

// Add an event listener to the yellow swatch that shows the yellow image and updates the price when the swatch is hovered over
yellowSwatch.addEventListener("mouseover", function() {
  console.log("Yellow");
  image.src = "chair-yellow@2x.jpg";
  price.innerHTML = "$74.99";
  price.style.color = "green";
  price.innerHTML += " (Sale)";
});

// Add an event listener to the yellow swatch that resets the price when the swatch is not hovered over
yellowSwatch.addEventListener("mouseleave", function() {
  resetPrice();
});

// Add an event listener to the blue swatch that shows the blue image and updates the price when the swatch is hovered over
blueSwatch.addEventListener("mouseover", function() {
  image.src = "chair-blue@2x.jpg";
  price.innerHTML = "$89.99";
  price.style.color = "black";
});

// Add an event listener to the blue swatch that resets the price when the swatch is not hovered over
blueSwatch.addEventListener("mouseleave", function() {
  resetPrice();
});

// Add an event listener to the red swatch that shows the red image and updates the price when the swatch is hovered over
redSwatch.addEventListener("mouseover", function() {
  image.src = "chair-red@2x.jpg";
  price.innerHTML = "$49.99";
  price.style.color = "red";
  price.innerHTML += " (Clearance)";
});

// Add an event listener to the red swatch that resets the price when the swatch is not hovered over
whiteSwatch.addEventListener("mouseleave", function() {
  resetPrice();
});

// Define a function to reset the price to its default state

whiteSwatch.addEventListener("mouseover", function() {
  image.src = "chair-beige@2x.jpg";
  price.innerHTML = "$49.99";
  price.style.color = "red";
  price.innerHTML += " (Clearance)";
});
