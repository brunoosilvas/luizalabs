function CepsRepository(mock) {
   this.mock = mock;
}

CepsRepository.prototype.findAll = function () {
   return this.mock.get('ceps')
      .value();
}

CepsRepository.prototype.findByCep = function (cep) {
   return this.mock.get('ceps')
      .find({ cep })
      .value();
}

module.exports = function () {
   return CepsRepository;
}