//author: Susan Feuerbach
//CAS 213 JS Fianl Project
//March 18, 2017

//GOAL: We need to write functionality that checks what page the visitor is currently on. If that page matches to one of the links in the navigation, then we need to add a background color to the parent <li> tag.

// PSEUDO CODE
//Check which page we are on and put it into a variable.
var currentPage = window.location.href; 
  //to test type "currentPage" into consolo log and UPL of current page should appear.  console.log(currentPage);

// can nest tags like in CSS

//1. Put all of the links in the naigation in an array. $("nav ul li a")
//2. Loop through each array item and 
//3.check if the href value of that array item matches the page we are on.

$("nav ul li a").each(
    
    function () {
        var checkUrl = $(this).attr("href");
        // 3. Check if the href value of that array item matches the page we're on (WE ARE PICKING THIS UP AGAIN IN MODULE 9)
        if (currentPage.indexOf(checkUrl) !== -1)
            {
                $(this).parent().addClass("highlight");
                return false;
            }
    }    
);


// If so, then we add a class to the parent element of the array item and stop the code.
// If not, then we keep going through the loop.


//______________________________

$("#revealPhotos").on("click",
            function () {
                $("#aboutPhoto").toggle();
            }                            
        );
        
        // $("#revealAboutjQuery") = focuses on that ID 
        //.on()  = event handler that contains two pieces.
        // of information: the name of the event
        //and the code that will be excuted when
        //the event happens. These are separated by 
        //coma.        
//___________________________


$("#horse_arabian_thumb").on("click",
            function () {
                console.log("Hello Arabian");
            $("#largeImg").css('background-image', 'url(images/horse_arabian.jpg)');    
                console.log("Good");     
          });

$("#horse_quarter_thumb").on("click",
            function () {
                console.log("Hello Quarter");
            $("#largeImg").css('background-image', 'url(images/horse_quarter.jpg)');      
          });

$("#horse_pinto_thumb").on("click",
            function () {
                console.log("Hello Pinto");
            $("#largeImg").css('background-image', 'url(images/horse_pinto.jpg)');      
          });


//________________________________

//GOAL: to attempt to rotate an image 180 degrees on click. Trying something found on: http://stackoverflow.com/questions/36929177/rotate-image-every-time-on-click-jquery

// That was easy, I just assigned an id, copied the CSS and then copied the code below and plugged in the id. And also changed ".click(function ()" to ".on("click", function ()"

 $(document).ready(function () {
        $("#rotateHorses").on("click", function () {
//forcing img to rotate every time on click()
            if ($(this).css("transform")=='none') {
                $(this).css("transform", "rotate(180deg)");
            }
            else {
                $(this).css("transform","")
            }
        })
    })




    
 


        







