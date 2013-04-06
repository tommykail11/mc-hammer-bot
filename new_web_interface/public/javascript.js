$(function() {

var url = "http://localhost:8071/motion-control/update";

function action(selector, _data, message) {
  $(selector).on("click", function() {
    $.ajax(url, { dataType: "jsonp", data: _data, success: function() {
      console.log(message);
    }})
  })
}

  action(".up", {forward: +1}, "moving forward..");
  action(".down", {forward: -1}, "moving backward..");
  action(".right", {turn: +1}, "turning right..");
  action(".left", {turn: -1}, "turning left..");
  action(".strafeRight", {strafe: +1}, "strafing right..");
  action(".strafeLeft", {strafe: -1}, "strafing left..");
  action(".stop", {}, "stopping..");

  // MOVE FORWARD // A forward value of +1 represents the motor combination: {a: +1, s: +1, d: +1, f: +1}

  /*$(".up").on("click", function() {
    $.ajax(url, {dataType: "jsonp", data: {forward: +1}, success: function() {
      console.log("moving forward..");
    }}
  )});

  // MOVE BACKWARD // A forward value of -1 represents the motor combination: {a: -1, s: -1, d: -1, f: -1}

  $(".down").on("click", function() {
    $.ajax(url, {dataType: "jsonp", data: {forward: -1}, success: function() {
      console.log("moving backward..");
    }});
  })

  // TURN RIGHT // A turn value of +1 represents the motor combination: {a: +1, s: -1, d: +1, f: -1}

  $(".right").on("click", function() {
    $.ajax(url, {dataType: "jsonp", data: {turn: +1}, success: function() {
      console.log("turning right..");
    }});
  })

  // TURN LEFT // A turn value of -1 represents the motor combination: {a: -1, s: +1, d: -1, f: +1}

  $(".left").on("click", function() {
    $.ajax(url, {dataType: "jsonp", data: {turn: -1}, success: function() {
      console.log("turning left..");
    }});
  })

  // STRAFE RIGHT // A strafe value of +1 represents the motor combination: {a: +1, s: -1, d: -1, f: +1}

  $(".strafeRight").on("click", function() {
    $.ajax(url, {dataType: "jsonp", data: {strafe: +1}, success: function() {
      console.log("strafing right..");
    }});
  });

  //STRAFE LEFT //A strafe value of -1 represents the motor combination: {a: -1, s: +1, d: +1, f: +1}

  $(".strafeLeft").on("click", function() {
    $.ajax(url, {dataType: "jsonp", data: {strafe: -1}, success: function() {
      console.log("strafing left..");
    }})
  })

  // STOP //
  $(".stop").on("click", function() {
    $.ajax(url, {dataType: "jsonp", data:{}, success: function() {
      console.log("stopping..");
    }})
  })*/
})

