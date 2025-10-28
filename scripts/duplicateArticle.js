// duplicateArticle.js
// 日本語コメント: ウェルスコーチの案件記事を複製して投稿
// note.comの複製ボタンを使用して記事を複製し、タイトルに日付を追加して即座に公開します

import { runWithCore } from '@aa-0921/note-auto-core';

(async () => {
  await runWithCore(async ({ core, wantsBackground }) => {
    // 日本語コメント: 複製対象の記事URL（配列で複数指定可能）
    const articleUrls = [
      'https://note.com/investment_happy/n/nd4cda48207be',  // ウェルスコーチ記事
      // 日本語コメント: 追加の記事URLはここに追加
      // 'https://note.com/investment_happy/n/xxxxxx',
    ];
    
    try {
      console.log('=== 案件記事の複製を開始します ===');
      console.log(`対象記事数: ${articleUrls.length}件`);
      articleUrls.forEach((url, index) => {
        console.log(`  ${index + 1}. ${url}`);
      });
      console.log('');
      
      // 日本語コメント: 記事を複製して即座に公開（デフォルト設定）
      await core.runDuplicateAndPublishArticle({
        articleUrls: articleUrls
        // publish: true がデフォルト（即座に公開）
        // titleSuffix: undefined がデフォルト（日付を自動追加）
        // サムネイル画像は各リポジトリの thumbnails ディレクトリから自動選択
      });
      
      console.log('');
      console.log('✅ すべての記事の複製と公開が完了しました');
      
    } catch (error) {
      console.error('');
      console.error('❌ エラーが発生しました:', error.message);
      console.error('');
      console.error('対処方法:');
      console.error('  1. 記事URLが正しいか確認してください');
      console.error('  2. NOTE_EMAIL と NOTE_PASSWORD が正しく設定されているか確認してください');
      console.error('  3. ネットワーク接続を確認してください');
      throw error;
    }
  });
})();

