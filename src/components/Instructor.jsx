import { Dropdown } from "react-bootstrap";

export function Instructor(){
    return(
        <div>
            <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       Instructor Name
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Vijay Setupati</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Bala Subramanyan</Dropdown.Item>
        <Dropdown.Item href="#/action-3">glen A.</Dropdown.Item>
        <Dropdown.Item href="#/action-3">jaison joseph</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Akran Khan</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
    )
}