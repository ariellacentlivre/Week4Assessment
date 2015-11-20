(function(){	
	
	var animals = [
		{name:"cow", sound:"moo"},
		{name:"sheep", sound: "bash"},
		{name:"dog", sound:"arf"}
	];

	function seeAndSay () {
		animals.forEach(function(animal){
		 animal.gray="gray";
		 console.log("I am a "+animal.name+". I make the sound "+animal.sound+", my coat is "+animal.gray);
		});
	}

	seeAndSay();

})();

