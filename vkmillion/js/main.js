VK.init({
    apiId: 4988237
});

function sendwallpost(m) {
	VK.api('wall.post', {message: m}, function(data) {

	});
}

var tests = [
	{ 
		q: 'Заморский дедушка оставил вам большое наследство. Что вы сделаете в первую очередь?',
		a1: 'Инвестирую в строительство завода минеральных удобрений в Туле.',
		a2: 'Куплю близким и родственникам кучу подарков.',
		a3: 'Куплю себе Феррари, пусть все завидуют.',
		img: 'uncle.png',
	},
	{ 
		q: 'Как на ваш взгляд можно выиграть в казино в рулетку?',
		a1: 'У меня есть схема - 7 раз подряд все ставить на "Зеро".',
		a2: 'Чтобы выигрывать нужно быть владельцем казино.',
		a3: 'Мне не везет и я не играю в азартные игры.',
		img: 'casino.png',
	},
	{ 
		q: 'Есть ли у вас вредные привычки?',
		a1: 'Курю, пью, ем "Доширак" и ругаюсь матом.',
		a2: 'Нет, я обладатель сибирского здоровья.',
		a3: 'Ну только если наркотики, а так нет...',
		img: 'barny.png',
	},
	{ 
		q: 'Часто ли вы даете деньги друзьям в долг?',
		a1: 'Таки часто и под проценты.',
		a2: 'Дружба дружбой, а деньги врозь.',
		a3: 'Всегда помогаю друзьям в трудную минуту.',
		img: 'jadn.png',
	},
	{ 
		q: 'Люди каких профессий имеют больше шансов стать миллионером?',
		a1: 'Творческие профессии (писатели, актеры, музыканты).',
		a2: 'Бизнесмены и предприниматели.',
		a3: 'Политики, врачи, адвокаты.',
		img: 'lenta.png',
	},
	{ 
		q: 'Как на ваш взгляд легче всего сколотить состояние?',
		a1: 'Пройти по всей карьерной лестнице и стать главным боссом.',
		a2: 'Выграть деньги в лотерее.',
		a3: 'Упорно идти к цели, развиваться и рисковать.',
		img: 'kopilka.png',
	},
	{ 
		q: 'Ваш возраст?',
		a1: 'Моложе 30 лет',
		a2: 'От 31 до 45 лет',
		a3: '46 и более',
		img: 'birns.jpg',
	},
	{ 
		q: 'Ваш средний доход в месяц?',
		a1: '0 - 40000 рублей.',
		a2: '41000 - 60000 рублей.',
		a3: '61000 рублей и более',
		img: 'coshel.png',
	},
]

var scores = [
	{
		s1: 2,
		s2: 1,
		s3: 3,
	},
	{
		s1: 3,
		s2: 1,
		s3: 2,
	},
	{
		s1: 2,
		s2: 1,
		s3: 3,
	},
	{
		s1: 3,
		s2: 2,
		s3: 1,
	},
	{
		s1: 3,
		s2: 1,
		s3: 2,
	},
	{
		s1: 2,
		s2: 3,
		s3: 1,
	},
	{
		s1: 1,
		s2: 2,
		s3: 3,
	},
	{
		s1: 3,
		s2: 2,
		s3: 1,
	},	
]

var result = [
	{
		text: 'У вас есть все шансы войти в список Forbes. Продолжайте идти к намеченной цели и у вас все получится.',
		ttl: 'Вы - будущий миллионер!',
		m: 'Рано или поздно я стану миллионером! Узнай, сможешь ли ты https://vk.com/app4988237_291368944'
	},
	{
		text: 'Вряд ли вы будете купаться в деньгах как Скрудж Макдак. Зарабатывание денег для вас - тяжелый труд. Стройте карьеру поэтапно и однажды на вашем столе появится кружка с надписью "BOSS"',
		ttl: 'Вы будете крупным боссом!',
		m: 'Возможно скоро я стану твоим боссом! Узнай на что ты способен https://vk.com/app4988237_291368944'
	},
	{
		text: 'Говорим прямо - стать миллионером вам будет сложно. Но не отчаивайтесь, всегда можно выгодно жениться или выйти замуж. Да и крупный приз в лотерею никто не отменял.',
		ttl: 'Не в деньгах счастье.',
		m: 'Деньги для меня не имеют значения. Пройди тест и узнай что они значат для тебя https://vk.com/app4988237_291368944',
	},
]

mlrds = [79,34,9,9.7];

function getStep(){
	return $('input[name=step]').val()*1;
}

function getScore(){
	return $('input[name=score]').val()*1;
}

