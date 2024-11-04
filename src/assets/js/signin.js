document.getElementById("login-form").onsubmit = function(event) {
  event.preventDefault();
  const username = document.getElementById("floatingUsername").value;
  const password = document.getElementById("floatingPassword").value;

  // Kiểm tra username và password từ file (phần này cần server để đọc file)
  // Tạm thời giả sử đăng nhập thành công cho ví dụ này
  if (username && password) {
      alert("Login successful!");
      window.location.href = "home.html";
  } else {
      alert("Invalid username or password");
  }
};
