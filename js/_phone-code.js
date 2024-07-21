document.addEventListener("DOMContentLoaded", function() {
    const phone_code = document.querySelector(".form__phoneCode")
    const dropdown = document.querySelector(".form__dropdown")
    const droptdown_items = document.querySelectorAll(".form__dropdown-item")
    const flag_image = phone_code.querySelector(".flag")
    const country_code = phone_code.querySelector(".form__code")

    phone_code.addEventListener("click", function(event) {
        event.stopPropagation() 
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block"
    })

    droptdown_items.forEach(item => {
        item.addEventListener("click", function() {
            const code = item.getAttribute("data-code")
            const flag = item.getAttribute("data-flag")
            flag_image.src = `build/img/flags/${flag}`
            country_code.textContent = code
            dropdown.style.display = "none"
        })
    })

    document.addEventListener("click", function() {
        dropdown.style.display === "block" ? dropdown.style.display = "none" : 0
    })

    dropdown.addEventListener("click", function(event) {
        event.stopPropagation()
    })
})