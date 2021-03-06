console.log("script.js has been loaded.")

var questions = [];
var basic_questions = [
    "勇敢な闘士",
    "向こう見ずな拳闘士",
    "恐れ知らずの剣闘士",
    "華麗なる剣士",
    "老獪なる剣聖",
    "仁義ある侍",
    "風変わりな浪人",
    "モブ兵士",
    "新人歩兵",
    "身軽な軽装歩兵",
    "鈍重な重装歩兵",
    "忠義深き近衛兵",
    "誇り高き騎士",
    "戦場をかける軽騎士",
    "屈強な重騎士",
    "闇を知る暗黒騎士",
    "空を駆ける竜騎士",
    "天誅を下す聖騎士",
    "人望厚い騎士団長",
    "明朗な戦士",
    "百戦錬磨の女戦士",
    "殺したがりの狂戦士",
    "意外と素早い重戦士",
    "未開の地域の蛮族",
    "無敗の武道家",
    "裏切りそうな傭兵",
    "フットワークの軽い槍使い",
    "エルフの弓使い",
    "魔弾の射手",
    "必中の狙撃手",
    "異民族の弓騎兵",
    "深き森の狩人",
    "名家の魔法戦士",
    "百の顔をもつ暗殺者",
    "妨げられない盗賊",
    "洞窟ぐらしの山賊",
    "挑戦状を送る怪盗",
    "街のごろつき",
    "二重スパイ",
    "隠れ里の忍者",
    "術の使い手くノ一",
    "信心深き寺僧",
    "敬虔なる聖職者",
    "究極魔法使いの教皇",
    "意地悪な枢機卿",
    "信頼される司教",
    "メガネの神父",
    "村の牧師",
    "治療の僧侶",
    "自然と調和する呪術師",
    "神に見初められし巫女",
    "終末の預言者",
    "お姉さんの魔女",
    "お爺さんの魔法使い",
    "片眼鏡の黒魔術師",
    "プロの祓魔師",
    "現代に生きる陰陽師",
    "偏屈者の占い師",
    "泣かない道化師",
    "新米召喚士",
    "半裸のシャーマン",
    "山小屋に住むネクロマンサー",
    "こだわりの強い人形遣い",
    "自然と心通わせるビーストテイマー",
    "嫌味な貴族",
    "公正なる領主",
    "世間知らずの王女",
    "200歳になる王",
    "最も美しい女王",
    "統一を果たした将軍",
    "太った商人",
    "艶やかな踊り子",
    "弱虫の吟遊詩人",
    "理を知る錬金術師",
    "街の薬師",
    "伝説の刀鍛冶",
    "平和に暮らす農民",
    "世界一のシェフ",
    "古代の生き残りの賢者",
    "選ばれし勇者",
    "恐ろしき魔王",
    "秘境に挑む冒険者",
    "悪くないスライム",
    "残虐なハーピィ",
    "鉱山都市のドワーフ",
    "高貴なる吸血鬼",
    "はじまりの街",
    "商業都市",
    "大陸一の港",
    "年中雪の降る村",
    "火山の麓の工業都市",
    "空に浮かぶ古代都市",
    "月の未来都市",
    "ジャングル奥地の村",
    "悲劇に襲われた街",
    "若者に溢れた科学都市",
    "王都",
    "裏山の洞窟",
    "呪われた神殿",
    "蒼水晶の洞窟",
    "ギルドの集まる中心地",
    "世界の果てに佇む塔",
    "夢の通り道",
    "火の基本魔法",
    "奔流する水の魔法",
    "かまいたちの風の魔法",
    "神の雷",
    "突き上げる石の魔法",
    "封印された重力魔法",
    "時を加速する魔法",
    "味方全体回復魔法",
    "確率蘇生魔法",
    "伝説級の封印魔法",
    "封印されし聖剣",
    "闇の宝玉",
    "世界中の富裕層が求める宝物",
    "宇宙のアイドル",
    "人間を信用していない爬虫類族"
];
var toho_questions = ["えいえんのみこ",
"はくれいじんじゃのみこさん",
"らくえんのすてきなみこ",
"らくえんのみこ",
"かいせいのみこ",
"そらをとぶふしぎなみこ",
"ごよくのみこ",
"やおよろずのだいべんしゃ",
"そらとぶふしぎなみこ",
"いじげんのきんゆうかんわ",
"しんぴけっかいのみこ",
"かいきをおえいへんをおわらせるみこ",
"はるのひにのんきなみこ",
"じゆうほんぽうでむけいかくなみこ",
"はくれいじんじゃみこ",
"じゆうほんぽうなにんげん",
"さよしぐれのみこ",
"らくえんのみこたんてい",
"おみきのしゅごしゃ",
"とうようのせいようまじゅつし",
"きみょうなまほうつかい",
"ふつうのくろまじゅつしょうじょ",
"ふつうのくろまじゅつし",
"ふつうのまほうつかい",
"きりさめのまほうつかい",
"ふつうのまほうつかいさん",
"とおりすがりのまほうつかい",
"ごうよくのまほうつかい",
"にんげんだいひょうのまほうつかい",
"にんげんらしいまほうつかい",
"きょうふがっこうのまほうつかい",
"ごっかんにふるえるまほうつかい",
"こうかりょくでほしずきなまほうつかい",
"だいたんしょうしんなにんげん",
"きわめてふつうのまじしゃん",
"しごくふつうのまほうつかい",
"もりのまほうたんてい",
"まほうのもりのみつぞうしゅ",
"しきのふらわーますたー",
"なないろのにんぎょうつかい",
"みためだけにぎやかなようかい",
"ひょうのにんぎょうつかい",
"よいやみのようかい",
"くらやみにひそむようかい",
"こじょうのひょうせい",
"こおりのようかい",
"こおりのちいさなようせい",
"ふしぜんなれいき",
"こおりのようせい",
"みずうみのひょうせい",
"とけないえんてんかのひょうせい",
"ほあれんしゃおにゃん",
"いろあざやかににじいろなもんばん",
"こうまかんのばんにん",
"ちしきとひかげのしょうじょ",
"うごかないだいとしょかん",
"えたいのしれないまほうのもと",
"はなぐもりのまじょ",
"うごけないだいとしょかんのまじょ",
"こうまかんのめいど",
"かんぜんでしょうしゃなじゅうしゃ",
"かんぜんでしょうしゃなめいど",
"きけんなてじなし",
"さよあらしのめいど",
"あかいあくまのめいど",
"あくまのめいど",
"でんこうせっかのめいど",
"きゅうけつきのめいど",
"こうまかんのきっちんどりんかー",
"えいえんのあかいおさなきつき",
"えいえんにあかいおさなきつき",
"あかいあくま",
"あかいろのせかい",
"のうむのきゅうけつき",
"あかいろののくたーなるでびる",
"こうまかんのきゅうけつき",
"あくまのいもうと",
"おそろしいはどう",
"きゅうけつきのはめつてきないもうと",
"ふゆのわすれもの",
"きょくしょてきなだいかんぱ",
"ふゆのようかい",
"きょうちょうのくろねこ",
"すきまようかいのしきのしき",
"めにもとまらないばけねこ",
"はるをはこぶようせい",
"そうれいヴぁいおりすと",
"そうれいとらんぺったー",
"そうれいきーぼでぃすと",
"ゆうじんのにわし",
"はんぶんまぼろしのにわし",
"せいめいのにとうりゅう",
"はんじんはんれい",
"はんじんはんれいのはんにんまえ",
"きりすてごめん",
"そうてんのにわし",
"しによくのはんれい",
"はんじんはんれいのにわし",
"はんじんはんれいのにとうけんし",
"ゆうめいろうかくのぼうれいしょうじょ",
"てんいむほうのぼうれい",
"かしょのぼうれい",
"ゆうがなしんれいしゃしん",
"ぼうれいのひめぎみ",
"ゆきのぼうれい",
"さまよわないぼうれい",
"めいかいのぼうれい",
"すきまようかいのしき",
"めずらしいどうぶつ",
"さくしのきゅうび",
"かみかくしのしゅはん",
"わりとこまったちゃん",
"げんそうのきょうかい",
"さかいめにひそむようかい",
"きょうかいのようかい",
"きみのわるいほほえみ",
"げんそうのきつねのよめいり",
"しんしゅつきぼつでうらおもてのあるようかい",
"しんしゅつきぼつのようかい",
"げんそうきょうのげーときーぱー",
"あつまるゆめまぼろしそしてひゃっきやこう",
"たいこのじだい",
"ちいさなひゃっきやこう",
"そうのひゃっきやこう",
"ふきほんぽうのこごう",
"ふきほんぽうのおに",
"ひょうたんまくらのしゅてんどうじ",
"やみにうごめくひかりのむし",
"ひかるむしのたいぐん",
"よすずめのかい",
"よすずめのようかい",
"うたうよすずめ",
"ちしきとれきしのはんじゅう",
"れきしぐい",
"かたくるしいれきしか",
"れきしぐいのはんじゅう",
"はんじゅうのれきしか",
"ちじょうのうさぎ",
"こううんのしろうさぎ",
"とびはねるうさぎのたいぐん",
"こうげんれいしょくのしろうさぎ",
"きょうきのつきのうさぎ",
"しかいをゆさぶるようかいうさぎ",
"きょうきのあかいひとみ",
"せいらんのせきがん",
"ちじょうのげっと",
"きんしきょうきのくねくねうさぎ",
"げつめんしこうではちょうのあわないようかいうさぎ",
"きょうきのせきがん",
"ちじょうのむーんらびっと",
"つきのずのう",
"まちのくすりやさん",
"ほうらいのくすりやさん",
"えいえんとしゅゆのざいにん",
"おうびょうよやくのつきのたみ",
"ちじょうにかくれすむつきのひめ",
"にんげんらしくないおひめさま",
"えいえんのおひめさま",
"ほうらいのひとのかたち",
"しょうししないにんげん",
"げきねつにんげんいんふぇるの",
"じぼうじきでふじみのにんげん",
"くれないのじけいたい",
"でんとうのげんそうぶんや",
"さとにもっともちかいてんぐ",
"ふううのからす",
"ねつぞうしんぶんきしゃ",
"もみじをちらすてんぐ",
"からすてんぐのじゃーなりすと",
"がでんいんすいのてんぐ",
"ちいさなすいーとぽいずん",
"からだにやさしくないにんぎょう",
"さんずのみずさきあんないにん",
"えどっこかたぎなしにがみ",
"かわぎりのみずさきあんないにん",
"たくらくしつろのしにがみ",
"らくえんのさいこうさいばんちょう",
"じごくのさいこうさいばんちょう",
"くちうるさいありがたいおはなし",
"さびしさとしゅうえんのしょうちょう",
"せつなくなるあかいあめ",
"ゆたかさとみのりのしょうちょう",
"あまいにおいのするかみさま",
"ひめがみながしびな",
"えんがちょますたー",
"ちょうようかいだんとう",
"すいせいのぎし",
"かわのべんりやさん",
"たいこさんじょうきのかっぱ",
"すいへいしこうのかっぱ",
"みずのなかのえんじにあ",
"しょうばいじょうずでしゅぜんどのかっぱ",
"したっぱしょうかいてんぐ",
"やまのてれぐのしす",
"まつられるかぜのにんげん",
"やまのしんじんかみさま",
"げんだいっこのあらひとがみ",
"がよくのみこ",
"やまにすむきせきのあらひとがみ",
"ひそうせんぱくなにんげん",
"かぜとみずうみのてうるぎすと",
"やまさかとみずうみのごんげ",
"さかずきのかみさま",
"どくりつふとうのかみさま",
"どちゃくしんのちょうてん",
"りょうせいるいのかみさま",
"めいそんじつぼうのかみさま",
"うつくしきひのころも",
"そらとぶれああいてむ",
"ひそうひひそうてんのむすめ",
"うちょうてんのおじょうさん",
"ひそうてきでうきよばなれしたてんにん",
"だんいほうしょくのてんにん",
"おそるべきいどのかい",
"あきのひのひとぐい",
"くらいどうくつのあかるいあみ",
"しのびよるきょうふのき",
"ちかくのしたのしっとしん",
"みどりいろのめをしたかいぶつ",
"かたられるかいりょくらんしん",
"はめつてきなこんごうりき",
"おんりょうもおそれひるむしょうじょ",
"みんなのこころのやみ",
"こえいしょうぜんのようかい",
"ちのそこのあんらくいすたんてい",
"じごくのりんか",
"したいつあーこんだくたー",
"はいしんきぎのしびょう",
"きゅうきょくたんていのじょしゅねこ",
"あつかいなやむかみのひ",
"ちていのたいよう",
"とじたこいのひとみ",
"なにもかんがえていないもの",
"くうそうじょうのじんかくほじしゃ",
"ほんこわあなたのうしろにいるよ",
"いとせずにこころをとざしたさとり",
"だうざーのちいさなたいしょう",
"ひきんなだうざー",
"ゆかいなわすれがさ",
"ふびんなふほうとうきぶつ",
"おこまりのわすれもの",
"きょうてんどうちのからかさおばけ",
"まもりまもられしたいりん",
"おおぞらにさくはなとおやじ",
"あっとうするようかいぎょうじゃ",
"きょうがくちょうしんのにゅうどうつかい",
"がんこできょたいかいりょくなにゅうどうつかい",
"いちれんたくしょうのようかいそうりょ",
"たいざんめいどうのだいにゅうどう",
"すいなんじこのねんばくれい",
"さんたんたるおおうなばら",
"びしゃもんてんのでし",
"ようじゅうのなりあがり",
"ふういんされただいまほうつかい",
"がんがんいくそうりょ",
"れいちょうるいをこえたあじゃり",
"ごくそくらいだーそうりょ",
"ちょうじんてきでさとりをひらくだいあじゃり",
"ようかいでらのますたーぷりーすと",
"ねんぶつまんざいのだいあじゃり",
"ようかいでらのまじゅうしょく",
"みかくにんげんそうひこうしょうじょ",
"とらだったりとりだったりするやつ",
"いにしえのようかいそのいち",
"しょうたいふめいのしょうたい",
"しょうたいふめいのあんのうんえっくす",
"いまどきのねんしゃきしゃ",
"ういういしいすぽいらーきしゃ",
"いたずらずきなひのひかり",
"かがやけるひのひかり",
"ひのひかり",
"しずかなるつきのひかり",
"つきのひかり",
"ふりそそぐほしのひかり",
"ほしのひかり",
"どっきょうするやまびこ",
"へいぼんちんぷなやまびこ",
"ちゅうじつなしたい",
"かべぬけのじゃせん",
"むりひどうなせんにん",
"かみのまつえいのぼうれい",
"こだいにほんのしかいせん",
"りゅうみゃくをつかさどるふうすいし",
"ばんちょうさらをわるしかいせん",
"ふうすいでおさらをわるしかいせん",
"しょうとくどうし",
"うちゅうをつかさどるぜんのうどうし",
"てんしえいまいのせんにん",
"かいきにしょくまんとまじん",
"ぜんのうでひとのためにうごくどうし",
"ばけだぬきじゅうへんげ",
"いつもおどろきをていきょうするばけだぬき",
"しんりゃくせようちゅうようかいだぬき",
"へんげんじざいでくえないばけだぬき",
"きんゆうぜつむのがいらいようかい",
"とらぬたぬきのでぃすがいざー",
"さどのふたついわ",
"ひょうじょうゆたかなぽーかーふぇいす",
"せんりつせよあくむののうめんおんな",
"のうめんでかんじょうてきなめんれいき",
"たんすいにすむにんぎょ",
"ろくろくびのかいき",
"ちくりんのるーがるー",
"ふるびたびわのつくもがみ",
"ふるびたことのつくもがみ",
"ぎゃくしゅうのあまのじゃく",
"こびとのまつえい",
"まゆつばみどりいろをしたこびと",
"おとぎばなしてきでおわんにのるこびと",
"かがやくはりのりりぱっと",
"むげんのぱーかっしょにすと",
"きょういねがいをきくせんにん",
"しよくせよねがいをかなえるせんにん",
"しんせんしそうでどうぶつずきなせんにん",
"かたうでゆうかくのせんにん",
"しんぴをあばけひふうくらぶしょだいかいちょう",
"しんぴしゅぎであつかいにこまるじょがくせい",
"しゃしぶんじゃくなじょしこうせい",
"あさぎいろのいーぐるらヴぃ",
"たちばないろのいーぐるらヴぃ",
"ゆめのしはいしゃ",
"ゆめをみせるようかい",
"ぜっかをもたらすめがみ",
"じごくのようせい",
"じごくのめがみ",
"きょうきなるじごくのようせい",
"かみにちかづくちょうのようせい",
"まなつのあげはちょうのようせい",
"うきよのせきをこえるやまんば",
"しんぶつにしんすいするしゅごしんじゅう",
"しんしょくじじゃくのこまいぬ",
"もりですいじゃくしたまほうじぞう",
"きけんすぎるばっくだんさーず",
"きゅうきょくのぜったいひしん",
"いふうどうどうたるしんぴ",
"さいきょうさいあくのふたごのいもうと",
"さいきょうさいあくのふたごのあね",
"そいそしょくのびんぼうがみ",
"うみとやまをつなぐつきのひめ",
"しんれいのよりつくつきのひめ",
"うごかないふるどうぐや",
"ちそくふじょくのふるどうぐや",
"ふるどうぐやのきゅりおすふぇろー",
"こうりんどうてんしゅ",
"ふるどうぐやてんしゅ",
"げんそうきょうのきおく",
"きゅうだいめのさヴぁん",
"はんどくがんのびぶろふぃりあ",
"かわらのあいどるみずこ",
"こだいぎょのこづればんにん",
"じごくせきしょのばんとうしん",
"きけつぐみくみちょう",
"はにわへいちょう",
"こりつむえんがあつらえたぞうけいしん",
"けいがぐみくみちょう",
"むげんさかばげいどんていのかんばんむすめ"
];
var letter = [];
var basic_letter = [
    "ア","イ","ウ","エ","オ",
    "カ","キ","ク","ケ","コ",
    "サ","シ","ス","セ","ソ",
    "タ","チ","ツ","テ","ト",
    "ナ","ニ","ヌ","ネ","ノ",
    "ハ","ヒ","フ","ヘ","ホ",
    "マ","ミ","ム","メ","モ",
    "ヤ","ユ","ヨ",
    "ラ","リ","ル","レ","ロ",
    "ワ","ヲ","ン",
]
var mtg_questions = [
    "黄金のたてがみの",
    "復讐の",
    "群れの統率者",
    "英雄の導師",
    "不動の",
    "不撓の",
    "勇敢な守護者",
    "暴君への敵対者",
    "賢明な助言者",
    "寛大なる者",
    "群れの力",
    "鼓舞する指導者",
    "運命を変える者",
    "炎鎖の",
    "ミノタウルスの海賊",
    "混沌の船長",
    "群れの声",
    "悪夢の織り手",
    "夢を引き裂く者",
    "悪夢の詩神",
    "恐怖を彫る者",
    "献身の聖騎士",
    "プレインズウォーカー",
    "王神",
    "欺瞞の主",
    "覚醒の龍",
    "龍神",
    "運命の手",
    "燃え立つ",
    "炬火",
    "紅蓮の達人",
    "燃え盛る炎",
    "炎呼び",
    "反逆の先導者",
    "紅蓮の俊英",
    "勇敢な紅蓮術師",
    "炎の職工",
    "新米紅蓮術師",
    "炎の侍祭",
    "目覚めた猛火",
    "炎の憤怒",
    "炎の心",
    "炎の触媒",
    "屑鉄の学者",
    "巧妙な偶像破壊者",
    "はぐれ影魔道士",
    "混沌をもたらす者",
    "街潰し",
    "ボーラスの壊乱者",
    "大判事",
    "法を築く者",
    "支配の片腕",
    "遍歴の騎士",
    "太陽の勇者",
    "太陽の宿敵",
    "不屈の英雄",
    "仮面使い",
    "ラノワールの憤激",
    "野生語りの",
    "原初の狩人",
    "情け知らずの",
    "獣の統率者",
    "頂点捕食者",
    "呪われた狩人",
    "解き放たれた者",
    "野蛮な伝令",
    "屠殺者",
    "正義の勇者",
    "歴戦の戦士",
    "ゼンディカーの同盟者",
    "試練に臨む",
    "武芸の模範",
    "黒き剣の",
    "誓いを立てた者",
    "戦場の詩人",
    "恐竜騎士",
    "光輝の勇者",
    "太陽の義士",
    "精神を刻む者",
    "記憶の熟達者",
    "思考を築く者",
    "ギルドパクトの体現者",
    "束縛なきテレパス",
    "秘密の解明者",
    "狡猾な漂流者",
    "巧妙な精神魔道士",
    "神秘を操る者",
    "秘儀の策士",
    "敬慕される炎魔道士",
    "解放された者",
    "ウルザの後継",
    "大いなる創造者",
    "謎めいた指導者",
    "幽霊暗殺者",
    "オルゾフの簒奪者",
    "死者の災厄",
    "荒ぶる波濤",
    "深海の主",
    "ビヒモスを招く者",
    "槌の",
    "ヴェールの",
    "闇の領域の",
    "反抗する屍術師",
    "最後の望み",
    "死の権威",
    "死の使い手",
    "死が触れぬ者",
    "屍術師",
    "戦慄衆の将軍",
    "死者を目覚めさせる者",
    "死の魔道士",
    "銅纏いののけ者",
    "石術師",
    "先駆ける者",
    "石の嵐",
    "卓絶の",
    "覆いを割く者",
    "古き道の",
    "世界を目覚めさせる者",
    "精霊信者の賢人",
    "ゼンディカーの代弁者",
    "生命の力",
    "自然の職工",
    "自然に使える者",
    "創造の魔道士",
    "世界を揺るがす者",
    "黒き誓約",
    "灯の再覚醒",
    "憎悪に歪む者",
    "王冠泥棒",
    "トリックスター",
    "イゼット副長",
    "嵐を呼ぶ者",
    "嵐の伝道者",
    "王家の跡継ぎ",
    "不敵な火花魔道士",
    "天智",
    "崇高な工匠",
    "試練を超えた者",
    "暴君潰し",
    "狂乱の",
    "龍語りの",
    "揺るぎない",
    "火の血脈",
    "龍魂",
    "主なき者",
    "慈悲深き",
    "イニストラードの君主",
    "真面目な訪問者",
    "死の宿敵",
    "復讐に燃えた血王",
    "傲慢な血王",
    "吸血鬼の王",
    "月の賢者",
    "実地研究者",
    "伝承の収集者",
    "時間の大魔道士",
    "ドミナリアの英雄",
    "時を曲げる者",
    "時を解す者",
    "時の支配者",
    "時を超える旅行者",
    "盾魔道士",
    "求道者",
    "ボーラスの工作員",
    "策謀家",
    "工匠の達人",
    "残酷な機械技師",
    "橋の主",
    "悪鬼の血脈",
    "無頼な扇動者",
    "精霊龍",
    "人知を超えるもの",
    "滞留者",
    "アーク弓の",
    "野獣の擁護者",
    "アーク弓のレインジャー",
    "自然の報復者",
    "怪物の代言者",
    "見えざる者",
    "秘宝探究家",
    "ゴルゴンの陰謀家",
    "ゴルガリの女王",
    "威厳あるゴルゴン",
    "群衆の威光",
    "と六番",
    "歓楽者",
    "野生造り",
    "空の踊り手",
    "天界の風"]
