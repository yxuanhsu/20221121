var song
var songIsplay=false
var amp
function preload(){
  song = loadSound("Catch Me If I Fall - NEFFEX.mp3");
}
function mousePressed()
  {
    if(!songIsplay){
      song.play()
      songIsplay = true
      amp=new p5.Amplitude()
  
    }
    else{
      song.pause()
      songIsplay = false
  
    }
    
  }

  function setup() {
	createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
}

  function draw(){
  
  background("#E6E6F2")
  textSize(40)
  text("許芸瑄 409210464",50,50)
  push()
  translate(width/2,height/2)//把0,0移到中間
  
 
      fill("#272727")
      quad(-160,-90,-250,240,250,240,160,-90)//頭髮 
      fill("#FFBD9D")
      ellipse(-200,10, 80)//左耳
      fill("#FFBD9D")
      ellipse(200,10, 80)//右耳
      fill("#FFBD9D")
      ellipse(0,0,400)//臉
      line(0,-30, 0,20)//鼻子
      line(0,20, 20,20)//鼻子下
      
      fill("#272727")
	    arc(0,-70,390,300,180,0)//瀏海
      
      

      fill(0)
      ellipse(-80,-20,40,50)//左眼 
      fill(0)
      ellipse(80,-20,40,50)//右眼

      fill("#FF6670")
      ellipse(120,40,40,20)//右腮紅
      fill("#FF6670")
      ellipse(-120,40,40,20)//左腮紅
      
      //嘴巴
      fill(255,0,0)
      arc(0,100,200,100,0,180)  //下弧
      fill(255)
      if(mouseIsPressed)
      {   //mouseIsPressed為true，代表有按下滑鼠
        arc(0,99,200,0,0,180)   //上弧
      }
      else
      {   //mouseIsPressed為false，代表沒有按下滑鼠
        arc(0,99,200,20,0,180) //上弧
      }
      
      if(!songIsplay){
        arc(0,100,200,100,0,180)//沒有播放
      }
      else{
        vol = amp.getLevel()//取得聲音值
        arc(0,100,200,map(vol,0,1,0,4)*100,0,180)
      }
      
      
  noFill()
pop()
  

  }
  
