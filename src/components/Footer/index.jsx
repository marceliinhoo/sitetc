import React, { useEffect } from "react"
import logo from '../../assets/logo.png';
import './footer.css';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {


    useEffect(() => {
    }, [])

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
   /*  const myStyle = {
        height: '100%',
        minHeight: '300px'
    }; */

    return (

        <>

            <div id="footer">
                <div className="boxfooter1">

                    <div className="row">
                        <div className="col-md-3 align1">
                            <img src={logo} className="img-fluid" width={"100px"} alt="" />
                            <h4>GRUPO TC DO BRASIL</h4>
                            <p style={{ textAlign: 'justify' }}>

                                “Ser o melhor parceiro para nossos clientes, oferecendo serviços de qualidade e atendimento diferenciado, garantindo disponibilidade, competitividade e segurança das informações.”</p>

                        </div>
                        <div className="col-md-2 lista ">

                            <ul>
                                <li><Link ><h5>LINKS</h5></Link></li>
                                <li><Link to="/empresa">A Empresa</Link></li>
                                <li><Link to="/clientes">Clientes</Link><br /></li>
                                <li><Link to="/parceiros">Parceiros</Link><br /></li>
                                <li><Link to="/contato">Contato</Link><br /></li>
                                <li> <Link to="https://www.tcdobrasil.com" target="_blank" href="" >Blog TI</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-2 lista">


                            <ul>
                                <li><Link ><h5>LINKS</h5></Link></li>
                                <li><Link to="/helpdesk">Helpdesk</Link></li>
                                <li><Link to="/servicedesk">Servicedesk</Link><br /></li>
                                <li><Link to="/fieldservice">FieldService</Link><br /></li>
                               {/*  <li><Link to="/">Gerenciamento de Ativos</Link><br /></li> */}
                                <li><Link to="/noc">NOC</Link></li>
                                <li><Link to="/soc">SOC</Link></li>
                                <li><Link to="/boc">BOC</Link><br /></li>
                                <li><Link to="/datacenter">Gestão de Datacenter</Link><br /></li>
                                <li><Link to="/redes">Gestão de Redes</Link><br /></li>
                                <li><Link to="/outsourcing">Outsourcing de Firewall</Link></li>
                                <li><Link to="/sergerenciados">Serviços Gerenciados</Link></li>
                                <li><Link to="/auditoria">Auditoria</Link><br /></li>
                                <li><Link to="/consultoria">Consultoria</Link><br /></li>
                                <li><Link to="/lgpd">LGPD</Link><br /></li>
                                <li><Link to="/licenciamento">Licenciamento</Link></li>
                                <li><Link to="/locacao">Locação de mão de obra</Link></li>
                                <li><Link to="/contingencia">Contingência</Link><br /></li>


                            </ul>

                        </div>
                        <div className="col-md-2 lista">

                            <ul>
                                <li><Link ><h5>LINKS</h5></Link></li>
                                <li><Link to="/finanaceiro">Financeiro</Link></li>
                                <li><Link to="/industria">Industria</Link><br /></li>
                                <li><Link to="/governo">Governo</Link><br /></li>
                                <li><Link to="/saude">Saúde</Link><br /></li>
                                <li><Link to="/logistica">Logistica</Link></li>
                                <li><Link to="/varejo">Varejo</Link></li>
                                <li><Link to="/armazenamento">Armazenamento de dados</Link><br /></li>
                                <li><Link to="/backup">Backup Offsite</Link><br /></li>
                                <li><Link to="/aplicacoes">Hospedagem de aplicações</Link><br /></li>
                                <li><Link to="/sites">Hospedagem de sites</Link></li>
                                <li><Link to="/areadetrabalho">Hospedagem de area de trabalho </Link></li>
                                <li><Link to="/servfisicosvirtuais">Hospedagem se servidores</Link><br /></li>
                                <li><Link to="/integracao">Integração de aplicativos e API's</Link><br /></li>
                                <li><Link to="/sobdemanda">Servidores Sob Demanda</Link><br /></li>
                                <li><Link to="/linkdedicado">Links dedicados</Link></li>

                            </ul>

                        </div>
                        <div className="col-md-3 align1">
                            <h5>ENDEREÇOS</h5>
                            <p>Uni ABC - Rua Gertrudes de Lima, 53 - 7º Andar - Conj 74 - Santo André - SP</p>
                            <p>Uni Paulista - Avenida Paulista 2421 - 1º Andar - Bela Vista - São Paulo - SP</p>
                            <p><b>Fone:</b> (11) 4990-5445</p>
                            <p><b>E-mail:</b> contato@tcdobrasil.com.br</p>
                            <div className="redessociais">

                                <Link to="/"><FontAwesomeIcon icon={faInstagram} size="2xl" style={{ color: "#ffffff", }} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faFacebook}  size="2xl" style={{ color: "#ffffff", }} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faLinkedin}  size="2xl" style={{ color: "#ffffff", }} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faWhatsapp}  size="2xl" style={{ color: "#ffffff", }} /></Link>
                                
                                
                            </div>
                        </div>
                    </div>


                </div>
              

            </div>
            <div className="boxfooter2">
                    <p>© Copyright {currentYear} Grupo TC do Brasil.All Rights Reserved<br/>
                    Designed by Grupo TC do BrasilPolítica de Privacidade e Termos de Uso <Link to="/politica">Clique aqui</Link></p>

                </div>

        </>
    )
}

export default Footer