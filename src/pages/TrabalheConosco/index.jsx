import React, { useEffect } from "react"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import HeadbandTrabalheconosco from "../../components/Headband/HeadbandTrabalheConosco"
import "./trabalheconosco.css"



const TrabalheConosco = () => {



    useEffect(() => {
    }, [])

    return (

        <>
            <Header />

            <HeadbandTrabalheconosco />

            <center><h1 className="m-4"> Vagas disponiveis </h1></center>

            <section className="vagas">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 boxvagas">
                            <h5>ANALISTA ADMINISTRADOR LINUX</h5>
                            <p>Administrador Servidores e Sistema Linux, Virtualização e Redes</p>
                            <p><b>Vinculo</b><br/>
                            Prestador de serviço</p>
                            <p><b>Localização</b><br/>
                            Santo André</p>
                            <p><b>Enviar curriculo para:</b> talentos@tcdobrasil.com.br</p>

                        </div>
                        <div className="col-md-4 boxvagas">
                            <h5>ANALISTA DE REDES PLENO/SENIOR</h5>
                            
                            <p>Profissional com profundos conhecimentos de redes e segurança</p>
                            <p><b>Vinculo</b><br/>
                            Prestador de serviço</p>
                            <p><b>Localização</b><br/>
                            Santo André</p>
                            <p><b>Enviar curriculo para:</b> talentos@tcdobrasil.com.br</p>
                        </div>
                        <div className="col-md-4 boxvagas">
                            <h5>ANALISTA SERVICEDESK</h5>
                             <p>Analista servidesk, atendimento a usuários e servidores</p>
                             <p><b>Vinculo</b><br/>
                            Prestador de serviço</p>
                            <p><b>Localização</b><br/>
                            Santo André</p>
                            <p><b>Enviar curriculo para:</b> talentos@tcdobrasil.com.br</p>
                        </div>
                    </div>
                </div>



            </section>

            <div className="container mt-4 bgtrabalhe">

                <div className="tituloTrabalheConosco">
                    <center><h2>Quer fazer parte da equipe?</h2></center>
                    <center> <p>Preecha o formulario e encaminhe seu curriculo!</p></center>
                </div>

                <div className="formulario">
                    <form action="https://formsubmit.co/contato@tcdobrasil.com.br" method="POST"  >

                        <div className="boxtrabalhe">

                            <input type="text" name='name' placeholder=" Nome" /><br />

                            <input type="text" name='sobrenome' placeholder=" Sobrenome" /><br />
                            <input type="email" name='email' placeholder=" Email" /><br />
                            <input type="tel" name='tel' placeholder=" Telefone" /><br /><br />
                            <label for="area">Área de interesse</label><br />
                            <select id="area" name="area">
                                <option value="Redes">Redes</option>
                                <option value="Seguranca">SOC</option>
                                <option value="NOC">NOC</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Comercial">Comercial</option>
                                <option value="Administração">Administração</option>
                                <option value="Programação">Programação</option>
                            </select><br />


                            <label for="documento">Anexe seu curriculo:</label><br />
                            <input type="file" id="documento" name="documento" ></input>
                            <br />
                            <textarea cols="30" rows="10" name='menssage' placeholder=" Deixe aqui sua mensagem" />
                            <br />


                        </div>


                        <div className="bntenviar">
                            <input type="hidden" name="_next" target="_blank" value="https://www.tcdobrasil.com.br" />
                            <button type="submit" value="Enviar"  >Enviar</button>

                        </div>





                    </form>
                </div>




            </div>




            <Footer />
        </>
    )
}

export default TrabalheConosco