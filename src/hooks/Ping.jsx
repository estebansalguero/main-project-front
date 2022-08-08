const Ping = () => {
  return (
    <>
      <button
        type="button"
        className="pingButton inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={ping}
      >
        Check your connection!
      </button>
    </>
  );
};

export default Ping;

async function ping() {
  let start = new Date().getTime();
  const response = await fetch("/ping");
  const data = await response.text();

  let diff = new Date().getTime() - start;
  setPingIndicator(data, diff);
}

const setPingIndicator = (status, time) => {
  document.getElementsByClassName("pingButton")[0].innerHTML =
    status + " " + time + "ms";

  setTimeout(() => {
    document.getElementsByClassName("pingButton")[0].innerHTML =
      "Click me to ping the API";
  }, 5000);
};
