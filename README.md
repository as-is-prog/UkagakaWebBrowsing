# UkagakaWebBrowsing

## Google Chrome / Microsoft Edgeなどへのインストールはこちらから
https://chrome.google.com/webstore/detail/ukagakawebbrowsing/kffflajijpkhcjgegdlamimkbipdimnm

## 概要

伺かのゴーストと一緒にWebブラウジングをしてみませんか？

UkagakaWebBrowsingは拡張機能アイコンをクリックすることで、
今あなたが開いているWebサイトのURLとタイトルをゴーストに送信することができます。

内部的にはSSP 2.6.32以降で対応されたSSTP over HTTPを用いています。

(OnUWBShowPageInfoイベント、Reference0にタイトル、Reference1にURLが入ります)

## 拡張機能アイコンが出てこない場合

下図のように、ジグソーパズルアイコンをクリックして、UkagakaWebBrowsingをピン留めしてください。

<img width="411" alt="image" src="https://user-images.githubusercontent.com/19942540/236590538-c2272fd2-7c8e-4442-9beb-7bf8ad10434d.png">

ピン留め後、拡張機能アイコンが表示され、クリックできるようになります。

<img width="283" alt="image" src="https://user-images.githubusercontent.com/19942540/236590654-96592c7e-53a1-4e23-aa17-cf71575996e5.png">


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
