// https://maxcode.dev/problems/http-router/

class HttpRouter {

}

const router = new HttpRouter();

router.addHandler("/api/users", "GET", () => {
  return ["user1", "user2"];
});

router.addHandler("/api/users", "POST", () => {
  return "User added";
});

router.addHandler("/api/login", "POST", () => {
  return "OK";
});

console.log(router.runRequest("/api/users", "GET"));
// ["user1", "user2"]

console.log(router.runRequest("/api/login", "POST"));
// "OK"

console.log(router.runRequest("/api/login", "PUT"));
// "Error 404: Not Found"

console.log(router.runRequest("/api/send", "POST"));
// "Error 404: Not Found"
