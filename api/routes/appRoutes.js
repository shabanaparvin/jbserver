'use strict';

module.exports = function(app){
    var userController = require('../controllers/userController');
    var debtController = require('../controllers/debtController');
    var creditController = require('../controllers/creditController');

    app.route('/users')
    .get(userController.getAllUsers)
    .post(userController.getUser);

    app.route('/debts').get(debtController.getAllDebts);
    app.route('/debts/:username').get(debtController.getUserDebts);
    app.route('/addDebt').post(debtController.addDebt);
    app.route('/updateDebt').post(debtController.updateDebt)
    app.route('/deleteDebt').post(debtController.deleteDebt)

    app.route('/credits').get(creditController.getAllCredits);
    app.route('/credits/:username').get(creditController.getUserCredits);
    app.route('/addCredit').post(creditController.addCredit);
    app.route('/updateCredit').post(creditController.updateCredit)
    app.route('/deleteCredit').post(creditController.deleteCredit)


}