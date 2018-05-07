// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).on('turbolinks:load', function() {
  $('#task_name').focus();

  $('.save').click(function() {
    // let form = $('.modal-body form')
    $('.modal-body form').submit()
  });

  // let showButton = $('.show');
//   // console.log(showButton);
  // showButton.click(function(evt) {
  //   evt.preventDefault();
  //   $('.modal').modal();
//     // console.log('click');
//     $.get('/tasks/1.json', function(response) {
//       console.log(response);
//     });
  // });
});
