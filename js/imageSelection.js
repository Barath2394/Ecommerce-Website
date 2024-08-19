const changeImage = (imagePath, element) => {
  const images = document.querySelectorAll(".product-thumbnail img");
  images.forEach((img) => img.classList.remove("selected"));
  element.classList.add("selected");
  document.getElementById("main-image").src = imagePath;
};

const changePreviewImage = (imagePath, element) => {
  const images = document.querySelectorAll(".product-preview-thumbnail img");
  images.forEach((img) => img.classList.remove("selected"));
  element.classList.add("selected");
  document.getElementById("preview-image").src = imagePath;
};

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 37) { 
    showUpComingImage('previous', window.innerWidth < 576 ? 'mobile' : 'desktop');
  } else if (event.keyCode === 39) {
    showUpComingImage('next', window.innerWidth < 576 ? 'mobile' : 'desktop');
  }
});



const backDropContainer = document.querySelector(".backdrop");

const backDrop = () => {
    backDropContainer.style.display = "block" ;
};

const menuBar = () => {
  document.querySelector(".menu-bar-component").style.display = "block";
  document.querySelector(".menu-bar-backdrop").style.display = "block";
  document.querySelector("nav ul").style.display = "flex";
};
const closeMenuBar = () => {
  document.querySelector(".menu-bar-backdrop").style.display = "none";
  document.querySelector("nav ul").style.display = "none";
};

const closePreview = (event) => {
  console.log(event);
  if (event.target.closest('.product-preview')) {
    return;
  }else{
    backDropContainer.style.display = "none";
  }

};


const showUpComingImage = (option,view) => {
  let currentImage;
  if(view=='desktop'){
    currentImage = document.querySelector(
      ".product-preview-thumbnail img.active"
    );
  }
  else if(view=='mobile'){
    currentImage = document.querySelector(
      ".product-thumbnail img.active"
    );
  }
  
  let upcomingImage;
  if (option === "next") {
    upcomingImage = currentImage.nextElementSibling;
    if (upcomingImage == null) {
      if(view=='desktop'){
        upcomingImage = document.querySelector(
          ".product-preview-thumbnail img:first-child"
        );
      }
      else{
        upcomingImage = document.querySelector(
          ".product-thumbnail img:first-child"
        );
      } 
    }
  } else if(option === "previous") {
    upcomingImage = currentImage.previousElementSibling;
    if (upcomingImage == null) {
      if(view=='desktop'){
        upcomingImage = document.querySelector(
          ".product-preview-thumbnail img:last-child"
        );
      }
      else{
        upcomingImage = document.querySelector(
          ".product-thumbnail img:last-child"
        );
      }
    }
  }
  upcomingImage.onclick();
  currentImage.classList.remove("active");
  upcomingImage.classList.add("active");
};
