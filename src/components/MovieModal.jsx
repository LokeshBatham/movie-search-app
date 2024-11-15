import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MovieModal = ({ show, handleClose, movieDetails }) => {
  if (!movieDetails) return null;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        
      </Modal.Header>
      <Modal.Body className="pt-0">
        <Modal.Title className="w-100 text-center mb-3">{movieDetails.Title}</Modal.Title>
        <p><strong>Genre:</strong> {movieDetails.Genre}</p>
        <p><strong>Plot:</strong> {movieDetails.Plot}</p>
        <p><strong>Ratings:</strong> {movieDetails.imdbRating}</p>
      </Modal.Body>
     
    </Modal>
  );
};

export default MovieModal;
