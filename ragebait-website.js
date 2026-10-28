const msgBox = document.getElementById('msg');
const button = document.getElementById('myBtn');

const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

function showMsg() {
    msgBox.style.display = 'block';
}

function hideMsg() {
    msgBox.style.display = 'none';
}

// 1. Open the message box when the button is clicked
button.addEventListener('click', function (event) {
    showMsg();
});

window.onscroll = () => {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        toTop();
    } else {
        hideMsg();
    }
};