function getLastAnser(){
	return $('input[name=lastanswer]').val();
}

function getMpy(){
	return $('input[name=mpy]').val()*1;
}

function setStep(val){
	return $('input[name=step]').val(val);
}

function setScore(val){
	return $('input[name=score]').val(val);
}

function setLastAnswer(val){
	mpy = 0;
	switch (val) {
		case 1:
			mpy = getRandomArbitary(61,200);
			val = 'от 61000 до 200000 рублей';
		break;
		case 2:
			mpy = getRandomArbitary(41,60);
			val = 'от 41000 до 60000 рублей';
		break;
		case 3:
		default:
			mpy = getRandomArbitary(20,40);
			val = 'менее 40000 рублей';
		break;
	}
	mpy = mpy * 12000;
	$('input[name=mpy]').val(mpy);	
	return $('input[name=lastanswer]').val(val);
}

function getRandomArbitary(min, max)
{
  return Math.random() * (max - min) + min;
}

function makeStep(btn){
	step = getStep();
	score = scores[step - 1]["s"+btn]
	if (step==8) {setLastAnswer(score);}
	setScore( getScore() + score);
	goStep(step + 1);
	setStep(step + 1);
}

jQuery(window).load(function () {
	startAnimationShow();
	$('.btn1').on("click", function(){
		if (!getStep()) {
			$('.animate-right').transition({ x: 150,opacity:'0' },1000);
			goStep(1);
			setStep(1);
		} else {
			makeStep(1)
		}
	});
	$('.btn2').on("click", function(){
		if (!getStep()) {return;}
		makeStep(2)
	});
	$('.btn3').on("click", function(){
		if (!getStep()) {return;}
		makeStep(3)
	});
	setStep(0);
	setScore(0);
});	

function startAnimationShow() {
	$('.animate-left').transition({ x: -150 },0).transition({ x: 0,opacity:'1.0' },1000);
	$('.animate-right').transition({ x: 150 },0).transition({ x: 0,opacity:'1.0' },1000);
	$('.animate-top').transition({ y: -150 },0).transition({ y: 0,opacity:'1.0' },1000);
	$(".btn1").transition({opacity:'1.0'},1000); 
}

function goStep(step) {
	if (getStep()==8) {finishTest(); return;}
	$(".btn").attr("disabled",true).css("cursor", "default");
	$('.animate-top').transition({ y: -150,opacity:'0' },1000).delay(200).transition({ y: 0,opacity:'1' },1000);
	$(".btn").transition({opacity:'0'},1000).delay(200).transition({opacity:'1'},1000); 
	$('.animate-left').transition({ x: -150,opacity:'0' },1000).delay(200).transition({ x: 0,opacity:'1.0' },1000);
	setTimeout(function(){ $('.quest-num').html('Вопрос ' + step + ' из 8') }, 1000); 
	setTimeout(function(){ $('.quest-text').html(tests[step-1].q) }, 1000); 
	setTimeout(function(){ $('.btn1').html(tests[step-1].a1) }, 1000); 
	setTimeout(function(){ $('.btn2').html(tests[step-1].a2) }, 1000); 
	setTimeout(function(){ $('.btn3').html(tests[step-1].a3) }, 1000); 
	setTimeout(function(){ $('.animate-left').attr('src','image/' + tests[step-1].img) }, 1000); 
	if (step==1) {setTimeout(function(){$('.btn').show(); $('.btns').toggleClass('text-center text-left') }, 1000); }
	if (step==7) {setTimeout(function(){ $('.plusCol').toggleClass('col-md-1 col-md-3');$('.minusCol').toggleClass('col-md-3 col-md-1') }, 1000); }
	setTimeout(function(){$(".btn").attr("disabled",false);},2000);
}

function getYears(id){
	m = mlrds[id] * 50000000000;
	mpy = getMpy();
	return Math.round(m / mpy);
}

function finishTest() {
	$('.test').hide();
	$('.result').show();
	res = 2;
	if (getScore()<15) res = 1;
	if (getScore()>19) res = 3;
	sendwallpost(result[res-1].m);
	$('.result h2').html( result[res-1].ttl );
	$('.result h3:eq(0)').html( result[res-1].text );
	$('.result h3:eq(1)').html( 'Сколько вам осталось заработать до списков Forbes при вашей текущей зарплате ('+getLastAnser()+'):' );
	
	mlrds.forEach(function(item, i, arr) {
		y = getYears(i);
		l = Math.round(y / 60);
		$('.res-td'+i).html( 'Вам придется проработать около '+y+' лет или прожить примерно '+l+' жизней.' );
	});
}