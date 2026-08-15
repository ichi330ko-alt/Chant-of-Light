(() => {

  "use strict";

 

  const PRINCIPLES = [

    {

      id: 1,

      name: "生成",

      keywords: ["始まり", "新しいもの", "生まれようとしているもの", "まだ形になっていないもの"],

      focus: "まだ形になっていないもの、新しく生まれようとしているもの",

      questionBase: "これから新たに始まろうとしていることは何でしょうか。"

    },

    {

      id: 2,

      name: "結び",

      keywords: ["つながり", "縁", "関係", "結びつき", "組み合わせ"],

      focus: "人・物・出来事・考えなど、何かと何かが結びつくこと",

      questionBase: "何と結びつき、あるいは何を結び直す必要があるでしょうか。"

    },

    {

      id: 3,

      name: "境界",

      keywords: ["境目", "距離", "範囲", "区切り", "守る領域"],

      focus: "自分と外側、ここまでとここから、守る範囲や距離",

      questionBase: "どこまでを自分の領域として扱う必要があるでしょうか。"

    },

    {

      id: 4,

      name: "循環",

      keywords: ["巡り", "流れ", "受け渡し", "繰り返し", "戻ってくるもの"],

      focus: "繰り返し、流れ、受け渡し、戻ってくるもの",

      questionBase: "今何が巡り、そしてどこで止まってしまっているでしょうか。"

    },

    {

      id: 5,

      name: "時空",

      keywords: ["時期", "位置", "順序", "タイミング", "今ここでの配置"],

      focus: "時期、位置、順序、タイミング、今ここでの配置",

      questionBase: "いつ、どこで、誰と、その優先順位はどうなっているでしょうか。"

    },

    {

      id: 6,

      name: "意識",

      keywords: ["認識", "感じ方", "意味づけ", "思い込み", "捉え方"],

      focus: "自分の認識、感じ方、意味づけ、思い込み",

      questionBase: "この問題自体をどのように見ているのでしょうか？"

    },

    {

      id: 7,

      name: "不可知",

      keywords: ["まだ分からないこと", "未確定", "決められないこと", "分からないまま残す部分"],

      focus: "今はまだ確定できないこと、分からないまま残す部分",

      questionBase: "今は分からないままでいい部分と、今知ることができる部分は何でしょうか。"

    }

  ];

 

  const ACTIONS = [

    {

      code: "A",

      name: "知る",

      keywords: ["知る", "調べる", "確認する", "明らかにする", "理解する"],

      meaning: "未知を既知にする。情報を得る・明らかにする。",

      verb: "明らかにする",

      questionTail: "それに対して、具体的に知ることが今必要なことです。",

      today: "曖昧なままにしていることを一つだけ、調べる・聞く・確認する。",

      staff: [

        ["ラジエル", "秘密・深層知・理解しにくいものの解読。意味が分からないことや、隠れているものを読み解きたいとき。"],

        ["ウリエル", "理解・照明・構造を見抜く。状況を理解し、現実の見通しを得たいとき。"]

      ]

    },

    {

      code: "B",

      name: "疑う",

      keywords: ["疑う", "見直す", "確かめ直す", "前提を外す", "再評価"],

      meaning: "「そうだ」と思っている前提を、いったん未確定へ戻す。",

      verb: "前提を見直す",

      questionTail: "自分の中の決めつけ、先入観、色眼鏡を外すことが求められます。",

      today: "決めつけていることを一つだけ選び、もう一度確かめてみる。",

      staff: [

        ["ジェレミエル", "振り返り・再評価。自分の認識や、過去の見方を見直したいとき。"],

        ["ラジエル", "深層知・解読。当然だと思っている前提の奥を確かめたいとき。"]

      ]

    },

    {

      code: "C",

      name: "変える",

      keywords: ["変える", "変更", "転換", "切り替える", "別の状態へ移す"],

      meaning: "今ある状態を、別の状態へ変更する。",

      verb: "状態を変える",

      questionTail: "この相談のために何かひとつ変えるとしたら、何を変えますか？",

      today: "変えたい部分を一つに絞り、小さく違うやり方を試す。",

      staff: [

        ["ザドキエル", "赦し・変換・解放。今までの関わり方や、抱えているものを変えたいとき。"],

        ["須佐之男命", "突破・再建。停滞や行き詰まりを大きく動かし、立て直したいとき。"]

      ]

    },

    {

      code: "D",

      name: "保つ",

      keywords: ["保つ", "守る", "維持する", "続ける", "損なわない"],

      meaning: "今ある状態を損なわず維持する。",

      verb: "守り保つ",

      questionTail: "今変えずに守ったほうが良いものは何だと思いますか？",

      today: "大切にしたいものを一つ決め、それを損なわない行動を選ぶ。",

      staff: [

        ["ミカエル", "守護・防衛。大切な状態や領域を守りたいとき。"]

      ]

    },

    {

      code: "E",

      name: "渡す",

      keywords: ["渡す", "伝える", "託す", "差し出す", "外へ移す"],

      meaning: "自分側から相手・外側へ、価値や情報などを移す。",

      verb: "外へ渡す",

      questionTail: "その上で、今手放せるものがあるとしたら、それは何でしょう？",

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

      keywords: ["受け取る", "迎え入れる", "受容する", "取り入れる"],

      meaning: "相手・外側から自分側へ迎え入れる。",

      verb: "受け取る",

      questionTail: "自分が受け取るものを、受け入れる準備をする必要があります。",

      today: "新しい手掛かり・助け・情報を一つ受け取る。",

      staff: [

        ["恵比寿神", "生業・福・迎え入れる。手掛かり・恵み・新しく入るものを受け取りたいとき。"]

      ]

    },

    {

      code: "G",

      name: "構成する",

      keywords: ["構成する", "組み立てる", "形にする", "仕組みにする", "整える"],

      meaning: "要素を組み、形・仕組みとして成立させる。",

      verb: "形や仕組みにする",

      questionTail: "状況や物事を整理し、一度組み立て直してみることで、気付くことがあるかもしれません。",

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

      keywords: ["解体する", "分ける", "ほどく", "分解する", "構造を外す"],

      meaning: "成立している構造を分け、ほどく。",

      verb: "分けてほどく",

      questionTail: "自分の中にあるものを一度壊してみる、分けて考えてみることで、何が見えるでしょうか。",

      today: "複雑になっているものを一つ選び、要素を分けて書き出す。",

      staff: [

        ["不動明王", "断障・迷いを断つ・構造を壊す。成立している悪循環や構造をほどきたいとき。"]

      ]

    },

    {

      code: "I",

      name: "選ぶ",

      keywords: ["選ぶ", "決める", "絞る", "残す", "方向を定める"],

      meaning: "複数の候補から、残すもの・進む方向を定める。",

      verb: "選び定める",

      questionTail: "自分が残したいもの、選びたい方向はどこでしょうか。自分の心はどこに向いていますか？",

      today: "候補を増やさず、今ある中から一つ選ぶ。",

      staff: [

        ["猿田彦大神", "道・分岐・先導。これから進む方向を選びたいとき。"],

        ["ジェレミエル", "振り返り・再評価。過去を見渡し、何を残すか選びたいとき。"]

      ]

    },

    {

      code: "J",

      name: "除く",

      keywords: ["除く", "外す", "取り除く", "手放す", "減らす"],

      meaning: "不要な対象・候補・要素を外す。",

      verb: "不要なものを外す",

      questionTail: "守りたいもののために、今自分から切り離したほうが良いものは何でしょうか？",

      today: "不要だと分かっているものを一つだけ外す。",

      staff: [

        ["不動明王", "断行・不要なものを断つ。迷いなく不要なものを外したいとき。"],

        ["ザドキエル", "解放・手放し。執着や拘束などを外して自由になりたいとき。"]

      ]

    },

    {

      code: "K",

      name: "育てる",

      keywords: ["育てる", "成長させる", "成熟させる", "発展させる", "実らせる"],

      meaning: "すでにあるものを発達・成熟させる。",

      verb: "育てる",

      questionTail: "今あるもので、自分が向き合い育てるもの、手をかけるべきものは何だと思いますか？",

      today: "育てたいものを一つ決め、今日できる小さな手入れをする。",

      staff: [

        ["大国主命", "関係・場・共同体を育て成立させる。複数者が共存できる関係や場を育てたいとき。"],

        ["稲荷大神", "生産・繁栄・実り。始めた活動・仕事・才能を育てて実らせたいとき。"],

        ["ラファエル", "回復・癒し・伴走。傷ついたものを時間をかけて回復・成長させたいとき。"],

        ["木花咲耶姫", "開花・顕現。育ってきたものを咲かせ、外へ現したいとき。"]

      ]

    }

  ];

 

  const EXTENSION_QUESTIONS = {

    "1-A": "これから新たに始まろうとしていること、始めようとしていることについて、何を知るべきでしょうか。知るということは「何を知らないかを知る」ことでもあります。",

    "1-B": "これから新たに始まろうとしていることについて、自分が「こうなるはず」と決めつけていることはありませんか？いったんその前提を外した時、何が見えるでしょうか。",

    "1-C": "これから新たに始まろうとしていることのために、何かひとつ変えるとしたら何を変えますか？",

    "1-D": "これから新たに始まろうとしていることの中で、変えずに守っておきたいものは何でしょうか。",

    "1-E": "これから新たに始まろうとしていること・始めることのために、今手放せるものがあるとしたら、それは何でしょうか。",

    "1-F": "これから新たに始まろうとしていること・始めることのために、今自分が受け取れるものはなんでしょうか？知識、物、助言、厳しさ、新たな知見・・・それを受け入れる準備はできていますか？",

    "1-G": "これから新たに始まろうとしていること・始めることで形にする時、何を整理し、どのように組み立てていくと良いでしょうか。どう完成させるかを考えてみましょう。",

    "1-H": "これから新たに始まろうとしていること・始めることに関して、一度そのものを壊したり、あるいは自分と切り離して考えた時、何が見えてくるでしょうか。",

    "1-I": "これから新たに始まろうとしていること・始めることの中で、自分が残したいもの、選びたい方向はどこでしょうか。自分の心はどこに向いていますか？",

    "1-J": "これから新たに始まろうとしていること・始めることのために、今切り離したほうがよいものは何でしょうか。自分の心、誘惑、これまでの経験、考え方。一新するのは今かもしれません。",

    "1-K": "これから新たに始まろうとしていること・始めることの中で、今自分が向き合い、育てていきたいものは何でしょうか。",

    "2-A": "何と結びつく必要があるのか、あるいは何を結び直す必要があるのか。そのために、今具体的に何を知る必要があるのかを考えてみましょう。",

    "2-B": "今あるつながりについて、自分の中の決めつけや先入観はありませんか？いったんそれを外すと、関係の見え方はどう変わるでしょうか。",

    "2-C": "今あるつながりや結びつきのために、何かひとつ変えるとしたら何を変えますか？",

    "2-D": "今あるつながりの中で、変えずに守っておいたほうがよいものは何だと思いますか？",

    "2-E": "今あるつながりの中で、自分が抱え続けずに相手へ渡したり、手放したりできるものは何でしょうか。もしくは、大事にしているものでも渡したほうがいいなと感じることは何でしょうか？",

    "2-F": "今の自分は、誰かや何かとのつながりから何を受け取れるでしょうか。意見、物、愛、厳しさ・・・それを受け入れる準備はできていますか？",

    "2-G": "今ある人・物・出来事・考えを、どのように結び合わせれば新しい形になるでしょうか。",

    "2-H": "今あるつながりを一度分けて考えてみるとしたら、何と何を切り分ける必要があるでしょうか。そこから何が見えるでしょうか。",

    "2-I": "今あるつながりの中で、自分が残したいもの、選びたい関係はどれでしょうか。自分の心はどこに向いていますか？",

    "2-J": "守りたいつながりのために、今その関係から切り離したほうがよいものは何でしょうか。結びつくことに対して余計なものを捨てることも時には必要です。",

    "2-K": "今あるつながりの中で、自分が向き合い、時間をかけて育てたいものは何でしょうか。その結びが実らせるものを想像してみましょう。",

    "3-A": "どこまでを自分の領域として扱う必要があるでしょうか。その境界を決めるために、今具体的に「自分がどこまで許せるのか」を考えて意識してみましょう。",

    "3-B": "自分と相手の領域について、決めつけや先入観はありませんか？いったんそれを外すと、どこまでが自分のものなのか見え方は変わるでしょうか。",

    "3-C": "自分と外側との境界について、この相談のために何かひとつ変えるとしたら何を変えますか？",

    "3-D": "自分の領域を守るために、今変えずに保っておいたほうがよいものは何でしょうか。",

    "3-E": "どこまでを自分の領域として扱う必要があるでしょうか。そのうえで、今手放せるものがあるとしたら、それは何でしょうか。",

    "3-F": "自分の領域を守りながら、外側から受け取ってよいものは何でしょうか。意見、知識、知恵、優しさ・・・それを受け入れる準備はできていますか？",

    "3-G": "自分と外側との境界を整えるために、範囲や役割、関わり方をどのように組み立て直せるでしょうか。構成するために必要なもの、不要なものも考えてみましょう。",

    "3-H": "自分と外側との境界について、一度分けて考えたほうがよいものは何でしょうか。何を自分のものと相手のものに分けられるでしょうか。一度すべてを分けて見てみると、「どれが自分に必要なのか」が見えてくるはずです。",

    "3-I": "自分の領域に残したいものは何でしょうか。そして、どこまでを自分が引き受けるのか選びましょう。自分の荷物は自分のもの。相手の荷物まで背負わない意識も必要です。",

    "3-J": "守りたいもののために、今自分から切り離したほうがよいものは何でしょうか？",

    "3-K": "自分の領域の中で、今自分が向き合い、守りながら育てていきたいものは何でしょうか。",

    "4-A": "今何が巡り、そしてどこで止まってしまっているでしょうか。その流れを知るために、今具体的に何を確かめると良いでしょうか。自分に問いましょう。",

    "4-B": "今の流れについて、「こうなるものだ」と決めつけていることはありませんか？その前提を外すと、別の流れが見えてくるかもしれません。",

    "4-C": "今の流れを動かすために、何かひとつ変えるとしたら何を変えますか？",

    "4-D": "今巡っているものの中で、自分の中で大事にしたいものはなんですか？ルーティーンや日々の流れの中で大事にしたいことでも構いません。自分に聞いてみましょう。",

    "4-E": "今の流れの中で、自分のところに留めず、次へ渡したり手放したりできるものは何でしょうか。自分のところに留めず次へ渡すことも、循環を生み出すひとつの方法です。",

    "4-F": "今の流れの中で、自分のもとへ来ているものは何でしょうか。それを受け取る準備はできていますか？物事や感情、あるいは転機も受け取るものに含まれます。",

    "4-G": "止まっている流れをもう一度巡らせるために、何を整理し、どのような仕組みに組み直すと良いでしょうか。整理することで直す場所がわかるはずです。",

    "4-H": "今の流れを一度分けて見てみるとしたら、どこを切り分けると止まっている理由が見えるでしょうか。問題の場所を見つけるためには一度全てを見通せるようにすると良いでしょう。",

    "4-I": "今巡っているものの中で、残したい流れ、選びたい方向はどれでしょうか。自分の心はどこに向いていますか？",

    "4-J": "流れを取り戻すために、今そこから取り除いたほうがよいものは何でしょうか。",

    "4-K": "今すでに巡り始めているものの中で、時間をかけて育て、より大きな流れにしたいものは何でしょうか。研鑽や経験を積み重ねることも、循環を育てることの一つです。",

    "5-A": "いつ、どこで、誰と、その優先順位はどうなっているでしょうか。それを決めるために、今具体的に何を知るべきでしょうか？",

    "5-B": "時期や場所、相手、優先順位について、「こうでなければ」と決めつけていることはありませんか？いったんそれを外すと何が変わるでしょうか。",

    "5-C": "いつ、どこで、誰と、何を優先するのか。この相談のために何かひとつ変えるとしたら何を変えますか？",

    "5-D": "この相談の優先順位を考えたとき、今変えずに守っておいたほうがよいものは何だと思いますか？",

    "5-E": "この相談の優先順位を考えたとき、今手放せるものがあるとしたら、それは何でしょうか。",

    "5-F": "今この時期、この場所、この関係の中で、自分が受け取れるものは何でしょうか。それを受け入れる準備はできていますか？",

    "5-G": "いつ、どこで、誰と、何をするのか。状況を整理して、順序や役割を組み立て直すとしたらどうなるでしょうか。整理してみることで、今どこから手をつけるべきかが見えてくるかもしれません。",

    "5-H": "時期・場所・相手・優先順位を一度分けて考えてみると、何が見えてくるでしょうか。",

    "5-I": "いつ、どこで、誰と、何を優先したいでしょうか。今の自分が選びたいものはどれですか？",

    "5-J": "本当に優先したいもののために、今予定や関係、役割から外したほうがよいものは何でしょうか。",

    "5-K": "今あるものの中で、これから時間と手をかけて育てるべきものは何でしょうか。そのために何を優先しますか？",

    "6-A": "今ある問題を、自分はどのように見ているでしょうか。その見方の中で、まだ分かっていないことは何でしょうか。何を知ることができれば、道が開けるでしょうか。",

    "6-B": "この問題をどのように見ているでしょうか。その中に、自分の決めつけや先入観、色眼鏡はありませんか？",

    "6-C": "この問題自体をどのように見ているのでしょうか？この相談のために何かひとつ変えるとしたら、何を変えますか？",

    "6-D": "この問題自体をどのように見ているのでしょうか？その見方の中で、今変えずに守っておきたいものは何でしょうか。",

    "6-E": "この問題自体をどのように見ているのでしょうか？そのうえで、今手放せる考えや思いがあるとしたら、それは何でしょうか。",

    "6-F": "この問題自体をどのように見ているのでしょうか？今までとは違う見方や考えを受け入れる準備はできていますか？",

    "6-G": "この問題について、自分の考えや感じていることを一度整理し、組み立て直してみると、何に気付くでしょうか。",

    "6-H": "この問題について、自分の中にある考えや思いを一度壊したり、分けて考えたりすると、何が見えるでしょうか。",

    "6-I": "この問題について、自分が残したい考え、選びたい方向はどこでしょうか。自分の心はどこに向いていますか？",

    "6-J": "この問題について、守りたいもののために、今自分の中から切り離したほうがよい考えや思いは何でしょうか。",

    "6-K": "この問題について、今ある考えや気持ちの中で、自分が向き合い、育てていけるものはあるでしょうか？経験や知見、感性・・・あなたが育てられるものを考えてみましょう。",

    "7-A": "今は分からないままでいい部分と、今知ることができる部分は何でしょうか。今知れることがあるなら、まず何を確かめますか？",

    "7-B": "まだ分からないことについて、自分の中で勝手に答えを決めてしまってはいませんか？いったんその決めつけを外してみると、何が残るでしょうか。",

    "7-C": "まだ分からないことを無理に確定させずに、この相談のために今変えられることがあるとしたら何でしょうか。",

    "7-D": "まだ答えが分からない中でも、今変えずに守っておいたほうがよいものは何でしょうか。",

    "7-E": "まだ分からないことを抱えたままでも、今手放せるものがあるとしたら、それは何でしょうか。",

    "7-F": "まだ分からないことを無理に決めず、これから受け取るものを受け入れる余地を残せていますか？",

    "7-G": "まだ分からない部分を残したまま、今分かっていることだけで組み立てられるものは何でしょうか。",

    "7-H": "分からないことをひとまとめにせず、今分かることと分からないことに分けてみると、何が見えるでしょうか。",

    "7-I": "まだ答えが分からない中でも、今選べるものは何でしょうか。自分の心はどこに向いていますか？",

    "7-J": "まだ答えが分からなくても、今自分から切り離してよいものは何でしょうか。分からないことに対する不安や恐れも、切り離しても構わないものです。",

    "7-K": "まだ先が分からない中でも、今すでにあるもので、自分が向き合い育てていけるものは何でしょうか。分からないことはある種、無限の可能性でもあります。"

  };

 

 

  const byId = (id) => document.getElementById(id);

 

  let selectedBlue = null;

  let selectedRed = null;

  let selectedStaff = null;

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

 

 

  function prepareResultLayout() {

    const handles = byId("result-handles");

    if (!handles || byId("result-overview")) return;

 

    const keywordBlock = handles.parentElement;

    const keywordHeading = keywordBlock?.querySelector("h2, h3, h4, h5");

    if (keywordHeading) keywordHeading.textContent = "当てはまるキーワード";

 

    if (keywordBlock) {

      const overviewBlock = keywordBlock.cloneNode(true);

      const overviewHeading = overviewBlock.querySelector("h2, h3, h4, h5");

      if (overviewHeading) overviewHeading.textContent = "概要";

 

      const overviewText =

        overviewBlock.querySelector("#result-handles") ||

        overviewBlock.querySelector("p");

 

      if (overviewText) {

        overviewText.id = "result-overview";

        overviewText.textContent = "";

      }

 

      keywordBlock.insertAdjacentElement("afterend", overviewBlock);

    }

 

    const question = byId("result-question");

    const questionHeading = question?.parentElement?.querySelector("h2, h3, h4, h5");

    if (questionHeading) questionHeading.textContent = "いまの自分への問い";

 

    const staff = byId("result-staff");

    const staffHeading = staff?.parentElement?.querySelector("h2, h3, h4, h5");

    if (staffHeading) staffHeading.textContent = "担当窓口";

 

    const action = byId("result-action");

    if (action?.parentElement) action.parentElement.hidden = true;

  }

 

  function renderResult() {

    const principle = PRINCIPLES.find((item) => item.id === selectedBlue);

    const action = ACTIONS.find((item) => item.code === selectedRed);

 

    if (!principle || !action) return;

 

    const extension = `${principle.id}-${action.code}`;

 

    byId("result-extension").textContent = `内線 ${extension}`;

    byId("result-combination").textContent = `${principle.name} × ${action.name}`;

    byId("result-title").textContent = `${principle.name}にあるものを「${action.name}」内線`;

 

    prepareResultLayout();

 

    const keywords = [...principle.keywords, ...action.keywords];

    byId("result-handles").textContent = keywords.join(" ／ ");

 

    const overview = byId("result-overview");

    if (overview) {

      overview.textContent =

        `この内線は、${principle.name}に関わる「${principle.focus}」について、` +

        `「${action.name}」の働きで見ていきます。` +

        `今は、その中で「${action.verb}」ことに目を向ける内線です。`;

    }

 

    const extensionKey = `${principle.id}-${action.code}`;

    byId("result-question").textContent =

      EXTENSION_QUESTIONS[extensionKey] ||

      `${principle.questionBase} そのうえで、${action.questionTail}`;

 

    byId("result-action").textContent = "";

 

    selectedStaff = null;

    renderStaff(action.staff);

  }

 

  function setPrayerForStaff(name) {

    selectedStaff = name;

 

    byId("prayer-template").textContent =

      `${name}様、\n` +

      `この問いに向き合うためのお力添えをありがとうございます。\n` +

      `必要なことを、自分の現実の中で受け取り、行動していきます。\n` +

      `お力添えありがとうございました。\n` +

      `このお願いはここで終わります。`;

 

    byId("prayer-template").closest(".call-prayer-box").hidden = false;

    byId("finish-call-button").hidden = false;

  }

 

  function renderStaff(staffList) {

    const container = byId("result-staff");

    container.innerHTML = "";

 

    const prayerBox = byId("prayer-template").closest(".call-prayer-box");

 

    if (staffList.length === 1) {

      const [name, description] = staffList[0];

 

      const item = document.createElement("div");

      item.className = "call-staff-item is-selected";

 

      const title = document.createElement("strong");

      title.textContent = `今回の担当：${name}`;

 

      const text = document.createElement("p");

      text.textContent = description;

 

      item.append(title, text);

      container.appendChild(item);

 

      setPrayerForStaff(name);

      return;

    }

 

    prayerBox.hidden = true;

    byId("finish-call-button").hidden = true;

 

    const guide = document.createElement("p");

    guide.className = "call-staff-guide";

    guide.textContent =

      "担当候補が複数います。あなたの相談内容にいちばん近い担当者を選んでください。";

    container.appendChild(guide);

 

    staffList.forEach(([name, description]) => {

      const button = document.createElement("button");

      button.type = "button";

      button.className = "call-staff-item call-staff-select";

 

      const title = document.createElement("strong");

      title.textContent = name;

 

      const text = document.createElement("p");

      text.textContent = description;

 

      button.append(title, text);

 

      button.addEventListener("click", () => {

        container.querySelectorAll(".call-staff-select").forEach((item) => {

          item.classList.remove("is-selected");

        });

 

        button.classList.add("is-selected");

        setPrayerForStaff(name);

 

        prayerBox.scrollIntoView({ behavior: "smooth", block: "center" });

      });

 

      container.appendChild(button);

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

    selectedStaff = null;

 

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

    prepareResultLayout();

    byId("finish-call-button").addEventListener("click", finishCall);

    byId("restart-button").addEventListener("click", restart);

  }

 

  document.addEventListener("DOMContentLoaded", init);

})();
