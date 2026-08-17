# Bella 像素風作品集設計規範

## 來源位置

- Vue 網站：`src/App.vue`
- Figma：https://www.figma.com/design/j823S7PtIVfBkbZzwSQXDP/線上履歷
- 電腦頁面：`0:1`
- 平板頁面：`35:2`
- 手機頁面：`7:2`
- 風格參考：
  - https://www.framer.com/community/marketplace/templates/nudge/
  - https://dribbble.com/shots/23019626-Developer-portfolio-website

參考 Nudge 的設計工具熟悉感、格線、大型字體、動態效果與作品敘事方式，不複製其版面或品牌素材。

## 字體

- 主標題字體：VT323 Regular，用於 `Bella.Cheng_`。
- 像素介面字體：Pixelify Sans，字重 400–700，用於短標籤與按鈕。
- 內文字體：選擇清楚易讀的無襯線字體。
- 主標題：`Bella.Cheng_`，最後底線為打字游標。
- 小標籤：Pixelify Sans、大寫、增加字距。

## 響應式畫框

- 桌機 `Desktop / 1440`：最大內容寬度約 1180 px，可使用雙欄主視覺與多欄作品卡。
- 平板 `Tablet / 768`：保留部分雙欄結構，作品圖片與文字可上下排列。
- 手機 `Mobile / 390`：單欄、精簡導覽、按鈕滿版、降低裝飾密度。

## 視覺語言

- 使用 2 px 深色銳利邊框。
- 陰影採無模糊位移，例如 `4px 4px 0` 或 `8px 8px 0`。
- 以明亮酸性色作重點，底色保持溫暖的紙張色。
- 優先使用方角或像素切角，避免大量圓角卡片。
- 裝飾可使用格線、像素圖案、視窗標題列與檔名標籤。

## 動態效果

- 底線游標使用 `steps(1)` 離散閃爍。
- 跑馬燈使用線性移動。
- 像素按鈕 hover 時縮短位移陰影，模擬實體按壓。
- 在 `prefers-reduced-motion` 下停用裝飾性動畫。
