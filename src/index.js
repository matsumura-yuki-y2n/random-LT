const fs = require('fs');
const util = require('./util');
const Random = require('./random');

if (process.argv < 3) {
    console.error('読み込むファイルのパスを引数に指定してください');
    process.exit(1);
}

// 引数で指定されたjsonファイルからLT参加者を読みこむ
const filePath = process.argv[2];

// LT順をランダムに決定して返す
const getRandomLTOrder = (LTs) => {
    const LTCandidateTitles = Object.keys(LTs);

    // 環境変数かコマンドライン引数からSEED値を取得
    const randomOpt = util.createRandomOptionFromEnvOrArgs(LTCandidateTitles.length - 1);

    // XorShiftによる乱数生成クラスに、シード値を設定
    const rand = new Random(randomOpt.seed);

    // まだ選ばれていないLTからランダムに一つ取得
    const retLTTitles = [];
    while(LTCandidateTitles.length > 0) {
        const index = rand.nextInt(0, LTCandidateTitles.length - 1); // 乱数を生成
        retLTTitles.push(LTCandidateTitles[index]);
        LTCandidateTitles.splice(index, 1);
    }

    return retLTTitles.map((title, i) => `発表${i+1}番目: ${title} by ${LTs[title]}`);
};

// LT参加者一覧を読み込み
const LTs = JSON.parse(fs.readFileSync(filePath));

// 部ごとの参加者情報をマージ
const newLTs = {};
const segments = Object.keys(LTs);
segments.forEach((seg) => util.merge(newLTs, LTs[seg]));

// LT順を決定して表示
console.log(getRandomLTOrder(newLTs));
