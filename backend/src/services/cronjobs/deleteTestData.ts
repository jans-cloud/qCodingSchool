/* eslint-disable import/extensions */

import AccountModel from '../../apis/accounts/models/account/accountModel';
import EmailVerificationModel from '../../apis/accounts/models/registration/emailverificationModel';

function deleteTestData() {
  const time = 180000 * 1;
  setInterval(() => {
    try {
      const deleteTime = Date.now() - time;
      AccountModel.deleteMany({ created: { $lte: deleteTime } }, (error) => {
        console.log(error);
      });
      EmailVerificationModel.deleteMany({ created: { $lte: deleteTime } }, (error) => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  }, time);
}

// 3600000
function deleteVerifications() {
  const time = 180000 * 20;
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
