module.exports = function (envioriment) {

   envioriment.get('/ceps', function (request, response, next) {
      const resources = envioriment.app.resource;
      resources.Ceps.all(envioriment, request, response, next);
   });

   envioriment.get('/ceps/:cep', function (request, response, next) {
      const resources = envioriment.app.resource;
      resources.Ceps.index(envioriment, request, response, next);
   });

   envioriment.use((err, req, res, next) => {
      res.status(500).json({message: 'Houve um erro inesperado, :(', detail: err.message});
   });

}