// Container for main menu
var main_menu = new createjs.Container();
var bet_amount;

// Creates the Heart
var get_heart_object = function(sm) {
  var heart = new createjs.Shape();
  heart.graphics.beginStroke("red");
  heart.graphics.beginFill("red");
  heart.graphics.drawCircle(sm * 7.333, sm * 12, sm * 1); // left circle
  heart.graphics.drawCircle(sm * 9.333, sm * 12, sm * 1); // right circle
  heart.graphics.lineTo(sm * 10.333, sm * 12.333); // moving drawing point to right, lower
  heart.graphics.lineTo(sm * 8.333, sm * 15.333); // right diagonal down line to middle
  heart.graphics.lineTo(sm * 6.4, sm * 12.333); // left diagonal left line
  return heart;
}

// Creates the Spade
var get_spade_object = function(sm) {
  var spade = new createjs.Shape();
  spade.graphics.beginStroke("black");
  spade.graphics.beginFill("black");
  spade.graphics.drawCircle(sm * 7.333, sm * 12, sm * 1); // left circle
  spade.graphics.drawCircle(sm * 9.333, sm * 12, sm * 1); // right circle
  spade.graphics.beginFill("black");
  spade.graphics.moveTo(sm * 10.333, sm * 11.666); // moving drawing point to right, upper
  spade.graphics.lineTo(sm * 8.333, sm * 8.666); // right diagonal up line to middle
  spade.graphics.lineTo(sm * 6.4, sm * 11.666); // left diagonal down
  spade.graphics.moveTo(sm * 8.333, sm * 12.333); // moving drawing point to center of 2 circles
  spade.graphics.lineTo(sm * 9.333, sm * 14); // right diagonal down line of triangle
  spade.graphics.lineTo(sm * 7.333, sm * 14); // straight line of triangle
  return spade;
}

// Creates the Diamond
var get_diamond_object = function(sm) {
  var diamond = new createjs.Shape();
  diamond.graphics.beginStroke("red");
  diamond.graphics.beginFill("red");

  diamond.graphics.moveTo(sm * 8.333, sm * 10.666); // starting drawing point
  diamond.graphics.lineTo(sm * 10.333, sm * 13); // right diagonal down \
  diamond.graphics.lineTo(sm * 8.333, sm * 15.666); // left diagonal down /
  diamond.graphics.lineTo(sm * 6.333, sm * 13); // left diagonal up \
  return diamond;
}

// Creates the Club
var get_club_object = function(sm) {
  sm = sm || 6;
  var club = new createjs.Shape();
  club.graphics.beginStroke("black");
  club.graphics.beginFill("black");
  club.graphics.drawCircle(sm * 7.333, sm * 12, sm * 1); // left circle
  club.graphics.drawCircle(sm * 9.333, sm * 12, sm * 1); // right circle

  club.graphics.moveTo(sm * 8.333, sm * 10.333); // moving drawing point to center of circles
  club.graphics.lineTo(sm * 8.333, sm * 11.666); // line up from center of bottom circles to center of top circle
  club.graphics.endStroke();

  club.graphics.drawCircle(sm * 8.333, sm * 10.05, sm * 1); // top circle
  club.graphics.moveTo(sm * 8.333, sm * 12.333); // moving drawing point to center of 2 circles
  club.graphics.lineTo(sm * 9.333, sm * 14); // right diagonal down line of triangle
  club.graphics.lineTo(sm * 7.333, sm * 14); // straight line of triangle
  return club;
}

// Adds objects to Menu
function addToMenu(object) {
  main_menu.addChild(object);
  stage.update();
}

// Deletes certain objects from the Menu
function deleteItemMenu(object) {
  main_menu.removeChild(object);
  stage.update();
}

// Removes all items from Menu
function removeMenuChildren() {
  stage.removeChild(main_menu);
  main_menu.removeAllChildren();
  stage.update();
}

// Creates the value depending on the color
var get_value_object = function(value, color, font) {
  if (color == "red") {
    title = new createjs.Text(value, font, "#FF0000");
  } else if (color == "black") {
    title = new createjs.Text(value, font, "#000000");
  }

  return title;
}

