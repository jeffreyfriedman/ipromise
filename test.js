let IPromise = require('./ipromise');

const p1 = new IPromise((resolve, reject) => {
  reject('start_reject_1 ');
  resolve('start_resolve_1 ');
  resolve('start_resolve_2 ');
  reject('start_reject_2 ');
}).catch((err) => {
  return IPromise.reject(err + 'catch_1 ');
}).then((data) => IPromise.resolve(data + 'then_1 '))
.catch((err) => IPromise.resolve(err + 'catch_2 '))
.then((data) => data + 'then_2 ');


const p2 = new IPromise((resolve, reject) => {
  resolve('start_resolve_1 ');
  resolve('start_resolve_2 ');
  reject('start_reject_1 ');
  reject('start_reject_2 ');
}).then((data) => {
  return IPromise.resolve(data + 'then_1 ');
}).catch((err) => {
  return IPromise.resolve(err + 'catch_1 ');
}).then((data) => {
  // console.log(data + 'then_2 ');
  return data + 'then_2 ';
});


Promise.all([p1, p2])
.then((results) => console.log(results))
.catch((err) => console.log(err));
