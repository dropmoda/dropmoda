import './footer.css'
import React from 'react'
import Attendance from '../../asset/icons/attendance.svg'
import Boleto from '../../asset/icons/boleto.svg'
import Bradesco from '../../asset/icons/bradesco.svg'
import Caixa from '../../asset/icons/caixa.svg'
import Common_questions from '../../asset/icons/common_questions.svg'
import Facebook from '../../asset/icons/facebook.svg'
import Find_our_stores from '../../asset/icons/find_our_store.svg'
import Hipercard from '../../asset/icons/hipercard.svg'
import Work_with_us from '../../asset/icons/work_with_us.svg'
import Instagram from '../../asset/icons/instagram.svg'
import Itau from '../../asset/icons/itau.svg'
import Linkedin from '../../asset/icons/linkedin.svg'
import Mastercard from '../../asset/icons/mastercard.svg'
import Pix from '../../asset/icons/pix.svg'
import Tiktok from '../../asset/icons/tiktok.svg'
import Twitter from '../../asset/icons/twitter.svg'
import Visa from '../../asset/icons/visa.svg'
import Youtube from '../../asset/icons/youtube.svg'




export function Footer() {
    return (
        <footer className="_footer">
            
            <div className="footer-top">
                <div className="highlights">
                    <ul>
                        <li>
                            <a href="#">
                                <img src={Attendance} alt="Atendimento icon"/>
                                <span>Atendimento</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Common_questions} alt="Perguntas frequentes icon"/>
                                <span>Perguntas frequentes</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Find_our_stores} alt="Encontre nossa loja icon"/>
                                <span>Encontre nossa loja mais próxima</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Work_with_us} alt="Trabalhe conosco icon"/>
                                <span>Trabalhe conosco</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="sitemap">
                    <nav>
                        <div class="about">
                            <h3>Sobre Dropmoda</h3>
                            <ul>
                                <li><a href="#">Empresa</a></li>
                                <li><a href="#">Nossa jornada</a></li>
                                <li><a href="#">Mapa site</a></li>
                                <li><a href="#">Trabalhe conosco</a></li>
                            </ul>
                        </div>

                        <div className="categories">
                            <h3>Categorias</h3>
                                <ul>
                                    <li><a href="#">Feminino</a></li>
                                    <li><a href="#">Masculino</a></li>
                                    <li><a href="#">Infantil</a></li>
                                    <li><a href="#">Acessórios</a></li>
                                    <li><a href="#">Calçados</a></li>
                                </ul>
                        </div>

                        <div className="help">
                            <h3>Ajuda</h3>
                            <ul>
                                <li><a href="#">Atendimento</a></li>
                                <li><a href="#">Perguntas frequentes</a></li>
                                <li><a href="#">Troca e devolução</a></li>
                                <li><a href="#">Termos e condições de uso</a></li>
                                <li><a href="#">Políticas de privacidade</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            
            <div class="footer-middle">
                <div className="payment">
                    <h3>Formas de pagamento</h3>
                    <ul>
                        <li>
                            <a href="#">
                                <img src={Caixa} alt="Caixa logo" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Hipercard} alt="Hipercard logo" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Bradesco} alt="Bradesco logo" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Itau} alt="Itaú logo" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Visa} alt="Visa logo" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Mastercard} alt="Mastercard logo" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Pix} alt="Pix logo" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Boleto} alt="Boleto logo" />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="social-icons">
                    <h3>Siga a Dropmoda</h3>
                    <ul>
                        <li>
                            <a href="#">
                                <img src={Facebook} alt="Facebook icon"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Twitter} alt="Twitter icon"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Youtube} alt="Youtube icon"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Tiktok} alt="Tiktok icon"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Instagram} alt="Instagram icon"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Linkedin} alt="LinkedIn icon"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p class="terms-of-use">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem non reprehenderit sed rerum illum odio, eius expedita, quos veniam autem, vel numquam vero eaque sint incidunt pariatur. Excepturi, officia blanditiis.</p>
            </div>

            <div class="footer-copyright">
                <span>Desenvolvido por ... | © Copyright 2021 Copyright.com.br - All Rights Reserved </span>
            </div>

        </footer>
    )
}