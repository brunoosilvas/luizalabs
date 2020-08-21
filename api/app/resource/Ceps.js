
module.exports.index = async function (application, request, response, next) {

   try {
      const mock = await application.config.mock();

      const models = application.app.model;
      const repository = new models.repository.CepsRepository(mock);
      const service = new models.service.CepsService(repository, models.dto.CepsDto);
     
      const param = request.params;
      const valid = service.isValid(param.cep);

      if (!valid) {
         let responseDto = new models.dto.CepsDto();
         responseDto.message = "CEP inválido";
         response.json(responseDto);
         return;
      }

      let responseDto = service.get(param.cep);
      response.json(responseDto);
   } catch (err) {
      const error = new Error(err)
      return next(error);
   }
  
}

module.exports.all = async function (application, request, response, next) {
   try {

      const mock = await application.config.mock();

      const models = application.app.model;
      const repository = new models.repository.CepsRepository(mock);
      const service = new models.service.CepsService(repository, models.dto.CepsDto);

      let responseDto = service.getAll();
      response.json(responseDto);

   } catch (err) {
      const error = new Error(err)
      return next(error);
   }
}
