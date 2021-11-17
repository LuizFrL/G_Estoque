function getToken(username, password) {
 const credentials = {
    username: username,
    password: password
  };
  console.log(credentials)
  const API = "http://127.0.0.1:8000";
  $.ajax({
    method: "POST",
    url: API + "/api/token/",
    data: credentials,
    success: function (data) {
      localStorage.setItem("token", `${data.access}`);
      localStorage.setItem("username", `${username}`)
      document.isAdmin = credentials.username
    },
    
  });
}
