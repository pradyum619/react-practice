import React, { useState } from "react";
import Icon from "./Components/Icon";

// Toast import
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Bootstrap import
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
const itemArray = new Array(9).fill("");

export default function App() {
  const [isCross, setIsCross] = useState(false);
  const [winMsg, setWinMsg] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMsg("");
    //TEST THIS itemArray.fill("empty");
    itemArray.fill("");
  };

  const checkIsWinner = () => {
    //Left Cross 0-4-8
    if (
      itemArray[0] &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMsg(itemArray[0] + " WIN");
    } //Right Cross 2-4-6
    else if (
      itemArray[2] &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMsg(itemArray[2] + " WIN");
    } //Row 1
    else if (
      itemArray[0] &&
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2]
    ) {
      setWinMsg(itemArray[0] + " WIN");
    } //Row 2
    else if (
      itemArray[3] &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMsg(itemArray[3] + " WIN");
    } //Row 3
    else if (
      itemArray[6] &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMsg(itemArray[6] + " WIN");
    } //Col 1
    else if (
      itemArray[0] &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMsg(itemArray[0] + " WIN");
    } //Col 2
    else if (
      itemArray[1] &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMsg(itemArray[1] + " WIN");
    } //Col 3
    else if (
      itemArray[2] &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMsg(itemArray[2] + " WIN");
    }
  };

  const changeItem = (item_number) => {
    if (winMsg) {
      return toast(winMsg, { type: "success" });
    }

    if (itemArray[item_number] === "") {
      itemArray[item_number] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("Already filled", { type: "info" });
    }

    checkIsWinner();
  };

  return (
    <>
      <Container className="p-5">
        <ToastContainer position="bottom-center" />
        <Row>
          <Col md={6} className="offset-md-3">
            {winMsg ? (
              <div className="mb-2 mt-2 ">
                <h1 className="text-success text-uppercase text-center">
                  {winMsg}
                </h1>
                <Button
                  style={{ width: "100%" }}
                  color="success"
                  onClick={reloadGame}
                >
                  Reload The Game
                </Button>
              </div>
            ) : (
              <h1 className="text-center text-warning">
                {isCross ? "Cross-turn" : "Circle-turn"}
              </h1>
            )}
            <div className="grid">
              {itemArray.map((item, index) => {
                return (
                  <Card
                    key={index}
                    onClick={() => {
                      changeItem(index);
                    }}
                  >
                    <CardBody className="box">
                      <Icon icon_name={item} />
                    </CardBody>
                  </Card>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
