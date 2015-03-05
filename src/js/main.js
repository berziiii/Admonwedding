$('#openHotelModal').on('click', function () {
	$('#hotel-modal').modal('show')
});

$(function() {

  $("input,textarea").not("[type=submit]").jqBootstrapValidation({
      preventSubmit: false,
      submitSuccess: function($form, event) {
          event.preventDefault(); // prevent default submit behaviour
          $.ajax({
              url: "https://berziiiii.wufoo.com/forms/zygq11h0yoeif3/#public",
              method: 'post',
              data: $form.serialize(),
              cache: false,
              error: function() {
                  // Success message
                  $('#form-notification').html("<div class='alert alert-success' role='alert'>Sent Successfully!!</div>");
                  //clear all fields
                  $('#form1').trigger("reset");
              },
          })
      },
  });
      return false
});