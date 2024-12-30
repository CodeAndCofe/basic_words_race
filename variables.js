
function incrmentS()
{
	Scount += 1;
	document.querySelector(".sec span").innerHTML = Scount;
}

function endGame()
{
	let num = 0;
	pop.classList.add("end_show");
	clearInterval(inter);
	document.querySelector(".a").innerHTML = Scount;
	document.querySelector(".b").innerHTML = keyCount;
	document.querySelector(".back").addEventListener("click", ()=>
	{
		location.reload();
	});
}

function start()
{
	document.addEventListener("keydown", (e)=>
		{
			if (is_alphabet(e.key) === 1)
			{
				if (e.key == text[i])
				{
					is_espace();
					is_correct = 1;
					document.getElementById(i).style.color="green";
				}
				else{
					is_correct = -1;
					mistake();
				}
			}
			else if(e.key == ' ' && (text[i] == ' ' || i == text.length))
			{
				document.querySelector(".msg").innerHTML= "write";
				if (is_correct === 1)
					KeyWordsDisplayer();
				is_correct = 0;
			}
			else
				mistake();
			if (i === text.length || Scount === 60)
				return(endGame());
			i++;
		});
}

function comment_manager(e)
{
	return (boot_comment[e][Math.floor(Math.random() * boot_comment[e].length)]);
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



// declaration and variables
let boot_comment =
[
	["woow", "perfect", "amizing", "wonderfull", "haha! you know what you doing.", "i love that"],
	["hmmm...", "-_-", "are you right", "come on!! you all most get to the end", "use your mind please"],
	["omg! you cant even write!!", "just press a correct key", "hmm? are you a child??", "where is your mom", "why i even watch this", "i hate you :|"]
];
let abc=
[
	"The quiet hum of a distant train reverberates through the night, its rhythmic sound almost soothing, like the heartbeat of the city itself. It’s a reminder of journeys taken and those yet to begin, a constant flow.",
	"A freshly brewed cup of coffee in the morning feels like the start of something new, an invitation to awaken the senses and prepare for the day ahead. The rich aroma fills the air with promise and hope.",
	"The rustling of autumn leaves beneath your feet as you walk through a park is a subtle reminder that seasons change, that life is cyclical. In every falling leaf, there’s a story of letting go and renewal",
	"Walking into an old bookstore, the musty smell of paper and ink fills your senses, transporting you to another time. Each book is a world waiting to be explored, a place where imagination has no boundaries.",
	"On a quiet evening, when the world feels still, you can hear the sound of crickets chirping in the distance. It’s the soundtrack of nature’s peacefulness, a simple reminder that life moves at its own pace.",
	"The sparkle of city lights at night, seen from a distance, resembles a constellation on Earth. It’s as if the stars have descended and taken root in human hands, creating a galaxy of dreams and possibilities.",
	"Every wave that crashes against the shore carries with it a sense of timelessness, a memory of the deep. The ocean is both eternal and ever-changing, reflecting the pull of the moon and the rhythms of life.",
	"The feeling of sand between your toes on a warm beach transports you to a state of pure relaxation. With the sound of the ocean lapping against the shore, the world feels distant, and worries are forgotten.",
	"Walking through an art gallery, the silent walls are filled with stories and emotions that words can’t quite capture. Each painting is a glimpse into another mind, a reflection of thoughts frozen in time.",
	"A foggy morning holds a certain magic, where the world is muted and mysterious. Shapes emerge slowly from the mist, and you feel as though you’re stepping into a dream where anything can happen.",
	"The first rays of morning sunlight breaking through the curtains have a unique quality—like a fresh start, a new opportunity. It feels as though the day has been waiting for you, ready to unfold in your hands.",
	"On a summer afternoon, when the heat is palpable and the sky is a deep, unbroken blue, everything feels suspended. The world moves in slow motion, and even the birds seem to take their time as they fly by.",
	"The warmth of the sun on your skin after a long winter feels like a gentle embrace, a welcome relief. It reminds you that even the coldest seasons eventually give way to warmth, bringing new growth and life.",
	"There something meditative about watching clouds drift across the sky. They move slowly, as if in no hurry, reminding us that sometimes, we need to slow down and let the world unfold at its own pace.",
	"There an undeniable charm in old rustic buildings that tell stories of the past Each crack in the walls each worn-out step, carries with it a history that speaks of time, of lives lived, and of moments forgotten."
];
const pop = document.querySelector(".end");
const btn = document.querySelector(".start");
const h = document.querySelector("div .text");
let text = text_Generation(abc);
let i = 0;
let keyCount = 0;
let Scount = 0;
let is_correct = 0;
let inter;
text = My_filter(text);
text_displayer();
is_espace();

btn.addEventListener("click", ()=>
{
	btn.classList.add("rem");
	btn.classList.remove(".start");
	inter = setInterval(incrmentS, 1000);
	start();
}
);
