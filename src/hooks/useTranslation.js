import { useEffect, useState } from "react";
import axios from "axios";
import {checkIfInputIsJapanese} from "../utils/checkInput";

export const useTranslation = value => {
    const [translation, setTranslation] = useState("");
    const [errorText, setErrorText] = useState("");

    useEffect(() => {
        if(!value){
            setTranslation("");
            return;
        }

        if (!checkIfInputIsJapanese(value)){
            setErrorText("Input is not Japanese");
            return;
        }

        setErrorText("");

        const obj = {
            "app_id": `${process.env.REACT_APP_API_KEY}`,
            "sentence": `${value}`,
            "output_type": "hiragana"
        };

        async function getTranslation() {
            const hiragana = await axios.post("https://labs.goo.ne.jp/api/hiragana", obj).then(hiragana => {
                return hiragana.data.converted;
            });
            setTranslation(hiragana);
        }

        getTranslation();
    }, [value]);

    return [translation, errorText];
} 