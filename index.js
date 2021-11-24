const paintwall = function (color) {
    console.log("The wall had been painted " + color);
};

paintwall("green");
paintwall("blue");

// paintwall(); gets result The wall has been painted undefined

const wallsidecolor = function (side, color) {
    console.log("The " + side + " wall has been painted " + color);
};

wallsidecolor("east", "blue");