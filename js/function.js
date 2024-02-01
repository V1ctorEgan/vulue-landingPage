window.addEventListener('scroll', function(){
    var navbar = document.getElementById('navbar');
    var scrollPosition = window.scrollY;
    // var icon = document.getElementById('bar-slash')

    var threshold = 50;

    if (scrollPosition > threshold){
        // navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        navbar.style.backgroundColor = ' transparent';

        // icon.style.display = 'none';
    }
    else{
        // navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        // icon.style.display = 'block';
    }
    
});