window.onload = function() {
    // set the variables for the elements that are needed
    var buttons = [...document.getElementsByClassName('order-button')]
    var order_popup = document.getElementById("order-popup")
    var cancel_order_button = document.getElementById("cancel-order-button")

    // add a click listener to every order button on the menu
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // select the proper item to order
            order_popup.querySelector("option[value='" + button.id + "']").selected = "selected"

            // make the order popup visable
            order_popup.className = "visable"
        })
    })

    // make the order popup disapear when the cancel button is clicked
    cancel_order_button.addEventListener("click", () => {
        order_popup.className = "invisable"
    })
}