import React, { useEffect } from "react"
import logo from '../../assets/logo.png';
import './header.css';
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




const Header = () => {


  useEffect(() => {
  }, [])

  return (

    <>
      <Navbar collapseOnSelect expand="lg" className="custom-nav" >
        <Container>
        <Navbar.Brand as={Link} to="/"><img src={logo} width="80px" alt="" srcset="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            {/* <Navbar.Brand as={Link} to="/"><img src={logo} width="80px" alt="" srcset="" /></Navbar.Brand> */}
            </Nav>
            <Nav >
                <NavDropdown title="HOME" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/empresa">A Empresa</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/clientes">Clientes</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/parceiros">Parceiros</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="SOLUÇÕES" id="basic-nav-dropdown">
                  <NavDropdown title="Suporte ao usuário final" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="">Helpdesk</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="">Servicedesk</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="">FieldService</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="">Gerenciamento de Ativos</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Suporte a Empresas" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="">NOC - Network Operations Center</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="">SOC -  Security Operations Center</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="">BOC – Backup Operations Center</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="">Gestão de Datacenter</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="">Gestão de Redes</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="">Outsourcing de Firewall</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="">Serviços Gerenciados</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Projetos em T.I" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="">Auditoria</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="">Consultoria</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="">LGPD</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="">Licenciamento</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="">Locação de mão de obra especializada</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="">Plano de Contingência</NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
                <NavDropdown title="SEGMENTOS" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="">Financeiro</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="">Industria</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="">Governo</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="">Saúde</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="">Serviços</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="">Varejo</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="DATACENTER" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="">Amarenamento de dados</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="">Backup Offsite</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="">Hospedagem de aplicações</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="">Hospedagem de sites</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="">Hospedagem de área de trabalho remota</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="">Hospedagem de servidores físicos ou virtuais</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="">Integração de aplicativos e API's</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="">Provisionamento de servidores sob demanda</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="">Links dedicados</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/">CONTATO</Nav.Link>
                <Nav.Link href="https://www.tcdobrasil.com" target="_blank">BLOG T.I</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header