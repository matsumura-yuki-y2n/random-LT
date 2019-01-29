// オブジェクトかどうかを判定する
const isObject = (obj) => {
 return obj !== null && typeof obj === 'object';
};

// オブジェクトをマージする
function merge(a, b) {
 for (let key in b) {
  if (isObject(a[key]) && isObject(b[key])) {
   merge(a[key], b[key]);
  } else {
   a[key] = b[key];
  }
 }
 return a;
}

// 環境変数に設定された乱数に関する設定値を返す
const createRandomOptionFromEnv = () => {
 const opt = {};
 if (process.env['RANDOM_SEED']) {
  opt.seed = process.env['RANDOM_SEED'];
 }
 return opt;
};

// 環境変数か引数に設定された乱数に関する設定値を返す
const createRandomOptionFromEnvOrArgs = () => {
 const randomOpt = createRandomOptionFromEnv();
 if (typeof randomOpt.seed === 'undefined') {
  randomOpt.seed = process.argv[3];
 }
 return randomOpt;
};

module.exports = {
 merge,
 createRandomOptionFromEnvOrArgs,
};
