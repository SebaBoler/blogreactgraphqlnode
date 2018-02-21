import Conn from './db';
import chai, { expect } from 'chai';

describe('Sequelize', function() {
    describe('Connection to Ms SQL', function() {
        let good = false;

        before(function(done){
            Conn.authenticate()
                .then(function(err) {
                    good = true;
                    done();
                });
        });

    it("Should succeed without errors", function() {
        expect(good).to.be.true;
    });
    });
});