import Ping from "../../hooks/Ping";
import Image from "./../../Assets/images/empanada.png";

export const Home = (props) => {
  return (
    <div className="bg-em_white h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-em_orange tracking-wide uppercase">
            Welcome to
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-em_brown sm:text-5xl sm:tracking-tight lg:text-6xl">
            EmpanadaReview.
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Empanadas Review is a web application that allows you to review your
            favorite empanadas from an specific restaurant! You can add your own empanadas to the database,
            and then view them all.
          </p>
        </div>
        <div className="flex justify-center flex-col items-center py-5">
          <img src={Image} width="150" />
          <Ping user={props.user}/>
        </div>
      </div>
    </div>
  );
};
