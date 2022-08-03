import { useEffect } from "react";

export const Profile = () => {
  useEffect(() => {
    fillInfo();
  }, []);

  return (
    <>
      <div className="flex items-center h-screen w-full justify-center">
        <div className="max-w-lg">
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl mb-20">
            Main profile
          </p>
          <div className="bg-gray-50 shadow-2xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://c.tenor.com/ZydWxPTppJIAAAAC/tridance-yellow-triangle.gif"
                alt="Triangle"
              />
            </div>
            <div className="p-2">
              <h3
                id="userName"
                className="text-center text-xl text-gray-900 font-medium leading-8"
              />
              <div className="text-center text-gray-400 text-xs font-semibold">
                <p>User</p>
              </div>
              <table className="text-xs my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Name
                    </td>
                    <td id="name" className="px-2 py-2" />
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Last name
                    </td>
                    <td id="lastName" className="px-2 py-2" />
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Email
                    </td>
                    <td id="email" className="px-2 py-2" />
                  </tr>
                </tbody>
              </table>
              <div className="text-center my-3">
                <button
                  type="button"
                  className="pingButton inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleLogout}
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const fillInfo = () => {
  console.log(sessionStorage);
  document.getElementById("userName").innerHTML =
    sessionStorage.getItem("userName");
  document.getElementById("name").innerHTML = sessionStorage.getItem("name");
  document.getElementById("lastName").innerHTML =
    sessionStorage.getItem("lastName");
  document.getElementById("email").innerHTML = sessionStorage.getItem("correo");
};

const handleLogout = () => {
  sessionStorage.clear();
  window.location.href = "/";
};
