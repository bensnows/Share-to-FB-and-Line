

npm install
npm start


目前預計送出的功能是推廣網頁<br/>

功能目標設計:<br/>
一段文字+網站連結<br/>


FB share <br/>
狀況：不需申請 FB appid<br/>

電腦版本<br/>
顯示：點按鈕後可開啟新視窗<br/>
登入：取用 FB 網頁版本資訊 (使用者必須登入)<br/>
<img src="./src/img/result.png" height="125px" width = "250px">


手機版本<br/>
顯示：點按鈕後可開啟新視窗<br/>
登入：取用 FB 網頁版本資訊，不與 App 連動<br/>

===============================================================

Line share <br/>
狀況：不需申請 Line Appid，可點擊後產生網頁頁籤<br/>

電腦版本<br/>
顯示：開啟新視窗，會自動將文字網址轉成連結 & 自動增加 起源網址 (例：http://localhost:3000/  是本次 react 的網站)<br/>
登入：需要登入 line 帳號，沒跟 電腦 Line App / Chrome-line plugin 連動<br/>

點擊跳出新畫面(需主動登入)，會再附上一條 http://localhost:3000/ (連結產生網站)<br/>
<img src="./src/img/Web-line.png" height="140px" width = "250px">

產出畫面：<br/>
Windows (程式 v5.21.3)<br/>
<img src="./src/img/web-line-windows-app_v5.21.3.2806.PNG" height="125px" width = "250px">

Windows (Chrome-Plugin)(不自動生成預覽)<br/>
<img src="./src/img/web-line-windows-chrome-plugin.PNG" height="125px" width = "250px">

iOS Line App<br/>
<img src="./src/img/web-line-ios-app_true.png" height="125px" width = "250px">

Mac Line App(不自動生成預覽)<br/>
<img src="./src/img/web-line-Mac Line App.JPG" height="125px" width = "350px">

Android Line (缺) <br/>


手機版本<br/>
顯示：跳轉到 line App 工具<br/>

登入：<br/>
Android (缺)<br/>
iOS:手機 line app<br/>
<img src="./src/img/iOS-line.PNG" height="200px" width = "150px">

產出畫面：<br/>
iOS 手機<br/>
<img src="./src/img/ios-line-ios-app.png" height="150px" width = "300px">



Windows app<br/>
<img src="./src/img/ios-line-windows-app.PNG">


Windows line (chrome-plugin)<br/>
<img src="./src/img/ios-line-chrome-plugin.PNG">

===============================================================

更新整理目錄
<img src="./src/img/Fb-conclusion.png">
<img src="./src/img/Line-Conclusion1.png">
<img src="./src/img/Line-Conclusion2.png">