if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  const submitButton = document.getElementById("submit-data");
  const clearButton = document.getElementById("empty-table");
  //const uploadButton = document.getElementById("upload-image");

  submitButton.addEventListener("click", function () {
    let username = document.getElementById("input-username").value;
    let email = document.getElementById("input-email").value;
    let admin = document.getElementById("input-admin").checked;
    let image = document.getElementById("input-image").src;
    //"'<img src=" + document.getElementById("input-image").src + ">'";

    if (admin === false) {
      admin = "-";
    } else if (admin === true) {
      admin = "X";
    }
    let tableRef = document.getElementById("table");
    var rows = tableRef.rows;
    for (var i = 1; i < rows.length; i++) {
      var cols = rows[i].cells;
      if (cols[0].innerHTML === username) {
        tableRef.rows[i].cells[1].innerHTML = email;
        tableRef.rows[i].cells[2].innerHTML = admin;
        tableRef.rows[i].cells[3].innerHTML =
          "<img src=" + image + " height='64' width='64'>";
        return;
      }
    }
    let newRow = tableRef.insertRow(-1);
    let newCell = newRow.insertCell(0);
    let newCell1 = newRow.insertCell(1);
    let newCell2 = newRow.insertCell(2);
    let newCell3 = newRow.insertCell(3);
    newCell.innerHTML = username;
    newCell1.innerHTML = email;
    newCell2.innerHTML = admin;
    newCell3.innerHTML = "<img src=" + image + " height='64' width='64'>";
  });

  clearButton.addEventListener("click", function () {
    document.getElementById("table").innerHTML =
      "<tr><th>Username</th><th>Email</th><th>Admin</th><th>Image</th></tr>";
  });
}
