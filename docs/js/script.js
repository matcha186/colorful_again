let colorBackground = "";
let selectParts = 1;

const matchingColor1 = document.getElementById('matching-color1');
const matchingColor2 = document.getElementById('matching-color2');
const matchingColor3 = document.getElementById('matching-color3');
const matchingColor4 = document.getElementById('matching-color4');
const matchingColor5 = document.getElementById('matching-color5');
const matchingColor6 = document.getElementById('matching-color6');

const colorIdMap = {
    "#E6002F": 1, "#E94709": 2, "#CA0048": 3, "#932E44": 4, "#600F18": 5, "#965161": 6,
    "#8F6446": 7, "#C49961": 8, "#813B00": 9, "#6B5146": 10, "#BF783D": 11, "#6F4E27": 12,
    "#F08300": 13, "#FBC96B": 14, "#F7AB00": 15, "#F7B97D": 16, "#EC6814": 17, "#D96715": 18,
    "#EEDCB3": 19, "#CFAB72": 20, "#F7E9C5": 21, "#E9D0A5": 22, "#B1A08A": 23, "#CABA96": 24,
    "#FFD900": 25, "#FFF33F": 26, "#FFF4AA": 27, "#FCC800": 28, "#D2B74E": 29, "#EACC63": 30,
    "#3EB370": 31, "#00582D": 32, "#449235": 33, "#B8D200": 34, "#A7D398": 35, "#D6E9CA": 36,
    "#0095D9": 37, "#A0D8EF": 38, "#082752": 39, "#86B3E0": 40, "#004876": 41, "#0F5779": 42,
    "#8E4898": 43, "#BBB7DA": 44, "#4B1A47": 45, "#8E8BC2": 46, "#8E296E": 47, "#6E4598": 48,
    "#808080": 49, "#FFD700": 50, "#B76E79": 51, "#E5E4E2": 52, "#CACAC8": 53, "#E9DACB": 54,
    "#130012": 55, "#666464": 56, "#767676": 57, "#636062": 58, "#4C4948": 59, "#7B8174": 60,
    "#FFFFFF": 61, "#FFFFFB": 62, "#F6F7F8": 63, "#C9C9C4": 64, "#CED1D3": 65, "#AFAFB0": 66,
    "#F09199": 67, "#FDEEEF": 68, "#FADBDA": 69, "#E73C84": 70, "#EB6E9F": 71, "#DBC2C2": 72
};

const colorNameMap = {
    "#E6002F": "赤", "#E94709": "朱色", "#CA0048": "紅色", "#932E44": "ワインレッド", "#600F18": "ボルドー", "#965161": "暗紅色",
    "#8F6446": "ブラウン", "#C49961": "キャメル", "#813B00": "褐色", "#6B5146": "煤竹色", "#BF783D": "胡桃色", "#6F4E27": "セピア",
    "#F08300": "オレンジ", "#FBC96B": "サッビア", "#F7AB00": "マンダリンオレンジ", "#F7B97D": "アプリコット", "#EC6814": "アランチョ", "#D96715": "フー",
    "#EEDCB3": "ベージュ", "#CFAB72": "バフ", "#F7E9C5": "薄香", "#E9D0A5": "エクリュ ベイジュ", "#B1A08A": "グレージュ", "#CABA96": "白橡",
    "#FFD900": "黄色", "#FFF33F": "レモンイエロー", "#FFF4AA": "クレーマ", "#FCC800": "向日葵色", "#D2B74E": "芥子色", "#EACC63": "バンブー",
    "#3EB370": "緑", "#00582D": "深緑", "#449235": "抹茶", "#B8D200": "黄緑", "#A7D398": "若緑", "#D6E9CA": "白緑",
    "#0095D9": "青", "#A0D8EF": "空色", "#082752": "濃藍", "#86B3E0": "ゼニスブルー", "#004876": "インディゴ", "#0F5779": "藍色",
    "#8E4898": "紫", "#BBB7DA": "藤色", "#4B1A47": "茄子紺", "#8E8BC2": "ウィスタリア", "#8E296E": "アメティスト", "#6E4598": "青紫",
    "#808080": "シルバー", "#FFD700": "ゴールド", "#B76E79": "ピンクゴールド", "#E5E4E2": "プラチナ", "#CACAC8": "ホワイトゴールド", "#E9DACB": "シャンパンゴールド",
    "#130012": "黒", "#666464": "鈍色", "#767676": "灰色", "#636062": "スレートグレー", "#4C4948": "消炭色", "#7B8174": "利休鼠",
    "#FFFFFF": "白", "#FFFFFB": "乳白色", "#F6F7F8": "鉛白", "#C9C9C4": "パールグレー", "#CED1D3": "スカイグレー", "#AFAFB0": "シルバーグレー",
    "#F09199": "桃色", "#FDEEEF": "桜色", "#FADBDA": "ベビーピンク", "#E73C84": "ローザ", "#EB6E9F": "チェリーピンク", "#DBC2C2": "パステルピンク"
};