var yugioh_questions = [
"アーティファクト",
"アームド・ドラゴン",
"Ａ・Ｏ・Ｊアーリー・オブ・ジャスティス",
"Ａｉアイ",
"アイズ・サクリファイス",
"アクアアクトレス",
"アクアリウム",
"Ａアサルト ＢＦブラックフェザー",
"アダマシア",
"＠アットイグニスター",
"アビス",
"アポクリフォート",
"アマゾネス",
"アモルファージ",
"魅惑の女王アリュール・クィーン",
"アルカナフォース",
"アルトリウス",
"アロマ",
"暗黒界あんこくかい",
"暗黒騎士あんこくきしガイア",
"アンティーク・ギア",
"アンブラル",
"イーサルウェポン",
"Ｅ－ＨＥＲＯイービルヒーロー",
"イグナイト",
"イビルツイン",
"インヴェルズ",
"甲虫装機インゼクター",
"インフェルニティ",
"インフェルノイド",
"ウィッチクラフト",
"ＷＷウィンド・ウィッチ",
"ウォリアー",
"占うらない魔女まじょ",
"Ｕ.Ａ.ウルトラアスリート",
"ヴァイロン",
"ヴァレット",
"ヴァレル",
"ヴァンパイア",
"Ｖ・ＨＥＲＯヴィジョン・ヒーロー",
"ヴェノム",
"ヴェルズ",
"ヴェンデット",
"ヴォルカニック",
"エヴォルカイザー",
"エヴォルダー",
"エヴォルド",
"エーリアン",
"エクシーズ",
"エクシーズ・ドラゴン",
"エクゾディア",
"Ｘエックス－セイバー",
"エッジインプ",
"エルドリクシル",
"エルドリッチ",
"エルフの剣士けんし",
"エレキ",
"Ｅ・ＨＥＲＯエレメンタルヒーロー",
"エレメントセイバー",
"炎王えんおう",
"炎王獣えんおうじゅう",
"炎星えんせい",
"Ｅｍエンタメイジ",
"ＥＭエンタメイト",
"エンディミオン",
"炎舞えんぶ",
"オーパーツ",
"先史遺産オーパーツ",
"黄金郷おうごんきょう",
"おジャマ",
"オッドアイズ",
"落おとし穴あな",
"オノマト",
"オルターガイスト",
"オルフェゴール",
"花札衛カーディアン",
"ガーディアン",
"海皇かいおう",
"壊獣かいじゅう",
"外神ガイシン",
"ガエル",
"カオス",
"カオス・ソルジャー",
"ＣＸカオスエクシーズ",
"ＣＮｏ.カオスナンバーズ",
"ＣＮｏ.カオスナンバーズ３９",
"ガガガ",
"影六武衆かげろくぶしゅう",
"化合獣かごうじゅう",
"ガジェット",
"ガスタ",
"化石かせき",
"ガトムズ",
"カラクリ",
"火霊術かれいじゅつ",
"ガンドラ",
"ギアギア",
"ギアギアーノ",
"機塊きかい",
"機械天使きかいてんし",
"機皇きこう",
"機皇神きこうしん",
"機皇帝きこうてい",
"機皇兵きこうへい",
"キスキル",
"希望皇きぼうおうホープ",
"ギミック・パペット",
"ギャラクシー",
"ギャラクシーアイズ",
"ギャラクシーアイズ・タキオン・ドラゴン",
"究極宝玉神きゅうきょくほうぎょくしん",
"旧神キュウシン",
"極神きょくしん",
"極星きょくせい",
"極星獣きょくせいじゅう",
"極星天きょくせいてん",
"極星宝きょくせいほう",
"極星霊きょくせいれい",
"巨大戦艦きょだいせんかん",
"禁きんじられた",
"空牙団くうがだん",
"雲魔物クラウディアン",
"剣闘獣グラディアルビースト",
"クリアウィング",
"クリストロン",
"クリフォート",
"クリボー",
"グレイドル",
"クローラー",
"黒蠍くろさそり",
"クロノダイバー",
"ゲート・オブ・ヌメロン",
"契約書けいやくしょ",
"幻煌龍げんおうりゅう",
"幻獣げんじゅう",
"幻獣機げんじゅうき",
"幻奏げんそう",
"幻奏げんそうの音姫おとひめ",
"幻蝶げんちょうの刺客しきゃく",
"幻魔げんま",
"コアキメイル",
"剛鬼ごうき",
"ゴーストリック",
"コード・トーカー",
"コードブレイカー",
"Ｃコクーン",
"ゴゴゴ",
"古神コシン",
"Ｋｏｚｍｏコズモ",
"ゴブリン",
"蟲惑魔こわくま",
"サイバー",
"サイバー・エンジェル",
"サイバーダーク",
"サイバー・ダーク",
"サイバー・ドラゴン",
"サイバネット",
"サイバネティック",
"サイファー",
"ＰＳＹサイフレーム",
"ＰＳＹサイフレームギア",
"サイレント・ソードマン",
"サイレント・マジシャン",
"音響戦士サウンドウォリアー",
"サブテラー",
"サブテラーマリス",
"サラマングレイト",
"斬機ザンキ",
"サンダー・ドラゴン",
"ジェネクス",
"ジェネレイド",
"ジェム",
"ジェムナイト",
"紫炎シエン",
"時械神じかいしん",
"磁石じしゃくの戦士せんし",
"死しのメッセージ",
"地縛神じばくしん",
"シムルグ",
"ジャックナイツ",
"シャドール",
"ジャンク",
"銃士じゅうし",
"十二獣じゅうにしし",
"呪眼じゅがん",
"守護神官しゅごしんかん",
"ジュラック",
"召喚獣しょうかんじゅう",
"不知火しらぬい",
"Ｓｉｎシン",
"進化薬しんかやく",
"シンクロ・ドラゴン",
"シンクロン",
"人造人間じんぞうにんげん",
"森羅しんら",
"侵略しんりゃくの",
"真竜しんりゅう",
"ＳＤスーパーディフェンスロボ",
"水霊術すいれいじゅつ",
"スクラップ",
"スターヴ・ヴェノム",
"スターダスト",
"ステラナイト",
"ＳＰＹＲＡＬスパイラル",
"ＳＰＹＲＡＬスパイラル ＧＥＡＲギア",
"ＳＰＹＲＡＬスパイラル ＭＩＳＳＩＯＮミッション",
"ズババ",
"素早すばやい",
"スピードロイド",
"スフィンクス",
"スプラウト",
"スマイル",
"／スラッシュバスター",
"ＺＷゼアル・ウェポン",
"星遺物せいいぶつ",
"セイヴァー",
"聖騎士せいきし",
"セイクリッド",
"聖剣せいけん",
"聖刻せいこく",
"セイバー",
"星杯せいはい",
"精霊獣せいれいじゅう",
"聖霊獣騎せいれいじゅうき",
"セフィラ",
"戦華せんか",
"占術姫せんじゅつき",
"閃刀せんとう",
"閃刀姫せんとうき",
"ゼンマイ",
"※Ｚ－ＯＮＥゾーン",
"双天そうてん",
"※ダークネス",
"代行者だいこうしゃ",
"ダイナミスト",
"ダイナレスラー",
"竹光たけみつ",
"ダストン",
"堕天使だてんし",
"ダンテ",
"Ｃチェーン",
"チェンジ",
"超重武者ちょうじゅうむしゃ",
"超重武者装留ちょうじゅうむしゃそうる",
"超量ちょうりょう",
"超量機獣ちょうりょうきじゅう",
"超量士ちょうりょうし",
"地霊術ちれいじゅつ",
"ＤＤディーディー",
"ＤＤＤディーディーディー",
"帝王ていおう",
"Ｄディフォーマー",
"ティンダングル",
"デーモン",
"Ｄ－ＨＥＲＯデステニーヒーロー",
"デストーイ",
"ＴＧテックジーナス",
"魔神儀デビリチャル",
"テラナイト",
"天威てんい",
"天気てんき",
"伝説でんせつの騎士きし",
"伝説でんせつの竜りゅう",
"電池でんちメン",
"電脳堺でんのうかい",
"電脳堺門でんのうかいもん",
"トゥーン",
"闘器とうき",
"ドドド",
"トマボー",
"ドライトロン",
"トライブリゲード",
"ドラグニティ",
"ドラグマ",
"ドラゴンメイド",
"トラミッド",
"トリックスター",
"トロイメア",
"ナチュル",
"Ｎｏ.ナンバーズ",
"ニトロ",
"忍者にんじゃ",
"忍法にんぽう",
"ヌメロン",
"ネオス",
"Ｎネオスペーシアン",
"影霊衣ネクロス",
"ネクロバレー",
"ネフティス",
"ネメシス",
"パーシアス",
"バージェストマ",
"ＢＫバーニングナックラー",
"ハーピィ",
"バウンサー",
"覇王眷竜はおうけんりゅう",
"覇王門はおうもん",
"破械はかい",
"破壊剣はかいけん",
"破械神はかいしん",
"墓守はかもり（墓守はかもりの）",
"バスター・ブレイダー",
"ハネクリボー",
"パラディオン",
"バルバロス",
"パワー・ツール",
"ビークロイド",
"Ｂ・Ｆビー・フォース",
"ＨＥＲＯヒーロー",
"彼岸ひがん",
"憑依ひょうい",
"憑依装着ひょういそうちゃく",
"氷結界ひょうけっかい",
"ヒロイック",
"Ｈ・Ｃヒロイック・チャレンジャー",
"ファーニマル",
"ファントム",
"幻影騎士団ファントム・ナイツ",
"フィッシュボーグ",
"封印ふういんされし",
"風霊術ふうれいじゅつ",
"フォーチュンレディ",
"Ｆ.Ａ.フォーミュラアスリート",
"フォトン",
"武神ぶじん",
"フュージョン",
"フュージョン・ドラゴン",
"ＢＦブラックフェザー",
"ブラック・マジシャン",
"ブラック・マジシャン・ガール",
"プランキッズ",
"ブルーアイズ",
"ブレイズ・キャノン",
"プレデター",
"捕食植物プレデター・プランツ",
"フレムベル",
"ブンボーグ",
"ヘイズ",
"陽炎獣ヘイズビースト",
"ペンギン",
"ペンデュラム",
"ペンデュラムグラフ",
"ペンデュラム・ドラゴン",
"ポータン",
"ホープ",
"光天使ホーリー・ライトニング",
"ホール",
"方界ほうかい",
"宝玉ほうぎょく",
"宝玉獣ほうぎょくじゅう",
"ホルスの黒炎竜こくえんりゅう",
"ボンディング",
"水精鱗マーメイル",
"魔界劇団まかいげきだん",
"魔界台本まかいだいほん",
"マギストス",
"マグネット・ウォリアー",
"魔轟神まごうしん",
"マジェスペクター",
"マジシャン・ガール",
"魔導獣マジックビースト",
"魔術師まじゅつし",
"魔人まじん",
"マシンナーズ",
"Ｍ・ＨＥＲＯマスクドヒーロー",
"魔装戦士まそうせんし",
"魔弾まだん",
"摩天楼まてんろう",
"魔導まどう",
"魔導書まどうしょ",
"マドルチェ",
"魔妖まやかし",
"マリスボラス",
"マリンセス",
"未界域みかいいき",
"ミスト・バレー",
"未来皇みらいおうホープ",
"ムーンライト",
"無限起動むげんきどう",
"メガリス",
"メタファイズ",
"メダリオン",
"メタルフォーゼ",
"メルフィー",
"紋章獣もんしょうじゅう",
"融合ゆうごう",
"夢魔鏡ゆめまきょう",
"妖仙獣ようせんじゅう",
"妖刀ようとう－不知火しらぬい",
"ライトロード",
"ラヴァル",
"ＲＵＭランクアップマジック",
"ランスロット",
"リアクター",
"リィラ",
"リゾネーター",
"リチュア",
"六花りっか",
"リベリオン",
"竜剣士りゅうけんし",
"竜星りゅうせい",
"竜魔王りゅうまおう",
"ＬＬリリカル・ルスキニア",
"レアル・ジェネクス",
"霊獣れいじゅう",
"霊獣使れいじゅうつかい",
"霊神れいしん",
"霊使れいつかい",
"ＲＲレイド・ラプターズ",
"レッドアイズ",
"レッド・デーモン",
"レプティレス",
"ＬＶレベル（レベルアップモンスター）",
"煉獄れんごく",
"ロイド",
"ローズ",
"ローズ・ドラゴン",
"ローラン",
"六武衆ろくぶしゅう",
"ワーム",
"ワルキューレ"
];
var all_letter = [
    "ア","イ","ウ","エ","オ",
    "カ","キ","ク","ケ","コ",
    "サ","シ","ス","セ","ソ",
    "タ","チ","ツ","テ","ト",
    "ナ","ニ","ヌ","ネ","ノ",
    "ハ","ヒ","フ","ヘ","ホ",
    "マ","ミ","ム","メ","モ",
    "ヤ","ユ","ヨ",
    "ラ","リ","ル","レ","ロ",
    "ワ","ヲ","ン",
    "ガ","ギ","グ","ゲ","ゴ",
    "ダ","ヂ","ヅ","デ","ド",
    "バ","ビ","ブ","ベ","ボ",
    "パ","ピ","プ","ペ","ポ",
    "キャ","キュ","キョ",
    "シャ","シュ","ショ",
    "チャ","チュ","チョ",
    "ニャ","ニュ","ニョ",
    "ヒャ","ヒュ","ヒョ",
    "ミャ","ミュ","ミョ",
    "リャ","リュ","リョ",
    "ギャ","ギュ","ギョ",
    "ヂャ","ヂュ","ヂョ",
    "ビャ","ビュ","ビョ",
    "ピャ","ピュ","ピョ"
];
var littletsu = false;
var nobashibo = false;
var cards = [];
var questionOptionMax = 4;
var cardOptionMax = 5;

