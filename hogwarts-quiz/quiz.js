// JavaScript Document

$(init);

var questionsArray = [
	["You would be most hurt if someone called you:", " Cowardly", " Ignorant", " Unkind", " Boring"],
	["If you lived in the Muggle world instead of the Wizarding world, which of these careers would you choose?", " Fireman", " Professor", " Stock Broker", " Social Worker"],
	["Which of your skills are you most proud of?", " My ability to make new friends", " My ability to learn new things", " My ability to get what I want", " My ability to keep secrets"],
	["Which of these vehicles would you like to drive?", " Land Rover", " Mini Cooper", " Porsche 911", " GMC Jimmy"],
	["What is your favorite past-time?", " Playing sports", " Read a good book", " Video games", " Dreaming about the future"],
	["What is your best strength?", " Courage", " Intelligence", " Cleverness", " Loyalty"],
	["If your friend asked for help cheating on a test, what would you do?", " Help them study for the test", " Try to telepathically convey the answers", " Tell them if they are going to cheat, they need to do it by themselves", " Keep it to myself and ignore them"],
	["How do you identify yourself in a group gathering?", " Leader", " Individuality", " Influencer", " Follower"],
	["What bothers you the most in other people?", " Cowardice", " Judgemental", " Stupidity", " Greed"],
	["What game would you enjoy playing?", " Chess", " Scrabble", " Poker", " Solitaire"],
	["What is a priority in your future plans?", " Global Peace", " The Arts", " Wealth", " Ecology"],
	["What type of dog would you prefer to own?", " Labrador Retriever", " Australian Shepherd", " German Shepherd", " Golden Retriever"],
	["Which of these movies do you prefer?", " Mission Impossible", " Step Brothers", " The Terminator", " Parent Trap"],
	["You see some bullies picking on another student at school. What would you do?", " Get involved and stand up to the bullies", " Ignore it and mind my own business", " Laugh along with the bullies, so they think I'm one of them", " Run away, so I don't get bullied"],
	["You are grounded for the weekend by your parents. What do you do?", " Accept the grounding and spend the time working you", " Negotiate with them to reduce the time I am grounded", " Find a way to sneak out of the house without them knowing", " Accept the grounding and do chores around the house"],
	["I prefer to spend time with people...", " Who like sports", " Who are witty", " Who are in the same socio-economic class as I", " Of all types"],
	["I relate to this animal...", " Lion", " Eagle", " Serpent", " Badger"],
	["If I saw an elderly person having trouble opening a door, I would...", " Open the door for them and let them walk in first", " Open the door, let them walk in first, and then prop the door open", " Open the door, let them walk in first, and then advise them that they should do something to get stronger and be more independent", " Open the door, walk in first, and hold the door for them"],
	["I would prefer a dormitory room...?", " On the seventh floor", " In a high tower", " Near the old dungeons", " Near the kitchen"],
	["I enjoy...", " Solving mysteries", " Learning", " Competition", " Trying out recipes"],
];

var randomNumberArray = [];

var randomNumber = 0;

var totalAnswer = 0;

var gryffindorTotal = 0;
var ravenclawTotal = 0;
var slytherinTotal = 0;
var hufflepuffTotal = 0;

function init()
{
	pickQuestions();
	$("#q1").text(questionsArray[randomNumberArray[0]][0]);
	$("#q2").text(questionsArray[randomNumberArray[1]][0]);
	$("#q3").text(questionsArray[randomNumberArray[2]][0]);
	$("#q4").text(questionsArray[randomNumberArray[3]][0]);
	$("#q5").text(questionsArray[randomNumberArray[4]][0]);
	$("#q6").text(questionsArray[randomNumberArray[5]][0]);
	$("#q7").text(questionsArray[randomNumberArray[6]][0]);
	$("#q8").text(questionsArray[randomNumberArray[7]][0]);
	$("#q9").text(questionsArray[randomNumberArray[8]][0]);
	$("#q10").text(questionsArray[randomNumberArray[9]][0]);
	
	$("#q1a1").text(questionsArray[randomNumberArray[0]][1]);
	$("#q1a2").text(questionsArray[randomNumberArray[0]][2]);
	$("#q1a3").text(questionsArray[randomNumberArray[0]][3]);
	$("#q1a4").text(questionsArray[randomNumberArray[0]][4]);
	
	$("#q2a1").text(questionsArray[randomNumberArray[1]][1]);
	$("#q2a2").text(questionsArray[randomNumberArray[1]][2]);
	$("#q2a3").text(questionsArray[randomNumberArray[1]][3]);
	$("#q2a4").text(questionsArray[randomNumberArray[1]][4]);
	
	$("#q3a1").text(questionsArray[randomNumberArray[2]][1]);
	$("#q3a2").text(questionsArray[randomNumberArray[2]][2]);
	$("#q3a3").text(questionsArray[randomNumberArray[2]][3]);
	$("#q3a4").text(questionsArray[randomNumberArray[2]][4]);
	
	$("#q4a1").text(questionsArray[randomNumberArray[3]][1]);
	$("#q4a2").text(questionsArray[randomNumberArray[3]][2]);
	$("#q4a3").text(questionsArray[randomNumberArray[3]][3]);
	$("#q4a4").text(questionsArray[randomNumberArray[3]][4]);
	
	$("#q5a1").text(questionsArray[randomNumberArray[4]][1]);
	$("#q5a2").text(questionsArray[randomNumberArray[4]][2]);
	$("#q5a3").text(questionsArray[randomNumberArray[4]][3]);
	$("#q5a4").text(questionsArray[randomNumberArray[4]][4]);
	
	$("#q6a1").text(questionsArray[randomNumberArray[5]][1]);
	$("#q6a2").text(questionsArray[randomNumberArray[5]][2]);
	$("#q6a3").text(questionsArray[randomNumberArray[5]][3]);
	$("#q6a4").text(questionsArray[randomNumberArray[5]][4]);
	
	$("#q7a1").text(questionsArray[randomNumberArray[6]][1]);
	$("#q7a2").text(questionsArray[randomNumberArray[6]][2]);
	$("#q7a3").text(questionsArray[randomNumberArray[6]][3]);
	$("#q7a4").text(questionsArray[randomNumberArray[6]][4]);
	
	$("#q8a1").text(questionsArray[randomNumberArray[7]][1]);
	$("#q8a2").text(questionsArray[randomNumberArray[7]][2]);
	$("#q8a3").text(questionsArray[randomNumberArray[7]][3]);
	$("#q8a4").text(questionsArray[randomNumberArray[7]][4]);
	
	$("#q9a1").text(questionsArray[randomNumberArray[8]][1]);
	$("#q9a2").text(questionsArray[randomNumberArray[8]][2]);
	$("#q9a3").text(questionsArray[randomNumberArray[8]][3]);
	$("#q9a4").text(questionsArray[randomNumberArray[8]][4]);
	
	$("#q10a1").text(questionsArray[randomNumberArray[9]][1]);
	$("#q10a2").text(questionsArray[randomNumberArray[9]][2]);
	$("#q10a3").text(questionsArray[randomNumberArray[9]][3]);
	$("#q10a4").text(questionsArray[randomNumberArray[9]][4]);
	
	$("#quiz").submit(displayResults);
	

}

