// Card Class - used by Deck
function Card(value, suit, owner, sm, font, width, height, strokeColor, strokeThickness, backFillColor, frontFillColor) {
  this.value = value;
  this.suit = suit;
  this.owner = owner || "INVALID_USER";
  if (suit == "club" || suit == "spade")
    this.color = "black";
  else
    this.color = "red";
  this.sm = sm;
  this.font = font;
  this.width = width;
  this.height = height;
  this.strokeColor = strokeColor;
  this.strokeThickness = strokeThickness;
  this.backFillColor = backFillColor;
  this.frontFillColor = frontFillColor;
}

Card.prototype.get_color = function() {
  return this.color;
}

Card.prototype.get_suit = function() {
  return this.suit
}

Card.prototype.get_value = function() {
  return this.value;
}

Card.prototype.get_owner = function() {
  return this.owner;
}

Card.prototype.set_owner = function(ownerName) {
  this.owner = ownerName;
}

exports.Card = Card;