import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/app.css";
import "../../css/glass.css";
import { useTranslation } from "react-i18next";
import { LanguageButton } from "../components/LanguageButton";

export const App = () => {
    const [t] = useTranslation("app");

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <div className="font-serif text-gray-200">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-[100%] h-[100%] -z-50 fixed object-cover">
                    <source src="SERO_BG.mp4" type="video/mp4" />
                </video>
                <header className="flex justify-between items-center z-40 relative top-0 w-full py-3">
                    <h2
                        className="text-4xl font-semibold ml-10 lg:ml-32 cursor-pointer"
                        onClick={() => {
                            navigate("/");
                        }}>
                        SERØ.
                    </h2>
                    <div
                        className="hidden resp:flex justify-center items-center mr-5 w-10 h-10 text-2xl bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] rounded-full cursor-pointer blue-transition"
                        onClick={() => {
                            setIsOpen(true);
                        }}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <div
                        className={
                            "resp:fixed resp:top-0 resp:left-0 resp:w-full resp:h-screen resp:bg-[rgba(0,0,0,0.5)]" +
                            " " +
                            (isOpen ? "resp:block" : "hidden")
                        }
                        id="back__menu"
                        onClick={() => {
                            setIsOpen(false);
                        }}></div>
                    <nav
                        className={
                            "navbar-home mr-4 lg:mr-16 resp:dark:bg-zinc-950 resp:bg-white resp:m-0 resp:fixed resp:w-60 resp:h-screen resp:top-0 resp:p-7 resp:z-10" +
                            " " +
                            (isOpen ? "resp:right-0" : "resp:-right-60")
                        }>
                        <h2 className="text-gray-600 dark:text-gray-100 text-center text-4xl font-semibold hidden resp:block">
                            SERØ.
                        </h2>
                        <ul className="flex items-center resp:mt-5 resp:flex-col">
                            <li className="my-2.5">
                                <Link
                                    to="/"
                                    className="text-xl font-medium ml-6 text-gray-200 hover:text-cyan-300 blue-transition resp:dark:text-gray-200 resp:text-gray-600 resp:m-0">
                                    {t("home")}
                                </Link>
                            </li>
                            <li className="my-2.5">
                                <Link
                                    to="/services"
                                    className="blue-transition text-xl font-medium ml-7 text-gray-200
                                hover:text-cyan-300 resp:dark:text-gray-200 resp:text-gray-600 resp:m-0">
                                    {t("services")}
                                </Link>
                            </li>
                            <li className="my-2.5">
                                <Link
                                    to="/contact"
                                    className="text-xl font-medium ml-7 text-gray-200 hover:text-cyan-300 blue-transition
                                resp:dark:text-gray-200 resp:text-gray-600 resp:m-0">
                                    {t("contacts")}
                                </Link>
                            </li>
                            <li className="my-2.5">
                                <button
                                    className="login-button w-40 text-xl p-2 text-black ml-6 resp:dark:bg-gray-100 blue-transition resp:m-0 resp:border resp:border-gray-300"
                                    onClick={() => {
                                        navigate("/login");
                                    }}>
                                    {t("login")}
                                </button>
                            </li>
                            <li className="my-2.5">
                                <button
                                    className="signup-button w-40 text-xl p-2 text-black ml-4 resp:dark:bg-gray-100 blue-transition resp:m-0 resp:border resp:border-gray-300"
                                    onClick={() => {
                                        navigate("/signup");
                                    }}>
                                    {t("signup")}
                                </button>
                            </li>
                            <li className="my-2.5">
                                <LanguageButton className="ml-7 md:mt-2.5 resp:absolute resp:top-3 resp:right-5 w-9 h-6" />
                            </li>
                        </ul>
                    </nav>
                </header>
                <h2 className="mix-blend-difference lg:px-36 mt-60 text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-8xl font-black z-10 text-center text-white">
                    {t("title")}
                </h2>
                <h2 className="mix-blend-difference lg:px-6 mt-8 text-lg minimum:text-[0.5rem] tiny:text-2xl sm:text-3xl md:text-[45px] font-black z-10 text-center text-white">
                    {t("subtitle")}
                </h2>
                <div className="flex justify-center mt-10 mb-8">
                    <button
                        className="w-[250px] p-6 getStarted-button text-3xl text-black ml-6 resp:dark:bg-gray-100 blue-transition resp:m-0 resp:border resp:border-gray-300"
                        onClick={() => {
                            navigate("/signup");
                        }}>
                        {t("getStarted")}
                    </button>
                </div>
                <div className="glass mix-blend-difference w-4/5 h-3/5 p-12 mt-[260px] mb-10 m-auto">
                    <h2 className="text-5xl">¿Quiénes somos?</h2>
                    <h2 className="text-2xl">
                        <br></br>
                        Somos un grupo de desarrolladores Full-Stack que creó
                        SERØ para solventar problemas de organización de base de
                        datos.<br></br>
                        <br></br>
                        Esta Web App se especializa en automatizar todo aquello
                        relacionado a la información importante que contenga una
                        empresa, una firma de abogados, o cualquier otra entidad
                        que necesite simplicidad en su sistema.<br></br>
                        <br></br>
                    </h2>
                </div>
            </div>
        </>
    );
};
