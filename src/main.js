// サイトから問題情報を取得
const questionText = GetQuestionText();
const answerText = GetAnswerText();

// ウミガメのスープで遊ぶためのウィンドウ表示
const umigameWindow = OpenUmigameWindow(questionText, answerText);
SetQuestion(umigameWindow, questionText);