var get_dealer_chip = function(sm) {
  var dealer_chip = new createjs.Container();
  var dealer_chip_text = new createjs.Text("DEALER", "20px Bembo", "#000");
  dealer_chip_text.textBaseline = "top";
  dealer_chip_text.textAlign = "center";

  var width = dealer_chip_text.getMeasuredWidth() + 15;
  var height = dealer_chip_text.getMeasuredHeight() + 7;

  dealer_chip_text.x = 700;
  dealer_chip_text.y = 579;

  var background = new createjs.Shape();
  background.graphics.beginFill("white").drawCircle(662, 575, width, height, 10);

  dealer_chip.addChild(background, dealer_chip_text)
  stage.addChild(dealer_chip);
  stage.update();
}

var get_back_object = function(width, height, strokeColor, strokeThickness, fillColor) {
  strokeColor = strokeColor;
  strokeThickness = strokeThickness;
  fillColor = fillColor;

  var back = new createjs.Shape();
  back.graphics.setStrokeStyle(strokeThickness);
  back.graphics.beginStroke(strokeColor).beginFill(fillColor).drawRoundRect(0, 0, width, height, 5);

  return back;
}

var get_front_object = function(width, height, strokeColor, strokeThickness, fillColor) {
  var front = new createjs.Shape();
  front.graphics.setStrokeStyle(strokeThickness);
  front.graphics.beginStroke(strokeColor).beginFill(fillColor).drawRoundRect(0, 0, width, height, 5);
  return front;
}

var get_container_object = function(front, value, suit) {
  var card_container = new createjs.Container();
  card_container.addChild(front, value, suit)
  return card_container;
}

// Provides the background for the game
var get_room_background_object = function(sm) {
  var background = new createjs.Bitmap("/images/pokerfelt.jpg");
  background.scaleX = sm;
  background.scaleY = sm;
  return background;
}

// Indicates which user's turn
function turn_signal(user) {
  var signal = new createjs.Shape();
  signal.graphics.beginStroke("#FFFF00").beginFill("#FFFF00");

  // Depending on which user, provide the user signal
  switch (user) {
    // left
    case 3:
      signal.graphics.moveTo(643, 260).lineTo(703, 260).lineTo(673, 280).lineTo(643, 260);
      break;
      // back
    case 2:
      signal.graphics.moveTo(340, 60).lineTo(400, 60).lineTo(370, 80).lineTo(340, 60);
      break;
      // right
    case 1:
      signal.graphics.moveTo(43, 260).lineTo(103, 260).lineTo(73, 280).lineTo(43, 260);
      break;
      // main
    case 0:
      signal.graphics.moveTo(515, 540).lineTo(545, 510).lineTo(545, 570).lineTo(515, 540);
      break;
  }
  signal.name = "signal";
  return signal;
}

// Allows a user to create a button with specifications
function button(x, y, width, height, label, color, textSize) {
  var user_button = new createjs.Container();

  var text;
  switch (textSize) {
    case 10:
      text = new createjs.Text(label, "10px Bembo", "#000");
      text.y -= 2;
      break;
    case 20:
      text = new createjs.Text(label, "20px Bembo", "#000");
      break;
  }

  text.textBaseline = "top";
  text.textAlign = "center";
  text.x += x + (width / 2);
  text.y += y + (height / 4);

  var background = new createjs.Shape();
  background.graphics.beginFill(color).drawRoundRect(x, y, width, height, 10);

  user_button.addChild(background);
  user_button.addChild(text);
  return user_button;
}

// Begin loading content (only sounds to load)
var assetsPath = "/sounds/";
manifest = [{
  id: "background",
  src: "backgroundMusic.ogg"
}, {
  id: "buttonClick",
  src: "buttonClick.ogg"
}];

createjs.Sound.alternateExtensions = ["mp3"];
preload = new createjs.LoadQueue(true, assetsPath);
preload.installPlugin(createjs.Sound);
preload.addEventListener("complete", handleComplete);

function handleComplete(event) {
  createjs.Sound.play("background");
}
preload.addEventListener("progress", updateLoading);

function updateLoading(event) {
  // Load Updated
}
preload.loadManifest(manifest);

// Provides a toggle function for all sounds
function soundButton() {
  var sound = new button(662, 575, 80, 30, "Sound", "yellow", 20);
  addToGame(sound);
  stage.update();

  sound.addEventListener("click", function(event) {
    createjs.Sound.play("buttonClick");
    if (createjs.Sound.volume == 1.0) {
      createjs.Sound.volume = 0.0;
    } else {
      createjs.Sound.volume = 1.0;
    }
  })
}

