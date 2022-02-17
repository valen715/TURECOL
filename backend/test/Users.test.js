const supertest = require("supertest");
const app = require("../app");
const { loginSencillo } = require("../controllers/usuarios.controller");

const request = supertest.agent(app);

describe("Login", () => {
  it("login correcto", (done) => {
    request
      .post("/usuarios/login-sencillo")
      .send({ correo: "ejemplo@eso.com", clave: "Admin1234*" })
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });

  it("login invalido", (done) => {
    request
      .post("/usuarios/login-sencillo")
      .send({ correo: "hola@eso.com", clave: "hola123*" })
      .expect(204)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
});
});

describe("Registro", () => {
  it("Registro correcto", (done) => {
    request
      .post("/usuarios/registrarUsuario")
      .send({ nombre: "pepita", correo: `${Math.random()}pepe@hola.com`, clave: "pepito1234*" })
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
  it("Registro invalido", (done) => {
    request
      .post("/usuarios/registrarUsuario")
      .send({ nombre: "pepito", correo: "pepito@eso.com", clave: "pepito1234*" })
      .expect(409)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
}); 
