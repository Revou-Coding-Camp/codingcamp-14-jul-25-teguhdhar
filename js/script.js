document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const outputBox = document.getElementById("output-box");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const message = document.getElementById("message").value.trim();

    if (!name || !dob || !gender || !message) {
      alert("Harap lengkapi semua field.");
      return;
    }

    const now = new Date().toString();

    outputBox.innerHTML = `
      <p><strong>Current time:</strong> ${now}</p>
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>Tanggal Lahir:</strong> ${dob}</p>
      <p><strong>Jenis Kelamin:</strong> ${gender}</p>
      <p><strong>Pesan:</strong> ${message}</p>
    `;
  });
});