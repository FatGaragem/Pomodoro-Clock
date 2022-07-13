//CONSTRUÇÃO DA CLASSE POMODORO

window.onload= function(){
    
    
    class pomodoro{

    constructor(sec,work,rest,rest2,mark){
  
      this._Sec=sec
       this._Work=work
        this._Rest=rest
         this._Rest2=rest2
          this._Mark=mark}
  
  
  secDown(){
      
      document.getElementById("segW").innerHTML=this._Sec
         document.getElementById("mark").innerHTML=this._Mark
        
          
  
      this._Sec --
      
       console.log(restTime)
      
        if(restTime==false){
          this.workDown()
  }
         else if(restTime==true && this._Mark < 4){     
           this.restDown1()
  }
          else if(restTime==true && this._Mark >= 4){
            this.restDown2() 
  }
  }
  
  
  
  
  workDown(s,w){
    if(animation==true){
        work.style.display="none"
         document.getElementById("h1W").innerHTML="WORK"
          document.getElementById("minW").innerHTML=this._Work
           setTimeout(()=>{work.style.display="block"},1000) 
             animation=false}

  else{
      document.getElementById("minW").innerHTML=this._Work
    
    
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
              animation=true
  }}
  }
  
  
      restDown1(s,r){
        if(animation==true){
            work.style.display="none"
             document.getElementById("minW").innerHTML=this._Rest
              document.getElementById("h1W").innerHTML="REST"
               setTimeout(()=>{work.style.display="block"},1000) 
                 animation=false}
        else{
            document.getElementById("minW").innerHTML=this._Rest
        
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
                  animation=true
  }}
  }
  
          
  
  restDown2(s,r){
    if(animation==true){
        work.style.display="none"
         document.getElementById("minW").innerHTML=this._Rest2
          document.getElementById("h1W").innerHTML="REST"
           setTimeout(()=>{work.style.display="block"},1000) 
             animation=false}
        else{
      document.getElementById("minW").innerHTML=this._Rest2
       s=this._Sec
        r=this._Rest2
         if(s==0 && r > 0){
          this._Rest2--
           this._Sec = 5
           
      }
      else if(s==0 && r==0 ){
          this._Sec=5
           this._Rest2=5
            this._Mark++
             restTime=false
              animation=true
              console.log("TESTANDO")
}
}

}
  
  pauseBtn(){
     work.style.display="none"
      clearInterval(contador)
 }
  
  continueBtn(){
    work.style.display="block"
      contador =setInterval(() => {start.secDown()}, 1000)
}
   
resetClock(){
    work.style.display="none"
    clearInterval(contador)
     this._Sec=5
       this._Work=5
        this._Rest=2
         this._Rest2=5
          animation=true
           restTime=false      
           document.getElementById("minW").innerHTML=this._Work
            contador =setInterval(() => {start.secDown()}, 1000)
           setTimeout(()=>{work.style.display="block"},1000) 
      
     
   }


}
  //START VAR'S
  
  var start = new pomodoro(5,1,2,5,0)
   var contador = setInterval(() => {start.secDown()}, 1000);
    var restTime = false
     var animation=true
     const pause=document.querySelector('#pause')
      const cont=document.querySelector('#continue')
       const reset=document.querySelector('#reset')
       
  
//BUTTONS EVENTS LISTERNER


 pause.addEventListener("click",function(){
   start.pauseBtn()

 })
  cont.addEventListener("click",function(){
   start.continueBtn()
  
})
  
reset.addEventListener("click",function(){
    start.resetClock()
})
  
  
  
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
  
  setInterval(() => { tempo()}, 1000);}