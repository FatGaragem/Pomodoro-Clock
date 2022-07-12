//CONSTRUÇÃO DA CLASSE POMODORO

class pomodoro{

  constructor(sec,work,rest,rest2,mark){

    this._Sec=sec
    this._Work=work
    this._Rest=rest
    this._Rest2=rest2
    this._Mark=mark}


secDown(){
    
    document.getElementById("segW").innerHTML=this._Sec
    document.getElementById("minW").innerHTML=this._Work
    document.getElementById("segR").innerHTML=this._Sec
    document.getElementById("mark").innerHTML=this._Mark

    
    this._Sec --
    console.log(restTime)
    
    if(restTime==false){
        this.workDown()
        
    }
    else if(restTime==true && this._Mark < 4){      
this.restDown1()
    }
    else{
this.restDown2() 
    }
}

workDown(s,w){
    s=this._Sec
    w=this._Work
    if(s==0 && w > 0){
        this._Work--
        this._Sec=5  
    }
    else if(s==0 && w ==0){
        this._Work=5
        this._Sec=5
        restTime=true
    }}


    restDown1(s,r){
        document.getElementById("minR").innerHTML=this._Rest
        s=this._Sec
        r=this._Rest
        if(s==0 && r > 0){
            this._Rest--
            this._Sec = 5
             
        }
        else if(s==0 && r==0 ){
            this._Sec=5
            this._Rest=2
            this._Mark ++
            restTime=false
        }}
        

restDown2(s,r){
    document.getElementById("minR").innerHTML=this._Rest2
    s=this._Sec
    r=this._Rest2
    if(s==0 && r > 0){
        this._Rest2--
        this._Sec = 5
         
    }
    else if(s==0 && r ==0 ){
        this._Sec=5
        this._Rest2=5
        this._Mark++
        restTime=false
    }
}


}
//START

var start = new pomodoro(5,5,2,5,0)
var contador = setInterval(() => {start.secDown()}, 1000);
var restTime = true








//HORÁRIO NORMAL

function tempo(hora, seg){
    hoje=new Date();
    hora = hoje.getHours()
    min= hoje.getMinutes()
    seg = hoje.getSeconds()

   document.getElementById("hor").innerHTML=hora
   document.getElementById("min").innerHTML=min
   document.getElementById("seg").innerHTML=seg
}

setInterval(() => { tempo()}, 1000);