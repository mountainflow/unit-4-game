$(document).ready(function () {
    let userPick = false;
    let defender = false;


    // move players to positions
    $("img").click(function () {
        if (userPick === false) {
            $(this).appendTo("#left");
            userPick = true;
        } else {
            $(this).appendTo("#right");
        };
    });

    // assign `Health Points`, `Attack Power` and `Counter Attack Power` to each player








});