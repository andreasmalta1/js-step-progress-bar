const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const stepsEl = document.querySelectorAll('.step')
const frontBarEl = document.querySelector('.progress-bar-front')

let currentChecked = 1

nextBtn.addEventListener('click', () => {
    currentChecked++
    if (currentChecked > stepsEl.length){
        currentChecked = stepsEl.length
    }
    updateStepProgress()
})

prevBtn.addEventListener('click', () => {
    currentChecked--
    if (currentChecked > stepsEl.length){
        currentChecked = stepsEl.length
    }
    updateStepProgress()
})

function updateStepProgress(){
    stepsEl.forEach((stepEl, idx) => {
        if (idx < currentChecked){
            stepEl.classList.add('checked')
            stepEl.innerHTML = `<i class="fas fa-check"></i><small>${idx === 0 ? 'Start' : idx === stepsEl.length - 1 ? 'Final' : 'Step ' + idx}</small>`
        } else{
            stepEl.classList.remove('checked')
            stepEl.innerHTML = `<i class="fas fa-times"></i>`
        }
    })

    const checkedNum = document.querySelectorAll('.checked')

    frontBarEl.style.width = ((checkedNum.length - 1) / (stepsEl.length - 1))* 100 + '%'

    if (currentChecked === 1){
        prevBtn.disabled = true
    } else if (currentChecked === stepsEl.length){
        nextBtn.disabled = true
    } else{
        prevBtn.disabled = false
        nextBtn.disabled = false
    }

}