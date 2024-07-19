document.addEventListener('DOMContentLoaded', () => {
    const duration = 1500 // duration of the animation in milliseconds

    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    }

    const animateNumbers = (elements) => {
        elements.forEach(element => {
            const targetNumber = parseInt(element.dataset.target, 10)
            const isCurrency = element.textContent.includes('Kč')
            const endText = isCurrency ? '+ Kč' : '+'
            const startTime = performance.now()

            const animateNumber = (currentTime) => {
                const elapsedTime = currentTime - startTime
                const progress = Math.min(elapsedTime / duration, 1)
                const currentNumber = Math.round(targetNumber * progress)
                
                element.textContent = formatNumber(currentNumber) + endText

                if (progress < 1) {
                    requestAnimationFrame(animateNumber)
                }
            }

            requestAnimationFrame(animateNumber)
        })
    }

    const numbersContainer = document.querySelector('.numbers')

    // Function to handle the animation
    const handleAnimation = () => {
        const elements = numbersContainer.querySelectorAll('.headline-2')
        animateNumbers(elements)
    }

    // Create a MutationObserver to watch for class changes
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                if (numbersContainer.classList.contains('animated')) {
                    handleAnimation()
                    observer.disconnect()
                    break
                }
            }
        }
    })

    // Start observing the numbersContainer for class changes
    observer.observe(numbersContainer, {
      attributes: true
    })
})