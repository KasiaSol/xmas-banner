
// const banner = document.getElementsByClassName ('.cookiesBanner')
// const bannerButton = document.getElementsByTagName ('button')



// bannerButton.addEventListener('click', () =>{
// banner.remove()


// })



//     document.getElementById("cookiesButton").onclick = function() {myFunction()};

// function myFunction() {
//   document.getElementByClassName("cookiesBanner").remove;
// }


// (() => {

  
//  const $cookiesBanner = document.querySelector("div.cookies-eu-banner");
//    const $cookiesBannerButton = $cookiesBanner.querySelector("div.cookies-eu-banner.button");

  

 

//    $cookiesBannerButton.addEventListener("click", () => {
   
//      $cookiesBanner.remove();
//    });
//  })

const banner = document.getElementsByClassName('cookies-eu-banner');

banner.addEventListener('click', () => {
  banner.remove();
});