document.addEventListener('DOMContentLoaded', () => {
    const animatables = document.querySelectorAll('.animatable')
    const observer_options = {
        root: null, 
        rootMargin: '0px',
        threshold: .15
    }

    const set_observer = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('animatable')
                entry.target.classList.add('animated')
                observer.unobserve(entry.target)
            }
        })
    }

    const observer = new IntersectionObserver(set_observer, observer_options)
    animatables.forEach(animatable => { observer.observe(animatable) })
})