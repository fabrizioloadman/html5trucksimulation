var ImageCounter = 0;
var CurrentImageName = "FLA-";
var CurrentImage = CurrentImageName+ImageCounter;
var Timer = 0;

$(document).ready(function () {
		EnableButton("btnLoadWeight");
		DisableButton("btnLowTareDown");
		DisableButton("btnRestart");				
    $('.BooksAndLocationsWidget').draggable();
    $('#widgetDefault').show();  
		
		$("#btnRestart").on("click",function(){
			Restart();
		});
		
		$("#btnLoadWeight").on("click",function(){
			Restart();
			DisableButton("btnLoadWeight");
			EnableButton("btnLowTareDown");
			EnableButton("btnRestart");				
			StartSimulation();
		});
		
		$("#btnLowTareDown").on("click",function(){			
			EnableButton("btnLoadWeight");
			DisableButton("btnLowTareDown");
			EnableButton("btnRestart");				
			ReverseSimulation();
		});
});


function closewidget(pObject) {
    $(pObject).parent().hide();
}

function Restart(){
	ImageCounter = 0;
	CurrentImageName = "FLA-";
	CurrentImage = CurrentImageName+ImageCounter;
	$(".BodyBooksAndLocationsWidget").css('background-image','url(images/FLA-0.png)');	
	EnableButton("btnLoadWeight");
	DisableButton("btnLowTareDown");
	DisableButton("btnRestart");				
}

function StartSimulation(){	
	if(ImageCounter<62){
		CurrentImageName = VerifyStatusArmAndFork();
		$(".BodyBooksAndLocationsWidget").css('background-image','url(images/'+CurrentImageName+ImageCounter+'.png)');		
		ImageCounter++;
		
		setTimeout(function() {			
			StartSimulation();
		}, 15);
		$(".BodyBooksAndLocationsWidget0").css('background-image','url(images/'+CurrentImageName+ImageCounter+'.png)');
			}							
}

function ReverseSimulation(){
	if(ImageCounter<123){
		CurrentImageName = VerifyStatusArmAndFork();
		$(".BodyBooksAndLocationsWidget").css('background-image','url(images/'+CurrentImageName+ImageCounter+'.png)');		
		ImageCounter++;
		
		setTimeout(function() {			
			ReverseSimulation();
		}, 15);
		$(".BodyBooksAndLocationsWidget0").css('background-image','url(images/'+CurrentImageName+ImageCounter+'.png)');
			}
}

function VerifyStatusArmAndFork(){
	var checking = 0;
	
	if(!$('#chkArmWorking').is(':checked'))
		checking++;	
		
	if(!$('#chkForkWorking').is(':checked'))
		checking+=2;
		
	switch(checking){
		case 0: return "FLA-";
					  break;
		case 1: return "ANW-";
					  break;
		case 2: return "FNW-";
			   		break;
		case 3: return "BNW-";
					  break;
	}		
}

function DisableButton(pButtonID){
	$("#"+pButtonID).attr("disabled", true);
	$("#"+pButtonID).css("background","lightgray");
	$("#"+pButtonID).css("color","darkgray");
}

function EnableButton(pButtonID){
	$("#"+pButtonID).attr("disabled", false);
	$("#"+pButtonID).css("background","darkgreen");
	$("#"+pButtonID).css("color","white");
}
