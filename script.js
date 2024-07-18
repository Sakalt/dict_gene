// data.js を読み込む
const wordData = [
  { entry: { id: 1, form: "猫" } },
  { entry: { id: 2, form: "inu" } },
  { entry: { id: 3, form: "tori" }, example: "鳥が空を飛んでいます。" },
  { entry: { id: 4, form: "yama" } },
  { entry: { id: 5, form: "mizu" } },
  { entry: { id: 64, form: "hana" }, example: "花が咲いています。" }
];

// JSON形式に変換する関数
function generateJSON(wordData) {
  return {
    words: wordData.map(word => ({
      entry: word.entry,
      translations: [
        {
          title: "英語",
          forms: [word.entry.form] // デフォルトでは単語そのものを訳語として使用
        }
      ],
      tags: [], // タグは空
      contents: [
        {
          title: "説明",
          text: `これはサンプルの説明です。`, // デフォルト説明
          markdown: `これはサンプルの説明です。`
        },
        word.example ? {
          title: "例文",
          text: word.example,
          markdown: word.example
        } : null
      ].filter(content => content !== null), // 例文がある場合のみ含める
      variations: [],
      relations: []
    })),
    version: 2,
    settings: {
      zpdic: {
        pronunciationTitle: "発音"
      },
      zpdicOnline: {
        enableMarkdown: true
      }
    }
  };
}

// JSONデータを生成
const jsonOutput = generateJSON(wordData);

// JSONを文字列に変換してコンソールに出力
console.log(JSON.stringify(jsonOutput, null, 2));
