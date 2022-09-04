# 仕様書

## Git

### ブランチ名
 - ブランチを確認して、mainにいるか確認。
   - `$ git checkout -b  ブランチ名`※ ←ブランチを作成して移動する。
   - #### 命名規則
     - `feature/〇〇/機能名`
     - ○○は、開発者の名前 

### 各種設定ファイル
- テスト Jest
- ESLint

## Dockerのセットアップ
```
# 最初のセットアップ
docker-compose build

# コンテナ立ち上げ
docker-compose up (-dでバックグランドで起動させる)

# コンテナ停止
docker-compose down

# statusの確認
docker-compose ps
```


### Frontend
特になし。HTML、CSSのみでなく、`VueやReactを使用する`ことをおすすめ。どんどん改良してください。


### Backend
`使用する予定がない場合は使用しない。`
今回静的webサイトだが、今後改良していくにつれて、動的に処理したくなった場合のために作成。
TypeScript、Expressで作成。今後、FrontendにVueやReactを採用する余地を残している。

APIにして眠らせておく。

### infra
Dockerを採用。開発環境を統一するため。
