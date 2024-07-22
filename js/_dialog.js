document.addEventListener('DOMContentLoaded', () => {
    const open_terms = () => {
        const elements = document.querySelectorAll('.open-terms')
        
        elements.forEach(element => {
            element.addEventListener('click', event => {
                event.preventDefault()
                document.querySelector('.dialog--terms').classList.toggle('dialog--active')
            })
        })
    }
    open_terms()

    const open_lang = () => {
        const elements = document.querySelectorAll('.langSelector')
        
        elements.forEach(element => {
            element.addEventListener('click', event => {
                event.preventDefault()
                document.querySelector('.dialog--languages').classList.toggle('dialog--active')
            })
        })
    }
    open_lang()

    const close_dialog = () => {
        const dialogs = document.querySelectorAll('.dialog')
        dialogs.forEach(dialog => {
            const close = dialog.querySelector('.dialog__close')
            const body = dialog.querySelector('.dialog__body')

            close.addEventListener('click', (event) => {
                dialog.classList.toggle('dialog--active')
            })

            dialog.addEventListener('click', (event) => {
                if (!body.contains(event.target)) {
                    dialog.classList.toggle('dialog--active')
                }
            })
        })
    }
    close_dialog()
})