const ftoc = function(far) {
  answer = (far - 32) * 5 / 9;

  answerRounded = Math.round(answer * 10)/10;

  return answerRounded;
};

const ctof = function(cel) {
  answer = cel * 9/5+32;

  answerRounded = Math.round(answer * 10)/10;
  
  return answerRounded;
};

module.exports = {
  ftoc,
  ctof
};
