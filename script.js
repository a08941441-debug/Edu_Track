// إضافة الغياب
function addAttendance() {
    const name = document.getElementById("studentName").value;
    const status = document.getElementById("attendanceStatus").value;

    if (name === "") return alert("اكتب اسم الطالب!");

    const table = document.getElementById("attendanceTable");
    const row = table.insertRow();
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = status;

    // "إرسال" البيانات لمسؤول الغياب (هنا مجرد console)
    console.log("تم إرسال الغياب لمسؤول الغياب:", {name, status});

    // تنظيف الحقول
    document.getElementById("studentName").value = "";
}

// إضافة المخالفات السلوكية
function addBehavior() {
    const name = document.getElementById("behaviorStudent").value;
    const note = document.getElementById("behaviorNote").value;

    if (name === "" || note === "") return alert("اكمل البيانات!");

    const table = document.getElementById("behaviorTable");
    const row = table.insertRow();
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = note;

    console.log("تم إرسال المخالفة للإدارة والمشرف:", {name, note});

    document.getElementById("behaviorStudent").value = "";
    document.getElementById("behaviorNote").value = "";
}

// إضافة الحاجات السيئة / مشاكل
function addProblem() {
    const name = document.getElementById("problemStudent").value;
    const note = document.getElementById("problemNote").value;

    if (name === "" || note === "") return alert("اكمل البيانات!");

    const table = document.getElementById("problemTable");
    const row = table.insertRow();
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = note;

    console.log("تم إرسال المشكلة للإدارة والمشرف:", {name, note});

    document.getElementById("problemStudent").value = "";
    document.getElementById("problemNote").value = "";
}
