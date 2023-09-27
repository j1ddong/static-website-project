const axiosApiInstance = axios.create({
	baseURL: 'https://korea-webtoon-api.herokuapp.com/',
});
const getNaverWebtoon = async () => {
	try {
		const { data } = await axiosApiInstance({
			method: 'get',
			params: {
				service: 'naver',
			},
		});
		const { webtoons } = data;
		webtoons.forEach((webtoon, idx) => {
			document.getElementById(`popularNaver${idx}-img`).src = webtoon.img;
			document.getElementById(`popularNaver${idx}-img`).alt = webtoon.title;
			document
				.getElementById(`popularNaver${idx}-img`)
				.addEventListener('click', () => {
					location.href = webtoon.url;
				});
		});
	} catch {}
};
const getKakaoWebtoon = async () => {
	try {
		const { data } = await axiosApiInstance({
			method: 'get',
			params: {
				service: 'kakao',
			},
		});
		const { webtoons } = data;
		webtoons.forEach((webtoon, idx) => {
			document.getElementById(`popularKakao${idx}-img`).src = webtoon.img;
			document.getElementById(`popularKakao${idx}-img`).alt = webtoon.title;
			document
				.getElementById(`popularKakao${idx}-img`)
				.addEventListener('click', () => {
					location.href = webtoon.url;
				});
		});
	} catch {}
};
getNaverWebtoon();
getKakaoWebtoon();
