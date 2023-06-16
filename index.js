const loadMoreBtn = document.querySelector('.load-more');
const feedContainer = document.querySelector('.feed-container');
const switchElement = document.querySelector('.switch input');

const bodyBgColor = document.querySelector('.body-bg-color');
const bgColorElements = document.querySelectorAll('.bg-color');
const textColorElements = document.querySelectorAll('.text-color');

let currentIndex = 0;
let data;

loadMoreBtn.addEventListener('click', loadMore);

switchElement.addEventListener('click', switchTheme, false);

function switchTheme(e) {
	if (e.target.checked) {
		document.documentElement.setAttribute('data-theme', 'dark');
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
	}
}

async function fetchData() {
	try {
		const response = await fetch('data.json');
		data = await response.json();
		loadMore();
	} catch (error) {
		console.error('Error', error);
	}
}

async function loadMore() {
	const objectsLoadNumber = 4;
	const endIndex = currentIndex + objectsLoadNumber;
	const objectsToLoad = data.slice(currentIndex, endIndex);

	objectsToLoad.forEach((obj) => {
		const article = document.createElement('article');

		const userDetails = document.createElement('div');
		const profileImg = document.createElement('div');
		const profilePictureImg = document.createElement('img');
		const userName = document.createElement('span');

		const imgContainer = document.createElement('div');
		const postImg = document.createElement('img');
		const bottomSection = document.createElement('div');
		const likesContainer = document.createElement('div');
		const likesIcon = document.createElement('i');
		const likesNumber = document.createElement('span');
		const postCaption = document.createElement('p');
		const dateContainer = document.createElement('div');

		article.className = 'bg-color';

		userDetails.className = 'user-details';
		profileImg.className = 'profile-img';
		userName.className = 'username text-color-dark';

		imgContainer.className = 'img-container';
		bottomSection.className = 'bottom-section';
		likesContainer.className = 'likes';
		likesIcon.className = 'fa-regular fa-heart ';
		likesNumber.className = 'number-of-likes ';
		postCaption.className = 'post-caption ';
		dateContainer.className = 'date-container ';

		feedContainer.appendChild(article);

		article.appendChild(userDetails);
		article.appendChild(imgContainer);

		userDetails.appendChild(profileImg);
		userDetails.appendChild(userName);

		profileImg.appendChild(profilePictureImg);

		imgContainer.appendChild(postImg);
		imgContainer.appendChild(bottomSection);

		bottomSection.appendChild(likesContainer);
		bottomSection.appendChild(postCaption);
		bottomSection.appendChild(dateContainer);

		likesContainer.appendChild(likesIcon);
		likesContainer.appendChild(likesNumber);

		profilePictureImg.src = obj.profile_image;
		userName.textContent = `${obj.name}`;

		postImg.src = obj.image;
		likesNumber.textContent = `${obj.likes}`;
		postCaption.textContent = `${obj.caption}`;

		const dateString = `${obj.date}`;
		const date = new Date(dateString);
		const formattedDate = date.toLocaleDateString('en-GB', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
		});

		dateContainer.textContent = `${formattedDate}`;
	});

	currentIndex = endIndex;

	if (currentIndex >= data.length) {
		loadMoreBtn.style.display = 'none';
	}
}

fetchData();
