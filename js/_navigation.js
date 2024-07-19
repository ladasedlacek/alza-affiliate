document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navigation__link')

    // scrolling function
    const run_scroll = () => {
        const navigation = document.querySelector('.navigation')
        const offset_top = navigation.offsetTop
        const header = document.querySelector('.header')
        const nav_height = navigation.offsetHeight
    
        // add sticky to the nav
        const scrolling = () => {
            if (window.scrollY > offset_top) {
                navigation.classList.add('sticky')
                header.style.marginTop = `${nav_height}px`
            } else {
                navigation.classList.remove('sticky')
                header.style.marginTop = '0'
            }
        }
        window.addEventListener('scroll', scrolling)

        // scroll to element
        const scroll_to = event => {
            event.preventDefault()
            const get_href = event.currentTarget.getAttribute('href')
            const target = document.querySelector(get_href)
    
            if (target) {
                const position = target.getBoundingClientRect().top + window.pageYOffset
                const offset_position = position - nav_height
    
                window.scrollTo({
                    top: offset_position,
                    behavior: 'smooth'
                })
            }
        }

        links.forEach(link => {
            link.addEventListener('click', scroll_to)
        })
    }
    
    // closing mobile navigation after user clicked on the link in navigation
    const run_close = () => {
        const menu_button = document.querySelector('.menu-button')
        const navigation_itemsWrapper = document.querySelector('.navigation__itemsWrapper')
        const links = document.querySelectorAll('.navigation__itemsWrapper a') 
    
        const handleClick = () => {
            if (window.innerWidth <= 1200) {
                menu_button.checked = false
            }
        }
    
        const handleOutsideClick = (event) => {
            if (window.innerWidth <= 1200 && !navigation_itemsWrapper.contains(event.target) && !menu_button.contains(event.target)) {
                menu_button.checked = false
            }
        }
    
        links.forEach(link => {
            link.addEventListener('click', handleClick)
        })
    
        document.addEventListener('click', handleOutsideClick)
    }
    
    run_scroll()
    run_close()
})