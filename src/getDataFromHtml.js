const GetQuestionText = () => {
  const question_text_element = document.querySelectorAll('[class=mondai_text]')[0];
  return question_text_element.textContent;
};

const GetAnswerText = () => {
  const answer_text_element = document.getElementsByClassName('mondai_text padding_b50')[0];
  return answer_text_element.textContent;
};
