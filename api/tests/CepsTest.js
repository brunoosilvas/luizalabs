require('dotenv').config();

const assert = require('assert');
const mock = require('../config/mock')();
const CepsRepository = require('../app/model/repository/CepsRepository')();
const CepsService = require('../app/model/service/CepsService')();
const CepsDto = require('../app/model/dto/CepsDto')();

async function getService() {
   const mocking = await mock();
   const repository = new CepsRepository(mocking);
   const service = new CepsService(repository, CepsDto);
   return service;
}

describe('CepsService.js', function () {
   
   describe('#isValid', function () {
      describe('Dentro do padrão de cep', function () {
         it('cep: 38035240, cep válido', async function () {            
            const service = await getService();

            const cep = '38035240';
            assert.equal(true, service.isValid(cep));
         });     
         it('cep: 11111111, cep válido', async function () {
            const service = await getService();

            const cep = '11111111';
            assert.equal(true, service.isValid(cep));
         });
      });

      describe('Fora do padrão de cep', function () {
         it('cep: 38035240121, cep inválido', async function () {
            const service = await getService();

            const cep = '38035240121';
            assert.equal(false, service.isValid(cep));
         });
         it('cep: a454sa45, cep inválido', async function () {
            const service = await getService();

            const cep = 'a454sa45';
            assert.equal(false, service.isValid(cep));
         });
         it('cep: 38035-240, cep inválido', async function () {
            const service = await getService();

            const cep = 'a454sa45';
            assert.equal(false, service.isValid(cep));
         });
      });
   });

   describe('#getAll', function () {
      it('Busca de todos os ceps', async function () {
         const service = await getService();

         const ceps = service.getAll();
         assert.equal(true, ceps.data.length > 0);
      });     
   });

   describe('#get', function () {
      it('Busca um cep específico, cep: 38035240', async function () {
         const service = await getService();

         const cep = service.get('38035240');
         assert.equal(true, (cep.data ? true : false));
      });     
      it('Busca um cep específico, aprofundando a pesquisa utilizando .env para saber quantas vezes substitui zero da direita para esquerda, cep: 38035241', async function () {
         const service = await getService();

         const cep = service.get('38035241');
         assert.equal(true, (cep.data ? true : false));
      });
      it('Busca um cep específico, configurado no .env 3 vezes de substituição de zero, cep: 38038299, na base existe o cep: 38038000', async function () {
         const service = await getService();

         const cep = service.get('38038299');
         assert.equal(cep.data.cep, '38038000');
      });

   });
});