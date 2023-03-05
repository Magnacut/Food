import $ from 'jquery';
import {useState,useEffect,useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import foodData from "./foodlist.json";
import {isMobile} from 'react-device-detect'
function Header(props){
 return<>
 <div id="Header" onClick={(event)=>{
  event.preventDefault();
  props.home();
}}>
<div id="Home">음식</div>
<input id="Input" type="text" name="title" placeholder="  음식을 입력하세요."></input>
<input id="Submit" type="button"></input>
<div id="Dark" onClick={event=>{
  event.preventDefault();
  props.dark();
 }}>Dark</div>
</div>
</>
}
function Main(){
  return
 }
 function Bottom(props){
  return<div id="Bottom">
 <div id="Blog"></div>
 <div id="Insta"></div>
 <div id="Header" onClick={event=>{
  event.preventDefault();
  props.home();
 }}>
<div id="Home">음식</div>
<input id="Input" type="text" name="title" placeholder="  음식을 입력하세요."></input>
<input id="Submit" type="button"></input>
  </div>
   </div>
 }

 function Nav(props){
  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.unshift(<li key={t.id} id="List">
      <div id={t.id} className="Title">{t.title} </div><br></br>
      <img className="Icon" src={t.photo}></img><br></br><br></br>
      <div className="Body">상극인 음식 : {t.body}</div><br></br>
      <div className="Reason">{t.reason}</div>
    </li>)
//var titles = topics.map(topic =>topic.title);
//one = <div class="title">{titles[0]}</div>
  }
  return <nav>
      <br></br>{lis}
  </nav>
}
function Circle(props){
  return <div>
    <div className="Circles1">
        <div className="Circle Circle1"></div>
        <div className="Circle Circle2"></div>
        <div className="Circle Circle3"></div>
        <div className="Circle Circle4"></div>
        <div className="Circle Circle5"></div>
        <div className="Circle Circle6"></div>
        <div className="Circle Circle7"></div>
        <div className="Circle Circle8"></div>
        <div className="Circle Circle9"></div>
        <div className="Circle Circle10"></div>
        </div>
    <div className="Circles2">
        <div className="Circle Circle1"></div>
        <div className="Circle Circle2"></div>
        <div className="Circle Circle3"></div>
        <div className="Circle Circle4"></div>
        <div className="Circle Circle5"></div>
        <div className="Circle Circle6"></div>
        <div className="Circle Circle7"></div>
        <div className="Circle Circle8"></div>
        <div className="Circle Circle9"></div>
        <div className="Circle Circle10"></div>
        </div>
    <div className="Circles3">
        <div className="Circle Circle1"></div>
        <div className="Circle Circle2"></div>
        <div className="Circle Circle3"></div>
        <div className="Circle Circle4"></div>
        <div className="Circle Circle5"></div>
        <div className="Circle Circle6"></div>
        <div className="Circle Circle7"></div>
        <div className="Circle Circle8"></div>
        <div className="Circle Circle9"></div>
        <div className="Circle Circle10"></div>
        </div>    
    <div className="Circles4">
        <div className="Circle Circle1"></div>
        <div className="Circle Circle2"></div>
        <div className="Circle Circle3"></div>
        <div className="Circle Circle4"></div>
        <div className="Circle Circle5"></div>
        <div className="Circle Circle6"></div>
        <div className="Circle Circle7"></div>
        <div className="Circle Circle8"></div>
        <div className="Circle Circle9"></div>
        <div className="Circle Circle10"></div>
        </div>    
   <div className="Circles5">
        <div className="Circle Circle1"></div>
        <div className="Circle Circle2"></div>
        <div className="Circle Circle3"></div>
        <div className="Circle Circle4"></div>
        <div className="Circle Circle5"></div>
        <div className="Circle Circle6"></div>
        <div className="Circle Circle7"></div>
        <div className="Circle Circle8"></div>
        <div className="Circle Circle9"></div>
        <div className="Circle Circle10"></div>
        </div>    
    <div className="Circles6">
        <div className="Circle Circle1"></div>
        <div className="Circle Circle2"></div>
        <div className="Circle Circle3"></div>
        <div className="Circle Circle4"></div>
        <div className="Circle Circle5"></div>
        <div className="Circle Circle6"></div>
        <div className="Circle Circle7"></div>
        <div className="Circle Circle8"></div>
        <div className="Circle Circle9"></div>
        <div className="Circle Circle10"></div>
        </div>       
  </div>
  }
/*<iframe id="inlineFrameExample"
title="Inline Frame Example"
width="300"
height="200"
src="https://forecast.io/embed/#lat=37.5266&lon=127.0403&name=Busan">
</iframe>*/

