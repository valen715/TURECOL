const supertest = require( "supertest");
const app = require( "../app");

const request = supertest.agent(app);


describe('', () => {
    it('login Usuario', (done) =>{
        request.post('/usuarios/login-sencillo')
        .send({correo: "ejemplo@eso.com", clave:"Admin1234*"} )
        .expect(200)
        .end(function(err, res) {
        if (err) return done(err);
        return done();
      });
    })
})