const builtInCards = [
 ['personaje','Mortadelo y Filemón'],['personaje','Don Quijote'],['personaje','Shakira'],['personaje','Rosalía'],['personaje','Rafa Nadal'],['personaje','Fernando Alonso'],['personaje','Ibai Llanos'],['personaje','Aitana'],['personaje','El Rubius'],['personaje','David Bisbal'],
 ['personaje','Belén Esteban'],['personaje','Pocoyó'],['personaje','Harry Potter'],['personaje','Spider-Man'],['personaje','Mickey Mouse'],['personaje','Cristiano Ronaldo'],['personaje','Lionel Messi'],['personaje','La familia Simpson'],['personaje','Superman'],['personaje','Batman'],
 ['personaje','Elsa de Frozen'],['personaje','Pikachu'],['personaje','Bob Esponja'],['personaje','Mario Bros'],['personaje','Mr. Bean'],['personaje','Cervantes'],['personaje','El rey León'],['personaje','Doraemon'],['personaje','Karol G'],['personaje','Pedro Almodóvar'],

 ['nombre','croqueta'],['nombre','patinete eléctrico'],['nombre','abanico'],['nombre','chiringuito'],['nombre','siesta'],['nombre','paraguas'],['nombre','auriculares'],['nombre','aspiradora'],['nombre','tortilla de patatas'],['nombre','mando a distancia'],
 ['nombre','selfi'],['nombre','grupo de WhatsApp'],['nombre','examen sorpresa'],['nombre','festival de música'],['nombre','maleta'],['nombre','helado'],['nombre','karaoke'],['nombre','montaña rusa'],['nombre','balón de fútbol'],['nombre','cepillo de dientes'],
 ['nombre','cargador del móvil'],['nombre','palomitas'],['nombre','camping'],['nombre','gafas de sol'],['nombre','videojuego'],['nombre','supermercado'],['nombre','atasco'],['nombre','cumpleaños'],['nombre','mascota'],['nombre','robot'],
 ['nombre','castillo de arena'],['nombre','pizza'],['nombre','mochila'],['nombre','ascensor'],['nombre','dentista'],['nombre','piscina'],['nombre','pirata'],['nombre','semáforo'],['nombre','microondas'],['nombre','fotomatón'],

 ['verbo','cotillear'],['verbo','madrugar'],['verbo','estornudar'],['verbo','roncar'],['verbo','ligar'],['verbo','teletrabajar'],['verbo','hacer una captura'],['verbo','quedarse sin batería'],['verbo','hacer ghosting'],['verbo','petarlo'],
 ['verbo','rayarse'],['verbo','vacilar'],['verbo','hacer match'],['verbo','marcarse un baile'],['verbo','posar para una foto'],['verbo','patinar'],['verbo','hacer una videollamada'],['verbo','cocinar'],['verbo','bucear'],['verbo','aplaudir'],
 ['verbo','hacer trampas'],['verbo','perder el autobús'],['verbo','contar un secreto'],['verbo','quedarse dormido'],['verbo','hacerse viral'],['verbo','mandar un audio'],['verbo','buscar cobertura'],['verbo','cantar en la ducha'],['verbo','pedir comida a domicilio'],['verbo','soplar las velas'],

 ['adjetivo','cringe'],['adjetivo','random'],['adjetivo','cuñado'],['adjetivo','empanado'],['adjetivo','flipante'],['adjetivo','pesado'],['adjetivo','viral'],['adjetivo','tóxico'],['adjetivo','chill'],['adjetivo','petado'],
 ['adjetivo','despistado'],['adjetivo','cotilla'],['adjetivo','vago'],['adjetivo','cabezota'],['adjetivo','valiente'],['adjetivo','invisible'],['adjetivo','tacaño'],['adjetivo','romántico'],['adjetivo','misterioso'],['adjetivo','impaciente'],

 ['expresión','Estar en las nubes'],['expresión','Costar un ojo de la cara'],['expresión','Tirar la casa por la ventana'],['expresión','Me renta'],['expresión','En plan'],['expresión','Es cine'],['expresión','Se vienen cositas'],['expresión','Ni tan mal'],['expresión','Dar cringe'],['expresión','Tener un crush'],
 ['expresión','Estar a dos velas'],['expresión','Ponerse las pilas'],['expresión','Meter la pata'],['expresión','No pegar ojo'],['expresión','Estar hasta las narices'],['expresión','Ser pan comido'],['expresión','Hablar por los codos'],['expresión','Quedarse de piedra'],['expresión','Tomar el pelo'],['expresión','Irse por las ramas'],
 ['expresión','Estar como una cabra'],['expresión','Buscar una aguja en un pajar'],['expresión','Dormirse en los laureles'],['expresión','Poner toda la carne en el asador'],['expresión','Llover a cántaros'],['expresión','Ser uña y carne'],['expresión','Tener la sartén por el mango'],['expresión','Quedarse con la boca abierta'],['expresión','Dar en el clavo'],['expresión','Hacer una montaña de un grano de arena'],

 ['personaje','Miércoles Addams','Miércoles'],['personaje','Enid Sinclair','Miércoles'],['personaje','Cosa','Miércoles'],['personaje','Tyler Galpin','Miércoles'],
 ['personaje','Once','Stranger Things'],['personaje','Dustin Henderson','Stranger Things'],['personaje','Steve Harrington','Stranger Things'],['personaje','Vecna','Stranger Things'],
 ['personaje','Seong Gi-hun · jugador 456','El juego del calamar'],['personaje','El Líder enmascarado','El juego del calamar'],['personaje','La muñeca de luz roja, luz verde','El juego del calamar'],
 ['personaje','El Profesor','La casa de papel'],['personaje','Tokio','La casa de papel'],['personaje','Berlín','La casa de papel'],
 ['personaje','Monkey D. Luffy','ONE PIECE'],['personaje','Roronoa Zoro','ONE PIECE'],['personaje','Nami','ONE PIECE'],
 ['personaje','John B','Outer Banks'],['personaje','Sarah Cameron','Outer Banks'],['personaje','JJ Maybank','Outer Banks'],
 ['personaje','Johnny Lawrence','Cobra Kai'],['personaje','Daniel LaRusso','Cobra Kai'],['personaje','Miguel Díaz','Cobra Kai'],
 ['personaje','Charlie Spring','Heartstopper'],['personaje','Nick Nelson','Heartstopper'],['personaje','Elle Argent','Heartstopper'],
 ['personaje','Aang','Avatar: La leyenda de Aang'],['personaje','Katara','Avatar: La leyenda de Aang'],['personaje','Sokka','Avatar: La leyenda de Aang'],
 ['personaje','Anne Shirley','Anne with an E'],['personaje','Gilbert Blythe','Anne with an E'],
 ['personaje','Jackie Howard','Mi vida con los chicos Walter'],['personaje','Alex Walter','Mi vida con los chicos Walter'],

 ['personaje','Mafalda'],['personaje','Chiquito de la Calzada'],['personaje','Santiago Segura'],['personaje','Alaska'],['personaje','Lola Índigo'],['personaje','Bad Bunny'],['personaje','Taylor Swift'],['personaje','Indiana Jones'],['personaje','Darth Vader'],['personaje','Yoda'],
 ['personaje','Shrek'],['personaje','Gru'],['personaje','Stitch'],['personaje','Winnie the Pooh'],['personaje','Peppa Pig'],['personaje','Goku'],['personaje','Naruto'],['personaje','Buzz Lightyear'],['personaje','Woody'],['personaje','Barbie'],

 ['nombre','freidora de aire'],['nombre','cámara de fotos'],['nombre','patatas fritas'],['nombre','bocadillo de calamares'],['nombre','parque de atracciones'],['nombre','tienda de campaña'],['nombre','tabla de surf'],['nombre','monopatín'],['nombre','consola de videojuegos'],['nombre','contraseña'],
 ['nombre','alarma del despertador'],['nombre','puerta giratoria'],['nombre','escalera mecánica'],['nombre','máquina expendedora'],['nombre','carrito de la compra'],['nombre','peluquería'],['nombre','farmacia'],['nombre','biblioteca'],['nombre','estadio'],['nombre','aeropuerto'],
 ['nombre','tren'],['nombre','barco pirata'],['nombre','cohete espacial'],['nombre','volcán'],['nombre','arcoíris'],['nombre','muñeco de nieve'],['nombre','globo terráqueo'],['nombre','saxofón'],['nombre','batería musical'],['nombre','varita mágica'],

 ['verbo','bostezar'],['verbo','hacer equilibrio'],['verbo','tropezar'],['verbo','sacar al perro'],['verbo','envolver un regalo'],['verbo','inflar un globo'],['verbo','abrir una lata'],['verbo','hacer cola'],['verbo','pedir un autógrafo'],['verbo','hacer surf'],
 ['verbo','montar a caballo'],['verbo','tocar la guitarra'],['verbo','conducir'],['verbo','pescar'],['verbo','maquillarse'],['verbo','afeitarse'],['verbo','mandar un beso'],['verbo','celebrar un gol'],['verbo','hacer yoga'],['verbo','hablar dormido'],

 ['adjetivo','torpe'],['adjetivo','presumido'],['adjetivo','tímido'],['adjetivo','gruñón'],['adjetivo','dormilón'],['adjetivo','elegante'],['adjetivo','travieso'],['adjetivo','congelado'],['adjetivo','pegajoso'],['adjetivo','ruidoso'],
 ['adjetivo','gigante'],['adjetivo','diminuto'],['adjetivo','mareado'],['adjetivo','celoso'],['adjetivo','hambriento'],

 ['expresión','Echar leña al fuego'],['expresión','Tener mariposas en el estómago'],['expresión','Estar hecho polvo'],['expresión','Quedarse en blanco'],['expresión','Hacer castillos en el aire'],['expresión','Estar con el agua al cuello'],['expresión','Poner los pelos de punta'],['expresión','Partirse de risa'],['expresión','Hacerse el sueco'],['expresión','Sacar de quicio'],
 ['expresión','Quedarse frito'],['expresión','Ser la oveja negra'],['expresión','Ir como pollo sin cabeza'],['expresión','Coger el toro por los cuernos'],['expresión','Tener pájaros en la cabeza'],

 ['personaje','Rumi','Las guerreras k-pop','PELÍCULA'],['personaje','Mira','Las guerreras k-pop','PELÍCULA'],['personaje','Zoey','Las guerreras k-pop','PELÍCULA'],['personaje','Jinu','Las guerreras k-pop','PELÍCULA'],['personaje','Derpy, el tigre azul','Las guerreras k-pop','PELÍCULA'],
 ['personaje','Enola Holmes','Enola Holmes','PELÍCULA'],['personaje','Sherlock Holmes','Enola Holmes','PELÍCULA'],['personaje','Lord Tewkesbury','Enola Holmes','PELÍCULA'],
 ['personaje','Matilda','Matilda, de Roald Dahl: El musical','PELÍCULA'],['personaje','Tronchatoro','Matilda, de Roald Dahl: El musical','PELÍCULA'],['personaje','La señorita Honey','Matilda, de Roald Dahl: El musical','PELÍCULA'],
 ['personaje','Nimona','Nimona','PELÍCULA'],['personaje','Ballister','Nimona','PELÍCULA'],
 ['personaje','Maisie Brumble','El monstruo marino','PELÍCULA'],['personaje','Jacob Holland','El monstruo marino','PELÍCULA'],
 ['personaje','Leo, el lagarto','Leo','PELÍCULA'],['personaje','Orión','Orión y la oscuridad','PELÍCULA'],['personaje','Oscuridad','Orión y la oscuridad','PELÍCULA'],
 ['personaje','Ginger','Chicken Run: Amanecer de los nuggets','PELÍCULA'],['personaje','Molly','Chicken Run: Amanecer de los nuggets','PELÍCULA'],
 ['personaje','Sophie','La escuela del bien y del mal','PELÍCULA'],['personaje','Agatha','La escuela del bien y del mal','PELÍCULA'],
 ['personaje','Lara Jean','A todos los chicos de los que me enamoré','PELÍCULA'],['personaje','Peter Kavinsky','A todos los chicos de los que me enamoré','PELÍCULA'],
 ['personaje','Katie Mitchell','Los Mitchell contra las máquinas','PELÍCULA']
];
const CUSTOM_CARDS_KEY='dilo_dibujalo_custom_cards_v1';
const CUSTOM_META_KEY='dilo_dibujalo_custom_cards_meta_v1';
let cards=loadActiveCards();
const $=s=>document.querySelector(s); const $$=s=>[...document.querySelectorAll(s)];
let state={teams:[],turn:0,duration:120,left:120,timer:null,card:null,mode:'mix',used:[],playing:false,previousGameCards:[],currentGameCards:[],pendingResult:null,confirmTimer:null,concealed:false};
let wakeLock=null;
const CARD_HISTORY_KEY='dilo_dibujalo_previous_game_cards_v1';
const labels={personaje:'PERSONAJE',nombre:'NOMBRE',verbo:'VERBO',adjetivo:'ADJETIVO',expresión:'EXPRESIÓN'};
function cardKey(card){return [card[0],card[1],card[2]||'',card[3]||''].join('|').toLocaleLowerCase('es')}
function loadActiveCards(){try{const saved=JSON.parse(localStorage.getItem(CUSTOM_CARDS_KEY)||'null');return Array.isArray(saved)&&saved.length? saved:builtInCards}catch{return builtInCards}}
function loadDeckMeta(){try{return JSON.parse(localStorage.getItem(CUSTOM_META_KEY)||'null')}catch{return null}}
function renderDeckInfo(){const meta=loadDeckMeta();$('#deckCount').textContent=`${cards.length} tarjetas`;$('#deckVersion').textContent=meta?`Actualizadas ${meta.updated||''} · v${meta.version||1}`:'Colección original';$('#restoreCards').classList.toggle('hidden',!meta)}
function normalizeImportedCard(item,index){if(!item||typeof item!=='object')throw new Error(`Tarjeta ${index+1} no válida`);const type=String(item.type||'').trim().toLocaleLowerCase('es'),word=String(item.word||'').trim(),title=String(item.title||'').trim(),media=String(item.media||'').trim().toLocaleUpperCase('es');if(!Object.prototype.hasOwnProperty.call(labels,type))throw new Error(`Categoría no válida en la tarjeta ${index+1}`);if(!word||word.length>100)throw new Error(`Texto no válido en la tarjeta ${index+1}`);if((title||media)&&type!=='personaje')throw new Error(`Serie o película solo puede usarse con personajes`);if(media&&!title)throw new Error(`Falta el título de la serie o película en la tarjeta ${index+1}`);if(media&&!['SERIE','PELÍCULA'].includes(media))throw new Error(`Tipo audiovisual no válido en la tarjeta ${index+1}`);return [type,word,title,media].filter((value,i)=>i<2||value)}
function importCardPackage(text){let pack;try{pack=JSON.parse(text)}catch{throw new Error('El archivo no contiene una actualización válida')};if(pack.format!=='dilo-o-dibujalo-cards'||!Array.isArray(pack.cards))throw new Error('El archivo no pertenece a este juego');if(pack.cards.length<50||pack.cards.length>2000)throw new Error('La cantidad de tarjetas no es válida');const imported=pack.cards.map(normalizeImportedCard),keys=imported.map(cardKey);if(new Set(keys).size!==keys.length)throw new Error('La actualización contiene tarjetas duplicadas');const currentKeys=new Set(cards.map(cardKey)),nextKeys=new Set(keys),added=keys.filter(key=>!currentKeys.has(key)).length,removed=[...currentKeys].filter(key=>!nextKeys.has(key)).length;const message=`Actualización ${pack.updated||''}\n\n${added} tarjetas nuevas\n${removed} retiradas\n${imported.length} tarjetas en total\n\n¿Quieres aplicarla?`;if(!confirm(message))return;localStorage.setItem(CUSTOM_CARDS_KEY,JSON.stringify(imported));localStorage.setItem(CUSTOM_META_KEY,JSON.stringify({version:pack.version||1,updated:pack.updated||''}));cards=imported;localStorage.removeItem(CARD_HISTORY_KEY);renderDeckInfo();alert('Tarjetas actualizadas correctamente')}
function loadPreviousGameCards(){try{const saved=JSON.parse(localStorage.getItem(CARD_HISTORY_KEY)||'[]');return Array.isArray(saved)?saved:[]}catch{return []}}
function beginGameCardHistory(){state.previousGameCards=loadPreviousGameCards();state.currentGameCards=[]}
function saveCurrentGameCards(){try{localStorage.setItem(CARD_HISTORY_KEY,JSON.stringify(state.currentGameCards))}catch{}}
function renderTeamInputs(count){const old=$$('.team-input').map(x=>x.value); $('#teamNames').innerHTML=Array.from({length:count},(_,i)=>`<input class="team-input" maxlength="18" value="${old[i]||`Equipo ${i+1}`}" aria-label="Nombre del equipo ${i+1}">`).join('')}
renderTeamInputs(2);
renderDeckInfo();
$('#importCards').onclick=()=>$('#cardsFile').click();
$('#cardsFile').onchange=async event=>{const file=event.target.files&&event.target.files[0];if(!file)return;try{importCardPackage(await file.text())}catch(error){alert(error.message||'No se pudo leer la actualización')}finally{event.target.value=''}};
$('#restoreCards').onclick=()=>{if(!confirm('¿Restaurar las tarjetas incluidas originalmente en la aplicación?'))return;localStorage.removeItem(CUSTOM_CARDS_KEY);localStorage.removeItem(CUSTOM_META_KEY);localStorage.removeItem(CARD_HISTORY_KEY);cards=builtInCards;renderDeckInfo();alert('Se han restaurado las tarjetas originales')};
$$('[data-step]').forEach(b=>b.onclick=()=>{let n=Math.min(8,Math.max(2,+$('#teamCount').value+(+b.dataset.step)));$('#teamCount').value=n;renderTeamInputs(n)});
$('#setupForm').onsubmit=e=>{e.preventDefault();state.teams=$$('.team-input').map((x,i)=>({name:x.value.trim()||`Equipo ${i+1}`,score:0}));state.duration=+$('#duration').value;state.mode=$('#mode').value;state.turn=0;state.used=[];beginGameCardHistory();state.playing=true;show('game');requestWakeLock();prepareTurn()};
function show(id){$$('.screen').forEach(x=>x.classList.toggle('active',x.id===id))}
function renderScore(){ $('#scoreboard').innerHTML=state.teams.map((t,i)=>`<div class="score-pill ${i===state.turn?'current':''}">${escapeHtml(t.name)} <b>${t.score}</b></div>`).join('');$('#currentTeam').textContent=state.teams[state.turn].name.toUpperCase() }
function fmt(s){return `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`}
function prepareTurn(){clearInterval(state.timer);resetResultConfirmation();setCardConcealed(false);state.left=state.duration;$('#miniTimer').textContent=fmt(state.left);$('#timer').textContent=fmt(state.left);$('#timer').classList.remove('danger');$('#closedCard').classList.remove('hidden');$('#openCard').classList.add('hidden');$('#skip').classList.add('hidden');renderScore();chooseCard()}
function chooseCard(){let pool=cards.filter((card,i)=>!state.used.includes(i)&&!state.previousGameCards.includes(cardKey(card)));if(!pool.length)pool=cards.filter((_,i)=>!state.used.includes(i));if(!pool.length){state.used=[];pool=cards.filter(card=>!state.previousGameCards.includes(cardKey(card)));if(!pool.length)pool=cards}const choice=pool[Math.floor(Math.random()*pool.length)];state.card=choice;state.used.push(cards.indexOf(choice));state.currentGameCards.push(cardKey(choice));setCardConcealed(false);$('#category').textContent=labels[choice[0]];$('#word').textContent=choice[1];$('#seriesName').textContent=choice[2]?`${choice[3]||'SERIE'} · ${choice[2]}`:'';$('#seriesName').classList.toggle('hidden',!choice[2]);$('#skip').classList.toggle('hidden',!choice[2]||$('#openCard').classList.contains('hidden'));$('#playHint').textContent=state.mode==='draw'?'¡A dibujar!':state.mode==='taboo'?'Descríbelo sin decir la palabra':state.mode==='mime'?'¡A representarlo sin hablar!':'¡Dibuja, describe o representa!'}
$('#readCard').onclick=()=>{$('#closedCard').classList.add('hidden');$('#openCard').classList.remove('hidden');$('#skip').classList.toggle('hidden',!state.card[2]);startTimer()};
function setCardConcealed(concealed){state.concealed=concealed;$('#openCard').classList.toggle('card-concealed',concealed);$('#concealedMessage').classList.toggle('hidden',!concealed);$('#hideCard').textContent=concealed?'MOSTRAR':'OCULTAR';$('#hideCard').setAttribute('aria-pressed',String(concealed))}
$('#hideCard').onclick=()=>setCardConcealed(!state.concealed);
function startTimer(){clearInterval(state.timer);requestWakeLock();state.timer=setInterval(()=>{state.left--;$('#timer').textContent=$('#miniTimer').textContent=fmt(state.left);if(state.left>0&&state.left<=10){$('#timer').classList.add('danger');tick()}if(state.left<=0)timeUp()},1000)}
function tick(){try{const ctx=new (window.AudioContext||window.webkitAudioContext)(),o=ctx.createOscillator(),g=ctx.createGain();o.frequency.value=900;g.gain.value=.06;o.connect(g);g.connect(ctx.destination);o.start();o.stop(ctx.currentTime+.055)}catch{}}
function playEndSound(){try{const ctx=new (window.AudioContext||window.webkitAudioContext)();[0,.28,.56].forEach((delay,i)=>{const o=ctx.createOscillator(),g=ctx.createGain();o.type='square';o.frequency.value=i===2?110:170;g.gain.setValueAtTime(.16,ctx.currentTime+delay);g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+delay+.22);o.connect(g);g.connect(ctx.destination);o.start(ctx.currentTime+delay);o.stop(ctx.currentTime+delay+.23)})}catch{}}
function timeUp(){clearInterval(state.timer);state.timer=null;state.left=0;resetResultConfirmation();$('#timer').textContent=$('#miniTimer').textContent='0:00';playEndSound();if(!$('#timeUpDialog').open)$('#timeUpDialog').showModal()}
function resetResultConfirmation(){clearTimeout(state.confirmTimer);state.confirmTimer=null;state.pendingResult=null;$('#success').textContent='✓ ACERTADA';$('#fail').textContent='NO ACERTADA';$('#success').classList.remove('confirming');$('#fail').classList.remove('confirming')}
function requestTurnResult(won){const result=won?'success':'fail',button=$('#'+result);if(state.pendingResult===result){resetResultConfirmation();finishTurn(won);return}resetResultConfirmation();state.pendingResult=result;button.textContent='PULSA OTRA VEZ';button.classList.add('confirming');state.confirmTimer=setTimeout(resetResultConfirmation,2500)}
function finishTurn(won){resetResultConfirmation();setCardConcealed(false);if(!$('#openCard').classList.contains('hidden')&&won)state.teams[state.turn].score++;state.turn=(state.turn+1)%state.teams.length;prepareTurn()}
$('#success').onclick=()=>requestTurnResult(true);$('#fail').onclick=()=>requestTurnResult(false);$('#skip').onclick=()=>{resetResultConfirmation();state.left=state.duration;$('#timer').textContent=$('#miniTimer').textContent=fmt(state.left);$('#timer').classList.remove('danger');chooseCard();startTimer()};
$('#timeUpSuccess').onclick=()=>{$('#timeUpDialog').close();finishTurn(true)};$('#timeUpFail').onclick=()=>{$('#timeUpDialog').close();finishTurn(false)};$('#timeUpDialog').addEventListener('cancel',e=>e.preventDefault());
$('#endGame').onclick=()=>{clearInterval(state.timer);resetResultConfirmation();saveCurrentGameCards();state.playing=false;releaseWakeLock();$('#finalScores').innerHTML=[...state.teams].sort((a,b)=>b.score-a.score).map((t,i)=>`<div class="final-row"><span>${i===0?'🏆 ':''}${escapeHtml(t.name)}</span><strong>${t.score} puntos</strong></div>`).join('');$('#finishDialog').showModal()};
$('#playAgain').onclick=()=>{$('#finishDialog').close();state.playing=false;releaseWakeLock();show('setup')};$('#closeDialog').onclick=()=>{$('#finishDialog').close();state.playing=true;requestWakeLock();if(!$('#openCard').classList.contains('hidden'))startTimer()};
async function requestWakeLock(){if(!('wakeLock'in navigator)||wakeLock)return;try{wakeLock=await navigator.wakeLock.request('screen');wakeLock.addEventListener('release',()=>{wakeLock=null})}catch{}}
function releaseWakeLock(){if(wakeLock){wakeLock.release().catch(()=>{});wakeLock=null}}
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&state.playing)requestWakeLock()});
function escapeHtml(s){return s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}

