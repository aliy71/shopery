const menuBtn = document.querySelector('.menu')

function addClassList(param, className) {
    param.classList.remove(className)
    param.classList.add(className)
}

function eventClick(param) {
    param.addEventListener('click', () => {
        for (let i of menuBtn.children) {
            i.classList.remove('active')
        }
        addClassList(param, 'active')
        
    })
}

function iteration(param) {
    for (let i of param) {
        eventClick(i)
    }
}



iteration(menuBtn.children)