function questionInputButton(){
    var selectedQuestionIndex = document.getElementById("question-input-textarea").value.split(",").map(Number);
    var selectedQuestion = [];
    for(var i = 0; i < questionOptionMax; i ++){
        selectedQuestion.push(questions[selectedQuestionIndex[i]]);
    }
    var target = document.getElementById("question-option-list");
    target.innerHTML = "";
    for(var i = 0; i < questionOptionMax; i++){
        var li = document.createElement("li");
        li.innerText = selectedQuestion[i];
        li.id = "option" + i;
        li.style.color = "black";
        target.appendChild(li);
    }
}

function questionRandomButton(){
    var selectedQuestion = selectQuestionAtRandom(questions, questionOptionMax);
    var target = document.getElementById("question-option-list");
    target.innerHTML = "";
    for(var i = 0; i < questionOptionMax; i++){
        var li = document.createElement("li");
        li.innerText = selectedQuestion[i];
        li.id = "option" + i;
        li.style.color = "black";
        target.appendChild(li);
    }
    var selectedQuestionIndex = [];
    for(var i = 0; i < questionOptionMax; i++){
        selectedQuestionIndex.push(questions.indexOf(selectedQuestion[i]));
    }
    document.getElementById("question-input-textarea").value = selectedQuestionIndex;
}

