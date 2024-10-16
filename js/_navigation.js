document.addEventListener('DOMContentLoaded', () => {
    const navigation_links = document.querySelectorAll('.navigation__link')
    const footer_links = document.querySelectorAll('.footer .body-1--link')
    const navigation = document.querySelector('.navigation')

    // scrolling function
    const run_scroll = () => {
        const nav_height = navigation.offsetHeight

        // scroll to element
        const scroll_to = event => {
            event.preventDefault();
            const get_href = event.currentTarget.getAttribute('href');
            const target = document.querySelector(get_href);
    
            if (target) {
                let position = target.getBoundingClientRect().top + window.pageYOffset;
                let offset_position = position - nav_height;
                console.log('patička');
                
    
                /* if (event.currentTarget.closest('.footer')) {
                    console.log('patička');
                    
                    offset_position += nav_height;
                } */
    
                window.scrollTo({
                    top: offset_position,
                    behavior: 'smooth'
                });
            }
        };

        navigation_links.forEach(link => {
            link.addEventListener('click', scroll_to)
        })

        footer_links.forEach(link => {
            link.addEventListener('click', scroll_to)
        })
    }
    run_scroll()
    
    // toggle menu
    const toggle_menu = () => {
        const menu_button = document.querySelector('.menu-button');

        const toggle = () => {
            if (window.innerWidth <= 1200) {
                menu_button.checked = false
            }
        };

        // click out of the navigation - close menu
        document.addEventListener('click', event => {
            if (!navigation.contains(event.target) && !menu_button.contains(event.target)) {
                toggle()
            }
        })

        // link items click - close menu
        navigation_links.forEach(link => {
            link.addEventListener('click', event => {
                event.stopPropagation()
                toggle()
            })
        })
    }
    toggle_menu()
})