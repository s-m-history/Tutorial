const quiz = [
	{
		question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
		answers: [
			'スーパーファミコン',
			'プレイステーション２',
			'ニンテンドースイッチ',
			'ニンテンドーＤＳ',
		],
		correct: 'ニンテンドーＤＳ'
	}, {
		question: '任天堂のゲームはどれ？',
		answers: [
			'ファイナルファンタジー',
			'ソニック',
			'ELDEN RING',
			'ゼルダの伝説',
		],
		correct: 'ゼルダの伝説'
	}, {
		question: 'デビルメイクライの主人公ダンテのイメージカラーは？',
		answers: [
			'青',
			'赤',
			'黒',
			'白',
		],
		correct: '赤'
	}
];

const quizLength = quiz.length;
const $btn = document.getElementsByTagName('button');
const btnLength = $btn.length;
let quizIndex = 0;
let score = 0;
//問題文と選択肢を定義する関数
const quizSetup = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let btnIndex = 0;
 
  while(btnIndex < btnLength){
    $btn[btnIndex].textContent = quiz[quizIndex].answers[btnIndex];
    btnIndex++;
  };
};
quizSetup();

//問題の正誤判定のひな形
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent) {
      window.alert('正解！');
      score++;
    }else{
      window.alert('間違い！');
    };
    //次の問題へ移行
    quizIndex++;
    //問題の終了判定
    if(quizIndex < quizLength) {
      quizSetup();
    } else {
      window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！')
    };
};
//ボタンをクリックしたら正誤判定
let handleIndex = 0;
  while (handleIndex < btnLength){
    $btn[handleIndex].addEventListener('click', (e) => {
      console.log(e);
      clickHandler(e);
    });
    handleIndex++;
  };
