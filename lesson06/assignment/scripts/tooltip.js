$(function () {

    // Button toggleClass
    $("button").click(function () {
      $(".alert").toggleClass("show-msg");
    })
  
    // Initialize tooltip
    $('[data-toggle="tooltip"]').tooltip()
  
  })