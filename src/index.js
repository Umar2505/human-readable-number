module.exports = function toReadable (number) {
        if(number==0) {
            return "zero"
        }
        if(number==10) {
            return "ten"
        }
        var a=0
        var w=0
        var c=0
        var from1To9 = [
            "one",
            "two",  
            "three", 
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine"
        ]
        var from10To19 = [
            "ten",
            "eleven",  
            "twelve",  
            "thirteen",  
            "fourteen",  
            "fifteen",  
            "sixteen",  
            "seventeen",  
            "eighteen",  
            "nineteen"
        ]    
        var from20To90 = [
            "ten",
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety"
        ]        
        var hundred = [
            "hundred"
        ]
        if(number<10 && number>=1) {
            return from1To9[number-1]
        }else if(number>=11 && number<=19) {
            return from10To19[number-10]
        }
        if(number>=100) {
            var b=0
            a=Math.trunc(number/100)
            w=Math.trunc(number/10%10)
            c=Math.trunc(number%10)
            var res=from1To9[a-1] + " " + hundred[0]
            if(c==0 && w!=0) {
                res+=" " + from20To90[w-1]
                return res
            }
            if(w==0 && c==0) {
                return res
            }
            if(Math.trunc(number%100)==10) {
                b=1
                res+=" " + from10To19[b-1]
                return res
            }
            if(Math.trunc(number%100)==11) {
                b=2
                res+=" " + from10To19[b-1]
                return res
            }
            if(Math.trunc(number%100)==12) {
                b=3
                res+=" " + from10To19[b-1]
                return res
            }
            if(Math.trunc(number%100)==13) {
                b=4
                res+=" " + from10To19[b-1]
                return res
            }
            if(Math.trunc(number%100)==14) {
                b=5
                res+=" " + from10To19[b-1]
                return res
            }
            if(Math.trunc(number%100)==15) {
                b=6
                res+=" " + from10To19[b-1]
                return res
            }
            if(Math.trunc(number%100)==16) {
                b=7
                res+=" " + from10To19[b-1]
                return res
            }
            if(Math.trunc(number%100)==17) {
                b=8
                res+=" " + from10To19[b-1]
                return res
            }
            if(Math.trunc(number%100)==18) {
                b=9
                res+=" " + from10To19[b-1]
                return res
            }
            if(Math.trunc(number%100)==19) {
                b=10
                res+=" " + from10To19[b-1]
                return res
            }
            if(w==0 && c!=0) {
                res+= " " + from1To9[c-1]
                return res
            }
            if(w!=1 && w!=0) {
                res+=" " + from20To90[w-1] + " " + from1To9[c-1]
                return res
            }
        }else if(number>=20 && number<100) {
            a=0
            w=Math.trunc(number/10)
            c=Math.trunc(number%10)
            if(c==0) {
                res = from20To90[w-1]
                return res
            }else {
                res=from20To90[w-1] + " " + from1To9[c-1];
                return res
            }
        }
}
