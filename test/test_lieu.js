const Lieu = require('../models/lieu');

const assert = require('assert');

describe("Lieu",()=>{
    describe("Create Lieu", ()=>{
        let unLieu1;

        before(function () {
          unLieu1 = new Lieu(1,"Nantes");
        });

        it("Cration d'un lieu",()=>{
            assert.equal(unLieu1.libelle, 'Nantes', 'Probleme de création');
        });
});
});