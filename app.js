var word = prompt("enter word")
var abc=word.toLowerCase()
var vowel = ["a","e","i","o","u"]
vowelCount=0
for(i=0; i< abc.length; i++)
    for(var j=0;j<vowel.length;j++){
if(abc[i]===vowel[j])
    vowelCount++
    }
    alert(vowelCount)

