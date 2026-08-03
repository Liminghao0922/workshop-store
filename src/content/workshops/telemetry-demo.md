---
repo: "telemetry-demo"
url: "https://github.com/Liminghao0922/telemetry-demo"
format: "demo"
level: "advanced"
duration: "1–2 hours"
featured: false
services:
  - "Azure API Management"
  - "Azure Functions"
  - "Azure Cosmos DB"
  - "Azure Virtual Network"
  - "Managed Identity"
  - "Bicep"
tags: ["telemetry", "private-endpoints", "serverless", "security"]
languages: ["en"]
updatedAt: "2026-02-05"
titleEn: "Secure Telemetry Ingestion Demo"
titleJa: "セキュア テレメトリ インジェスト デモ"
summaryEn: "Deploy a production-grade telemetry pipeline from API Management through Functions Flex to Cosmos DB using private networking and managed identity."
summaryJa: "API Management から Functions Flex、Cosmos DB まで、プライベート ネットワークとマネージド ID を用いた本番品質のテレメトリ パイプラインをデプロイします。"
prerequisitesEn:
  - "Azure subscription with APIM Standard v2 quota"
  - "Azure CLI and Bicep"
  - ".NET 8 SDK for local development"
prerequisitesJa:
  - "APIM Standard v2 のクォータを持つ Azure サブスクリプション"
  - "Azure CLI と Bicep"
  - "ローカル開発用の .NET 8 SDK"
outcomesEn:
  - "Deploy APIM, Functions Flex, and Cosmos DB with Bicep"
  - "Connect services through private endpoints"
  - "Authenticate to Cosmos DB with managed identity"
outcomesJa:
  - "APIM、Functions Flex、Cosmos DB を Bicep でデプロイ"
  - "プライベート エンドポイントでサービスを接続"
  - "マネージド ID で Cosmos DB へ認証"
cautionEn: "API Management Standard v2 has significant running cost; use a shared or short-lived environment."
cautionJa: "API Management Standard v2 は実行コストが高いため、共有環境または短時間の環境を推奨します。"
---

Designed as a deployment and architecture demo rather than a classroom lab.

教室型ラボではなく、デプロイとアーキテクチャのデモとして構成されています。
