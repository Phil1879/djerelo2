    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
    
    let currentLang = 'ua';
    
    const translations = {
      ua: {},
      ru: {}
    };
    
    function switchLanguage(lang) {
      currentLang = lang;
      
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      event.target.classList.add('active');
      
      document.querySelectorAll('[data-ua]').forEach(el => {
        const text = lang === 'ua' ? el.getAttribute('data-ua') : el.getAttribute('data-ru');
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          return;
        }
        if (text) {
          el.textContent = text;
        }
      });
      
      document.querySelectorAll('[data-ua-placeholder]').forEach(el => {
        const placeholder = lang === 'ua' ? el.getAttribute('data-ua-placeholder') : el.getAttribute('data-ru-placeholder');
        if (placeholder) {
          el.placeholder = placeholder;
        }
      });
      
      document.querySelectorAll('option[data-ua]').forEach(el => {
        const text = lang === 'ua' ? el.getAttribute('data-ua') : el.getAttribute('data-ru');
        if (text) {
          el.textContent = text;
        }
      });
    }
    
    window.switchLanguage = switchLanguage;
    
    function toggleFAQ(element) {
      const answer = element.nextElementSibling;
      const icon = element.querySelector('span:last-child');
      
      answer.classList.toggle('open');
      icon.textContent = answer.classList.contains('open') ? '−' : '+';
    }
    
    window.toggleFAQ = toggleFAQ;
    
    // Scroll Progress Bar
    window.addEventListener('scroll', () => {
      const scrollProgress = document.getElementById('scrollProgress');
      if (scrollProgress) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        scrollProgress.style.width = progress + '%';
      }
    });
  

