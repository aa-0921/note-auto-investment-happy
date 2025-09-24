// follow/followFromArticles.js
// 薄いラッパー：既存のCLI引数・動作は維持しつつ、実装は共有ライブラリに委譲

import { runWithCore } from '@aa-0921/note-auto-core';

(async () => {
  await runWithCore(async ({ core, wantsBackground }) => {
    // アカウント固有の検索ワード配列（ここで管理）
    const baseSearchWords = [
      '資産運用 資産形成 株 投資信託 FIRE 投資 日記 フォロバ',
      'はじめて 初めて 貯金 節約 副業 NISA iDeCo 積立',
      '長期投資 分散投資 債券 不動産投資 個別株 投資初心者',
      '資産管理 家計管理 老後資金 保険 年金 投資家',
    ]
      .join(' ')
      .trim()
      .split(/\s+/);

    // 仕事に悩んでいそうな人を検索するワードリスト
    const workTroubleSearchWords = [
      '仕事 悩み 職場 人間関係 仕事 ストレス 働き方 悩み',
      'キャリア 迷い 転職 迷い 仕事 辞めたい 職場 辛い',
      '仕事 疲れた 働く 意味 スキル 不足 技術 追いつけない',
      '勉強 時間がない 成長 感じない 能力 不安 自信 ない',
      '経験 浅い 知識 不足 給料 安い 残業 多い',
      '休み 取れない 評価 されない 昇進 できない 責任 重い',
      'プレッシャー 強い 将来 不安 キャリア 不安 技術 変化',
      'AI 脅威 自動化 怖い 失業 不安 再就職 不安',
      'コミュニケーション 苦手 会議 苦手 プレゼン 緊張 報告 遅い',
      '締切 守れない ミス 多い 効率 悪い 集中 できない',
      'モチベーション 低い 燃え尽き バーンアウト 過労 うつ メンタル 心身 疲労',
    ]
      .join(' ')
      .trim()
      .split(/\s+/);

    // 両方のリストを結合
    const searchWords = [...baseSearchWords, ...workTroubleSearchWords];

    await core.runFollowFromArticles({
      background: wantsBackground,
      maxFollows: 15,
      // コア側で options.searchWords を優先使用
      searchWords,
    });
    console.log('フォロー処理が完了しました');
  });
})();
