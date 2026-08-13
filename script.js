/* =========================================================
   PUNJAB WARRIORS — SITE ENGINE
   ========================================================= */
const $ = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => [...p.querySelectorAll(s)];
const escapeHTML = (v="") => String(v).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));

function socialIcon(key){
  return {instagram:"fa-instagram",facebook:"fa-facebook-f",youtube:"fa-youtube",tiktok:"fa-tiktok",snapchat:"fa-snapchat",email:"fa-envelope",whatsapp:"fa-whatsapp"}[key] || "fa-link";
}
function fmtDate(v){
  if(!v) return "";
  const d = new Date(v + (String(v).length===10 ? "T12:00:00" : ""));
  return isNaN(d) ? v : d.toLocaleDateString(undefined,{year:"numeric",month:"short",day:"numeric"});
}
function initCommon(){
  const header = $(".site-header");
  const top = $(".back-top");
  window.addEventListener("scroll",()=>{
    header?.classList.toggle("scrolled", scrollY > 20);
    top?.classList.toggle("show", scrollY > 600);
  });
  top?.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));

  $$(".social-link").forEach(a=>a.addEventListener("click",()=>{ if(a.href==="#") return; }));
  $$(".menu-btn").forEach(btn=>btn.addEventListener("click",()=>{
    $(".social-drawer")?.classList.toggle("open");
  }));
  $(".mobile-toggle")?.addEventListener("click",()=>{
    $(".mobile-nav")?.classList.add("open"); document.body.classList.add("menu-open");
  });
  $(".mobile-close")?.addEventListener("click",()=>{
    $(".mobile-nav")?.classList.remove("open"); document.body.classList.remove("menu-open");
  });
  $$(".mobile-nav a").forEach(a=>a.addEventListener("click",()=>{
    $(".mobile-nav")?.classList.remove("open"); document.body.classList.remove("menu-open");
  }));

  $$(".social-list a").forEach(a=>a.addEventListener("mouseenter",()=>a.classList.add("hovered")));
}
function injectSocials(){
  $$(".social-list,.social-hub").forEach((wrap)=>{
    if(wrap.dataset.bound) return;
    wrap.dataset.bound="1";
    const items=[
      ["instagram","Instagram"],["facebook","Facebook"],["youtube","YouTube"],
      ["tiktok","TikTok"],["snapchat","Snapchat"],["email","Email"],["whatsapp","WhatsApp"]
    ];
    if(wrap.classList.contains("social-hub")){
      wrap.innerHTML=items.map(([k,n])=>`<a class="social-card glass social-link" target="_blank" rel="noopener" href="${SITE_DATA.social[k]}"><i class="fa-brands ${socialIcon(k)}"></i><span>${n}</span></a>`).join("");
    }else{
      wrap.innerHTML=items.map(([k,n])=>`<a class="social-link" target="_blank" rel="noopener" href="${SITE_DATA.social[k]}"><i class="fa-brands ${socialIcon(k)}"></i><span>${n}</span></a>`).join("");
    }
  });
}
function initLoader(){
  const loader=$(".loader"); if(!loader) return;
  setTimeout(()=>loader.classList.add("hide"),6200);
}
function initHero(){
  const slides=$$(".hero-slide"); if(!slides.length) return;
  let i=0; slides[0].classList.add("active");
  setInterval(()=>{slides[i].classList.remove("active"); i=(i+1)%slides.length; slides[i].classList.add("active")},6500);
}
function initReveal(){
  const els=$$(".reveal");
  if(!("IntersectionObserver" in window)){els.forEach(e=>e.classList.add("visible"));return}
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.1});
  els.forEach(e=>io.observe(e));
}
function fillTeam(){
  $$(".team-name-value").forEach(e=>e.textContent=SITE_DATA.team.name);
  const map={founded:"founded",homeGround:"homeGround",captain:"captain",league:"league",season:"season",email:"email",phone:"phone",location:"location"};
  Object.entries(map).forEach(([cls,key])=>$$(`.${cls}-value`).forEach(e=>e.textContent=SITE_DATA.team[key]));
}
function initStats(){
  const root=$(".stats-grid"); if(!root) return;
  const vals=[["PUNJAB WARRIORS","Team"],[SITE_DATA.team.founded,"Founded"],[SITE_DATA.team.homeGround,"Home Ground"],[SITE_DATA.team.captain,"Captain"],[SITE_DATA.team.season,"Season"]];
  root.innerHTML=vals.map(v=>`<div class="stat glass reveal"><small>${v[1]}</small><strong>${escapeHTML(v[0])}</strong></div>`).join("");
}
function playerCard(p){
  return `<article class="player-card glass" data-category="${escapeHTML(p.category)}" onclick="location.href='player.html?id=${encodeURIComponent(p.id)}'">
    <img loading="lazy" src="${p.image}" alt="${escapeHTML(p.name)}">
    <div class="player-num">${escapeHTML(p.number)}</div>
    <div class="player-overlay"><div class="player-role">${escapeHTML(p.role)}</div><h3>${escapeHTML(p.name)}</h3><p>${escapeHTML(p.batting)} • ${escapeHTML(p.bowling)}</p></div>
  </article>`;
}
function initPlayers(){
  const grid=$(".players-grid"), tabs=$(".player-tabs"); if(!grid||!tabs) return;
  const cats=["All","Batters","All-Rounders","Bowlers","Wicket Keepers"];
  tabs.innerHTML=cats.map((c,i)=>`<button class="filter-btn ${i===0?"active":""}" data-cat="${c}">${c}</button>`).join("");
  const render=cat=>grid.innerHTML=SITE_DATA.players.filter(p=>cat==="All"||p.category===cat).map(playerCard).join("")||`<div class="glass" style="padding:25px">Add players in <b>data.js</b>.</div>`;
  render("All");
  $$(".filter-btn",tabs).forEach(b=>b.onclick=()=>{$$(".filter-btn",tabs).forEach(x=>x.classList.remove("active"));b.classList.add("active");render(b.dataset.cat)});
}
function initNews(){
  const grid=$(".news-grid"); if(!grid) return;
  grid.innerHTML=SITE_DATA.news.map(n=>`<article class="news-card glass reveal"><img loading="lazy" src="${n.image}" alt="${escapeHTML(n.title)}"><div class="news-body"><div class="news-meta">${escapeHTML(n.category)} • ${fmtDate(n.date)}</div><h3>${escapeHTML(n.title)}</h3><p>${escapeHTML(n.description)}</p><a class="btn ghost" href="${n.link}">Read More</a></div></article>`).join("");
}
function initGallery(){
  const grid=$(".gallery-grid"); if(!grid) return;
  grid.innerHTML=SITE_DATA.gallery.map(g=>`<div class="gallery-item glass" data-image="${g.image}"><img loading="lazy" src="${g.image}" alt="${escapeHTML(g.title)}"><div class="gallery-caption">${escapeHTML(g.category)} — ${escapeHTML(g.title)}</div></div>`).join("");
  $$(".gallery-item",grid).forEach(x=>x.onclick=()=>{const lb=$(".lightbox");lb.querySelector("img").src=x.dataset.image;lb.classList.add("open")});
}
function initVideos(){
  const grid=$(".video-grid"); if(!grid) return;
  grid.innerHTML=SITE_DATA.videos.map(v=>{
    const isEmbed = /youtube\.com\/watch\?v=|youtu\.be\//.test(v.youtube);
    const media = isEmbed
      ? `<iframe loading="lazy" src="${v.youtube.includes("youtube.com/watch") ? v.youtube.replace("watch?v=","embed/") : v.youtube.replace("youtu.be/","youtube.com/embed/")}" title="${escapeHTML(v.title)}" allowfullscreen></iframe>`
      : `<img class="video-coming-soon" loading="lazy" src="assets/coming-soon-video.svg" alt="Video coming soon">`;
    return `<article class="video-card glass">${media}<div class="video-body"><div class="news-meta">${escapeHTML(v.category)}</div><h3>${escapeHTML(v.title)}</h3><a class="btn ghost" href="${v.youtube}" target="_blank" rel="noopener">Open Video Channel</a></div></article>`;
  }).join("");
}
function initSponsors(){
  const root=$(".sponsor-groups"); if(!root) return;
  root.innerHTML=Object.entries(SITE_DATA.sponsors).map(([group,items])=>`<div><h3>${escapeHTML(group)}</h3><div class="sponsor-grid">${items.map(s=>`<a class="sponsor glass" href="${s.url}" target="_blank" rel="noopener"><img loading="lazy" src="${s.logo}" alt="${escapeHTML(s.name)}"><span>${escapeHTML(s.name)}</span></a>`).join("")}</div></div>`).join("");
}
function initFixtures(){
  const grid=$(".match-grid"); if(!grid) return;
  const filters=$(".filters");
  if(filters) filters.innerHTML=["all","upcoming","completed"].map((x,i)=>`<button class="filter-btn ${i===0?"active":""}" data-filter="${x}">${x[0].toUpperCase()+x.slice(1)}</button>`).join("");
  const render=f=>grid.innerHTML=SITE_DATA.fixtures.filter(m=>f==="all"||m.status===f).map(m=>`<article class="match-card glass reveal"><div class="match-top"><span>${escapeHTML(m.league)}</span><span>${escapeHTML(m.status)}</span></div><div class="teams"><div><img class="team-logo" src="${SITE_DATA.assets.mainLogo}" alt="Punjab Warriors"><div class="team-name">Punjab Warriors</div></div><div class="vs">VS</div><div><img class="team-logo" src="${m.opponentLogo}" alt="${escapeHTML(m.opponent)}"><div class="team-name">${escapeHTML(m.opponent)}</div></div></div><div class="match-meta"><div class="meta-box"><small>Date</small><span>${fmtDate(m.date)}</span></div><div class="meta-box"><small>Time</small><span>${escapeHTML(m.time)}</span></div><div class="meta-box"><small>Venue</small><span>${escapeHTML(m.venue)}</span></div><div class="meta-box"><small>League</small><span>${escapeHTML(m.league)}</span></div></div><div style="margin-top:18px"><a class="btn primary" href="#">Match Details</a></div></article>`).join("");
  render("all");
  $$(".filter-btn",filters||document).forEach(b=>b.onclick=()=>{$$(".filter-btn",filters).forEach(x=>x.classList.remove("active"));b.classList.add("active");render(b.dataset.filter)});
}
function initResults(){
  const grid=$(".match-grid"); if(!grid) return;
  grid.innerHTML=SITE_DATA.results.map(m=>`<article class="match-card glass reveal"><div class="match-top"><span>${fmtDate(m.date)}</span><span class="result-winner">${escapeHTML(m.winner)}</span></div><div class="teams"><div><img class="team-logo" src="${SITE_DATA.assets.mainLogo}" alt="Punjab Warriors"><div class="team-name">Punjab Warriors</div></div><div class="vs">VS</div><div><img class="team-logo" src="${m.opponentLogo}" alt="${escapeHTML(m.opponent)}"><div class="team-name">${escapeHTML(m.opponent)}</div></div></div><div class="scoreboard"><div class="score glass"><small>Punjab Warriors</small><strong>${escapeHTML(m.pwScore)}</strong></div><div class="score glass"><small>${escapeHTML(m.opponent)}</small><strong>${escapeHTML(m.oppScore)}</strong></div></div><div class="match-meta" style="margin-top:18px"><div class="meta-box"><small>Player of Match</small><span>${escapeHTML(m.playerOfMatch)}</span></div><div class="meta-box"><small>Venue</small><span>${escapeHTML(m.venue)}</span></div><div class="meta-box"><small>Date</small><span>${fmtDate(m.date)}</span></div><div class="meta-box"><small>Result</small><span class="result-winner">${escapeHTML(m.winner)}</span></div></div><div style="margin-top:18px"><a class="btn primary" href="${m.scorecard}" target="_blank" rel="noopener">View Full Scorecard</a></div></article>`).join("");
  const mvproot=$(".mvp-list"); if(mvproot) mvproot.innerHTML=SITE_DATA.results.map(m=>`<article class="mvp glass reveal"><img loading="lazy" src="${m.mvp.image}" alt="${escapeHTML(m.mvp.name)}"><div><div class="eyebrow">Warrior of the Match</div><h2>${escapeHTML(m.mvp.name)}</h2><p class="lead">${escapeHTML(m.mvp.performance)}</p><div class="grid mvp-stats"><div class="mvp-stat glass"><strong>${escapeHTML(m.mvp.runs)}</strong><span>Runs</span></div><div class="mvp-stat glass"><strong>${escapeHTML(m.mvp.wickets)}</strong><span>Wickets</span></div><div class="mvp-stat glass"><strong>${escapeHTML(m.mvp.strikeRate)}</strong><span>Strike Rate</span></div></div><p style="color:#888">Match: ${escapeHTML(m.mvp.match)}</p></div></article>`).join("");
}
function initStandings(){
  const body=$(".standings tbody"); if(!body) return;
  body.innerHTML=SITE_DATA.standings.map(s=>`<tr class="${s.highlight?"highlight":""}"><td>${s.pos}</td><td style="text-align:left;font-weight:800">${escapeHTML(s.team)}</td><td>${s.p}</td><td>${s.w}</td><td>${s.l}</td><td>${s.nr}</td><td>${s.pts}</td><td>${s.nrr}</td></tr>`).join("");
}
function initPlayerProfile(){
  const root=$(".player-profile"); if(!root) return;
  const id=new URLSearchParams(location.search).get("id");
  const p=SITE_DATA.players.find(x=>x.id===id) || SITE_DATA.players[0];
  root.innerHTML=`<div class="mvp"><img src="${p.image}" alt="${escapeHTML(p.name)}"><div><div class="eyebrow">${escapeHTML(p.role)} • #${escapeHTML(p.number)}</div><h1>${escapeHTML(p.name)}</h1><p class="lead">${escapeHTML(p.bio)}</p><div class="grid profile-stat-grid" style="margin:28px 0">${[
    ["Matches",p.matches],["Runs",p.runs],["Wickets",p.wickets],["Best Score",p.bestScore],
    ["Best Bowling",p.bestBowling],["Strike Rate",p.strikeRate],["Average",p.average],["Batting",p.batting]
  ].map(s=>`<div class="profile-stat glass"><strong>${escapeHTML(s[1])}</strong><span>${escapeHTML(s[0])}</span></div>`).join("")}</div><p style="color:#9da3ad"><b>Bowling:</b> ${escapeHTML(p.bowling)}</p><div style="margin-top:20px">${p.socials?.instagram && p.socials.instagram!="#"?`<a class="btn ghost" target="_blank" rel="noopener" href="${p.socials.instagram}"><i class="fa-brands fa-instagram"></i> Instagram</a>`:""}</div></div></div>`;
}
function initForms(){
  const form=$(".contact-form"); if(form) form.addEventListener("submit",e=>{e.preventDefault();alert("Thank you. Connect this form to your email/Formspree/Netlify Forms before launch.")});
  const tryout=$(".tryout-form"); if(tryout) tryout.addEventListener("submit",e=>{e.preventDefault();alert("Application captured in the demo UI. Connect this form to your preferred form service before launch.")});
}
function init(){
  initCommon(); injectSocials(); initLoader(); initHero(); initReveal(); fillTeam(); initStats(); initPlayers(); initNews(); initGallery(); initVideos(); initSponsors(); initFixtures(); initResults(); initStandings(); initPlayerProfile(); initForms();
  $(".lightbox button")?.addEventListener("click",()=>$(".lightbox").classList.remove("open"));
  $(".lightbox")?.addEventListener("click",e=>{if(e.target.classList.contains("lightbox"))e.currentTarget.classList.remove("open")});
  $$(".register").forEach(a=>{a.href=SITE_DATA.registrationForm;a.target="_blank";a.rel="noopener"});
  $$(".uniform-link").forEach(a=>a.href=SITE_DATA.assets.uniform);
}
document.addEventListener("DOMContentLoaded",init);
