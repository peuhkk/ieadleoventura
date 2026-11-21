(function(){
const C=window.SITE,I=C.igreja,K=C.contato,$=id=>document.getElementById(id);
const ic={
 instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/>',
 youtube:'<rect x="2.5" y="5.5" width="19" height="13" rx="3.5"/><path d="M10 9.5v5l4.5-2.5z"/>',
 whatsapp:'<path d="M4 20l1.2-4.1A8 8 0 1 1 8.3 19z"/><path d="M9 9c.3 2.4 2.6 4.7 6 6l1-1.5-2-1-.8.8c-.8-.4-1.7-1.3-2.1-2.1l.8-.8-1-2z"/>',
 map:'<path d="M12 21s7-5.8 7-11a7 7 0 0 0-14 0c0 5.2 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 cal:'<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
 youth:'<circle cx="9" cy="8" r="3"/><path d="M3.5 20c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5"/><path d="M16 5.5a3 3 0 0 1 0 5.5M18 14.8c1.6.7 2.5 2.4 2.5 5.2"/>',
 people:'<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
 pray:'<path d="M12 21V8M7 12h10"/><path d="M12 3v2"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/>'
};
const svg=n=>'<svg viewBox="0 0 24 24" aria-hidden="true">'+ic[n]+'</svg>';
const wa=m=>K.whatsapp?'https://wa.me/'+K.whatsapp.replace(/\D/g,'')+'?text='+encodeURIComponent(m):'';
const maps=K.mapsUrl||'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(K.endereco||I.local);
const umadel=C.departamentos.find(d=>/umadel/i.test(d.nome))||{};
const el=(t,h,a)=>{const e=document.createElement(t);if(h)e.innerHTML=h;return Object.assign(e,a||{})};
const ext=u=>/^https?:/.test(u);
const items=[
 ['instagram','Instagram','Fotos e novidades da igreja',C.redes.instagram],
 ['youtube','YouTube','Transmissões e mensagens',C.redes.youtube],
 ['whatsapp','WhatsApp','Converse com a igreja',wa(K.mensagemWhats)],
 ['map','Como chegar','Abrir no Google Maps',maps],
 ['clock','Agenda de cultos','Dias e horários','#programacao'],
 ['cal','Programação e eventos','Próximas atividades','#programacao'],
 ['youth','UMADEL',umadel.descricao||'Departamento de jovens',umadel.url],
 ['people','Departamentos e ministérios','Conheça as áreas da igreja',C.departamentos.length?'#institucional':''],
 ['pray','Pedido de oração','Envie pelo WhatsApp',wa(K.mensagemOracao)],
 ['mail','Contato','Escreva para a igreja',K.email?'mailto:'+K.email:wa(K.mensagemWhats)]
];
items.filter(i=>i[3]).forEach(([n,t,d,u])=>{
 const a=el('a',svg(n)+'<div><b>'+t+'</b><span>'+d+'</span></div>',{className:'card',href:u});
 if(ext(u)){a.target='_blank';a.rel='noopener noreferrer'}
 const li=el('li');li.append(a);$('cards').append(li)});
document.querySelectorAll('[data-cfg]').forEach(e=>e.textContent=I[e.dataset.cfg]);
['logo-top','logo-hero'].forEach(id=>$(id).src=I.logo);
$('hero-titulo').textContent=C.hero.titulo;$('hero-texto').textContent=C.hero.texto;$('hero-local').textContent=I.local;
if(I.foto){const im=$('hero-img');im.onload=()=>{im.hidden=false;im.parentNode.classList.add('has-photo')};im.alt=I.fotoAlt;im.src=I.foto}
C.cultos.forEach(c=>$('sched').append(el('li','<span class="d">'+c.dia+'</span><span class="t">'+c.nome+' · '+(c.horario||'<span class="pend">Horário a definir</span>')+'</span>')));
$('prog-aviso').textContent=C.cultos.some(c=>!c.horario)?C.programacaoAviso:'';
if(C.eventos.length){$('eventos-box').hidden=false;C.eventos.forEach(e=>$('eventos').append(el('li','<span class="d">'+e.nome+'</span><span class="t">'+e.data+(e.detalhe?' · '+e.detalhe:'')+'</span>')))}
$('t-inst').textContent=C.institucional.titulo;
C.institucional.paragrafos.forEach(p=>$('inst-text').append(el('p',null,{textContent:p})));
$('pastor').textContent=I.cargoPastor+': '+I.pastor;
if(C.departamentos.length){$('deps-box').hidden=false;C.departamentos.forEach(d=>{
 const li=el('li');li.append(d.url?el('a',null,{href:d.url,textContent:d.nome,target:'_blank',rel:'noopener noreferrer'}):el('span',null,{textContent:d.nome}));$('deps').append(li)})}
[['instagram','Instagram',C.redes.instagram],['youtube','YouTube',C.redes.youtube],['whatsapp','WhatsApp',wa(K.mensagemWhats)]].filter(s=>s[2]).forEach(([n,t,u])=>{
 const a=el('a',svg(n),{href:u,target:'_blank',rel:'noopener noreferrer'});a.setAttribute('aria-label',t);const li=el('li');li.append(a);$('social').append(li)});
$('ano').textContent=new Date().getFullYear();
document.title=I.nome+' — '+I.slogan.replace(/\.$/,'');
})();