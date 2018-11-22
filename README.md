# portfolio

## ダサいポートフォリオサイト

## 必須項目

- カウンター
  - 何とかして実装
- ダサいサイドバー
  - Vuesaxでサイドバー
- ニュース(更新履歴でスクロールできるやつ)
  - コミットログから表示する仕組みを作る
- ダサいメニュー画像
  - 適当に自作する
- リンクはトップページ意外禁止
  - テキストで貼る
- MIDIで音楽が鳴る
  - めんどそう
- マウスカーソルに星屑が付く
  - がんばればできそう
- ページの切り替えで派手なエフェクト
  - がんばる

## サイトマップ

- トップ
  - タイトルは「しゅけピーのホームページ」
- プロフィール
  - 使える技術
  - 登壇経歴
  - 業務経歴
  - 個人で作ったものなど
- 掲示板風お問い合わせフォーム
- 相互リンク(嘘)
  - Vue.jsドキュメント
  - Vuesax
  - Github
  - Twitter
  - Blog

## 入れたい機能

- キリ番で何かが起きる
- 右クリック禁止
- 背景画像はrepeatさせたもの
- marqueeタグでタイトルを動かす
- 無断リンク禁止
- リンクフリーで自分のサイトのリンクを用意しておく
- floatタグの乱用で画像が左にあったり右にあったりしてテキストがうざいやつ
- ダサい戻るボタン
- ダサいフッター
  - mailtoで自分のメルアド
  - 時代遅れのCopyright
- 背景画像に明らかに合成で入れた文字
- 工事中メニュー

## 使用技術

- Nuxt.js
- Vue.js(vue-cli3)
  - vuesax
- Prettieer
- Eslint
- vuex
- vue-router
- CSSアニメーション
  - フレームワークを選定する必要あり
- Netlify
- ES6

## できたらやる

2000年代と今風のデザインをボタンで切り替え

## ページ構成

- src/pages
  - index.vue
  - /profile
    - index.vue
  - /board
    - index.vue
  - /mutual-links
    - index.vue
- src/components
  - Button
  - Modal
  - SideBar
  - Form
  - List
  - Special
    - Kiriban
    - MIDI
    - 

## コンポーネント