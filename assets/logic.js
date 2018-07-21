
//HIDES CHARACTERS ON PAGE LOAD 

$(document).ready(function(){
    $("#shepicon").hide();
    $("#sheepicon").hide();
    $("#wolf").hide();
    $("#attack").hide();
});



//these are global variables.

var score = (time*10) + (sheep*10) + (health*5);

var time = 200
var timerspeed = 0
var sheep = 5
var health = 100

var x = 0
var timer; 

function startTimer(){
    time--;
    $('#time').text("00:" + time);

    if (time > 60) {
        minutes = Math.floor(time / 60);
        seconds = time - minutes * 60;
            if (seconds <10) {
                seconds = "0"+seconds;
            }
        formattime= minutes + ":" + seconds;

        $('#time').text(formattime);
    }

    if (time < 10) {
    $('#time').text("00:0" + time);     
    }

    if (time === 0) {
            clearInterval(timer)
            score = (time*10) + (sheep*10) + (health*5)
            // document.location.href = "end.html";
            console.log(score);
            $('#finalscroe').html(score);

        
    }
}



//this will append time, sheeo, health to their respective divs.

$('#time').html(time);
$('#sheep').html(sheep);
$('#health').html(health);


 //this will hide the answers div as it does not need to appear in this scene.
 $("#answerTwo").hide();
 $("#answerOne").hide();

//opener: shows three tools for selection; ask which item to be selected in quetion div;
//on click of a tool item will move into items div 


//APPEND ITEMS TO ITEMSHOLDER DIV
$(document).on('click', "#food", function () {
    var food = $("#food")
    $("#food").addClass("usefood");
    $("#itemsHolder").append(food);
    timerspeed = timerspeed + 100
    console.log(timerspeed)
})

$(document).on('click', "#staff", function(){
    var staff = $("#staff")
    $("#itemsHolder").append(staff);
    timerspeed = timerspeed + 100
    console.log(timerspeed)
 })

 $(document).on('click', "#flute", function(){
    var flute = $("#flute");
    var sheep = 5;
    $("#flute").addClass("useflute");
    $("#itemsHolder").append(flute);
    timerspeed = timerspeed + 100
    console.log(timerspeed)
 })



 //USE ITEMS FUNCTIONS

//USE FOOD
$(document).on('click','.usefood', function(){
    health = parseInt($('#health').text()) + 100
    $('#health').html(health);
    $('.usefood').removeClass('usefood');

    if (health > 100) {
        health = 100
        $('#health').html(health);
    }

});

//USE FLUTE
$(document).on('click','.useflute', function(){
    sheep = parseInt($('#sheep').text()) + 5
    $('#sheep').html(sheep);
    $('.useflute').removeClass('useflute');
});





//SWAMP SCENE IS SET ON CLICK OF ITEMSCOLLECTED

$(document).on('click','#itemsCollected', function(){
    // $(".introScene").css("background-image", "url(images/sceneSwamp.png)");  // this code needs to be on top for it to work.
    background = questions[x].Image[0];
    $(".introScene").css("background-image", "url(" + questions[x].Image[0] + ")");
    $("#answerTwo").show();
    $("#answerOne").show();
    $('#itemsCollected').hide();
    $("#itemsContainer").hide();
    timer = setInterval(startTimer, 1000 - timerspeed);
    console.log(timer);

// setTimeout(function () { 

    $('#questions').text(questions[x].question);
    $('#answerOne').text(questions[x].A[0]);
    $('#answerTwo').text(questions[x].B[0]);

// ;}, 500);
});


//SWAMP:

$(document).on('click','.answerOne', function(){
    time = time - 20;
    $('#time').html(time);
    sheep = sheep - 3;
    $('#sheep').html(sheep);
    $(".introScene").css("background-image", "url(images/scenescarywoodwolf.jpg)");
    $("#answerOne").attr("class", "answerOneB")
    $("#answerTwo").attr("class", "answerTwoB")

    x++
    $('#questions').text(questions[x].question);
    $('#answerOne').text(questions[x].A[0]);
    $('#answerTwo').text(questions[x].B[0]);

 });

 
 $(document).on('click','.answerTwo', function(){
    time = time - 60;
    $('#time').html(time);
    $("#answerOne").attr("class", "answerOneB")
    $("#answerTwo").attr("class", "answerTwoB")
    $(".introScene").css("background-image", "url(images/SceneScaryWoodWolf.jpg)");

    x++
    $('#questions').text(questions[x].question);
    $('#answerOne').text(questions[x].A[0]);
    $('#answerTwo').text(questions[x].B[0]);
 });

 //This is for the third scene for fighting the wolf; the fight scene will
 //will be featured here or a random amount of sheep will be lost.

 //**Fighting scene should go under this: */

 //this will remove the random amount of sheep:


