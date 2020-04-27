
$(document).ready(function () {

    // Date in header
    let timeHeader = moment().format('ll');
    $("#currentDay").text(timeHeader);
    

    let timeArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]

    // for loop dynamically sets time(text), textarea and button giving textarea(id[i]) and button(id[i])
    for (let i = 0; i < timeArray.length; i++) {
        let divMain = $("<div>");
        let textAreaMain = $("<textarea>");
        let buttonMain = $("<button>");

        divMain.addClass("text-center input-group-text");
        divMain.text(timeArray[i]);
        //text-timeArray unique id
        textAreaMain.addClass("form-control formDelete");
        textAreaMain.attr("aria-label", "With textarea");
        textAreaMain.attr("value", "textfull");
        textAreaMain.attr("id", "textarea-" + timeArray[i]);
        //button-timeArray unique id
        buttonMain.addClass("btn btn-outline-secondary rounded-right col-md-12");
        buttonMain.attr("id", "btn-" + timeArray[i]);
        buttonMain.attr("data-btn", timeArray[i]);
        buttonMain.text("Set");

        $("#inputgroup").append(divMain);
        $("#inputgroup").append(textAreaMain);
        $("#inputgroup").append(buttonMain);
    }

    // Set button will start click event below to take 
    $("#btn-9am").on("click", function (event) {
        event.preventDefault();
        let btnValue = $(this).attr("data-btn");
        let userInput = $("#textarea-9am").val().trim();

        localStorage.setItem(btnValue, userInput);
    });
    $("#btn-10am").on("click", function (event) {
        event.preventDefault();
        let btnValue = $(this).attr("data-btn");
        let userInput = $("#textarea-10am").val().trim();

        localStorage.setItem(btnValue, userInput);
    });
    $("#btn-11am").on("click", function (event) {
        event.preventDefault();
        let btnValue = $(this).attr("data-btn");
        let userInput = $("#textarea-11am").val().trim();

        localStorage.setItem(btnValue, userInput);
    });
    $("#btn-12pm").on("click", function (event) {
        event.preventDefault();
        let btnValue = $(this).attr("data-btn");
        let userInput = $("#textarea-12pm").val().trim();

        localStorage.setItem(btnValue, userInput);
    });
    $("#btn-1pm").on("click", function (event) {
        event.preventDefault();
        let btnValue = $(this).attr("data-btn");
        let userInput = $("#textarea-1pm").val().trim();

        localStorage.setItem(btnValue, userInput);
    });
    $("#btn-2pm").on("click", function (event) {
        event.preventDefault();
        let btnValue = $(this).attr("data-btn");
        let userInput = $("#textarea-2pm").val().trim();

        localStorage.setItem(btnValue, userInput);
    });
    $("#btn-3pm").on("click", function (event) {
        event.preventDefault();
        let btnValue = $(this).attr("data-btn");
        let userInput = $("#textarea-3pm").val().trim();

        localStorage.setItem(btnValue, userInput);
    });
    $("#btn-4pm").on("click", function (event) {
        event.preventDefault();
        let btnValue = $(this).attr("data-btn");
        let userInput = $("#textarea-4pm").val().trim();

        localStorage.setItem(btnValue, userInput);
    });
    $("#btn-5pm").on("click", function (event) {
        event.preventDefault();
        let btnValue = $(this).attr("data-btn");
        let userInput = $("#textarea-5pm").val().trim();

        localStorage.setItem(btnValue, userInput);
    });

//Upon refresh always grab local storage and set to unique ID
let lastEnter9am = localStorage.getItem("9am")
$("#textarea-9am").text(lastEnter9am)
let lastEnter10am = localStorage.getItem("10am")
$("#textarea-10am").text(lastEnter10am)
let lastEnter11am = localStorage.getItem("11am")
$("#textarea-11am").text(lastEnter11am)
let lastEnter12pm = localStorage.getItem("12pm")
$("#textarea-12pm").text(lastEnter12pm)
let lastEnter1pm = localStorage.getItem("1pm")
$("#textarea-1pm").text(lastEnter1pm)
let lastEnter2pm = localStorage.getItem("2pm")
$("#textarea-2pm").text(lastEnter2pm)
let lastEnter3pm = localStorage.getItem("3pm")
$("#textarea-3pm").text(lastEnter3pm)
let lastEnter4pm = localStorage.getItem("4pm")
$("#textarea-4pm").text(lastEnter4pm)
let lastEnter5pm = localStorage.getItem("5pm")
$("#textarea-5pm").text(lastEnter5pm)

   // Clear schedule button

//    $("#clear").on("click", function() {
//     let emptyText = $("#textarea-9am").val();
//        $("#textarea-").val().empty();
//        localStorage.clear()
//    });

});



//Page will use [Moment.js](https://momentjs.com/) to track current time to gray out boxes as time passes
// LTS will print format 4:44:27 PM
let timeNow = moment().format('LTS');
//look up let now = new Date();
//let hour = now.getHours();

//current time > textarea value is a number then grey out text area



//Page will also highlight current hour block






