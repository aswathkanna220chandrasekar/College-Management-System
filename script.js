function searchDepartments() {
    let input = document.getElementById("search").value.toLowerCase();

    let departments = document.querySelectorAll(
        "#departmentList .card"
    );

    departments.forEach(function(department) {
        let text = department.innerText.toLowerCase();

        if (text.includes(input)) {
            department.style.display = "block";
        } else {
            department.style.display = "none";
        }
    });
}

document.getElementById("contactForm").addEventListener(
    "submit",
    function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;

        document.getElementById("response").innerText =
            "Thank you, " + name + "! Your message has been received.";

        document.getElementById("contactForm").reset();
    }
);