//WOLF:

 $(document).on('click','.answerOneB', function(){
    // $("#questions").html().
    $("#wolf").show();
    $("#shepicon").show();
    $("#attack").show();
    $("#answerOne").attr("class", "inactive")
    $("#answerTwo").attr("class", "inactive")

            $(document).on('click','#attack', function(attack) {
                
                var player = parseInt($('#health').text());
                var wolf = parseInt($('#wolf #wolflife').text());
                var staffdamage = $('#itemsHolder #staff').val();  //I gave the staff button a value of 30
                var playerdamage = Math.floor((Math.random()*30)+30);	
                var enemydamage = Math.floor((Math.random()*20)+15);	
                var newplayerlife = player - enemydamage;
                var newenemylife = wolf - playerdamage;

                
            
                $('#wolf #wolflife').text(newenemylife);
                $('#health').text(newplayerlife);
            
                    if (newplayerlife <= 0) {
                        player = 0;
                        $('#health').text(player);
                        document.location.href = "end.html";
                        score = (time*10) + (sheep*10) + (health*5)
                        $('#finalscroe').html(score);
                    }
                    if (newenemylife <= 0)  {
                        wolf = 0;
                        $('#wolf #wolflife').text(wolf)
                        $("#questions").html('<img id="wolfwin" src="images/wolfwin.png">');
                    }
                
            });
    
    
 });

 $(document).on('click','#wolfwin', function(){
    x++
    $("#wolf").hide();
    $("#shepicon").hide();
    $("#attack").hide();
    $(".introScene").css("background-image", "url(images/scenebridgetroll.jpg)");
    $('#questions').text(questions[x].question);
    $('#answerOne').text(questions[x].A[0]);
    $('#answerTwo').text(questions[x].B[0]);
    $("#answerOne").attr("class", "answerOneC")
    $("#answerTwo").attr("class", "answerTwoC")
 });


 $(document).on('click','.answerTwoB', function(){   
    sheep = sheep - 3;
    $('#sheep').html(sheep);
    $("#answerOne").attr("class", "answerOneC")
    $("#answerTwo").attr("class", "answerTwoC")
    $(".introScene").css("background-image", "url(images/scenebridgetroll.jpg)");

    x++
    $('#questions').text(questions[x].question);
    $('#answerOne').text(questions[x].A[0]);
    $('#answerTwo').text(questions[x].B[0]);

    if (sheep <=0) {
        sheep = 0 
        $('#sheep').html(sheep);
        document.location.href = "end.html";
        score = (time*10) + (sheep*10) + (health*5)
        $('#finalscroe').html(score);
    }
    
 });


 $(document).on('click','.answerOneC', function(){ 
    time = time - 60;
    $('#time').html(time);

     setTimeout(function () { 
        document.location.href = "end.html";
        score = (time*10) + (sheep*10) + (health*5)
        $('#finalscroe').html(score);
        ;}, 1000);
 });


 $(document).on('click','.answerTwoC', function(){ 
    x++
    $('#questions').text(questions[x].question);
    $('#answerOne').text(questions[x].A[0]);
    $('#answerTwo').text(questions[x].B[0]);

    $("#answerOne").attr("class", "answerOneD")
    $("#answerTwo").attr("class", "answerTwoD")

 });


 $(document).on('click','.answerOneD', function(){ 
    sheep = sheep + 5
    time = time + 30
    $('#sheep').html(sheep);
    $('#time').html(time);

    setTimeout(function () { 
        document.location.href = "end.html";
        score = (time*10) + (sheep*10) + (health*5)
        $('#finalscroe').html(score);
        ;}, 1000);

 });



 $(document).on('click','.answerTwoD', function(){ 
    health = 0
    sheep = 0
    $('#health').html(health);
    $('#sheep').html(sheep);
    
    setTimeout(function () { 
    document.location.href = "end.html";
    score = (time*10) + (sheep*10) + (health*5)
    $('#finalscroe').html(score);

    ;}, 1000);
 });





 //Fourth Scene: 
 //if user selects to move on to the next screen they
 //either run from trolls or answer the trolls question
        //**This is option A which is dependant on the code from the wolf fight */

 


//This is option B which leads to the quiz:
 //they will see the troll bridge here they will answer a question
 //the background remains the same here. if user answers correctly
 // they gain health else they lose health.

 







var questions = [

    //SWAMP QUESTION
    {
    question: "The quickest way back appears to be directly through a swampy mess! Do you choose to wade through the swamp or safely hike around. The swamp is 3x faster but also 3x more dangerous. So choose wiseley!",
    Image: ["images/sceneSwamp.png"],
    A: ["If you choose to wade through the swamp then you only lose 20 seconds and	anywhere from 0-3 sheep."], 
    B: ["If you choose to go around then you loose no sheep but 60 seconds off of the clock."] },

    //WOLF QUESTION
    {
    question: "A wolf attacks, you can choose to fight back or run.",
    Image: ["images/sceneScaryWoodWolf.png"],
    A: ["If you fight back then (generates random damage) to both you and wolf"], 
    B: ["If you choose run then you loose a random of 0-3 sheep from your herd."] },

    //BRIDGE TROLL 1
    {
    question: "A bridge troll appears and blocks your way. The troll is extremely strong and dangerous. Do you choose to answer his question or fight the troll.",

    Image: ["scenebridgetroll.jpg"],
    A: ["Run from Troll and lose time."], 

    B: ["Answer troll's question"]
     },

     //BRIDGE TROLL 2 QUESTION:
    {
    question: "What # is the first element of an array?!?!",
    Image: ["images/sceneBridgeTroll.jpg"],
    A: ["0"], 
    B: ["1"]
    },

//     //ELVES QUESTION:
//     {
//     question: "Dozens of magic elves appear from the woods. The elves have recently lost their Treehouse Cookie Factory in a tragic fire and are in dire need for resources. They offer to trade you as many sheep as you would like to give. For each sheep the will turn the clock back 30 seconds or give you back a X amount of life.",
//     Image: ["images/sceneWoodsElves.jpg"],
//     A: ["If you choose to trade sheep then you get 30 seconds for each sheep that you give up."], 
//     B: ["If you choose to not give them any sheep then you continue on to the next step."]
//     }
]




