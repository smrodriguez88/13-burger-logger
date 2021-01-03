$(document).ready(function() {
    
    $(".devour-burger").on("submit", function(event) {
      event.preventDefault()
      let id = $(this).children(".id").val()
      $.ajax({
        method: "PUT",
        url: `/burgers/${id}`
      }).then(function() {
          location.reload()
      })
    })
  })