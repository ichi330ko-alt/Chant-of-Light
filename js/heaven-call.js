(() => {

  "use strict";

 

  const PRINCIPLES = [

    {

      id: 1,

      name: "生成",

      focus: "まだ形になっていないもの、新しく生まれようとしているもの",

      questionBase: "この相談の中で、これから生まれようとしているものは何でしょう。"

    },

    {

      id: 2,

      name: "結び",

      focus: "人・物・出来事・考えなど、何かと何かが結びつくこと",

      questionBase: "この相談では、何と何を結び直す必要があるでしょう。"

    },

    {

      id: 3,

      name: "境界",

      focus: "自分と外側、ここまでとここから、守る範囲や距離",

      questionBase: "この相談で、どこまでを自分の領域として扱う必要があるでしょう。"

    },

    {

      id: 4,

      name: "循環",

      focus: "繰り返し、流れ、受け渡し、戻ってくるもの",

      questionBase: "この相談の中で、いま何が巡り、どこで流れが止まっているでしょう。"

    },

    {

      id: 5,

      name: "時空",

      focus: "時期、位置、順序、タイミング、今ここでの配置",

      questionBase: "この相談では、いつ・どこで・どの順番で扱うのがよいでしょう。"

    },

    {

      id: 6,

      name: "意識",

      focus: "自分の認識、感じ方、意味づけ、思い込み",

      questionBase: "私はこの相談を、どのように見ているでしょう。"

    },

    {

      id: 7,

      name: "不可知",

      focus: "今はまだ確定できないこと、分からないまま残す部分",

      questionBase: "今は分からないままでよい部分と、今知れる部分はどこでしょう。"

    }

  ];

 

  const ACTIONS = [

    {

      code: "A",

      name: "知る",

      meaning: "未知を既知にする。情報を得る・明らかにする。",

      verb: "明らかにする",

      questionTail: "今、ひとつ具体的に知るなら何でしょう。",

      today: "曖昧なままにしていることを一つだけ、調べる・聞く・確認する。",

      staff: [

        ["ラジエル", "秘密・深層知・理解しにくいものの解読。意味が分からないことや、隠れているものを読み解きたいとき。"],

        ["ウリエル", "理解・照明・構造を見抜く。状況を理解し、現実の見通しを得たいとき。"]

      ]

    },

    {

      code: "B",

      name: "疑う",

      meaning: "「そうだ」と思っている前提を、いったん未確定へ戻す。",

      verb: "前提を見直す",

      questionTail: "『そうに違いない』と思っていることの中で、一度だけ確かめ直せるものは何でしょう。",

      today: "決めつけていることを一つだけ選び、もう一度確かめてみる。",

      staff: [

        ["ジェレミエル", "振り返り・再評価。自分の認識や、過去の見方を見直したいとき。"],

        ["ラジエル", "深層知・解読。当然だと思っている前提の奥を確かめたいとき。"]

      ]

    },

    {

      code: "C",

      name: "変える",

      meaning: "今ある状態を、別の状態へ変更する。",

      verb: "状態を変える",

      questionTail: "今のままではなく、どこをひとつ変えたいでしょう。",

      today: "変えたい部分を一つに絞り、小さく違うやり方を試す。",

      staff: [

        ["ザドキエル", "赦し・変換・解放。今までの関わり方や、抱えているものを変えたいとき。"],

        ["須佐之男命", "突破・再建。停滞や行き詰まりを大きく動かし、立て直したいとき。"]

      ]

    },

    {

      code: "D",

      name: "保つ",

      meaning: "今ある状態を損なわず維持する。",

      verb: "守り保つ",

      questionTail: "今、変えずに守っておいたほうがよいものは何でしょう。",

      today: "大切にしたいものを一つ決め、それを損なわない行動を選ぶ。",

      staff: [

        ["ミカエル", "守護・防衛。大切な状態や領域を守りたいとき。"]

      ]

    },

    {

      code: "E",

      name: "渡す",

      meaning: "自分側から相手・外側へ、価値や情報などを移す。",

      verb: "外へ渡す",

      questionTail: "今、自分の側から何を渡す必要があるでしょう。",

      today: "伝える・任せる・差し出すものを一つ選ぶ。",

      staff: [

        ["ガブリエル", "伝達・告知・橋渡し。必要な知らせや言葉を届けたいとき。"],

        ["サンダルフォン", "祈りを上へ運ぶ。願い・祈りを託したいとき。"],

        ["弁財天", "言葉・音・表現。どう表現すれば伝わるかを整えたいとき。"]

      ]

    },

    {

      code: "F",

      name: "受け取る",

      meaning: "相手・外側から自分側へ迎え入れる。",

      verb: "受け取る",

      questionTail: "自分の外から、今受け取れるものは何でしょう。",

      today: "新しい手掛かり・助け・情報を一つ受け取る。",

      staff: [

        ["恵比寿神", "生業・福・迎え入れる。手掛かり・恵み・新しく入るものを受け取りたいとき。"]

      ]

    },

    {

      code: "G",

      name: "構成する",

      meaning: "要素を組み、形・仕組みとして成立させる。",

      verb: "形や仕組みにする",

      questionTail: "ばらばらなものを、どんな形に組み直せるでしょう。",

      today: "必要な要素を3つ以内に整理し、順番や形を決める。",

      staff: [

        ["メタトロン", "統合・秩序化・体系化。全体の構造や配置を整えたいとき。"],

        ["少彦名命", "知識・方法を具体化する。理屈を現実で使える方法へ落としたいとき。"],

        ["アリエル", "物質世界・現実化。意図や構想を現実の形にしたいとき。"]

      ]

    },

    {

      code: "H",

      name: "解体する",

      meaning: "成立している構造を分け、ほどく。",

      verb: "分けてほどく",

      questionTail: "いま一度、分けて考えたほうがよいものは何でしょう。",

      today: "複雑になっているものを一つ選び、要素を分けて書き出す。",

      staff: [

        ["不動明王", "断障・迷いを断つ・構造を壊す。成立している悪循環や構造をほどきたいとき。"]

      ]

    },

    {

      code: "I",

      name: "選ぶ",

      meaning: "複数の候補から、残すもの・進む方向を定める。",

      verb: "選び定める",

      questionTail: "今の自分が残すもの、進む方向はどれでしょう。",

      today: "候補を増やさず、今ある中から一つ選ぶ。",

      staff: [

        ["猿田彦大神", "道・分岐・先導。これから進む方向を選びたいとき。"],

        ["ジェレミエル", "振り返り・再評価。過去を見渡し、何を残すか選びたいとき。"]

      ]

    },

    {

      code: "J",

      name: "除く",

      meaning: "不要な対象・候補・要素を外す。",

      verb: "不要なものを外す",

      questionTail: "守りたいもののために、今外してよいものは何でしょう。",

      today: "不要だと分かっているものを一つだけ外す。",

      staff: [

        ["不動明王", "断行・不要なものを断つ。迷いなく不要なものを外したいとき。"],

        ["ザドキエル", "解放・手放し。執着や拘束などを外して自由になりたいとき。"]

      ]

    },

    {

      code: "K",

      name: "育てる",

      meaning: "すでにあるものを発達・成熟させる。",

      verb: "育てる",

      questionTail: "すでにあるものの中で、今時間をかけて育てたいものは何でしょう。",

      today: "育てたいものを一つ決め、今日できる小さな手入れをする。",

      staff: [

        ["大国主命", "関係・場・共同体を育て成立させる。複数者が共存できる関係や場を育てたいとき。"],

        ["稲荷大神", "生産・繁栄・実り。始めた活動・仕事・才能を育てて実らせたいとき。"],

        ["ラファエル", "回復・癒し・伴走。傷ついたものを時間をかけて回復・成長させたいとき。"],

        ["木花咲耶姫", "開花・顕現。育ってきたものを咲かせ、外へ現したいとき。"]

      ]

    }

  ];

 

  const byId = (id) => document.getElementById(id);

 

  let selectedBlue = null;

  let selectedRed = null;

  let connectionTimer = null;

 

  function shuffle(items) {

    const array = [...items];

 

    for (let index = array.length - 1; index > 0; index -= 1) {

      const randomIndex = Math.floor(Math.random() * (index + 1));

      [array[index], array[randomIndex]] = [array[randomIndex], array[index]];

    }

 

    return array;

  }

 

  function createCard(value, type) {

    const button = document.createElement("button");

    button.type = "button";

    button.className = `call-card call-card-${type}`;

    button.dataset.value = value;

    button.setAttribute("aria-label", `${type === "blue" ? "青" : "赤"}のカード`);

 

    const inner = document.createElement("span");

    inner.className = "call-card-inner";

 

    const front = document.createElement("span");

    front.className = "call-card-face call-card-front";

 

    const back = document.createElement("span");

    back.className = "call-card-face call-card-back";

    back.textContent = value;

 

    inner.append(front, back);

    button.appendChild(inner);

 

    button.addEventListener("click", () => selectCard(button, type, value));

    return button;

  }

 

  function buildCards() {

    const blueGrid = byId("blue-card-grid");

    const redGrid = byId("red-card-grid");

 

    blueGrid.innerHTML = "";

    redGrid.innerHTML = "";

 

    shuffle(PRINCIPLES).forEach((item) => {

      blueGrid.appendChild(createCard(String(item.id), "blue"));

    });

 

    shuffle(ACTIONS).forEach((item) => {

      redGrid.appendChild(createCard(item.code, "red"));

    });

  }

 

  function selectCard(button, type, value) {

    if (type === "blue" && selectedBlue !== null) return;

    if (type === "red" && selectedRed !== null) return;

 

    button.classList.add("is-selected");

    button.parentElement.classList.add("has-selection");

 

    if (type === "blue") {

      selectedBlue = Number(value);

      byId("blue-selection-value").textContent = value;

      byId("blue-selection").hidden = false;

    } else {

      selectedRed = value;

      byId("red-selection-value").textContent = value;

      byId("red-selection").hidden = false;

    }

 

    if (selectedBlue !== null && selectedRed !== null) {

      beginConnection();

    }

  }

 

  function beginConnection() {

    const extension = `${selectedBlue}-${selectedRed}`;

    byId("extension-number").textContent = extension;

    byId("connection-section").hidden = false;

    byId("connection-section").scrollIntoView({ behavior: "smooth", block: "center" });

 

    window.clearTimeout(connectionTimer);

    connectionTimer = window.setTimeout(() => {

      renderResult();

      byId("result-section").hidden = false;

      byId("result-section").scrollIntoView({ behavior: "smooth", block: "start" });

    }, 1450);

  }

 

  function renderResult() {

    const principle = PRINCIPLES.find((item) => item.id === selectedBlue);

    const action = ACTIONS.find((item) => item.code === selectedRed);

 

    if (!principle || !action) return;

 

    const extension = `${principle.id}-${action.code}`;

 

    byId("result-extension").textContent = `内線 ${extension}`;

    byId("result-combination").textContent = `${principle.name} × ${action.name}`;

    byId("result-title").textContent = `${principle.name}にあるものを「${action.name}」内線`;

 

    byId("result-handles").textContent =

      `この内線は、「${principle.focus}」に対して、${action.meaning}という働きを重ねて読みます。` +

      `つまり今回は、${principle.name}の領域にあるものを、いま「${action.verb}」ことがテーマです。`;

 

    byId("result-question").textContent =

      `${principle.questionBase} そのうえで、${action.questionTail}`;

 

    byId("result-action").textContent = action.today;

 

    renderStaff(action.staff);

 

    const firstStaff = action.staff[0]?.[0] || "担当の存在";

    byId("prayer-template").textContent =

      `${firstStaff}様、\n` +

      `この問いに向き合うためのお力添えをありがとうございます。\n` +

      `必要なことを、自分の現実の中で受け取り、行動していきます。\n` +

      `お力添えありがとうございました。\n` +

      `このお願いはここで終わります。`;

  }

 

  function renderStaff(staffList) {

    const container = byId("result-staff");

    container.innerHTML = "";

 

    staffList.forEach(([name, description]) => {

      const item = document.createElement("div");

      item.className = "call-staff-item";

 

      const title = document.createElement("strong");

      title.textContent = name;

 

      const text = document.createElement("p");

      text.textContent = description;

 

      item.append(title, text);

      container.appendChild(item);

    });

  }

 

  function finishCall() {

    byId("finish-call-button").hidden = true;

    byId("call-finished-message").hidden = false;

    byId("restart-button").hidden = false;

  }

 

  function restart() {

    window.clearTimeout(connectionTimer);

 

    selectedBlue = null;

    selectedRed = null;

 

    document.querySelectorAll(".call-card-grid").forEach((grid) => {

      grid.classList.remove("has-selection");

    });

 

    buildCards();

 

    byId("blue-selection").hidden = true;

    byId("red-selection").hidden = true;

    byId("connection-section").hidden = true;

    byId("result-section").hidden = true;

    byId("finish-call-button").hidden = false;

    byId("call-finished-message").hidden = true;

    byId("restart-button").hidden = true;

 

    window.scrollTo({ top: 0, behavior: "smooth" });

  }

 

  function init() {

    buildCards();

    byId("finish-call-button").addEventListener("click", finishCall);

    byId("restart-button").addEventListener("click", restart);

  }

 

  document.addEventListener("DOMContentLoaded", init);

})();
