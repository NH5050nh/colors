window.onload = function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 300, 300);
};

function AnswerColor() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.font = "25px serif";
  ctx.textBaseline = "center";
  ctx.textAlign = "center";

  if (color == "#f4b3c2") {
    ctx.fillStyle = "#000000";
    ctx.fillText("鴇色(ときいろ)", 150, 150);
  } else if (color == "#e95464") {
    ctx.fillText("韓紅色(からくれないいろ)", 150, 150);
  } else if (color == "#9e3d3e") {
    ctx.fillText("蘇芳(すおう)", 150, 150);
  } else if (color == "#8b4239") {
    ctx.fillText("鳶色(とびいろ)", 150, 150);
  } else if (color == "#814336") {
    ctx.fillText("海老茶(えびちゃ)", 150, 150);
  } else if (color == "#8f2d12") {
    ctx.fillText("弁柄色(べんがらいろ)", 150, 150);
  } else if (color == "#ee7948") {
    ctx.fillText("黄丹(おうに)", 150, 150);
  } else if (color == "#965036") {
    ctx.fillText("桧皮色(ひわだいろ)", 150, 150);
  } else if (color == "#bb541f") {
    ctx.fillText("代赭(たいしゃ)", 150, 150);
  } else if (color == "#f6ad48") {
    ctx.fillStyle = "#000000";
    ctx.fillText("柑子色(こうじいろ)", 150, 150);
  } else if (color == "#bf7834") {
    ctx.fillText("琥珀色(こはくいろ)", 150, 150);
  } else if (color == "#917347") {
    ctx.fillText("朽葉色(くちばいろ)", 150, 150);
  } else if (color == "#fabf13") {
    ctx.fillStyle = "#000000";
    ctx.fillText("鬱金色(うこんいろ)", 150, 150);
  } else if (color == "#f5e56b") {
    ctx.fillStyle = "#000000";
    ctx.fillText("刈安色(かりやすいろ)", 150, 150);
  } else if (color == "#fef263") {
    ctx.fillStyle = "#000000";
    ctx.fillText("黄蘗色(きはだいろ)", 150, 150);
  } else if (color == "#726d3f") {
    ctx.fillText("海松色(みるいろ)", 150, 150);
  } else if (color == "#d7cf3a") {
    ctx.fillStyle = "#000000";
    ctx.fillText("鶸色(ひわいろ)", 150, 150);
  } else if (color == "#007c45") {
    ctx.fillText("常盤色(ときわいろ)", 150, 150);
  } else if (color == "#4f8a5d") {
    ctx.fillText("緑青色(ろくしょういろ)", 150, 150);
  } else if (color == "#005242") {
    ctx.fillText("鉄色(てついろ)", 150, 150);
  } else if (color == "#64bcc7") {
    ctx.fillStyle = "#000000";
    ctx.fillText("新橋色(しんばしいろ)", 150, 150);
  } else if (color == "#007d92") {
    ctx.fillText("納戸色(なんどいろ)", 150, 150);
  } else if (color == "#a2d7dd") {
    ctx.fillStyle = "#000000";
    ctx.fillText("甕覗き(かめのぞき)", 150, 150);
  } else if (color == "#2980af") {
    ctx.fillText("縹色(はなだいろ)", 150, 150);
  } else if (color == "#bbb7da") {
    ctx.fillStyle = "#000000";
    ctx.fillText("藤色(ふじいろ)", 150, 150);
  } else if (color == "#734e95") {
    ctx.fillText("江戸紫(えどむらさき)", 150, 150);
  } else if (color == "#8C6589") {
    ctx.fillText("古代紫(こだいむらさき)", 150, 150);
  } else if (color == "#afafb0") {
    ctx.fillStyle = "#000000";
    ctx.fillText("銀鼠(ぎんねず)", 150, 150);
  } else if (color == "#a99e93") {
    ctx.fillText("茶鼠(ちゃねずみ)", 150, 150);
  } else if (color == "#7b8174") {
    ctx.fillText("利休鼠(りきゅうねずみ)", 150, 150);
  } else if (color == "#6b5146") {
    ctx.fillText("煤竹色(すすたけいろ)", 150, 150);
  } else if (color == "#f29c9f") {
    ctx.fillText("ローズピンク", 150, 150);
  } else if (color == "#561620") {
    ctx.fillText("バーガンディー", 150, 150);
  } else if (color == "#da8d93") {
    ctx.fillText("オールドローズ", 150, 150);
  } else if (color == "#e9474d") {
    ctx.fillText("ポピーレッド", 150, 150);
  } else if (color == "#6a1816") {
    ctx.fillText("マルーン", 150, 150);
  } else if (color == "#be6d55") {
    ctx.fillText("テラコッタ", 150, 150);
  } else if (color == "#b25532") {
    ctx.fillText("バーントシェンナ", 150, 150);
  } else if (color == "#d98032") {
    ctx.fillText("ローシェンナ", 150, 150);
  } else if (color == "#c1813f") {
    ctx.fillText("タン", 150, 150);
  } else if (color == "#f8eacf") {
    ctx.fillStyle = "#000000";
    ctx.fillText("エクルベイジュ", 150, 150);
  } else if (color == "#f8b856") {
    ctx.fillStyle = "#000000";
    ctx.fillText("ゴールデンイエロー", 150, 150);
  } else if (color == "#c28953") {
    ctx.fillText("アンバー", 150, 150);
  } else if (color == "#7a5e3d") {
    ctx.fillText("バーントアンバー", 150, 150);
  } else if (color == "#916f24") {
    ctx.fillText("ローアンバー", 150, 150);
  } else if (color == "#fdd75c") {
    ctx.fillStyle = "#000000";
    ctx.fillText("ネープルスイエロー", 150, 150);
  } else if (color == "#ffdc00") {
    ctx.fillStyle = "#000000";
    ctx.fillText("ジョンブリアン", 150, 150);
  } else if (color == "#d9e367") {
    ctx.fillStyle = "#000000";
    ctx.fillText("シャトルーズグリーン", 150, 150);
  } else if (color == "#9dc04c") {
    ctx.fillText("リーフグリーン", 150, 150);
  } else if (color == "#7b8d41") {
    ctx.fillText("グラスグリーン", 150, 150);
  } else if (color == "#a2cc89") {
    ctx.fillStyle = "#000000";
    ctx.fillText("アップルグリーン", 150, 150);
  } else if (color == "#98ce97") {
    ctx.fillStyle = "#000000";
    ctx.fillText("ミントグリーン", 150, 150);
  } else if (color == "#009854") {
    ctx.fillText("マラカイトグリーン", 150, 150);
  } else if (color == "#005635") {
    ctx.fillText("ボトルグリーン", 150, 150);
  } else if (color == "#00a496") {
    ctx.fillText("ピーコックグリーン", 150, 150);
  } else if (color == "#259f94") {
    ctx.fillText("ナイルブルー", 150, 150);
  } else if (color == "#008db7") {
    ctx.fillText("セルリアンブルー", 150, 150);
  } else if (color == "#3a8daa") {
    ctx.fillText("サックスブルー", 150, 150);
  } else if (color == "#001d42") {
    ctx.fillText("ミッドナイトブルー", 150, 150);
  } else if (color == "#8e8bc2") {
    ctx.fillText("ウイスタリア", 150, 150);
  } else if (color == "#d1bada") {
    ctx.fillStyle = "#000000";
    ctx.fillText("ライラック", 150, 150);
  } else if (color == "#636062") {
    ctx.fillText("スレートグレイ", 150, 150);
  } else {
    ctx.fillText("ランプブラック", 150, 150);
  }
}

function NextColor() {
  window.location.reload();
}
