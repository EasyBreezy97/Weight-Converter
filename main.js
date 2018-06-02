	window.onload=function(){
  		
  		document.getElementById('output').style.visibility='hidden';
	 	
	 	document.getElementById('lbsInput').addEventListener ('input',function (e){

	 		document.getElementById('output').style.visibility='visible';
			
			let lbs = e.target.value; //rasac chavwert inputshi imis mnishvnelobas amoigebs
			
			document.getElementById('gramsOutput').innerHTML=lbs/0.0022046;
			
			document.getElementById('kgOutput').innerHTML=lbs/2.20462262;
			
			document.getElementById('ozOutput').innerHTML=lbs*16;
		});

}
