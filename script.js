var year = document.querySelector("#year");
var button = document.querySelector("button");
var output = document.querySelector("#output");
var Name = document.querySelector("#nameValue");

function failureMessageColor() {
    document.getElementById("output").style.color = "red";
}

function successMessageColor() {
    document.getElementById("output").style.color = "green";
}

function IsPrimeNumber() {
    var nameValue = Name.value;
    if (nameValue !== '') { //if name is not empty
        var dob = year.value;
        var date, month;

        //everything except numbers
        var regex = /[^0-9/]+/
        var pos = dob.search(/[/]/);
        //console.log(pos);
        //console.log(dob[pos])

        if (dob.length > 4 && regex.test(dob) !== true && pos === 2 && ((dob[pos + 1] || dob[pos] + 2 || dob[pos - 1]) !== '/')) {
            var date = ("" + dob).split('').slice(0, 2).join('');
            var month = ("" + dob).split('').slice(-2).join('');
            if (date > 31 || month > 12 || (date > 29 & month == 02)) {
                output.innerText = "invalid date";
                failureMessageColor();
            }
            else {
                var dates = ("" + date).split('');
                var months = ("" + month).split('');
                var dateMonth = dates.concat(months);
                //console.log(dateMonth)
                var number = Number(dateMonth.join(''));
                //console.log(number)

                //so trying to divide it by all other than 1 and itself to find non prime in a for loop
                var prime = 1;
                for (var i = 2; i < number; i++) {
                    if (number % i === 0) {
                        prime = 0;
                    }
                }
                if (prime === 1) {
                    output.innerText = "Your Date of birth is a prime number, Screenshot this and share on a social media!";
                    successMessageColor();
                }
                else {
                    output.innerText = "Your Date of birth is not a prime number";
                    failureMessageColor();
                }
            }

        }
        else {
            output.innerText = "please enter a date of birth in the mentioned format DD/MM";
            failureMessageColor();
        }
    }
    else { //if name is empty
        output.innerText = "Enter the name please";
        failureMessageColor();
    }
}
button.addEventListener("click", IsPrimeNumber);