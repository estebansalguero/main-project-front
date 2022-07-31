var UserProfile = (function () {

  var id = 0;
  var name = "";
  var userName = "";
  var lastName = "";
  var password = "";
  var correo = "";
  var telefono = "";  

  var getId = function () {
    return id;
  }
  var getName = function () {
    return name;
  };

  var getUserName = function () {
    return userName;
  }

  var getLastName = function () {
    return lastName;
  };

  var getPassword = function () {
    return password;
  };

  var getCorreo = function () {
    return correo;
  };
  var getTelefono = function () {
    return telefono;
  };

  var setUserData = function (ID, PASSWORD, USERNAME, NAME, LASTNAME, CORREO, TELEFONO) {
    id = ID;
    sessionStorage.setItem("id", id);
    userName = USERNAME;
    sessionStorage.setItem("userName", userName);
    name = NAME;
    sessionStorage.setItem("name", name);
    lastName = LASTNAME;
    sessionStorage.setItem("lastName", lastName);
    password = PASSWORD;
    sessionStorage.setItem("password", password);
    correo = CORREO;
    sessionStorage.setItem("correo", correo);
    telefono = TELEFONO;
    sessionStorage.setItem("telefono", telefono);
  };

  return {
    getName: getName,
    getLastName: getLastName,
    getPassword: getPassword,
    getCorreo: getCorreo,
    getTelefono: getTelefono,
    getUserName: getUserName,
    getId: getId,
    setUserData: setUserData,
  };

})();

export default UserProfile;
