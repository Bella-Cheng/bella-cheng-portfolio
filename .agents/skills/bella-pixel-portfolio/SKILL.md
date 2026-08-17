---
name: bella-pixel-portfolio
description: 設計、實作或維護 Bella Cheng 的一頁式像素風作品集網站與 Figma 設計稿。當任務涉及 Bella 的個人履歷網站、Pixelify Sans 字體、Bella.Cheng_ 打字游標效果、像素風 UI、桌機／平板／手機響應式版型，或 Figma 與 Vue 畫面同步時使用此 skill。
---

# Bella 像素風作品集

維護 Bella 的一頁式作品集，讓網站與 Figma 設計稿使用一致的內容層級、視覺語言與響應式規則。

## 執行流程

1. 修改介面前，先讀取 `src/App.vue` 與 [設計規範](references/design-system.md)。
2. 保留一頁式架構：導覽列、首頁主視覺、精選作品、關於／經歷、聯絡資訊。
3. `Bella.Cheng_` 使用 VT323；短標籤、按鈕與像素裝飾文字使用 Pixelify Sans，較長的內文使用易讀的無襯線字體。
4. 將 `Bella.Cheng_` 最後的底線視為打字游標，以離散閃爍呈現，並提供 `prefers-reduced-motion` 的靜態替代效果。
5. 每次設計都同時檢查桌機 1440 px、平板 768 px、手機 390 px。不同尺寸要重新安排內容，不可只等比例縮小。
6. 優先重用既有 CSS 變數與 Figma variables；若新增顏色、間距或字級，需同步更新設計規範。
7. 保持像素風特色：銳利邊框、無模糊的位移陰影、明確色塊、格線與設計工具介面感。
8. 避免過度圓角、玻璃擬態、柔和模糊陰影，以及常見 SaaS 模板感。
9. 完成程式修改後執行 `npm run build`，並檢查鍵盤操作、語意結構、對比度、減少動態偏好與水平溢位。

## Figma 工作方式

使用官方 Figma MCP 寫入設計稿。每次呼叫寫入工具前，先讀取該工具要求的 Figma skill。

Figma 檔案需保留三個最上層畫框：

- `Desktop / 1440`
- `Tablet / 768`（目前位於 Figma 頁面節點 `35:2`）
- `Mobile / 390`

三個畫框必須共用相同內容與 design tokens，但可依裝置重新排列資訊密度、欄位與導覽方式。

如果 Figma 與網站內容不同，先確認使用者指定哪一方為主要來源，再將另一方同步成相同的內容層級、tokens 與響應式意圖。

## 視覺參考原則

可參考 Nudge 的設計工具感、網格、大字排版與敘事結構，但不可複製其版面、品牌元素或付費模板內容。最終成果必須是 Bella 專屬的像素風作品集。
