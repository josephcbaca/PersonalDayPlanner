
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

        divMain.addClass("col-md-2 input-group-text");
        divMain.attr("id", "div-" + timeArray[i]);
        divMain.text(timeArray[i]);
//text-timeArray unique id
        textAreaMain.addClass("form-control col-md-8 textarea");
        textAreaMain.attr("aria-label", "With textarea");
        textAreaMain.attr("value", timeArray[i]);
        textAreaMain.attr("id", "text-" + timeArray[i]);
//button-timeArray unique id
        buttonMain.addClass("btn btn-outline-secondary rounded-right btnElem");
        buttonMain.attr("id", "btn-" + timeArray[i]);
        buttonMain.text("Set");

        $("#inputgroup").append(divMain);
        $("#inputgroup").append(textAreaMain);
        $("#inputgroup").append(buttonMain);

    }

//     function savedData() {
//          let $(".textarea9am").text() = localStorage.getItem("9am")
//          //        let userInput = $(“#input-0”).val().trim();
// //        localStorage.setItem(“storedItem”, JSON.stringify(userInput))
// //        console.log(localStorage.getItem(“storedItem”));
//         }

    // Set button will start click event below to take 
    $(".buttonElem").on("click", function (event) {
        event.preventDefault();
        // let textSubmitValue = $(this).attr("value");
        let userInput = $("#text-9am").val().trim();

        localStorage.setItem("9am", userInput);
    });


});
//Checks value of both textarea and button and if these match I want to save the text entered for the specific value
// if (textSubmit == buttonSubmit) {

// let userInput = (textSubmit).val().trim();
// // how do I make ".nine" below = a value I can use like id of textbox then I can create a full object to be used later


// timesObj.[i] = userInput
// }


//Should I have a forloop loop through all textarea whether or not filled and create Object with that data everytime?




//Page will use [Moment.js](https://momentjs.com/) to track current time to gray out boxes as time passes
// LTS will print format 4:44:27 PM
let timeNow = moment().format('LTS');
//look up let now = new Date();
//let hour = now.getHours();

//current time > textarea value is a number then grey out text area



//Page will also highlight current hour block






