// https://maxcode.dev/problems/http-router/

class HttpRouter {
  routes = new Map();

  addHandler(route, method, handler) {
    // Не уверен на счёт использования строк в качестве
    // ключей, но, вроде бы, не так уж и плохо.
    this.routes.set(`${route}-${method}`, handler);
  }

  runRequest(route, method) {
    if (!this.routes.has(`${route}-${method}`)) {
      return "Error 404: Not Found";
    }

    return this.routes.get(`${route}-${method}`).call();

  }
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
