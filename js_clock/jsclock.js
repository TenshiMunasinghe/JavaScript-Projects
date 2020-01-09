$(function () {

  function showTime() {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();

    if (hours > 0 && hours < 10) {
      hours = "0" + hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;

    }

    if (seconds < 10) {
      seconds = "0" + seconds;

    }

    var result = "Its " + hours + ":" + minutes + ":" + seconds + " now!";
    $(".clock").text(result);
    setTimeout(showTime, 1000);
  }

  showTime();

  function showimage() {
    var hours = new Date().getHours();

    if (hours > 4 && hours < 10) {
      $("#image").attr("src", "./morning.jpg");
    } else if (hours > 9 && hours < 17) {
      $("#image").attr("src", "./noon.png");
    } else if (hours > 16 && hours < 20) {
      $("#image").attr("src", "./evening.jpg");
    } else if (hours > 19 && hours < 24) {
      $("#image").attr("src", "./night.jpg");
    } else if (hours == 0) {
      $("#image").attr("src", "./night.jpg");
    } else if (hours > 0 && hours < 4) {
      $("#image").attr("src", "./nero.jpg");
    }
  }

  showimage();

  function showgreet() {
    var hours = new Date().getHours();

    if (hours > 4 && hours < 10) {
      $(".greet").text("Good morning!");
    } else if (hours > 9 && hours < 17) {
      $(".greet").text("Good afternoon!");
    } else if (hours > 16 && hours < 20) {
      $(".greet").text("Good evening!");
    } else if (hours > 19 && hours < 24) {
      $(".greet").text("Good night!");
    } else if (hours == 0) {
      $(".greet").text("Good night!");
    } else if (hours > 0 && hours < 4) {
      $(".greet").text("Go to sleep!");
    }
  }

  showgreet();

  function showback() {
    var hours = new Date().getHours();

    if (hours > 4 && hours < 10) {
      $(".background").css("background-image", "url('./morning.jpg')");
    } else if (hours > 9 && hours < 17) {
      $(".background").css("background-image", "url('./noon.png')");
    } else if (hours > 16 && hours < 20) {
      $(".background").css("background-image", "url('./evening.jpg')");
    } else if (hours > 19 && hours < 24) {
      $(".background").css("background-image", "url('./night.jpg')");
    } else if (hours == 0) {
      $(".background").css("background-image", "url('./night.jpg')");
    } else if (hours > 0 && hours < 4) {
      $(".background").css("background-image", "url('./nero.jpg')");
    }
  }

  showback();

  function changecolor() {
    var hours = new Date().getHours();

    if (hours > 4 && hours < 10) {
      $(".container").css("color", "#000");
    } else if (hours > 9 && hours < 17) {
      $(".container").css("color", "#000");
    } else if (hours > 16 && hours < 20) {
      $(".container").css("color", "#f1f1f1");
    } else if (hours > 19 && hours < 24) {
      $(".container").css("color", "#f1f1f1");
    } else if (hours == 0) {
      $(".container").css("color", "#f1f1f1");
    } else if (hours > 0 && hours < 4) {
      $(".container").css("color", "red");
    }
  }

  changecolor();

});