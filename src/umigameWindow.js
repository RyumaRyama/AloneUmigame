// ウミガメのスープで遊ぶためのウィンドウを開く
const OpenUmigameWindow = () => {
  const windowFeatures = 'width=500,height=600';
  const umigameWindow = window.open('', 'AloneUmigame', windowFeatures);
  SetUmigameWindowElement(umigameWindow.document);
};

// ウィンドウに対してUIなどを整える
const SetUmigameWindowElement = (document) => {
  document.head.innerHTML = `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />`;
  document.title = 'AloneUmigame';

  // style定義
  const style = document.createElement('style');
  style.innerHTML = umigameWindowStyle;
  document.head.appendChild(style);

  // HTML本体
  document.body.innerHTML = umigameWindowHtml;
};
