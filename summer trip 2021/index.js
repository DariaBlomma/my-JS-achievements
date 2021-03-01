/* <?php
$one = $_GET['one'];
if (empty($one)) {
	$_SESSION["one"] = NULL;
} else {
if ($one == "was born") {
	$_SESSION["one"] = "true";
	$_SESSION["true"] = 0;
	$_SESSION["true"] += 1;
	echo "Congratulations! Nobody is killed.</br>";
} else {
?>
<?php
	echo "Oh no! One sailor is killed!</br>";
	echo "Your answer " . $_GET['one'] . " is wrong. The right answer is was born";
}
}
?>*/


function countSailors (task, id, rightAnswer) {
	task = document.getElementById(id).value;
    let sailors = 10;
	
	if (task == rightAnswer) {
		let right = document.createElement('p');
		right.className = "right";
		right. innerHTML = "Congratulations! Nobody is killed.";
		console.log("Congratulations! Nobody is killed.") 
	} else {
		sailors--;
		console.log("Oh no! One sailor is killed!</br> Your answer " + task + " is wrong. The right answer is " + rightAnswer + ". You have " + sailors + ' left' );
	}
}
let btn1 = document.getElementById('btn1');
console.log(btn1);
btn1.addEventListener('click', function () {  
	countSailors(one, 'one', 'was born');
})
