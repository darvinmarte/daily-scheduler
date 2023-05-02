
// added current date and time to header
function start() {
    setInterval(function () {
        const currentTime = dayjs().format("MMMM-DD-YYYY hh:mm:ss A");
        $("#currentDay").text(currentTime);
    }, 1000);
};
start();

// Comparing the 'timeBlock' id's to the current hour
const currentHour = parseInt(dayjs().format("HH"));

$('.time-block').each(function() {

    var timeBlock = parseInt($(this).attr("id").split('-')[1]);

    if (currentHour === timeBlock) {
        $(this).addClass("present");

    } else if (currentHour < timeBlock) {
        // timeBlock.removeClass("present");
        $(this).addClass("future");

    } else if (currentHour > timeBlock) {
        // timeBlock.removeClass("future");
        $(this).addClass("past");
    };
});

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?


//     $(".btn").on('click', function() {
    
//     });
// //


// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// The javascript will need to do this by adding/removing these classes on each div by comparing the hour in the id to the current hour.
// get the text
$(".saveBtn").on('click',function () {
    var description = $(this).siblings('.description').val()
    var timeB = $(this).parent().attr('id')

    localStorage.setItem(timeB, description);

});


$('#hour-9 .description').val(localStorage.getItem("hour-9"))
$('#hour-10 .description').val(localStorage.getItem("hour-10"))
$('#hour-11 .description').val(localStorage.getItem("hour-11"))
$('#hour-12 .description').val(localStorage.getItem("hour-12"))
$('#hour-13 .description').val(localStorage.getItem("hour-13"))
$('#hour-14 .description').val(localStorage.getItem("hour-14"))
$('#hour-15 .description').val(localStorage.getItem("hour-15"))
$('#hour-16 .description').val(localStorage.getItem("hour-16"))
$('#hour-17 .description').val(localStorage.getItem("hour-17"))