function registerGameTools(){
 const context=document.modelContext;if(!context?.registerTool)return;
 const tool={name:'start_card_game',title:'Empezar partida',description:'Configura y empieza una partida visible con entre 2 y 8 equipos.',inputSchema:{type:'object',properties:{teamNames:{type:'array',items:{type:'string'},minItems:2,maxItems:8},durationSeconds:{type:'integer',enum:[60,90,120,180]},mode:{type:'string',enum:['mix','draw','taboo','mime']}},required:['teamNames','durationSeconds','mode'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(!Array.isArray(input.teamNames)||input.teamNames.length<2||input.teamNames.length>8)throw new Error('Se necesitan entre 2 y 8 equipos');if(![60,90,120,180].includes(input.durationSeconds))throw new Error('Duración no válida');if(!['mix','draw','taboo','mime'].includes(input.mode))throw new Error('Modo no válido');state.teams=input.teamNames.map((name,i)=>({name:String(name).trim()||`Equipo ${i+1}`,score:0}));state.duration=input.durationSeconds;state.mode=input.mode;state.turn=0;state.used=[];beginGameCardHistory();state.playing=true;show('game');requestWakeLock();prepareTurn();return{status:'started',teams:state.teams.map(t=>t.name),durationSeconds:state.duration,mode:state.mode}}};
 try{void Promise.resolve(context.registerTool(tool)).catch(()=>{})}catch{}
}
registerGameTools();
