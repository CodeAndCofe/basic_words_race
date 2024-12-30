
function text_displayer() {
	let j = 0;
	while (j < text.length) {
		h.innerHTML += "<p id='" + j + "'>" + text[j] + "</p>";
		if (text[j] === ' ') {
			document.getElementById(j).style.marginLeft = "14px";
		}
		j++;
	}
}

function is_alphabet(c) {
	if (c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z')
		return (1);
	return (-1);
}
function mistake() {
	let comment;
	if (text[i + 1] == ' ' || text[i + 2] == ' ')
		comment = comment_manager(1);
	else
		comment = comment_manager(2);
	while (text[i] != ' ' && i < text.length) {
		document.getElementById(i).style.color = "red";
		i++;
	}
	document.querySelector(".msg").innerHTML = "oooh...";
	document.querySelector(".b_text").innerHTML = comment;
}
function KeyWordsDisplayer() {
	keyCount++;
	let comment = comment_manager(0);
	document.querySelector(".KeyWritten span").innerHTML = keyCount;
	document.querySelector(".b_text").innerHTML = comment;
}
function is_espace() {
	if (text[i + 1] == ' ')
		document.querySelector(".msg").innerHTML = "📢Jump!!";
	else if (text[i + 2] == ' ')
		document.querySelector(".msg").innerHTML = "And";
	else
		document.querySelector(".msg").innerHTML = "Write...";

}

function text_Generation(as) {
	let x = as[Math.floor(Math.random() * as.length)];
	return (x);
}
function My_filter(text)
{
	let arr = [];
	let index = 0;
	while (index < text.length)
	{
		if (is_alphabet(text[index]) == 1 || text[index] == ' ')
			arr.push(text[index].toLowerCase());

		index++;
	}
	return (arr);
}

