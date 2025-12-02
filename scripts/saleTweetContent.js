// Amazonセール情報のTwitter投稿内容定義
// ブラックフライデー（アフターセール）セール用の投稿内容を定義

import { affiliateConfig } from './affiliateConfig.js';

const { affiliateTag } = affiliateConfig;

// ツイートメッセージ候補配列（全角90文字以内・メイン本文・少し短め）
export const saleTweetMessages = [
  '今年買った物の「セール中だけ」お得にストックしておきますか？🉐',
  '注文履歴から「今年買ってよかった物」だけセール価格で補充しませんか？🉐',
  '💖 「買ってよかった」と思える物を、年末のうちにひとつ迎えておきませんか？✨',
  '👛 「安い時に買う」だけでOK。いつもの消耗品をセール中に軽くまとめ買い🛒',
  '🌟 一年がんばった自分に、小さなご褒美をひとつだけ足してみませんか？💫🎁',
  '🎉 いよいよAmazonブラックフライデーセール。本番セール、始まります🔥',
  '🎊 2025年最後のビッグチャンス。気になっていたあの商品を狙うなら今🎁',
  '😅 「ブラックフライデーだけは買っちゃう」その気持ち、今年も一緒です✨',
  '🎉 毎年この時期だけは我慢せずにポチっと。1年で一番ゆるくて楽しい買い物デー💰',
  '😊 普段は我慢してるけど、この週末だけは「欲しかった物」にOKを出してあげませんか？🔥',
  '😭 「また買っちゃった…」と言いつつ、毎年ちょっと楽しみにしているセールです💸',
  '💸 普段は節約モードでも、この時期だけは「まとめ買い解禁」にしてもいいかもしれません🎊',
  '🤫 ブラックフライデーの日だけは、買い物ルールをゆるめてもいいかなと思っています✨',
];

// 差分用の短い文章（一般的なセール案内用のひと言）
// すべて「セールは12/8(月)まで〜」形式で、短くわかりやすい文にする
export const saleTweetPrefixVariations = [
  'セールは12/8(月)まで✨今がおトク🎁',
  'セールは12/8(月)まで🔥我慢解禁デー🎉',
  'セールは12/8(月)まで🎧気になる物お試しチャンス✨',
  'セールは12/8(月)まで🛒欲しかった物チェック😊',
  'セールは12/8(月)まで🎀自分へのご褒美に🎁',
  'セールは12/8(月)まで🌙夜更かしセール👀',
  'セールは12/8(月)まで📦「いつか買う」後押し期間💡',
  'セールは12/8(月)まで💖ちょっといい物を迎える日✨',
  'セールは12/8(月)まで📦備蓄チャンス🧂',
  'セールは12/8(月)まで💰節約の味方📉',
  'セールは12/8(月)まで📦ストック推奨🧃',
  'セールは12/8(月)まで👀欲しい物チェック📝',
  'セールは12/8(月)まで🔥買うなら今⚡',
  'セールは12/8(月)まで✨先に仕込む派📦',
  'セールは12/8(月)まで📦一年分まとめ買い🗓️',
  'セールは12/8(月)まで👍リピ買い候補🛍️',
];

// ハッシュタグ配列
export const saleTweetHashtags = [
  '#Amazonブラックフライデー（アフターセール）',
  '#ブラックフライデー（アフターセール）セール',
  // '#アマゾンセール',
  // '#ブラックフライデー（アフターセール）',
  // '#お得情報',
  // '#セール情報',
  // '#お買い物',
  // '#おすすめ商品',
  // '#Amazon',
  // '#アマゾン',
  // '#セール',
  // '#特価',
  // '#お買い得',
];

// アフィリエイトリンク配列
const saleLinkBlackFridayMainUrl = `https://www.amazon.co.jp/blackfriday/2?_encoding=UTF8&pd_rd_w=ygD4C&content-id=amzn1.sym.deb8c7e3-e584-4f1c-bef7-5c8a19968d99&pf_rd_p=deb8c7e3-e584-4f1c-bef7-5c8a19968d99&pf_rd_r=YMVCW12K5WDRXTW6S222&pd_rd_wg=8ze3g&pd_rd_r=330bc4a7-b4c0-4fc1-b4cc-993aae48a763&linkCode=ll2&tag=${affiliateTag}&linkId=900a586885fe87e28b7abbff879b32eb&language=ja_JP&ref_=as_li_ss_tl`;
// const saleLink80PercentUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522rangeRefinementFilters%255C%2522%253A%257B%255C%2522percentOff%255C%2522%253A%257B%255C%2522min%255C%2522%253A80%252C%255C%2522max%255C%2522%253A100%257D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;
// const saleLink60PercentUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522rangeRefinementFilters%255C%2522%253A%257B%255C%2522percentOff%255C%2522%253A%257B%255C%2522min%255C%2522%253A60%252C%255C%2522max%255C%2522%253A100%257D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;

export const saleTweetAffiliateLinks = [
  `💰 🎁 セール会場はこちら！\n${saleLinkBlackFridayMainUrl}`,
  `🛍️ ✨ セール会場へ\n${saleLinkBlackFridayMainUrl}`,
  `🔥 今だけの特別価格！セール会場はこちら\n${saleLinkBlackFridayMainUrl}`,
  `💸 🎊 お得な商品が勢揃い！セール会場へ\n${saleLinkBlackFridayMainUrl}`,
  `🎉 年末のビッグセール開催中！会場はこちら\n${saleLinkBlackFridayMainUrl}`,
  // `💰 🎁 割引率80%以上の商品一覧\n${saleLink80PercentUrl}`,
  // `💰 🎁 割引率60%以上の商品一覧\n${saleLink60PercentUrl}`,
];


