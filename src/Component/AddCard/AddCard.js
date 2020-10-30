import React, { useState } from "react";
import ReactStars from "react-stars";
import { Button, Modal, Form } from "react-bootstrap";
function AddCard({ addmovies }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescrption] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rate, setRate] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
       Add a new film
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Titre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer posterurl"
                onChange={(e) => setTitle(e.target.value)}
              />
              <Form.Label>PosterUrl :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer posterurl"
                onChange={(e) => setPosterUrl(e.target.value)}
              />

              <Form.Label>Description :</Form.Label>
              <Form.Control
                type="text"
                placeholder="entrer description"
                onChange={(e) => setDescrption(e.target.value)}
              />
            </Form.Group>

            <Form.Label>Rating :</Form.Label>
            <ReactStars
              count={5}
              size={24}
              color2={"#ffd700"}
              half={false}
              onChange={(value) => setRate(value)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleClose();
              addmovies({
                title: title,
                description: description,
                posterUrl: posterUrl,
                rate: rate,
              });
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCard;