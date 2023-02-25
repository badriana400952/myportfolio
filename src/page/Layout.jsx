import React from 'react'
import logob from './asets/logob.jpg'; 
import { Outlet, Link } from "react-router-dom";

 const Layout = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top ">
                <div class="container">
                    <Link to={"/"} class="navbar-brand" aria-current="page"> <img src={logob} class="logo " alt="sssdfdfdfdfdf" /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to={"/"} class="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/About"} class="nav-link active">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/Skils"} class="nav-link active">Skill</Link>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <a href="https://drive.google.com/file/d/12X4X6OimFzI9GnxgjmWrdEqMSuFPfS6F/view?usp=sharing" class="decoration text-light fs-5">Download CV<i class="bi bi-download ps-3 fs-3 text-light"></i></a>
                        </form>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
export default Layout
