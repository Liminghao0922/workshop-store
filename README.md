# Azure Workshop Store

[日本語](#日本語) | [English](#english)

## 日本語

`Liminghao0922` の公開 GitHub リポジトリから、Azure に関連するハンズオン、
デモ、ワークショップを厳選して掲載する静的サイトです。

- 日英バイリンガル UI
- 形式別フィルターとキーワード検索
- 1 リポジトリにつき 1 つの Markdown コンテンツ
- GitHub Actions による GitHub Pages デプロイ
- 新しいリポジトリを評価・分類・追加する `azure-workshop-import` skill

### ローカル実行

```powershell
npm install
npm run dev
```

### コンテンツ追加

リポジトリ内の skill は
`.github\skills\azure-workshop-import\SKILL.md` にあります。リポジトリ URL を
指定して実行すると、README、ドキュメント、IaC、ライセンス、更新状況を確認し、
`src\content\workshops\` に日英対応の Markdown を生成します。

## English

A static, bilingual catalog of Azure-focused hands-on labs, demos, and workshops
curated from the public repositories owned by `Liminghao0922`.

### Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Build the GitHub Pages site |
| `npm run check` | Validate Astro and TypeScript |

### Repository import skill

The portable skill lives at
`.github\skills\azure-workshop-import\SKILL.md`. Given a GitHub repository URL,
it inspects the repository, determines Azure relevance and learning format,
generates one bilingual Markdown entry, and validates the complete catalog.
