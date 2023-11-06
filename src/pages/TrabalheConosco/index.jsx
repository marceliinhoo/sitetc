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

            <div className="container">
                <div className="tituloTrabalheConosco">
                    <center><h1>Quer fazer parte da equipe?</h1></center>
                    <center> <p>Preecha o formulario e encaminhe seu curriculo!</p></center>
                </div>

                <div className="formulario">
                    <form action="https://formsubmit.co/contato@tcdobrasil.com.br" method="POST"  >

                        <div className="boxtrabalhe">

                            <input type="text" name='name' placeholder=" Nome" /><br />
                            
                            <input type="text" name='sobrenome' placeholder=" Sobrenome" /><br />
                            <input type="email" name='email' placeholder=" Email" /><br />
                            <input type="tel" name='tel' placeholder=" Telefone" /><br />
                            <label for="area">Área de interesse</label><br />
                            <select id="area" name="area">
                                <option value="Redes">Redes</option>
                                <option value="Seguranca">Segurança Digital</option>
                                <option value="NOC">NOC</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Comercial">Comercial</option>
                                <option value="Administração">Administração</option>
                                <option value="Programação">Programação</option>
                            </select><br />


                            <label for="documento">Anexe seu curriculo:</label><br />
                            <input type="file" id="documento" name="documento"></input>
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