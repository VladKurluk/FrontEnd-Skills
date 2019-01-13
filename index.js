const light = document.querySelector('.bulb');

const toggleLight = () => {
    document.querySelector('body').classList.toggle('is-light-on')
}

light.addEventListener('mouseover', toggleLight);
light.addEventListener('mouseout', toggleLight);