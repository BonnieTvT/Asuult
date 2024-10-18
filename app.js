const questionEl=document.querySelector('.question');
const choiceEl=document.querySelector('.choice');
const result=document.querySelector('.result');
const nextBtn=document.querySelector('.nextBtn');
let quiz=[
	{
		question:"What is the capital of France?",
		choice:['Berlin','Madrid','Paris','Rome'],
		correct:'Paris'
	},
		{
		question:"What is 63:9",
		choice:['3','9','8','7'],
		correct:'7'
	},
		{
		question:"Which one is not gen Alpha word?",
		choice:['Sigma','Skibidi','Cooked','River'],
		correct:'River'
	},
		{
		question:"What does red and blue mix?",
		choice:['Purple','brown','Black','yellow'],
		correct:'Purple'
	},
];
let now=0;
function display(){
	questionEl.innerText=quiz[now].question;
	quiz[now].choice.forEach(data=>{
		console.log(data);
		let btn=document.createElement('button');
		btn.innerText=data;
		console.log(btn);
		choiceEl.appendChild(btn);
		btn.addEventListener('click',()=>checkAnswer(data));
	});
	nextBtn.style.display="none";
}
function checkAnswer(data){
	// alert(data);
	if(data==quiz[now].correct){
		result.innerText="Correct!";
	}else{
		result.innerText="Wrong! Answer is "+quiz[now].correct;
	}
	nextBtn.style.display="block";
}
nextBtn.addEventListener('click', ()=>{
	now++;
	questionEl.innerText="";
	choiceEl.innerHTML="";
	if(now==quiz.length){
		result.innerText="Quiz finished";
		nextBtn.style.display="none";
	}
	display();
});
display();