function pickQuestions() {
	while(randomNumberArray.length < questionsArray.length)
	{
		randomNumber = Math.floor(Math.random() * questionsArray.length);
		
		if(randomNumberArray.indexOf(randomNumber) === -1)
		{
			randomNumberArray.push(randomNumber);
		}
	}
}

function displayResults()
{
	checkHouseAnswers($("input[name='question1']:checked").val())
	checkHouseAnswers($("input[name='question2']:checked").val())
	checkHouseAnswers($("input[name='question3']:checked").val())
	checkHouseAnswers($("input[name='question4']:checked").val())
	checkHouseAnswers($("input[name='question5']:checked").val())
	checkHouseAnswers($("input[name='question6']:checked").val())
	checkHouseAnswers($("input[name='question7']:checked").val())
	checkHouseAnswers($("input[name='question8']:checked").val())
	checkHouseAnswers($("input[name='question9']:checked").val())
	checkHouseAnswers($("input[name='question10']:checked").val())	
	
	totalAnswer = Math.max(gryffindorTotal, ravenclawTotal, slytherinTotal, hufflepuffTotal);
	
	if(totalAnswer == gryffindorTotal){
		$("#results").text("You're a Gryffindor!")
		.css("color", "#a62202");
	}
	else if(totalAnswer == ravenclawTotal){
		$("#results").text("You're a Ravenclaw!")
		.css("color", "#0072ab");
	}
	else if(totalAnswer == slytherinTotal){
		$("#results").text("You're a Slytherin!")
		.css("color", "#008a37");
	}
	else if(totalAnswer == hufflepuffTotal){
		$("#results").text("You're a Hufflepuff!")
		.css("color", "#cc9600");
	}

	showPopup();

    $("#closeIcon").click(closePopup);
    $("#overlay").click(closePopup);
	
	
	return false;
}

function checkHouseAnswers(answer)
{
		switch(answer){
			case "gryffindor":
				gryffindorTotal++;
				break;
			case "ravenclaw":
				ravenclawTotal++;
				break;
			case "slytherin":
				slytherinTotal++;
				break;
			case "hufflepuff":
				hufflepuffTotal++;
		}
}

function resetPoints()
{
	gryffindorTotal = 0;
	ravenclawTotal = 0;
	slytherinTotal = 0;
	hufflepuffTotal = 0;
	totalAnswer = 0;
}

function center() {
    // Get the distance from the edge of the window to its center
    var top = Math.max($(window).height() - $("#modal").outerHeight(), 0) / 2;
    var left = Math.max($(window).width() - $("#modal").outerWidth(), 0) / 2;

    // Position the modal window using absolute positioning
    $("#modal").css("top", top + $(window).scrollTop());
    $("#modal").css("left", left + $(window).scrollLeft());
}

function showPopup() {
    // Center the popup
    center();

    // Tell the window (browser) to re-center the popup when it is resized
    $(window).resize(center);

    $("#overlay").show();
    $("#modal").show();
}

function closePopup() {
    // Hide the transparent overlay
    $("#overlay").hide();

    // Hide the modal content
    $("#modal").hide();

    // The browser can stop resizing the modal now
    $(window).off("resize");
	
	resetPoints()
}