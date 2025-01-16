const users = {
  "1": { name: "MIK", password: "MIK 105500", rank: "Owner" },
  "2": { name: "Abdullah Khurram", password: "MIK 476437", rank: "Manager" },
  "3": { name: "Rufy", password: "MIK 689434", rank: "Community Manager" },
  "4": { name: "MIK 11656", password: "MIK 207564", rank: "Admin" },
  "5": { name: "Ryan", password: "MIK 957078", rank: "Crafter" },
  "6": { name: "Omar Ahmed", password: "MIK 988556", rank: "Crafter" },
  "7": { name: "Zaryab", password: "MIK 272251", rank: "Crafter" },
  "8": { name: "Eyad", password: "MIK 620720", rank: "Crafter" }
};

function login() {
  const userID = document.getElementById("userID").value;
  const password = document.getElementById("password").value;

  if (users[userID] && users[userID].password === password) {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("main-page").style.display = "block";
    document.getElementById("username").innerText = users[userID].name;
  } else {
    alert("Invalid MIK ID or Password");
  }
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "none" ? "block" : "none";
}

function showTab(tabName) {
  const tabContent = document.getElementById("tab-content");
  tabContent.innerHTML = `<h2>${tabName} Page</h2>`;
}

function showOwnerPage() {
  const username = document.getElementById("username").innerText;
  if (username === "MIK") {
    showTab("Owner Page");
  } else {
    alert("Access Denied: Owner Only");
  }
}
