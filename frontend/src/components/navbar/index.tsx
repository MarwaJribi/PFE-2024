

import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";
import { FC, useState } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <div>
        <Button variant="primary" onClick={handleShow} className="me-2">
          Matiére
        </Button>

        <Button variant="primary" onClick={handleShow} className="me-2">
          Fiche de tp
        </Button>
        <Button variant="primary" className="me-2">
          Préparation
        </Button>
        <Button variant="primary" className="me-2">
          Produit Chimique
        </Button>
        <Button variant="primary" className="me-2">
          Consommable
        </Button>
        <Button variant="primary" className="me-2">
          Materiel
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Matiére</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nom Matiére</Form.Label>
              <Form.Control type="text" placeholder="Enter nom de la matiére" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Spécialité</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter la spécialité pour cette matiére"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Nombre de Groupe</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter les nombre de groupe"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleShow}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Navbar;
