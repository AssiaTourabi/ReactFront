import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import './style_menu.css';

const ExamManagementComponent = () => {

    const mockExams = [
        { id: 1, code: 'EX1', designation: 'Examen 1', prix: '50', delai: '1' },
        { id: 2, code: 'EX2', designation: 'Examen 2', prix: '80', delai: '2' },
        { id: 3, code: 'EX3', designation: 'Examen 3', prix: '100', delai: '3' },
    ];
    const [showModal, setShowModal] = useState(false);
    const [searchCode, setSearchCode] = useState('');
    const [searchDesignation, setSearchDesignation] = useState('');
    const [filteredExams, setFilteredExams] = useState(mockExams);
    const formRef = useRef(null);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleClearForm = () => {
        if (formRef.current) {
            formRef.current.reset();
        }
    };

    const handleSearch = () => {
        const filtered = mockExams.filter(exam => {
            const codeMatch = searchCode ? exam.code.toLowerCase().includes(searchCode.toLowerCase()) : true;
            const designationMatch = searchDesignation ? exam.designation.toLowerCase().includes(searchDesignation.toLowerCase()) : true;
            return codeMatch && designationMatch;
        });
        setFilteredExams(filtered);
        handleCloseModal();
    };
    

    

    return (
        <div className="main-content flex-grow-1 p-4">
            <div className="text-left mb-4">
                <h2><u>Gestion des Examens</u></h2>
            </div>

            {/* Formulaire d'insertion / modification */}
            <div className="mb-4">
                <div className="bg-secondary text-white d-flex justify-content-between align-items-center p-2">
                    <h5 className="mb-1">Insertion / Modification d'un Examen</h5>
                    <div>
                        <button type="button" className="btn btn-primary btn-sm" onClick={handleClearForm}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eraser" viewBox="0 0 16 16">
                                <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293z"/>
                            </svg>
                        </button>
                        <button type="button" className="btn btn-danger btn-sm" onClick={handleShowModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="p-3">
                    <form ref={formRef} id="majExamenForm">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="code">Code</label>
                                <input type="text" className="form-control" id="code" placeholder="Code de l'examen" required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="designation">Désignation</label>
                                <input type="text" className="form-control" id="designation" placeholder="Désignation de l'examen" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="prix">Prix</label>
                                <input type="number" className="form-control" id="prix" placeholder="Prix de l'examen" required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="delai">Délai</label>
                                <input type="number" className="form-control" id="delai" placeholder="Délai de rendu" required />
                            </div>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="btn btn-success mr-2" id="majinserer" name="action" value="Ajouter">Ajouter</button>
                            <button type="submit" className="btn btn-primary" id="majmodifier" name="action" value="Modifier">Modifier</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Liste des Examens */}
            <div className="mb-4">
                <div className="bg-secondary text-white p-2">
                    <h5 className="mb-0">Liste des Examens</h5>
                </div>
                <div className="p-3">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Désignation</th>
                                <th>Prix</th>
                                <th className="col-md-2">Délai</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredExams.map(exam => (
                                <tr key={exam.id}>
                                    <td>{exam.code}</td>
                                    <td>{exam.designation}</td>
                                    <td>{exam.prix}</td>
                                    <td>{exam.delai}</td>
                                    <td>
                                        <button className="btn btn-outline-primary btn-sm">Modifier</button>
                                        <button className="btn btn-outline-danger btn-sm">Supprimer</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal for searching exams */}
            <Modal show={showModal} onHide={handleCloseModal} className="custom-modal"> 
                <Modal.Header closeButton>
                    <Modal.Title>Rechercher un Examen</Modal.Title>
                </Modal.Header>
                <Modal.Body className="custom-modal">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="searchCode" className="form-label">Code</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="searchCode" 
                                value={searchCode}
                                onChange={(e) => setSearchCode(e.target.value)} 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="searchDesignation" className="form-label">Désignation</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="searchDesignation" 
                                value={searchDesignation}
                                onChange={(e) => setSearchDesignation(e.target.value)} 
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={handleCloseModal}>Annuler</button>
                    <button className="btn btn-primary" onClick={handleSearch}>Rechercher</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ExamManagementComponent;