function cardInputButton(){
    var selectedCardIndex = document.getElementById("card-input-textarea").value.split(",").map(Number);
    var selectedCard = [];
    for(var i = 0; i < cardOptionMax; i ++){
        selectedCard.push(cards[selectedCardIndex[i]]);
    }
    var target = document.getElementById("card-option-list");
    target.innerHTML = "";
    for(var i = 0; i < cardOptionMax; i++){
        var li = document.createElement("li");
        li.innerText = selectedCard[i];
        target.appendChild(li);
    }
}

function cardRandomButton(){
    var selectedCard = selectCardAtRandom(cards, cardOptionMax);
    var target = document.getElementById("card-option-list");
    target.innerHTML = "";
    for(var i = 0; i < cardOptionMax; i++){
        var li = document.createElement("li");
        li.innerText = selectedCard[i];
        target.appendChild(li);
    }
    var selectedCardIndex = [];
    for(var i = 0; i < cardOptionMax; i++){
        selectedCardIndex.push(cards.indexOf(selectedCard[i]));
    }
    document.getElementById("card-input-textarea").value = selectedCardIndex;
}

function selectQuestionAtRandom(questions, ammount){
    return chooseAtRandom(questions, ammount)
}

function selectCardAtRandom(cards, ammount){
    return chooseAtRandom(cards, ammount)
}

