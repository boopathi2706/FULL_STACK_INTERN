
var result=document.getElementById("result");
var score=document.getElementById("score");
let random=Math.trunc( Math.random() * 20)+1;
var num=document.getElementById("numbers");
var high_score=document.getElementById("high");
var checkbtn=document.getElementById("check");
var high=0;
console.log(random)

const check=()=>{
     var value=document.getElementById('value').value;
     if(value===""){
         result.textContent="🔢 Enter Number first..";
          result.style.color='blue';
     }
     else if(value==random){
         result.textContent="✅ Correct Answer..";
         result.style.color='green';
            high=parseInt(score.textContent);
            high_score.textContent=(parseInt(high_score.textContent)+parseInt(score.textContent)).toString();
         num.textContent=random;

     }
     else{
        result.textContent="❌ Wrong Answer....";
        result.style.color='red';
        if(parseInt(score.textContent)>0){
        score.textContent=(parseInt(score.textContent)-1).toString();
        }
        else if(parseInt(score.textContent)==0){
            checkbtn.style.display='none';

        }
     }
}




const refer=()=>{
    random=Math.trunc( Math.random() * 20)+1;
    console.log(random)
    score.textContent=parseInt(20).toString();
     result.textContent="Start Gaming....";
        result.style.color='white';
         num.textContent='?';
         checkbtn.style.display='flex';
}