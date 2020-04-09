(function () {
  var script = document.createElement("script");
  var expr1= document.getElementById("expr");
  script.type = "text/javascript";
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.3/MathJax.js?config=TeX-AMS-MML_HTMLorMML.js";  

  var config = 'MathJax.Hub.Config({' +
                 'extensions: ["tex2jax.js"],' +
                 'jax: ["input/TeX","output/HTML-CSS"]' +
               '});' +
               'MathJax.Hub.Startup.onload();';

  if (window.opera) {script.innerHTML = config}
               else {script.text = config}

  document.getElementsByTagName("head")[0].appendChild(script);

})();

/* The following IIFE (Immediately invoked function expression) is necessary to access the DOM once the page has fully loaded
This prevents getElementById returning "null" or "undefined" errors 
also note how specific nodes have been given Global scope using the window prefix 
This allows other factory functions to access these also */

(function(window,document) {
window.onload = init;
    function init(){
      window.TotalC =0;
      window.expr = document.getElementById("expr");
      window.pretty = document.getElementById('pretty')
      window.result = document.getElementById('result')
      window.score=document.getElementById('Score');
      window.btn=document.createElement('BUTTON');
      window.t=document.createTextNode('NEXT QUESTION?');
      btn.setAttribute("style","color:red;font-size:23px");
      console.log(expr);

   }

})(window,document);

var imported = document.createElement('script');
imported.src = 'https://unpkg.com/mathjs@6.2.3/dist/math.js';
document.head.appendChild(imported);
var letters=["x","y", "z", "t", "c"];
var letters2=["a","m","s", "u", "v"];  





function AlgebraQ() {
  var a= Math.floor(1+Math.random()*10);
  var b=Math.floor(Math.random()*10);
  var c=Math.floor(1+Math.random()*10);
  letter=letters[Math.floor(Math.random()*5)];
  letter2=letters2[Math.floor(Math.random()*5)];
  const ex=document.getElementById('e');
  const quad=document.getElementById('d');
  const equation= (a==1 && c==1)? (`${letter}+${b}`):(c==1)?(`${a}${letter}+${b}`):(a==1)?(`${letter}^${c}+${b}`):(b==0)?(`${a}${letter}^${c}`):(`${a}${letter}^${c}+${b}`);
  const A=(a==1 && c==1)?(`${letter2}-${b}`):(c==1)?(`(${letter2}-${b})/${a}`):(a==1)?(`(${letter2}-${b})^(1/${c})`):(b==0)?(`(${letter2}/${a})^(1/${c})`):(`((${letter2}-${b})/${a})^(1/${c})`);
  var x=document.getElementById("Hint");
  x.innerHTML='$$'+ math.parse(`${letter}`).toTex() + '=' + math.parse(A).toTex()+'$$';
  MathJax.Hub.Queue(["Typeset",MathJax.Hub,"Hint"]);
  ex.innerHTML=`<p>Make ${letter} the subject of:  ` +`\\(`+  math.parse(`${letter2}==${equation}`).toTex()+`\\) </p>`;
  MathJax.Hub.Queue(["Typeset",MathJax.Hub,"e"]);
  return A;
};



 function printRatio (value) {
      var a=(math.format(value, { fraction: 'ratio' }));
      return a;
  //this removes infinite recurring decimals like 1/7, 0.(33333) etc & gives a tidier output
   }


function StraightLine() {
    var y1=Math.floor(1+Math.random()*10);
    var y2=Math.floor(1+Math.random()*10);
    var x1=Math.floor(1+Math.random()*10);
    var x2=Math.floor(1+Math.random()*10);
    if (x2!==x1){
        var M=(y2-y1)/(x2-x1);
        var m=(y2-y1==0)?(0):(Number.isInteger(M))?(M):printRatio(math.fraction(M));
        const q1=document.getElementById("q1");
        const e1=document.getElementById("Hint1");
        q1.innerHTML=`<p>Find the equation of the straight line which passes through the points (${x1},${y1}) & (${x2},${y2}). Write the values for C & m in the boxes provided</p>`;
        var C =(Number.isInteger(M*x1))?(y1-M*x1):printRatio(math.fraction(y1-M*x1));
        console.log(M,m,C);
        var answer1=(m==0)?(`y==${C}`):(m==1)?(`y==x+${C}`):(m==-1)?(`y==-x+${C}`):(C==0)?(`y==${m}x`):(C<0)?(`y==${m}x-${C*(-1)}`):(m<0)?(`y==(${m})x+${C}`):(`y==${m}x+${C}`)
        e1.innerHTML='$$'+math.parse(answer1).toTex()+'$$';
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, "Hint1"]);
    }
    else {
       StraightLine();
    }

   
  }

function simEqns(){
    var a=Math.floor(1+Math.random()*10);
    var b=Math.floor(1+Math.random()*10);
    var c=Math.floor(1+Math.random()*10);
    var d=Math.floor(1+Math.random()*10);
    var e=Math.floor(1+Math.random()*10);
    var f=Math.floor(1+Math.random()*10);
    var Sim=document.getElementById("sim");
    var Sim2=document.getElementById("sim2");
    var sim1=`${a}x+${b}y`;
    var sim3=`${d}x+${e}y`;
    Sim.innerHTML='$$'+math.parse(sim1).toTex()+'='+`${c}`+'$$';
    Sim2.innerHTML='$$'+math.parse(sim3).toTex()+'='+`${f}`+'$$';
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, "sim"]);
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, "sim2"]);
}


function hideDef(props){
    if (props.nextElementSibling.style.display!=='none'){
       props.nextElementSibling.style.display='none';
       props.innerHTML="Show Definition";
       
    }  else {
        props.nextElementSibling.style.display='block';
        props.innerHTML="Hide Definition";
    }
};

function hideShow(props){
    if (props.nextElementSibling.style.display!=='none'){
       props.nextElementSibling.style.display='none'
       props.innerHTML="Show Answer"
       
    }  else {
        props.nextElementSibling.style.display='block';
        props.innerHTML="Hide Answer";
    }
};

function inputOnNode(props){
    console.log(props.value);
    document.getElementById("pretty1").innerHTML=props.value;
};


function Question() {
  var Answer=AlgebraQ();
  let parenthesis = 'keep';
  score.innerHTML=`you got ${TotalC} correct`;
  expr.value='';
  result.innerHTML=''
  pretty.innerHTML=''
  if (document.getElementById("changeSub").contains(btn)){
    document.getElementById("changeSub").removeChild(btn);
  }
  expr.oninput= function () {
    var YourAns='$$'+math.parse(expr.value).toTex({parenthesis: parenthesis}) + '$$';
    pretty.innerHTML=YourAns;
    MathJax.Hub.Queue(["Typeset",MathJax.Hub,"pretty"]);
    
    
    if (expr.value==''){
       result.innerHTML='';
    }  
    else if (expr.value!=Answer){
       result.innerHTML="Keep Trying";
    } 
    else {
       result.innerHTML="Correct!!";
       result.style.backgroundColor = "lightblue";
       TotalC+=1;
       btn.appendChild(t);
       document.getElementById("changeSub").appendChild(btn);
       btn.addEventListener('click', Question);
    }  
    
}
};









  
