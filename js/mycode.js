function CalTotal() {
    let order_list = document.querySelector(".body-form").getElementsByTagName("input");
    let orderArray = [];
    let total = 0;
    let display = document.getElementById("order-list");
    let total_display = document.getElementById("price");

    for (i = 0; i < order_list.length; i++) {
        if (order_list[i].type === "checkbox" && order_list[i].checked) {
            orderArray.push(order_list[i].parentNode.getElementsByTagName("label")[0].textContent);
            total += parseFloat(order_list[i].value);
        }
        console.log(total);

    }

    if (orderArray.length != 0) {
        display.innerHTML = orderArray.join("<br>");
        console.log(display);
        display.style.background = "gainsboro";

        total_display.innerHTML = "Total amount: " + total + "$";
        total_display.style.background ="rgb(212, 109, 6)";

    } else {
        display.innerHTML = "";
        total_display.innerHTML ="";
    }

}