// Обновите обработчики для кнопок (добавьте этот код в DOMContentLoaded):
const consultButtons = document.querySelectorAll('a.btn-primary-custom, a[href="#form"]');
    
    // Hero Gradient Animation
    const heroSection = document.getElementById('heroSection');
    if (heroSection) {
      heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        heroSection.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(28, 142, 142, 0.12) 0%, rgba(92, 111, 123, 0.05) 40%, transparent 70%)`;
      });
    }
    
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial-item');
    let currentTestimonial = 0;
    
    function rotateTestimonials() {
      if (testimonials.length > 0) {
        testimonials[currentTestimonial].classList.remove('active');
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].classList.add('active');
      }
    }
    
    if (testimonials.length > 0) {
      setInterval(rotateTestimonials, 5000);
    }
    
    function openPrivacyModal() {
      document.getElementById('privacyModal').classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    
    function closePrivacyModal(event) {
      if (!event || event.target.id === 'privacyModal') {
        document.getElementById('privacyModal').classList.remove('active');
        document.body.style.overflow = '';
      }
    }
    
    window.openPrivacyModal = openPrivacyModal;
    window.closePrivacyModal = closePrivacyModal;

(function(){
 var RU = (window.DZCB_LANG==='ru') || (!window.DZCB_LANG && location.pathname.indexOf('/ru')===0);
 var WD = RU ? {1:'Понедельник',2:'Вторник',3:'Среда',4:'Четверг',5:'Пятница',6:'Суббота',7:'Воскресенье'}
             : {1:'Понеділок',2:'Вівторок',3:'Середа',4:'Четвер',5:'Пʼятниця',6:'Субота',7:'Неділя'};
 var L = RU ? {lbl:'Перезвонить',h1:'Перезвоним за 2 минуты',p1:'Оставьте номер, и специалист перезвонит вам в течение 2 минут. Бесплатно и анонимно.',g1:'Перезвоните мне сейчас',
   ch:'Сейчас нерабочее время',ch2:'Выберите удобное время',cp:'Хотите, перезвоним вам в:',g2:'Жду звонка',hlab:'Часы',mlab:'Минуты',toSched:'🕐 Заказать звонок на конкретное время',toNow:'← Перезвонить сейчас',
   err:'Введите корректный номер телефона',
   okt:'Перезвоним в течение 2 минут. Держите телефон под рукой.',okh:'Готово! Мы вам перезваниваем',
   sb:'Записали!',st:function(x){return 'Перезвоним '+x+'. Держите телефон под рукой.';}}
  : {lbl:'Передзвонити',h1:'Передзвонимо за 2 хвилини',p1:'Залиште номер, і спеціаліст передзвонить вам протягом 2 хвилин. Безкоштовно та анонімно.',g1:'Передзвоніть мені зараз',
   ch:'Зараз неробочий час',ch2:'Оберіть зручний час',cp:'Хочете, зателефонуємо вам о:',g2:'Чекаю на дзвінок',hlab:'Година',mlab:'Хвилина',toSched:'🕐 Замовити дзвінок на конкретний час',toNow:'← Передзвонити зараз',
   err:'Введіть коректний номер телефону',
   okt:'Передзвонимо протягом 2 хвилин. Тримайте телефон поруч.',okh:'Готово! Ми вам передзвонюємо',
   sb:'Записали!',st:function(x){return 'Передзвонимо '+x+'. Тримайте телефон поруч.';}};
 var API='https://ninarkotikam.com/wp-json/dz/v1/';
 var $=function(id){return document.getElementById(id);};
 $('dzcb-lbl').textContent=L.lbl;$('dzcb-h1').textContent=L.h1;$('dzcb-p1').textContent=L.p1;$('dzcb-g1').textContent=L.g1;
 $('dzcb-ch').textContent=L.ch;$('dzcb-cp').textContent=L.cp;$('dzcb-g2').textContent=L.g2;$('dzcb-e1').textContent=L.err;$('dzcb-e2').textContent=L.err;$('dzcb-tt').textContent=L.okt;$('dzcb-hlab').textContent=L.hlab;$('dzcb-mlab').textContent=L.mlab;$('dzcb-toSched').textContent=L.toSched;$('dzcb-toNow').textContent=L.toNow;
 var ov=$('dzcb-ov');
 function show(id){['dzcb-open','dzcb-closed','dzcb-ring','dzcb-sched'].forEach(function(x){$(x).style.display=(x===id?(x==='dzcb-ring'||x==='dzcb-sched'?'block':'block'):'none');});}
 function close(){ov.classList.remove('on');}
 var minH=9,maxH=21,ch=9,cm=0,slots=[];
 function pad(n){return (n<10?'0':'')+n;}
 function render(){$('dzcb-hh').textContent=pad(ch);$('dzcb-mm').textContent=pad(cm);}
 function buildSlots(st){
   var ot=(st.open_time||'09:00').split(':'), ctm=(st.close_time||'21:00').split(':');
   minH=parseInt(ot[0],10); maxH=parseInt(ctm[0],10); ch=minH; cm=parseInt(ot[1],10)||0;
   slots=st.slots||[];
   var sel=$('dzcb-day'); sel.innerHTML='';
   slots.forEach(function(s,i){var o=document.createElement('option');o.value=s.date;o.textContent=(WD[s.wd]||'')+', '+pad(s.d)+'.'+pad(s.m);sel.appendChild(o);});
   render();
 }
 function open(){
   ov.classList.add('on'); show('dzcb-open'); $('dzcb-g1').disabled=false; $('dzcb-g1').textContent=L.g1;
   fetch(API+'cb-status').then(function(r){return r.json();}).then(function(st){
     buildSlots(st);
     if(st.open){ $('dzcb-ch').textContent=L.ch2; $('dzcb-toNow').style.display='block'; show('dzcb-open'); setTimeout(function(){$('dzcb-ph1').focus();},60); }
     else { $('dzcb-ch').textContent=L.ch; $('dzcb-toNow').style.display='none'; show('dzcb-closed'); setTimeout(function(){$('dzcb-ph2').focus();},60); }
   }).catch(function(){ show('dzcb-open'); });
 }
 $('dzcb-btn').onclick=open; $('dzcb-x').onclick=close;
 $('dzcb-toSched').onclick=function(){ $('dzcb-ch').textContent=L.ch2; $('dzcb-toNow').style.display='block'; show('dzcb-closed'); setTimeout(function(){$('dzcb-ph2').focus();},60); };
 $('dzcb-toNow').onclick=function(){ show('dzcb-open'); setTimeout(function(){$('dzcb-ph1').focus();},60); };
 var _bub=$('dzcb-bubble'), _fab=$('dzcb-fab');
 var PH = RU ? ['Хотите, перезвоним в удобное время?','Бесплатная консультация, анонимно','Оставьте номер, перезвоним за минуту']
             : ['Хочете, зателефонуємо у зручний час?','Безкоштовна консультація, анонімно','Залиште номер, передзвонимо за хвилину'];
 var _pi=0;
 function _showBub(){ _bub.textContent=PH[_pi%PH.length]; _fab.classList.add('show-bubble'); }
 function _hideBub(){ _fab.classList.remove('show-bubble'); }
 _fab.addEventListener('mouseenter',_showBub);
 _fab.addEventListener('mouseleave',_hideBub);
 _bub.addEventListener('click',open);
 setTimeout(function(){ _showBub(); setTimeout(_hideBub,5000); }, 3500);
 setInterval(function(){ _pi++; _showBub(); setTimeout(_hideBub,5000); }, 16000);
 ov.addEventListener('click',function(e){if(e.target===ov)close();});
 // степперы
 document.querySelectorAll('.dzcb-stp button').forEach(function(b){ b.onclick=function(){
   var d=parseInt(b.getAttribute('data-d'),10);
   if(b.getAttribute('data-t')==='h'){ ch+=d; if(ch<minH)ch=maxH; if(ch>maxH)ch=minH; }
   else { cm+=d*5; if(cm<0)cm=55; if(cm>55)cm=0; }
   render();
 };});
 function valid(v){return (v||'').replace(/[^0-9]/g,'').length>=9;}
 // отправка: сейчас
 $('dzcb-g1').onclick=function(){
   var v=$('dzcb-ph1').value; if(!valid(v)){$('dzcb-e1').style.display='block';return;}
   $('dzcb-e1').style.display='none';$('dzcb-g1').disabled=true;$('dzcb-g1').textContent='...';
   fetch(API+'callback',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({phone:v,lang:RU?'ru':'ua',page:location.href,source:location.hostname})})
   .then(function(r){return r.json();}).then(function(){
     show('dzcb-ring');$('dzcb-tt').textContent=L.okt;
     function fmtN(x){return Math.floor(x/60)+':'+(x%60<10?'0':'')+(x%60);}
     var n=120;$('dzcb-n').textContent=fmtN(n);
     var t=setInterval(function(){n--;if(n<=0){clearInterval(t);$('dzcb-n').innerHTML='✅';$('dzcb-tt').textContent=L.okh;return;}$('dzcb-n').textContent=fmtN(n);},1000);
   }).catch(function(){$('dzcb-g1').disabled=false;$('dzcb-g1').textContent=L.g1;});
 };
 // отправка: на время
 $('dzcb-g2').onclick=function(){
   var v=$('dzcb-ph2').value; if(!valid(v)){$('dzcb-e2').style.display='block';return;}
   var date=$('dzcb-day').value; var when=date+' '+pad(ch)+':'+pad(cm);
   $('dzcb-e2').style.display='none';$('dzcb-g2').disabled=true;$('dzcb-g2').textContent='...';
   fetch(API+'callback',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({phone:v,lang:RU?'ru':'ua',page:location.href,scheduled_at:when,source:location.hostname})})
   .then(function(r){return r.json();}).then(function(){
     var opt=$('dzcb-day').options[$('dzcb-day').selectedIndex]; var lbl=(opt?opt.textContent:date)+' о '+pad(ch)+':'+pad(cm);
     show('dzcb-sched');$('dzcb-sb').textContent=L.sb;$('dzcb-st').textContent=L.st(lbl);
   }).catch(function(){$('dzcb-g2').disabled=false;$('dzcb-g2').textContent=L.g2;});
 };
})();

// Перенаправление кликов на кнопку звонка
document.addEventListener('DOMContentLoaded', function() {
    const callElements = document.querySelectorAll('#call');
    const dzcbBtn = document.getElementById('dzcb-btn');
    
    if (callElements.length > 0 && dzcbBtn) {
        callElements.forEach(function(element) {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                dzcbBtn.click();
            });
        });
    }
});