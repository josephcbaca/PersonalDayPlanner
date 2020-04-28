

$(document).ready(function () {

    // Date in header
    let timeHeader = moment().format('ll');
    $("#currentDay").text(timeHeader);

    // Clear schedule button

    $("#clear").on("click", function () {
        localStorage.clear()
        location.reload()
    });

    let timeArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
    let timeValue = [9, 10, 11, 12, 13, 14, 15, 16, 17]
    // for loop dynamically sets time(text), textarea and button giving textarea(id[i]) and button(id[i])
    for (let i = 0; i < timeArray.length; i++) {
        let divMain = $("<div>");
        let textAreaMain = $("<textarea>");
        let buttonMain = $("<button>");

        divMain.addClass("input-group-text col-md-12");
        divMain.text(timeArray[i]);
        //text-timeArray unique id
        textAreaMain.addClass("form-control formDelete col-md-12");
        textAreaMain.attr("aria-label", "With textarea");
        textAreaMain.attr("value", timeArray[i]);
        textAreaMain.attr("id", "textarea-" + timeValue[i]);
        //button-timeArray unique id
        buttonMain.addClass("btn btn-outline-secondary rounded-right col-md-12 mb-3");
        buttonMain.attr("id", "btn-" + timeArray[i]);
        buttonMain.attr("data-btn", timeArray[i]);
        buttonMain.text("Set");

        $("#inputgroup").append(divMain);
        $("#inputgroup").append(textAreaMain);
        $("#inputgroup").append(buttonMain);
    };

    // Set button will start click event below to take 
    $("#btn-9am").on("click", function (event) {
        event.preventDefault();
        let btnValue = $(this).attr("data-btn");
        let userInput = $("#textarea-9").val().trim();

        localStorage.setItem(btnValue, userInput);
    });
    $("#btn-10am").on("click", function (event) {
        event.preventDefault();
        let btnValue = $(this).attr("data-btn");
        let userInput = $("#textarea-10").val().trim();

        localStorage.setItem(btnValue, userInput);
    });
    $("#btn-11am").on("click", function (event) {
        event.preventDefault();
        let btnValue = $(this).attr("data-btn");
        let userInput = $("#textarea-11").val().trim();

        localStorage.setItem(btnValue, userInput);
    });
    $("#btn-12pm").on("click", function (event) {
        event.preventDefault();
        let btnValue = $(this).attr("data-btn");
        let userInput = $("#textarea-12").val().trim();

        localStorage.setItem(btnValue, userInput);
    });
    $("#btn-1pm").on("click", function (event) {
        event.preventDefault();
        let btnValue = $(this).attr("data-btn");
        let userInput = $("#textarea-13").val().trim();

        localStorage.setItem(btnValue, userInput);
    });
    $("#btn-2pm").on("click", function (event) {
        event.preventDefault();
        let btnValue = $(this).attr("data-btn");
        let userInput = $("#textarea-14").val().trim();

        localStorage.setItem(btnValue, userInput);
    });
    $("#btn-3pm").on("click", function (event) {
        event.preventDefault();
        let btnValue = $(this).attr("data-btn");
        let userInput = $("#textarea-15").val().trim();

        localStorage.setItem(btnValue, userInput);
    });
    $("#btn-4pm").on("click", function (event) {
        event.preventDefault();
        let btnValue = $(this).attr("data-btn");
        let userInput = $("#textarea-16").val().trim();

        localStorage.setItem(btnValue, userInput);
    });
    $("#btn-5pm").on("click", function (event) {
        event.preventDefault();
        let btnValue = $(this).attr("data-btn");
        let userInput = $("#textarea-17").val().trim();

        localStorage.setItem(btnValue, userInput);
    });

    //Upon refresh always grab local storage and set to unique ID
    let lastEnter9am = localStorage.getItem("9am")
    $("#textarea-9").text(lastEnter9am)
    let lastEnter10am = localStorage.getItem("10am")
    $("#textarea-10").text(lastEnter10am)
    let lastEnter11am = localStorage.getItem("11am")
    $("#textarea-11").text(lastEnter11am)
    let lastEnter12pm = localStorage.getItem("12pm")
    $("#textarea-12").text(lastEnter12pm)
    let lastEnter1pm = localStorage.getItem("1pm")
    $("#textarea-13").text(lastEnter1pm)
    let lastEnter2pm = localStorage.getItem("2pm")
    $("#textarea-14").text(lastEnter2pm)
    let lastEnter3pm = localStorage.getItem("3pm")
    $("#textarea-15").text(lastEnter3pm)
    let lastEnter4pm = localStorage.getItem("4pm")
    $("#textarea-16").text(lastEnter4pm)
    let lastEnter5pm = localStorage.getItem("5pm")
    $("#textarea-17").text(lastEnter5pm)

    //Future:  Possible for loop for the above localStorage
    // for( let i = 0; i < timeArray.length; i++) {
    //     let lastEnter = "lastEnter" + timeArray[i]

    //     let lastEnter = localStorage.getItem("9am")
    //     $("#textarea-9am").text(lastEnter9am)
    // }

    //Time from built-in JavaScript
    new Date($.now());
    let timeNow = new Date();
    let hours = timeNow.getHours()

    for (let i = 0; i < timeValue.length; i++) {
        //current hour = textarea value is a number then highlight text area
        if (hours === timeValue[i]) {
            $("#textarea-" + timeValue[i]).addClass("present");
        }
        //current hour > textarea(1-5) value is a number then gray text area
        if (hours > timeValue[i]) {
            $("#textarea-" + timeValue[i]).addClass("past");
        }
    };
});









