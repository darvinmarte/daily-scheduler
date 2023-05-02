
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

$('.time-block').each(function () {

    var timeBlock = parseInt($(this).attr("id").split('-')[1]);

    if (currentHour === timeBlock) {
        $(this).addClass("present");

    } else if (currentHour < timeBlock) {

        $(this).addClass("future");

    } else if (currentHour > timeBlock) {

        $(this).addClass("past");
    };
});

// sets item in local storage 
$(".saveBtn").on('click', function () {
    var description = $(this).siblings('.description').val()
    var timeB = $(this).parent().attr('id')

    localStorage.setItem(timeB, description);

});

// gets item and saves it to page on reload
$('#hour-9 .description').val(localStorage.getItem("hour-9"))
$('#hour-10 .description').val(localStorage.getItem("hour-10"))
$('#hour-11 .description').val(localStorage.getItem("hour-11"))
$('#hour-12 .description').val(localStorage.getItem("hour-12"))
$('#hour-13 .description').val(localStorage.getItem("hour-13"))
$('#hour-14 .description').val(localStorage.getItem("hour-14"))
$('#hour-15 .description').val(localStorage.getItem("hour-15"))
$('#hour-16 .description').val(localStorage.getItem("hour-16"))
$('#hour-17 .description').val(localStorage.getItem("hour-17"))