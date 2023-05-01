// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO: Add code to display the current date in the header of the page.
// added current date and time to header
$(function start() {
    setInterval(function () {
        const currentTime = dayjs().format("MMMM-DD-YYYY hh:mm:ss A");
        $("#currentDay").text(currentTime);
    }, 1000);
});
start();


    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    $(".btn").on('click', function() {
        $('#description').html();
        localStorage.content = $('#description').html();
        $('#description').html(localStorage.content);
    
    });
//

// TODO: Add code to apply the past, present, or future class to each time
const currentTime = dayjs().format("HH");
$('.time-block').each(function() {

    var timeBlock = $(this).attr("id").val();

    if (currentTime === timeBlock) {
        timeBlock.addClass("present");

    } else if (currentTime < timeBlock) {
        timeBlock.removeClass("present");
        timeBlock.addClass("future");

    } else if (currentTime > timeBlock) {
        timeBlock.removeClass("future");
        timeBlock.addClass("past");
    };
});
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// The javascript will need to do this by adding/removing these classes on each div by comparing the hour in the id to the current hour.
// get the text
// $(".saveBtn").click(function () {
//     var text = $(".description").text().value;

//     // set the item in localStorage
//     localStorage.setItem("", text);

// });

 // gets info from description box
    // window.localStorage.getItem('text');