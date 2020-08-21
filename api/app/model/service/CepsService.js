function CepsService(repository, type) {
   this.repository = repository;
   this.type = type;
}

CepsService.prototype.isValid = function (cep) {
   if (!cep || /^\s*$/.test(cep) || cep.length !== 8) {
      return false;      
   }
   return /^\d+$/.test(cep);
}

CepsService.prototype.getAll = function () {
   let value = new this.type();
   value.data = this.repository.findAll();
   return value;
}

CepsService.prototype.get = function (cep) {   
   let value = new this.type();
   value.findFirst = false;
   value.findBase = cep;

   let change = 1;
   let temp = null;
   let tempCep = cep;
   while ((change - 1) <= process.env.CHANGE_FIND_CEP) {
      temp = this.repository.findByCep(tempCep);
      if (temp) {
         value.data = temp;
         value.findFirst = (change == 1);
         break;
      } else {
         tempCep = tempCep.split('');
         tempCep[cep.length - change] = '0';
         tempCep = tempCep.join('');
      }
      change++;
   }

   if (value.data) {
      value.message = 'CEP válido';
   } else {
      value.message = 'CEP não encontrado';
      value.data = null;
   }

   return value;
}

module.exports = function () {
   return CepsService;
}