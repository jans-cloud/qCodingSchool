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

// 3600000
function deleteVerifications() {
  const time = 180000 * 10;
  setInterval(() => {
    try {
      const deleteTime = Date.now() - time;
      EmailVerificationModel.deleteMany({ created: { $lte: deleteTime } }).then((res) => {
        console.log('Deleting: ', res.n);
      });
    } catch (error) {
      console.log(error);
    }
  }, time);
}


export {
  deleteVerifications,
  deleteTestData,
};
