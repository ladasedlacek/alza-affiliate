const accordion = () => {
    document.querySelectorAll('.faqs__box').forEach(element => {
        element.addEventListener('click', () => {
            if (!element.classList.contains('faqs__box--active')) {
                const active_element = document.querySelector('.faqs__box--active')

                const activate = () => {
                    element.classList.add('faqs__box--active')
                    const paragraph = element.querySelector('.faqs__paragraph')
                    paragraph.style.height = `${paragraph.scrollHeight + 12}px`
                }
    
                const deactivate = () => {
                    const paragraph = active_element.querySelector('.faqs__paragraph')
                    paragraph.style.height = '0px'
                    active_element.classList.remove('faqs__box--active')
                }
                active_element == null ? activate() : (deactivate(), activate())
            } else {
                element.classList.remove('faqs__box--active')
                const paragraph = element.querySelector('.faqs__paragraph')
                paragraph.style.height = '0px'
            }
        })
    })
}
accordion()