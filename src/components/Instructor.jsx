import Accordion from "react-bootstrap/Accordion";
import img30 from "../images/vijay.jpg";
import img20 from "../images/glenn.jpg";
import img40 from "../images/karate1.jpeg";
import img50 from "../images/numair.jpg";
import img60 from "../images/karate1.jpeg";
export function Instructor() {
  return (
    <div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Vijay Setupati</Accordion.Header>
          <Accordion.Body>
            <img
              style={{ height: "50vh" }}
              className="mx-auto d-block"
              src={img30}
              alt="First slide"
            />
            <p className="text-center">
              He is 10th Grade black belt in shotogan karate, first class black
              belt in kick-boxing, expert in Mua-thai Fighting skills.
            </p>
            <p className="text-center">
              National trainer (certified from National karate institute of
              India)
            </p>
            <p className="text-center">
              Certified from Japanese Karate Association
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>glen A.</Accordion.Header>
          <Accordion.Body>
            <img
              style={{ height: "50vh" }}
              className="mx-auto d-block"
              src={img20}
              alt="First slide"
            />
            <p className="text-center">
              He is Green belt in shotogan karate , first class black belt in
              kick-boxing .
            </p>
            <p className="text-center">
              National trainer (certified from National karate institute of
              India)
            </p>
            <p className="text-center">State champion in karate</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Avinash Kumar Singh</Accordion.Header>
          <Accordion.Body>
            <img
              style={{ height: "50vh" }}
              className="mx-auto d-block"
              src={img40}
              alt="First slide"
            />
            <p className="text-center">
              He is Blue belt in shotogan karate , first class black belt in
              kick-boxing, knows mua-thai fighting Skills .
            </p>
            <p className="text-center">
              National trainer (certified from National karate institute of
              India)
            </p>
            <p className="text-center">State champion in karate</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Numair shaikh</Accordion.Header>
          <Accordion.Body>
            <img
              style={{ height: "50vh" }}
              className="mx-auto d-block"
              src={img50}
              alt="First slide"
            />

            <p className="text-center">
              He is Blue belt in shotogan karate , first class black belt in
              kick-boxing, knows mua-thai fighting Skills .
            </p>
            <p className="text-center">
              National trainer (certified from National karate institute of
              India)
            </p>
            <p className="text-center">State champion in karate</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Gourav Choubey</Accordion.Header>
          <Accordion.Body>
            <img
              style={{ height: "50vh" }}
              className="mx-auto d-block"
              src={img60}
              alt="First slide"
            />

            <p className="text-center">
              He is Blue belt in shotogan karate , first class black belt in
              kick-boxing, knows mua-thai fighting Skills .
            </p>
            <p className="text-center">
              National trainer (certified from National karate institute of
              India)
            </p>
            <p className="text-center">State champion in karate</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        
    </div>
  );
}
