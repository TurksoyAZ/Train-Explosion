

//
let train = document.querySelector('#trainImg')
let explosionImg = document.querySelector('#explosionImg')
let bombeImg = document.querySelector('#bombe')
let smockImg = document.querySelector('#smock')
//
let btnGo = document.querySelector('#btnGo')
let btnStop = document.querySelector('#btnStop')



let forSetInterval;

btnGo.addEventListener('click', () => {

    let trainSchrit = 0

    forSetInterval = setInterval(() => {

        trainSchrit += 10
        train.style.left = `${trainSchrit}px`
        train.style.transition = '0.3s ease'

        if (trainSchrit === 420) {

            clearInterval(forSetInterval)
            train.style.transition = '0.2s ease'
            train.style.transform = 'rotate(-30deg)'
            explosionImg.style.display = 'block'
            setTimeout(() => { explosionImg.style.display = 'none' }, 1700)
            bombeImg.style.display = 'none'

            setInterval(() => {
                smockImg.style.transition = '6s ease'
                smockImg.style.opacity = '10'
            }, 1700)
        }

    }, 100)

})


btnStop.addEventListener('click', () => {
    clearInterval(forSetInterval)
})