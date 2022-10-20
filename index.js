let cartCount = document.getElementById("cart")

let count = 0

function purchase() {
    count += 1
    cartCount.textContent = count

}