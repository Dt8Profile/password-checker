// at least 8 chars long
// has at least one letetr
//has at least one number

const checkPassword = (password) => {
  const isNotValid =
    !/[a-z]/g.test(password) ||
    !/[0-9]/g.test(password) ||
    password.length <= 8;
  return isNotValid ? false : true;
};

//export the function
module.exports = checkPassword;
