const blockButton = document.querySelector('button[name=block]');
const buttonstate = localStorage.getItem('blockButtonState');
if(buttonState == on)
{
    blockButton.classList.add('button-styling');
}

blockButton.addEventListener('click',() =>
{
    blockButton.classList.toggle('button-styling');
    if (blockButton.classList.contains('button-styling'))
    {
        localStorage.setItem('blockButtonState', 'on');
    }else {
        localStorage.setItem('blockButtonState','off');
    }
});