const similarColors = [
    [21, 39, 10, 45, 55, 61], [36, 20, 64, 49, 55, 61], [39, 62, 60, 8, 55, 61], [32, 72, 23, 14, 55, 61], [46, 27, 37, 70, 55, 61], [42, 29, 32, 14, 55, 61],
    [14, 20, 30, 36, 55, 61], [3, 64, 28, 32, 55, 61], [39, 30, 19, 23, 55, 61], [1, 41, 34, 67, 55, 61], [10, 35, 67, 63, 55, 61], [68, 27, 20, 63, 55, 61],
    [22, 12, 6, 39, 55, 61], [3, 6, 7, 68, 55, 61], [47, 21, 44, 35, 55, 61], [40, 43, 68, 54, 55, 61], [30, 39, 19, 9, 55, 61], [9, 41, 32, 27, 55, 61],
    [34, 38, 31, 43, 55, 61], [2, 12, 32, 68, 55, 61], [1, 45, 38, 54, 55, 61], [7, 4, 35, 44, 55, 61], [9, 36, 51, 65, 55, 61], [48, 9, 40, 59, 55, 61],
    [72, 32, 70, 10, 55, 61], [40, 23, 64, 36, 55, 61], [69, 44, 42, 12, 55, 61], [8, 70, 39, 36, 55, 61], [32, 5, 40, 7, 55, 61], [7, 9, 47, 72, 55, 61],
    [19, 48, 12, 69, 55, 61], [47, 6, 8, 36, 55, 61], [4, 39, 18, 65, 55, 61], [19, 10, 65, 41, 55, 61], [11, 69, 21, 40, 55, 61], [46, 2, 7, 60, 55, 61],
    [69, 39, 59, 24, 55, 61], [19, 45, 65, 14, 55, 61], [1, 45, 9, 13, 55, 61], [26, 16, 70, 68, 55, 61], [71, 44, 10, 21, 55, 61], [27, 47, 38, 69, 55, 61],
    [19, 64, 69, 16, 55, 61], [27, 70, 50, 41, 55, 61], [38, 21, 39, 72, 55, 61], [68, 36, 66, 5, 55, 61], [15, 67, 32, 42, 55, 61], [31, 62, 65, 24, 55, 61],
    [2, 50, 44, 44, 55, 61], [49, 12, 41, 62, 55, 61], [65, 46, 4, 69, 55, 61], [38, 32, 45, 28, 55, 61], [38, 32, 44, 62, 55, 61], [7, 67, 39, 36, 55, 61],
    [65, 67, 44, 38, 55, 61], [71, 62, 41, 45, 55, 61], [31, 64, 46, 30, 55, 61], [8, 40, 35, 22, 55, 61], [65, 14, 27, 40, 55, 61], [3, 36, 63, 27, 55, 61],
    [68, 21, 44, 38, 55, 61], [3, 38, 50, 35, 55, 61], [11, 70, 12, 64, 55, 61], [43, 8, 2, 26, 55, 61], [38, 48, 39, 51, 55, 61], [46, 72, 40, 59, 55, 61],
    [47, 10, 11, 68, 55, 61], [12, 46, 40, 35, 55, 61], [27, 37, 43, 10, 55, 61], [44, 40, 28, 63, 55, 61], [41, 35, 56, 68, 55, 61], [45, 4, 66, 25, 55, 61],
];

