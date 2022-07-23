// import React, { FC } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { QueryClient, QueryClientProvider, useQuery } from "react-query";
// import { Index } from "./views";

// const queryClient = new QueryClient();

// export const App: FC = () => {

//   return (
//     <QueryClientProvider client={queryClient}>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Index />} />
//         </Routes>
//       </Router>
//     </QueryClientProvider>
//   );
// };


function App() {
  return (
    <div className="App">
      <button className="pingButton h-8 w-auto sm:h-10" onClick={ping}>Click me to ping the API</button>
    </div>
  );
}

export default App;

async function ping() {
  let start = new Date().getTime();
  const response = await fetch("/ping");
  const data = await response.json();

  let diff = new Date().getTime() - start;
  setPingIndicator(data.status, diff);
}

function setPingIndicator(status: any, time: any) {
  document.getElementsByClassName("pingButton")[0].innerHTML = (status + " " + time + "ms");

  setTimeout(function () {
    document.getElementsByClassName("pingButton")[0].innerHTML = "Click me to ping the API";
  }, 5000);


}