// Provides instructions for the game
function helpButton() {
  var help = new button(662, 540, 80, 30, "Help", "yellow", 20);
  addToGame(help);
  stage.update();

  help.addEventListener("click", function(event) {
    createjs.Sound.play("buttonClick");
    alert("RANK OF HANDS\n\n1) Royal Flush\n2) Straight Flush\n3) Four of a Kind\n4) Full House\n5) Flush\n6) Straight\n7) Three of a Kind\n8) Two Pair\n9) One Pair\n10) High Card");
  })
}

function leaveButton(currentPlayer) {
  var leave = new button(662, 610, 80, 30, "Leave", "yellow", 20);
  addToGame(leave);
  stage.update();

  leave.addEventListener("click", function(event) {
    window.close();
  })
}

// Allows the user to call
function callButton() {

  var playerChips = getPlayerChips()
  var call = new button(290, 475, 50, 18, "check/call", "yellow", 10);

  var totalBet = getTotalBet();
  var amount = totalBet - getAmountBet();
  var currentChips;
  var player = getCurrentPlayer();
  var lastBet;

  call.addEventListener("click", function(event) {
    createjs.Sound.play("buttonClick");
    if (currentChips == 0) { // User has 0 chips left
      amount = 0;
      currentChips = 0
    } else if ((playerChips - amount) < 0) { // Calling would make chips negative
      amount = playerChips * 1;
      removePlayerChips(playerChips * 1);
      lastBet = getLastBetAmount();
      currentChips = 0;
    } else { // User has enough chips
      lastBet = getLastBetAmount();
      amount = getLastBetAmount() - getLastUserBet();
      removePlayerChips(amount)
      currentChips = getPlayerChips();
    }
    socket.emit("increase pot", {
      chips: amount,
      amount: lastBet
    });
    socket.emit("changed amount", {
      id: player,
      chips: currentChips
    });
    socket.emit("current turn", {
      action: "call",
      user: player,
      amount: totalBet
    });
    socket.emit("buttons", {
      remove: false,
      action: "call"
    });
  })

  return call;
}


function raiseButton(maxChips) {
  var raise_button = new button(345, 475, 50, 18, "raise", "yellow", 10);

  raise_button.addEventListener("click", function(event) {
    createjs.Sound.play("buttonClick");
    if ((show = game_menu.getChildByName("raise_container"))) {
      raise_button.children[1].text = "raise";
      game_menu.removeChild(show);
      addCallandFoldButton();
    } else {
      raise_button.children[1].text = "return";
      removeCallandFoldButton();
      showRaiseContainer(maxChips);
    }
  })

  return raise_button;
}

function handleSliderChange(evt) {
  bet_amount.text = "$" + Math.round(evt.target.value);
  stage.update();
}

// Allows the different options for raising
function showRaiseContainer(maxChips) {
  var raise_container = new createjs.Container(); // Holds the bet amount text, slider, and bet button
  raise_container.name = "raise_container";

  if (maxChips <= getTotalBet() || maxChips == 0) { // User doesn't have enough chips to raise
    not_enough = new createjs.Text("Insufficient chips!", "16px Bembo", "#FFFF00");
    not_enough.x = 312;
    not_enough.y = 455;
    raise_container.addChild(not_enough);
  } else {
    // Bet amount text
    var amountBetIncremented = getTotalBet() + 1;

    bet_amount = new createjs.Text("$" + amountBetIncremented, "16px Bembo", "#FFFF00"); // global variable
    bet_amount.name = "bet_amount";
    bet_amount.x = 146;
    bet_amount.y = 444;
    raise_container.addChild(bet_amount);

    // Slider
    var raise_slider = new Slider(amountBetIncremented * 1, maxChips * 1, 350, 15).set({
      x: 198,
      y: 445,
      value: 1
    });
    raise_slider.trackColor = "purple";
    raise_slider.thumbColor = "#FFFF00";
    raise_slider.on("change", handleSliderChange, this);
    raise_container.addChild(raise_slider);

    // Bet Button
    var bet_button = new button(566, 444, 35, 18, "bet", "yellow", 10);
    bet_button.addEventListener("click", function(event) {
      createjs.Sound.play("buttonClick");
      game_menu.removeChild(game_menu.getChildByName("raise_container"));

      var currentBetAmount = parseInt(bet_amount.text.substr(1));

      var lastBet = getLastUserBet();
      var diffAmount = currentBetAmount - lastBet;
      setAmountBet(getAmountBet() + currentBetAmount);

      var currentChips = getPlayerChips() - diffAmount;
      var player = getCurrentPlayer();
      socket.emit("changed amount", {
        id: player,
        chips: currentChips
      });
      socket.emit("increase pot", {
        chips: diffAmount,
        amount: currentBetAmount
      });
      socket.emit("current turn", {
        action: "raise",
        user: player,
        amount: currentBetAmount
      });
      socket.emit("buttons", {
        remove: false,
        action: "raise"
      });
    });

    raise_container.addChild(bet_button);
  }

  addToGame(raise_container);
  stage.update();
}

