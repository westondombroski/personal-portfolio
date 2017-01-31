$(document).ready(function(){
  $("#main_menu").click(function(){
    $(".menu").toggleClass("hidden");
  });

  $("#who_btn").click(function(){
    $(".whatpage").addClass("hidden");
    $(".wherepage").addClass("hidden");
    $(".whypage").addClass("hidden");
    $(".homepage").addClass("hidden");
    $(".menupage").addClass("hidden");
    $(".whopage").removeClass("hidden");
    $(".whitebg").removeClass("hidden");
  });


  $("#what_btn").click(function(){
    $(".whopage").addClass("hidden");
    $(".wherepage").addClass("hidden");
    $(".whypage").addClass("hidden");
    $(".homepage").addClass("hidden");
    $(".menupage").addClass("hidden");
    $(".whatpage").removeClass("hidden");
    $(".whitebg").removeClass("hidden");
  });


  $("#where_btn").click(function(){
    $(".whopage").addClass("hidden");
    $(".whatpage").addClass("hidden");
    $(".whypage").addClass("hidden");
    $(".homepage").addClass("hidden");
    $(".menupage").addClass("hidden");
    $(".wherepage").removeClass("hidden");
    $(".whitebg").removeClass("hidden");
  });


  $("#why_btn").click(function(){
    $(".whopage").addClass("hidden");
    $(".whatpage").addClass("hidden");
    $(".wherepage").addClass("hidden");
    $(".homepage").addClass("hidden");
    $(".menupage").addClass("hidden");
    $(".whypage").removeClass("hidden");
    $(".whitebg").removeClass("hidden");
  });

  $(".backtomain").click(function(){
    $(".whopage").addClass("hidden");
    $(".whatpage").addClass("hidden");
    $(".wherepage").addClass("hidden");
    $(".whypage").addClass("hidden");
    $(".menupage").addClass("hidden");
    $(".whitebg").addClass("hidden");
    $(".navbar").addClass("hidden");
    $(".homepage").removeClass("hidden");
  })



var projects = [{
    'picture': "assets/imgs/code.jpg",
    'name': "weston dombroski portfolio project",
    'description': "the code of the site you are currently enjoying, enjoy",
    'link': "https://github.com/westondombroski/westondombroski.github.io"
  },
  { 'picture': "assets/imgs/code.jpg",
    'name': "wdi memory game",
    'description': "a little four card memory game",
    'link':"https://github.com/westondombroski/wdi-fundamentals-memorygame"
  },
  { 'picture': "assets/imgs/code.jpg",
    'name': "js basics",
    'description': "showing off only the most basic of js skills",
    'link': "https://github.com/westondombroski/problem-set-js-basics"
  },
  { 'picture': "assets/imgs/code.jpg",
    'name': "building js iterators",
    'description': "just building some javascript iterators",
    'link': "https://github.com/westondombroski/building-js-iterators-lab"
  }];

  for(var i = 0; i < projects.length; i++) {
      var project = ("<li class='col-md-6'><a href='" +
      projects.link[i] + "'><img src='" +
      projects.picture[i] + "'alt='" +
      projects.name[i] + "'class='img-rounded'><p>" +
      projects.description[i] + "</p></a></li>");
    }

    $(".projects").append(project);

 });
