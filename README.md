# ginzarb.github.io

## デプロイ方法

* source ブランチで erb などを編集します。
* master ブランチは github pages 用なので基本触らない方向で。`middleman deploy` すると自動で master に push してくれます。

~~~
middleman build # 静的ファイルの生成
middleman deploy # build + デプロイ
~~~
