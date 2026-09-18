const seed = [
  ['오늘은 [???] 혼돈의 탑에 일찍 왔니?', '웬일로', '왠일로', 1, '‘웬일’이 맞습니다.'],
  ['킨레이의 실력은 [???] 뛰어납니다.', '나물할 데 없이', '나무랄 데 없이', 2, '‘나무라다’의 활용형이므로 ‘나무랄’이 맞습니다.'],
  ['요즘 케인즈의 주요 [???]는 대평원 던전이다.', '광심사', '관심사', 2, '‘관심사’가 표준어입니다.'],
  ['밀레스 던전을 [???] 정리해 주세요.', '깨끗히', '깨끗이', 2, '‘깨끗이’가 맞습니다.'],
  ['그럼 아만 마을에서 [???].', '나중에 뵈요', '나중에 봬요', 2, '‘뵈어요’의 준말은 ‘봬요’입니다.'],
  ['로톤 농부들이 해충 문제로 [???] 태우고 있습니다.', '애를', '어른을', 1, '관용 표현은 ‘애를 태우다’입니다.'],
  ['[???] 점령전에서 승리하기를 빕니다.', '바라건데', '바라건대', 2, '‘바라건대’가 맞습니다.'],
  ['성직자님, 힘들면 [???] 하세요.', '시험시험', '쉬엄쉬엄', 2, '‘쉬엄쉬엄’이 맞습니다.'],
  ['로오를 [???] 만나 반가웠습니다.', '오랜만에', '오랫만에', 1, '‘오랜만’이 표준어입니다.'],
  ['사냥할 때 옆에서 자꾸 [???] 하지 마세요.', '일해라 절해라', '이래라저래라', 2, '‘이래라저래라’가 맞습니다.'],
  ['고작 이 정도 임무로 [???].', '쩔쩔메다니', '쩔쩔매다니', 2, '‘쩔쩔매다’가 맞습니다.'],
  ['공성전 계획은 [???] 무산되었습니다.', '번번이', '번번히', 1, '‘번번이’가 맞습니다.'],
  ['[???] 길드 대전도 승리합시다.', '이번주', '이번 주', 2, '‘이번 주’처럼 띄어 씁니다.'],
  ['수오미 마을에 [???]가 시작되었어.', '꽃샘추위', '꽃셈추위', 1, '‘꽃이 피는 것을 시샘하는 추위’라는 뜻의 ‘꽃샘추위’가 맞습니다.']
].map(([question, choice1, choice2, answer, reason]) => ({id: crypto.randomUUID(), question, choice1, choice2, answer, reason}));
const suppliedSeed = [
  ['쟁탈전이 끝난 뒤 [???]를 맡았습니다.','뒤치다꺼리','뒤치닥거리',1],['사냥 중 맡은 [???]을 충실히 수행해 주세요.','역활','역할',2],['[???] 그냥 넘어가도록 하죠.','웬간하면','엔간하면',2],['계단 [???]에서 성직자가 울고 있습니다.','아래쪽','아랫쪽',1],['전사[???] 맡은 임무를 다하겠습니다.','로서','로써',1],['조금만 더 일찍 무기를 강화[???].','할껄','할걸',2],['기사단 임무를 [???] 살펴보았습니다.','곰곰이','곰곰히',1],['던전 안에만 있다 보니 온몸이 [???]하군요.','찌뿌둥','짓부등',1],['[???] 정만큼 기른 정도 큽니다.','낫은','낳은',2],['오렌 국왕 폐하를 진찰할 [???]를 모셔라.','어이','어의',2],['구피의 부탁은 영 [???].','마뜩잖다','마뜩치 않다',1],['불필요한 경쟁을 [???]해야 합니다.','지향','지양',2],['모디아의 [???]은 무엇일까요?','장례 희망','장래 희망',2],['셔스는 한밤중에 [???]를 시도했습니다.','야밤도주','야반도주',2],['[???] 하지 말아요.','헷갈리게','헷깔리게',1],['그들의 [???]은 정말 무섭지요.','새뇌 교육','세뇌 교육',2],['길드원들 모두 싸울 준비가 [???].','됬다','됐다',2],['강력한 [???] 공격이 쇄도했다.','치명타','침형타',1],['[???] 성직자님께 감사의 말씀을 전합니다.','이 자리를 빌어','이 자리를 빌려',2],['아슬론 마을에는 [???] 동안 다녀올 예정인가요?','몇 일','며칠',2],['던전으로 외출하기 전에 문을 [???].','잠궜다','잠갔다',2],['왈츠 재상을 본보기로 [???] 합니다.','삶아야','삼아야',2],['케라수 국왕은 [???] 주무시고 계십니다.','여지껏','여태껏',2],['커넬 주교님은 바쁘니 [???] 이야기합시다.','이따가','있다가',1],
  ['갑자기 발록이 등장해서 [???].','시껍했습니다','식겁했습니다',2],['그 소식은 카베터의 심장에 비수를 [???]','꽂았습니다','꼽았습니다',1],['셀라임 왕자에게 [???] 화를 내고 말았다.','괜히','괞이',1],['모험가 분들의 앞날에 [???].','권투를 빕니다','건투를 빕니다',2],['나겔링 스톤을 보니 마음이 [???].','흐뭇하다','흐믓하다',1],['[???]에는 타고르 마을에 비가 계속 내렸습니다.','지난주','지난 주',1],['성직자가 악마를 [???]했습니다.','때치','퇴치',2],['어떤 직업을 선택[???] 자유입니다.','하든','하던',1],['그들인 깃발전에서 [???] 이겼습니다.','얍삽하게','얍샵하게',1],['타바리 마을 주민들의 사생활을 [???]하지 마십시오.','침해','치매',1],['그 발언은 왕족에 대한 [???]이 될 수도 있습니다.','명예훼손','명예회손',1],['[???] 몬스터를 사냥했습니다.','온종일','왠종일',1],['이야가 [???] 안부를 전해 왔습니다.','간간이','간간히',1],['[???] 용자의 공원에 다녀오십시오.','웬만하면','왠만하면',1],['마법사의 작은 실수가 큰 [???]을 일으켰습니다.','사단','사달',2],['천재 루이는 성격이 [???].','괴팍합니다','괘팍합니다',1],['마법사가 [???]의 위기에 놓였습니다.','절체절명','절대절명',1],['소식을 들은 전사가 [???] 달려왔습니다.','손쌀같이','쏜살같이',2],['[???]에 대해 알고 있는가?','으둠에 전설','어둠의 전설',2],['흑요석 장비를 지금 사용[???]?','해도 되니','해도 돼니',1],['밀레스 쉐폰왕은 온갖 [???]에 시달렸습니다.','음해','음훼',1],['[???] 무한의 탑에 도전해보고 싶군요.','왠지','웬지',1],['[???] 스킬을 연습했습니다.','틈틈히','틈틈이',2],['도적이라면 [???]는 문제없지.','잠을쇄','자물쇠',2],['세계수는 가끔 혼자서 [???]거립니다.','궁시렁','구시렁',2],['소문은 [???] 아벨 마을에 퍼졌습니다.','금세','금새',1],['오늘 [???] 혼돈의 탑에 일찍 왔니?','웬일로','왠일로',1],['마이소시아 정식은 맛이 [???] 좋군.','깨','꽤',2],['무도가에 대한 [???]을 버리게나.','고정관념','고정간염',1],['우리 길드 일에 [???] 마라.','끼여들지','끼어들지',2],['이 퀘스트를 [???] 해결하면 좋을까요?','어떻게','어떡해',1],['포테의 숲을 한참 [???] 길을 찾았습니다.','해메다가','헤매다가',2],['리디아와의 추억을 생각하면 마음이 [???]','저려옵니다','절여옵니다',1],['물의 신전 [???]을 깨끗하게 청소했습니다.','안팎','안밖',1],['랭킹에서 [???] 성적을 거두었습니다.','고무적인','고문적인',1],['이번 승급 시험의 난이도는 [???].','문안하다','무난하다',2],['화론 촌장은 [???]한 태도를 보였습니다.','흐리멍텅','흐리멍덩',2],['피에트 마을에서 [???] 시 2배로 물어내셔야 합니다.','김을 파손','기물 파손',2],['도적의 [???]에 좋은 생각이 떠올랐습니다.','머릿속','머리 속',1],['케라수 국왕은 [???] 무주무시고 계십니다.','여지껏','여태껏',2],['이나와의 약속은 [???] 지켜야 합니다.','무적권','무조건',2],['바실리스크를 함부로 [???]가는 큰일 납니다.','건들이다','건드리다',2],['지금은 공성전을 할 [???]이 안됩니다.','여권','여건',2],['지속 가능한 성장을 [???]해야 합니다.','지향','지양',1],['[???] 패배한 건지 모르겠습니다.','어쨰서','어째서',2],['길드원을 [???] 확인했습니다.','일일히','일일이',2],['공성전 계획이 [???] 무산되었다.','번번이','번번히',1],['그린혼 학원 식당에 쥐가 [???] 있습니다.','들끌고','들끓고',2],['오피온의 굴 조사를 시작하겠[???].','습니다','읍니다',1],['씰리에게 [???]을 태우던 시절이 엊그제 같군.','무등','목말',2],['백작 부인께 [???] 반말입니까?','얻다 대고','어따 대고',1],['후치가 며칠 전부터 몸살이 [???].','났습니다','낳습니다',1],['포션은 [???] 먹는게 좋습니다.','족음씩','조금씩',2],['[???] 길드 대전도 승리 합시다.','이번주','이번 주',2],['[???]에 적룡굴로 들어갔습니다.','제작년','재작년',2],['곧 그룹 사냥을 시작[???] 합니다.','하려고','할려고',1],['뮤레칸의 등장에 [???]을 찌푸렸습니다.','눈살','눈쌀',1],['모험이 끝난 뒤 모두 함께 [???]를 했습니다','뒷풀이','뒤풀이',2],['계단 [???]에서 성직자가 울고 있습니다','아래쪽','아랫쪽',1],['너는 [???] 아이템을 줍지 않았니?','왜','외',1],['간신 [???]들이 나라를 망치는군요.','모리배','몰이배',1]
].map(([question,choice1,choice2,answer])=>({id:crypto.randomUUID(),question,choice1,choice2,answer,reason:'사용자가 추가한 족보'}));
const key = 'darkness-spelling-helper-v1';
let entries = load();
const seedVersionKey = `${key}-seed-v2`;
if(!localStorage.getItem(seedVersionKey)){
  const added = seed.find(x => x.question === '[???] 길드 대전도 승리합시다.');
  if(added && !entries.some(x => x.question === added.question)) entries.unshift(structuredClone(added));
  localStorage.setItem(seedVersionKey, '1');
  localStorage.setItem(key, JSON.stringify(entries));
}
const seedVersionKey3 = `${key}-seed-v3`;
if(!localStorage.getItem(seedVersionKey3)){
  const added = seed.find(x => x.question === '수오미 마을에 [???]가 시작되었어.');
  if(added && !entries.some(x => x.question === added.question)) entries.unshift(structuredClone(added));
  localStorage.setItem(seedVersionKey3, '1');
  localStorage.setItem(key, JSON.stringify(entries));
}
const seedVersionKey4 = `${key}-supplied-v1`;
if(!localStorage.getItem(seedVersionKey4)){
  suppliedSeed.forEach(item=>{if(!entries.some(x=>x.question===item.question&&x.choice1===item.choice1&&x.choice2===item.choice2)) entries.push(structuredClone(item))});
  localStorage.setItem(seedVersionKey4, '1');
  localStorage.setItem(key, JSON.stringify(entries));
}
const seedVersionKey5 = `${key}-dedupe-v1`;
if(!localStorage.getItem(seedVersionKey5)){
  const seen = new Set();
  entries = entries.filter(item=>{const fingerprint=[item.question,item.choice1,item.choice2].map(x=>String(x).replace(/\s+/g,'').replace(/[.?!]/g,'')).join('|');if(seen.has(fingerprint))return false;seen.add(fingerprint);return true});
  localStorage.setItem(seedVersionKey5, '1');
  localStorage.setItem(key, JSON.stringify(entries));
}
const $ = id => document.getElementById(id);
function load(){try{const value=JSON.parse(localStorage.getItem(key));return Array.isArray(value)&&value.length?value:structuredClone(seed)}catch{return structuredClone(seed)}}
function persist(){localStorage.setItem(key,JSON.stringify(entries));renderEntries()}
function normal(s=''){return s.replace(/\s+/g,'').replace(/[“”"'`.,!?·:;()[\]{}]/g,'').replace(/\?{2,}/g,'').toLowerCase()}
function score(query, item){const q=normal(query), target=normal(item.question);if(!q)return 0;if(q===target)return 100;if(q.includes(target)||target.includes(q))return 82;const words=target.match(/[가-힣a-z0-9]{2,}/g)||[];const hits=words.filter(w=>q.includes(w)).length;return words.length?hits/words.length*65:0}
function find(query, c1='', c2=''){let candidates=entries.map(item=>({item,score:score(query,item)})).sort((a,b)=>b.score-a.score);let best=candidates[0];if(!best||best.score<35)return null;const wanted=best.item.answer===1?best.item.choice1:best.item.choice2;if(c1&&c2&&!normal(c1).includes(normal(wanted))&&!normal(c2).includes(normal(wanted)))return null;return best}
function dictionaryUrl(word){return `https://stdict.korean.go.kr/search/searchResult.do?pageSize=10&searchKeyword=${encodeURIComponent(word)}`}
function sourceLinks(c1,c2){const choices=[c1,c2].filter(Boolean);if(!choices.length)return '<div class="source-links"><a target="_blank" rel="noopener" href="https://stdict.korean.go.kr/">국립국어원 표준국어대사전 열기 ↗</a></div>';const compareQuery=encodeURIComponent(`site:korean.go.kr ${choices.map(x=>`\"${x}\"`).join(' ')} 맞춤법`);const webQuery=encodeURIComponent(`${choices.map(x=>`\"${x}\"`).join(' ')} 맞춤법`);return `<div class="source-links">${choices.map((word,i)=>`<a target="_blank" rel="noopener" href="${dictionaryUrl(word)}">${i+1}번 ‘${escapeHtml(word)}’ 사전 검색 ↗</a>`).join('')}<a target="_blank" rel="noopener" href="https://www.google.com/search?q=${compareQuery}">국립국어원 온라인가나다 우선 검색 ↗</a><a target="_blank" rel="noopener" href="https://www.google.com/search?q=${webQuery}">두 선택지 웹 비교 검색 ↗</a></div>`}
function showResult(el, result, c1='', c2=''){if(!result){el.className='result';el.innerHTML=`<strong>저장된 정답을 찾지 못했습니다.</strong><br><span class="reason">선택지를 국립국어원 표준국어대사전에서 각각 확인한 뒤, 확정한 답은 ‘내 문제집’에 저장하세요.</span>${sourceLinks(c1,c2)}`;return}const {item,score}=result;const answer=item.answer===1?item.choice1:item.choice2;let displayedNumber=item.answer;if(c1&&c2){if(normal(c1)===normal(answer))displayedNumber=1;else if(normal(c2)===normal(answer))displayedNumber=2}el.className='result';el.innerHTML=`<div class="answer">정답: ${displayedNumber}번 · ${escapeHtml(answer)}</div><div class="reason">${escapeHtml(item.reason||'저장된 근거 없음')} · 일치도 ${Math.round(score)}%</div>`}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function renderEntries(){$('count').textContent=`${entries.length}문항`;const box=$('entries');box.innerHTML='';entries.forEach(item=>{const node=$('entryTemplate').content.firstElementChild.cloneNode(true);node.querySelector('.entry-q').textContent=item.question;node.querySelector('.entry-a').textContent=`정답 ${item.answer}번: ${item.answer===1?item.choice1:item.choice2}`;node.querySelector('.entry-r').textContent=item.reason||'근거 없음';node.querySelector('.delete').onclick=()=>{entries=entries.filter(x=>x.id!==item.id);persist()};box.append(node)})}
document.querySelectorAll('.tab').forEach(button=>button.onclick=()=>{document.querySelectorAll('.tab,.panel').forEach(x=>x.classList.remove('active'));button.classList.add('active');$(button.dataset.tab).classList.add('active')});
$('searchBtn').onclick=()=>showResult($('typingResult'),find($('question').value,$('choice1').value,$('choice2').value),$('choice1').value,$('choice2').value);
function extractChoices(text){const lines=String(text).replace(/\r/g,'').split('\n');let c1='',c2='';for(const line of lines){const one=line.match(/^\s*(?:1\s*(?:번|[.)])|①)\s*(.+?)\s*$/),two=line.match(/^\s*(?:2\s*(?:번|[.)])|②)\s*(.+?)\s*$/);if(one)c1=one[1];if(two)c2=two[1]}return {c1,c2}}
$('ocrSearchBtn').onclick=()=>{const text=$('ocrText').value,{c1,c2}=extractChoices(text);showResult($('ocrResult'),find(text,c1,c2),c1,c2)};
$('saveBtn').onclick=()=>{const question=$('newQuestion').value.trim(),choice1=$('newChoice1').value.trim(),choice2=$('newChoice2').value.trim();if(!question||!choice1||!choice2){$('saveStatus').textContent='문제와 두 선택지를 모두 입력해 주세요.';return}entries.unshift({id:crypto.randomUUID(),question,choice1,choice2,answer:Number($('newAnswer').value),reason:$('newReason').value.trim()});persist();$('saveStatus').textContent='저장했습니다.';['newQuestion','newChoice1','newChoice2','newReason'].forEach(id=>$(id).value='')};
$('exportBtn').onclick=()=>{const blob=new Blob([JSON.stringify(entries,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='darkness-spelling-answers.json';a.click();URL.revokeObjectURL(a.href)};
$('importInput').onchange=async e=>{const file=e.target.files[0];if(!file)return;try{const data=JSON.parse(await file.text());if(!Array.isArray(data))throw Error();entries=data.filter(x=>x.question&&x.choice1&&x.choice2&&[1,2].includes(Number(x.answer))).map(x=>({...x,id:x.id||crypto.randomUUID(),answer:Number(x.answer)}));persist();$('saveStatus').textContent='문제집을 불러왔습니다.'}catch{$('saveStatus').textContent='올바른 JSON 문제집 파일이 아닙니다.'}e.target.value=''};
$('resetBtn').onclick=()=>{if(confirm('현재 저장된 문제집을 기본 문제로 바꿀까요?')){entries=structuredClone([...seed,...suppliedSeed]);persist()}};
async function handlePaste(event){const file=[...event.clipboardData.items].find(i=>i.type.startsWith('image/'))?.getAsFile();if(!file)return;$('preview').src=URL.createObjectURL(file);$('preview').hidden=false;$('ocrStatus').textContent='OCR로 한글을 읽는 중… 첫 실행에는 언어 데이터를 내려받아 시간이 걸릴 수 있습니다.';try{const {data:{text}}=await Tesseract.recognize(file,'kor+eng',{logger:m=>{if(m.status==='recognizing text')$('ocrStatus').textContent=`OCR 인식 중… ${Math.round(m.progress*100)}%`}});$('ocrText').value=text;$('ocrStatus').textContent='인식 완료. 문구를 확인·수정한 후 정답을 찾으세요.';const {c1,c2}=extractChoices(text);showResult($('ocrResult'),find(text,c1,c2),c1,c2)}catch(err){$('ocrStatus').textContent='OCR을 실행하지 못했습니다. 인터넷 연결 후 다시 시도하거나 텍스트를 직접 입력해 주세요.'}}
$('pasteZone').addEventListener('paste',handlePaste);document.addEventListener('paste',event=>{if($('paste').classList.contains('active'))handlePaste(event)});$('pasteZone').onclick=()=>$('pasteZone').focus();
async function loadSharedBank(){
  try{
    const response=await fetch('./answers.json',{cache:'no-store'});
    if(!response.ok)throw Error();
    const payload=await response.json(), remote=Array.isArray(payload)?payload:payload.entries;
    if(!Array.isArray(remote))throw Error();
    let added=0;
    remote.forEach(item=>{if(item&&item.question&&item.choice1&&item.choice2&&[1,2].includes(Number(item.answer))&&!entries.some(x=>x.question===item.question&&x.choice1===item.choice1&&x.choice2===item.choice2)){entries.push({...item,id:item.id||crypto.randomUUID(),answer:Number(item.answer),reason:item.reason||'공용 문제집'});added++}});
    if(added)persist();
    $('sharedStatus').textContent=`공용 문제집 연결됨${payload.version?` · ${payload.version}`:''}${added?` · 새 문항 ${added}개 반영`:''}`;
  }catch{$('sharedStatus').textContent=location.protocol==='file:'?'로컬 파일 모드 · 공용 문제집은 배포된 웹사이트에서 자동 갱신됩니다.':'공용 문제집을 불러오지 못했습니다. 내장 문제집으로 계속 사용할 수 있습니다.'}
}
renderEntries();
loadSharedBank();
