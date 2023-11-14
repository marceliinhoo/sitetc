import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import HeadbandBlack from "../../components/Headband/HeadbandBlackFriday"
import Cronometro from "../../components/Cronometro"
import "./black.css"
import bitdefender from "../../assets/blackfriday/Bitdefender.jpg"
import sophos from "../../assets/blackfriday/Firewall_Sophos_XGS-87.png"
import microsoftbasic from "../../assets/blackfriday/Microsoft-Basic-NCE-assinatura-mensal .jpg"
import microsoftwindows from "../../assets/blackfriday/Microsoft-Windows-11-ESD-Perpétua .png"
import officehome from "../../assets/blackfriday/Office-Home-&-Business-2021-ESD-Perpétua.png"
import ssd from "../../assets/blackfriday/SSD_480gb .jpeg"


const BlackFriday = () => {



    useEffect(() => {
    }, [])

    return (

        <>
            <Header />

            <HeadbandBlack />
            <Cronometro />

            <div id="blackFriday">
                <center><h1 className="p-4">Aproveite nossas promoções de <br /> BLACK FRIDAY!</h1><br/>
              
                </center>

                <div className="container">
                    <div className="row m-4 p-4 bgblack">
                        <div className="col-md-6">
                            <center><h5>Bitdefender R$115,00</h5>
                                <p>
                                    Assegure a segurança digital do seu dispositivo com o Bitdefender por apenas R$115,00 durante a Black Friday! Proteja seus dados contra ameaças online, mantenha a privacidade e desfrute de navegação tranquila. Não comprometa a segurança do seu dispositivo - aproveite esta oferta exclusiva e garanta uma proteção sólida por um preço incrível. Não perca tempo, a Black Friday é a hora de reforçar sua defesa digital!
                                </p>
                                <div className="black">
                            <button>
                                <Link to="https://api.whatsapp.com/send/?phone=5511913155845&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20oferta%20do%20Bitdefender!" target="_blank">CONTATE-NOS</Link>
                            </button>
                        </div>
                            </center>
                        </div>
                        <div className="col-md-6 ">
                            <center><img src={bitdefender} className="img-fluid" width={"300px"} alt="" /></center>
                        </div>
                    </div>
                    <div className="row m-4 p-4">
                        <div className="col-md-6">
                            <center><img src={sophos} className="img-fluid" width={"300px"} alt="" /></center>
                        </div>
                        <div className="col-md-6">
                            <center> <h5>Firewall Sophos_XGS-87_U$ 709,99</h5>
                                <p>
                                    Proteja sua rede com o Firewall Sophos XGS-87 por apenas U$ 709,99 durante a Black Friday! Reforce as defesas cibernéticas da sua empresa com esse poderoso firewall, proporcionando segurança avançada contra ameaças online. Garanta a tranquilidade dos seus dados e informações, mantendo sua rede segura e eficiente. Não deixe escapar essa oportunidade exclusiva durante a Black Friday. Invista na proteção do seu ambiente digital agora mesmo!
                                </p>
                                <div className="black">
                            <button>
                                <Link to="https://api.whatsapp.com/send/?phone=5511913155845&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20oferta%20do%20Firewall%20Sophos!" target="_blank">CONTATE-NOS</Link>
                            </button>
                        </div>
                            </center>
                        </div>
                    </div>
                    <div className="row m-4  p-4 bgblack">
                        <div className="col-md-6">
                            <center><h5>Microsoft Basic NCE assinatura mensal R$37,98</h5>
                                <p>
                                    Microsoft Basic NCE por apenas R$37,98 durante a Black Friday! Tenha acesso aos aplicativos fundamentais da Microsoft, garantindo eficiência e colaboração em todas as suas tarefas. Atualizações contínuas, segurança aprimorada e flexibilidade para se adaptar às suas necessidades. Aproveite esta oferta incrível durante a Black Friday para impulsionar o seu potencial digital. Seja mais eficiente, seja mais conectado - por um preço exclusivo!
                                </p>
                                <div className="black">
                            <button>
                                <Link to="https://api.whatsapp.com/send/?phone=5511913155845&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20oferta%20do%20Microsoft%20Basic" target="_blank">CONTATE-NOS</Link>
                            </button>
                        </div>
                            </center>

                        </div>
                        <div className="col-md-6">
                            <center> <img src={microsoftbasic} className="img-fluid" width={"300px"} alt="" /></center>
                        </div>
                    </div>
                    <div className="row m-4 p-4">
                        <div className="col-md-6">
                            <center> <img src={microsoftwindows} className="img-fluid" width={"300px"} alt="" /></center>

                        </div>
                        <div className="col-md-6">
                            <center><h5>Microsoft Windows 11  ESD - Perpétua R$1202,00 </h5>
                                <p>
                                    Eleve sua experiência digital com o Microsoft Windows 11 ESD - Perpétua, agora por apenas R$1.202,00 durante a Black Friday! Atualize para a última palavra em inovação, com um sistema operacional projetado para oferecer desempenho excepcional, design elegante e recursos avançados. Seja no trabalho ou no lazer, o Windows 11 proporciona uma experiência intuitiva e envolvente. Não perca esta chance única de transformar sua jornada digital por um preço incrível. Garanta já o seu durante a Black Friday!
                                </p>
                                <div className="black">
                            <button>
                                <Link to="https://api.whatsapp.com/send/?phone=5511913155845&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20oferta%20do%20Microsoft%20Windows%2011" target="_blank">CONTATE-NOS</Link>
                            </button>
                        </div>
                            </center>
                        </div>
                    </div>
                    <div className="row m-4 p-4 bgblack ">
                        <div className="col-md-6 ">
                            <center> <h5>Office Home & Business 2021 ESD - Perpétua 1189,00</h5>
                                <p>
                                    Potencialize sua produtividade com o Microsoft Office Home & Business 2021 ESD - Perpétua por apenas R$ 1.189,00! Esta oferta imperdível é a chave para o seu sucesso profissional. Tenha acesso aos aplicativos essenciais do Office, como Word, Excel e PowerPoint, garantindo eficiência e qualidade em cada projeto. Aproveite a oportunidade durante a Black Friday para investir na sua jornada de trabalho com esta solução perpétua. Seja mais produtivo, seja mais eficiente - tudo isso por um preço incrível!
                                </p>
                                <div className="black">
                            <button>
                                <Link to="https://api.whatsapp.com/send/?phone=5511913155845&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20oferta%20do%20Office%20Home%20&%20Business" target="_blank">CONTATE-NOS</Link>
                            </button>
                        </div>
                            </center>
                        </div>
                        <div className="col-md-6">
                            <center><img src={officehome} className="img-fluid" width={"300px"} alt="" /></center>
                        </div>
                    </div>
                    <div className="row mt-4 p-4">
                        <div className="col-md-6">
                            <center><img src={ssd} className="img-fluid" width={"300px"} alt="" /></center>
                        </div>
                        <div className="col-md-6">
                            <center> <h5>SSD 480gb Adat R$ 277,90</h5>
                                <p>
                                    O SSD ADATA de 480GB está com um desconto imperdível, por apenas R$ 277,90 durante a Black Friday. Liberte o poder da velocidade e da eficiência com este incrível upgrade para o seu sistema. Armazene mais, carregue mais rápido e eleve seu desempenho a um novo patamar. Não perca tempo, essa oferta relâmpago é válida apenas durante a Black Friday!
                                </p>
                                <div className="black">
                            <button>
                                <Link to="https://api.whatsapp.com/send/?phone=5511913155845&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20oferta%20do%20SSD%20480gb%20Adat!" target="_blank">CONTATE-NOS</Link>
                            </button>
                        </div>
                            </center>
                        </div>
                    </div>


                </div>



            </div>

            


            <Footer />
        </>
    )
}

export default BlackFriday