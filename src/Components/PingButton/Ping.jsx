import "./ping.css";

function Ping() {
  return (
    <div className="ping">
      <button className="pingButton h-8 w-auto sm:h-10" onClick={ping}>Click me to ping the API</button>
    </div>
  );
}

export default Ping;

async function ping() {
  let start = new Date().getTime();
  const response = await fetch("/ping");
  const data = await response.text();
  console.log(data);

  let diff = new Date().getTime() - start;
  setPingIndicator(data, diff);
}

function setPingIndicator(status, time) {
  document.getElementsByClassName("pingButton")[0].innerHTML = (status + " " + time + "ms");

  setTimeout(function () {
    document.getElementsByClassName("pingButton")[0].innerHTML = "Click me to ping the API";
  }, 5000);


}