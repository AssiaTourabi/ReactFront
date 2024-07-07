import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import './style_menu.css';

const Medecin = () => {
  
    const mockMedecins = [
        {id:1 ,Nom: 'med1', Specialité: 'Sp1', Telephone: 'tel1', Email: 'med1@gamil.com', Adresse: 'ad1' },
        { id:2 ,Nom: 'med2', Specialité: 'Sp2', Telephone: 'tel2', Email: 'med2@gamil.com', Adresse: 'ad2' },
        { id:3,Nom: 'med3', Specialité: 'Sp3', Telephone: 'tel3', Email: 'med3@gamil.com', Adresse: 'ad3' },
    ];

    const [showModal, setShowModal] = useState(false);
    const [searchNom, setSearchNom] = useState('');
    const [searchSpecilate, setSearchSpecialte] = useState('');
    const [filteredMedecins, setFilteredMedecins] = useState(mockMedecins);
    const formRef = useRef(null);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleClearForm = () => {
        if (formRef.current) {
            formRef.current.reset();
        }
    };

    const handleSearch = () => {
        const filtered = mockMedecins.filter(exam => 
            exam.Nom.toLowerCase().includes(searchNom.toLowerCase()) || 
            exam.Specialité.toLowerCase().includes(searchSpecilate.toLowerCase())
        );
        setFilteredMedecins(filtered);
        handleCloseModal();
    };

    return (
        <div className="main-content flex-grow-1 p-4">
                    <div className="text-left mb-4">
                        <h2> <u>Gestion des Medecins</u></h2>
                    </div>

                    {/* Formulaire d'insertion / modification */}
                    <div className="card shadow-sm mb-4">
                        <div className="card-header bg-secondary text-white d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Insertion / Modification d'un Medecin</h5>
                            <div>
                            <button type="button" className="btn btn-primary btn-sm" onClick={handleClearForm}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eraser" viewBox="0 0 16 16">
  <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293z"/>
</svg>
                                                </button>
                                <button type="button" className="btn btn-danger btn-sm" onClick={handleShowModal}>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>                                         </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <form id="majExamenForm">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="code">Nom</label>
                                        <input type="text" className="form-control" id="nom" placeholder="" required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="designation">Specialté</label>
                                        <input type="text" className="form-control" id="specialite" placeholder="" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="prix">Télephone</label>
                                        <input type="number" className="form-control" id="tel" placeholder=""  />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="delai">Email</label>
                                        <input type="email" className="form-control" id="email" placeholder=""  />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="delai">Adresse</label>
                                        <input type="text" className="form-control" id="adress" placeholder=""  />
                                    </div>
                                </div>
                                <div className="text-right">
                                    <button type="submit" className="btn btn-success mr-2" id="majinserer" name="action" value="Ajouter">Ajouter</button>
                                    <button type="submit" className="btn btn-primary" id="majmodifier" name="action" value="Enregistrer les Modifications">Enregistrer</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Table d'examens */}
                    <div className="card shadow-sm mb-4">
                        <div className="card-header bg-secondary text-white">
                            <h5 className="mb-0">Liste des Medecins</h5>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th className="col-md-1">Nom</th>
                                        <th>Specialté</th>
                                        <th>Telephone</th>
                                        <th>Email</th>
                                        <th>Adresse</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredMedecins.map(medecin=> (
                                        <tr key={medecin.id}>
                                            <td>{medecin.Nom}</td>
                                            <td>{medecin.Specialité}</td>
                                            <td>{medecin.Telephone}</td>
                                            <td>{medecin.Email}</td>
                                            <td>{medecin.Adresse}</td>
                                            <td>
                                                <button className="btn btn-outline-primary btn-sm" >Modifier</button>
                                                <button className="btn btn-outline-danger btn-sm" >Supprimer</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Modal for editing exam */}
                    <Modal show={showModal} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modifier l'Examen</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="editNom" className="form-label">Nom</label>
                                    <input 
                                type="text" 
                                className="form-control" 
                                id="searchNom" 
                                value={searchNom}
                                onChange={(e) => setSearchNom(e.target.value)} 
                            />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="editSpecialte" className="form-label">Specialité</label>
                                    <input 
                                type="text" 
                                className="form-control" 
                                id="searchSpecilate" 
                                value={searchSpecilate}
                                onChange={(e) => setSearchSpecialte(e.target.value)} 
                            />
                                </div>
                                
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <button className="btn btn-secondary" onClick={handleCloseModal}>Annuler</button>
                            <button className="btn btn-primary" onClick={handleSearch}>Checher</button>
                        </Modal.Footer>
                    </Modal>
                </div>
           
   
);
};

export default Medecin;
