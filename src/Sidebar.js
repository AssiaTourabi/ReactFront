import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style_menu.css';


const Sidebar = () => {
    return (
        <Navbar expand="lg" className="sidebar shadow-sm flex-column p-3">
            <img
                src={require('./img/logoGesmed2.png')}
                height="80"
                className="d-inline-block align-top mb-4"
                alt="Gesmed Logo"
            />
            <Nav className="flex-column">
                <Nav.Link as={Link} to="/deconnexion">Accueil</Nav.Link>
                <NavDropdown title="Comptes Rendus" id="comptes-rendus-dropdown">
                    <NavDropdown.Item as={Link} to="/gestion-crs">Gestion des CRs</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/ajout-groupe">Ajout groupé</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/statistiques-crs">Statistiques</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Paramétrage" id="parametrage-dropdown">
                    <NavDropdown.Item as={Link} to="/examens">Examens</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/organismes">Organismes</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/medecins">Médecins</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/organes">Organes</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/lesions">Lesions</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Gestion" id="gestion-dropdown">
                    <NavDropdown.Item as={Link} to="/activites">Activités</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/comptabilite">Comptabilité</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/incoherences">Incohérences</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/reporting">Reporting</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/tableaux-de-bord">Tableaux de bord</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Administration" id="administration-dropdown">
                    <NavDropdown.Item as={Link} to="/Comptes">Comptes</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/acces-droits">Droits</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/parametrage">Paramétrage</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Réaffectations" id="reaffectations-dropdown">
                    <NavDropdown.Item as={Link} to="/reaffectation-demande">Demande</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/reaffectation-facture">Facture</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Outils" id="outils-dropdown">
                    <NavDropdown.Item as={Link} to="/mes-activites">Mes activités</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/recherche-avancee-demande">Recherche</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/fusion-medecins">Fusion</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/gestion-factures">Factures</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/suivi-demande">Suivi</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/facturation-personnalisee">Facturation</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/modification-patients">Patients</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/deconnexion" className="mt-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                        <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                    </svg>
                    Déconnexion
                </Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Sidebar;
