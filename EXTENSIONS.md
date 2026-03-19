# VS Code Extensions Guide

本專案的 VS Code 擴充套件建議清單定義在 `/.vscode/extensions.json`。

## 目的

- 提供團隊一致的開發體驗（Lint、Format、Tailwind、TypeScript）。
- 降低新人環境建置成本。
- 將「必備」與「效率型」工具統一收斂在同一份清單。

## 目前推薦套件（名稱與用途）

以下為 `recommendations` 現行內容（依字母排序）：

- `austenc.tailwind-docs` - Tailwind 文件快速查詢，方便查 utility class。
- `blanu.vscode-styled-jsx` - styled-jsx 語法支援與高亮。
- `bradlc.vscode-tailwindcss` - Tailwind class 智慧提示、語法高亮與 lint。
- `christian-kohler.path-intellisense` - 檔案路徑自動補全，降低 import 打錯機率。
- `clinyong.vscode-css-modules` - CSS Modules class 名稱提示與跳轉。
- `cweijan.vscode-database-client2` - 連線資料庫、查詢資料與管理連線。
- `dbaeumer.vscode-eslint` - 即時 ESLint 檢查與修正建議。
- `eamodio.gitlens` - Git 歷史、blame、比較差異與作者追蹤。
- `esbenp.prettier-vscode` - 依 Prettier 規則統一格式化程式碼。
- `formulahendry.auto-complete-tag` - HTML/JSX 標籤自動補齊。
- `mikestead.dotenv` - `.env` 檔案語法高亮與可讀性增強。
- `ms-ceintl.vscode-language-pack-zh-hant` - VS Code 介面繁中語言包。
- `ms-vscode.vscode-css-peek` - CSS class 定義快速預覽與跳轉。
- `naumovs.color-highlight` - 在編輯器內即時顯示色碼預覽。
- `riazxrazor.html-to-jsx` - 將 HTML 片段轉為 JSX。
- `streetsidesoftware.code-spell-checker` - 英文拼字檢查（註解、字串、文件）。
- `usernamehw.errorlens` - 將錯誤訊息直接顯示在程式碼行內。
- `vscode-icons-team.vscode-icons` - 檔案與資料夾圖示主題，提升辨識度。
- `wix.vscode-import-cost` - 顯示 import 套件大小，幫助控制 bundle 體積。
- `yoavbls.pretty-ts-errors` - 讓 TypeScript 錯誤訊息更易讀。

## 不建議安裝

`unwantedRecommendations`：

- `ms-vscode.vscode-typescript-tslint-plugin`

原因：本專案使用 ESLint，不使用 TSLint。

## 建議維護原則

- 只保留與專案技術棧或團隊協作直接相關的套件。
- 新增套件前，先確認是否為「團隊共用需求」而非純個人偏好。
- 新增或移除套件後，維持字母排序，降低 merge conflict。
- 套件說明寫在本檔案，不在 `extensions.json` 內加註解，避免與外部 JSON 工具相容性問題。
