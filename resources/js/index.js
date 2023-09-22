const axiosApiInstance = axios.create({
	baseURL: 'https://korea-webtoon-api.herokuapp.com/',
});
const getWebtoon = async () => {
	try {
		const { data } = await axiosApiInstance({
			method: 'get',
			params: {
				service: 'naver',
				updateDay: day,
			},
		});
		const { webtoons } = data;
		webtoons.forEach((webtoon, idx) => {
			document.getElementById(`byDayWebtoon${idx}-img`).src = webtoon.img;
			document.getElementById(`byDayWebtoon${idx}-img`).alt = webtoon.title;
			document
				.getElementById(`byDayWebtoon${idx}-img`)
				.addEventListener('click', () => {
					location.href = webtoon.url;
				});
		});
	} catch {}
};

let idx = 0;
imgUrl = [
	'https://static.wikia.nocookie.net/webtoon/images/5/5d/That_Which_Flows_By_Banner.png/revision/latest?cb=20230727030157',
	'https://www.nautiljon.com/images/manga/00/44/operation_true_love_25344.webp',
	'https://pbs.twimg.com/media/FpqwEvoXoAAzhYT.jpg:large',
	'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0251f7cb-e07d-4f0d-b011-8b308f6df9f9/dc7kmgl-af18f1f5-6208-4b94-bf4f-bc0fa0476d6e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyNTFmN2NiLWUwN2QtNGYwZC1iMDExLThiMzA4ZjZkZjlmOVwvZGM3a21nbC1hZjE4ZjFmNS02MjA4LTRiOTQtYmY0Zi1iYzBmYTA0NzZkNmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.oIQZXBpz0bm1JtdR77PmcINw7GEbOaBUlRbzq_0Cuwo',
];
const changeMainBannerImg = () => {
	idx = (idx + 1) % 4;
	document.getElementById('main-banner-img').src = imgUrl[idx];
	if (idx - 1 === -1) {
		document.getElementById('main-banner-btn-3').style.backgroundColor =
			'#dcdcdc';
	} else {
		document.getElementById(
			`main-banner-btn-${idx - 1}`
		).style.backgroundColor = '#dcdcdc';
	}
	document.getElementById(`main-banner-btn-${idx}`).style.backgroundColor =
		'#09ce20';
};
setInterval(changeMainBannerImg, 5000);

const onMainBannerBtn1Click = (e) => {
	document.getElementById('main-banner-btn-1').style.backgroundColor =
		'#dcdcdc';
	document.getElementById('main-banner-btn-2').style.backgroundColor =
		'#dcdcdc';
	document.getElementById('main-banner-btn-3').style.backgroundColor =
		'#dcdcdc';
	document.getElementById('main-banner-btn-0').style.backgroundColor =
		'#09ce20';
	idx = 0;
	document.getElementById('main-banner-img').src = imgUrl[idx];
};
const onMainBannerBtn2Click = (e) => {
	document.getElementById('main-banner-btn-0').style.backgroundColor =
		'#dcdcdc';
	document.getElementById('main-banner-btn-2').style.backgroundColor =
		'#dcdcdc';
	document.getElementById('main-banner-btn-3').style.backgroundColor =
		'#dcdcdc';
	document.getElementById('main-banner-btn-1').style.backgroundColor =
		'#09ce20';
	idx = 1;
	document.getElementById('main-banner-img').src = imgUrl[idx];
};
const onMainBannerBtn3Click = (e) => {
	document.getElementById('main-banner-btn-0').style.backgroundColor =
		'#dcdcdc';
	document.getElementById('main-banner-btn-1').style.backgroundColor =
		'#dcdcdc';
	document.getElementById('main-banner-btn-3').style.backgroundColor =
		'#dcdcdc';
	document.getElementById('main-banner-btn-2').style.backgroundColor =
		'#09ce20';
	idx = 2;
	document.getElementById('main-banner-img').src = imgUrl[idx];
};
const onMainBannerBtn4Click = (e) => {
	document.getElementById('main-banner-btn-0').style.backgroundColor =
		'#dcdcdc';
	document.getElementById('main-banner-btn-1').style.backgroundColor =
		'#dcdcdc';
	document.getElementById('main-banner-btn-2').style.backgroundColor =
		'#dcdcdc';
	document.getElementById('main-banner-btn-3').style.backgroundColor =
		'#09ce20';
	idx = 3;
	document.getElementById('main-banner-img').src = imgUrl[idx];
};
let dayIndex = 0;
let day = '';
const dayDefining = () => {
	switch (dayIndex) {
		case 1:
			day = 'mon';
			break;
		case 2:
			day = 'tue';
			break;
		case 3:
			day = 'wed';
			break;
		case 4:
			day = 'thu';
			break;
		case 5:
			day = 'fri';
			break;
		case 6:
			day = 'sat';
			break;
		case 0:
			day = 'sun';
			break;
	}
};
const todayDate = () => {
	const today = new Date().getDay();
	dayIndex = today;
	dayDefining();
	document.getElementsByClassName(day)[0].style.backgroundColor = '#09ce20';
	document.getElementsByClassName(`${day}-text`)[0].style.color = '#FFFFFF';
};
todayDate();
getWebtoon();

