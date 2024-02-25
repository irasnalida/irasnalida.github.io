const smileEmoji = document.querySelector('.smile-emoji');
const youtubeLink = document.querySelector('.youtube-link');
const redditLink = document.querySelector('.reddit-link');
const githubLink = document.querySelector('.github-link');
const linkedinLink = document.querySelector('.linkedin-link');

youtubeLink.addEventListener('mouseover', () => {
    smileEmoji.innerHTML = '🎬';
    smileEmoji.classList.add('bounce-emoji');
});

youtubeLink.addEventListener('mouseout', () => {
    smileEmoji.classList.remove('scale-emoji');
    smileEmoji.classList.remove('bounce-emoji');
});

redditLink.addEventListener('mouseover', () => {
    smileEmoji.innerHTML = '🤔';
    smileEmoji.classList.add('bounce-emoji');
});
redditLink.addEventListener('mouseout', () => {
    smileEmoji.classList.remove('scale-emoji');
    smileEmoji.classList.remove('bounce-emoji');
});

githubLink.addEventListener('mouseover', () => {
    smileEmoji.innerHTML = '🐙';
    smileEmoji.classList.add('bounce-emoji');
});
githubLink.addEventListener('mouseout', () => {
    smileEmoji.classList.remove('scale-emoji');
    smileEmoji.classList.remove('bounce-emoji');
});


linkedinLink.addEventListener('mouseover', () => {
    smileEmoji.innerHTML = '🔗';
    smileEmoji.classList.add('bounce-emoji');
});
linkedinLink.addEventListener('mouseout', () => {
    smileEmoji.classList.remove('scale-emoji');
    smileEmoji.classList.remove('bounce-emoji');
});

