const users = {
  "1": { name: "MIK", password: "MIK105500", rank: "Owner" },
  "2": { name: "Abdullah Khurram", password: "MIK476437", rank: "Manager" },
  "3": { name: "Rufy", password: "MIK689434", rank: "Community Manager" },
  "4": { name: "Ibrahim", password: "MIK207564", rank: "Admin" },
  "5": { name: "Ryan", password: "MIK957078", rank: "Crafter" },
  "6": { name: "Omar Ahmed", password: "MIK988556", rank: "Crafter" },
  "7": { name: "Zaryab", password: "MIK272251", rank: "Crafter" },
  "8": { name: "Eyad", password: "MIK620720", rank: "Crafter" },
};

function Login() {
  const userID = document.getElementById("UserID").value;
  const password = document.getElementById("Password").value;

  if (users[userID] && users[userID].password === password) {
    document.getElementById("LoginPage").style.display = "none";
    document.getElementById("MainPage").style.display = "block";
    document.getElementById("Username").innerText = users[userID].name;
  } else {
    alert("Invalid MIK ID or Password");
  }
}

function ToggleMenu() {
  const menu = document.getElementById("Menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function ShowTab(tabName) {
  const tabContent = document.getElementById("TabContent");
  if (tabName === "Fire") {
    tabContent.innerHTML = `
      <h2>Fire</h2>
      <p>Enter the details of the user you want to fire:</p>
      <input type="text" id="FireUser" placeholder="Enter User Name">
      <input type="text" id="Reason" placeholder="Reason">
      <button onclick="SendFireRequest()">Send Request</button>
    `;
  } else if (tabName === "Timeout") {
    tabContent.innerHTML = `
      <h2>Timeout</h2>
      <p>Enter the details of the user you want to timeout:</p>
      <input type="text" id="TimeoutUser" placeholder="Enter User Name">
      <input type="text" id="Reason" placeholder="Reason">
      <button onclick="SendTimeoutRequest()">Send Request</button>
    `;
  } else if (tabName === "TermsOfService") {
    tabContent.innerHTML = `
      <h2>Terms Of Service</h2>
      <p>Welcome to MIK Productions. By using our website, you agree to the following terms and conditions:</p>
      <ol>
        <li>Refund Policy: Refunds are available within 48 hours if the craft is destroyed by the crafter.</li>
        <li>User Conduct: Users must respect the rules of MIK Productions.</li>
      </ol>
    `;
  } else if (tabName === "PrivacyPolicy") {
    tabContent.innerHTML = `
      <h2>Privacy Policy</h2>
      <p>We value your privacy. This policy explains what data we collect and how we use it:</p>
      <ul>
        <li>Account Information</li>
        <li>Cookies</li>
      </ul>
    `;
  } else {
    tabContent.innerHTML = `<h2>${tabName} Page</h2>`;
  }
}

function ShowOwnerPage() {
  const username = document.getElementById("Username").innerText;
  if (username === "MIK") {
    document.getElementById("TabContent").innerHTML = `
      <h2>Owner Page</h2>
      <p>Manage Users and Ranks:</p>
      <button onclick="CreateRank()">Create Rank</button>
      <button onclick="AddUser()">Add User</button>
    `;
  } else {
    alert("Access Denied: Owner Only");
  }
    }
