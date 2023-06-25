const menuBtn = document.querySelector('.menu')
const place = document.querySelectorAll('.portal_text')
const main  = document.querySelector('.main')
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
        place.forEach(i => {
            i.parentElement.classList.remove('show')
            console.log(i);
            // console.log(i.textContent);
            
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

function iteration(param) {
    for (let i of param) {
        eventClick(i)
    }
}


iteration(menuBtn.children)