document.addEventListener("DOMContentLoaded", function() {

    const colorButtons = document.querySelectorAll(".color-circle");
    const wordCircle = document.querySelector(".word-circle");
    const wordContent = wordCircle.querySelector(".word-content");
    const yajirusi = document.querySelector('.yajirusi');
    const colorPalette = document.querySelector('.color-select');

    let currentSelectColor = "";

    document.getElementById("current-shirts-name").innerHTML = "白";
    document.getElementById("current-skirts-name").innerHTML = "白";
    // 色ごとのデータをオブジェクトで定義
    const colorData = {
        "color-1": {
            titleClass: "wordh1-white",
            titleText: "Red",
            descriptionClass: "word-white",
            descriptionTexts: [
                "情熱的な赤色。",
                "身につけると気分も上がる色。"
            ],
            backgroundColor: "red",
            selectColor1: "#E6002F", selectColor1name: "赤",
            selectColor2: "#E94709", selectColor2name: "朱色",
            selectColor3: "#CA0048", selectColor3name: "紅色",
            selectColor4: "#932E44", selectColor4name: "ワインレッド",
            selectColor5: "#600F18", selectColor5name: "ボルドー",
            selectColor6: "#965161", selectColor6name: "暗紅色",
        },
        "color-2": {
            titleClass: "wordh1-white",
            titleText: "Brown",
            descriptionClass: "word-white",
            descriptionTexts: [
                "落ち着きのある茶色。",
                "身につけると安心感が増す色。"
            ],
            backgroundColor: "brown",
            selectColor1: "#8F6446", selectColor1name: "ブラウン",
            selectColor2: "#C49961", selectColor2name: "キャメル",
            selectColor3: "#813B00", selectColor3name: "褐色",
            selectColor4: "#6B5146", selectColor4name: "煤竹色",
            selectColor5: "#BF783D", selectColor5name: "胡桃色",
            selectColor6: "#6F4E27", selectColor6name: "セピア",
        },
        "color-3": {
            titleClass: "wordh1-white",
            titleText: "Orange",
            descriptionClass: "word-white",
            descriptionTexts: [
                "活力溢れるオレンジ色。",
                "着ると元気が出る色。"
            ],
            backgroundColor: "orange",
            selectColor1: "#F08300", selectColor1name: "オレンジ",
            selectColor2: "#FBC96B", selectColor2name: "サッビア",
            selectColor3: "#F7AB00", selectColor3name: "マンダリンオレンジ",
            selectColor4: "#F7B97D", selectColor4name: "アプリコット",
            selectColor5: "#EC6814", selectColor5name: "アランチョ",
            selectColor6: "#D96715", selectColor6name: "フー",
        },
        "color-4": {
            titleClass: "wordh1-black",
            titleText: "Beige",
            descriptionClass: "word-black",
            descriptionTexts: [
                "上品なベージュ色。",
                "身につけると落ち着いた印象を与える色。"
            ],
            backgroundColor: "beige",
            selectColor1: "#EEDCB3", selectColor1name: "ベージュ",
            selectColor2: "#CFAB72", selectColor2name: "バフ",
            selectColor3: "#F7E9C5", selectColor3name: "薄香",
            selectColor4: "#E9D0A5", selectColor4name: "エクリュ ベイジュ",
            selectColor5: "#B1A08A", selectColor5name: "グレージュ",
            selectColor6: "#CABA96", selectColor6name: "白橡（つるばみ）",
        },
        "color-5": {
            titleClass: "wordh1-black",
            titleText: "Yellow",
            descriptionClass: "word-black",
            descriptionTexts: [
                "明るいイエロー色。",
                "着ると明るく元気な気分になる色。"
            ],
            backgroundColor: "yellow",
            selectColor1: "#FFD900", selectColor1name: "黄色",
            selectColor2: "#FFF33F", selectColor2name: "レモンイエロー",
            selectColor3: "#FFF4AA", selectColor3name: "クレーマ",
            selectColor4: "#FCC800", selectColor4name: "向日葵色",
            selectColor5: "#D2B74E", selectColor5name: "芥子色",
            selectColor6: "#EACC63", selectColor6name: "バンブー",
        },
        "color-6": {
            titleClass: "wordh1-white",
            titleText: "Green",
            descriptionClass: "word-white",
            descriptionTexts: [
                "爽やかなグリーン色。",
                "身につけるとリフレッシュされる色。"
            ],
            backgroundColor: "green",
            selectColor1: "#3EB370", selectColor1name: "緑",
            selectColor2: "#00582D", selectColor2name: "深緑",
            selectColor3: "#449235", selectColor3name: "抹茶",
            selectColor4: "#B8D200", selectColor4name: "黄緑",
            selectColor5: "#A7D398", selectColor5name: "若緑",
            selectColor6: "#D6E9CA", selectColor6name: "白緑",
        },
        "color-7": {
            titleClass: "wordh1-white",
            titleText: "Blue",
            descriptionClass: "word-white",
            descriptionTexts: [
                "穏やかなブルー色。",
                "着ると心が落ち着く色。"
            ],
            backgroundColor: "blue",
            selectColor1: "#0095D9", selectColor1name: "青",
            selectColor2: "#A0D8EF", selectColor2name: "空色",
            selectColor3: "#082752", selectColor3name: "濃藍",
            selectColor4: "#86B3E0", selectColor4name: "ゼニスブルー",
            selectColor5: "#004876", selectColor5name: "インディゴ",
            selectColor6: "#0F5779", selectColor6name: "藍色",
        },
        "color-8": {
            titleClass: "wordh1-white",
            titleText: "Purple",
            descriptionClass: "word-white",
            descriptionTexts: [
                "エレガントなパープル色。",
                "身につけると華やかな印象を与える色。"
            ],
            backgroundColor: "purple",
            selectColor1: "#8E4898", selectColor1name: "紫",
            selectColor2: "#BBB7DA", selectColor2name: "藤色",
            selectColor3: "#4B1A47", selectColor3name: "茄子紺",
            selectColor4: "#8E8BC2", selectColor4name: "ウィスタリア",
            selectColor5: "#8E296E", selectColor5name: "アメティスト",
            selectColor6: "#6E4598", selectColor6name: "青紫",
        },
        "color-9": {
            titleClass: "wordh1-black",
            titleText: "Other",
            descriptionClass: "word-black",
            descriptionTexts: [
                "ユニークな色。",
                "着ると個性的な魅力が引き立つ色。"
            ],
            backgroundColor: "silver",
            selectColor1: "#808080", selectColor1name: "シルバー",
            selectColor2: "#FFD700", selectColor2name: "ゴールド",
            selectColor3: "#B76E79", selectColor3name: "ピンクゴールド",
            selectColor4: "#E5E4E2", selectColor4name: "プラチナ",
            selectColor5: "#CACAC8", selectColor5name: "ホワイトゴールド",
            selectColor6: "#E9DACB", selectColor6name: "シャンパンゴールド",
        },
        "color-10": {
            titleClass: "wordh1-white",
            titleText: "Black",
            descriptionClass: "word-white",
            descriptionTexts: [
                "シックなブラック色。",
                "着るとクールで洗練された印象を与える色。"
            ],
            backgroundColor: "black",
            selectColor1: "#130012", selectColor1name: "黒",
            selectColor2: "#666464", selectColor2name: "鈍色",
            selectColor3: "#767676", selectColor3name: "灰色",
            selectColor4: "#636062", selectColor4name: "スレートグレー",
            selectColor5: "#4C4948", selectColor5name: "消炭色",
            selectColor6: "#7B8174", selectColor6name: "利休鼠",
        },
        "color-11": {
            titleClass: "wordh1-black",
            titleText: "White",
            descriptionClass: "word-black",
            descriptionTexts: [
                "清潔感のあるホワイト色。",
                "身につけると清々しい気持ちになる色。"
            ],
            backgroundColor: "rgb(255, 247, 237)",
            selectColor1: "#FFFFFE", selectColor1name: "白",
            selectColor2: "#F6F7F8", selectColor2name: "鉛白",
            selectColor3: "#FFFFFB", selectColor3name: "乳白色",
            selectColor4: "#C9C9C4", selectColor4name: "パールグレー",
            selectColor5: "#CED1D3", selectColor5name: "スカイグレー",
            selectColor6: "#AFAFB0", selectColor6name: "シルバーグレー",
        },
        "color-12": {
            titleClass: "wordh1-black",
            titleText: "Pink",
            descriptionClass: "word-black",
            descriptionTexts: [
                "優しいピンク色。",
                "着ると柔らかく女性らしい印象を与える色。"
            ],
            backgroundColor: "pink",
            selectColor1: "#F09199", selectColor1name: "桃色",
            selectColor2: "#FDEEEF", selectColor2name: "桜色",
            selectColor3: "#FADBDA", selectColor3name: "ベビーピンク",
            selectColor4: "#E73C84", selectColor4name: "ローザ", // スキャパレッリ
            selectColor5: "#EB6E9F", selectColor5name: "チェリーピンク",
            selectColor6: "#DBC2C2", selectColor6name: "パステルピンク",
        }
    };

    let isHovered = false;
    var palette = 1;
    let isAnimating = false; // アニメーション状態を管理するフラグ

    colorButtons.forEach(button => {                                // 原色
        button.addEventListener("mouseover", function() {           // 原色マウスオーバー
            if (isAnimating) return;

            let colorClass = button.classList.value.split(' ').find(cls => cls.startsWith('color-'));

            if (colorData[colorClass]) {
                const data = colorData[colorClass];
                const titleHTML = `<p class="${data.titleClass}">${data.titleText}</p>`;
                const descriptionHTML = data.descriptionTexts.map(text => `<p class="${data.descriptionClass}">${text}</p>`).join('');

                wordContent.innerHTML = titleHTML + descriptionHTML;
                wordCircle.style.backgroundColor = data.backgroundColor;

                if (palette == 1) {
                    wordCircle.style.display = "block";
                    wordCircle.style.opacity = 1;
                    wordCircle.style.animation = "fadeDownAnime 0.3s forwards";
                    
                    isHovered = true;
                }
            } else {
                wordContent.innerHTML = ''; // 見つからない場合は空にする
            }
        });

        // ボタンからマウスが離れた際の処理（アニメーションを追加）
        button.addEventListener("mouseout", function() {            // 原色マウスアウト
            if (isAnimating) return;
            isHovered = false;
            // word-circleを非表示にする
            wordCircle.style.animation = "fadeDownAnime-out 0.3s forwards";
            // 一定時間後に非表示にする
            setTimeout(() => {
                if (!isHovered) {
                    wordContent.innerHTML = ''; // 内容を空にする
                    wordCircle.style.display = "none";
                }
            }, 300); // アニメーション時間と同じに合わせる
        });

        button.addEventListener("click", function() {               // 原色クリック

            if (isAnimating) return;

            // calculateRotation();

            isAnimating = true;
            if (palette == 1) {
                wordCircle.style.animation = "fadeout-ws 1s forwards";
            }

            let colorClass = button.classList.value.split(' ').find(cls => cls.startsWith('color-'));
            currentSelectColor = colorClass;
            //console.log(currentSelectColor);

            const data = colorData[colorClass];
            document.getElementById('select-color1').style.backgroundColor = `${data.selectColor1}`;
            document.getElementById('select-color2').style.backgroundColor = `${data.selectColor2}`;
            document.getElementById('select-color3').style.backgroundColor = `${data.selectColor3}`;
            document.getElementById('select-color4').style.backgroundColor = `${data.selectColor4}`;
            document.getElementById('select-color5').style.backgroundColor = `${data.selectColor5}`;
            document.getElementById('select-color6').style.backgroundColor = `${data.selectColor6}`;
            
            if (
                colorClass == 'color-1' || 
                colorClass == 'color-2' || 
                colorClass == 'color-7' || 
                colorClass == 'color-8' ||
                colorClass == 'color-10'
            ) {
                colorPalette.style.backgroundColor = 'beige';
            }else {
                colorPalette.style.backgroundColor = 'rgb(50, 50, 50)';
            }

            //console.log(palette);
            wordContent.innerHTML = ''; // 内容を空にする
            wordCircle.style.display = "none";
    
            yajirusi.style.opacity = 1;
            yajirusi.style.animation = "fadein 1s forwards"; // アニメーションを無効にする
            colorPalette.style.animation = "fadein 1s forwards";
    
            palette = 2; // パレット番号を2(上層)にする
    
            isAnimating = false;
        });
    });

    const selectColors = document.querySelectorAll(".select-color");
    const colorName = document.getElementById('color-name');
    const selectColorName = document.querySelector(".select-color-name");
    
    selectColors.forEach(selectColor => {                             // 詳細カラー

        selectColor.addEventListener("mouseover", function() {        // 詳細カラーマウスオーバー
            if (palette == 1) return;
            let data = colorData[currentSelectColor];

            let id = this.id;
            let colorNameHTML = "";

            switch (id) {
                case "select-color1":
                    colorNameHTML = data.selectColor1name;
                    break;
                case "select-color2":
                    colorNameHTML = data.selectColor2name;
                    break;
                case "select-color3":
                    colorNameHTML = data.selectColor3name;
                    break;
                case "select-color4":
                    colorNameHTML = data.selectColor4name;
                    break;
                case "select-color5":
                    colorNameHTML = data.selectColor5name;
                    break;
                case "select-color6":
                    colorNameHTML = data.selectColor6name;
                    break;
                default:
                    colorNameHTML = "";
            }

            // console.log(colorNameHTML);
            selectColorName.innerHTML = colorNameHTML;
            colorName.style.animation = `fadein-from-left 0.3s forwards`;
        });
    
        selectColor.addEventListener("mouseout", function() {           // 詳細カラーマウスアウト
            if (palette == 1) return;
            colorName.style.animation = `fadeout-to-right 0.3s forwards`;
        });

        selectColor.addEventListener("click", function() {              // 詳細カラークリック
            if (palette == 1) return;
            let data = colorData[currentSelectColor];

            let id = this.id;
            let currerntSelectColorDetail = "";

            switch (id) {                                  //押した色のカラーコードを取得
                case "select-color1":
                    colorBackground = data.selectColor1;
                    currerntSelectColorDetail = data.selectColor1;
                    currentSelectColorName = data.selectColor1name;
                    break;
                case "select-color2":
                    colorBackground = data.selectColor2;
                    currerntSelectColorDetail = data.selectColor2;
                    currentSelectColorName = data.selectColor2name;
                    break;
                case "select-color3":
                    colorBackground = data.selectColor3;
                    currerntSelectColorDetail = data.selectColor3;
                    currentSelectColorName = data.selectColor3name;
                    break;
                case "select-color4":
                    colorBackground = data.selectColor4;
                    currerntSelectColorDetail = data.selectColor4;
                    currentSelectColorName = data.selectColor4name;
                    break;
                case "select-color5":
                    colorBackground = data.selectColor5;
                    currerntSelectColorDetail = data.selectColor5;
                    currentSelectColorName = data.selectColor5name;
                    break;
                case "select-color6":
                    colorBackground = data.selectColor6;
                    currerntSelectColorDetail = data.selectColor6;
                    currentSelectColorName = data.selectColor6name;
                    break;
                default:
                    colorBackground = "";
            }

            // 色のコードからIDを取得
            let colorId = getColorId(currerntSelectColorDetail);

            // 色のIDから似合う色を取得し配列に格納
            let currentSimilarColors = getSimilarColors(colorId);

            matchingColor1.style.backgroundColor = currentSimilarColors[0];
            matchingColor2.style.backgroundColor = currentSimilarColors[1];
            matchingColor3.style.backgroundColor = currentSimilarColors[2];
            matchingColor4.style.backgroundColor = currentSimilarColors[3];
            matchingColor5.style.backgroundColor = currentSimilarColors[4];
            matchingColor6.style.backgroundColor = currentSimilarColors[5];

            if (selectParts == 1) {
                document.getElementById('shirt').setAttribute('fill', currerntSelectColorDetail);
                document.getElementById("current-shirts-name").innerHTML = currentSelectColorName;
                topParticle();
            } else {
                document.getElementById('skirt').setAttribute('fill', currerntSelectColorDetail);
                document.getElementById("current-skirts-name").innerHTML = currentSelectColorName;
                bottomParticle();
            }
            getCurrentColor();
        });
    });

    yajirusi.addEventListener("click", function() {
        yajirusi.style.animation = "fadeout 0.5s forwards";
        colorPalette.style.animation = "fadeout 0.5s forwards";
        palette = 1;
    });

    const suggestColors = document.querySelectorAll(".matching-colors"); //提案カラー
    suggestColors.forEach(suggestColor => {

        suggestColor.addEventListener("click", function() {

            const backgroundColor = window.getComputedStyle(this).backgroundColor;
            let currentSuggestColorHex = rgbToHex(backgroundColor);
            //console.log(currentSuggestColorHex);
            let currentSuggestColorName = colorCodeToName(currentSuggestColorHex);

            if (selectParts == 1) {
                document.getElementById('skirt').setAttribute('fill', currentSuggestColorHex);
                document.getElementById("current-skirts-name").innerHTML = currentSuggestColorName;
                bottomParticle();
            }else{
                document.getElementById('shirt').setAttribute('fill', currentSuggestColorHex);
                document.getElementById("current-shirts-name").innerHTML = currentSuggestColorName;
                topParticle();
            }
            getCurrentColor();
        });
    });
});

