
   $(document).ready(function() {

    $(".normal").on("click", function() {
  $(".captain-planet").animate({ height: "400px" });
    });

    $(".big").on("click", function() {
      $(".captain-planet").animate({ height: "600px" });
    });

    $(".small").on("click", function() {
    $(".captain-planet").animate({ height: "200px" });
    });





    $(".visible").on("click", function() {
    $(".captain-planet").animate({ opacity: "1" });
    });

    $(".invisible").on("click", function() {
      $(".captain-planet").animate({ opacity: "0.2" });
    });

  


    $(".yuxari").on("click", function() {
    $(".captain-planet").animate({ top: "-=200px" }, "normal");
    });

    $(".awagi").on("click", function() {
      $(".captain-planet").animate({ top: "+=200px" }, "normal");
    });

    $(".sol").on("click", function() {
      $(".captain-planet").animate({ left: "-=200px" }, "normal");
    });

    $(".sag").on("click", function() {
      $(".captain-planet").animate({ left: "+=200px" }, "normal");
    });

 


    $(document).keyup(function(s) {
      switch (s.which) {
        case 1:
        
        $(".captain-planet").animate({ top: "+=200px" }, "normal");
      }
    });

    $(document).keyup(function(d) {
     
        switch (d.which) {
        case 2:
          $(".captain-planet").animate({ left: "+=200px" }, "normal");
      }
    });

 
    $(document).keyup(function(w) {

      switch (w.which) {
        case 3:
          $(".captain-planet").animate({ top: "-=200px" }, "normal");
      }
    });

  
    $(document).keyup(function(a) {
      switch (a.which) {
        case 4:
    $(".captain-planet").animate({ left: "-=200px" }, "normal");
      }
    });
  });


  setTimeout(function()
  {
    $('loader').fadeToggle()
  },50)
  
  $(".backplanet").on("click", function() {
    $(".captain-planet").animate({ top: "50px", left: "330px" }, "fast");
  });