function App() {
  
  
  
  let main,MAIN,POST,id,article = null;
  const [mode,setMode] = useState('MAIN');
  const [topics, setTopics] = useState(foodData)
  const [scroll, setScroll] = useState(0);
  const [category, setCategory] = useState('all');
if(mode === 'MAIN'){
  const length=topics.length-1;
  main =
  <>
  <div id="Main">
 <div id="MainPhoto">
  <div id="BannerFrame">
    <div id="Banner"><img src="FCE032C6-1DE2-4AF1-B9B6-2A6A99072384_1_105_c.jpeg"></img></div>
  </div>
   
  <div className="Photos" onClick={(event)=>{
    event.preventDefault();
    setMode('POST');
    setScroll(0);
    
  }}><img class="Icon" src={topics[length].photo}></img></div>
  <div className="Photos" onClick={(event)=>{
    event.preventDefault();
    setMode('POST');
    setScroll(0);
  }}><img class="Icon" src={topics[length-1].photo}></img></div>
  <div className="Photos" onClick={(event)=>{
    event.preventDefault();
    setMode('POST');
    setScroll(1);
  }}><img class="Icon" src={topics[length-2].photo}></img></div>
  <div className="Photos" onClick={(event)=>{
    event.preventDefault();
    setMode('POST');
    setScroll(2);
  }}><img class="Icon" src={topics[length-3].photo}></img></div>
  <div className="Photos" onClick={(event)=>{
    event.preventDefault();
    setMode('POST');
    setScroll(3);
  }}><img class="Icon" src={topics[length-4].photo}></img></div>
  <div className="Photos" onClick={(event)=>{
    event.preventDefault();
    setMode('POST');
    setScroll(5);
  }}><img class="Icon" src={topics[length-5].photo}></img></div>
  <div className="Photos" onClick={(event)=>{
    event.preventDefault();
    setMode('POST');
    setScroll(6);
  }}><img class="Icon" src={topics[length-6].photo}></img></div>
  <div className="Photos" onClick={(event)=>{
    event.preventDefault();
    setMode('POST');
    setScroll(7);
  }}><img class="Icon" src={topics[length-7].photo}></img></div>
  <div className="Photos" onClick={(event)=>{
    event.preventDefault();
    setMode('POST');
  }}><img class="Icon" src={topics[length-8].photo}></img></div>
  <div className="Photos" onClick={(event)=>{
    event.preventDefault();
    setMode('POST');
    setScroll(8);
  }}><img class="Icon" src={topics[length-9].photo}></img></div>
  <div className="Photos" onClick={(event)=>{
    event.preventDefault();
    setMode('POST');
    setScroll(9);
  }}><img class="Icon" src={topics[length-10].photo}></img></div>
  <div className="Photos" onClick={(event)=>{
    event.preventDefault();
    setMode('POST');
    setScroll(10);
  }}><img class="Icon" src={topics[length-11].photo}></img></div>
  <div className="Photos" onClick={(event)=>{
    event.preventDefault();
    setMode('POST');
    setScroll(11);
  }}><img class="Icon" src={topics[length-12].photo}></img></div>
  <div className="Photos" onClick={(event)=>{
    event.preventDefault();
    setMode('POST');
    setScroll(12);
  }}><img class="Icon" src={topics[length-13].photo}></img></div>
  <div className="Photos" onClick={(event)=>{
    event.preventDefault();
    setMode('POST');
    setScroll(13);
  }}><img class="Icon" src={topics[length-14].photo}></img></div>
  <div className="Photos" onClick={(event)=>{
    event.preventDefault();
    setMode('POST');
    setScroll(14);
  }}><img class="Icon" src={topics[length-15].photo}></img></div>
 </div>
 <div id="SidePhoto">
  <div className="SideMenu Menu1" onClick={(event)=>{
    event.preventDefault();
    setCategory('veg');
    setMode('POST');
  }}>과일, 야채
  <div className="Line Line1"></div></div>
  <div className="SideMenu Menu2" onClick={(event)=>{
    event.preventDefault();
    setCategory('meat');
    setMode('POST');
  }}>고기
  <div className="Line Line2"></div></div>
  <div className="SideMenu Menu3" onClick={(event)=>{
    event.preventDefault();
    setCategory('etc');
    setMode('POST');
  }}>기타
  <div className="Line Line3"></div></div>
  <div className="SideMenu Menu4">dd
  <div className="Line Line4"></div></div>
  <div className="SideMenu Menu5">dd
  <div className="Line Line5"></div></div>
  <div className="SideMenu Menu6">dd
  <div className="Line Line6"></div></div>
 </div>
   </div>
  </>
}

if(mode === 'POST'){
  const lis=[];
if(category === 'all'){
  for(let i=0; i<topics.length; i++){
  lis.push(topics[i])
    }}

if(category === 'veg'){
for(let i=0; i<topics.length; i++){
  if(topics[i].category === 'veg'){
lis.push(topics[i])
  }}}

if(category === 'meat'){
for(let i=0; i<topics.length; i++){
  if(topics[i].category === 'meat'){
lis.push(topics[i])
  }}}

if(category === 'etc'){
for(let i=0; i<topics.length; i++){
  if(topics[i].category === 'etc'){
lis.push(topics[i])
  }}}
main =
<>
  <div id="Main">
  <Nav topics={lis}></Nav>
  <Circle></Circle>
 <div id="SidePhoto">
 <div className="SideMenu Menu1" onClick={(event)=>{
    event.preventDefault();
    setCategory('veg');
    setMode('POST');
  }}>과일, 야채
  <div className="Line Line1"></div></div>
  <div className="SideMenu Menu2" onClick={(event)=>{
    event.preventDefault();
    setCategory('meat');
    setMode('POST');
  }}>고기
  <div className="Line Line2"></div></div>
  <div className="SideMenu Menu3" onClick={(event)=>{
    event.preventDefault();
    setCategory('etc');
    setMode('POST');
  }}>기타
  <div className="Line Line3"></div></div>
  <div className="SideMenu Menu4">dd
  <div className="Line Line4"></div></div>
  <div className="SideMenu Menu5">dd
  <div className="Line Line5"></div></div>
  <div className="SideMenu Menu6">dd
  <div className="Line Line6"></div></div>
 </div>
 <div id="Up" onClick={(event)=>{
  event.preventDefault();
  window.scrollTo(0, 0);
 }}>↑</div>
   </div>
</>
setTimeout(function() {window.scrollTo( 0, scroll*220 )}, 100);
}
  useEffect(() => {
    for(let j=1; j<7; j++){
      for(let i=1; i<11; i++){
        $('.Circle'+i).css({'left':i*147-142+'px'});
        
        $('.Circles'+j+" "+'.Circle'+i).mouseenter(function(){
          var ran1 = Math.random()*256;
          var ran2 = Math.random()*256;
          var ran3 = Math.random()*256;
          $('.Circles'+j+" "+'.Circle'+i).css({'background-color':'rgb('+ran1+','+ran2+','+ran3+','+0.1+')'})
          $('.Circles'+j+" "+'.Circle'+i).css({'opacity':'1'})
          $('.Circles'+j+" "+'.Circle'+i).css({'transition':'opacity'})
          $('.Circles'+j+" "+'.Circle'+i).css({'width':'130px','height':'130px'}) 
          
      });
      $('.Circle'+i).mouseout(function(){
        $('.Circle'+i).css({'opacity':'0'})
        $('.Circles'+j+" "+'.Circle'+i).css({'transition':'opacity 1s ease-in'})
        $('.Circles'+j+" "+'.Circle'+i).css({'width':'100px','height':'100px'})  
    }); 
  }
  }
for(let k=1; k<7; k++){
  $(".Menu"+k).mouseover(function() {
    $(".Line"+k).css("right","0%");
   
});
  $(".Menu"+k).mouseout(function() {
    $(".Line"+k).css("right","100%");

});}
if($('#Dark').text() === "Light"){
  $('li').css({'background-color':'#333333'});
  $('#SidePhoto').css({'background-color':'#333333'});
  $('#BannerFrame').css({'background-color':'rgb(18,18,18)'});
}
else if($('#Dark').text() === "Dark"){
  $('li').css({'background-color':'rgb(250, 234, 214)'});
  $('#SidePhoto').css({'background-color':'rgb(236, 169, 88, 0.5)'});
  $('#BannerFrame').css({'background-color':'rgb(250, 235, 215, 0.8)'});
}
if(isMobile){
  $('.SideMenu').css({'width':'70px'});
  $('#Home').css({'font-size':'25px'});
  $('.Photos').css({'width':'50px','height':'50px'});
  $('.Icon').css({'width':'40px','height':'40px'});
}
});

  return (
    <>
    <Header home={()=>{
      setMode('MAIN');
      setCategory('all');
    }} dark={()=>{

      if($('#Dark').text() === "Dark"){
      $('body').css({'background-color':'#222222','color':'white'});
      $('#BannerFrame').css({'background-color':'#121212','color':'white'});
      $('#Header,#Bottom').css({'background-color':'#555555'});
      $('#SidePhoto').css({'background-color':'#333333'});
      $('#Input,#Bottom #Input').css({'background-color':'#333333'});
      $('#Dark').css({'background-color':'#555555'});
      $('li').css({'background-color':'#333333'});
      $('#Dark').text('Light');
      }

      else if($('#Dark').text() === "Light"){
        $('body').css({'background-color':'rgb(255, 255, 240)','color':'black'});
        $('#BannerFrame').css({'background-color':'rgb(250, 235, 215, 0.8)'});
        $('#Header,#Bottom').css({'background-color':'rgb(255, 255, 220)'});
        $('#SidePhoto').css({'background-color':'rgb(236, 169, 88, 0.5)'});
        $('#Input,#Bottom #Input').css({'background-color':'rgb(255, 255, 174)'});
        $('#Dark').css({'background-color':'rgb(250, 234, 214)'});
        $('li').css({'background-color':'rgb(250, 234, 214)'});
        $('#Dark').text('Dark');
        }

     
    }} ></Header>
    {main}
    {article}
    <Bottom home={()=>{
      setMode('MAIN');
      setCategory('all');
    }}></Bottom>
    </>

  );
}

export default App;