function chooseAtRandom(array, count) {
    // countが設定されていない場合は1にする
    var count = count || 1;
    var arrayData = Array.from(array);
    var result = [];
    for (var i = 0; i < count; i++) {
        var arrayIndex = Math.floor(Math.random() * arrayData.length);
        result[i] = arrayData[arrayIndex];
        // 1回選択された値は削除して再度選ばれないようにする
        arrayData.splice(arrayIndex, 1);
    }
    return result;
}

function createCards(letters){
    cards = [];
    for(var i = 0; i < letters.length; i ++){
        for(var j = 0; j < letters.length; j ++){
            cards.push(letters[i] + "" + letters[j]);
        }
    }
    if(littletsu){
        for(var i = 0; i < letters.length; i ++){
            for(var j = 0; j < letters.length; j ++){
                cards.push(letters[i] + "ッ" + letters[j]);
            }
        }
    }
    if(nobashibo){
        for(var i = 0; i < letters.length; i ++){
            for(var j = 0; j < letters.length; j ++){
                cards.push(letters[i] + "ー" + letters[j]);
            }
        }
    }
}

function questionMaxSettingButton(){
    questionOptionMax = Number(document.getElementById("question-max-setting-textarea").value)
    questionRandomButton();
}

function cardMaxSettingButton(){
    cardOptionMax = Number(document.getElementById("card-max-setting-textarea").value)
    cardRandomButton();
}