const onDay0Click = (e) => {
	document.getElementsByClassName('mon')[0].style.backgroundColor = '#09ce20';
	document.getElementsByClassName('mon-text')[0].style.color = '#ffffff';
	document.getElementsByClassName('tue')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('tue-text')[0].style.color = '#000000';
	document.getElementsByClassName('wed')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('wed-text')[0].style.color = '#000000';
	document.getElementsByClassName('thu')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('thu-text')[0].style.color = '#000000';
	document.getElementsByClassName('fri')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('fri-text')[0].style.color = '#000000';
	document.getElementsByClassName('sat')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('sat-text')[0].style.color = '#000000';
	document.getElementsByClassName('sun')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('sun-text')[0].style.color = '#000000';
	day = 'mon';
	dayIndex = 1;
	getWebtoon();
};
const onDay1Click = (e) => {
	document.getElementsByClassName('mon')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('mon-text')[0].style.color = '#000000';
	document.getElementsByClassName('tue')[0].style.backgroundColor = '#09ce20';
	document.getElementsByClassName('tue-text')[0].style.color = '#ffffff';
	document.getElementsByClassName('wed')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('wed-text')[0].style.color = '#000000';
	document.getElementsByClassName('thu')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('thu-text')[0].style.color = '#000000';
	document.getElementsByClassName('fri')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('fri-text')[0].style.color = '#000000';
	document.getElementsByClassName('sat')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('sat-text')[0].style.color = '#000000';
	document.getElementsByClassName('sun')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('sun-text')[0].style.color = '#000000';
	day = 'tue';
	dayIndex = 2;
	getWebtoon();
};
const onDay2Click = (e) => {
	document.getElementsByClassName('mon')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('mon-text')[0].style.color = '#000000';
	document.getElementsByClassName('tue')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('tue-text')[0].style.color = '#000000';
	document.getElementsByClassName('wed')[0].style.backgroundColor = '#09ce20';
	document.getElementsByClassName('wed-text')[0].style.color = '#ffffff';
	document.getElementsByClassName('thu')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('thu-text')[0].style.color = '#000000';
	document.getElementsByClassName('fri')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('fri-text')[0].style.color = '#000000';
	document.getElementsByClassName('sat')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('sat-text')[0].style.color = '#000000';
	document.getElementsByClassName('sun')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('sun-text')[0].style.color = '#000000';
	day = 'wed';
	dayIndex = 3;
	getWebtoon();
};
const onDay3Click = (e) => {
	document.getElementsByClassName('mon')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('mon-text')[0].style.color = '#000000';
	document.getElementsByClassName('tue')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('tue-text')[0].style.color = '#000000';
	document.getElementsByClassName('wed')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('wed-text')[0].style.color = '#000000';
	document.getElementsByClassName('thu')[0].style.backgroundColor = '#09ce20';
	document.getElementsByClassName('thu-text')[0].style.color = '#ffffff';
	document.getElementsByClassName('fri')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('fri-text')[0].style.color = '#000000';
	document.getElementsByClassName('sat')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('sat-text')[0].style.color = '#000000';
	document.getElementsByClassName('sun')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('sun-text')[0].style.color = '#000000';
	day = 'thu';
	dayIndex = 4;
	getWebtoon();
};
const onDay4Click = (e) => {
	document.getElementsByClassName('mon')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('mon-text')[0].style.color = '#000000';
	document.getElementsByClassName('tue')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('tue-text')[0].style.color = '#000000';
	document.getElementsByClassName('wed')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('wed-text')[0].style.color = '#000000';
	document.getElementsByClassName('thu')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('thu-text')[0].style.color = '#000000';
	document.getElementsByClassName('fri')[0].style.backgroundColor = '#09ce20';
	document.getElementsByClassName('fri-text')[0].style.color = '#ffffff';
	document.getElementsByClassName('sat')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('sat-text')[0].style.color = '#000000';
	document.getElementsByClassName('sun')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('sun-text')[0].style.color = '#000000';
	day = 'fri';
	dayIndex = 5;
	getWebtoon();
};
const onDay5Click = (e) => {
	document.getElementsByClassName('mon')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('mon-text')[0].style.color = '#000000';
	document.getElementsByClassName('tue')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('tue-text')[0].style.color = '#000000';
	document.getElementsByClassName('wed')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('wed-text')[0].style.color = '#000000';
	document.getElementsByClassName('thu')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('thu-text')[0].style.color = '#000000';
	document.getElementsByClassName('fri')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('fri-text')[0].style.color = '#000000';
	document.getElementsByClassName('sat')[0].style.backgroundColor = '#09ce20';
	document.getElementsByClassName('sat-text')[0].style.color = '#ffffff';
	document.getElementsByClassName('sun')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('sun-text')[0].style.color = '#000000';
	day = 'sat';
	dayIndex = 6;
	getWebtoon();
};
const onDay6Click = (e) => {
	document.getElementsByClassName('mon')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('mon-text')[0].style.color = '#000000';
	document.getElementsByClassName('tue')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('tue-text')[0].style.color = '#000000';
	document.getElementsByClassName('wed')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('wed-text')[0].style.color = '#000000';
	document.getElementsByClassName('thu')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('thu-text')[0].style.color = '#000000';
	document.getElementsByClassName('fri')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('fri-text')[0].style.color = '#0000000';
	document.getElementsByClassName('sat')[0].style.backgroundColor = '#ffffff';
	document.getElementsByClassName('sat-text')[0].style.color = '#0000000';
	document.getElementsByClassName('sun')[0].style.backgroundColor = '#09ce20';
	document.getElementsByClassName('sun-text')[0].style.color = '#ffffff';
	day = 'sun';
	dayIndex = 0;
	getWebtoon();
};
