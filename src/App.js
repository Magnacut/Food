import $ from 'jquery';
import {useState,useEffect,useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import foodData from "./foodlist.json";
import {isMobile} from 'react-device-detect'
import { useMediaQuery } from 'react-responsive'
function Header(props){
 return<>
 <div id="Header" onClick={(event)=>{
  event.preventDefault();
  props.home();
}}>
<div id="Home">Donteat</div>
{/*<input id="Input" type="text" name="title" placeholder="  음식을 입력하세요."></input>
<input id="Submit" type="button"></input>*/}
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
 <div id="Header">
<div id="Home" onClick={event=>{
  event.preventDefault();
  props.home();
 }}>Donteat</div>
<div id="Blog"><a href="https://velog.io/@magnacut/" target="_blank">
    <img src="https://pbs.twimg.com/profile_images/1228368893321736193/Ov0og7E8_400x400.jpg"></img>
   </a></div>
 <div id="Git"><a href="https://github.com/Magnacut" target="_blank">
    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img>
   </a></div>
  <div id="Insta"><a href="https://www.instagram.com/me_or_no/" target="_blank">
    <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png"></img>
   </a></div>

{/*<input id="Input" type="text" name="title" placeholder="  음식을 입력하세요."></input>
<input id="Submit" type="button"></input>*/}
  </div>
  <div id="Link">
    <div id="Guide" onClick={(event)=>{
      event.preventDefault();
      props.guide();
    }}>Site-Guide</div>
  </div>
<div id="Explain">
COPYRIGHT © 2023 SEUNGMIN LEE ALL RIGHTS RESERVED.
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
  
  
  if(isMobile){
    $('.SideMenu').css({'width':'70px'});
    $('#Home').css({'font-size':'20px','margin-left':'5px','width':'35px'});
    $('.Photos').css({'width':'50px','height':'50px'});
    $('.Icon').css({'width':'40px','height':'40px'});
    $('#Banner').css({'height':'190px','width':'300px'});
    $('#Bottom #Header').css({'display':'none'});
  }
  
  let main,MAIN,POST,id,article = null;
  const [mode,setMode] = useState('MAIN');
  const [topics, setTopics] = useState(foodData)
  const [scroll, setScroll] = useState(0);
  const [category, setCategory] = useState('all');
  const [mobile, setMobile] = useState(0);
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
    setMode('POST');
    setScroll(0);}}>전체보기
  <div className="Line Line1"></div></div>
  <div className="SideMenu Menu2" onClick={(event)=>{
    event.preventDefault();
    setCategory('veg');
    setMode('POST');
  }}>과일, 야채
  <div className="Line Line2"></div></div>
  <div className="SideMenu Menu3" onClick={(event)=>{
    event.preventDefault();
    setCategory('meat');
    setMode('POST');
  }}>고기
  <div className="Line Line3"></div></div>
  <div className="SideMenu Menu4" onClick={(event)=>{
    event.preventDefault();
    setCategory('etc');
    setMode('POST');
  }}>기타
  <div className="Line Line4"></div></div>
  <div className="SideMenu Menu5">
  <div className="Line Line5"></div></div>
  <div className="SideMenu Menu6">
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
    setMode('POST');}}>전체보기
  <div className="Line Line1"></div></div>
  <div className="SideMenu Menu2" onClick={(event)=>{
    event.preventDefault();
    setCategory('veg');
    setMode('POST');
  }}>과일, 야채
  <div className="Line Line2"></div></div>
  <div className="SideMenu Menu3" onClick={(event)=>{
    event.preventDefault();
    setCategory('meat');
    setMode('POST');
  }}>고기
  <div className="Line Line3"></div></div>
  <div className="SideMenu Menu4" onClick={(event)=>{
    event.preventDefault();
    setCategory('etc');
    setMode('POST');
  }}>기타
  <div className="Line Line4"></div></div>
  <div className="SideMenu Menu5">
  <div className="Line Line5"></div></div>
  <div className="SideMenu Menu6">
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
if(mode === 'GUIDE'){
  main =
  <div id="ExplainSite"><br></br>
    <h2>리액트를 이용하여 같이 먹으면 궁합이 좋지 않은 음식을 찾을 수 있는 사이트를 만들어 보았습니다. </h2><br></br>
    <p>JSON 구조의 배열을 통해 각각의 객체들을 저장하고 정순, 역순 등의 방식으로 불러와 사용하였고 특정 식품을 필터링하는 기능을 구현해 보았습니다.</p>
    <p>또한 다크모드를 구현하여 눈에 좀 더 편하고 oled 패널의 수명과 배터리를 아끼는데 도움이 되도록 하였습니다.</p>
    <p>hover transition 등을 이용한 다양한 이펙트를 만들어 정적 웹 사이트임에도 심심하지 않은 UI를 만들려고 노력했습니다.</p>
    <p>스크롤 이동 기능을 사용하여 특정 객체를 클릭시 해당 위치로 이동하거나 최상단으로 스크롤하는 기능을 구현했습니다.</p>
    <p>반응형 웹을 통한 모바일 UI구축이과 검색 기능 등을 추가로 넣을 필요성을 느끼고 있고 차후에 추가적으로 설계할 생각입니다.</p>
    <div className='DarkPic'><img src="light.png"></img></div>
    <div className='DarkPic'><img src="dark.png"></img></div>
  </div>
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
    }}
    guide={()=>{
      setMode('GUIDE');
    }}></Bottom>
    </>

  );
}

export default App;
