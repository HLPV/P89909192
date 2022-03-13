
	
	player1_name = localStorage.getItem("player1_name");
	player2_name = localStorage.getItem("player2_name");

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Turno para responder - " + player2_name ;

function send() {number1 = document.getElementById("number1").value;
number1 = document.getElementById("number1").value;
actual_anwser =perseInt(number1)* parseInt(number2);
console.log(actual_anwser);

question_number = "<h4>" + number1 +" X "+ number2 +"</h4>";
input_box = "<br>Respuesta : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";
row = question_number + input_box + check_button ;
document.getElementById("").innerHTML = row;
document.getElementById("").value = "";
document.getElementById("").value = "";
}

question_turn = "player1";
answer_turn = "player2";
	
	
	function check()
	{
		get_answer = document.getElementById("input_check_box").value;
		answer = get_answer.toLowerCase();
		console.log("answer in lower case - " + answer);
		if(answer == word)	
		{
			if(answer_turn == "player1")
			{
				player1_score = player1_score +1;
				document.getElementById("player1_score").innerHTML = player1_score;
			}
			else 
			{
				player2_score = player2_score +1;
				document.getElementById("player2_score").innerHTML = player2_score;
			}
		}
		if(question_turn == "player1")
		{
			question_turn = "player2"
			document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player2_name ;
		}
		else 
		{
			question_turn = "player1"
			document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player1_name ;
		}
	
		if(answer_turn == "player1")
		{
			answer_turn = "player2"
			document.getElementById("player_answer").innerHTML = "Turno para responder - " + player2_name ;
		}
		else 
		{
			answer_turn = "player1"
			document.getElementById("player_answer").innerHTML = "Turno para responder - " + player1_name ;
		}
	
		document.getElementById("output").innerHTML = "";
	}
	
	