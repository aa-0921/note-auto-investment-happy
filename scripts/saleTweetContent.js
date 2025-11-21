// Amazonセール情報のTwitter投稿内容定義
// ブラックフライデーセール用の投稿内容を定義

import { affiliateConfig } from './affiliateConfig.js';

const { affiliateTag } = affiliateConfig;

// ツイートメッセージ候補配列
export const saleTweetMessages = [
  '💖 「買ってよかった」と心から思える年末セールが始まりました！\n\nAmazonブラックフライデーで、あなたの心も財布も喜ぶ買い物を見つけてください✨',
  '👛 損しない！「安い時に買う」シンプルで最強の節約術\n\n普段必ず買う消耗品が驚くほど安くなります🛒\n安い時にまとめて買っておくだけで、毎月の生活費がグッと減ります💰',
  '🌟 ご褒美は自分を元気に保つ「心の充電器」です\n\n好きなものを手に入れると、ワクワクして「買ってよかった！」と心から嬉しくなりますよね💫\nAmazonブラックフライデー開催中🎁',
  // '📅 年末のバタバタを回避！「時間のゆとり」を買う\n\n必要なものを今のうちに買ってしまえば、忙しい12月に焦って買い物に出かける必要がなくなります⏰\n心と時間に余裕が生まれます✨',
  '🎉 いよいよAmazonの「ブラックフライデー」です！\n',
  // '🛍️ 前から欲しかった家電やちょっと良いものも、割引されることで「これなら買ってもいいかな」という価格になります\n\n高い時に買うのを我慢して、一番安いチャンスを狙って手に入れる💪\nこれが、賢い大人の買い物術です✨',
  '🎊 2025年最後のビッグチャンス！\n\nAmazonブラックフライデーセール開催中🎁\n欲しかったあの商品を手に入れる絶好のタイミングです💫',
  // '💸 年末の大掃除に活躍する家電や、新しい年を気持ちよく迎えるための寝具・インテリアまで、この機会にまとめてご準備いただけます🏠\n\nAmazonブラックフライデーで賢く年越し準備を✨',
];

// ハッシュタグ配列
export const saleTweetHashtags = [
  '#Amazonブラックフライデー',
  '#ブラックフライデーセール',
  // '#アマゾンセール',
  // '#ブラックフライデー',
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
const saleLinkBlackFridayMainUrl = `https://www.amazon.co.jp/blackfriday?&linkCode=ll2&tag=${affiliateTag}&linkId=213b50b8f3333d64c518a3817bcc1088&language=ja_JP&ref_=as_li_ss_tl`;
// const saleLink80PercentUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522rangeRefinementFilters%255C%2522%253A%257B%255C%2522percentOff%255C%2522%253A%257B%255C%2522min%255C%2522%253A80%252C%255C%2522max%255C%2522%253A100%257D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;
// const saleLink60PercentUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522rangeRefinementFilters%255C%2522%253A%257B%255C%2522percentOff%255C%2522%253A%257B%255C%2522min%255C%2522%253A60%252C%255C%2522max%255C%2522%253A100%257D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;

export const saleTweetAffiliateLinks = [
  `💰 🎁 Amazonブラックフライデーセール会場はこちら！\n${saleLinkBlackFridayMainUrl}`,
  `🛍️ ✨ ブラックフライデーセール会場へ\n${saleLinkBlackFridayMainUrl}`,
  `🔥 今だけの特別価格！セール会場はこちら\n${saleLinkBlackFridayMainUrl}`,
  `💸 🎊 お得な商品が勢揃い！セール会場へ\n${saleLinkBlackFridayMainUrl}`,
  `🎉 年末のビッグセール開催中！会場はこちら\n${saleLinkBlackFridayMainUrl}`,
  // `💰 🎁 割引率80%以上の商品一覧\n${saleLink80PercentUrl}`,
  // `💰 🎁 割引率60%以上の商品一覧\n${saleLink60PercentUrl}`,
];


