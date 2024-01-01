window.addEventListener('load', function () {
  const preloader = document.querySelector('.preloader');
  const content = document.querySelector('.content');

  // Hide preloader and display content when the page is fully loaded
  setTimeout(function() {
    preloader.style.display = 'none';
    content.style.display = 'block';
  }, 2000); // You can adjust the delay time as needed
});

