$(document).ready(function () {
    var userPick = false;
    var defender = false;
    var batman = {
        healthPoints: 100,
        attackPower: 8,
        cntrAtkPwr: 5
    };
    var catwoman = {
        healthPoints: 120,
        attackPower: 6,
        cntrAtkPwr: 4
    };
    var joker = {
        healthPoints: 180,
        attackPower: 6,
        cntrAtkPwr: 20
    };
    var rasAlGhul = {
        healthPoints: 150,
        attackPower: 10,
        cntrAtkPwr: 6
    };
    var leftDiv;
    var rightDiv;




    // move players to positions
    $(".image").on("click", function () {
        if (userPick === false) {
            $(this).appendTo("#left");
            userPick = true;
            leftDiv = $(this).attr("id");
            console.log(leftDiv);
        } else {
            $(this).appendTo("#right");
            defender = true;
            rightDiv = $(this).attr("id");
            console.log(rightDiv);
        };
        if (defender === true) {
            $(".image").off("click");
        };
        if (leftDiv === "batman") {

            console.log(batman.healthPoints);
        };
    });


    // assign `Health Points`, `Attack Power` and `Counter Attack Power` to each player








});