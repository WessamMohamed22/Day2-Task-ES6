var getUsers = document.getElementById("btn");
var tbody = document.getElementById("tbody");

getUsers.addEventListener('click', async function () {
    tbody.innerHTML = "";
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (response.status !== 200) {
            throw new Error('Network response not ok');
        }
        const users = await response.json();
        console.log(users);
        
        users.forEach(user => {
            var id = document.createElement("td");
            id.textContent = user.id;

            var name = document.createElement("td");
            name.textContent = user.name;

            var username = document.createElement("td");
            username.textContent = user.username;

            var email = document.createElement("td");
            email.textContent = user.email;

            var phone = document.createElement("td");
            phone.textContent = user.phone;

            var company = document.createElement("td");
            company.textContent = user.company.name;

            var website = document.createElement("td");
            website.textContent = user.website;

            var deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete User";
            deleteBtn.style.backgroundColor = "red";
            deleteBtn.style.border = "1px red solid";
            deleteBtn.style.borderRadius = "10px";
            deleteBtn.style.color = "white";
            deleteBtn.style.padding = "5px";

            deleteBtn.addEventListener('click', function () {
                row.remove();
            });

            var action = document.createElement("td");
            action.appendChild(deleteBtn);

            var row = document.createElement("tr");
            row.append(id, name, username, email, phone, website, company, action);

            tbody.append(row);
        });
    } catch (error) {
        console.log(error);
    }
});
