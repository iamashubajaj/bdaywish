function generateWish() {
    var name = document.getElementById("nameInput").value;
    var message = "Happy birthday, " + name + "! May all your wishes come true. Have a fantastic day!";
    document.getElementById("birthdayMessage").textContent = message;
}