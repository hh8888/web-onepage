/*
Pure vanilla Javascript NFT solution
Author:hh8888
*/



(async() => {
  if(window.ethereum){
    var accounts = await nft.connect();
    console.log(accounts[0]);
  }
})();

function initSLider(){
  var slider = tns({
    container: '#slider',
    items: 3,
    mouseDrag: true,
    // gutter: 0,
    // controls: true,
    navPosition: 'bottom',
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    rewind: true,
    loop: false,
    controlsText: ['<span class="fas fa-chevron-circle-left"></span>', '<span class="fas fa-chevron-circle-right"></span>']
  })
}

window.addEventListener('DOMContentLoaded', function () {
  init();
  initSLider();
});

function init(){
  // var hash = window.location.hash.substr(1);
  x.handleChangePage(1);
  x.colorSections('.effect-container');
}