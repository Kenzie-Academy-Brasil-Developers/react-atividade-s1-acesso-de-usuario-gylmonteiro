import App from "../../App";

const RestrictedPage = ({ statusLog, nameUser, login, logout }) => {
  return (
    <div>
      {statusLog ? (
        <div>
          <h1> Seja bem vindo {nameUser} </h1>
          <button
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h1>{nameUser}, você não pode acessar essa página</h1>
          <button
            onClick={() => {
              login();
            }}
          >
            {" "}
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default RestrictedPage;