function includeLittletsuSettingCheckbox(){
    littletsu = document.getElementById("include-littletsu-setting").checked
    createCards(letter);
    cardRandomButton();
}

function includeNobashiboSettingCheckbox(){
    nobashibo = document.getElementById("include-nobashibo-setting").checked
    createCards(letter);
    cardRandomButton();
}

function extendCardSettingCheckbox(){
    if(document.getElementById("extend-card-setting").checked){
        letter = all_letter;
    }else{
        letter = basic_letter;
    }
    createCards(letter);
    cardRandomButton();
}

function tohoSettingCheckbox(){
    if(document.getElementById("toho-setting").checked){
        document.getElementById("mtg-setting").checked = false;
        document.getElementById("yugioh-setting").checked = false;
        questions = toho_questions;
    }else{
        questions = basic_questions;
    }
    questionRandomButton();
}

function mtgSettingCheckbox(){
    if(document.getElementById("mtg-setting").checked){
        document.getElementById("toho-setting").checked = false;
        document.getElementById("yugioh-setting").checked = false;
        questions = mtg_questions;
    }else{
        questions = basic_questions;
    }
    questionRandomButton();
}

function yugiohSettingCheckbox(){
    if(document.getElementById("yugioh-setting").checked){
        document.getElementById("toho-setting").checked = false;
        document.getElementById("mtg-setting").checked = false;
        questions = yugioh_questions;
    }else{
        questions = basic_questions;
    }
    questionRandomButton();
}

function makeThis(){
    var correct = Math.floor(Math.random() * questionOptionMax);
    for(var i = 0; i < questionOptionMax; i ++){
        var target = "option" + i;
        document.getElementById(target).style.color = "black";
    }
    var target = "option" + correct;
    document.getElementById(target).style.color = "red";
}

questions = basic_questions;
letter = basic_letter;
createCards(letter);
questionRandomButton();
cardRandomButton();