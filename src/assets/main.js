$(function() {
  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/Ramirez1900.json',
    dataType: 'jsonp',
    success: function(data) {
    populateWithCourses(data.courses.completed)
  })

});


function CSCourses(courses) {

   var $badges = $('#badges');

 });
