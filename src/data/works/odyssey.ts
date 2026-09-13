import type { Work } from "../../lib/types";

export const odyssey: Work = {
  id: "odyssey",
  title: "奥德赛",
  englishTitle: "The Odyssey",
  subtitle: "二十四卷中的漂泊、辨认与归家",
  author: "荷马（传统归属）",
  era: "古希腊，约公元前八世纪形成的史诗传统",
  genre: ["史诗", "神话", "冒险", "归乡"],
  description:
    "特洛伊战争结束后，奥德修斯仍被困在海上；伊塔卡的妻儿则面对消耗家产、觊觎王位的求婚人。诗歌先随忒勒马科斯寻父，再让漂泊者在费阿刻斯人的宴席上回述冒险，最后以一连串试探、辨认和冲突重建家园。",
  logline:
    "离家二十年的英雄必须先成为无人认出的陌生人，才能重新成为丈夫、父亲和国王。",
  accent: "#62c5e8",
  cover: "/art/odyssey.svg",
  version: "1.0.0",
  unitLabel: "卷",
  coverage: {
    label: "二十四卷完整情节覆盖 · 原创中文整理",
    description:
      "依据公版英文译本核对、用原创中文整理全部二十四卷的主要情节；每卷含摘要、四段复述与事件索引。这是故事导读和关系数据，不是希腊文原文全文，也不是任何中文译本的全文或逐句翻译。卷题均为编辑题名。",
    originalUnitCount: 24,
    isFullText: false,
  },
  mapLabel: "叙事空间示意图 · 非真实航海图",
  mapNote:
    "所有坐标都是0—100范围内的故事空间排布，不是经纬度、距离或地中海精确路径。独眼巨人之地、艾俄利亚、艾艾埃、奥吉吉亚、斯刻里亚等神话地点的现实定位有争议，本图不采用确定比附。章节地点是场景索引，不是单一人物的连续旅程；事件用【当下】【转述】【倒叙】【歌中】【回忆】区分层次。第1—4卷以忒勒马科斯线为主，第9—12卷的航程是奥德修斯在斯刻里亚的倒叙，不能按卷序误接到第5—8卷之后；法罗斯、特洛伊、叙里埃、帕尔纳索斯等转述或回忆地点也不等于当下到访。",
  sources: [
    {
      id: "pg-butler",
      label: "Project Gutenberg：Samuel Butler 公版英文译本（1900）",
      url: "https://www.gutenberg.org/files/1727/1727-h/1727-h.htm",
      note: "主要情节和分卷边界依据；已抓取并检查BOOK I—XXIV。统一将Ulysses、Minerva、Neptune等译回常见希腊名。译者序言的作者及地理假说不作为本数据事实。",
    },
    {
      id: "ws-butler",
      label: "Wikisource：The Odyssey (Butler) 目录与公版说明",
      url: "https://en.wikisource.org/wiki/The_Odyssey_(Butler)",
      note: "核对二十四卷目录、各卷内容范围及版本信息；与Gutenberg为同一译本，不算独立译文证据。",
    },
    {
      id: "spark-outline",
      label: "SparkNotes：分组章节梗概",
      url: "https://www.sparknotes.com/lit/odyssey/sparklets/",
      note: "仅交叉核对叙事结构，不复制其表述；分组压缩可能模糊先后，具体卷界以公版正文为准。",
    },
    {
      id: "spark-15-16",
      label: "SparkNotes：第15—16卷梗概",
      url: "https://www.sparknotes.com/lit/odyssey/section8/",
      note: "辅助核对返程、忒俄克吕墨诺斯登船、猪倌身世与父子相认的顺序。",
    },
    {
      id: "spark-21-22",
      label: "SparkNotes：第21—22卷梗概",
      url: "https://www.sparknotes.com/lit/odyssey/section11/",
      note: "辅助核对试弓和厅堂战斗。其分析段误将欧律马科斯之死归于忒勒马科斯的矛，正文与本页摘要均为奥德修斯射杀；本数据采用正文。伤疤位置也以正文的腿部为准。",
    },
  ],
  chapters: [
    {
      id: "odyssey-01",
      order: 1,
      title: "诸神议归，少年起身",
      arc: "寻父之旅（1—4卷）",
      summary:
        "奥德修斯尚困海岛，雅典娜却先到伊塔卡唤醒他的儿子。忒勒马科斯从旁观家产被侵吞，转向公开挑战求婚人的秩序。",
      paragraphs: [
        "诗歌从归途受阻的奥德修斯说起，而不是从特洛伊陷落顺叙。波塞冬远赴受祭，诸神在奥林波斯议事；宙斯以阿伽门农遇害后的复仇为例，指出凡人也会自招灾祸。雅典娜请求让被卡吕普索扣留的英雄回乡，宙斯说明海神因独眼儿子被刺瞎而怀恨。",
        "雅典娜化作门忒斯来到王宫，忒勒马科斯先迎客、备餐，再低声诉说父亲失踪和家产耗损。女神劝他召集公民会议，要求求婚人离开，并去皮洛斯与斯巴达问询父亲的消息；无论寻得生讯还是死讯，他都不能再只等别人替自己决定。",
        "斐弥俄斯唱起希腊将士的艰难归途，珀涅罗珀下楼请求换曲，免得旧伤被揭开。忒勒马科斯却让歌者继续，把家中的发言权揽到自己身上。母亲惊讶地退回楼上，儿子的成长由此带着关怀与冒犯并存的张力。",
        "忒勒马科斯宣布次日开会，安提诺俄斯讥讽他的强硬，欧律马科斯则追问来客身份。他对外仍称客人为父亲旧友，心里已经察觉神助。夜里欧律克勒娅照料他就寝，少年仍想着出航，宫中的争执尚未解决。",
      ],
      characterIds: [
        "odysseus",
        "telemachus",
        "penelope",
        "athena",
        "zeus",
        "poseidon",
        "calypso",
        "polyphemus",
        "agamemnon",
        "phemius",
        "antinous",
        "eurymachus",
        "eurycleia",
      ],
      locationIds: ["olympus", "ithaca-palace"],
      events: [
        {
          id: "odyssey-01-e1",
          title: "奥林波斯议归",
          description:
            "【当下】雅典娜请求援助奥德修斯，宙斯说明波塞冬的怨恨，归乡计划获得支持。",
          characterIds: ["athena", "zeus", "odysseus", "poseidon"],
          locationId: "olympus",
        },
        {
          id: "odyssey-01-e2",
          title: "门忒斯的劝告",
          description: "【当下】女神乔装访客，劝忒勒马科斯召开会议并出海寻父。",
          characterIds: ["athena", "telemachus"],
          locationId: "ithaca-palace",
        },
        {
          id: "odyssey-01-e3",
          title: "母子与归途之歌",
          description:
            "【当下】珀涅罗珀请求停唱伤心往事，忒勒马科斯却维护歌者并宣示家主责任。",
          characterIds: ["penelope", "telemachus", "phemius"],
          locationId: "ithaca-palace",
        },
        {
          id: "odyssey-01-e4",
          title: "宣布召开会议",
          description: "【当下】少年当面挑战求婚人，夜间在乳母照料下思索航行。",
          characterIds: ["telemachus", "antinous", "eurymachus", "eurycleia"],
          locationId: "ithaca-palace",
        },
      ],
      sourceIds: ["pg-butler", "ws-butler", "spark-outline"],
      originalRange: "Book I",
      editorialNote:
        "编辑题名。奥德修斯在此主要是被谈论者；卡吕普索获释场景在第5卷，刺瞎独眼巨人的完整倒叙在第9卷。",
    },
    {
      id: "odyssey-02",
      order: 2,
      title: "无果的会议与夜航",
      arc: "寻父之旅（1—4卷）",
      summary:
        "忒勒马科斯无法靠公民会议制止求婚人，却在雅典娜协助下筹船备粮，瞒着母亲踏上寻父之路。",
      paragraphs: [
        "久未召集的伊塔卡会议上，忒勒马科斯把父亲不归和家产遭侵占的双重困境摆到众人面前。他要求求婚人自己负担宴饮，不要借求婚之名吃空一个家庭。听众虽然同情，仍没有形成能够保护他的行动。",
        "安提诺俄斯把责任推给珀涅罗珀，揭露她以织完拉厄尔忒斯的寿衣为再婚条件，白天织布、夜间拆线，拖延数年才被婢女告密。他要求儿子将母亲送回外家，忒勒马科斯拒绝强逐生母，并呼求神明主持公道。",
        "两只鹰飞临会场，相互抓扯后离去。老预言者将其解释为奥德修斯将归、求婚人将遭报复，欧律马科斯却嘲笑预言。真正的门托耳责备民众旁观；会议终究散去，雅典娜随后借用门托耳的形貌安慰少年。",
        "女神又化作忒勒马科斯招募船员、借到船只，使求婚人困倦散席。少年请欧律克勒娅准备酒与粮，并让她暂不告诉母亲。入夜后，他与扮作门托耳的雅典娜登船，向诸神奠酒，借顺风驶向皮洛斯。",
      ],
      characterIds: [
        "telemachus",
        "penelope",
        "antinous",
        "eurymachus",
        "laertes",
        "mentor",
        "athena",
        "eurycleia",
        "odysseus",
      ],
      locationIds: ["ithaca-palace", "ithaca-harbor"],
      events: [
        {
          id: "odyssey-02-e1",
          title: "陈诉家难",
          description: "【当下】忒勒马科斯召集会议，要求停止侵吞父亲的产业。",
          characterIds: ["telemachus", "antinous"],
          locationId: "ithaca-harbor",
        },
        {
          id: "odyssey-02-e2",
          title: "寿衣计被揭",
          description:
            "【转述】安提诺俄斯讲出珀涅罗珀昼织夜拆寿衣的旧事，并逼迫她择偶。",
          characterIds: ["antinous", "penelope", "laertes", "telemachus"],
          locationId: "ithaca-palace",
        },
        {
          id: "odyssey-02-e3",
          title: "鹰兆未能止恶",
          description:
            "【当下】鸟兆与门托耳的责备都未能推动众人制止求婚人；雅典娜转而安排船只。",
          characterIds: ["mentor", "eurymachus", "athena", "telemachus"],
          locationId: "ithaca-harbor",
        },
        {
          id: "odyssey-02-e4",
          title: "隐秘出航",
          description:
            "【当下】乳母暗备粮酒，忒勒马科斯随化作门托耳的雅典娜夜航。",
          characterIds: ["telemachus", "eurycleia", "athena"],
          locationId: "ithaca-harbor",
        },
      ],
      sourceIds: ["pg-butler", "ws-butler", "spark-outline"],
      originalRange: "Book II",
      editorialNote:
        "编辑题名。港城节点统摄会场与出航地，不主张古代会场的精确位置；寿衣是会议中披露的旧事。真正的门托耳与雅典娜的化身并非同一行动者。",
    },
    {
      id: "odyssey-03",
      order: 3,
      title: "皮洛斯的祭礼与老王",
      arc: "寻父之旅（1—4卷）",
      summary:
        "涅斯托尔热情接待忒勒马科斯，回顾战后诸王分散的归途，却不知道奥德修斯近况；少年随后乘车前往斯巴达。",
      paragraphs: [
        "忒勒马科斯到达皮洛斯时，海边正在向波塞冬献祭。他担心自己年少、不懂向老王发问，雅典娜鼓励他直陈来意。涅斯托尔之子庇西斯特拉托斯先让宾客入席、分享祭肉与酒，陌生人因此被纳入有秩序的共同体。",
        "涅斯托尔回忆特洛伊陷落后，将领们对立即启航还是留下祭神发生争执，船队分道扬镳。他记得奥德修斯曾折返阿伽门农一方，却没有他的后续消息。少年听见的不是一条可直接循行的路线，而是战友也无法掌握的离散。",
        "谈话转向阿伽门农回家遭害，以及儿子俄瑞斯忒斯的报复；涅斯托尔把这当作年轻人应当奋起的例子。雅典娜离去时显出神异，老王认出护送者并非普通门托耳，向女神许祭，也劝忒勒马科斯相信自己的前途。",
        "次日王家献祭，给少年沐浴、更衣和餐食，又备好车马。庇西斯特拉托斯陪他陆行，车子在斐赖停宿，接受主人款待，次晨继续穿过平原。真正进入墨涅拉俄斯的宫廷，要等下一卷开篇。",
      ],
      characterIds: [
        "telemachus",
        "athena",
        "nestor",
        "pisistratus",
        "poseidon",
        "odysseus",
        "agamemnon",
        "menelaus",
      ],
      locationIds: ["pylos", "troy", "pherae"],
      events: [
        {
          id: "odyssey-03-e1",
          title: "加入海边祭宴",
          description:
            "【当下】雅典娜鼓励少年发问，涅斯托尔一家把访客迎进波塞冬祭礼。",
          characterIds: ["telemachus", "athena", "nestor", "pisistratus"],
          locationId: "pylos",
        },
        {
          id: "odyssey-03-e2",
          title: "回顾船队分裂",
          description:
            "【转述】涅斯托尔忆及特洛伊战后争执及奥德修斯折返，坦言不知道他的归宿。",
          characterIds: ["nestor", "odysseus", "agamemnon", "menelaus"],
          locationId: "troy",
        },
        {
          id: "odyssey-03-e3",
          title: "认出神明护送",
          description:
            "【当下】雅典娜离去显露神迹，老王许下祭礼并安排少年继续寻访。",
          characterIds: ["athena", "nestor", "telemachus"],
          locationId: "pylos",
        },
        {
          id: "odyssey-03-e4",
          title: "车行至斐赖",
          description:
            "【当下】庇西斯特拉托斯陪同忒勒马科斯陆行，在斐赖宿夜后继续前进。",
          characterIds: ["pisistratus", "telemachus"],
          locationId: "pherae",
        },
      ],
      sourceIds: ["pg-butler", "ws-butler", "spark-outline"],
      originalRange: "Book III",
      editorialNote:
        "编辑题名。现实行动为皮洛斯至斐赖的寻父旅程；特洛伊仅属涅斯托尔转述。",
    },
    {
      id: "odyssey-04",
      order: 4,
      title: "斯巴达的消息与海峡伏兵",
      arc: "寻父之旅（1—4卷）",
      summary:
        "海伦与墨涅拉俄斯讲起奥德修斯的机智，海神普罗透斯的旧预言带来生还消息；伊塔卡的求婚人则开始谋杀他的儿子。",
      paragraphs: [
        "两位少年抵达斯巴达，恰遇墨涅拉俄斯家中婚宴。主人先让他们休息用餐，再问来历；忒勒马科斯因听见父亲名字而落泪，海伦从相貌认出他的身份。共同的战争记忆使宴席从华贵的展示转为哀悼亲友的场所。",
        "海伦往酒里加入消解忧伤的药，讲奥德修斯乔装潜入特洛伊、被她认出却获保密的往事。墨涅拉俄斯接着讲木马腹内的伏兵：海伦在马外模仿他们妻子的声音，奥德修斯压住同伴的回应冲动，避免整个计谋败露。",
        "第二天，墨涅拉俄斯叙述自己滞留埃及近海法罗斯时，在海神之女帮助下披上海豹皮，制伏不断变形的普罗透斯。海神告知返航所需的祭祀，也说奥德修斯还活着，却困在卡吕普索的岛上无船可走；忒勒马科斯终于取得比传言更具体的消息。",
        "叙事切回伊塔卡：求婚人得知少年出海，安提诺俄斯策划伏击返航的船。传令官墨冬把谋杀计划告诉珀涅罗珀，她又惊又悔，向雅典娜祈求。女神送来形似她姊妹的梦影安慰她，却不回答奥德修斯究竟生死如何；卷末，求婚人登船到阿斯忒里斯小岛设伏。",
      ],
      characterIds: [
        "telemachus",
        "pisistratus",
        "menelaus",
        "helen",
        "odysseus",
        "proteus",
        "calypso",
        "antinous",
        "penelope",
        "medon",
        "athena",
      ],
      locationIds: ["sparta", "troy", "pharos", "ithaca-palace", "asteris"],
      events: [
        {
          id: "odyssey-04-e1",
          title: "婚宴认出故人之子",
          description:
            "【当下】墨涅拉俄斯接待少年，海伦指出忒勒马科斯与父亲相似的容貌。",
          characterIds: ["telemachus", "pisistratus", "menelaus", "helen"],
          locationId: "sparta",
        },
        {
          id: "odyssey-04-e2",
          title: "潜城与木马的往事",
          description:
            "【转述】海伦与墨涅拉俄斯分别讲述奥德修斯潜入特洛伊、约束木马内伏兵的机智。",
          characterIds: ["helen", "menelaus", "odysseus"],
          locationId: "troy",
        },
        {
          id: "odyssey-04-e3",
          title: "法罗斯问海神",
          description:
            "【转述】墨涅拉俄斯讲制伏普罗透斯的旧事，传达奥德修斯被困但仍活着的消息。",
          characterIds: ["menelaus", "proteus", "odysseus", "calypso"],
          locationId: "pharos",
        },
        {
          id: "odyssey-04-e4",
          title: "报信与梦中的安慰",
          description:
            "【当下】墨冬报告求婚人的谋杀计划，珀涅罗珀祈祷，并获雅典娜派来的梦影安慰。",
          characterIds: ["medon", "penelope", "athena", "telemachus"],
          locationId: "ithaca-palace",
        },
        {
          id: "odyssey-04-e5",
          title: "伏兵占据小岛",
          description:
            "【当下】卷末求婚人登船离开伊塔卡，到阿斯忒里斯等待忒勒马科斯的归船。",
          characterIds: ["antinous", "telemachus"],
          locationId: "asteris",
        },
      ],
      sourceIds: ["pg-butler", "ws-butler", "spark-outline"],
      originalRange: "Book IV",
      editorialNote:
        "编辑题名。斯巴达与伊塔卡是并行当下线；特洛伊、法罗斯都是席间转述，忒勒马科斯没有前往这些地点。报信与梦境发生在王宫，卷末才转向小岛伏兵。",
    },
    {
      id: "odyssey-05",
      order: 5,
      title: "离开女神，漂上陌生海岸",
      arc: "费阿刻斯接待（5—8卷）",
      summary:
        "赫尔墨斯传达放人的神命，奥德修斯造筏离开卡吕普索，却又被波塞冬掀起的风暴击碎希望，最终挣扎登上斯刻里亚。",
      paragraphs: [
        "诸神再次议事，雅典娜为父子两人的处境发声。宙斯派赫尔墨斯到奥吉吉亚，命卡吕普索放行。女神抱怨诸神不容女神与凡人相爱，却无法抗命；她去海边找仍在哭望故乡的奥德修斯，告诉他可以筹备离开。",
        "奥德修斯担心所谓放行只是另一个陷阱，先要求女神发誓不再加害。面对留岛长生的诱惑，他仍选择会衰老的妻子与故乡。他砍树、凿孔、绑合船材，用四天造好木筏，第五天带着女神提供的食物与水启航。",
        "航行多日，陆地已在远处显现，返回途中的波塞冬却看见他，激起狂风巨浪。筏子破裂，奥德修斯在水中反复挣扎。海中女神伊诺给他护身头巾，劝他弃筏游泳；他迟疑后照做，雅典娜也压住其余风向，给他生机。",
        "海岸岩石和回卷的浪使上岸同样危险。奥德修斯沿岸寻找出口，向河神祈求，在水流放缓的河口登陆，把伊诺的头巾送回水中。精疲力尽的他钻入相邻的树丛，用落叶遮身，雅典娜赐下睡眠，结束这场求生而非凯旋的抵达。",
      ],
      characterIds: [
        "athena",
        "zeus",
        "hermes",
        "calypso",
        "odysseus",
        "poseidon",
        "ino",
        "penelope",
      ],
      locationIds: ["olympus", "ogygia", "scheria-coast"],
      events: [
        {
          id: "odyssey-05-e1",
          title: "神使命令放行",
          description:
            "【当下】赫尔墨斯奉宙斯之命告知卡吕普索：奥德修斯必须离岛。",
          characterIds: ["hermes", "zeus", "calypso", "odysseus"],
          locationId: "ogygia",
        },
        {
          id: "odyssey-05-e2",
          title: "选择归乡并造筏",
          description:
            "【当下】奥德修斯要求无害誓言，放弃留岛的长生机会，亲自造筏出海。",
          characterIds: ["odysseus", "calypso", "penelope"],
          locationId: "ogygia",
        },
        {
          id: "odyssey-05-e3",
          title: "风暴毁筏",
          description:
            "【当下】波塞冬击碎木筏；伊诺交付护身头巾，雅典娜帮助漂泊者活下来。",
          characterIds: ["odysseus", "poseidon", "ino", "athena"],
          locationId: "scheria-coast",
        },
        {
          id: "odyssey-05-e4",
          title: "河口与落叶床",
          description:
            "【当下】奥德修斯祈求河神后登陆，归还头巾，在树丛下以落叶遮身入睡。",
          characterIds: ["odysseus", "ino", "athena"],
          locationId: "scheria-coast",
        },
      ],
      sourceIds: ["pg-butler", "ws-butler", "spark-outline"],
      originalRange: "Book V",
      editorialNote:
        "编辑题名。本卷开始奥德修斯的当下行动；抵达奥吉吉亚的旧经历直到第12卷倒叙末才讲完。海难节点统摄斯刻里亚近海，不表示精确海上坐标。",
    },
    {
      id: "odyssey-06",
      order: 6,
      title: "洗衣少女与无名来客",
      arc: "费阿刻斯接待（5—8卷）",
      summary:
        "瑙西卡娅在河边遇见衣物尽失的奥德修斯，给他食物、衣服和进入王宫的指引，同时谨慎避开城中的流言。",
      paragraphs: [
        "雅典娜潜入费阿刻斯公主瑙西卡娅的梦，化作她的女友，提醒她婚事将近，应该洗好家人的衣物。公主醒后不向父亲直说婚嫁心思，只请求车马和仆女。阿尔基诺俄斯答应，她们到河口洗衣、晾晒、用餐，随后抛球玩耍。",
        "球落入水里，少女们的惊叫唤醒奥德修斯。他折枝遮蔽身体，从树丛里走出，仆女纷纷逃散，只有受雅典娜鼓励的公主留下。他权衡是否抱膝求助，最终站在远处，以赞美和温和言语请求衣物与进城方向。",
        "瑙西卡娅说明这里是费阿刻斯人的国土，并召回仆女照料来客。奥德修斯不愿在她们面前沐浴，独自洗去海盐、抹油更衣；雅典娜使他焕发精神，公主因此心生好感，也设想丈夫若像此人会如何。",
        "公主不能把一个陌生男子直接并车带进城，免得引起她自行择婿的议论。她让奥德修斯先随行，到雅典娜的树林附近等候，再独自入宫，首先向母亲阿瑞忒求助。卷末他停在林中祈祷，尚未进入王宫。",
      ],
      characterIds: ["athena", "nausicaa", "alcinous", "arete", "odysseus"],
      locationIds: ["scheria-palace", "scheria-coast", "athena-grove"],
      events: [
        {
          id: "odyssey-06-e1",
          title: "梦后出城洗衣",
          description:
            "【当下】雅典娜以梦促成公主的洗衣行程，阿尔基诺俄斯备好车马。",
          characterIds: ["athena", "nausicaa", "alcinous"],
          locationId: "scheria-palace",
        },
        {
          id: "odyssey-06-e2",
          title: "隔着距离求助",
          description:
            "【当下】奥德修斯被球戏声唤醒，不贸然触碰公主，以言辞请求衣服和指引。",
          characterIds: ["odysseus", "nausicaa"],
          locationId: "scheria-coast",
        },
        {
          id: "odyssey-06-e3",
          title: "洗去海难痕迹",
          description: "【当下】瑙西卡娅给予食物衣物，奥德修斯洗浴后恢复体面。",
          characterIds: ["odysseus", "nausicaa", "athena"],
          locationId: "scheria-coast",
        },
        {
          id: "odyssey-06-e4",
          title: "在树林等待",
          description:
            "【当下】公主嘱他分开入城并求助王后，奥德修斯停在雅典娜的树林里祈祷。",
          characterIds: ["odysseus", "nausicaa", "arete", "athena"],
          locationId: "athena-grove",
        },
      ],
      sourceIds: ["pg-butler", "ws-butler", "spark-outline"],
      originalRange: "Book VI",
      editorialNote:
        "编辑题名。公主的婚嫁期待不等于双方订婚；第6卷止于树林，第7卷才是入宫求援。",
    },
    {
      id: "odyssey-07",
      order: 7,
      title: "王后的问询与归船的许诺",
      arc: "费阿刻斯接待（5—8卷）",
      summary:
        "奥德修斯在雅典娜引导下进入费阿刻斯王宫，向阿瑞忒求援；他说明衣物来历和海难，却暂不公开姓名。",
      paragraphs: [
        "瑙西卡娅先回到家中，奥德修斯稍后进城。雅典娜以雾掩护他，又化作持水罐的少女指路，介绍阿瑞忒在王家和民众中的威望。他经过耀眼的厅堂、金银装饰和丰盛果园，来到王后面前才从雾中显露。",
        "奥德修斯抱住阿瑞忒的膝头，祈求众人帮助自己归乡，然后坐到炉边灰烬中。席间长者提醒国王不能让客人受辱，阿尔基诺俄斯便将他扶起入座，安排食物并奠酒，表示愿意组织护送，而不是先索问一切。",
        "客人散去后，阿瑞忒认出他身上的衣服出自自家，追问是谁给他的。奥德修斯讲述卡吕普索多年留客、自己造筏遭风暴以及在河边遇到公主的经过。他解释分开入城是出于自己的顾虑，避免让瑙西卡娅因未亲自引客而受责。",
        "阿尔基诺俄斯欣赏这个陌生人，表示若他愿留下，可以娶女儿并得到住处；但不会强留一个渴望归乡的人。国王允诺护送，奥德修斯为此欢喜。阿瑞忒吩咐铺床，客人在门廊安睡，关于姓名与更早冒险的叙述仍被保留。",
      ],
      characterIds: [
        "odysseus",
        "athena",
        "arete",
        "alcinous",
        "nausicaa",
        "calypso",
      ],
      locationIds: ["scheria-palace"],
      events: [
        {
          id: "odyssey-07-e1",
          title: "雾中入宫",
          description:
            "【当下】雅典娜化作少女引路，让奥德修斯避开围观，抵达阿瑞忒面前。",
          characterIds: ["athena", "odysseus", "arete"],
          locationId: "scheria-palace",
        },
        {
          id: "odyssey-07-e2",
          title: "炉灰旁的求援者",
          description: "【当下】奥德修斯抱膝请求护送，被国王扶起并迎入席间。",
          characterIds: ["odysseus", "arete", "alcinous"],
          locationId: "scheria-palace",
        },
        {
          id: "odyssey-07-e3",
          title: "衣物引出海难经过",
          description:
            "【转述】王后辨认衣料，奥德修斯说明卡吕普索留客和瑙西卡娅施救的经过。",
          characterIds: ["arete", "odysseus", "calypso", "nausicaa"],
          locationId: "scheria-palace",
        },
        {
          id: "odyssey-07-e4",
          title: "不强留的承诺",
          description:
            "【当下】阿尔基诺俄斯表达招婿意愿，但更明确保证客人若愿归家便安排护送。",
          characterIds: ["alcinous", "odysseus", "arete"],
          locationId: "scheria-palace",
        },
      ],
      sourceIds: ["pg-butler", "ws-butler", "spark-outline"],
      originalRange: "Book VII",
      editorialNote:
        "编辑题名。叙述现场始终在斯刻里亚；对海难的简述不是再次走过第5—6卷旅程，国王的招婿提议也未成为婚约。",
    },
    {
      id: "odyssey-08",
      order: 8,
      title: "竞技、歌唱与藏不住的眼泪",
      arc: "费阿刻斯接待（5—8卷）",
      summary:
        "费阿刻斯人以竞技和歌舞款待来客。奥德修斯展示身手，却被特洛伊的歌声触动，国王终于请他说明自己的身份。",
      paragraphs: [
        "阿尔基诺俄斯召开集会，安排水手准备护送船，并再设宴席。盲歌者得摩多科斯唱奥德修斯与阿喀琉斯的争执，客人悄悄用衣襟遮脸流泪，曲止才擦干眼睛。国王注意到异样，提议转去竞技场，让众人换一种方式相聚。",
        "奥德修斯本不愿比赛，欧律阿罗斯却讥讽他像逐利商人而不像运动者。他举起更重的铁饼掷出远距，反击羞辱，并表明可以接受多数挑战，却不愿与主人之子较量。竞技证明了力量，也显示宾主礼节能够约束争胜。",
        "得摩多科斯又唱阿瑞斯与阿佛洛狄忒被赫淮斯托斯设网捉住的神话，年轻人表演精妙舞蹈。国王让众首领赠礼，欧律阿罗斯以宝剑赔礼。瑙西卡娅与客人话别，奥德修斯表示会记住她的救命恩情。",
        "晚宴中，奥德修斯请歌者唱木马破城。歌声讲到希腊伏兵从马中涌出，他再次控制不住悲恸。阿尔基诺俄斯制止歌唱，问他究竟是谁、家在哪里，又为何听到特洛伊便哭泣；本卷以问题收束，姓名在下一卷才说出。",
      ],
      characterIds: [
        "odysseus",
        "alcinous",
        "demodocus",
        "achilles",
        "euryalus",
        "nausicaa",
        "athena",
      ],
      locationIds: ["scheria-palace", "troy"],
      events: [
        {
          id: "odyssey-08-e1",
          title: "宴席上的隐泪",
          description:
            "【当下】得摩多科斯的战争歌曲使奥德修斯遮面落泪，国王改以竞技款客。",
          characterIds: ["demodocus", "odysseus", "alcinous", "achilles"],
          locationId: "scheria-palace",
        },
        {
          id: "odyssey-08-e2",
          title: "掷饼回应轻蔑",
          description:
            "【当下】遭欧律阿罗斯讥讽后，奥德修斯以远掷铁饼证明身手。",
          characterIds: ["odysseus", "euryalus"],
          locationId: "scheria-palace",
        },
        {
          id: "odyssey-08-e3",
          title: "礼物与致谢",
          description:
            "【当下】歌舞后主人赠礼，欧律阿罗斯道歉，奥德修斯向瑙西卡娅表达感激。",
          characterIds: [
            "alcinous",
            "euryalus",
            "nausicaa",
            "odysseus",
            "demodocus",
          ],
          locationId: "scheria-palace",
        },
        {
          id: "odyssey-08-e4",
          title: "木马之歌逼近姓名",
          description:
            "【歌中】得摩多科斯唱特洛伊木马破城；现场的奥德修斯再度落泪，国王追问身世。",
          characterIds: ["demodocus", "odysseus", "alcinous"],
          locationId: "troy",
        },
      ],
      sourceIds: ["pg-butler", "ws-butler", "spark-outline"],
      originalRange: "Book VIII",
      editorialNote:
        "编辑题名。王宫节点统摄斯刻里亚城中的宴会与竞技；特洛伊为歌中场景，不是当下航行目的地。",
    },
    {
      id: "odyssey-09",
      order: 9,
      title: "无人之名与独眼巨人的诅咒",
      arc: "宴席倒叙（9—12卷）",
      summary:
        "奥德修斯报出姓名，倒叙劫掠基科涅斯、离开食莲者和逃出独眼巨人洞穴的经历；最后的炫耀却让脱险变成漫长灾难的起点。",
      paragraphs: [
        "在阿尔基诺俄斯的宴席上，奥德修斯终于表明自己是拉厄尔忒斯之子、伊塔卡人。他从特洛伊出发讲起：船队攻掠基科涅斯人的伊斯马罗斯，夺取财物，却不肯及时撤走。当地援军赶到反击，每船都折损伙伴，众人只得带着悲伤继续出海。",
        "风把船队吹离航路，他们来到食莲者之地。被派去打听消息的同伴吃下莲食后，不再关心归乡，只想留下。奥德修斯强行把他们拖回船上绑住，命令其余人立即离岸；这里的危险不是武力，而是使旅程失去目的的遗忘。",
        "他们随后到独眼巨人之地附近，奥德修斯带人进入波吕斐摩斯的洞穴，坚持等主人回来。巨人以巨石堵门、吞食来客。奥德修斯知道杀死他便无人移石，于是用烈酒灌醉他，自称“无人”，再与伙伴把削尖烧热的木桩刺入其独眼。",
        "巨人呼喊“无人”伤害自己，邻居因此不来援救。次晨奥德修斯把伙伴系在羊腹下，自己攀住公羊逃出；但船离岸后，他不顾劝阻喊出真名。波吕斐摩斯向父亲波塞冬祈求，让此人不得归乡，或孤身迟归、借他人船只，并在家里再遇灾祸。",
      ],
      characterIds: [
        "odysseus",
        "alcinous",
        "laertes",
        "polyphemus",
        "poseidon",
      ],
      locationIds: ["scheria-palace", "ismarus", "lotus-land", "cyclops-land"],
      events: [
        {
          id: "odyssey-09-e1",
          title: "报姓名，述伊斯马罗斯败退",
          description:
            "【倒叙】奥德修斯在宴席报出身份，回顾劫掠基科涅斯后因滞留遭反击的损失。",
          characterIds: ["odysseus", "alcinous"],
          locationId: "ismarus",
        },
        {
          id: "odyssey-09-e2",
          title: "拖回忘乡的伙伴",
          description:
            "【倒叙】食莲者的食物使人忘归，奥德修斯把中招同伴绑回船上。",
          characterIds: ["odysseus"],
          locationId: "lotus-land",
        },
        {
          id: "odyssey-09-e3",
          title: "无人刺瞎巨人",
          description:
            "【倒叙】受困者用酒和假名设局，以烧热木桩刺瞎吞食来客的波吕斐摩斯。",
          characterIds: ["odysseus", "polyphemus"],
          locationId: "cyclops-land",
        },
        {
          id: "odyssey-09-e4",
          title: "羊腹脱险，真名招祸",
          description:
            "【倒叙】众人借羊群出洞；奥德修斯随后喊出真名，引来巨人向波塞冬的诅咒。",
          characterIds: ["odysseus", "polyphemus", "poseidon"],
          locationId: "cyclops-land",
        },
      ],
      sourceIds: ["pg-butler", "ws-butler", "spark-outline"],
      originalRange: "Book IX",
      editorialNote:
        "编辑题名。第9—12卷整体为斯刻里亚宴席上的追叙；本卷各冒险节点均属过去，不接续第8卷形成新航程。",
    },
    {
      id: "odyssey-10",
      order: 10,
      title: "风袋、食人港与喀耳刻",
      arc: "宴席倒叙（9—12卷）",
      summary:
        "归乡在望时，伙伴打开风袋毁掉机会；食人巨人又摧毁大部船队。奥德修斯在赫尔墨斯帮助下解救被喀耳刻变成猪的同伴，却被告知必须先问亡灵。",
      paragraphs: [
        "掌风的艾俄洛斯接待船队一个月，离别时把逆风封入牛皮袋，只留下送他们回家的风。已经能够望见伊塔卡时，奥德修斯疲惫睡去，同伴猜疑袋中藏着独吞的财宝，解开袋口。风暴把船吹回原处，艾俄洛斯认定他们遭神弃绝，不再援助。",
        "船队到达拉伊斯特律戈涅斯人的港口，多数船只停进两侧峭壁包围的水域，只有奥德修斯把自己的船留在外面。探路者发现当地巨人食人，巨石和投矛很快从高处落下。内港船只尽毁，奥德修斯割断缆绳逃走，只剩一船伙伴。",
        "在艾艾埃，欧律洛科斯率小队找到喀耳刻的屋子。他疑心有诈而留在外面，其余人饮下掺药的酒，被女神变成猪。奥德修斯独自去救人，途中赫尔墨斯给他解药摩吕并教他应对；他抵住法术、拔剑迫近，又要求女神发誓不加害。",
        "喀耳刻恢复同伴的人形，众人在岛上停留一年，直到伙伴催促启程。女神答应放行，却说必须先去亡者之境问忒瑞西阿斯。准备离开时，醉后睡在屋顶的厄尔佩诺耳惊醒跌落摔死；众人尚未为他安葬，就带着祭牲前往幽冥的方向。",
      ],
      characterIds: [
        "odysseus",
        "aeolus",
        "eurylochus",
        "circe",
        "hermes",
        "tiresias",
        "elpenor",
      ],
      locationIds: ["scheria-palace", "aeolia", "laestrygonia", "aea"],
      events: [
        {
          id: "odyssey-10-e1",
          title: "归家前打开风袋",
          description:
            "【倒叙】同伴怀疑财物被独占，打开艾俄洛斯的风袋，船队被吹回并遭拒绝再助。",
          characterIds: ["odysseus", "aeolus"],
          locationId: "aeolia",
        },
        {
          id: "odyssey-10-e2",
          title: "食人港毁掉船队",
          description:
            "【倒叙】拉伊斯特律戈涅斯巨人从高处毁船，停在港外的奥德修斯一船逃脱。",
          characterIds: ["odysseus"],
          locationId: "laestrygonia",
        },
        {
          id: "odyssey-10-e3",
          title: "解除变猪的法术",
          description:
            "【倒叙】欧律洛科斯报信，赫尔墨斯赠解药，奥德修斯逼喀耳刻释放同伴。",
          characterIds: ["odysseus", "eurylochus", "hermes", "circe"],
          locationId: "aea",
        },
        {
          id: "odyssey-10-e4",
          title: "启程前往亡者之境",
          description:
            "【倒叙】喀耳刻要求先问忒瑞西阿斯；厄尔佩诺耳失足身亡，船员带祭牲启程。",
          characterIds: ["odysseus", "circe", "tiresias", "elpenor"],
          locationId: "aea",
        },
      ],
      sourceIds: ["pg-butler", "ws-butler", "spark-outline"],
      originalRange: "Book X",
      editorialNote:
        "编辑题名。倒叙现场仍是斯刻里亚。本卷是接到问冥指示并出发，第11卷才实际与亡灵交谈。",
    },
    {
      id: "odyssey-11",
      order: 11,
      title: "血沟前的预言与母亲",
      arc: "宴席倒叙（9—12卷）",
      summary:
        "奥德修斯在大洋边缘祭招亡灵，听见返乡的禁令与代价，也面对母亲、战友和古代英雄无法逆转的死亡。",
      paragraphs: [
        "船抵达大洋彼岸、终年幽暗的辛梅里奥伊人附近，奥德修斯挖沟奠酒、宰杀祭牲，以血召集亡灵。厄尔佩诺耳先来请求回岛安葬，并在墓上立起生前使用的船桨。奥德修斯答应，却暂时挡住母亲安提克勒娅，不让她先于预言者饮血。",
        "忒瑞西阿斯警告不要碰太阳神的牛羊：若冒犯，船与伙伴都将毁灭，英雄即使归家也要面对求婚人。报仇之后，他还须携桨走到不识海的人群中，向波塞冬献祭。随后母亲告诉他自己因思念儿子而死，妻子仍在等候，父亲在乡下衰老；他三次拥抱她，却只能抱到虚影。",
        "许多昔日王后和英雄母亲前来讲述身世。故事讲到这里，宴席叙述短暂停下，阿瑞忒与阿尔基诺俄斯赞赏客人并留他继续讲；奥德修斯于是讲到阿伽门农，亡王回顾家中受害的结局，以自己的惨死警告战友提防亲近之人的背叛。",
        "阿喀琉斯宁愿作为贫苦者的雇工活着，也不愿统领所有亡者，却因听到儿子英勇而欣慰。埃阿斯仍怨恨争夺阿喀琉斯铠甲的旧事，拒绝答话。奥德修斯还看见受罚者与赫拉克勒斯的影像；亡灵越来越多，他害怕更可怖的显现，急忙回船驶离。",
      ],
      characterIds: [
        "odysseus",
        "elpenor",
        "tiresias",
        "anticleia",
        "penelope",
        "laertes",
        "poseidon",
        "helios",
        "agamemnon",
        "achilles",
        "ajax",
        "arete",
        "alcinous",
      ],
      locationIds: ["scheria-palace", "oceanus-dead"],
      events: [
        {
          id: "odyssey-11-e1",
          title: "祭血与未葬者",
          description:
            "【倒叙】奥德修斯在大洋边缘招魂，厄尔佩诺耳请求安葬并立桨为记。",
          characterIds: ["odysseus", "elpenor"],
          locationId: "oceanus-dead",
        },
        {
          id: "odyssey-11-e2",
          title: "预言之后拥抱母亲",
          description:
            "【倒叙】忒瑞西阿斯说明圣牛禁令与未来祭祀；安提克勒娅报家讯，儿子无法抱住她。",
          characterIds: [
            "odysseus",
            "tiresias",
            "anticleia",
            "helios",
            "poseidon",
          ],
          locationId: "oceanus-dead",
        },
        {
          id: "odyssey-11-e3",
          title: "宴席请求继续讲述",
          description:
            "【当下】讲完古代女子的亡灵后，阿瑞忒与阿尔基诺俄斯留客续讲，将叙事短暂拉回宴会。",
          characterIds: ["odysseus", "arete", "alcinous"],
          locationId: "scheria-palace",
        },
        {
          id: "odyssey-11-e4",
          title: "战友的死亡经验",
          description:
            "【倒叙】阿伽门农诉家难，阿喀琉斯珍惜生命，埃阿斯保持沉默；亡灵聚集迫使访客离开。",
          characterIds: ["odysseus", "agamemnon", "achilles", "ajax"],
          locationId: "oceanus-dead",
        },
      ],
      sourceIds: ["pg-butler", "ws-butler", "spark-outline"],
      originalRange: "Book XI",
      editorialNote:
        "编辑题名。召魂场所在大洋与亡者之境的边缘，不作可测量的地下入口；第11卷内部还有一次返回费阿刻斯宴席的叙事停顿。",
    },
    {
      id: "odyssey-12",
      order: 12,
      title: "歌声、海峡与太阳神的牛",
      arc: "宴席倒叙（9—12卷）",
      summary:
        "奥德修斯先葬同伴，再穿过塞壬与双重海险；饥饿船员杀食圣牛，招来灭船雷击，只留下他漂到卡吕普索岛上。",
      paragraphs: [
        "奥德修斯回艾艾埃为厄尔佩诺耳火葬、立坟和船桨。喀耳刻讲明将遇到的危险：塞壬的歌声、斯库拉与卡律布狄斯之间的险路，以及不可侵犯的太阳神畜群。英雄将必要指令告诉伙伴，却没有完全公开斯库拉必将夺去六人的代价。",
        "船近塞壬之地，他用蜡堵住伙伴的耳朵，让人将自己绑在桅杆上，好在不改变航向的情况下听歌。歌声使他急欲挣脱，欧律洛科斯等人反而把绳索收紧。逃过诱惑后，众人又进入咆哮的海峡；奥德修斯武装等待怪物，斯库拉却猛然抓走六人。",
        "船员坚持在特里纳基亚休息，并发誓不碰赫利俄斯的牲畜。逆风长期困住船只，粮食耗尽，欧律洛科斯趁奥德修斯离队祈祷后睡去，劝众人杀牛充饥，打算回乡补建神庙。太阳神得知后要求惩罚，牛皮爬动、烤肉发声，仍未能使他们挽回错误。",
        "终于离岛时，宙斯以雷霆毁船，伙伴尽数丧生。奥德修斯把桅杆与龙骨绑在一起漂流，又被带回卡律布狄斯，攀住上方无花果树等残木吐出才落回海上。他独自漂抵奥吉吉亚；讲到这里，他不再重复前夜已说过的卡吕普索故事，四卷长篇倒叙结束。",
      ],
      characterIds: [
        "odysseus",
        "elpenor",
        "circe",
        "eurylochus",
        "helios",
        "zeus",
        "calypso",
      ],
      locationIds: [
        "scheria-palace",
        "aea",
        "sirens",
        "strait",
        "thrinacia",
        "ogygia",
      ],
      events: [
        {
          id: "odyssey-12-e1",
          title: "安葬与最后指路",
          description:
            "【倒叙】安葬厄尔佩诺耳后，奥德修斯从喀耳刻得知歌声、海峡与圣牛的禁忌。",
          characterIds: ["odysseus", "elpenor", "circe"],
          locationId: "aea",
        },
        {
          id: "odyssey-12-e2",
          title: "绑在桅杆听塞壬",
          description:
            "【倒叙】水手以蜡封耳，奥德修斯受缚听歌；他要求松绑时，伙伴反而加强束缚。",
          characterIds: ["odysseus", "eurylochus"],
          locationId: "sirens",
        },
        {
          id: "odyssey-12-e3",
          title: "海峡夺去六人",
          description:
            "【倒叙】船避开卡律布狄斯吞海的漩涡，却被斯库拉攫走六名伙伴。",
          characterIds: ["odysseus"],
          locationId: "strait",
        },
        {
          id: "odyssey-12-e4",
          title: "饥饿中杀食圣牛",
          description:
            "【倒叙】欧律洛科斯带头杀牛，赫利俄斯要求宙斯惩罚；牛皮爬动、肉块发声的异兆出现。",
          characterIds: ["odysseus", "eurylochus", "helios", "zeus"],
          locationId: "thrinacia",
        },
        {
          id: "odyssey-12-e5",
          title: "雷毁船后再过漩涡",
          description:
            "【倒叙】离岛后宙斯雷击毁船，众伙伴丧生；奥德修斯漂回卡律布狄斯，攀树等候残木重现。",
          characterIds: ["odysseus", "zeus", "eurylochus"],
          locationId: "strait",
        },
        {
          id: "odyssey-12-e6",
          title: "漂到卡吕普索岛上",
          description:
            "【倒叙】唯一生还者漂抵奥吉吉亚，获卡吕普索收留；讲述在此接回已经说过的经历。",
          characterIds: ["odysseus", "calypso"],
          locationId: "ogygia",
        },
      ],
      sourceIds: ["pg-butler", "ws-butler", "spark-outline"],
      originalRange: "Book XII",
      editorialNote:
        "编辑题名。仍为宴席倒叙。雷击发生在离岛后的海上，随后漂回漩涡，事件以再过漩涡为主要地点；最后抵达奥吉吉亚不是第五卷之后的新航行。",
    },
    {
      id: "odyssey-13",
      order: 13,
      title: "睡梦归乡与乞者面目",
      arc: "隐身归乡（13—16卷）",
      summary:
        "费阿刻斯船把熟睡的奥德修斯送回伊塔卡，自己却受海神惩罚；雅典娜替归人藏好礼物，并把他变成老乞丐。",
      paragraphs: [
        "长篇叙述结束，阿尔基诺俄斯劝诸首领再添礼物，众人献祭、宴饮，准备护送。奥德修斯向主人与王后告别，登船沉睡。费阿刻斯水手驾船到伊塔卡的福耳库斯港，把他连卧具搬到岸上，礼物也放在树下，随后离开。",
        "波塞冬认为护送违背自己使英雄受苦的意愿，向宙斯抱怨。得到许可后，他在费阿刻斯船驶近本土时把它变成石头。阿尔基诺俄斯想起祖先留下的预言，命民众停止随意护送外客、向海神献祭，求他不要再用大山遮住城邦。",
        "奥德修斯醒来时，雅典娜以雾遮住熟悉地貌，他便以为船员把自己抛在异乡。女神化作牧羊少年，他仍编造克里特来历试探对方。雅典娜显露身份，两位擅长谋略者相互认出；雾散之后，海港、洞穴与故土终于重新可辨。",
        "他们把财物藏进宁芙洞穴，商定暂不公开归来消息，先察看求婚人与家仆。女神使他的皮肤衰老、衣服破烂，交给他手杖与行囊，让他先去忠诚猪倌欧迈俄斯那里。她自己则去斯巴达安排忒勒马科斯返乡。",
      ],
      characterIds: [
        "odysseus",
        "alcinous",
        "arete",
        "poseidon",
        "zeus",
        "athena",
        "eumaeus",
        "telemachus",
      ],
      locationIds: ["scheria-palace", "scheria-coast", "phorcys", "nymph-cave"],
      events: [
        {
          id: "odyssey-13-e1",
          title: "熟睡者抵达故土",
          description:
            "【当下】费阿刻斯水手把奥德修斯与礼物送到福耳库斯港，未叫醒他就返航。",
          characterIds: ["odysseus", "alcinous", "arete"],
          locationId: "phorcys",
        },
        {
          id: "odyssey-13-e2",
          title: "护送船化石",
          description:
            "【当下】波塞冬惩罚返航船，阿尔基诺俄斯带众人献祭，求免进一步灾祸。",
          characterIds: ["poseidon", "zeus", "alcinous"],
          locationId: "scheria-coast",
        },
        {
          id: "odyssey-13-e3",
          title: "与女神相互试探",
          description:
            "【当下】奥德修斯向牧羊少年编故事，雅典娜显形并揭开伊塔卡的雾。",
          characterIds: ["odysseus", "athena"],
          locationId: "phorcys",
        },
        {
          id: "odyssey-13-e4",
          title: "藏财物，换面目",
          description:
            "【当下】雅典娜帮助藏起礼物，把奥德修斯变成老乞丐，指示他投宿猪倌。",
          characterIds: ["odysseus", "athena", "eumaeus", "telemachus"],
          locationId: "nymph-cave",
        },
      ],
      sourceIds: ["pg-butler", "ws-butler", "spark-outline"],
      originalRange: "Book XIII",
      editorialNote:
        "编辑题名。从宴席倒叙返回当下。石船已经发生；大山遮城只是预言中的威胁，不能当作正文已实现的结果。",
    },
    {
      id: "odyssey-14",
      order: 14,
      title: "猪倌火边的真假故事",
      arc: "隐身归乡（13—16卷）",
      summary:
        "欧迈俄斯不知来客就是主人，仍给予食物、庇护和厚衣；奥德修斯以虚构身世试探他的忠诚，听见家中更具体的困境。",
      paragraphs: [
        "奥德修斯沿山路来到猪圈，守犬一拥而上，欧迈俄斯赶开它们，把衣衫褴褛的来客接进棚屋。他宰小猪招待，解释肥壮牲口不断被送给城里的求婚人；在他看来，即使流浪者没有回报能力，也不该被拒绝食物。",
        "猪倌谈起失踪主人与家中掠夺，对有人宣称奥德修斯将归已不抱希望，因为过去不少陌生人拿这种消息骗取衣食。奥德修斯以誓言保证主人会回来，欧迈俄斯仍不肯信。他既思念旧主，也忧虑出海寻父的忒勒马科斯。",
        "被问到来历时，奥德修斯编造自己是克里特人的经历：参加战争、率人去埃及、在战败后投降求生，又遭异乡商人欺骗，辗转听到英雄近在别处的消息。故事混入真实世界的地点和可核验的小细节，却不是他本人航程的补充史实。",
        "晚饭后天气寒冷，奥德修斯借一段特洛伊夜哨故事暗示缺少斗篷：故事里的奥德修斯替受冻同伴设计取得外衣。欧迈俄斯领会请求，给他铺上兽皮并盖厚斗篷，自己却披衣出门守猪。真正的主人在火边看见了不为邀功的忠诚。",
      ],
      characterIds: ["odysseus", "eumaeus", "telemachus", "penelope"],
      locationIds: ["swinehut"],
      events: [
        {
          id: "odyssey-14-e1",
          title: "挡开守犬迎客",
          description:
            "【当下】欧迈俄斯救下被犬围住的乞者，提供食物而不问他能否偿还。",
          characterIds: ["eumaeus", "odysseus"],
          locationId: "swinehut",
        },
        {
          id: "odyssey-14-e2",
          title: "不再相信归讯",
          description:
            "【当下】猪倌哀叹求婚人耗损家产，对来客保证主人将归的誓言保持怀疑。",
          characterIds: ["eumaeus", "odysseus", "telemachus"],
          locationId: "swinehut",
        },
        {
          id: "odyssey-14-e3",
          title: "克里特人的假自传",
          description:
            "【转述·虚构身世】奥德修斯编造战争、埃及与商旅经历，试探猪倌并掩饰身份。",
          characterIds: ["odysseus", "eumaeus"],
          locationId: "swinehut",
        },
        {
          id: "odyssey-14-e4",
          title: "借夜哨故事求衣",
          description:
            "【当下】奥德修斯讲借斗篷的故事，欧迈俄斯会意，让客人温暖入睡，自己外出守猪。",
          characterIds: ["odysseus", "eumaeus"],
          locationId: "swinehut",
        },
      ],
      sourceIds: ["pg-butler", "ws-butler", "spark-outline"],
      originalRange: "Book XIV",
      editorialNote:
        "编辑题名。全部当下行动在猪倌棚屋。克里特、埃及及夜哨故事属于伪装话术，不记为真实旅程，也不为凑地点数量增设路线节点。",
    },
    {
      id: "odyssey-15",
      order: 15,
      title: "返航的儿子与被卖的王子",
      arc: "隐身归乡（13—16卷）",
      summary:
        "忒勒马科斯奉雅典娜之命离开斯巴达，带上避难预言者返乡；另一边，欧迈俄斯讲述自己从王子沦为奴隶的经历。",
      paragraphs: [
        "雅典娜到斯巴达催忒勒马科斯回家，提醒他避开求婚人的海峡伏兵，登陆后先去猪倌处。墨涅拉俄斯不再挽留，赠予礼物，海伦另送将来婚礼可用的衣袍。离宫时鹰攫着家鹅飞过，海伦将它解释为奥德修斯将回家惩罚侵占者。",
        "少年与庇西斯特拉托斯经斐赖回到皮洛斯，却请求直接送往船边，免得又被涅斯托尔热情留住。临行时，逃离杀人血仇的预言者忒俄克吕墨诺斯求搭船，忒勒马科斯接纳他。船起航后按照女神的指示安排夜间航程。",
        "猪倌棚屋里，奥德修斯试探说自己可以到城里讨饭、服侍求婚人，欧迈俄斯坚持留客。他讲自己的故乡叙里埃：原是当地王族孩子，却被家中腓尼基女仆带走，随商船流转，最后卖给拉厄尔忒斯。在这个家里，他与主人的女儿一起长大，贫贱身份背后另有一段被掳的童年。",
        "忒勒马科斯安全抵达伊塔卡，让船员继续驶往城港，自己从岸上去找猪倌。分别前，忒俄克吕墨诺斯看见鹰隼抓着鸽子，将其解释为王家力量的吉兆；少年把他托付给同伴照料。本卷把儿子送到猪倌庄地，父子正式见面与相认留到下一卷。",
      ],
      characterIds: [
        "athena",
        "telemachus",
        "menelaus",
        "helen",
        "pisistratus",
        "nestor",
        "theoclymenus",
        "odysseus",
        "eumaeus",
        "laertes",
        "anticleia",
      ],
      locationIds: [
        "sparta",
        "pherae",
        "pylos",
        "swinehut",
        "syra",
        "ithaca-harbor",
      ],
      events: [
        {
          id: "odyssey-15-e1",
          title: "告别斯巴达",
          description:
            "【当下】雅典娜催促返乡，墨涅拉俄斯赠礼，海伦将鹰攫鹅解作复仇归来的征兆。",
          characterIds: ["athena", "telemachus", "menelaus", "helen"],
          locationId: "sparta",
        },
        {
          id: "odyssey-15-e2",
          title: "接纳逃亡预言者",
          description:
            "【当下】忒勒马科斯直抵皮洛斯船边，答应带忒俄克吕墨诺斯避难同行。",
          characterIds: ["telemachus", "pisistratus", "theoclymenus"],
          locationId: "pylos",
        },
        {
          id: "odyssey-15-e3",
          title: "猪倌回述失去的故乡",
          description:
            "【回忆】欧迈俄斯说自己在叙里埃被带上商船，后来被卖入拉厄尔忒斯家。",
          characterIds: ["eumaeus", "laertes", "odysseus"],
          locationId: "syra",
        },
        {
          id: "odyssey-15-e4",
          title: "避伏兵后独自登岸",
          description:
            "【当下】忒勒马科斯把预言者交给同伴，自己前往猪倌庄地，与父亲的行迹即将交会。",
          characterIds: ["telemachus", "theoclymenus"],
          locationId: "ithaca-harbor",
        },
      ],
      sourceIds: ["pg-butler", "ws-butler", "spark-outline", "spark-15-16"],
      originalRange: "Book XV",
      editorialNote:
        "编辑题名。返程与棚屋谈话交叉叙述；叙里埃只属欧迈俄斯童年回忆，不等于现代叙利亚，也不是奥德修斯当下旅程。",
    },
    {
      id: "odyssey-16",
      order: 16,
      title: "棚屋中的父子相认",
      arc: "隐身归乡（13—16卷）",
      summary:
        "欧迈俄斯进城报平安时，雅典娜暂时解除伪装，使奥德修斯与忒勒马科斯相认；父子谋划复仇，求婚人也在调整杀人计划。",
      paragraphs: [
        "天亮，忒勒马科斯走进猪倌棚屋，狗没有吠叫而是亲近他，欧迈俄斯像迎回亲子一样拥抱少年。面对棚中的陌生人，忒勒马科斯愿给衣食，却担心把他带进王宫会遭求婚人欺负。他派猪倌单独去告诉母亲自己平安。",
        "欧迈俄斯离开后，雅典娜出现在门外，只让奥德修斯看见。她使他恢复壮盛模样，再让他回到儿子面前。忒勒马科斯先以为眼前是神，父亲解释变貌出于雅典娜之手，二人才相拥痛哭，为长年的失散补上一场迟来的见面。",
        "忒勒马科斯列举求婚人的人数，担心父子二人无法对抗。奥德修斯把雅典娜与宙斯算作援手，定下自己仍装乞丐进宫、儿子忍住旁人的侮辱、伺机收走武器的计划。秘密还不能告诉珀涅罗珀和其他家人，忠诚要在不知情时察看。",
        "城中收到返航消息，伏兵也回到港内。安提诺俄斯主张抢先杀死少年，安菲诺摩斯劝先问神意；珀涅罗珀则当面责问谋杀，欧律马科斯假意担保她儿子的安全。猪倌回来前，雅典娜再把奥德修斯变老，三人在棚屋吃饭，欧迈俄斯仍不知道真相。",
      ],
      characterIds: [
        "telemachus",
        "eumaeus",
        "odysseus",
        "athena",
        "zeus",
        "antinous",
        "amphinomus",
        "penelope",
        "eurymachus",
      ],
      locationIds: ["swinehut", "ithaca-palace", "ithaca-harbor"],
      events: [
        {
          id: "odyssey-16-e1",
          title: "派猪倌报平安",
          description: "【当下】忒勒马科斯抵达棚屋，派欧迈俄斯进城通知母亲。",
          characterIds: ["telemachus", "eumaeus", "odysseus"],
          locationId: "swinehut",
        },
        {
          id: "odyssey-16-e2",
          title: "神助下的父子相认",
          description:
            "【当下】雅典娜恢复奥德修斯的容貌，忒勒马科斯排除疑虑，与父亲相拥落泪。",
          characterIds: ["athena", "odysseus", "telemachus"],
          locationId: "swinehut",
        },
        {
          id: "odyssey-16-e3",
          title: "安排隐忍与收械",
          description:
            "【当下】父子约定暂守身份秘密，让乞者入宫观察，并准备移走厅堂武器。",
          characterIds: ["odysseus", "telemachus", "athena", "zeus"],
          locationId: "swinehut",
        },
        {
          id: "odyssey-16-e4",
          title: "杀人计划再起",
          description:
            "【当下】求婚人争论是否立即杀死忒勒马科斯，珀涅罗珀质问，欧律马科斯虚言安抚。",
          characterIds: [
            "antinous",
            "amphinomus",
            "penelope",
            "eurymachus",
            "telemachus",
          ],
          locationId: "ithaca-palace",
        },
      ],
      sourceIds: ["pg-butler", "ws-butler", "spark-outline", "spark-15-16"],
      originalRange: "Book XVI",
      editorialNote:
        "编辑题名。本卷提出收走武器的计划，实际搬走厅堂武器在第19卷开头；欧迈俄斯此时尚未获知主人身份。",
    },
    {
      id: "odyssey-17",
      order: 17,
      title: "老犬与宫门前的陌生人",
      arc: "王宫试探（17—20卷）",
      summary:
        "忒勒马科斯先回王宫见母亲，奥德修斯随后以乞者身份入城。老犬认出主人，求婚人却只看见可以欺凌的流浪者。",
      paragraphs: [
        "忒勒马科斯回宫，珀涅罗珀与乳母欣喜相迎。他讲述涅斯托尔与墨涅拉俄斯提供的消息，仍不透露父亲已经在岛上。受邀来的忒俄克吕墨诺斯则预言奥德修斯就在故土，正等待报复；母亲许诺若应验便给予厚礼。",
        "稍后，欧迈俄斯领着伪装的奥德修斯下山入城。牧羊人墨兰提俄斯在泉边辱骂他们，还踢打陌生人，预言他在宫中不会得到好待遇。奥德修斯压住反击的冲动，听着仆人赞成求婚人的言语，继续向自家门口走去。",
        "老犬阿尔戈斯躺在粪堆上，浑身虫虱，早已无人照管。它听见熟悉声音，摇尾垂耳，却无力靠近主人；奥德修斯别过脸擦泪，免得猪倌发现。狗在二十年后看见主人归来，随即死去，最直接的辨认没有带来公开团聚。",
        "进厅后，奥德修斯逐一乞讨以观察众人。安提诺俄斯不仅拒绝，还用脚凳砸中他的肩膀；有些求婚人也责怪他伤害可能由神乔装的陌生客。珀涅罗珀想见这名也许知道丈夫消息的旅人，奥德修斯请求等夜深再谈，猪倌随后返回乡间。",
      ],
      characterIds: [
        "telemachus",
        "penelope",
        "eurycleia",
        "theoclymenus",
        "odysseus",
        "eumaeus",
        "melanthius",
        "argos",
        "antinous",
        "nestor",
        "menelaus",
      ],
      locationIds: ["ithaca-palace", "ithaca-road"],
      events: [
        {
          id: "odyssey-17-e1",
          title: "返家报告寻父所得",
          description:
            "【当下】忒勒马科斯见母亲，隐去棚屋相认；预言者宣称奥德修斯已经回岛。",
          characterIds: ["telemachus", "penelope", "eurycleia", "theoclymenus"],
          locationId: "ithaca-palace",
        },
        {
          id: "odyssey-17-e2",
          title: "泉边忍受踢辱",
          description:
            "【当下】墨兰提俄斯辱骂猪倌与乞者，奥德修斯不暴露力量，继续进城。",
          characterIds: ["melanthius", "eumaeus", "odysseus"],
          locationId: "ithaca-road",
        },
        {
          id: "odyssey-17-e3",
          title: "阿尔戈斯最后一次认主",
          description:
            "【当下】衰老的狗在宫门外认出奥德修斯，主人偷偷落泪，狗随即死去。",
          characterIds: ["argos", "odysseus", "eumaeus"],
          locationId: "ithaca-palace",
        },
        {
          id: "odyssey-17-e4",
          title: "脚凳与夜谈的约定",
          description:
            "【当下】安提诺俄斯掷凳伤人；珀涅罗珀请乞者来谈丈夫消息，他要求延至夜间。",
          characterIds: ["antinous", "odysseus", "penelope", "eumaeus"],
          locationId: "ithaca-palace",
        },
      ],
      sourceIds: ["pg-butler", "ws-butler", "spark-outline"],
      originalRange: "Book XVII",
      editorialNote:
        "编辑题名。道路节点统摄入城泉边冲突；犬的辨认不等于人类家属已公开相认，王后的长谈在第19卷。",
    },
    {
      id: "odyssey-18",
      order: 18,
      title: "乞丐拳斗与王后的索礼",
      arc: "王宫试探（17—20卷）",
      summary:
        "奥德修斯击败伊罗斯，警告较温和的求婚人仍未奏效。珀涅罗珀要求求婚礼物，侍女与欧律马科斯又不断挑衅来客。",
      paragraphs: [
        "常在城中讨食的伊罗斯不愿与新来的乞丐分取残餐，驱赶奥德修斯，求婚人则把冲突当作娱乐。奥德修斯先要求他们发誓不偏帮，对方见他裸露的筋骨便害怕。他控制力道一拳击倒伊罗斯，把他拖到门外，赢得食物而未当场暴露姓名。",
        "安菲诺摩斯送来面包和酒，态度比其他人温和。奥德修斯借机说人的境遇无常，劝他在主人回来前离开这群恶客。安菲诺摩斯听后心里不安，却仍留在原来的位置；叙述者点出他将死于忒勒马科斯之手，善意没有变成脱离同谋的行动。",
        "雅典娜使珀涅罗珀容光焕发，促使她下楼面对求婚人。她责备儿子让陌生客受辱，又说丈夫临行时曾让她在儿子长大后考虑再嫁。她指出真正求婚者应送牛羊财物，而不是吃掉女家的产业；众人争相拿礼物，奥德修斯看出她的话有策略。",
        "入夜，奥德修斯愿意看守火盆，侍女墨兰托却讥讽他久留，她与欧律马科斯私通，并不体恤女主人。欧律马科斯又嘲弄乞者不肯工作，奥德修斯反以耕作与战场能力回应；对方掷凳未中，险些引起混乱，忒勒马科斯和安菲诺摩斯使宴席散去。",
      ],
      characterIds: [
        "odysseus",
        "irus",
        "antinous",
        "amphinomus",
        "telemachus",
        "athena",
        "penelope",
        "melantho",
        "eurymachus",
      ],
      locationIds: ["ithaca-palace"],
      events: [
        {
          id: "odyssey-18-e1",
          title: "击败伊罗斯",
          description:
            "【当下】求婚人围观乞丐拳斗，奥德修斯先确保不受围攻，再控制力道击倒对手。",
          characterIds: ["odysseus", "irus", "antinous"],
          locationId: "ithaca-palace",
        },
        {
          id: "odyssey-18-e2",
          title: "给安菲诺摩斯的警告",
          description:
            "【当下】奥德修斯劝较有礼的求婚人及早离去，对方不安却未退出。",
          characterIds: ["odysseus", "amphinomus"],
          locationId: "ithaca-palace",
        },
        {
          id: "odyssey-18-e3",
          title: "求婚者应当赠礼",
          description:
            "【当下】珀涅罗珀责备儿子后，要求求婚人按礼数献礼，反转一味耗损家产的局面。",
          characterIds: ["penelope", "telemachus", "athena", "odysseus"],
          locationId: "ithaca-palace",
        },
        {
          id: "odyssey-18-e4",
          title: "火盆旁再受挑衅",
          description:
            "【当下】墨兰托与欧律马科斯侮辱来客，掷凳引发混乱后众人终被劝散。",
          characterIds: [
            "melantho",
            "eurymachus",
            "odysseus",
            "telemachus",
            "amphinomus",
          ],
          locationId: "ithaca-palace",
        },
      ],
      sourceIds: ["pg-butler", "ws-butler", "spark-outline"],
      originalRange: "Book XVIII",
      editorialNote:
        "编辑题名。本卷的脚凳攻击者为欧律马科斯，与第17卷安提诺俄斯掷凳不是同一事件。",
    },
    {
      id: "odyssey-19",
      order: 19,
      title: "暗藏武器，伤疤泄露姓名",
      arc: "王宫试探（17—20卷）",
      summary:
        "父子收走厅堂兵器，珀涅罗珀向陌生人诉说困境；乳母由伤疤认出奥德修斯，王后则提出明日的弓试。",
      paragraphs: [
        "求婚人走后，奥德修斯和忒勒马科斯将厅堂武器搬进内室，准备以烟熏损坏与避免醉斗为解释。雅典娜照亮他们搬运的路线，少年惊异，父亲叫他不要追问神迹。忒勒马科斯就寝后，珀涅罗珀来到火边，先制止墨兰托对来客的再度辱骂。",
        "珀涅罗珀诉说寿衣拖延计败露以及家人催促再婚的压力。奥德修斯自称克里特人，编造曾款待她丈夫的往事；她用衣着和随从细节试探，他准确描述别针、外衣与传令随从，使她泪流不止。他又保证丈夫将归，却仍不说自己就是那人。",
        "王后让欧律克勒娅替客人洗脚。乳母摸到腿上的伤疤，想起奥德修斯少年时随外祖父奥托吕科斯一家在帕尔纳索斯猎野猪，被獠牙划伤的往事。她认出主人，惊得脚落回盆中、水泼出来；奥德修斯立即制止她声张，雅典娜也使王后没有注意到这一幕。",
        "珀涅罗珀继续讲鹰杀死院中群鹅的梦，陌生人把它解释为丈夫归来杀死求婚人，她却说梦有真假，不能轻信。她决定明日拿出丈夫的弓，谁能上弦并把箭射穿排成一列的十二斧，就嫁给谁。奥德修斯鼓励她不要延期，双方仍以不同身份结束谈话。",
      ],
      characterIds: [
        "odysseus",
        "telemachus",
        "athena",
        "penelope",
        "melantho",
        "eurycleia",
        "autolycus",
      ],
      locationIds: ["ithaca-palace", "parnassus"],
      events: [
        {
          id: "odyssey-19-e1",
          title: "移走厅堂兵器",
          description:
            "【当下】父子借夜色搬走武器，雅典娜提供光亮，为以后封锁求婚人的武装作准备。",
          characterIds: ["odysseus", "telemachus", "athena"],
          locationId: "ithaca-palace",
        },
        {
          id: "odyssey-19-e2",
          title: "王后查问旧衣细节",
          description:
            "【当下】珀涅罗珀试探克里特客人的证词；奥德修斯以真实衣饰细节支撑虚构相遇。",
          characterIds: ["penelope", "odysseus"],
          locationId: "ithaca-palace",
        },
        {
          id: "odyssey-19-e3",
          title: "猎伤触发乳母辨认",
          description:
            "【回忆】洗脚触及帕尔纳索斯野猪猎伤，叙述回顾奥托吕科斯家事；现场乳母认主并被要求保密。",
          characterIds: ["odysseus", "eurycleia", "autolycus", "athena"],
          locationId: "parnassus",
        },
        {
          id: "odyssey-19-e4",
          title: "鹅梦之后约定弓试",
          description:
            "【当下】珀涅罗珀讲梦并提出十二斧弓试，奥德修斯赞成尽快举行。",
          characterIds: ["penelope", "odysseus"],
          locationId: "ithaca-palace",
        },
      ],
      sourceIds: ["pg-butler", "ws-butler", "spark-outline"],
      originalRange: "Book XIX",
      editorialNote:
        "编辑题名。帕尔纳索斯是幼年伤疤的回忆，洗脚现场仍在伊塔卡。本整理不把“王后此时已经认出丈夫”这一有争议读法写成事实。",
    },
    {
      id: "odyssey-20",
      order: 20,
      title: "无眠之夜与失明的宴席",
      arc: "王宫试探（17—20卷）",
      summary:
        "奥德修斯和珀涅罗珀各自难眠，雷声与磨坊女工的话回应祈求；越来越明显的凶兆仍无法让求婚人停止羞辱。",
      paragraphs: [
        "奥德修斯躺在门廊，听见侍女们去与求婚人相会，愤怒得翻身难眠，却强迫自己继续忍耐。雅典娜安慰他并使他睡去。楼上的珀涅罗珀则痛苦祈求阿耳忒弥斯，宁愿死去也不愿被迫嫁给不相称的人，夫妻在同一屋内仍各自承受黑夜。",
        "天将亮时，奥德修斯请求宙斯给出征兆。晴空响雷，最后还在磨粮的疲惫女工听见后，希望这将是求婚人最后一次宴饮；内外两个信号使他振奋。仆人清理厅堂、运送牲口，为节日宴席作准备。",
        "欧迈俄斯带猪来，墨兰提俄斯仍旧辱骂乞者，牧牛人菲洛提俄斯却温和问候，见他便想起失踪的主人。求婚人又商议谋杀忒勒马科斯，却被鸟兆阻止继续推进。宴席开始后，忒勒马科斯公开保证客人应得到自己的座位和份食。",
        "克忒西波斯将牛蹄掷向奥德修斯，被他躲开，忒勒马科斯严厉警告再伤客便要动武。雅典娜使求婚人的笑声变得失常，忒俄克吕墨诺斯看见厅堂血影和亡灵，宣布黑暗逼近。众人反骂他疯了，预言者离席，父子仍静待动手的时刻。",
      ],
      characterIds: [
        "odysseus",
        "athena",
        "penelope",
        "zeus",
        "eumaeus",
        "melanthius",
        "philoetius",
        "telemachus",
        "theoclymenus",
        "ctesippus",
        "amphinomus",
      ],
      locationIds: ["ithaca-palace"],
      events: [
        {
          id: "odyssey-20-e1",
          title: "压住夜间的愤怒",
          description:
            "【当下】奥德修斯在侍女的笑语中克制愤怒，雅典娜安抚他；王后在楼上祈求解脱。",
          characterIds: ["odysseus", "athena", "penelope"],
          locationId: "ithaca-palace",
        },
        {
          id: "odyssey-20-e2",
          title: "雷声与女工的话",
          description:
            "【当下】宙斯的雷声和磨粮女工关于最后宴席的愿望，被奥德修斯视为回应。",
          characterIds: ["odysseus", "zeus"],
          locationId: "ithaca-palace",
        },
        {
          id: "odyssey-20-e3",
          title: "牧牛人的忠心",
          description:
            "【当下】菲洛提俄斯善待陌生客、思念旧主，与墨兰提俄斯的辱骂形成对照。",
          characterIds: ["philoetius", "melanthius", "eumaeus", "odysseus"],
          locationId: "ithaca-palace",
        },
        {
          id: "odyssey-20-e4",
          title: "牛蹄、血影与被嘲笑的预言",
          description:
            "【当下】克忒西波斯掷牛蹄未中；忒俄克吕墨诺斯看见凶兆并离席，求婚人仍嘲笑警告。",
          characterIds: [
            "ctesippus",
            "odysseus",
            "telemachus",
            "theoclymenus",
            "athena",
          ],
          locationId: "ithaca-palace",
        },
      ],
      sourceIds: ["pg-butler", "ws-butler", "spark-outline"],
      originalRange: "Book XX",
      editorialNote:
        "编辑题名。血影是预言者的异象，不是第22卷流血战斗已经发生；弓试仍在下一卷。",
    },
    {
      id: "odyssey-21",
      order: 21,
      title: "无人能弯的弓",
      arc: "复仇与重建（21—24卷）",
      summary:
        "珀涅罗珀取出旧弓举行比试，求婚人接连失败。奥德修斯向忠仆亮明身份，接过弓并一箭穿过十二斧，复仇的条件齐备。",
      paragraphs: [
        "珀涅罗珀打开库房，取出奥德修斯从友人伊菲托斯处得到的弓与箭袋，抱弓哭泣后向求婚人宣布比赛。忒勒马科斯把十二斧排列好，自己也试着上弦；三次未成，第四次本有希望，却在父亲暗示下停手，把机会留给接下来的局面。",
        "求婚人轮流试弓，勒俄得斯率先失败，安提诺俄斯命人拿油和火来软化弓身。奥德修斯趁欧迈俄斯与菲洛提俄斯出厅，私下询问他们是否愿帮归来的主人；得到肯定后，展示伤疤表明身份，并许诺赏赐、住处和亲近的地位。",
        "欧律马科斯也无法上弦，安提诺俄斯建议因为当天是阿波罗节日而改日再试。乞者提出自己也想试弓，求婚人担心受辱而阻挠。珀涅罗珀愿给他奖赏，但明确不是让她嫁给乞者；忒勒马科斯接管安排，请母亲回楼上，将弓交到父亲手中。",
        "欧迈俄斯让乳母关好妇女房门，菲洛提俄斯锁住外门。奥德修斯仔细检查弓，轻松上弦，拨弦发声，宙斯同时响雷。他取箭坐射，贯穿整列十二斧，随后向儿子示意；忒勒马科斯持兵器站到他身旁，厅堂杀戮尚未开始。",
      ],
      characterIds: [
        "penelope",
        "odysseus",
        "telemachus",
        "leodes",
        "antinous",
        "eurymachus",
        "eumaeus",
        "philoetius",
        "eurycleia",
        "zeus",
      ],
      locationIds: ["ithaca-palace"],
      events: [
        {
          id: "odyssey-21-e1",
          title: "取弓布列十二斧",
          description:
            "【当下】珀涅罗珀宣布比试，忒勒马科斯试弓至第四次时被父亲暗示制止。",
          characterIds: ["penelope", "telemachus", "odysseus"],
          locationId: "ithaca-palace",
        },
        {
          id: "odyssey-21-e2",
          title: "在门外认回忠仆",
          description:
            "【当下】求婚人试弓受挫期间，奥德修斯以伤疤向欧迈俄斯与菲洛提俄斯证明身份。",
          characterIds: [
            "odysseus",
            "eumaeus",
            "philoetius",
            "leodes",
            "antinous",
          ],
          locationId: "ithaca-palace",
        },
        {
          id: "odyssey-21-e3",
          title: "乞者取得试弓权",
          description:
            "【当下】欧律马科斯失败、安提诺俄斯提议延期后，忒勒马科斯让父亲接过弓。",
          characterIds: [
            "eurymachus",
            "antinous",
            "odysseus",
            "penelope",
            "telemachus",
          ],
          locationId: "ithaca-palace",
        },
        {
          id: "odyssey-21-e4",
          title: "封门后一箭穿斧",
          description:
            "【当下】忠仆封闭门户，奥德修斯上弦射穿十二斧，儿子武装站到他身边。",
          characterIds: [
            "odysseus",
            "telemachus",
            "eumaeus",
            "philoetius",
            "eurycleia",
            "zeus",
          ],
          locationId: "ithaca-palace",
        },
      ],
      sourceIds: ["pg-butler", "ws-butler", "spark-outline", "spark-21-22"],
      originalRange: "Book XXI",
      editorialNote:
        "编辑题名。穿斧明确发生在第21卷末，射杀安提诺俄斯在第22卷开头。十二斧的具体器形与穿射方式有解释争议，此处不附会现代机械复原。",
    },
    {
      id: "odyssey-22",
      order: 22,
      title: "封闭厅堂中的清算",
      arc: "复仇与重建（21—24卷）",
      summary:
        "奥德修斯射杀求婚人首领并公开姓名，父子与两名忠仆在雅典娜帮助下赢得战斗；家仆的甄别与残酷惩罚随之展开。",
      paragraphs: [
        "奥德修斯脱去破衣，占住入口，先射穿正在饮酒的安提诺俄斯喉咙。求婚人以为误杀，斥责来客，直到他公开身份与报复缘由。欧律马科斯把过错推给死者，愿赔偿财物，遭拒后拔剑冲来，被奥德修斯射死；安菲诺摩斯随即冲锋，死于忒勒马科斯的矛。",
        "忒勒马科斯到库房取甲胄给自己和两名忠仆，却忘了关门。墨兰提俄斯沿侧道进入，为求婚人带来盾、盔、矛，使奥德修斯惊觉局势危险。欧迈俄斯与菲洛提俄斯在他第二次取械时将他抓住捆起，吊在库房高处，切断敌人的军械来源。",
        "雅典娜化作门托耳鼓励奥德修斯，先观察考验，再使对方投矛失效，并展示神盾造成恐慌。厅堂内的求婚人被逐一击倒，求饶的祭司勒俄得斯也未获饶恕。歌者斐弥俄斯申明自己受强迫演唱，忒勒马科斯替他和传令官墨冬作证，两人才被准许离开杀场。",
        "欧律克勒娅看到尸体想高声欢呼，奥德修斯制止她庆贺死者。她指认十二名被认作背叛家主的女仆，众人命她们清理血迹与尸体后，忒勒马科斯将她们绞死；墨兰提俄斯又遭肢解。最后厅堂用火与硫磺熏净，其他女仆围上来认主，血腥惩罚并未被省写成轻快胜利。",
      ],
      characterIds: [
        "odysseus",
        "antinous",
        "eurymachus",
        "amphinomus",
        "telemachus",
        "eumaeus",
        "philoetius",
        "melanthius",
        "athena",
        "leodes",
        "phemius",
        "medon",
        "eurycleia",
        "amphimedon",
        "ctesippus",
      ],
      locationIds: ["ithaca-palace"],
      events: [
        {
          id: "odyssey-22-e1",
          title: "首箭与公开身份",
          description:
            "【当下】奥德修斯射杀安提诺俄斯、拒绝赔偿，再射杀欧律马科斯；儿子杀死安菲诺摩斯。",
          characterIds: [
            "odysseus",
            "antinous",
            "eurymachus",
            "telemachus",
            "amphinomus",
          ],
          locationId: "ithaca-palace",
        },
        {
          id: "odyssey-22-e2",
          title: "截断库房军械",
          description:
            "【当下】墨兰提俄斯利用未锁的库房给求婚人送武器，被欧迈俄斯与菲洛提俄斯截获捆绑。",
          characterIds: [
            "melanthius",
            "telemachus",
            "eumaeus",
            "philoetius",
            "odysseus",
          ],
          locationId: "ithaca-palace",
        },
        {
          id: "odyssey-22-e3",
          title: "战斗结束与两人获赦",
          description:
            "【当下】雅典娜助父子取胜；忒勒马科斯为斐弥俄斯和墨冬求情，勒俄得斯未获饶恕。",
          characterIds: [
            "athena",
            "odysseus",
            "telemachus",
            "phemius",
            "medon",
            "leodes",
            "amphimedon",
            "ctesippus",
          ],
          locationId: "ithaca-palace",
        },
        {
          id: "odyssey-22-e4",
          title: "惩罚家仆与熏净厅堂",
          description:
            "【当下】十二名被指背叛的女仆被迫清场后遭绞死，墨兰提俄斯遭肢解，厅堂随后熏硫净化。",
          characterIds: ["odysseus", "telemachus", "eurycleia", "melanthius"],
          locationId: "ithaca-palace",
        },
      ],
      sourceIds: ["pg-butler", "ws-butler", "spark-outline", "spark-21-22"],
      originalRange: "Book XXII",
      editorialNote:
        "编辑题名。记录史诗中的性别与主奴权力暴力，不将叙述者或家主的裁决当成现代伦理认定。欧律马科斯死于奥德修斯的箭，不是忒勒马科斯的矛。",
    },
    {
      id: "odyssey-23",
      order: 23,
      title: "扎根的婚床",
      arc: "复仇与重建（21—24卷）",
      summary:
        "珀涅罗珀不肯只凭外貌相信归人，直到婚床的秘密得到回应。夫妻终于相认，奥德修斯却仍须面对城邦的报复和未完的预言。",
      paragraphs: [
        "欧律克勒娅跑上楼告诉珀涅罗珀，丈夫回来了且已杀尽求婚人。王后先怀疑乳母糊涂，又以为可能是神惩恶；即便听到伤疤，也不立刻拥抱来人。忒勒马科斯责怪母亲冷淡，奥德修斯却容许她按自己的方式核验。",
        "奥德修斯担忧杀死城中贵族会引来亲属报复，先让众人洗浴更衣，叫斐弥俄斯奏乐，使路过者以为宫里办婚礼，暂缓消息外泄。他沐浴后恢复庄严外貌，仍没能仅靠容貌解除妻子的戒心。",
        "珀涅罗珀吩咐把婚床搬到外面，试探来人的反应。奥德修斯立刻说那床不能随意搬动：自己围着活橄榄树造卧室，保留树干作床柱，再完成床架。只有真正参与共同生活的人才知道这个秘密，王后终于确信，二人相拥哭泣。",
        "雅典娜延缓黎明，让夫妻有时间重述离散岁月。奥德修斯把忒瑞西阿斯要求携桨远行、祭海神的预言告诉妻子，随后概述冒险，她也讲自己怎样拖延求婚人。天亮时，他嘱妻留在楼上，带儿子、猪倌和牧牛人武装出城，去乡间探望父亲。",
      ],
      characterIds: [
        "eurycleia",
        "penelope",
        "odysseus",
        "telemachus",
        "phemius",
        "athena",
        "tiresias",
        "poseidon",
        "eumaeus",
        "philoetius",
        "laertes",
      ],
      locationIds: ["ithaca-palace"],
      events: [
        {
          id: "odyssey-23-e1",
          title: "报喜未能立即取信",
          description:
            "【当下】乳母说明战斗和伤疤，珀涅罗珀仍要求亲自确认归人的身份。",
          characterIds: ["eurycleia", "penelope", "odysseus", "telemachus"],
          locationId: "ithaca-palace",
        },
        {
          id: "odyssey-23-e2",
          title: "用婚乐掩住杀讯",
          description:
            "【当下】奥德修斯安排洗浴、歌舞，暂让外人误以为求婚已经结束。",
          characterIds: ["odysseus", "phemius", "telemachus"],
          locationId: "ithaca-palace",
        },
        {
          id: "odyssey-23-e3",
          title: "不可移动的床柱",
          description:
            "【当下】珀涅罗珀以搬床试探，奥德修斯说出活橄榄树床柱的秘密，夫妻相认。",
          characterIds: ["penelope", "odysseus"],
          locationId: "ithaca-palace",
        },
        {
          id: "odyssey-23-e4",
          title: "长夜互诉，黎明出城",
          description:
            "【当下】夫妻互述离散经历与未完预言；天亮后奥德修斯带儿子和两名忠仆去见父亲。",
          characterIds: [
            "odysseus",
            "penelope",
            "athena",
            "telemachus",
            "eumaeus",
            "philoetius",
            "laertes",
          ],
          locationId: "ithaca-palace",
        },
      ],
      sourceIds: ["pg-butler", "ws-butler", "spark-outline"],
      originalRange: "Book XXIII",
      editorialNote:
        "编辑题名。婚床是夫妻相认的决定性证据；本卷末仅出城往农庄，第24卷才与拉厄尔忒斯相认。携桨远行仍为未来预言，诗内没有完成。",
    },
    {
      id: "odyssey-24",
      order: 24,
      title: "果园辨认与神命止战",
      arc: "复仇与重建（21—24卷）",
      summary:
        "求婚人的亡魂进入冥界，奥德修斯在果园认回父亲；死者亲属掀起复仇，最终由宙斯与雅典娜强行终止血仇。",
      paragraphs: [
        "赫尔墨斯把求婚人的亡魂带往幽冥，那里阿伽门农与阿喀琉斯正在谈论各自的死亡和葬礼。阿伽门农认出安菲墨冬，询问为何一群青年同时死去。后者从败者角度复述求婚、弓试和屠杀，亡王据此赞颂珀涅罗珀的忠贞，与自己妻子的行为相对照。",
        "伊塔卡乡间，奥德修斯让同行者先去农舍，自己进果园寻找父亲。拉厄尔忒斯衣着破旧、辛苦劳作，儿子见了流泪，却先假称曾接待过奥德修斯的异乡人。老人被失子之痛压倒后，他不忍再试探，表明身份，以伤疤和幼时获赠果树的种类数目证明自己。",
        "拉厄尔忒斯洗浴更衣，雅典娜使他精神焕发，众人在农舍团聚用餐。与此同时，城里人得知求婚人尽死，收取尸体并开会。安提诺俄斯的父亲欧佩忒斯主张复仇，墨冬说明战斗有神助，老预言者也劝阻；部分人散去，其余人仍拿起武器。",
        "宙斯与雅典娜议定结束报复，让奥德修斯继续为王。武装亲属来到农庄，拉厄尔忒斯在女神鼓励下投矛杀死欧佩忒斯，父子一方追击敌人。雅典娜命众人停战，宙斯落雷警示，奥德修斯服从；女神以门托耳的形貌促成双方盟誓，史诗终于止于被神力压住的血仇。",
      ],
      characterIds: [
        "hermes",
        "agamemnon",
        "achilles",
        "amphimedon",
        "penelope",
        "odysseus",
        "laertes",
        "telemachus",
        "eumaeus",
        "philoetius",
        "athena",
        "zeus",
        "eupeithes",
        "antinous",
        "medon",
      ],
      locationIds: ["oceanus-dead", "laertes-farm", "ithaca-harbor"],
      events: [
        {
          id: "odyssey-24-e1",
          title: "败者亡魂的陈述",
          description:
            "【当下·亡灵线】赫尔墨斯引魂，安菲墨冬向阿伽门农说明求婚人覆灭的经过。",
          characterIds: [
            "hermes",
            "amphimedon",
            "agamemnon",
            "achilles",
            "penelope",
          ],
          locationId: "oceanus-dead",
        },
        {
          id: "odyssey-24-e2",
          title: "用果树认回父亲",
          description:
            "【当下】奥德修斯停止假装，以腿上伤疤和幼时受赠的果树细节让拉厄尔忒斯相信。",
          characterIds: ["odysseus", "laertes"],
          locationId: "laertes-farm",
        },
        {
          id: "odyssey-24-e3",
          title: "死者亲属选择复仇",
          description:
            "【当下】欧佩忒斯号召武装报复，墨冬和预言者的劝阻只能使部分民众退出。",
          characterIds: ["eupeithes", "antinous", "medon"],
          locationId: "ithaca-harbor",
        },
        {
          id: "odyssey-24-e4",
          title: "最后一矛与盟誓",
          description:
            "【当下】拉厄尔忒斯杀死欧佩忒斯；宙斯落雷，雅典娜制止追杀并让双方立下和约。",
          characterIds: [
            "laertes",
            "eupeithes",
            "odysseus",
            "telemachus",
            "athena",
            "zeus",
          ],
          locationId: "laertes-farm",
        },
      ],
      sourceIds: ["pg-butler", "ws-butler", "spark-outline"],
      originalRange: "Book XXIV",
      editorialNote:
        "编辑题名。完整保留传统第24卷，不以第23卷夫妻相认为全诗终点。亡者节点统摄幽冥叙事，不把赫尔墨斯引魂当成奥德修斯再次问冥。",
    },
  ],
  characters: [
    {
      id: "odysseus",
      name: "奥德修斯",
      aliases: ["Odysseus", "Ulysses", "尤利西斯", "无人"],
      role: "伊塔卡之王，漂泊者与归人",
      faction: "伊塔卡王家",
      description:
        "凭机谋和忍耐求生的英雄，也因自负、隐瞒和复仇留下沉重代价。前四卷主要被他人谈论，第五卷才进入当下行动。",
      firstChapter: 1,
      color: "#62c5e8",
    },
    {
      id: "telemachus",
      name: "忒勒马科斯",
      aliases: ["Telemachus"],
      role: "寻父的王子",
      faction: "伊塔卡王家",
      description:
        "奥德修斯与珀涅罗珀之子，从无力旁观者成长为出海问讯、协助父亲夺回家园的人。",
      firstChapter: 1,
      color: "#8ce0d0",
    },
    {
      id: "penelope",
      name: "珀涅罗珀",
      aliases: ["Penelope", "佩涅洛佩"],
      role: "等待并检验归人的王后",
      faction: "伊塔卡王家",
      description:
        "用织物、言辞和审慎判断对抗求婚压力。婚床试探使她并非只被动等待，而是亲自确认共同生活能否恢复。",
      firstChapter: 1,
      color: "#dba9ef",
    },
    {
      id: "athena",
      name: "雅典娜",
      aliases: ["Athena", "Athene", "Minerva", "密涅瓦"],
      role: "谋略与保护之神",
      faction: "奥林波斯诸神",
      description:
        "支持奥德修斯父子，借门忒斯、门托耳、少女等形貌引导行动，并在结尾终止双方血仇。",
      firstChapter: 1,
      color: "#a9caff",
    },
    {
      id: "zeus",
      name: "宙斯",
      aliases: ["Zeus", "Jove", "Jupiter"],
      role: "诸神议事的裁定者",
      faction: "奥林波斯诸神",
      description:
        "准许归乡、惩罚杀食圣牛的船员，也以雷声回应祈求并在终卷发出止战警示。",
      firstChapter: 1,
    },
    {
      id: "poseidon",
      name: "波塞冬",
      aliases: ["Poseidon", "Neptune", "尼普顿"],
      role: "阻挠归途的海神",
      faction: "奥林波斯诸神",
      description:
        "因儿子波吕斐摩斯遭刺瞎而追究奥德修斯，掀起海难，并惩罚帮助归人的费阿刻斯船。",
      firstChapter: 1,
    },
    {
      id: "calypso",
      name: "卡吕普索",
      aliases: ["Calypso", "卡莉普索"],
      role: "奥吉吉亚的女神",
      faction: "海上神灵",
      description:
        "收留海难后的奥德修斯并希望长期留他为伴；奉宙斯之命放行，提供造筏工具和补给。",
      firstChapter: 1,
    },
    {
      id: "polyphemus",
      name: "波吕斐摩斯",
      aliases: ["Polyphemus", "独眼巨人"],
      role: "洞穴主人，波塞冬之子",
      faction: "海上异族",
      description:
        "拒绝宾客保护、吞食来客，被酒与无人假名设局刺瞎，随后向父亲祈求报复。",
      firstChapter: 1,
    },
    {
      id: "agamemnon",
      name: "阿伽门农",
      aliases: ["Agamemnon"],
      role: "遭家中谋害的归国统帅",
      faction: "阿开奥斯战友",
      description:
        "其遇害与儿子复仇的往事反复成为归乡故事的对照；第十一、二十四卷以亡灵出现。",
      firstChapter: 1,
    },
    {
      id: "phemius",
      name: "斐弥俄斯",
      aliases: ["Phemius"],
      role: "伊塔卡宫廷歌者",
      faction: "伊塔卡家仆与民众",
      description:
        "被迫为求婚人唱歌，战斗时申明并非自愿同谋，由忒勒马科斯作证获赦，随后奏乐掩护杀讯。",
      firstChapter: 1,
    },
    {
      id: "antinous",
      name: "安提诺俄斯",
      aliases: ["Antinous"],
      role: "强硬的求婚人首领",
      faction: "求婚人",
      description:
        "推动海上伏击和谋杀王子的计划，殴辱乞者；第二十二卷饮酒时成为奥德修斯首先射杀的人。",
      firstChapter: 1,
      color: "#ec8589",
    },
    {
      id: "eurymachus",
      name: "欧律马科斯",
      aliases: ["Eurymachus"],
      role: "善于推诿的求婚人首领",
      faction: "求婚人",
      description:
        "对王后虚言安抚，对乞者肆意侮辱；危急时把罪责推给安提诺俄斯，求和失败后进攻并被射杀。",
      firstChapter: 1,
    },
    {
      id: "eurycleia",
      name: "欧律克勒娅",
      aliases: ["Eurycleia", "Euryclea"],
      role: "老乳母与家内管事者",
      faction: "伊塔卡家仆与民众",
      description:
        "抚育两代王家子弟，暗助少年出航；洗脚时由伤疤认出奥德修斯，参与保密与家仆甄别。",
      firstChapter: 1,
    },
    {
      id: "laertes",
      name: "拉厄尔忒斯",
      aliases: ["Laertes"],
      role: "退居果园的老父",
      faction: "伊塔卡王家",
      description:
        "奥德修斯之父，因失子之痛在乡间劳作衰老；终卷以果树往事认回儿子，并投矛杀死欧佩忒斯。",
      firstChapter: 2,
    },
    {
      id: "mentor",
      name: "门托耳",
      aliases: ["Mentor", "门托尔"],
      role: "王家的老友",
      faction: "伊塔卡家仆与民众",
      description:
        "第二卷真正出席会议并责备民众旁观。雅典娜常借其形貌行动，但不能把女神的全部行为归到他本人名下。",
      firstChapter: 2,
    },
    {
      id: "nestor",
      name: "涅斯托尔",
      aliases: ["Nestor"],
      role: "皮洛斯老王",
      faction: "阿开奥斯战友",
      description:
        "向寻父少年提供款待、战后离散的回忆与行动榜样，并让儿子陪同他前往斯巴达。",
      firstChapter: 3,
    },
    {
      id: "pisistratus",
      name: "庇西斯特拉托斯",
      aliases: ["Pisistratus", "Peisistratus"],
      role: "涅斯托尔之子，旅途同伴",
      faction: "皮洛斯王家",
      description:
        "在祭宴迎客，驾车陪忒勒马科斯往返斯巴达；返程尊重他尽快登船的请求。",
      firstChapter: 3,
    },
    {
      id: "menelaus",
      name: "墨涅拉俄斯",
      aliases: ["Menelaus"],
      role: "斯巴达国王",
      faction: "阿开奥斯战友",
      description:
        "奥德修斯的战友、海伦的丈夫；经普罗透斯得知英雄尚活，把这条消息告诉忒勒马科斯并赠礼送行。",
      firstChapter: 3,
    },
    {
      id: "helen",
      name: "海伦",
      aliases: ["Helen"],
      role: "斯巴达王后",
      faction: "斯巴达王家",
      description:
        "从相貌认出战友之子，回述特洛伊旧事，给酒加忘忧药，并在少年离开时解释鹰攫鹅的征兆。",
      firstChapter: 4,
    },
    {
      id: "proteus",
      name: "普罗透斯",
      aliases: ["Proteus", "海中老人"],
      role: "能变形的海上预言者",
      faction: "海上神灵",
      description:
        "在墨涅拉俄斯转述中被制伏，告知正确返航祭祀和其他归国者的命运，包括奥德修斯被困海岛。",
      firstChapter: 4,
    },
    {
      id: "medon",
      name: "墨冬",
      aliases: ["Medon"],
      role: "传令官与见证人",
      faction: "伊塔卡家仆与民众",
      description:
        "把求婚人的谋杀计划告诉王后，获忒勒马科斯保全性命，并在终卷向民众说明战斗中的神助。",
      firstChapter: 4,
    },
    {
      id: "hermes",
      name: "赫尔墨斯",
      aliases: ["Hermes", "Mercury", "墨丘利"],
      role: "神使与引魂者",
      faction: "奥林波斯诸神",
      description:
        "向卡吕普索传达放人命令，给奥德修斯抵御喀耳刻的药草，终卷又引领求婚人亡魂。",
      firstChapter: 5,
    },
    {
      id: "ino",
      name: "伊诺",
      aliases: ["Ino", "Leucothea", "琉科忒娅"],
      role: "海难中的施救女神",
      faction: "海上神灵",
      description:
        "原为凡人、后具神性的海中救援者，将护身头巾借给奥德修斯，要求他登岸后归还。",
      firstChapter: 5,
    },
    {
      id: "nausicaa",
      name: "瑙西卡娅",
      aliases: ["Nausicaa", "Nausikaa"],
      role: "费阿刻斯公主",
      faction: "费阿刻斯王家",
      description:
        "在洗衣河口遇到海难者，给予食物衣物，教他先求王后帮助，同时谨慎处理陌生男子引来的婚嫁流言。",
      firstChapter: 6,
    },
    {
      id: "alcinous",
      name: "阿尔基诺俄斯",
      aliases: ["Alcinous", "Alkinoos"],
      role: "费阿刻斯国王",
      faction: "费阿刻斯王家",
      description:
        "接待无名来客，注意他的眼泪，引出四卷冒险叙述，并安排护送与厚礼；后来面对海神的惩罚。",
      firstChapter: 6,
    },
    {
      id: "arete",
      name: "阿瑞忒",
      aliases: ["Arete"],
      role: "费阿刻斯王后",
      faction: "费阿刻斯王家",
      description:
        "在王家和城邦中受尊重，首先接受奥德修斯抱膝求援；由衣物追问来历，并支持款待和赠礼。",
      firstChapter: 6,
    },
    {
      id: "demodocus",
      name: "得摩多科斯",
      aliases: ["Demodocus"],
      role: "费阿刻斯盲歌者",
      faction: "费阿刻斯民众",
      description:
        "唱战争与神界故事，让隐藏身份的英雄因记忆落泪；木马之歌直接引出主人对来客身世的追问。",
      firstChapter: 8,
    },
    {
      id: "achilles",
      name: "阿喀琉斯",
      aliases: ["Achilles"],
      role: "战死的阿开奥斯英雄",
      faction: "阿开奥斯战友",
      description:
        "先在歌曲中出现，后在亡者之境否定死亡荣耀足以补偿生命；听到儿子的英勇事迹时仍感欣慰。",
      firstChapter: 8,
    },
    {
      id: "euryalus",
      name: "欧律阿罗斯",
      aliases: ["Euryalus"],
      role: "费阿刻斯竞技者",
      faction: "费阿刻斯民众",
      description:
        "在竞技场轻蔑来客，激起奥德修斯掷饼证明实力；后来献出宝剑赔礼。",
      firstChapter: 8,
    },
    {
      id: "aeolus",
      name: "艾俄洛斯",
      aliases: ["Aeolus", "Aiolos"],
      role: "掌管诸风者",
      faction: "海上神灵",
      description:
        "封住逆风、帮助航行，却在船员打开风袋导致失败后拒绝再助；不据后世谱系将其神格细节写死。",
      firstChapter: 10,
    },
    {
      id: "eurylochus",
      name: "欧律洛科斯",
      aliases: ["Eurylochus"],
      role: "船员中的领队与异议者",
      faction: "奥德修斯船队",
      description:
        "察觉喀耳刻陷阱而报信，也曾质疑领袖；最后在饥饿中劝船员杀食圣牛，导致全船惩罚。",
      firstChapter: 10,
    },
    {
      id: "circe",
      name: "喀耳刻",
      aliases: ["Circe", "Kirke", "瑟西"],
      role: "艾艾埃的女神",
      faction: "海上神灵",
      description:
        "用药把来客变成猪，被奥德修斯抵御后转为接待者和指路者，教他招魂并说明后续海路禁忌。",
      firstChapter: 10,
    },
    {
      id: "tiresias",
      name: "忒瑞西阿斯",
      aliases: ["Tiresias", "Teiresias"],
      role: "死后仍能预言的先知",
      faction: "亡者之境",
      description:
        "通过祭血向奥德修斯说明圣牛禁令、归家复仇以及未来携桨祭海神的任务。",
      firstChapter: 10,
    },
    {
      id: "elpenor",
      name: "厄尔佩诺耳",
      aliases: ["Elpenor"],
      role: "失足未葬的年轻船员",
      faction: "奥德修斯船队",
      description:
        "醉睡屋顶后跌落身亡，在亡者之境请求葬礼；其死亡、求葬与安葬分别跨第十至十二卷。",
      firstChapter: 10,
    },
    {
      id: "anticleia",
      name: "安提克勒娅",
      aliases: ["Anticleia", "Anticlea"],
      role: "奥德修斯的母亲",
      faction: "伊塔卡王家",
      description:
        "因思念远行儿子而死，在祭血前讲述家中近况；儿子三次试图拥抱她，却不能拥住亡灵。",
      firstChapter: 11,
    },
    {
      id: "helios",
      name: "赫利俄斯",
      aliases: ["Helios", "太阳神", "Butler译本的Hyperion"],
      role: "圣牛与羊群的神主",
      faction: "奥林波斯诸神",
      description:
        "看护神圣畜群，对船员杀食牛只提出控诉，要求宙斯惩罚，否则不再照耀活人。",
      firstChapter: 11,
    },
    {
      id: "ajax",
      name: "埃阿斯",
      aliases: ["Ajax", "Aias", "大埃阿斯"],
      role: "拒绝和解的战友亡灵",
      faction: "阿开奥斯战友",
      description:
        "在亡者之境仍记恨阿喀琉斯铠甲归属之争，对奥德修斯的解释保持沉默；不是归航溺亡的小埃阿斯。",
      firstChapter: 11,
    },
    {
      id: "eumaeus",
      name: "欧迈俄斯",
      aliases: ["Eumaeus", "Eumaios"],
      role: "忠诚猪倌",
      faction: "伊塔卡家仆与民众",
      description:
        "不知道乞者身份仍热心款待，童年曾遭拐卖；后来认主、封门，并与王家父子共同战斗。",
      firstChapter: 13,
    },
    {
      id: "theoclymenus",
      name: "忒俄克吕墨诺斯",
      aliases: ["Theoclymenus"],
      role: "随船避难的预言者",
      faction: "外来宾客",
      description:
        "因杀人血仇逃离故乡，被忒勒马科斯接纳；解释鸟兆并看见求婚人的凶兆，遭嘲笑后离席。",
      firstChapter: 15,
    },
    {
      id: "amphinomus",
      name: "安菲诺摩斯",
      aliases: ["Amphinomus"],
      role: "较有节制的求婚人",
      faction: "求婚人",
      description:
        "反对未经问神就谋杀少年，也善待乞者，但没有听从撤离警告，最终仍卷入战斗而死。",
      firstChapter: 16,
    },
    {
      id: "melanthius",
      name: "墨兰提俄斯",
      aliases: ["Melanthius"],
      role: "倒向求婚人的牧羊人",
      faction: "求婚人同党",
      description:
        "在泉边踢辱主人，战斗中窃取库房军械帮助求婚人，被两名忠仆抓住，最终遭酷刑。",
      firstChapter: 17,
    },
    {
      id: "argos",
      name: "阿尔戈斯",
      aliases: ["Argos", "Argus"],
      role: "衰老的猎犬",
      faction: "伊塔卡王家",
      description:
        "被弃置在宫门粪堆旁，却能认出乔装主人；摇尾回应后死去，是归乡辨认中无言的一环。",
      firstChapter: 17,
    },
    {
      id: "irus",
      name: "伊罗斯",
      aliases: ["Irus", "Arnaeus", "阿尔奈俄斯"],
      role: "城中乞者",
      faction: "伊塔卡家仆与民众",
      description:
        "仗着求婚人支持争夺讨食地盘，向奥德修斯挑衅，在拳斗中被击倒。",
      firstChapter: 18,
    },
    {
      id: "melantho",
      name: "墨兰托",
      aliases: ["Melantho"],
      role: "侮辱来客的侍女",
      faction: "求婚人同党",
      description:
        "由珀涅罗珀养育照顾，却不体恤她，与欧律马科斯私通，并反复讥讽伪装的奥德修斯。",
      firstChapter: 18,
    },
    {
      id: "autolycus",
      name: "奥托吕科斯",
      aliases: ["Autolycus"],
      role: "奥德修斯的外祖父",
      faction: "伊塔卡王家亲族",
      description:
        "在伤疤回忆中为外孙命名；奥德修斯少年到其家拜访，与其子辈猎野猪时受伤。",
      firstChapter: 19,
    },
    {
      id: "philoetius",
      name: "菲洛提俄斯",
      aliases: ["Philoetius", "Philoitios"],
      role: "忠诚牧牛人",
      faction: "伊塔卡家仆与民众",
      description:
        "思念失踪主人并善待陌生客，认主后锁住外门、截获叛仆并参与战斗。",
      firstChapter: 20,
    },
    {
      id: "ctesippus",
      name: "克忒西波斯",
      aliases: ["Ctesippus", "Ktesippos"],
      role: "掷牛蹄的求婚人",
      faction: "求婚人",
      description:
        "把牛蹄当作给乞者的侮辱性赠礼掷出，随后在厅堂战斗中被菲洛提俄斯杀死。",
      firstChapter: 20,
    },
    {
      id: "leodes",
      name: "勒俄得斯",
      aliases: ["Leodes", "Leiodês", "Leiodes"],
      role: "为求婚人察看祭兆者",
      faction: "求婚人",
      description:
        "率先试弓失败，战斗末以自己不赞成同伴暴行为由求饶，却仍被奥德修斯杀死。",
      firstChapter: 21,
    },
    {
      id: "amphimedon",
      name: "安菲墨冬",
      aliases: ["Amphimedon"],
      role: "向亡王陈述覆灭的求婚人",
      faction: "求婚人",
      description:
        "在厅堂战斗中被忒勒马科斯杀死；终卷亡魂被阿伽门农认出，从自身立场复述求婚人之死。",
      firstChapter: 22,
    },
    {
      id: "eupeithes",
      name: "欧佩忒斯",
      aliases: ["Eupeithes"],
      role: "安提诺俄斯之父",
      faction: "求婚人亲属",
      description:
        "在丧子后发动报复，拒绝把神助视为退让理由，最终死于拉厄尔忒斯的矛。",
      firstChapter: 24,
    },
  ],
  relationships: [
    {
      id: "odyssey-r01",
      source: "odysseus",
      target: "penelope",
      label: "夫妻与相互确认",
      type: "family",
      description:
        "分离中的等待不是自动恢复的婚姻，最终以两人共有的婚床知识完成辨认。",
      chapterIds: ["odyssey-01", "odyssey-19", "odyssey-23"],
    },
    {
      id: "odyssey-r02",
      source: "odysseus",
      target: "telemachus",
      label: "父子与并肩作战",
      type: "family",
      description:
        "儿子先寻找缺席的父亲，第十六卷相认后共同保密、收械和夺回家园。",
      chapterIds: [
        "odyssey-01",
        "odyssey-16",
        "odyssey-19",
        "odyssey-22",
        "odyssey-24",
      ],
    },
    {
      id: "odyssey-r03",
      source: "penelope",
      target: "telemachus",
      label: "母子与家权张力",
      type: "family",
      description:
        "母亲担心儿子安危，少年成长中的家主姿态却也使她被排除在部分行动之外。",
      chapterIds: [
        "odyssey-01",
        "odyssey-02",
        "odyssey-04",
        "odyssey-17",
        "odyssey-18",
        "odyssey-21",
        "odyssey-23",
      ],
    },
    {
      id: "odyssey-r04",
      source: "laertes",
      target: "odysseus",
      label: "果园里的父子",
      type: "family",
      description:
        "老父长期因儿子失踪而悲伤，终卷借伤疤与童年果树的记忆认回儿子。",
      chapterIds: ["odyssey-09", "odyssey-23", "odyssey-24"],
    },
    {
      id: "odyssey-r05",
      source: "anticleia",
      target: "odysseus",
      label: "无法拥抱的母子",
      type: "family",
      description: "母亲在亡者之境说明自己因思念而死，儿子三次拥抱都落空。",
      chapterIds: ["odyssey-11"],
    },
    {
      id: "odyssey-r06",
      source: "autolycus",
      target: "odysseus",
      label: "外祖父与命名往事",
      type: "family",
      description: "洗脚伤疤引出外祖父为他命名及少年访亲猎伤的回忆。",
      chapterIds: ["odyssey-19"],
    },
    {
      id: "odyssey-r07",
      source: "alcinous",
      target: "arete",
      label: "共同主持宾礼的夫妻",
      type: "family",
      description: "国王和王后共同决定怎样接待无名来客，并支持赠礼护送。",
      chapterIds: ["odyssey-06", "odyssey-07", "odyssey-11", "odyssey-13"],
    },
    {
      id: "odyssey-r08",
      source: "alcinous",
      target: "nausicaa",
      label: "父女与潜在婚事",
      type: "family",
      description:
        "国王为女儿备车洗衣，后来向来客提出可能结亲，但没有强制成婚。",
      chapterIds: ["odyssey-06", "odyssey-07", "odyssey-08"],
    },
    {
      id: "odyssey-r09",
      source: "arete",
      target: "nausicaa",
      label: "母女与求援入口",
      type: "family",
      description: "公主嘱来客首先求助母亲，王后又从女儿给出的衣物追问来历。",
      chapterIds: ["odyssey-06", "odyssey-07"],
    },
    {
      id: "odyssey-r10",
      source: "menelaus",
      target: "helen",
      label: "斯巴达王室夫妻",
      type: "family",
      description: "共同接待寻父少年，各自讲述特洛伊记忆，并在返程时赠礼。",
      chapterIds: ["odyssey-04", "odyssey-15"],
    },
    {
      id: "odyssey-r11",
      source: "nestor",
      target: "pisistratus",
      label: "老王与陪行之子",
      type: "family",
      description:
        "涅斯托尔让儿子陪同客人前往斯巴达，返程时儿子又帮助客人尽快登船。",
      chapterIds: ["odyssey-03", "odyssey-15"],
    },
    {
      id: "odyssey-r12",
      source: "poseidon",
      target: "polyphemus",
      label: "父神回应儿子的诅咒",
      type: "family",
      description: "波吕斐摩斯被刺瞎后向父亲祈求报复，解释了海神对归人的敌意。",
      chapterIds: ["odyssey-01", "odyssey-09"],
    },
    {
      id: "odyssey-r13",
      source: "eupeithes",
      target: "antinous",
      label: "丧子引起的新血仇",
      type: "family",
      description: "安提诺俄斯死后，父亲在公民会议号召报复，而不是与归人和解。",
      chapterIds: ["odyssey-24"],
    },
    {
      id: "odyssey-r14",
      source: "athena",
      target: "odysseus",
      label: "谋略的保护者",
      type: "mentor",
      description:
        "女神援助海难求生、遮蔽身份、策划归乡并帮助战斗，但也让英雄自己经受考验。",
      chapterIds: [
        "odyssey-05",
        "odyssey-07",
        "odyssey-13",
        "odyssey-16",
        "odyssey-19",
        "odyssey-22",
        "odyssey-24",
      ],
    },
    {
      id: "odyssey-r15",
      source: "athena",
      target: "telemachus",
      label: "推动少年成长",
      type: "mentor",
      description:
        "从门忒斯的劝告到门托耳式的陪行，再到安排避开伏兵，女神不断推动少年行动。",
      chapterIds: [
        "odyssey-01",
        "odyssey-02",
        "odyssey-03",
        "odyssey-15",
        "odyssey-16",
      ],
    },
    {
      id: "odyssey-r16",
      source: "mentor",
      target: "telemachus",
      label: "老友在会议上声援",
      type: "ally",
      description:
        "真正的门托耳责备民众放任求婚人；本边不把雅典娜乔装后的航行归给他。",
      chapterIds: ["odyssey-02"],
    },
    {
      id: "odyssey-r17",
      source: "zeus",
      target: "athena",
      label: "议归与止战的协同",
      type: "ally",
      description:
        "雅典娜提出援助请求，宙斯许可放人；结尾二神共同决定终止循环复仇。",
      chapterIds: ["odyssey-01", "odyssey-05", "odyssey-24"],
    },
    {
      id: "odyssey-r18",
      source: "poseidon",
      target: "odysseus",
      label: "海神的阻挠",
      type: "rival",
      description:
        "海神追究刺瞎其子的行为，掀起风暴并惩罚帮助奥德修斯归家的船。",
      chapterIds: ["odyssey-01", "odyssey-05", "odyssey-09", "odyssey-13"],
    },
    {
      id: "odyssey-r19",
      source: "polyphemus",
      target: "odysseus",
      label: "食人者与无人之计",
      type: "rival",
      description:
        "洞穴囚禁以刺眼和羊腹逃生结束，英雄公开姓名又让个人冲突升级为神罚。",
      chapterIds: ["odyssey-09"],
    },
    {
      id: "odyssey-r20",
      source: "calypso",
      target: "odysseus",
      label: "留客与归乡意愿的冲突",
      type: "rival",
      description:
        "女神既救助过海难者又长期不愿放他离开，最后奉命供给返航；不是单一的恩人或敌人。",
      chapterIds: ["odyssey-05", "odyssey-07", "odyssey-12"],
    },
    {
      id: "odyssey-r21",
      source: "hermes",
      target: "odysseus",
      label: "解药与应对指引",
      type: "ally",
      description:
        "在前往喀耳刻屋子的途中赠予摩吕，并教他抵御法术、要求无害誓言。",
      chapterIds: ["odyssey-10"],
    },
    {
      id: "odyssey-r22",
      source: "ino",
      target: "odysseus",
      label: "借出护身头巾",
      type: "ally",
      description: "海难中借出神物，让漂泊者弃筏求生，登岸后收回头巾。",
      chapterIds: ["odyssey-05"],
    },
    {
      id: "odyssey-r23",
      source: "aeolus",
      target: "odysseus",
      label: "援风之后拒绝再助",
      type: "ally",
      description:
        "首次接待赠风袋；船员毁掉机会后，掌风者认定其遭神弃绝，终止援助。",
      chapterIds: ["odyssey-10"],
    },
    {
      id: "odyssey-r24",
      source: "circe",
      target: "odysseus",
      label: "从设障到指路",
      type: "ally",
      description:
        "变猪法术被抵御后转为接待者，放还伙伴并提供招魂和后续航路的关键知识。",
      chapterIds: ["odyssey-10", "odyssey-12"],
    },
    {
      id: "odyssey-r25",
      source: "tiresias",
      target: "odysseus",
      label: "预言约束归途",
      type: "mentor",
      description:
        "通过祭血交付圣牛禁令和未来祭海神的任务，英雄归家后仍向妻子说明未完义务。",
      chapterIds: ["odyssey-11", "odyssey-23"],
    },
    {
      id: "odyssey-r26",
      source: "odysseus",
      target: "eurylochus",
      label: "领袖与质疑他的副手",
      type: "faction",
      description:
        "同属船队，欧律洛科斯既报信救人，也因恐惧和饥饿推动违令，体现内部裂隙。",
      chapterIds: ["odyssey-10", "odyssey-12"],
    },
    {
      id: "odyssey-r27",
      source: "odysseus",
      target: "elpenor",
      label: "为伙伴履行葬礼",
      type: "ally",
      description:
        "伙伴意外跌死后，奥德修斯接受亡魂请托，回艾艾埃安葬并在墓上立桨。",
      chapterIds: ["odyssey-10", "odyssey-11", "odyssey-12"],
    },
    {
      id: "odyssey-r28",
      source: "helios",
      target: "zeus",
      label: "控诉与雷罚",
      type: "ally",
      description: "太阳神要求惩罚杀食圣牛者，宙斯答应并在船离岛后降雷毁船。",
      chapterIds: ["odyssey-12"],
    },
    {
      id: "odyssey-r29",
      source: "alcinous",
      target: "odysseus",
      label: "赠礼护送的宾主",
      type: "ally",
      description:
        "国王给予食宿、询问身世并兑现护送承诺，是当下海上归途的最后援手。",
      chapterIds: [
        "odyssey-07",
        "odyssey-08",
        "odyssey-09",
        "odyssey-11",
        "odyssey-13",
      ],
    },
    {
      id: "odyssey-r30",
      source: "arete",
      target: "odysseus",
      label: "王后的审问与庇护",
      type: "ally",
      description: "她接受抱膝求援，从衣物核问身世，并推动进一步赠礼款待。",
      chapterIds: ["odyssey-07", "odyssey-11", "odyssey-13"],
    },
    {
      id: "odyssey-r31",
      source: "nausicaa",
      target: "odysseus",
      label: "救助与感激",
      type: "ally",
      description:
        "公主帮助海难者恢复衣食和社会身份；来客承诺记住救命之恩，未与她缔结婚姻。",
      chapterIds: ["odyssey-06", "odyssey-07", "odyssey-08"],
    },
    {
      id: "odyssey-r32",
      source: "demodocus",
      target: "odysseus",
      label: "歌声揭动隐藏的经历",
      type: "ally",
      description:
        "客人尊重歌者的技艺，点唱木马故事；歌曲触动眼泪，使匿名接待转向身世叙述。",
      chapterIds: ["odyssey-08"],
    },
    {
      id: "odyssey-r33",
      source: "euryalus",
      target: "odysseus",
      label: "竞技争执与赔礼",
      type: "rival",
      description: "欧律阿罗斯的轻蔑引发掷饼挑战，随后用宝剑与道歉修复宾礼。",
      chapterIds: ["odyssey-08"],
    },
    {
      id: "odyssey-r34",
      source: "nestor",
      target: "telemachus",
      label: "老王引导年轻访客",
      type: "mentor",
      description: "通过祭宴、战后回忆与车马安排，帮助少年学习问讯和待人。",
      chapterIds: ["odyssey-03"],
    },
    {
      id: "odyssey-r35",
      source: "pisistratus",
      target: "telemachus",
      label: "并车往返的旅伴",
      type: "ally",
      description: "陪伴寻父者前往斯巴达，又在返程帮助他避开不必要的停留。",
      chapterIds: ["odyssey-03", "odyssey-04", "odyssey-15"],
    },
    {
      id: "odyssey-r36",
      source: "menelaus",
      target: "telemachus",
      label: "提供生还消息",
      type: "ally",
      description:
        "转述普罗透斯关于奥德修斯被困的消息，给少年礼物并准许尽快返航。",
      chapterIds: ["odyssey-04", "odyssey-15"],
    },
    {
      id: "odyssey-r37",
      source: "menelaus",
      target: "proteus",
      label: "制伏变形者求问",
      type: "rival",
      description: "墨涅拉俄斯在转述中抓住海中老人，抵住变形以求得返航知识。",
      chapterIds: ["odyssey-04"],
    },
    {
      id: "odyssey-r38",
      source: "theoclymenus",
      target: "telemachus",
      label: "庇护逃客",
      type: "ally",
      description: "少年允许预言者登船避难，并在伊塔卡为其安排接待。",
      chapterIds: ["odyssey-15", "odyssey-17"],
    },
    {
      id: "odyssey-r39",
      source: "eurycleia",
      target: "telemachus",
      label: "乳母暗助出航",
      type: "ally",
      description:
        "从日常照料到保守备粮出海的秘密，老乳母支持少年离开求婚人的控制。",
      chapterIds: ["odyssey-01", "odyssey-02"],
    },
    {
      id: "odyssey-r40",
      source: "eurycleia",
      target: "odysseus",
      label: "伤疤认主并保密",
      type: "ally",
      description:
        "由幼年旧伤认出主人，被要求不惊动王后；随后协助封门并报告家仆状况。",
      chapterIds: ["odyssey-19", "odyssey-21", "odyssey-22", "odyssey-23"],
    },
    {
      id: "odyssey-r41",
      source: "eumaeus",
      target: "odysseus",
      label: "不知情时仍然忠诚",
      type: "ally",
      description: "先把主人当陌生人款待，直到弓试前才相认，此后共同作战。",
      chapterIds: [
        "odyssey-14",
        "odyssey-15",
        "odyssey-17",
        "odyssey-21",
        "odyssey-22",
      ],
    },
    {
      id: "odyssey-r42",
      source: "philoetius",
      target: "odysseus",
      label: "牧牛人守门参战",
      type: "ally",
      description: "善待乞者而通过试探，认主后锁外门并与猪倌一起截住送械叛仆。",
      chapterIds: ["odyssey-20", "odyssey-21", "odyssey-22"],
    },
    {
      id: "odyssey-r43",
      source: "argos",
      target: "odysseus",
      label: "老犬无言认主",
      type: "ally",
      description: "容貌伪装未能阻止老犬辨认，宫门一瞬成为它最后的生命活动。",
      chapterIds: ["odyssey-17"],
    },
    {
      id: "odyssey-r44",
      source: "antinous",
      target: "telemachus",
      label: "谋杀继承人",
      type: "rival",
      description: "由阻挠家主权力升级为海峡伏击，又在少年安全归来后谋划杀害。",
      chapterIds: ["odyssey-01", "odyssey-02", "odyssey-04", "odyssey-16"],
    },
    {
      id: "odyssey-r45",
      source: "antinous",
      target: "odysseus",
      label: "辱客与首个报复目标",
      type: "rival",
      description: "不知乞者真实身份而掷凳伤人，最后饮酒时被归人首先射杀。",
      chapterIds: ["odyssey-17", "odyssey-21", "odyssey-22"],
    },
    {
      id: "odyssey-r46",
      source: "eurymachus",
      target: "odysseus",
      label: "侮辱、求和与冲锋",
      type: "rival",
      description:
        "先在宴席辱骂掷凳，败局显现时求赔偿，遭拒后攻击归人并被射死。",
      chapterIds: ["odyssey-18", "odyssey-21", "odyssey-22"],
    },
    {
      id: "odyssey-r47",
      source: "melantho",
      target: "eurymachus",
      label: "同党与私情",
      type: "faction",
      description: "两人的私情及对乞者相继的羞辱体现求婚势力在家仆中的联系。",
      chapterIds: ["odyssey-18"],
    },
    {
      id: "odyssey-r48",
      source: "melanthius",
      target: "odysseus",
      label: "叛仆与主人",
      type: "rival",
      description: "先踢辱归人，再从库房向求婚人输送军械，遭擒后受到酷刑。",
      chapterIds: ["odyssey-17", "odyssey-20", "odyssey-22"],
    },
    {
      id: "odyssey-r49",
      source: "irus",
      target: "odysseus",
      label: "讨食地盘之争",
      type: "rival",
      description:
        "伊罗斯试图驱逐新乞者，求婚人鼓动拳斗，他被奥德修斯控制力道击倒。",
      chapterIds: ["odyssey-18"],
    },
    {
      id: "odyssey-r50",
      source: "amphinomus",
      target: "odysseus",
      label: "没有听从的撤离警告",
      type: "rival",
      description:
        "较有礼的求婚人接受归人劝告却未真正离开，最后仍向他冲来并被其子杀死。",
      chapterIds: ["odyssey-18", "odyssey-22"],
    },
    {
      id: "odyssey-r51",
      source: "ajax",
      target: "odysseus",
      label: "亡灵仍怨铠甲之争",
      type: "rival",
      description: "旧日竞争延续到死后，埃阿斯不回答对方的解释与劝解。",
      chapterIds: ["odyssey-11"],
    },
    {
      id: "odyssey-r52",
      source: "agamemnon",
      target: "odysseus",
      label: "失败归乡的警告",
      type: "ally",
      description: "亡王回顾自己在家中遭害的经历，警告旧战友防备亲近者的背叛。",
      chapterIds: ["odyssey-11"],
    },
    {
      id: "odyssey-r53",
      source: "telemachus",
      target: "phemius",
      label: "为受迫歌者求情",
      type: "ally",
      description:
        "少年说明歌者不应与求婚人同死，帮助奥德修斯区分被迫服务与主动同谋。",
      chapterIds: ["odyssey-22"],
    },
    {
      id: "odyssey-r54",
      source: "telemachus",
      target: "medon",
      label: "保存传令官性命",
      type: "ally",
      description: "忒勒马科斯记得传令官对自己的照顾，在杀场为其求情。",
      chapterIds: ["odyssey-22"],
    },
    {
      id: "odyssey-r55",
      source: "laertes",
      target: "eupeithes",
      label: "最后战斗中的敌手",
      type: "rival",
      description:
        "丧子的复仇父亲来到农庄，被刚认回儿子的老父投矛杀死，随后神明强制止战。",
      chapterIds: ["odyssey-24"],
    },
  ],
  locations: [
    {
      id: "olympus",
      name: "奥林波斯神庭",
      region: "诸神议事层",
      description:
        "诸神讨论归乡与人间惩罚的空间。此节点表现叙事层级，不是奥德修斯航行到访的山峰。",
      x: 50,
      y: 7,
      kind: "mountain",
    },
    {
      id: "ithaca-palace",
      name: "伊塔卡王宫",
      region: "伊塔卡返乡主线",
      description:
        "求婚人的宴席、王后的居室、库房与门廊共同构成夺回家园的主要场景；庭院和宫门也纳入此索引。",
      x: 79,
      y: 45,
      kind: "city",
    },
    {
      id: "ithaca-harbor",
      name: "伊塔卡港城与会场",
      region: "伊塔卡返乡主线",
      description:
        "统摄公民会议、忒勒马科斯出返航和民众集结的城港节点，不将古代会场或少年登陆点定位到同一个考古坐标。",
      x: 71,
      y: 46,
      kind: "city",
    },
    {
      id: "pylos",
      name: "皮洛斯",
      region: "忒勒马科斯寻父线",
      description:
        "涅斯托尔主持海边祭礼和款待少年之地，也是返航时预言者登船的地点。示意位置不替代真实地理。",
      x: 70,
      y: 67,
      kind: "city",
    },
    {
      id: "pherae",
      name: "斐赖",
      region: "忒勒马科斯寻父线",
      description:
        "皮洛斯与斯巴达之间陆行时的住宿点，少年与庇西斯特拉托斯在往返途中受主人接待。",
      x: 77,
      y: 71,
      kind: "city",
    },
    {
      id: "sparta",
      name: "斯巴达",
      region: "忒勒马科斯寻父线",
      description:
        "墨涅拉俄斯与海伦的宫廷所在。奥德修斯的消息在这里被转述，但奥德修斯本人不在当下到访。",
      x: 87,
      y: 77,
      kind: "city",
    },
    {
      id: "troy",
      name: "特洛伊",
      region: "战后回忆与歌唱",
      description:
        "战争、船队分裂和木马故事的场景。第三、四卷以旧战友转述出现，第八卷以歌声出现，不是本诗当下征战地点。",
      x: 90,
      y: 15,
      kind: "city",
    },
    {
      id: "pharos",
      name: "法罗斯",
      region: "墨涅拉俄斯转述",
      description:
        "埃及近海制伏普罗透斯的往事发生地，只属于墨涅拉俄斯的归航回忆，不是寻父少年的站点。",
      x: 91,
      y: 91,
      kind: "island",
    },
    {
      id: "asteris",
      name: "阿斯忒里斯",
      region: "伊塔卡周边伏击线",
      description:
        "正文写作伊塔卡与萨摩斯之间的伏击小岛；古名和现代岛屿的对应有争论，此处仅示意伏兵位置。",
      x: 64,
      y: 50,
      kind: "island",
    },
    {
      id: "ogygia",
      name: "奥吉吉亚",
      region: "当下离岛／倒叙终点",
      description:
        "卡吕普索居住的神话岛屿。第五卷从这里启航，第十二卷倒叙才讲到早先如何漂抵；两次出现不是两次新到访。",
      x: 10,
      y: 44,
      kind: "island",
    },
    {
      id: "scheria-coast",
      name: "斯刻里亚海岸",
      region: "费阿刻斯接待线",
      description:
        "统摄近海风暴、登陆河口、公主洗衣海岸及护送船归来化石的海域；不同场景并非同一个精确岸点。",
      x: 32,
      y: 42,
      kind: "wilderness",
    },
    {
      id: "athena-grove",
      name: "斯刻里亚的雅典娜树林",
      region: "费阿刻斯接待线",
      description:
        "瑙西卡娅让来客入城前停候的树林，与王宫分开，用以保留第六、七卷的行动边界。",
      x: 38,
      y: 46,
      kind: "wilderness",
    },
    {
      id: "scheria-palace",
      name: "斯刻里亚王宫与城中",
      region: "费阿刻斯接待线",
      description:
        "阿尔基诺俄斯与阿瑞忒的宫廷及附近竞技空间。第九至十二卷的讲述现场一直在此，回忆中的远方不等于当前移动。",
      x: 41,
      y: 36,
      kind: "city",
    },
    {
      id: "ismarus",
      name: "伊斯马罗斯",
      region: "奥德修斯倒叙航程",
      description:
        "基科涅斯人的城邑，船队劫掠后因滞留遭援军反击。属于第九卷回述的战后第一段损失。",
      x: 84,
      y: 22,
      kind: "city",
    },
    {
      id: "lotus-land",
      name: "食莲者之地",
      region: "奥德修斯倒叙航程（神话空间）",
      description:
        "莲食使来客丧失归乡意愿的国度。正文重点是遗忘而非精确地形，不强行认定某个现代岛屿。",
      x: 73,
      y: 88,
      kind: "realm",
    },
    {
      id: "cyclops-land",
      name: "独眼巨人之地",
      region: "奥德修斯倒叙航程（神话空间）",
      description:
        "统摄近旁放牧野羊的小岛与波吕斐摩斯洞穴所在地区；不直接等同西西里岛或特定洞窟。",
      x: 60,
      y: 85,
      kind: "realm",
    },
    {
      id: "aeolia",
      name: "艾俄利亚",
      region: "奥德修斯倒叙航程（神话空间）",
      description:
        "艾俄洛斯掌风的岛，船队受助后又被风袋中的风吹回。坐标不采纳任何现代群岛比附。",
      x: 43,
      y: 83,
      kind: "island",
    },
    {
      id: "laestrygonia",
      name: "拉伊斯特律戈涅斯港",
      region: "奥德修斯倒叙航程（神话空间）",
      description:
        "食人巨人的城港，狭窄入口和高崖使泊入的船只遭集中毁灭，奥德修斯的港外船幸免。",
      x: 28,
      y: 76,
      kind: "city",
    },
    {
      id: "aea",
      name: "艾艾埃",
      region: "奥德修斯倒叙航程（神话空间）",
      description:
        "喀耳刻的岛，变猪、解咒、停留与启程在此展开；问冥后又回来安葬厄尔佩诺耳并获取海路警告。",
      x: 18,
      y: 65,
      kind: "island",
    },
    {
      id: "oceanus-dead",
      name: "大洋边缘与亡者之境",
      region: "幽冥叙事层",
      description:
        "第十一卷以祭血沟召见亡灵，第二十四卷由赫尔墨斯引魂。合并为超自然场景索引，不宣称两个入口或幽冥地形可以精确重合。",
      x: 9,
      y: 90,
      kind: "realm",
    },
    {
      id: "sirens",
      name: "塞壬歌声之地",
      region: "奥德修斯倒叙航程（神话空间）",
      description:
        "船员封耳、英雄绑桅听歌的海边草地一带，以神话空间示意，不指定现代岸段。",
      x: 32,
      y: 61,
      kind: "island",
    },
    {
      id: "strait",
      name: "斯库拉与卡律布狄斯险境",
      region: "奥德修斯倒叙航程（神话空间）",
      description:
        "一边是掠人的怪物，一边是吞吐海水的漩涡；船队初过与毁船后独自再过均在第十二卷回述，不将其直接认定为现代海峡。",
      x: 45,
      y: 61,
      kind: "wilderness",
    },
    {
      id: "thrinacia",
      name: "特里纳基亚",
      region: "奥德修斯倒叙航程（神话空间）",
      description:
        "赫利俄斯的圣牛与羊群所在岛屿。风困、饥饿和杀食圣牛引发灭船惩罚，现实定位不作定论。",
      x: 55,
      y: 73,
      kind: "island",
    },
    {
      id: "phorcys",
      name: "福耳库斯港",
      region: "伊塔卡返乡主线",
      description:
        "费阿刻斯水手放下熟睡归人与财物的海湾，邻近橄榄树和宁芙洞穴；与少年城港路线分列。",
      x: 72,
      y: 34,
      kind: "wilderness",
    },
    {
      id: "nymph-cave",
      name: "宁芙洞穴",
      region: "伊塔卡返乡主线",
      description:
        "雅典娜与奥德修斯藏起费阿刻斯礼物的洞穴，正文描述凡人与神明各有入口；此节点保留其神话性质。",
      x: 76,
      y: 30,
      kind: "wilderness",
    },
    {
      id: "swinehut",
      name: "欧迈俄斯的猪倌棚屋",
      region: "伊塔卡返乡主线",
      description:
        "王宫之外的庇护所，真假身世交谈、少年报平安和秘密父子相认都在这一乡间庄地展开。",
      x: 83,
      y: 28,
      kind: "wilderness",
    },
    {
      id: "syra",
      name: "叙里埃",
      region: "欧迈俄斯童年回忆",
      description:
        "猪倌回忆中原本安宁、自己身为王子时的故乡岛屿；不等于现代叙利亚，不属于奥德修斯真实航程。",
      x: 22,
      y: 15,
      kind: "island",
    },
    {
      id: "ithaca-road",
      name: "入城山路与泉边",
      region: "伊塔卡返乡主线",
      description:
        "猪倌带乞者入城的路段，墨兰提俄斯在泉边踢辱来客；与王宫内的侮辱区分。",
      x: 82,
      y: 37,
      kind: "wilderness",
    },
    {
      id: "parnassus",
      name: "帕尔纳索斯",
      region: "伤疤与少年回忆",
      description:
        "奥德修斯随外祖父家人猎野猪而受伤的山地，只在第十九卷回忆中展开，不是返乡后的再次旅行。",
      x: 93,
      y: 53,
      kind: "mountain",
    },
    {
      id: "laertes-farm",
      name: "拉厄尔忒斯的果园农庄",
      region: "伊塔卡返乡主线",
      description:
        "老父退居劳作之地，果树记忆证明儿子身份；亲属复仇的最后冲突与神明止战也在附近发生。",
      x: 91,
      y: 34,
      kind: "wilderness",
    },
  ],
};
