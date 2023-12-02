var inP = $(".input-field");

inP
  .on("blur", function () {
    if (!this.value) {
      $(this).parent(".f_row").removeClass("focus");
    } else {
      $(this).parent(".f_row").addClass("focus");
    }
  })
  .on("focus", function () {
    $(this).parent(".f_row").addClass("focus");
    $(".btn").removeClass("active");
    $(".f_row").removeClass("shake");
  });

$(".resetTag").click(function (e) {
  e.preventDefault();
  $(".formBox").addClass("level-forget").removeClass("level-reg");
});

$(".back").click(function (e) {
  e.preventDefault();
  $(".formBox").removeClass("level-forget").addClass("level-login");
});

$(".regTag").click(function (e) {
  e.preventDefault();
  $(".formBox").removeClass("level-reg-revers");
  // document.querySelector(".formBox").style.height = "75%";
  $(".formBox").toggleClass("level-login").toggleClass("level-reg");
  if (!$(".formBox").hasClass("level-reg")) {
    document.querySelector(".formBox").removeAttribute("style");
    $(".formBox").addClass("level-reg-revers");
  }
});
$(".btn").each(function () {
  $(this).on("click", function (e) {
    e.preventDefault();

    var finp = $(this).parent("form").find("input");

    if (!finp.val() == 0) {
      $(this).addClass("active");
    }

    // Lakukan pengiriman formulir secara manual
    $(this).parent("form").submit();

    setTimeout(function () {
      inP.val("");
      $(".f_row").removeClass("shake focus");
      $(".btn").removeClass("active");
    }, 2000);

    if (inP.val() == 0) {
      inP.parent(".f_row").addClass("shake");
    }
  });
});
$(".btn-large").each(function () {
  $(this).on("click", function (e) {
    e.preventDefault();

    var finp = $(this).parent("form").find("input");

    if (!finp.val() == 0) {
      $(this).addClass("active");
    }

    // Lakukan pengiriman formulir secara manual
    $(this).parent("form").submit();

    setTimeout(function () {
      inP.val("");
      $(".f_row").removeClass("shake focus");
      $(".btn").removeClass("active");
    }, 2000);

    if (inP.val() == 0) {
      inP.parent(".f_row").addClass("shake");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var closeButtons = document.querySelectorAll(".btn-close");

  closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var alert = this.closest(".alert");
      if (alert) {
        alert.style.display = "none"; // Menyembunyikan notifikasi
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var formBoxes = document.querySelectorAll(".formBox.level-forget.level-reg");

  formBoxes.forEach(function (formBox) {
    //   check pw
    var myInput = document.querySelector(".pww");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    var confirmpw = document.getElementById("confirmpassword");
    var same = document.getElementById("samepw");
    // Your code here
    myInput.onfocus = function () {
      var messageElement = document.getElementById("message");
      if (messageElement) {
        messageElement.style.display = "block";
      }
    };
    myInput.onblur = function () {
      document.getElementById("message").style.display = "none";
    };
    myInput.onkeyup = function () {
      var lowerCaseLetters = /[a-z]/g;
      if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
      } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
      }
      var upperCaseLetters = /[A-Z]/g;
      if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
      } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
      }
      var numbers = /[0-9]/g;
      if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
      } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
      }
      if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
      }
      if (
        document.querySelector(".pww").value ==
        document.getElementById("confirmpassword").value
      ) {
        same.classList.remove("invalid");
        same.classList.add("valid");
      } else {
        same.classList.remove("valid");
        same.classList.add("invalid");
      }
    };

    confirmpw.onfocus = function () {
      document.getElementById("messageconfirmpassword").style.display = "block";
    };
    confirmpw.onblur = function () {
      document.getElementById("messageconfirmpassword").style.display = "none";
    };
  });
});

var check = function () {
  if (
    document.querySelector(".pww").value ==
    document.getElementById("confirmpassword").value
  ) {
    same.classList.remove("invalid");
    same.classList.add("valid");
  } else {
    same.classList.remove("valid");
    same.classList.add("invalid");
  }
};
