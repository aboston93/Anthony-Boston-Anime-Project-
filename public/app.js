document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });


  var instance = M.Carousel.getInstance(elem);


  instance.next();
instance.next(3);

instance.prev();
instance.prev(3); // Move previous n times.
      
instance.set();
instance.set(3);


var instance = M.Carousel.init({
    fullWidth: true
  });

  // Or with jQuery

 
