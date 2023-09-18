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
