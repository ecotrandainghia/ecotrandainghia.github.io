(function(){
  var doc=document.documentElement;
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  function $(s){return document.querySelector(s)}
  function $$(s){return [].slice.call(document.querySelectorAll(s))}
  function css(n){return getComputedStyle(doc).getPropertyValue(n).trim()}

  var TL=ECO_TL;


  /* ===== Tia bụi nắng trong hero ===== */
  var mc=$('#motes'),mx=mc.getContext('2d'),MW,MH,motes=[];
  function msize(){var r=mc.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,1.5);MW=mc.width=Math.max(1,r.width*d|0);MH=mc.height=Math.max(1,r.height*d|0);
    motes=[];for(var i=0;i<46;i++)motes.push({x:Math.random()*MW,y:Math.random()*MH,r:(Math.random()*1.8+.6)*d,v:Math.random()*.25+.05,p:Math.random()*6.28})}
  function mdraw(t){mx.clearRect(0,0,MW,MH);motes.forEach(function(m){m.y-=m.v;m.x+=Math.sin(t/2400+m.p)*.25;if(m.y<-5){m.y=MH+5;m.x=Math.random()*MW}
    var a=.25+.35*Math.sin(t/900+m.p)*.5+.2;mx.beginPath();mx.arc(m.x,m.y,m.r,0,6.28);mx.fillStyle='rgba(177,214,77,'+a.toFixed(3)+')';mx.fill()});
    if(!reduce)requestAnimationFrame(mdraw)}
  msize();requestAnimationFrame(mdraw);

  /* ===== Hạt biến hình: logo ECO -> 10 năm -> 67 -> Gen 11. Rê chuột để làm tán hạt ===== */
  (function(){
    var cv=$('#morph'),x=cv.getContext('2d'),W,H,D,N=1500,P=[],shapes=[],si=0,mouse={x:-1e4,y:-1e4},logo=new Image();
    var CAP=['ECO · since 2016','10 năm · 2016 → 2026','Nhiệm kỳ 67','Gen 11 · thập kỷ thứ hai'];
    var dots=$('#mdots');CAP.forEach(function(){dots.appendChild(document.createElement('i'))});
    function sample(draw){var o=document.createElement('canvas');o.width=o.height=200;var c=o.getContext('2d');draw(c);
      var d=c.getImageData(0,0,200,200).data,pts=[];for(var y=0;y<200;y+=2)for(var X=0;X<200;X+=2){var k=(y*200+X)*4;if(d[k+3]>120)pts.push([X/200,y/200,d[k],d[k+1],d[k+2]])}
      for(var i=pts.length-1;i>0;i--){var j=Math.random()*(i+1)|0,t=pts[i];pts[i]=pts[j];pts[j]=t}return pts}
    function txt(t,size,it){return function(c){c.fillStyle='#000';c.textAlign='center';c.textBaseline='middle';c.font=(it?'italic ':'')+'300 '+size+'px Fraunces, Georgia, serif';c.fillText(t,100,104)}}
    function build(){
      var ink=css('--ink')||'#1d2219';
      var lg=sample(function(c){c.drawImage(logo,8,8,184,184)});
      var ten=sample(txt('10',150)),six=sample(txt('67',150,true)),g11=sample(function(c){txt('Gen',70,true)(c);c.font='300 92px Fraunces, Georgia, serif';c.fillText('11',100,150);c.clearRect(0,0,200,0)});
      g11=sample(function(c){c.fillStyle='#000';c.textAlign='center';c.textBaseline='middle';c.font='italic 300 64px Fraunces, Georgia, serif';c.fillText('Gen',100,62);c.font='300 112px Fraunces, Georgia, serif';c.fillText('11',100,138)});
      shapes=[lg,ten,six,g11].map(function(pts,si){return pts.map(function(p){var lime=p[3]>150&&p[2]<200;var col=si===0?(lime?'#9cc14a':ink):(Math.random()<.12?'#9cc14a':ink);return [p[0],p[1],col]})});
      for(var i=0;i<N;i++)P[i]=P[i]||{x:Math.random(),y:Math.random(),vx:0,vy:0};
    }
    function size(){var r=cv.getBoundingClientRect();D=Math.min(devicePixelRatio||1,2);W=cv.width=Math.max(1,r.width*D|0);H=cv.height=Math.max(1,r.height*D|0)}
    function frame(){
      x.clearRect(0,0,W,H);var sh=shapes[si];if(!sh)return requestAnimationFrame(frame);
      var mx=mouse.x/W,my=mouse.y/H,rad=.012*D*D,sz=Math.max(1.2,W/260);
      for(var i=0;i<N;i++){var p=P[i],t=sh[i%sh.length],dx=t[0]-p.x,dy=t[1]-p.y;
        p.vx=(p.vx+dx*.06)*.82;p.vy=(p.vy+dy*.06)*.82;
        var ex=p.x-mx,ey=p.y-my,d2=ex*ex+ey*ey;if(d2<.012){var f=(.012-d2)*3.2;p.vx+=ex*f*20;p.vy+=ey*f*20}
        p.x+=p.vx;p.y+=p.vy;x.fillStyle=t[2];x.globalAlpha=i>=sh.length?.35:.9;x.fillRect(p.x*W-sz/2,p.y*H-sz/2,sz,sz)}
      x.globalAlpha=1;if(!reduce)requestAnimationFrame(frame)}
    function go(k){si=k;$('#mcap').textContent=CAP[k];[].forEach.call(dots.children,function(d,j){d.classList.toggle('on',j===k)});
      P.forEach(function(p){p.vx+=(Math.random()-.5)*.04;p.vy+=(Math.random()-.5)*.04})}
    cv.addEventListener('pointermove',function(e){var r=cv.getBoundingClientRect();mouse.x=(e.clientX-r.left)*D;mouse.y=(e.clientY-r.top)*D});
    cv.addEventListener('pointerleave',function(){mouse.x=mouse.y=-1e4});
    addEventListener('resize',size);size();
    logo.onload=function(){var ready=document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve();ready.then(function(){build();go(0);
      if(reduce){for(var r=0;r<200;r++)frame();return}
      requestAnimationFrame(frame);setInterval(function(){go((si+1)%shapes.length)},4200)})};
    logo.src='img/logo.png';
  })();

  /* ===== Chữ dòng 2 đổi lần lượt ===== */
  var words=ECO_WORDS,wi=0,rot=$('#rot');
  /* giữ sẵn chỗ bằng các chữ ẩn, để khi gõ/xóa chữ giao diện không bị xô */
  words.forEach(function(w){var g=document.createElement('span');g.className='gh';g.setAttribute('aria-hidden','true');g.textContent=w;rot.parentNode.insertBefore(g,rot)});
  function typeTo(el,txt,cb){var i=0;(function step(){el.textContent=txt.slice(0,i);if(i++<txt.length)setTimeout(step,45);else if(cb)cb()})()}
  function eraseThen(el,cb){var s=el.textContent;(function step(){s=s.slice(0,-1);el.textContent=s;if(s.length)setTimeout(step,25);else cb()})()}
  if(!reduce)setInterval(function(){wi=(wi+1)%words.length;eraseThen(rot,function(){typeTo(rot,words[wi])})},3600);

  /* ===== Thẻ Gen 11 tự gõ chữ ===== */
  var qp=$('#qtype .tx'),qtxt='Gen 11 · 2026 – 2027. Thế hệ đầu tiên của thập kỷ thứ hai.';
  $('#qtype .gh').textContent=qtxt;
  if(reduce)qp.textContent=qtxt;else setTimeout(function(){typeTo(qp,qtxt)},1900);

  /* ===== Chấm tiến độ ===== */
  var dots=$('#dots');for(var i=0;i<24;i++)dots.appendChild(document.createElement('i'));
  var di=0,dl=dots.children;
  setInterval(function(){for(var j=0;j<dl.length;j++)dl[j].classList.toggle('on',j<=di);di=(di+1)%(dl.length+4)},reduce?100000:160);

  /* ===== Menu ===== */
  var nav=$('#nav');function ns(){nav.classList.toggle('solid',scrollY>10)}addEventListener('scroll',ns,{passive:true});ns();
  var links=$$('.links a'),map={};links.forEach(function(a){map[a.getAttribute('href').slice(1)]=a});

  /* ===== Các thế hệ ===== */

  /* ===== Đếm số ===== */
  function countUp(el){var to=+el.getAttribute('data-to');if(el.hasAttribute('data-plain')||reduce){el.textContent=to;return}
    var st=performance.now();(function f(n){var p=Math.min(1,(n-st)/1500),e=1-Math.pow(1-p,3);el.textContent=Math.round(to*e);if(p<1)requestAnimationFrame(f)})(st)}

  /* ===== Ảnh minh hoạ tạm (vẽ bằng code, sẽ thay bằng ảnh thật) ===== */
  function rnd(seed){return function(){seed=(seed*16807)%2147483647;return(seed-1)/2147483646}}
  function paint(c,seed){
    var r=c.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2),w=c.width=Math.max(1,r.width*d|0),h=c.height=Math.max(1,r.height*d|0),x=c.getContext('2d'),R=rnd(seed*97+13);
    var g=x.createLinearGradient(0,0,w*.3,h);g.addColorStop(0,'hsl('+(70+R()*30)+',30%,'+(80+R()*8)+'%)');g.addColorStop(.55,'hsl('+(85+R()*25)+',32%,'+(56+R()*10)+'%)');g.addColorStop(1,'hsl('+(100+R()*20)+',40%,'+(24+R()*8)+'%)');x.fillStyle=g;x.fillRect(0,0,w,h);
    for(var k=0;k<4;k++){x.beginPath();var base=h*(.45+k*.13);x.moveTo(0,h);x.lineTo(0,base);for(var s=0;s<=w;s+=w/24)x.lineTo(s,base-Math.sin(s/w*(2+k)+R()*6)*h*.05-R()*h*.02);x.lineTo(w,h);x.closePath();x.fillStyle='hsla('+(90+k*6)+',38%,'+(48-k*9)+'%,.55)';x.fill()}
    for(var i=0;i<5;i++){var cx2=R()*w,cy=R()*h*.5,rr=(.2+R()*.4)*w,gg=x.createRadialGradient(cx2,cy,0,cx2,cy,rr);gg.addColorStop(0,'rgba(255,255,235,.35)');gg.addColorStop(1,'rgba(255,255,235,0)');x.fillStyle=gg;x.fillRect(0,0,w,h)}
  }
  function paintArt(){
    var c=$('#art');if(!c||!c.getContext)return;var r=c.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2),w=c.width=Math.max(1,r.width*d|0),h=c.height=Math.max(1,r.height*d|0),x=c.getContext('2d'),ink=css('--green-ink')||'#2f5d17';
    x.clearRect(0,0,w,h);x.save();x.translate(w/2,h/2);
    for(var i=0;i<9;i++){x.save();x.rotate(i*Math.PI*2/9);x.beginPath();x.moveTo(0,0);x.bezierCurveTo(w*.12,-h*.08,w*.36,-h*.06,w*.44,0);x.bezierCurveTo(w*.36,h*.06,w*.12,h*.08,0,0);x.fillStyle=i%3===0?'rgba(177,214,77,.5)':'rgba(177,214,77,.16)';x.fill();x.strokeStyle=ink;x.globalAlpha=.45;x.lineWidth=1.1*d;x.stroke();x.beginPath();x.moveTo(0,0);x.lineTo(w*.44,0);x.stroke();x.restore()}
    x.beginPath();x.arc(0,0,w*.045,0,6.28);x.fillStyle='#b1d64d';x.fill();x.restore();
  }

  /* ===== Timeline khoá khung ===== */
  var tl=$('#tl'),stack=$('#stack'),frame=$('#frame'),prog=$('#tlprog'),cnt=$('#tlcount');
  tl.style.setProperty('--n',TL.length);
  var DESC=ECO_DESC;
  var gimgs=[];
  TL.forEach(function(acts,i){
    var g=i+1,sy=(2015+g)+'–'+String(16+g).slice(-2);
    var L=document.createElement('div');L.className='line';
    L.innerHTML='<h3><span class="y">Gen '+g+'</span>'+sy+'</h3><div class="sub"><div><p>'+DESC[i]+'</p><ul class="acts">'+acts.map(function(a,k){return '<li data-k="'+k+'" tabindex="0" role="button">'+a[0]+'</li>'}).join('')+'</ul></div></div>';
    L.querySelector('h3').addEventListener('click',function(){goGen(i)});L.querySelector('h3').style.cursor='pointer';
    stack.appendChild(L);
    var F=document.createElement('figure');
    F.innerHTML=acts.map(function(a){return '<img data-src="img/'+a[3]+'" alt="'+a[0]+'">'}).join('')+'<figcaption><b></b><span class="m"></span></figcaption>';
    frame.appendChild(F);gimgs.push([].slice.call(F.querySelectorAll('img')));
  });
  frame.insertAdjacentHTML('beforeend','<div class="fnav"><span class="fc" id="fc">1 / 1</span><span class="bar" id="fbar"></span><button type="button" id="fprev" aria-label="Ảnh trước">←</button><button type="button" id="fnext" aria-label="Ảnh sau">→</button></div>');
  var lines=[].slice.call(stack.children),figs=[].slice.call(frame.querySelectorAll('figure')),cur=-1,ai=0,timer=0,manual=false,pend=null;
  function load(i){if(i<0||i>=TL.length)return;gimgs[i].forEach(function(im){if(!im.src)im.src=im.getAttribute('data-src')})}
  function show(i,j){var acts=TL[i],a=acts[j];ai=j;gimgs[i].forEach(function(im,k){im.classList.toggle('on',k===j)});
    var cap=figs[i].querySelector('figcaption');cap.querySelector('b').textContent=a[0];
    cap.querySelector('.m').innerHTML='<span>GEN '+(i+1)+'</span>'+(a[1]?'<span>'+a[1]+'</span>':'')+(a[2]?'<span class="cx">ECO x '+a[2]+'</span>':'');
    [].forEach.call(lines[i].querySelectorAll('.acts li'),function(li,k){li.classList.toggle('cur',k===j)});
    frame.classList.toggle('one',acts.length<2);
    $('#fc').textContent=(j+1)+' / '+acts.length;
    var bar=$('#fbar');if(bar.children.length!==acts.length){bar.innerHTML=acts.map(function(){return '<i></i>'}).join('')}
    [].forEach.call(bar.children,function(b,k){b.classList.toggle('on',k===j)})}
  function auto(){clearInterval(timer);if(!reduce&&!manual&&TL[cur].length>1)timer=setInterval(function(){show(cur,(ai+1)%TL[cur].length)},2800)}
  function pick(j){manual=true;clearInterval(timer);show(cur,(j+TL[cur].length)%TL[cur].length)}
  $('#fprev').addEventListener('click',function(){pick(ai-1)});
  $('#fnext').addEventListener('click',function(){pick(ai+1)});
  function goGen(i){var top=tl.getBoundingClientRect().top+scrollY,span=tl.offsetHeight-innerHeight;scrollTo({top:top+span*(i+.5)/TL.length,behavior:reduce?'auto':'smooth'})}
  stack.addEventListener('click',function(e){var li=e.target.closest('.acts li');if(!li)return;e.stopPropagation();
    var i=lines.indexOf(li.closest('.line')),k=+li.getAttribute('data-k');manual=true;clearInterval(timer);
    if(i===cur)show(i,k);else{pend=[i,k];goGen(i)}},true);
  stack.addEventListener('keydown',function(e){if((e.key==='Enter'||e.key===' ')&&e.target.matches('.acts li')){e.preventDefault();e.target.click()}});
  function setStep(i){if(i===cur)return;cur=i;load(i);load(i+1);load(i-1);
    lines.forEach(function(l,k){l.classList.toggle('on',k===i);l.style.opacity=Math.abs(k-i)>2?0:1});
    figs.forEach(function(f,k){f.classList.toggle('on',k===i)});
    var a=lines[i];stack.style.transform='translateY('+(-(a.offsetTop+a.offsetHeight/2))+'px)';
    cnt.textContent=(i<9?'0':'')+(i+1)+' / '+TL.length;
    var k=0;if(pend&&pend[0]===i){k=pend[1];pend=null}show(i,k);auto()}
  function tlScroll(){var r=tl.getBoundingClientRect(),span=tl.offsetHeight-innerHeight,p=Math.max(0,Math.min(1,-r.top/span));
    prog.style.setProperty('--p',(p*100)+'%');setStep(Math.min(TL.length-1,Math.floor(p*TL.length)))}
  addEventListener('scroll',tlScroll,{passive:true});

  function paintAll(){paintArt();msize();var k=cur;cur=-1;setStep(Math.max(0,k))}
  paintAll();tlScroll();
  var rz;addEventListener('resize',function(){clearTimeout(rz);rz=setTimeout(paintAll,150)});

  /* ===== Hiện dần khi cuộn ===== */
  doc.classList.add('js');
  var rv=$$('.rv');
  function reveal(el){if(el.classList.contains('in'))return;el.classList.add('in');$$('[data-to]').forEach(function(n){if(el.contains(n))countUp(n)})}
  if('IntersectionObserver' in window&&!reduce){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){reveal(e.target);io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});
    rv.forEach(function(el){if(el.getBoundingClientRect().top<innerHeight)reveal(el);else io.observe(el)});
    var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.remove('on')});var a=map[e.target.id];if(a)a.classList.add('on')}})},{rootMargin:'-45% 0px -50% 0px'});
    Object.keys(map).forEach(function(id){var s=document.getElementById(id);if(s)so.observe(s)});
  }else rv.forEach(reveal);

  /* ===== Đếm ngược ===== */
  var target=new Date(ECO_RECRUIT_DATE+'T00:00:00+07:00').getTime(),cel={};
  $$('#count b').forEach(function(b){cel[b.getAttribute('data-k')]=b});
  function pad(n){return(n<10?'0':'')+n}
  function tick(){var d=Math.max(0,Math.ceil((target-Date.now())/86400000));cel.w.textContent=Math.floor(d/7);cel.d.textContent=d%7}
  tick();setInterval(tick,60000);

  /* ===== FAQ ===== */
  $$('.q button').forEach(function(b){b.addEventListener('click',function(){var q=b.parentNode,o=!q.classList.contains('open');$$('.q').forEach(function(x){x.classList.remove('open');x.querySelector('button').setAttribute('aria-expanded','false')});q.classList.toggle('open',o);b.setAttribute('aria-expanded',o)})});
  $$('a[aria-disabled="true"]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault()})});
})();
