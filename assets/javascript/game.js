$(document).ready(function () {
    var userPick = false;
    var defender = false;

    var batman = {
        name: "batman",
        healthPoints: 100,
        attackPower: 8,
        cntrAtkPwr: 5,
        increment: 8
    };
    var catwoman = {
        name: "catwoman",
        healthPoints: 120,
        attackPower: 6,
        cntrAtkPwr: 4,
        increment: 6
    };
    var joker = {
        name: "joker",
        healthPoints: 180,
        attackPower: 6,
        cntrAtkPwr: 20,
        increment: 6
    };
    var rasAlGhul = {
        name: "ras-al-ghul",
        healthPoints: 150,
        attackPower: 10,
        cntrAtkPwr: 6,
        increment: 10
    };
    // var characterObj = {
    //     batman: {
    //         name: "batman",
    //         healthPoints: 100,
    //         attackPower: 8,
    //         cntrAtkPwr: 5,
    //         increment: 8
    //     },
    //     catwoman: {
    //         name: "catwoman",
    //         healthPoints: 120,
    //         attackPower: 6,
    //         cntrAtkPwr: 4,
    //         increment: 6
    //     },
    //     joker: {
    //         name: "joker",
    //         healthPoints: 180,
    //         attackPower: 6,
    //         cntrAtkPwr: 20,
    //         increment: 6
    //     },
    //     'ras-al-ghul': {
    //         name: "ras-al-ghul",
    //         healthPoints: 150,
    //         attackPower: 10,
    //         cntrAtkPwr: 6,
    //         increment: 10
    //     }
    // };
    // for (key in characterObj) {
    // var characterDiv = $("<div>...")
    // build up divs to append to one another
    // append characterDiv to main div in html
    // }

    var leftDiv = {};
    var rightDiv = {};

    $("#batman #health").text(batman.healthPoints);
    $("#catwoman #health").text(catwoman.healthPoints);
    $("#joker #health").text(joker.healthPoints);
    $("#ras-al-ghul #health").text(rasAlGhul.healthPoints);


    // move players to positions
    // tried this first, but couldn't figure out how to assign the array properties in a general manner
    // $(".image").on("click", function () {
    //     if (userPick === false) {
    //         $(this).appendTo("#left");
    //         userPick = true;
    //         leftDiv = $(this).attr("id");
    //         console.log(leftDiv);
    //     } else {
    //         $(this).appendTo("#right");
    //         defender = true;
    //         rightDiv = $(this).attr("id");
    //         console.log(rightDiv);
    //     };
    //     if (defender === true) {
    //         $(".image").off("click");
    //     };
    // });

    //went with separate functions for each image to 
    $("#batman").on("click", function () {
        if (userPick === false) {
            $(this).appendTo("#left");
            userPick = true;
            leftDiv = batman;
            $("#batman").off("click");
            console.log(leftDiv);
        } else {
            $(this).appendTo("#right");
            defender = true;
            rightDiv = batman;
            console.log(rightDiv);
        };
        if (defender === true) {
            $(".image").off("click");
        };
    });
    $("#catwoman").on("click", function () {
        if (userPick === false) {
            $(this).appendTo("#left");
            userPick = true;
            leftDiv = catwoman;
            $("#catwoman").off("click");
            console.log(leftDiv);
        } else {
            $(this).appendTo("#right");
            defender = true;
            rightDiv = catwoman;
            console.log(rightDiv);
        };
        if (defender === true) {
            $(".image").off("click");
        };
    });
    $("#joker").on("click", function () {
        if (userPick === false) {
            $(this).appendTo("#left");
            userPick = true;
            leftDiv = joker;
            $("#joker").off("click");
            console.log(leftDiv);
        } else {
            $(this).appendTo("#right");
            defender = true;
            rightDiv = joker;
            console.log(rightDiv);
        };
        if (defender === true) {
            $(".image").off("click");
        };
    });
    $("#ras-al-ghul").on("click", function () {
        if (userPick === false) {
            $(this).appendTo("#left");
            userPick = true;
            leftDiv = rasAlGhul;
            $("#ras-al-ghul").off("click");
            console.log(leftDiv);
        } else {
            $(this).appendTo("#right");
            defender = true;
            rightDiv = rasAlGhul;
            console.log(rightDiv);
        };
        if (defender === true) {
            $(".image").off("click");
        };
    });



    $("#attack").on("click", function () {
        leftDiv.healthPoints -= rightDiv.cntrAtkPwr;
        leftDiv.attackPower += leftDiv.increment;
        rightDiv.healthPoints -= leftDiv.attackPower;
        $("#" + leftDiv.name + " #health").text(leftDiv.healthPoints);
        $("#" + rightDiv.name + " #health").text(rightDiv.healthPoints);
        console.log(leftDiv, rightDiv);
        // leftDiv health points goes to zero -> game over
        if (leftDiv.healthPoints <= 0) {
            // have to change text in scoring sections
            // reset entire game
            console.log('you lose')
        }
        // rightDiv goes to zero; user has to select another opponent/win
        if (rightDiv.healthPoints <= 0) {
            // disable image - get rid or fade image elsewhere
            // next opponent is clickable (reset of next opponents; defender = false)
            console.log('next opponent/win')
        }
    });


    // need to assign individual healthPoints to each respective image div
    // need to assign and make active the attackPower and ctrAtkPwr for each image div
    // need to make it so on attack the left side = healthPoints - ctrAtkPwr and the right side is healthPoints - attackPower
    // display new healthPoints on each side
    // when healthPoints <= 0, then player loses or defender dissapears
    // attackPower continues to increase by the starting amount throughout the game
    // 








});