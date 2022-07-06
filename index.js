const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const data = [
  {
    id: 1,
    name: "あ",
    pronounce: "a",
  },
  {
    id: 2,
    name: "い",
    pronounce: "i",
  },
  {
    id: 3,
    name: "う",
    pronounce: "u",
  },
  {
    id: 4,
    name: "え",
    pronounce: "e",
  },
  {
    id: 5,
    name: "お",
    pronounce: "o",
  },
  {
    id: 6,
    name: "か",
    pronounce: "ka",
  },
  {
    id: 7,
    name: "き",
    pronounce: "ki",
  },
  {
    id: 8,
    name: "く",
    pronounce: "ku",
  },
  {
    id: 9,
    name: "け",
    pronounce: "ke",
  },
  {
    id: 10,
    name: "こ",
    pronounce: "ko",
  },
  {
    id: 11,
    name: "さ",
    pronounce: "sa",
  },
  {
    id: 12,
    name: "し",
    pronounce: "shi",
  },
  {
    id: 13,
    name: "す",
    pronounce: "su",
  },
  {
    id: 14,
    name: "せ",
    pronounce: "se",
  },
  {
    id: 15,
    name: "そ",
    pronounce: "so",
  },
  {
    id: 16,
    name: "た",
    pronounce: "ta",
  },
  {
    id: 17,
    name: "ち",
    pronounce: "chi",
  },
  {
    id: 18,
    name: "つ",
    pronounce: "tsu",
  },
  {
    id: 19,
    name: "て",
    pronounce: "te",
  },
  {
    id: 20,
    name: "と",
    pronounce: "to",
  },
  {
    id: 21,
    name: "な",
    pronounce: "na",
  },
  {
    id: 22,
    name: "に",
    pronounce: "ni",
  },
  {
    id: 23,
    name: "ぬ",
    pronounce: "nu",
  },
  {
    id: 24,
    name: "ね",
    pronounce: "ne",
  },
  {
    id: 25,
    name: "の",
    pronounce: "no",
  },
  {
    id: 26,
    name: "は",
    pronounce: "ha",
  },
  {
    id: 27,
    name: "ひ",
    pronounce: "hi",
  },
  {
    id: 28,
    name: "ふ",
    pronounce: "fu",
  },
  {
    id: 29,
    name: "へ",
    pronounce: "he",
  },
  {
    id: 30,
    name: "ほ",
    pronounce: "ho",
  },
  {
    id: 31,
    name: "ま",
    pronounce: "ma",
  },
  {
    id: 32,
    name: "み",
    pronounce: "mi",
  },
  {
    id: 33,
    name: "む",
    pronounce: "mu",
  },
  {
    id: 34,
    name: "め",
    pronounce: "me",
  },
  {
    id: 35,
    name: "も",
    pronounce: "mo",
  },
  {
    id: 36,
    name: "ら",
    pronounce: "ra",
  },
  {
    id: 37,
    name: "り",
    pronounce: "ri",
  },
  {
    id: 38,
    name: "る",
    pronounce: "ru",
  },
  {
    id: 39,
    name: "れ",
    pronounce: "re",
  },
  {
    id: 40,
    name: "ろ",
    pronounce: "ro",
  },
  {
    id: 41,
    name: "や",
    pronounce: "ya",
  },
  {
    id: 42,
    name: "ゆ",
    pronounce: "yu",
  },
  {
    id: 43,
    name: "よ",
    pronounce: "yo",
  },
  {
    id: 44,
    name: "わ",
    pronounce: "wa",
  },
  {
    id: 45,
    name: "を",
    pronounce: "wo",
  },
  {
    id: 46,
    name: "ん",
    pronounce: "n",
  },
  {
    id: 47,
    name: "が",
    pronounce: "ga",
  },
  {
    id: 48,
    name: "ぎ",
    pronounce: "gi",
  },
  {
    id: 49,
    name: "ぐ",
    pronounce: "gu",
  },
  {
    id: 50,
    name: "げ",
    pronounce: "ge",
  },
  {
    id: 51,
    name: "ご",
    pronounce: "go",
  },
  {
    id: 52,
    name: "ざ",
    pronounce: "za",
  },
  {
    id: 53,
    name: "じ",
    pronounce: "ji",
  },
  {
    id: 54,
    name: "ず",
    pronounce: "zu",
  },
  {
    id: 55,
    name: "ぜ",
    pronounce: "ze",
  },
  {
    id: 56,
    name: "ぞ",
    pronounce: "zo",
  },
  {
    id: 57,
    name: "だ",
    pronounce: "da",
  },
  {
    id: 58,
    name: "ぢ",
    pronounce: "ji",
  },
  {
    id: 59,
    name: "づ",
    pronounce: "zu",
  },
  {
    id: 60,
    name: "で",
    pronounce: "de",
  },
  {
    id: 61,
    name: "ど",
    pronounce: "do",
  },
  {
    id: 62,
    name: "ば",
    pronounce: "ba",
  },
  {
    id: 63,
    name: "び",
    pronounce: "bi",
  },
  {
    id: 64,
    name: "ぶ",
    pronounce: "bu",
  },
  {
    id: 65,
    name: "べ",
    pronounce: "be",
  },
  {
    id: 66,
    name: "ぼ",
    pronounce: "bo",
  },
  {
    id: 67,
    name: "ぱ",
    pronounce: "pa",
  },
  {
    id: 68,
    name: "ぴ",
    pronounce: "pi",
  },
  {
    id: 69,
    name: "ぷ",
    pronounce: "pu",
  },
  {
    id: 70,
    name: "ぺ",
    pronounce: "pe",
  },
  {
    id: 71,
    name: "ぽ",
    pronounce: "po",
  },
  {
    id: 72,
    name: "きゃ",
    pronounce: "kya",
  },
  {
    id: 73,
    name: "きゅ",
    pronounce: "kyu",
  },
  {
    id: 73,
    name: "きょ",
    pronounce: "kyo",
  },
  {
    id: 74,
    name: "しゃ",
    pronounce: "sha",
  },
  {
    id: 75,
    name: "しゅ",
    pronounce: "shu",
  },
  {
    id: 76,
    name: "しょ",
    pronounce: "sho",
  },
  {
    id: 77,
    name: "ちゃ",
    pronounce: "cha",
  },
  {
    id: 78,
    name: "ちゅ",
    pronounce: "chu",
  },
  {
    id: 79,
    name: "ちょ",
    pronounce: "cho",
  },
  {
    id: 80,
    name: "にゃ",
    pronounce: "nya",
  },
  {
    id: 81,
    name: "にゅ",
    pronounce: "nyu",
  },
  {
    id: 82,
    name: "にょ",
    pronounce: "nyo",
  },
  {
    id: 83,
    name: "ひゃ",
    pronounce: "hya",
  },
  {
    id: 84,
    name: "ひゅ",
    pronounce: "hyu",
  },
  {
    id: 85,
    name: "ひょ",
    pronounce: "hyo",
  },
  {
    id: 86,
    name: "みゃ",
    pronounce: "mya",
  },
  {
    id: 87,
    name: "みゅ",
    pronounce: "myu",
  },
  {
    id: 88,
    name: "みょ",
    pronounce: "myo",
  },
  {
    id: 89,
    name: "りゃ",
    pronounce: "rya",
  },
  {
    id: 90,
    name: "りゅ",
    pronounce: "ryu",
  },
  {
    id: 91,
    name: "りょ",
    pronounce: "ryo",
  },
  {
    id: 92,
    name: "ぎゃ",
    pronounce: "gya",
  },
  {
    id: 93,
    name: "ぎゅ",
    pronounce: "gyu",
  },
  {
    id: 94,
    name: "ぎょ",
    pronounce: "gyo",
  },
  {
    id: 95,
    name: "じゃ",
    pronounce: "ja",
  },
  {
    id: 96,
    name: "じゅ",
    pronounce: "ju",
  },
  {
    id: 97,
    name: "じょ",
    pronounce: "jo",
  },
  {
    id: 98,
    name: "ぢゃ",
    pronounce: "ja",
  },
  {
    id: 99,
    name: "ぢゅ",
    pronounce: "ju",
  },
  {
    id: 100,
    name: "ぢょ",
    pronounce: "jo",
  },
  {
    id: 101,
    name: "びゃ",
    pronounce: "bya",
  },
  {
    id: 102,
    name: "びゅ",
    pronounce: "byu",
  },
  {
    id: 103,
    name: "びょ",
    pronounce: "byo",
  },
  {
    id: 104,
    name: "ぴゃ",
    pronounce: "pya",
  },
  {
    id: 105,
    name: "ぴゅ",
    pronounce: "pyu",
  },
  {
    id: 106,
    name: "ぴょ",
    pronounce: "pyo",
  },
  {
    id: 1,
    name: "ア",
    pronounce: "a",
  },
  {
    id: 2,
    name: "イ",
    pronounce: "i",
  },
  {
    id: 3,
    name: "ウ",
    pronounce: "u",
  },
  {
    id: 4,
    name: "エ",
    pronounce: "e",
  },
  {
    id: 5,
    name: "オ",
    pronounce: "o",
  },
  {
    id: 6,
    name: "カ",
    pronounce: "ka",
  },
  {
    id: 7,
    name: "キ",
    pronounce: "ki",
  },
  {
    id: 8,
    name: "ク",
    pronounce: "ku",
  },
  {
    id: 9,
    name: "ケ",
    pronounce: "ke",
  },
  {
    id: 10,
    name: "コ",
    pronounce: "ko",
  },
  {
    id: 11,
    name: "サ",
    pronounce: "sa",
  },
  {
    id: 12,
    name: "シ",
    pronounce: "shi",
  },
  {
    id: 13,
    name: "ス",
    pronounce: "su",
  },
  {
    id: 14,
    name: "セ",
    pronounce: "se",
  },
  {
    id: 15,
    name: "ソ",
    pronounce: "so",
  },
  {
    id: 16,
    name: "タ",
    pronounce: "ta",
  },
  {
    id: 17,
    name: "チ",
    pronounce: "chi",
  },
  {
    id: 18,
    name: "ス",
    pronounce: "su",
  },
  {
    id: 19,
    name: "セ",
    pronounce: "se",
  },
  {
    id: 20,
    name: "ソ",
    pronounce: "so",
  },
  {
    id: 21,
    name: "タ",
    pronounce: "ta",
  },
  {
    id: 22,
    name: "チ",
    pronounce: "chi",
  },
  {
    id: 23,
    name: "ツ",
    pronounce: "tsu",
  },
  {
    id: 24,
    name: "テ",
    pronounce: "te",
  },
  {
    id: 25,
    name: "ト",
    pronounce: "to",
  },
  {
    id: 26,
    name: "ナ",
    pronounce: "na",
  },
  {
    id: 27,
    name: "ニ",
    pronounce: "ni",
  },
  {
    id: 28,
    name: "ヌ",
    pronounce: "nu",
  },
  {
    id: 29,
    name: "ネ",
    pronounce: "ne",
  },
  {
    id: 30,
    name: "ノ",
    pronounce: "no",
  },
  {
    id: 31,
    name: "ハ",
    pronounce: "ha",
  },
  {
    id: 32,
    name: "ヒ",
    pronounce: "hi",
  },
  {
    id: 33,
    name: "フ",
    pronounce: "fu",
  },
  {
    id: 34,
    name: "ヘ",
    pronounce: "he",
  },
  {
    id: 35,
    name: "ホ",
    pronounce: "ho",
  },
  {
    id: 36,
    name: "マ",
    pronounce: "ma",
  },
  {
    id: 37,
    name: "ユ",
    pronounce: "yu",
  },
  {
    id: 38,
    name: "ヨ",
    pronounce: "yo",
  },
  {
    id: 39,
    name: "ラ",
    pronounce: "ra",
  },
  {
    id: 40,
    name: "リ",
    pronounce: "ri",
  },
  {
    id: 41,
    name: "ル",
    pronounce: "ru",
  },
  {
    id: 42,
    name: "レ",
    pronounce: "re",
  },
  {
    id: 43,
    name: "ロ",
    pronounce: "ro",
  },
  {
    id: 44,
    name: "ワ",
    pronounce: "wa",
  },
  {
    id: 45,
    name: "ヲ",
    pronounce: "wo",
  },
  {
    id: 46,
    name: "ン",
    pronounce: "n",
  },
  {
    id: 47,
    name: "ガ",
    pronounce: "ga",
  },
  {
    id: 48,
    name: "ギ",
    pronounce: "gi",
  },
  {
    id: 49,
    name: "グ",
    pronounce: "gu",
  },
  {
    id: 50,
    name: "ゲ",
    pronounce: "ge",
  },
  {
    id: 51,
    name: "ゴ",
    pronounce: "go",
  },
  {
    id: 52,
    name: "ザ",
    pronounce: "za",
  },
  {
    id: 53,
    name: "ジ",
    pronounce: "ji",
  },
  {
    id: 54,
    name: "ズ",
    pronounce: "zu",
  },
  {
    id: 55,
    name: "ゼ",
    pronounce: "ze",
  },
  {
    id: 56,
    name: "ゾ",
    pronounce: "zo",
  },
  {
    id: 57,
    name: "ダ",
    pronounce: "da",
  },
  {
    id: 58,
    name: "ヂ",
    pronounce: "ji",
  },
  {
    id: 59,
    name: "ヅ",
    pronounce: "zu",
  },
  {
    id: 60,
    name: "デ",
    pronounce: "de",
  },
  {
    id: 61,
    name: "ド",
    pronounce: "do",
  },
  {
    id: 62,
    name: "バ",
    pronounce: "ba",
  },
  {
    id: 63,
    name: "ビ",
    pronounce: "bi",
  },
  {
    id: 64,
    name: "ブ",
    pronounce: "bu",
  },
  {
    id: 65,
    name: "ベ",
    pronounce: "be",
  },
  {
    id: 66,
    name: "ボ",
    pronounce: "bo",
  },
  {
    id: 67,
    name: "パ",
    pronounce: "pa",
  },
  {
    id: 68,
    name: "ピ",
    pronounce: "pi",
  },
  {
    id: 69,
    name: "プ",
    pronounce: "pu",
  },
  {
    id: 70,
    name: "ペ",
    pronounce: "pe",
  },
  {
    id: 71,
    name: "ポ",
    pronounce: "po",
  },
  {
    id: 72,
    name: "キャ",
    pronounce: "kya",
  },
  {
    id: 73,
    name: "キュ",
    pronounce: "kyu",
  },
  {
    id: 74,
    name: "キョ",
    pronounce: "kyo",
  },
  {
    id: 75,
    name: "シャ",
    pronounce: "sha",
  },
  {
    id: 76,
    name: "シュ",
    pronounce: "shu",
  },
  {
    id: 77,
    name: "ショ",
    pronounce: "sho",
  },
  {
    id: 78,
    name: "チャ",
    pronounce: "cha",
  },
  {
    id: 79,
    name: "チュ",
    pronounce: "chu",
  },
  {
    id: 80,
    name: "チョ",
    pronounce: "cho",
  },
  {
    id: 81,
    name: "ニャ",
    pronounce: "nya",
  },
  {
    id: 82,
    name: "ニュ",
    pronounce: "nyu",
  },
  {
    id: 83,
    name: "ニョ",
    pronounce: "nyo",
  },
  {
    id: 84,
    name: "ヒャ",
    pronounce: "hya",
  },
  {
    id: 85,
    name: "ヒュ",
    pronounce: "hyu",
  },
  {
    id: 86,
    name: "ヒョ",
    pronounce: "hyo",
  },
  {
    id: 87,
    name: "ミャ",
    pronounce: "mya",
  },
  {
    id: 88,
    name: "ミュ",
    pronounce: "myu",
  },
  {
    id: 89,
    name: "ミョ",
    pronounce: "myo",
  },
  {
    id: 90,
    name: "リャ",
    pronounce: "rya",
  },
  {
    id: 91,
    name: "リュ",
    pronounce: "ryu",
  },
  {
    id: 92,
    name: "リョ",
    pronounce: "ryo",
  },
  {
    id: 93,
    name: "ギャ",
    pronounce: "gya",
  },
  {
    id: 94,
    name: "ギュ",
    pronounce: "gyu",
  },
  {
    id: 95,
    name: "ギョ",
    pronounce: "gyo",
  },
  {
    id: 96,
    name: "ジャ",
    pronounce: "ja",
  },
  {
    id: 97,
    name: "ジュ",
    pronounce: "ju",
  },
  {
    id: 98,
    name: "ジョ",
    pronounce: "jo",
  },
  {
    id: 99,
    name: "ヂャ",
    pronounce: "ja",
  },
  {
    id: 100,
    name: "ヂュ",
    pronounce: "ju",
  },
  {
    id: 101,
    name: "ヂョ",
    pronounce: "jo",
  },
  {
    id: 102,
    name: "ビャ",
    pronounce: "bya",
  },
  {
    id: 103,
    name: "ビュ",
    pronounce: "byu",
  },
  {
    id: 104,
    name: "ビョ",
    pronounce: "byo",
  },
  {
    id: 105,
    name: "ピャ",
    pronounce: "pya",
  },
  {
    id: 106,
    name: "ピュ",
    pronounce: "pyu",
  },
  {
    id: 107,
    name: "ピョ",
    pronounce: "pyo",
  },
];

app.get("/review-travel", function (req, res) {
  res.send(data);
});

app.listen(PORT);
