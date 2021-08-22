// Callback Hell Example
// 가독성이 너무 떨어진다, 한 눈에 이해하기 어렵다
// 콜백 체인이 길어질수록 나중에 에러가 발생하면 고치기 어렵다
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "chooble" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "chooble") {
        onSuccess({ name: "chooble", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const UserStorage = new UserStorage();
const id = prompt("Enter Your ID");
const password = prompt("Enter Your password");
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {}
    );
  },
  error => {
    console.log(error);
  }
);
