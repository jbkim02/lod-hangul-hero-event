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
