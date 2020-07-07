
  //put current date in variale
  var NowMoment = moment();
  //find static location for date
  var displayMoment = document.getElementById('currentDay')
  //insert date into static html
  displayMoment.innerHTML = NowMoment
  
//show all tasks
task9am = JSON.parse(localStorage.getItem("task-9am"));
$(".9am").html(task9am);

task10am = JSON.parse(localStorage.getItem("task-10am"));
$(".10am").html(task10am);

task11am = JSON.parse(localStorage.getItem("task-11am"));
$(".11am").html(task11am);

task12pm = JSON.parse(localStorage.getItem("task-12pm"));
$(".12pm").html(task12pm);

task1pm = JSON.parse(localStorage.getItem("task-1pm"));
$(".1pm").html(task1pm);

task2pm = JSON.parse(localStorage.getItem("task-2pm"));
$(".2pm").html(task2pm);

task3pm = JSON.parse(localStorage.getItem("task-3pm"));
$(".3pm").html(task3pm);

task4pm = JSON.parse(localStorage.getItem("task-4pm"));
$(".4pm").html(task4pm);

task5pm = JSON.parse(localStorage.getItem("task-5pm"));
$(".5pm").html(task5pm);


//save all tasks
//9am
$(".saveBtn-9am").click(function() {

var taskText = $("#modalTaskDescription-9am").val();
localStorage.setItem("task-9am", JSON.stringify(taskText));

loadTasks9am();

});

//10am
$(".saveBtn-10am").click(function() {

var taskText = $("#modalTaskDescription-10am").val();
localStorage.setItem("task-10am", JSON.stringify(taskText));

loadTasks10am();

});

//11am
$(".saveBtn-11am").click(function() {

  var taskText = $("#modalTaskDescription-11am").val();
  localStorage.setItem("task-11am", JSON.stringify(taskText));
  
  loadTasks11am();
  
  });

//12pm
$(".saveBtn-12pm").click(function() {

  var taskText = $("#modalTaskDescription-12pm").val();
  localStorage.setItem("task-12pm", JSON.stringify(taskText));
  
  loadTasks12pm();
  
  });
//1pm
$(".saveBtn-1pm").click(function() {

  var taskText = $("#modalTaskDescription-1pm").val();
  localStorage.setItem("task-1pm", JSON.stringify(taskText));
  
  loadTasks1pm();
  
  });

//2pm
$(".saveBtn-2pm").click(function() {

  var taskText = $("#modalTaskDescription-2pm").val();
  localStorage.setItem("task-2pm", JSON.stringify(taskText));
  
  loadTasks2pm();
  
  });

//3pm
$(".saveBtn-3pm").click(function() {

  var taskText = $("#modalTaskDescription-3pm").val();
  localStorage.setItem("task-3pm", JSON.stringify(taskText));
  
  loadTasks3pm();
  
  });

//4pm
$(".saveBtn-4pm").click(function() {

  var taskText = $("#modalTaskDescription-4pm").val();
  localStorage.setItem("task-4pm", JSON.stringify(taskText));
  
  loadTasks4pm();
  
  });
//5pm
$(".saveBtn-5pm").click(function() {

  var taskText = $("#modalTaskDescription-5pm").val();
  localStorage.setItem("task-5pm", JSON.stringify(taskText));
  
  loadTasks5pm();
  
  });


//load new tasks

//9am
var loadTasks9am = function() {
task9am = JSON.parse(localStorage.getItem("task-9am"));
$(".9am").html(task9am);
};

//10am
var loadTasks10am = function() {
task10am = JSON.parse(localStorage.getItem("task-10am"));
$(".10am").html(task10am);
};

//11am
var loadTasks11am = function() {
  task11am = JSON.parse(localStorage.getItem("task-11am"));
  $(".11am").html(task11am);
  };
//12pm
var loadTasks12pm = function() {
  task12pm = JSON.parse(localStorage.getItem("task-12pm"));
  $(".12pm").html(task12pm);
  };
//1pm
var loadTasks1pm = function() {
  task1pm = JSON.parse(localStorage.getItem("task-1pm"));
  $(".1pm").html(task1pm);
  };
//2pm
var loadTasks2pm = function() {
  task2pm = JSON.parse(localStorage.getItem("task-2pm"));
  $(".2pm").html(task2pm);
  };
//3pm
var loadTasks3pm = function() {
  task3pm = JSON.parse(localStorage.getItem("task-3pm"));
  $(".3pm").html(task3pm);
  };
//4pm
var loadTasks4pm = function() {
  task4pm = JSON.parse(localStorage.getItem("task-4pm"));
  $(".4pm").html(task4pm);
  };
//5pm
var loadTasks5pm = function() {
  task5pm = JSON.parse(localStorage.getItem("task-5pm"));
  $(".5pm").html(task5pm);
  };

//set color coding of timeblocks

//code for 9am time
var time8 = "8";
var now = new Date();
if (now.getHours > time8){
$( ".9am" ).addClass( "past" );
}
else if (now.getHours < time) {
$( ".9am" ).addClass( "future" );
}
else {
$( ".9am" ).addClass( "present" );
}

//code for 10am time
var time9 = "9";
var now = new Date();
if (now.getHours > time9){
$( ".10am" ).addClass( "past" );
}
else if (now.getHours < time) {
$( ".10am" ).addClass( "future" );
}
else {
$( ".10am" ).addClass( "present" );
}

//code for 11am time
var time9 = "10";
var now = new Date();
if (now.getHours > time9){
$( ".11am" ).addClass( "past" );
}
else if (now.getHours < time) {
$( ".11am" ).addClass( "future" );
}
else {
$( ".11am" ).addClass( "present" );
}

//code for 12pm time
var time9 = "11";
var now = new Date();
if (now.getHours > time9){
$( ".12pm" ).addClass( "past" );
}
else if (now.getHours < time) {
$( ".12pm" ).addClass( "future" );
}
else {
$( ".12pm" ).addClass( "present" );
}

//code for 1pm time
var time9 = "12";
var now = new Date();
if (now.getHours > time9){
$( ".1pm" ).addClass( "past" );
}
else if (now.getHours < time) {
$( ".1pm" ).addClass( "future" );
}
else {
$( ".1pm" ).addClass( "present" );
}

//code for 2pm time
var time9 = "1";
var now = new Date();
if (now.getHours > time9){
$( ".2pm" ).addClass( "past" );
}
else if (now.getHours < time) {
$( ".2pm" ).addClass( "future" );
}
else {
$( ".2pm" ).addClass( "present" );
}

//code for 3pm time
var time9 = "2";
var now = new Date();
if (now.getHours > time9){
$( ".3pm" ).addClass( "past" );
}
else if (now.getHours < time) {
$( ".3pm" ).addClass( "future" );
}
else {
$( ".3pm" ).addClass( "present" );
}

//code for 4pm time
var time9 = "3";
var now = new Date();
if (now.getHours > time9){
$( ".4pm" ).addClass( "past" );
}
else if (now.getHours < time) {
$( ".3pm" ).addClass( "future" );
}
else {
$( ".3pm" ).addClass( "present" );
}

//code for 5pm time
var time9 = "4";
var now = new Date();
if (now.getHours > time9){
$( ".5pm" ).addClass( "past" );
}
else if (now.getHours < time) {
$( ".5pm" ).addClass( "future" );
}
else {
$( ".5pm" ).addClass( "present" );
}