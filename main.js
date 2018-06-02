	window.onload=function(){
  		
  	//	document.getElementById('output').style.visibility='hidden';
	 	
	 	document.getElementById('lbsInput').addEventListener ('input',function (e){

	 		//document.getElementById('output').style.visibility='visible';
			
			let lbs = e.target.value; //rasac chavwert inputshi imis mnishvnelobas amoigebs
			
			document.getElementById('gramsOutput').innerHTML=(lbs/0.0022046).toFixed(3);
			
			document.getElementById('kgOutput').innerHTML=(lbs/2.20462262).toFixed(3);
			
			document.getElementById('ozOutput').innerHTML=(lbs*16).toFixed(3);
		});

	 			document.getElementById('KgInput').addEventListener ('input',function(m){
	 			
	 			let kg=m.target.value;
	 			
	 				document.getElementById('lbOutput').innerHTML=(kg*2.20462262).toFixed(3);
	 				document.getElementById('grOutput').innerHTML=(kg*1000).toFixed(3);
	 				document.getElementById('ouncesOutput').innerHTML=kg*35.2739619.toFixed(3);

	 	})

	 	document.getElementById('OzInput').addEventListener('input',function(o){

	 		let oz= o.target.value;
	 		

	 		document.getElementById('ozTokgOutput').innerHTML=oz*0.0283495231.toFixed(3);
	 		document.getElementById('ozToGrams').innerHTML=oz*28.3495231.toFixed(3);
	 		document.getElementById('ozToPounds').innerHTML=oz*0.0625.toFixed(3);

	 	})		

}

			

