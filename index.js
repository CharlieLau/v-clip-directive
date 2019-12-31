function createTextDom  (el,cb) {
    return () => {
        let content
        if (el.value){
            content =el.value
        } else if(typeof el.textContent === 'undefined') {
            content = el.textContent
        } else {
            content = el.innerText;
        }
        const element = document.createElement('textarea');
        element.id = '$clipboard'
        element.style.position = 'fixed'
        element.style.left = '-500px'
        element.style.top = '-500px'
        element.value = content
        document.body.appendChild(element)
        element.focus()
        element.select()
        element.setSelectionRange(0, element.value.length)
        document.execCommand('copy')
        if(cb){
            cb(content)
        }
        element.remove()
    }
}


export default {
    install(Vue) {
        Vue.directive('clip', {
            inserted(el,binding) {
                el._mousedown=createTextDom(el,binding.value)
                el.addEventListener('mousedown',el._mousedown)
            },
            unbind(el,binding) {
                el.removeEventListener('mousedown',el._mousedown)
            }
        })
    }
}