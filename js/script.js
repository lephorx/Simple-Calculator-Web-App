let input = document.getElementById("input");
let charset = "1234567890+-*/.,%()b=c";

function Input(value) {
    console.log(value);

    // Ensure value is a string
    value = String(value);
    
    // if input field outputed a invalid input, clear it
    if(input.value === 'invalid input'){
        input.value = '';
    }

    // Validae: If any character from the inputfield is not in charset, it's invalid
    if (![...input.value].every(char => charset.includes(char)) || ![...value].every(char => charset.includes(char))) {
        input.value = "invalid input";
        console.log("invalid input");
        return;
    }
    // If 'b' is pressed, remove the last character
    else if (value === 'b') {
        if(input.value === "") return;
        if(input.value === "undefined") input.value = "";
        if(input.value === "invalid input") input.value = "";
        input.value = input.value.slice(0, -1);
    }
    else if(value === 'c'){
        input.value = '';
    }
    // If '=' is pressed, evaluate the expression
    else if (value === '=') {
        try {
            if(input.value === "")  return;
            input.value = safeEvaluate(input.value);
        }
        catch (error) {
            input.value = "invalid input";
        }
    }
    // Otherwise, append the valid character
    else {
        input.value += value;
    }
}

function safeEvaluate(expression) {
    return new Function('return ' + expression)();
}
