# UkagakaWebBrowsing

## Google Chrome / Microsoft Edgeなどへのインストールはこちらから
https://chrome.google.com/webstore/detail/ukagakawebbrowsing/kffflajijpkhcjgegdlamimkbipdimnm

## 概要

伺かのゴーストと一緒にWebブラウジングをしてみませんか？

UkagakaWebBrowsingは拡張機能アイコンをクリックすることで、
今あなたが開いているWebサイトのURLとタイトルをゴーストに送信することができます。

内部的にはSSP 2.6.32以降で対応されたSSTP over HTTPを用いています。

(OnUWBShowPageInfoイベント、Reference0にタイトル、Reference1にURLが入ります)

## 下記、イベント実装例(開発者向け)

### 里々
```
＊OnUWBShowPageInfo
：（R0）を見ているんですね。URLは（R1）ですか。
```

### YAYA
```C
OnUWBShowPageInfo
{
  _pageTitle = reference[0]
  _pageURL = reference[1]

  "「%(_pageTitle)」を見ているんですね。URLは「%(_pageURL)」ですか。\e"
}
```
