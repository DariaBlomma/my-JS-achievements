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

console.log(one);
let btn1 = document.getElementById('btn1');
console.log(btn1);
btn1.addEventListener('click', function () {
    let one = document.getElementById('one').value;
    console.log('Hello');
    console.log(one);
})
