# Usage
```sh
$ git clone https://github.com/matsumura-yuki-y2n/random-LT
$ cd random-LT
$ cat sample.json
{
  "組織A": {
    "組織AのやばいLT": "山田",
    "組織AのすごいLT": "山本"
  },
  "組織B": {
    "組織BのやばいLT": "高橋",
    "組織BのすごいLT": "松村"
  },
  "組織C": {
    "組織CのやばいLT": "鈴木",
    "組織CのすごいLT": "田中"
  }
}

$ node src/index.js ./sample.json 42 # 42はシード値
[ '発表1番目: 組織CのやばいLT by 鈴木',
  '発表2番目: 組織CのすごいLT by 田中',
  '発表3番目: 組織BのやばいLT by 高橋',
  '発表4番目: 組織AのやばいLT by 山田',
  '発表5番目: 組織AのすごいLT by 山本',
  '発表6番目: 組織BのすごいLT by 松村' ]
```