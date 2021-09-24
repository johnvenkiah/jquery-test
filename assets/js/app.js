$("p").on("click", function() {
    $(this).slideToggle(500);
    $(this).slideToggle("slow");
});

$("button").on("mouseenter", function() {
    $(this).removeClass("make-red").addClass("make-blue");
});

$("button").on("mouseleave", function() {
    $(this).removeClass("make-blue").addClass("make-red");
});

$(".box").click(function() {
    let classNames = $(this).attr("class").split(" ");
    let boxClass = classNames[0];
    let className = classNames[1];

    // If this object is already red, turn it black.
    if ($(this).css("background-color") == "rgb(255, 0, 0)") {
        $("." + className).css("background-color", "#000");
    } else {
        // Else turn all elements with a box class black and then change the color of all elements with the
        //same class name as the clicked element to red.
        $("." + boxClass).css("background-color", "#000");
        $("." + className).css("background-color", "red");
    }
});

$("p").click(function() {
    $(this).css("background-color", "yellow");
});