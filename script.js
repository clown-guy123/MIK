const users = {
  "MIK 15371": { name: "MIK", password: "MIK123456", rank: "Owner" },
  "Abdullah Khurram": { name: "Abdullah Khurram", password: "MIK789012", rank: "Manager" },
  "Rufy": { name: "Rufy", password: "MIK345678", rank: "Community Manager" },
  "MIK 11656": { name: "MIK 11656", password: "MIK901234", rank: "Admin" },
  "Ryan": { name: "Ryan", password: "MIK567890", rank: "Crafter" },
  "Omar Ahmed": { name: "Omar Ahmed", password: "MIK678901", rank: "Crafter" },
  "Zaryab": { name: "Zaryab", password: "MIK234567", rank: "Crafter" },
  "Eyad": { name: "Eyad", password: "MIK890123", rank: "Crafter" }
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
