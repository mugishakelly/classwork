function CustomAlert() {
    
    this.render = function() {
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        
        var numberEntered = document.getElementById('txtNumber').value;
        var counter = 1;
        var fib = [];


        if (numberEntered == 0) {
            fib = [0];
            document.getElementById('dialogboxbody').innerHTML = fib;
        } else if(numberEntered == 1){  
            fib = [1];
            document.getElementById('dialogboxheady').innerHTML = fib;
        } else if(numberEntered == 2){
            fib = [1, 1];
            document.getElementById('dialogboxbody').innerHTML = fib;
        } else if(numberEntered > 2){
            fib = [1, 1];
            while (counter < (numberEntered - 1)) {
                fib.push(fib[counter] + fib[counter - 1]);
                counter++;
            }
            document.getElementById('dialogboxbody').innerHTML = fib;
        }

 
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = 100;
        
        dialogbox.style.left = (winW/2) - (550 * .5) + "px";
        dialogbox.style.top = 20;
        // dialogbox.style.display = "block";
        
        document.getElementById('dialogboxhead').innerHTML = "Your Fibonacci Sequence is: ";
        // document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button class="button" onclick="Alert.ok()">OK</button>';
    }
    
    this.ok = function(){
        Alert ("you sequence is over");
    }
       
}

var Alert = new CustomAlert();
