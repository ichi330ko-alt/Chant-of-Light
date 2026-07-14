<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>心の天気予報｜光の詠唱</title>

<style>
*{box-sizing:border-box}
html,body{margin:0;min-height:100%}

body{
  min-height:100vh;
  padding:30px 14px 46px;
  color:#514737;
  font-family:"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif;
  background:
    radial-gradient(circle at 50% 7%,rgba(95,139,210,.42),transparent 38%),
    linear-gradient(180deg,#07183f 0%,#173b78 39%,#f3e8d5 39%,#ead8bd 100%);
}

.page{
  width:min(720px,100%);
  margin:0 auto;
  text-align:center;
}

.title{
  margin:0 0 8px;
  color:#f3d592;
  font-size:clamp(27px,6vw,40px);
  font-weight:normal;
  letter-spacing:.14em;
}

.subtitle{
  margin:0 0 28px;
  color:#f4ecdd;
  line-height:1.8;
}

.forecast{
  padding:42px clamp(22px,6vw,52px);
  border:1px solid rgba(189,147,76,.45);
  border-radius:22px;
  background:rgba(255,253,247,.95);
  box-shadow:0 18px 48px rgba(19,31,63,.24);
}

.status{
  margin:0 0 18px;
  color:#8e7655;
  font-size:14px;
}

.weather{
  margin:0 0 14px;
  color:#806039;
  font-size:clamp(30px,7vw,46px);
  font-weight:normal;
}

.meta{
  margin:0 0 28px;
  color:#8b704b;
  line-height:1.8;
}

.comment{
  margin:0;
  color:#524738;
  font-size:clamp(16px,3.8vw,18px);
  line-height:2.15;
  text-align:left;
}

.card-box{
  margin-top:34px;
  padding-top:28px;
  border-top:1px solid rgba(184,139,71,.35);
}

.card-label{
  margin:0 0 10px;
  color:#9b7337;
  font-size:15px;
  letter-spacing:.12em;
}

.card-name{
  margin:0 0 20px;
  color:#6d512b;
  font-size:clamp(25px,6vw,36px);
  font-weight:normal;
}

.button{
  display:inline-block;
  margin:6px;
  padding:13px 24px;
  border:1px solid #b68b48;
  border-radius:999px;
  background:#c4994e;
  color:#fff;
  text-decoration:none;
  font:inherit;
  cursor:pointer;
}

.secondary{
  background:rgba(255,255,255,.72);
  color:#71552e;
}

.details{
  margin-top:26px;
  text-align:left;
}

.details summary{
  cursor:pointer;
  color:#80603b;
}

.details-list{
  margin:14px 0 0;
  padding-left:20px;
  color:#75644f;
  line-height:1.8;
  font-size:14px;
}

.test-area{
  margin-top:28px;
  padding-top:20px;
  border-top:1px dashed rgba(184,139,71,.38);
}

.selector{
  width:min(330px,100%);
  padding:11px 14px;
  border:1px solid #c8a463;
  border-radius:10px;
  background:#fffaf0;
  color:#594a37;
  font:inherit;
}

.demo{
  margin:12px 0 0;
  color:#8d795f;
  font-size:13px;
  line-height:1.7;
}

@media(max-width:520px){
  body{padding:22px 8px 36px}
  .forecast{padding:36px 24px}
}
</style>
</head>

<body>

<main class="page">

  <h1 class="title">心の天気予報</h1>

  <p class="subtitle">
    今日の宇宙の空模様を、<br>
    心の天気としてお届けします。
  </p>

  <section class="forecast">

    <p class="status" id="status">
      今日の星回りを読み取っています……
    </p>

    <h2 class="weather" id="weather">
      読み込み中……
    </h2>

    <p class="meta" id="meta"></p>

    <p class="comment" id="comment"></p>

    <div class="card-box" id="cardBox" hidden>

      <p class="card-label">
        今日のカード
      </p>

      <h3 class="card-name" id="cardName"></h3>

      <a class="button" id="cardLink" href="#">
        カードを見る
      </a>

    </div>

    <details class="details" id="details" hidden>
      <summary>今日の判定内容を見る</summary>
      <ul class="details-list" id="detailsList"></ul>
    </details>

    <div class="test-area">
      <select
        class="selector"
        id="demoSelector"
        aria-label="試作用の天気切り替え">
        <option value="">自動判定に戻す</option>
      </select>

      <p class="demo">
        確認用に、天気を手動で切り替えることもできます。
      </p>
    </div>

  </section>

  <a class="button secondary" href="index.html">
    Home
  </a>

</main>

<script src="https://cdn.jsdelivr.net/npm/astronomy-engine@2.1.19/astronomy.browser.min.js"></script>
<script src="forecast-engine.js?v=2"></script>

<script>
const weatherEl =
  document.getElementById("weather");

const metaEl =
  document.getElementById("meta");

const commentEl =
  document.getElementById("comment");

const cardBox =
  document.getElementById("cardBox");

const cardName =
  document.getElementById("cardName");

const cardLink =
  document.getElementById("cardLink");

const selector =
  document.getElementById("demoSelector");

const statusEl =
  document.getElementById("status");

const details =
  document.getElementById("details");

const detailsList =
  document.getElementById("detailsList");

let weatherData = {};
let automaticResult = null;

function hashString(text){
  let hash = 0;

  for(let i = 0; i < text.length; i++){
    hash =
      ((hash << 5) - hash) +
      text.charCodeAt(i);

    hash |= 0;
  }

  return Math.abs(hash);
}

function todayKey(){
  const d = new Date();

  return [
    d.getFullYear(),
    d.getMonth() + 1,
    d.getDate()
  ].join("-");
}

function pickDaily(list,salt){
  const index =
    hashString(todayKey() + salt) %
    list.length;

  return list[index];
}

function renderWeather(key,mode){

  const data =
    weatherData[key];

  if(!data){
    return;
  }

  const card =
    pickDaily(
      data.cards,
      key
    );

  weatherEl.textContent =
    data.label;

  metaEl.textContent =
    "主な影響：" +
    data.planets.join("・") +
    "　｜　テーマ：" +
    data.theme;

  commentEl.textContent =
    data.comment;

  cardName.textContent =
    card.title;

  cardLink.href =
    "card.html?card=" +
    card.id;

  cardBox.hidden = false;

  statusEl.textContent =
    mode === "automatic"
      ? "今日の惑星配置から自動判定しました。"
      : "確認用の手動表示です。";
}

function renderDetails(result){

  detailsList.innerHTML = "";

  if(
    !result ||
    !result.matchedRules ||
    result.matchedRules.length === 0
  ){
    details.hidden = true;
    return;
  }

  result.matchedRules
    .slice(0,8)
    .forEach(function(rule){

      const li =
        document.createElement("li");

      li.textContent =
        rule.name +
        "（" +
        rule.aspect.label +
        "／誤差 " +
        rule.aspect.orb.toFixed(1) +
        "°）";

      detailsList.appendChild(li);
    });

  details.hidden = false;
}

async function start(){

  try{

    const weatherResponse =
      await fetch(
        "weather.json?v=2",
        { cache:"no-store" }
      );

    if(!weatherResponse.ok){
      throw new Error(
        "weather.jsonを読み込めませんでした"
      );
    }

    weatherData =
      await weatherResponse.json();

    Object.keys(weatherData)
      .forEach(function(key){

        const option =
          document.createElement("option");

        option.value = key;

        option.textContent =
          weatherData[key].label;

        selector.appendChild(option);
      });

    automaticResult =
      await ChantForecastEngine.calculate({
        rulesUrl:
          "astrology-rules.json?v=2"
      });

    renderWeather(
      automaticResult.weather,
      "automatic"
    );

    renderDetails(
      automaticResult
    );

    selector.addEventListener(
      "change",
      function(){

        if(!selector.value){

          renderWeather(
            automaticResult.weather,
            "automatic"
          );

          renderDetails(
            automaticResult
          );

          return;
        }

        renderWeather(
          selector.value,
          "manual"
        );

        details.hidden = true;
      }
    );
  }
  catch(error){

    weatherEl.textContent =
      "表示できませんでした";

    statusEl.textContent =
      "読み込みに失敗しました。";

    commentEl.textContent =
      error.message;
  }
}

start();
</script>

</body>
</html>
