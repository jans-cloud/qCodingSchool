/* eslint-disable import/extensions */

import AccountModel from '../../apis/accounts/models/account/accountModel';
import EmailVerificationModel from '../../apis/accounts/models/registration/emailverificationModel';

function deleteTestData() {
  setInterval(() => {
    try {
      const deleteTime = Date.now() - 180000;
      AccountModel.deleteMany({ created: { $lte: deleteTime } }, (error) => {
        console.log(error);
      });
      EmailVerificationModel.deleteMany({ created: { $lte: deleteTime } }, (error) => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  }, 180000);
}

function deleteVerifications() {
  setInterval(() => {
    try {
      const deleteTime = Date.now() - (60000 * 60);
      EmailVerificationModel.deleteMany({ created: { $lte: deleteTime } });
    } catch (error) {
      console.log(error);
    }
  }, (60000 * 60));
}


export {
  deleteVerifications,
  deleteTestData,
};