document.getElementById('colorPicker').addEventListener('input', function() {
    const color = this.value;
    document.getElementById('shirt').setAttribute('fill', color);
    document.getElementById("current-shirts-name").innerHTML = color;
  });

document.getElementById('colorPicker2').addEventListener('input', function() {
    const color = this.value;
    document.getElementById('skirt').setAttribute('fill', color);
    document.getElementById("current-skirts-name").innerHTML = color;
  });

document.getElementById('colorPicker3').addEventListener('input', function() {
    const color = this.value;
    document.getElementById('shoes').setAttribute('fill', color);
});

function changeShoesColor(color) {      // 靴の色ボタン押した時の処理
    document.getElementById('shoes').setAttribute('fill', color);
    document.getElementById('colorPicker3').value = color;
}

document.querySelectorAll('.shoes-colors').forEach(button => {
    button.addEventListener('click', () => {
        const color = button.getAttribute('data-color');
        changeShoesColor(color);
    });
});

function clickShirtsLogo() {
    selectParts = 1;
    document.getElementById("bottoms-logo").src = "./docs/img/bottoms-logo.png";
    document.getElementById("shirts-logo").src = "./docs/img/shirts-logo-selected.png";
}

function clickBottomsLogo() {
    selectParts = 2;
    document.getElementById("bottoms-logo").src = "./docs/img/bottoms-logo-selected.png";
    document.getElementById("shirts-logo").src = "./docs/img/shirts-logo.png";
}

