function convertToRoman(num) {
    if (!+num){return false;}		
       let	digits = String(num).split(""),
           romanSymbols = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                  "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                  "","I","II","III","IV","V","VI","VII","VIII","IX"],
           romanNum = "",
           i = 3;
       while (i--)
           romanNum = (romanSymbols[+digits.pop() + (i * 10)] || "") + romanNum;
       return Array(+digits.join("") + 1).join("M") + romanNum;
   }
   
   console.log(convertToRoman(3999));
function separateUnits(num) { 
    let number = num.toString().split('');
    let multiplier = 1;  

    for (let i = number.length - 1; i >= 0; i--) {
        number[i] *= multiplier;
        multiplier *= 10;
    }
    return number;
}
separateUnits(2134);