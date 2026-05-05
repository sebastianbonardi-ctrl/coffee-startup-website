function calculate() {
    let rent = Number(document.getElementById("rent").value);
    let equipment = Number(document.getElementById("equipment").value);
    let inventory = Number(document.getElementById("inventory").value);

    let total = rent + equipment + inventory;

    document.getElementById("result").innerText =
        "Total Startup Cost: $" + total;
}

function submitForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        document.getElementById("formResult").innerText =
            "Please fill out all required fields.";
        return;
    }

    document.getElementById("formResult").innerText =
        "Thank you " + name + "! We will contact you soon.";    
}