// Allows the user to fold
function foldButton() {
  var fold = new button(400, 475, 50, 18, "fold", "yellow", 10);

  fold.addEventListener("click", function(event) {
    createjs.Sound.play("buttonClick");
    var player = getCurrentPlayer();
    socket.emit("buttons", {
      remove: false,
      action: "fold"
    });
    socket.emit("fold", {
      username: player
    });
    socket.emit("current turn", {
      action: "fold",
      user: player
    });
  })
  return fold;
}

// Goes into the lobby once the user presses the button
function startButton() {
  var start = new button(315, 300, 100, 45, "Start", "#F00", 20);
  addToMenu(start);
  stage.addChild(main_menu);
  stage.update();

  start.addEventListener("click", function(event) {
    createjs.Sound.play("buttonClick");
    removeMenuChildren();
    lobby();
  })
}

// Once everyone presses ready, start the game
function readyButton() {
  var ready = new button(315, 300, 100, 45, "Ready", "#F00", 20);
  ready.name = "readyButton";
  addToGame(ready);
  stage.update();

  ready.addEventListener("click", function(event) {
    createjs.Sound.play("buttonClick");
    deleteItemFromGame(ready);
    socket.emit("ready");

    var storeSignal;
    if (storeSignal = stage.getChildByName("signal")) {
      stage.removeChild(storeSignal);
    }

    var userStore = game_menu.getChildByName("won player");
    game_menu.removeChild(userStore);
  })
}

// Once the finishes, all players must press this button to play again
function againButton() {
  var again = new button(315, 245, 100, 45, "Ready", "#F00", 20);
  var shape;
  again.name = "againButton";
  addToGame(again);
  stage.update();

  again.addEventListener("click", function(event) {
    createjs.Sound.play("buttonClick");

    var card;
    for (var i = 0; i < 2; i++) {
      card = stage.getChildByName("mainCard");
      stage.removeChild(card);
    }

    // Delete all cards
    for (var i = 0; i < 13; i++) {
      shape = stage.getChildByName("tableCards");
      stage.removeChild(shape);
    }

    var storeSignal;
    if (storeSignal = stage.getChildByName("signal")) {
      stage.removeChild(storeSignal);
    }

    var userStore = game_menu.getChildByName("won player");
    game_menu.removeChild(userStore);

    deleteItemFromGame(again);
    socket.emit("ready");
  })

}

// Produces the background for the game
function backgroundFelt() {
  main_background = new createjs.Bitmap("/images/pokerfelt.jpg");
  stage.addChild(main_background);
  createjs.Ticker.addEventListener("tick", handleTick);

  function handleTick(event) {
    stage.update();
  }
}

// Provides the username and the user amount for each player
function pokerChip(x, y) {
  // Used by all users
  var chip_plate = new createjs.Container();
  var chip_background = new createjs.Shape();

  chip_background.graphics.beginFill("red").drawCircle(x, y, 15);
  chip_background.graphics.beginFill("white").drawCircle(x, y, 12);
  chip_background.graphics.beginFill("red").drawCircle(x, y, 9);
  chip_background.graphics.beginFill("red").drawPolyStar(x, y, 15, 8, 0.5, 90);
  chip_background.graphics.beginFill("white").drawCircle(x, y, 2);
  chip_plate.addChild(chip_background);
  chip_plate.name = "player1_chip_plate";
  stage.addChild(chip_plate)
  stage.update();
}