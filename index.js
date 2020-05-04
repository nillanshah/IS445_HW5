function primeCheck(n){
    if (n === 2){
        return true;
    } else {
        for (var i = 2; i < n; i++){
            if(n % i === 0){
                return false;
            }
        }
        return true;  
    }
}

function validator(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    if (num1 < 2 || num1 > 100 || num2 > 100 || num2 < 2 || isNaN(num1) || isNaN(num2)){
        document.getElementById("message").innerHTML = "<p style = 'color: red;'> Invalid input, please try again </p>";
    } else {

        tempAr = []

        if (num1 > num2){
            for (i = num2; i <= num1; i++){
                if (primeCheck(i)){
                    tempAr.push(i);
                }
            }

        } else if (num1 < num2){
            for (i = num2; i >= num1; i--){
                if (primeCheck(i)){
                    tempAr.push(i);
                }
            }
        }
        tempAr.sort()

        document.getElementById("message").innerHTML = "<p style = 'color: cyan;'>There are " + tempAr.length + " prime numbers</p> <p style = 'color: red;'>" + tempAr + "</p>";

    }
}

document.getElementById("submit").addEventListener("click", validator);



