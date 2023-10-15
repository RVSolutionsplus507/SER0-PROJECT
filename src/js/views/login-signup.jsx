import React, { useState, useContext } from "react";
import ReactCardFlip from "react-card-flip";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Base } from "../components/login-signup/Base";
import { SignUpForm } from "../components/login-signup/SignUpForm";
import { LoginForm } from "../components/login-signup/LoginForm";
import { Buttons } from "../components/login-signup/Buttons";
import "../../css/flipcard.css"

export const LoginSignupCard = () => {
    const [t] = useTranslation("loginsignup");
    const { actions } = useContext(Context);
    const [flip, setFlip] = useState(false);
    return (
        <>
            <div>
                <Base>
                    <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                        {/* SIGNUP */}
                        <div>
                            <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white mb-3">
                                {t("message")}
                            </h2>
                            <SignUpForm
                                name={t("name")}
                                exampleName={t("exampleName")}
                                lastName={t("lastName")}
                                exampleLastName={t("exampleLastName")}
                                email={t("email")}
                                exampleEmail={t("exampleEmail")}
                                password={t("password")}
                                examplePassword={t("examplePassword")}
                                forgottenPassword={t("forgottenPassword")}
                                submitButton={t("signupButton")}
                                onSubmit={actions.createUser}>
                                <p className="text-xs text-gray-600 text-center dark:text-white md:px-10">
                                    {t("agreement")}
                                </p>
                            </SignUpForm>
                            <div className="border-b text-center">
                                <div className="px-2 inline-block text-sm text-gray-600 tracking-wide bg-white transform translate-y-1/2 dark:bg-black dark:text-white rounded transition duration-500">
                                    {t("option")}
                                </div>
                            </div>
                            <div className="mt-5">
                                <Buttons buttonGoogle={t("signupGoogle")} />
                            </div>
                            <p className="text-center text-sm text-gray-600 font-medium dark:text-white mt-2">
                                {t("account")}
                                <button
                                    className="ml-1 minimum:text-xl underline underline-offset-8 text-gray-600 dark:text-white"
                                    onClick={() => setFlip(!flip)}>
                                    {t("login")}
                                </button>
                            </p>
                        </div>
                        {/* LOGIN */}
                        <div>
                            <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white mt-2 mb-5">
                                {t("message")}
                            </h2>
                            <LoginForm
                                email={t("email")}
                                exampleEmail={t("exampleEmail")}
                                password={t("password")}
                                examplePassword={t("examplePassword")}
                                forgottenPassword={t("forgottenPassword")}
                                submitButton={t("loginButton")}
                                onSubmit={actions.logIn}
                            />
                            <div className="border-b text-center">
                                <div className="px-2 inline-block text-sm text-gray-600 tracking-wide bg-white transform translate-y-1/2 dark:bg-black dark:text-white rounded transition duration-500">
                                    {t("option")}
                                </div>
                            </div>
                            <div className="mt-5">
                                <Buttons buttonGoogle={t("loginGoogle")} />
                            </div>
                            <p className="text-center text-sm text-gray-600 font-medium dark:text-white mt-6 tracking-wide">
                                {t("noAccount")}
                                <button
                                    className="ml-1 minimum:text-xl underline underline-offset-8 text-gray-600"
                                    onClick={() => setFlip(!flip)}>
                                    {t("login")}
                                </button>
                            </p>
                        </div>
                    </ReactCardFlip>
                </Base>
            </div>
        </>
    );
};