const shirt = document.getElementById('shirt');
const skirt = document.getElementById('skirt');

function changeColor() {
    // シャツとスカートの現在の色を取得
    const shirtColor = shirt.getAttribute('fill');
    const skirtColor = skirt.getAttribute('fill');

    // シャツとスカートの色を交換
    shirt.setAttribute('fill', skirtColor);
    skirt.setAttribute('fill', shirtColor);

    // current-shirts-nameとcurrent-skirts-nameのテキストを取得
    const shirtNameElement = document.getElementById("current-shirts-name");
    const skirtNameElement = document.getElementById("current-skirts-name");
    const shirtName = shirtNameElement.innerHTML;
    const skirtName = skirtNameElement.innerHTML;

    // テキストを交換
    shirtNameElement.innerHTML = skirtName;
    skirtNameElement.innerHTML = shirtName;

    getCurrentColor();

    if (selectParts == 1) {
        clickBottomsLogo();
    } else {
        clickShirtsLogo();
    }

    topParticle();
    bottomParticle();
}

function getCurrentColor() {
    const shirtColor = shirt.getAttribute('fill');
    const skirtColor = skirt.getAttribute('fill');

    console.log(`シャツの色：${shirtColor}　スカートの色：${skirtColor}`);

    document.getElementById("colorPicker").value = shirtColor;
    document.getElementById("colorPicker2").value = skirtColor;
}

