// ウミガメのスープで遊ぶためのウィンドウを開く
const OpenUmigameWindow = (questionText, answerText) => {
  const windowFeatures = 'width=500,height=600';
  const umigameWindow = window.open('', 'AloneUmigame', windowFeatures);
  SetUmigameWindowElement(umigameWindow.document);
  SetSubmit(umigameWindow.document, questionText, answerText);
  return umigameWindow;
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

// 送信ボタンの実装
const SetSubmit = (document, questionText, answerText) => {
  // input系
  const submitTextElement = document.getElementById('answer-input-text');
  const submitButtonElement = document.getElementById('answer-input-button');

  // チャット欄
  const chatContents = document.getElementById('chat-contents');

  // onClick
  submitButtonElement.addEventListener('click', (e) => {
    // チャット生成
    const submitText = document.createElement('div');
    submitText.className = 'text';
    const submitContent = document.createElement('div');
    submitContent.className = 'chat-user';
    submitContent.appendChild(submitText);
    const submitContainer = document.createElement('div');
    submitContainer.className = 'chat-user-container';
    submitContainer.appendChild(submitContent);
    chatContents.prepend(submitContainer);

    submitText.innerHTML = submitTextElement.value;

    PostChatGPT(submitTextElement.value, questionText, answerText, document);
    submitTextElement.value = '';
  });
}

// 問題文の埋め込み
const SetQuestion = (umigameWindow, questionText) => {
  element = umigameWindow.document.getElementById('question');
  element.innerHTML = questionText;
};
