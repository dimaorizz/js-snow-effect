function initFlake(){
	return `
	<div class="snowFlake">
			
		</div>
	`
}

function drawFlakes(){
	const $snow = document.getElementById('snow');
	for(let i = 0; i < settings.snowAmount; i++){
		$snow.innerHTML += initFlake();
	}
	$snowFlakes = document.querySelectorAll('.snowFlake'); // get all flakes into an array
	// iterating snowFlakes
	for(let i = 0; i < $snowFlakes.length; i++){
		$snowFlakes[i].style.left = `${Math.floor(Math.random() * settings.$snowPlace.getBoundingClientRect().right)}`;
		$snowFlakes[i].style.top = `${Math.floor(Math.random() * settings.$snowPlace.getBoundingClientRect().bottom)}`;
	}
}

function animateFlakes(){
	for(let i = 0; i < $snowFlakes.length; i++){
		snowFlakePos.x = parseInt($snowFlakes[i].style.left); // get flake pos from str "nnn px";
		snowFlakePos.y = parseInt($snowFlakes[i].style.top);
		
		$snowFlakes[i].style.left = snowFlakePos.x + Math.floor(Math.random() * 0); // move a flake x
		$snowFlakes[i].style.top =  snowFlakePos.y + Math.floor(Math.random() + 1); // move a flake y
		
		if(snowFlakePos.y > settings.$snowPlace.getBoundingClientRect().bottom){
			$snowFlakes[i].style.top = 0;
			snowFlakePos.y = 0;
		}
	}
}
function snowFall(){
	drawFlakes();
	setInterval(animateFlakes, 1000 / 60);
};

let $snowFlakes = [];

const settings = {
	snowSize: 5, // px
	snowAmount: 75, // amount of snowflakes
	$snowPlace: document.getElementById('snow'),
}
let snowFlakePos = {
	x: 0,
	y: 0,
}

snowFall();