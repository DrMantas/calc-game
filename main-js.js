
/* Below: main functions to control set (condition) generation */

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generateSet(n_games){
	var maxInt = 10;
  var set = [];
	var signs = ["+", "-", "*", "/"];
  
  for (var i =0; i<n_games; i++){
    var n1 = getRandomInt(maxInt);
    var n2 = getRandomInt(maxInt);
    var sign = getRandomInt(4);

    while (n1 == 0 || n2 == 0){
      n1 = getRandomInt(maxInt);
      n2 = getRandomInt(maxInt);
    }
    
  	var signStr = signs[sign];
    var answer = eval(n1.toString() + " " + signStr + " " + n2.toString());

    set.push([n1,n2,sign,answer]); 
  }
  return set;
}

function generateCondition(setElement){
	var signs = ["+", "-", "×", "/"];
  var sign = signs[setElement[2]];
  return (setElement[0].toString() + " " + sign + " " + setElement[1].toString() + " = ?");
}

/* Below: main functions to calculate scores */

function calculateScorePoints(correct, answer){
	var score;
	if (correct != 0){
    var off = (Math.abs(correct-answer)/correct)*100;
    if (off == 0){
      score = 10;
    }
    else if (off < 5){
      score = 5;
    }
    else if (off < 10){
      score = 2;
    }
    else if (off < 100){
      score = 1;
    }
    else{ //look into algorithms correctness
    score = 0;
    }
  }
  else{
  	var off = correct-answer;
    if (off == 0){
    	score = 10;
    }
    else{
    score = 1;
    }
  }
  return score;
  
}

function calculateScoreTime(time){
  var score;
  
  if (time < 5000){
    score = 2;
  }
  else if (time < 10000){
    score = 1.5;
  }
  else{
  	score = 1;
  }
  
  return score;
}

/* Below: function creates animated fly word which is showed after submitting answer */

function createFlyWord(score, time){ //time not implemented
	var word;
	if (score == 10){
  	word = "Excellent!";
  }
  else if (score == 5){
  	word = "Not bad!";
  }
  else{
  	word = "Missed it!";
  }
  return word;  
}

/* Below: other functions */

function updateCounter(domel, n, nall){
	domel.innerHTML = (n+1).toString() + "/" + nall.toString();
}

window.mobileCheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

/* Below: timing functions */

var startTimerVar;
var time = 0; // main time to use for timer functionality (ms)
//var timePause;
var timerFunction;

function timerStart(){
  function x(){
  	var timeNow = new Date().getTime();
		time = timeNow - startTimerVar;
  }
  timerFunction = setInterval(x, 100);
}

function timerContinue(){
	startTimerVar = new Date().getTime();
  startTimerVar -= time;
  function x(){
  	var timeNow = new Date().getTime();
		time = timeNow - startTimerVar;
  }
  timerFunction = setInterval(x, 100);
}

/* function timerNow(){
  var timeNow = new Date().getTime();
  time = timeNow - startTimerVar;
} */

function timerStop(){
	clearInterval(timerFunction);
  //var timeNow = new Date().getTime();
	//time = timeNow - startTimerVar;
  
}

function timerPause(){
	clearInterval(timerFunction);
  //timePause = new Date().getTime();
	//time = timeNow - startTimerVar;
  
}

function timerPreStart(){
	time = 0;
  startTimerVar = new Date().getTime();
  //timePause = startTimerVar;
  
}

function updateTimeBox(timeBox){
	function work(){
  timeBox.innerHTML = (Math.round(time/1000)).toString() + "s";
  /* console.log((Math.round(time/1000)).toString() + "s");
  console.log("a"); */
  }
  return setInterval(work, 100);
  
}

/* Below: main game variables */


var n_games = 10;
var n_current;
var set;
var totalScore = 0;

var statusButton = document.getElementById("startGame");
var conditionLine = document.getElementById("conditionId");
var timeBox = document.getElementById("timeBox");
var submitButton = document.getElementById("submit");
var answerField = document.getElementById("answerField");
var totalScoreBox = document.getElementById("totalScoreBox");
var lastScoreBox = document.getElementById("lastScoreBox");
var lastScorePoints = document.getElementById("lastScorePoints");
var lastScoreTime = document.getElementById("lastScoreTime");
var flyWord = document.getElementById("flyWord");
var counter = document.getElementById("counter");

updateTimeBox(timeBox);
submitButton.disabled = true;

/* Below: enter button in asnwerField submits answer */ 

answerField.addEventListener("keyup", function x(event){
	if (event.keyCode === 13){
  	submitButton.click();
  }
});

if (!window.mobileCheck){
	answerField.setAttribute('type', 'number');
}

/* Below: control of game flow by Start, Pause, Continue buttons */

statusButton.addEventListener("click", function x(){
	if (statusButton.innerHTML == "Start!"){
  // button says start
  n_current = 0;
  set = generateSet(n_games);
  statusButton.innerHTML = "Pause";
  timerPreStart();
  timerStart();
  submitButton.disabled = false;
  
  //console.log(time);
  
  var condition = generateCondition(set[n_current]);
  conditionLine.innerHTML = condition;
  
  answerField.focus();
  updateCounter(counter, n_current, n_games);
  
  return;
  }
  else if (statusButton.innerHTML == "Pause"){
  // button says pause
  timerPause();
  conditionLine.classList.add("blur");
  console.log(time);
  statusButton.innerHTML = "Continue";
  answerField.focus();
  return;
  
  }
  else{
  // button says continue
  timerContinue();
  conditionLine.classList.remove("blur");
  console.log(time);
  statusButton.innerHTML = "Pause";
  answerField.focus();
  return;
  }
});

/* Below: control of game flow by Enter button */

submitButton.addEventListener("click", function x(){
  
  var answerUser = answerField.value;
  
  if(isNaN(answerUser) == true || answerUser == ""){
  	answerField.classList.add("redBorder");
    answerField.value = "";
    answerField.focus();
    
    return;
  }
  
  if (statusButton.innerHTML == "Continue"){
  	statusButton.click();
  }
  
  timerStop();
  
  if (answerField.classList.contains("redBorder")){
    answerField.classList.remove("redBorder");
  }
  
  var pointsScore = calculateScorePoints(set[n_current][3], answerUser);
  var pointsTime = calculateScoreTime(time);
 	var pointsWeighted = pointsScore*pointsTime;
  
  totalScore += pointsWeighted;
  
  totalScoreBox.innerHTML = totalScore;
  lastScoreBox.innerHTML = pointsWeighted;
  lastScorePoints.innerHTML = pointsScore;
  lastScoreTime.innerHTML = pointsTime;
  
  var word = createFlyWord(pointsScore, pointsTime);
  flyWord.innerHTML = word;
  flyWord.classList.remove("hidden");
  
  /* Below new game starts */
  
  answerField.value = "";
  answerField.focus();

  timerPreStart();
  timerStart();

  n_current++;
  var condition = generateCondition(set[n_current]);
  conditionLine.innerHTML = condition;
  updateCounter(counter, n_current, n_games);
  
  function setContinue(){
  	// questionable choice when to stop animation
    flyWord.classList.add("hidden");
  }
  
  setTimeout(setContinue, 1000);
  
  
  
});

