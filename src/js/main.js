const menuBtn = document.querySelector('.menu')
const place = document.querySelectorAll('.portal_text')
const main  = document.querySelector('.main')
const filterBar = document.querySelectorAll('.filter_bar')

function addClassList(param, className) {
    param.classList.remove(className)
    param.classList.add(className)
}

const toggleClassList = (param, className) => {
    param.classList.toggle(className)
}

function eventClick(param) {
    param.addEventListener('click', () => {
        for (let i of menuBtn.children) {
            i.classList.remove('active')
        }
        addClassList(param, 'active')
        place.forEach(i => {
            i.parentElement.classList.remove('show')
            
            if(i.textContent.toLowerCase().trim() == param.textContent.toLowerCase().trim()){
                if( i.textContent.toLowerCase().trim() == 'shop' || i.textContent.toLowerCase().trim() == 'blog' ){
                    main.classList.add('show')
                    addClassList(i.parentElement,"show")
                }
                else{
                    addClassList(i.parentElement, 'show')
                }
            }
        })
    })
}

function filterBarEvent(param) {
    param.parentElement.classList.remove('active')
    param.addEventListener('click', () => {
        toggleClassList(param.parentElement, 'active')
    })
}

function iteration(param) {
    for (let i of param) {
        i.parentElement.className == 'menu field col-6' ? eventClick(i) : filterBarEvent(i);
    }
}

iteration(menuBtn.children)
iteration(filterBar)
