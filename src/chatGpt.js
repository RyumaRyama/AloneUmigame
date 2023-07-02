const URL = 'https://api.openai.com/v1/chat/completions';

const PostChatGPT = (submitText, questionText, answerText, umigameDocument) => {
  // ChatGPTへの送信内容
  const data = {
    'model': 'gpt-3.5-turbo',
    'messages': [
      {
        'role': 'user',
        'content': `
          あなたは「はい」「いいえ」「関係ないです」の返答しか許されません。
          その条件のもと、私と水平思考ゲームで遊んでもらいます。あなたがゲームマスターで、問題の用意と質問はこちらがします。
          これから記載する「問題:....」と「答え:...」から状況を理解し、私の質問が状況に合う場合は「はい」、合わない場合は「いいえ」、全く見当違いの場合は「関係ないです」と答えてください。
          ただし、次の場合は例外として上記3つの返答はせず、以下の返答をお願いします。
          - 私の質問が答えの内容と同じであると判断した場合、「正解です！」と教えてください。
          - 私が質問せず「ギブアップ」の旨を伝えた場合、状況の説明を行なってください。
        `
      },
      {
        'role': 'assistant',
        'content': `
          了解しました。水平思考ゲームで遊びましょう。私がゲームマスターとなり、あなたが問題を考え、私に対して質問をしますね。質問が状況に合う場合は「はい」、合わない場合は「いいえ」、全く見当違いの場合は「関係ないです」と答えます。ただし、特定の条件に当てはまる場合は別の返答をします。それでは、ゲームを始めましょう。
          【ルールのおさらい】
          ・質問が状況に合う場合は「はい」、合わない場合は「いいえ」、全く見当違いの場合は「関係ないです」と答えます。
          ・私の答えが質問と同じであれば「正解です！」と教えます。
          ・ギブアップの場合は、状況の説明を行います。
          それでは、最初の問題をお願いします。
        `
      },
      {
        'role': 'user',
        'content': `
          「問題:${questionText}」
          「答え:${answerText}」
        `
      },
      {
        'role': 'assistant',
        'content': '問題と答えから状況を理解しました。質問をお願いします。'
      },
      { 'role': 'user', 'content': submitText },
    ],
  }

  // post実行
  const xhr = new XMLHttpRequest();
  // 返答があった場合のコールバック
  xhr.onreadystatechange = () => {
    if (xhr.readyState != 4) return;
    const responseText =  JSON.parse(xhr.response)['choices'][0]['message']['content']

    // チャット欄
    const chatContents = umigameDocument.getElementById('chat-contents');
    
    // チャット生成
    const responseTextElement = document.createElement('div');
    responseTextElement.className = 'text';
    const responseContent = document.createElement('div');
    responseContent.className = 'chat-gpt';
    responseContent.appendChild(responseTextElement);
    const responseContainer = document.createElement('div');
    responseContainer.className = 'chat-gpt-container';
    responseContainer.appendChild(responseContent);
    chatContents.prepend(responseContainer);

    responseTextElement.innerHTML = responseText;
  }
  xhr.open('POST', URL);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Authorization', `Bearer ${CHAT_GPT_API_KEY}`);
  xhr.send(JSON.stringify(data));
};
