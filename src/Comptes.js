import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './compte.css';

const Comptes = () => {
    const [comptes, setComptes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        // Remplacer cette partie par un appel API pour récupérer les comptes
        const fetchedComptes = [
            { idCompte: 1, nom: 'Doe', prenom: 'John', login: 'jdoe', actif: 1, accesExterne: 1 },
            { idCompte: 2, nom: 'Smith', prenom: 'Anna', login: 'asmith', actif: 0, accesExterne: 0 }
        ];
        setComptes(fetchedComptes);
    }, []);

    const afficherAccesExterne = true; // Variable pour afficher ou non l'accès externe

    const filteredComptes = comptes.filter(cpt =>
        `${cpt.nom} ${cpt.prenom}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div id="container" className="container-fluid">
          

            <div id="mainContent" className="p-4 bg-light">
            <div >
                <h2> <u> Gestion des comptes</u></h2>
            </div>
                <div className="d-flex justify-content-between mb-3">
                    <input
                        type="text"
                        className="form-control w-50"
                        placeholder="Rechercher un utilisateur"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    
                </div>
                <div className="table-responsive">
                    <table className="table table-hover table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>UTILISATEUR</th>
                                <th>IDENTIFIANT</th>
                                <th>MOT DE PASSE</th>
                                <th colspan="2">ETAT</th>
                               
                                 <th colspan="2">ACCES DE L'EXTERIEUR</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {filteredComptes.map(cpt => {
                                const nom = `${cpt.nom} ${cpt.prenom}`;
                                return (
                                    <tr key={cpt.idCompte}>
                                        <td><strong>{nom}</strong></td>
                                        <td>{cpt.login}</td>
                                        <td>
                                            <Link
                                                to="/comptes"
                                                title={`Initialiser le mot de passe de ${nom}`}
                                                className="btn btn-warning btn-sm"
                                            >
                                                Initialiser
                                            </Link>
                                        </td>
                                        {cpt.actif === 1 ? (
                                            <>
                                                <td>Activé</td>
                                                <td>
                                                    <Link
                                                        to={`lister.go?obj=compte&action=activer&id=${cpt.idCompte}&champ=actif&valeur=0`}
                                                        title={`Désactiver le compte de ${nom}`}
                                                        className="btn btn-danger btn-sm"
                                                    >
                                                        Désactiver
                                                    </Link>
                                                </td>
                                            </>
                                        ) : (
                                            <>
                                                <td>Désactivé</td>
                                                <td>
                                                    <Link
                                                        to={`lister.go?obj=compte&action=activer&id=${cpt.idCompte}&champ=actif&valeur=1`}
                                                        title={`Activer le compte de ${nom}`}
                                                        className="btn btn-success btn-sm"
                                                    >
                                                        Activer
                                                    </Link>
                                                </td>
                                            </>
                                        )}
                                        {afficherAccesExterne && (
                                            cpt.accesExterne === 1 ? (
                                                <>
                                                    <td>Permis</td>
                                                    <td>
                                                        <Link
                                                            to={`lister.go?obj=compte&action=activer&id=${cpt.idCompte}&champ=externe&valeur=0`}
                                                            title={`Restreindre l'accès de ${nom} depuis l'extérieur`}
                                                            className="btn btn-danger btn-sm"
                                                        >
                                                            Restreindre
                                                        </Link>
                                                    </td>
                                                </>
                                            ) : (
                                                <>
                                                    <td>Restreint</td>
                                                    <td>
                                                        <Link
                                                            to={`lister.go?obj=compte&action=activer&id=${cpt.idCompte}&champ=externe&valeur=1`}
                                                            title={`Permettre l'accès depuis l'extérieur à ${nom}`}
                                                            className="btn btn-success btn-sm"
                                                        >
                                                            Permettre
                                                        </Link>
                                                    </td>
                                                </>
                                            )
                                        )}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div id="footer" className="p-3 bg-primary text-white text-center">
                <p>&copy; 2024 Gesmed</p>
            </div>
        </div>
    );
};

export default Comptes;
