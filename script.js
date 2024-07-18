// data.js から単語データを読み込み
const wordData = [
  // 上記の data.js から単語データをここにコピー
];

// JSON 形式で出力する関数
function generateJSON() {
  const json = {
    words: wordData.map(word => ({
      entry: word.entry,
      translations: [],  // 訳語がある場合はここに追加
      tags: [],  // タグがある場合はここに追加
      contents: word.example ? [{ title: "例文", text: word.example }] : [],
      variations: [],  // 変化形がある場合はここに追加
      relations: []    // 関連語がある場合はここに追加
    })),
    version: 2,
    settings: {
      zpdic: {
        punctuations: [",", "。"],  // 句読点がある場合はここに追加
        pronunciationTitle: "発音"
      },
      zpdicOnline: {
        explanation: "この辞書は日本語の単語とその例文を含んでいます。",
        enableMarkdown: false
      }
    }
  };
  
  return JSON.stringify(json, null, 2);
}

// 生成した JSON をダウンロードする関数
function downloadJSON() {
  const json = generateJSON();
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'wordData.json';
  a.click();
  URL.revokeObjectURL(url);
}

// ページが読み込まれたときにダウンロード機能を実行
document.addEventListener('DOMContentLoaded', () => {
  downloadJSON();
});
