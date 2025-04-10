import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineInfoCircle, AiOutlineWarning, AiOutlineCloseCircle } from "react-icons/ai";

export const AlertWindow = ({ message, type }) => {
    const [showAlert, setShowAlert] = useState(true);
    const [counter, setCounter] = useState(5);

    const colorType = {
        error: "bg-red-100 text-semanticError border-red-400",
        success: "bg-green-100 text-green-600 border-green-400",
        info: "bg-blue-100 text-semanticInfo border-blue-400",
        warning: "bg-yellow-100 text-semanticWarning border-yellow-400",
    };

    const iconType = {
        error: <AiOutlineCloseCircle size={34} className="text-semanticError text-xl mr-2" />,
        success: <AiOutlineCheckCircle size={34} className="text-semanticSucess text-xl mr-2" />,
        info: <AiOutlineInfoCircle size={34} className="text-semanticInfo text-xl mr-2" />,
        warning: <AiOutlineWarning size={34} className="text-semanticWarning text-xl mr-2" />,
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [message, type]);

    useEffect(() => {
        if (counter === 0) {
            setShowAlert(false);
        }
    }, [counter]);

    useEffect(() => {
        setShowAlert(true);
        setCounter(4);
    }, [message, type]);

    if (!showAlert) return null;

    return (
        <div
            className={`fixed top-2 left-1 max-w-sm w-full p-2 rounded-lg shadow-lg border ${colorType[type]} font-poppins transition-transform duration-500 ease-in-out transform ${
                showAlert ? "translate-y-0" : "-translate-y-10"
            } max-h-72 overflow-y-auto`}
            style={{ zIndex: 9999 }}
        >
            <div className="flex items-center text-lg">
                {iconType[type]}
                <div className="flex-grow">
                    <p className="font-semibold whitespace-pre-wrap break-words">{message}</p>
                </div>
                <span className="text-sm text-gray-500">{counter}s</span>
            </div>
        </div>
    );
};