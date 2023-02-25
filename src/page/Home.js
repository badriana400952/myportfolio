import React from 'react';
import boostrap from './asets/boostrap.png'; 
// import card from './asets/card.png'; 
import css from './asets/css.png'; 
import foto from './asets/foto.jpg'; 
import html from './asets/html.png'; 
import js from './asets/js.png'; 
import lestoran from './asets/lestoran.png'; 
import live from './asets/live.png'; 
// import logob from './asets/logob.jpg'; 
import mobilindo from './asets/mobilindo.png'; 
import muka from './asets/muka.png'; 
import portfolio from './asets/portfolio.png';
import R from './asets/R.png'; 
import single from './asets/single.png'; 
// import upng from './asets/upng.png'; 
import vsc from './asets/vsc.png'; 
import logooo from './asets/logooo.png'; 



const Home =() => {
    return(
        <>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active satu">
                    <div class="container mt-5">
                        <div class="row ">
                            <div class="col-md-6 sm-12  ">
                                <h1 class="text-light pt-5 enjoy">ENJOY BROWSING</h1>
                                <h1 class="text-info ps-5 fw-bold our">OUR WORK</h1>

                            </div>
                            <div class="col-md-6 sm-12">
                                <h3 class="card-title  text-bottom  portfolio">SHOW PORTFOLIO </h3>
                            
                            </div> 
                        </div>
                    </div>

                </div>
                <div class="carousel-item dua">
                <div class="container mt-5">
                        <div class="row ">
                            <div class="col-md-6 ">
                            <img src={vsc} class="w-50 mobil" alt="sss"/>
                            </div>
                            <div class="col-md-6  ">
                                <h5 class="card-title-bold text-light fs-1 text-center mt-5 ">Visual Studio code</h5>
                                <p class=" ps-5 px-5 card-text text-light fs-4 mb-5"> Software code editor adalah merupakan kebutuhan wajib bagi setiap orang yang sedang mengembangkan aplikasi. Namun, tidak semua code editor memiliki fitur yang lengkap. Sehingga, Anda tidak cukup menginstall satu software saja. Visual Code Studio adalah salah satu software code editor yang SUPER POWER karena fitur-fiturnya yang lengkap.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item tiga">
                <div class="container mt-5">
                        <div class="row ">
                            <div class="col-md-6  ">
                            <img src={logooo} class="w-50 mobil " alt="sss"/>
                            </div>
                            <div class="col-md-6  ">
                                <h5 class="card-title text-light fs-1 text-center mt-5">React.js</h5>
                                <p class=" ps-5 px-5 card-text text-light mb-5 fs-4"> Apa itu React? React adalah perpustakaan pengembangan UI berbasis JavaScript. Facebook dan komunitas pengembang open-source menggunkannya. Meskipun React merupakan library daripada bahasa, React digunakan secara luas dalam pengembangan web. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                <span class="visually-hidden ">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div class="container mt-5 atas" >
            <div class="row">
                <div class="col-md-12 sm-12">
                    <h1 class="text-center fw-bold text-light">Im Badriana</h1>
                    <p class="text-center text-light">Web Frontend Kepo</p>
                </div>
            </div>
            <div class="row mt-5 ">
                <div class="col-md-6 sm-12  ">
                    <h5 class="card-title text-light fs-1 text-center mt-5">Panggil saja Badri</h5>
                    <p class=" ps-5 px-5 card-text text-light mb-5">Hai! Saya Badri dan saya seorang desainer, pengembang HTML,CSS,Javascript dan React.js. Saya suka belajar untuk mengasah kemampuan pribadi saya dan memastikannya terus menjadi tempat bagi semua orang dan hasrat kreatif, pribadi, dan aneh kami.
                    Saya suka bereksperimen dengan web sebagai media kreatif. Portofolio ini berubah setiap tahun untuk belajar dan menggunakan teknologi web dengan cara yang tidak terduga. Proyek menggambar saya, A Single page, mengeksplorasi kekuatan artistik React.</p>
                </div>
                <div class="col-md-6 sm-12 ">
                    {/* <h5 class="card-title text-light fs-1 text-center mt-5">Arti Saya</h5>
                    <p class=" ps-5 px-5 card-text text-light mb-5"> Kata yang paling menggambarkan Badriana adalah tidak gentar  Ekspansif, visioner. Dia tampak begitu betah tinggal di batas luar zona kenyamanan kreatifnya sehingga dia membuat setiap perbatasan yang liar dan berbahaya terlihat sangat nyaman.</p> */}
                    <img src={foto} class="w-50 myfoto" alt="fffff"/>

                </div>
            </div>
        </div>

        <div class="container atas" >
            <div class="row atas">
                <div class="col-md-12 sm-12">
                    <h1 class="text-center fw-bold text-light">My Project</h1>
                    <p class="text-center text-light">Menghilangkan Kegabutan</p>
                </div>
            </div>
            <div class="row ">
                <div class="col-md-4 sm-12  ">
                <img src={mobilindo} class="w-100 projekk" alt="aaa"/>
                    
                </div>
                <div class="col-md-4 sm-12 ">
                <img src={lestoran} class="w-100 projekk" alt="aaggdfgdga"/>
                   
                </div>
                <div class="col-md-4 sm-12 ">
                <img src={portfolio} class="w-100 projekk" alt="dgdfggwergaaa"/>
                   
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-4 sm-12  ">
                <img src={live} class="w-100 projekk" alt="aaaasas"/>
                    
                </div>
                <div class="col-md-4 sm-12 ">
                <img src={muka} class="w-100 projekk" alt="aaggdfgddfdga"/>
                   
                </div>
                <div class="col-md-4 sm-12 ">
                <img src={single} class="w-100 projekk" alt="dfggwergaaa"/>
                   
                </div>
            </div>
        </div>

        
        <div class="container mt-5 atas ">
            <div class="row">
                <div class="col-md-12 sm-12">
                    <h1 class="text-center fw-bold text-light">Teknologi Di Gunakan</h1>
                    <p class="text-center text-light">Teknologi yang sudah saya gunakan selama membuat project</p>
                </div>
            </div>
            <div class="row kolom ">
                <div class="col-md-3 sm-12 mt-3">
                    <img src={js} class=" mt-5 w-50 align-self-center" alt="l"/>
                    
                 </div>

                 <div class="col-md-3 sm-12 mt-3">
                    <img src={html} class="mt-5 w-50 " alt="lo"/>
                    
                 </div>
                 <div class="col-md-3 sm-12 mt-3">
                    <img src={css} class="mt-5 w-50" alt="log"/>
                    
                 </div>
                 <div class="col-md-3 sm-12 mt-3">
                    <img src={boostrap} class="mt-5 w-50" alt="boostrap"/>
                    
                 </div>
                 <div class="col-md-3 sm-12 mt-3">
                    <img src={R} class="mt-5 w-50" alt="logo1"/>
                    
                 </div>
                 <div class="col-md-3 sm-12 mt-3">
                    <img src={logooo} class="mt-5 w-50" alt="logo19"/>
                    
                 </div>
             </div>
        </div>
        </>
        
    )
}
export default Home;
