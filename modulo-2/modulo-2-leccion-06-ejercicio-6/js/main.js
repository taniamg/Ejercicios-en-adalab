"use strict";
const jobUser = "developer";

const userInfo = {};
userInfo.firstname = "Tania";
userInfo.lastName = "Martín";
userInfo.age = 40;
userInfo.job = function () {
  return (this.job = jobUser);
};