function getSimilarColors(colorId) {
    const index = colorId - 1;
    let currentSimilarColors = [];

    if (index >= 0 && index < similarColors.length) {
        currentSimilarColors = similarColors[index];
    } else {
        return []; // エラー処理：範囲外の場合は空の配列を返す
    }

    return currentSimilarColors.map(id => {
        // colorIdMap から対応するカラーコードを取得する
        for (let colorCode in colorIdMap) {
            if (colorIdMap[colorCode] === id) {
                return colorCode;
            }
        }
        return null; // 見つからなかった場合は null を返す（実際の処理ではエラーハンドリングが必要）
    }).filter(code => code !== null); // null をフィルタリングする（エラーハンドリングとして）
}

function getColorId(colorCode) {
    return colorIdMap[colorCode] || null; // 該当する色がない場合はnullを返す
}

function colorCodeToName(colorCode) {
    return colorNameMap[colorCode] || "不明なカラーコード";
}

function rgbToHex(rgbString) {
    // 正規表現でrgb(数字, 数字, 数字)の形式を抽出
    const result = rgbString.match(/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/);
    
    // 数字の部分が抽出できなかった場合はnullを返す
    if (!result) {
        return null;
    }

    // 各色成分を16進数に変換し、大文字にする
    const r = parseInt(result[1], 10).toString(16).padStart(2, '0').toUpperCase();
    const g = parseInt(result[2], 10).toString(16).padStart(2, '0').toUpperCase();
    const b = parseInt(result[3], 10).toString(16).padStart(2, '0').toUpperCase();

    // 16進数形式のカラーコードを返す
    return `#${r}${g}${b}`;
}

