$(document).ready(function(){
    var mixer = mixitup('.box-list')
});

var header = document.querySelector('header');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    header.classList.add('bg-light', 'shadow');
  } else {
    header.classList.remove('bg-light', 'shadow');
  }
});