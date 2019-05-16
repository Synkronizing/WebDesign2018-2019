function w3_open() {

    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("mySidebar").style.display = "block";

  }

  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
  }
  $(document).ready(function(){
    $(".flip").click(function(){
      $(".open").slideToggle("slow");
    });
  });
  $(document).ready(function(){
    $(".flip2").click(function(){
      $(".open2").slideToggle("slow");
    });
  });
  $(document).ready(function(){
    $(".flip3").click(function(){
      $(".open3").slideToggle("slow");
    });
  });
  $(document).ready(function(){
    $(".flip4").click(function(){
      $(".open4").slideToggle("slow");
    });
  });
  $(document).ready(function(){
    $(".flip5").click(function(){
      $(".open5").slideToggle("slow");
    });
  });
  $(document).ready(function(){
    $(".flip6").click(function(){
      $(".open6").slideToggle("slow");
    });
  });
  $(document).ready(function(){
    $(".flip7").click(function(){
      $(".open7").slideToggle("slow");
    });
  });