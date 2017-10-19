
$("#living").click(function() {
  $("#livingroomImage").attr("src", "livingroom.jpg");
    $("#livingroomContent").show();
    $("#listRooms").hide();
    $('#officeroomContent').hide();
});

$("#livingroomImage").click(function() {
  $("#livingroomImage").attr("src","");
  $("#livingroomContent").hide();
});

$("#office").click(function() {
  $("#officeImage").attr("src", "officeroom.jpg");
    $("#officeroomContent").show();
    $("#listRooms").hide();
    $("livingroomContent").hide();
});
