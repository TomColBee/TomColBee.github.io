// ----------------------------------------------------
// Set restart toggle
// ----------------------------------------------------
var resetToggle = false; // Create binary variable that dictates whether player prompts sent or not



// ----------------------------------------------------
// startreset button
// ----------------------------------------------------
$("button#startreset").click(function() {

  // Define players and colours
   if(!resetToggle) {
     player1 = prompt("Player One: Please enter your name, you will be Red");
     player2 = prompt("Player Two: Please enter your name, you will be Yellow");
     player1Colour = 'rgb(255, 0, 0)'; // Player 1 colour
     player2Colour = 'rgb(255,255,0)'; // Player 2 colour

     player1Turn = true;
     currentName = player1;
     currentColour = player1Colour;

     // Change button text and colour
     resetToggle = true;
     $("#startreset").html("Restart Game");
     $("#startreset").css("background-color", "black");

     // Show player message to let them know it is their turn
     $("#player_message").html(player1[0].toUpperCase() + player1.substring(1) + " - It's your turn!");

     // If button is clicked then
     // prompt users if they want to reset or not
   } else {
     // var reset = prompt("Are you sure you want to restart the game? (Y/N)");
     // if(reset.toUpperCase() === "Y") {
       location.reload();
     // }
   }

});



// ----------------------------------------------------
// Create functions needed
// ----------------------------------------------------

// Change the color of a button
function changeColour(rowIndex, colIndex, colour) {
  return $('.board tr').eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', colour);
}

// Report colour of the given table element
function returnColour(rowIndex, colIndex) {
  return $('.board tr').eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

// Check for next available row in the given column
function checkBottom(colIndex) {
  var colourReport = returnColour(5, colIndex);
  for (var row = 5; row > -1; row--) {
    colourReport = returnColour(row, colIndex);
    if (colourReport === "rgb(250, 250, 249)") {
      return row;
    }
  }
}

// Count cells with that are blank
function countBlank() {
  var count = 0;
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 7; col++) {
      if (returnColour(row, col) === "rgb(250, 250, 249)") {
        count++;
      }
    }
  }
  return count++;
}

// Check to see if 4 discs are the same colour
function colourMatchCheck(one, two, three, four){
  return (one === two && one === three && one === four && one !== "rgb(250, 250, 249)" && one !== undefined);
}

// Check for Horizontal Wins
function horizontalWinCheck() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (colourMatchCheck(returnColour(row, col), returnColour(row, col+1) ,returnColour(row, col+2), returnColour(row, col+3))) {
        console.log('Horizonal win');
        disc_one = $('.board tr').eq(row).find('td').eq(col).find('button');
        disc_two = $('.board tr').eq(row).find('td').eq(col+1).find('button');
        disc_three = $('.board tr').eq(row).find('td').eq(col+2).find('button');
        disc_four = $('.board tr').eq(row).find('td').eq(col+3).find('button');
        return true;
      } else {
        continue;
      }
    }
  }
}

// Check for Vertical Wins
function verticalWinCheck() {
  for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 7; col++) {
      if (colourMatchCheck(returnColour(row, col), returnColour(row+1, col) ,returnColour(row+2, col), returnColour(row+3, col))) {
        console.log('Vertical win');
        disc_one = $('.board tr').eq(row).find('td').eq(col).find('button');
        disc_two = $('.board tr').eq(row+1).find('td').eq(col).find('button');
        disc_three = $('.board tr').eq(row+2).find('td').eq(col).find('button');
        disc_four = $('.board tr').eq(row+3).find('td').eq(col).find('button');
        return true;
      } else {
        continue;
      }
    }
  }
}

// Check for Diagonal Wins
function diagonalUpWinCheck() {
  for (var row = 5; row > 1; row--) {
    for (var col = 0; col < 4; col++) {
      if (colourMatchCheck(returnColour(row, col), returnColour(row-1, col+1) ,returnColour(row-2, col+2), returnColour(row-3, col+3))) {
        console.log('Diagonal win');
        disc_one = $('.board tr').eq(row).find('td').eq(col).find('button');
        disc_two = $('.board tr').eq(row-1).find('td').eq(col+1).find('button');
        disc_three = $('.board tr').eq(row-2).find('td').eq(col+2).find('button');
        disc_four = $('.board tr').eq(row-3).find('td').eq(col+3).find('button');
        return true;
      } else {
        continue;
      }
    }
  }
}

function diagonalDownWinCheck() {
  for (var row = 0; row < 3; row++) {
    for (var col = 6; col > 2; col--) {
      if (colourMatchCheck(returnColour(row, col), returnColour(row+1, col-1) ,returnColour(row+2, col-2), returnColour(row+3, col-3))) {
        console.log('Diagonal win');
        disc_one = $('.board tr').eq(row).find('td').eq(col).find('button');
        disc_two = $('.board tr').eq(row+1).find('td').eq(col-1).find('button');
        disc_three = $('.board tr').eq(row+2).find('td').eq(col-2).find('button');
        disc_four = $('.board tr').eq(row+3).find('td').eq(col-3).find('button');
        return true;
      } else {
        continue;
      }
    }
  }
}

// Create flash function
function fadeFlash(n, element){
  while (n > 0) {
  $(element).fadeOut(100);
  $(element).fadeIn(100);
  n = n - 1;
  }
}



// ----------------------------------------------------
// Play the game
// ----------------------------------------------------

// Define function to play game
$('.selection button').on('click', function() {

  if(resetToggle) {
  col = $(this).closest("td").index();
  row = checkBottom(col);
  $(this).css('background-color', currentColour).animate({opacity: 0.2}, 300);
  $(this).css('background-color', '#e9ebec').animate({opacity: 1.0}, 300);

  // var i = 0;
  // while (i < row) {
  //   $('.board tr').eq(i).find('td').eq(col).find('button').css('background-color', currentColour).animate({opacity: 0.2}, 250);
  //   $('.board tr').eq(i).find('td').eq(col).find('button').css('background-color', currentColour).animate({opacity: 1.0}, 250);
  //   i = i + 1;
  }

  changeColour(row, col, currentColour);

  // Check for winner, draw or go next player
  if (horizontalWinCheck() || verticalWinCheck() || diagonalUpWinCheck() || diagonalDownWinCheck()) {
    $('#welcome').fadeOut(1);
    $('#how_to').fadeOut(1);
    $('.selection').fadeOut(1);
    $('h4').fadeOut(1);
    $('.board button').not(disc_one).not(disc_two).not(disc_three).not(disc_four).animate({opacity: 0.5}, 300);
    fadeFlash(5, disc_one);
    fadeFlash(5, disc_two);
    fadeFlash(5, disc_three);
    fadeFlash(5, disc_four);
    $("#player_message").html(currentName[0].toUpperCase() + currentName.substring(1) + " is the winner!").css("fontSize", "100px");
  } else if (countBlank() === 0) {
    $('#welcome').fadeOut(1);
    $('#how_to').fadeOut(1);
    $('.selection').fadeOut(1);
    $('h4').fadeOut(1);
    $("#player_message").html("It's a draw!").css("fontSize", "100px");
  } else {
    // Go to next player
    if (player1Turn === true){
      player1Turn = false;
      currentColour = player2Colour;
      currentName = player2;
      $("#player_message").html(player2[0].toUpperCase() + player2.substring(1) + " - It's your turn!");
    } else {
      player1Turn = true;
      currentColour = player1Colour;
      currentName = player1;
      $("#player_message").html(player1[0].toUpperCase() + player1.substring(1) + " - It's your turn!");
    }
  }
});
