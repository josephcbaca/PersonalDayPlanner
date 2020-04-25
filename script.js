// // pseudo code, grab the id info from the btn
// —> use buttonID= this.id
// // grab the info from the textarea related to that btn
//     —>Now that you have the id, call the text based on that id
//     —>Quick example (using javascript for this piece):
//          var x = document.getElementById(buttonID);
// // then save the local storage with the key = id from the btn and the value = info from the text area
//        let userInput = $(“#input-0”).val().trim();
//        localStorage.setItem(“storedItem”, JSON.stringify(userInput))
//        console.log(localStorage.getItem(“storedItem”));
//    });


$(document).ready(function () {

    // Date in header
    let timeHeader = moment().format('ll');
    $("#currentDay").text(timeHeader);

    //Make our variables global to the runtime of our application

    let textSubmit = $("#textarea-").attr("value")
    let buttonSubmit = $(".buttonElem").attr("value")
    let timeArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
    let isSet = false;
    let timesObj = {}

    // for loop dynamically sets time(text), textarea and button giving textarea(id[i]) and button(id[i])
    for (let i = 0; i < timeArray.length; i++) {
        $('<span class="col-md-2 input-group-text></span>').text(timeArray[i]).appendTo(".inputgroup");
        $('<textarea class="form-control col-md-4" aria-label="With textarea" value="9" id="textarea-' + timeArray[i] + '"></textarea>').appendTo(".inputgroup");
        $('<button class="col-md-2 btn btn-outline-secondary rounded-right buttonElem" type="button" id="button-addon2" value="id="button-' + timeArray[i] + '"></button>').text("Set").appendTo(".inputgroup");
    }



    //Submit button will 
    $(".buttonElem").on("click", function (event) {
        event.preventDefault();

        //Check if we already have filled out -- Eventually would like to be able to edit if not passed current time
        if (isSet) {
            return false;
        }
        //Checks value of both textarea and button and if these match I want to save the text entered for the specific value
        // if (textSubmit == buttonSubmit) {

        let userInput = (textSubmit).val().trim();
        //how do I make ".nine" below = a value I can use like id of textbox then I can create a full object to be used later


        // timesObj.[i] = userInput
        // }


        //Should I have a forloop loop through all textarea whether or not filled and create Object with that data everytime?
        console.log(timesObj)

    });




});



//Page will use [Moment.js](https://momentjs.com/) to track current time to gray out boxes as time passes
// LTS will print format 4:44:27 PM
let timeNow = moment().format('LTS');
//look up let now = new Date();
//let hour = now.getHours();

//current time > textarea value is a number then grey out text area



//Page will also highlight current hour block