function topParticle(){
    const sparkleContainer = document.getElementById('sparkle-container');
    const buttonRect = document.getElementById('sparkle-button').getBoundingClientRect();
    const buttonX = buttonRect.left + buttonRect.width / 2;
    const buttonY = buttonRect.top + buttonRect.height / 2;

    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 150; // 拡散範囲を大きく設定
        const x = distance * Math.cos(angle);
        const y = distance * Math.sin(angle);
        const size = Math.random() * 10 + 5; // 大きさをランダムに設定
        sparkle.style.left = `${buttonX}px`;
        sparkle.style.top = `${buttonY}px`;
        sparkle.style.setProperty('--x', `${x}px`);
        sparkle.style.setProperty('--y', `${y}px`);
        sparkle.style.setProperty('--size', `${size}px`);
        sparkleContainer.appendChild(sparkle);

        // 0.5秒後にパーティクルを削除
        setTimeout(() => {
            sparkleContainer.removeChild(sparkle);
        }, 500);
    }
};

function bottomParticle(){
    const sparkleContainer = document.getElementById('sparkle-container2');
    const buttonRect = document.getElementById('sparkle-button2').getBoundingClientRect();
    const buttonX = buttonRect.left + buttonRect.width / 2;
    const buttonY = buttonRect.top + buttonRect.height / 2;

    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 150; // 拡散範囲を大きく設定
        const x = distance * Math.cos(angle);
        const y = distance * Math.sin(angle);
        const size = Math.random() * 10 + 5; // 大きさをランダムに設定
        sparkle.style.left = `${buttonX}px`;
        sparkle.style.top = `${buttonY}px`;
        sparkle.style.setProperty('--x', `${x}px`);
        sparkle.style.setProperty('--y', `${y}px`);
        sparkle.style.setProperty('--size', `${size}px`);
        sparkleContainer.appendChild(sparkle);

        // 0.5秒後にパーティクルを削除
        setTimeout(() => {
            sparkleContainer.removeChild(sparkle);
        }, 500);
    }
};

let bgmPlay = false;
const bgm = document.getElementById('bgm');
const playButton = document.getElementById('play-button');

function bgmPlayOrPause() {

    if (bgmPlay == false) {
        bgm.play();
        bgmPlay = true;
        playButton.src="./docs/img/pause.png";
    } else {
        bgm.pause();
        bgmPlay = false;
        playButton.src="./docs/img/play.png";
    }
}
