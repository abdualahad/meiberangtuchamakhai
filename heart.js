const wrapper = document.querySelector('.headdiv');
const noBtn = document.querySelector('.btn1');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});

function yes(){
    document.getElementById("aw").innerHTML = "AWWWWWW wanna go watch a movie together? ❤️"
    noBtn.remove();
}