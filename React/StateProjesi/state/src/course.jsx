import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import Kompleweb from "./images/kompleweb.jpg";
import "./course.css";

function Course({ courseName }) {
  const courseMap = {
    Angular: Angular,
    Bootstrap: Bootstrap,
    Ccsharp: Ccsharp,
    Kompleweb: Kompleweb,
  };

  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} />
    </div>
  );
}

export default Course;
