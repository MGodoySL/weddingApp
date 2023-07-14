import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { pol, ptBr } from "../../../../languageTexts.js";

export const Main = () => {
    const [language, setlanguage] = useState(null);

    const handleLanguage = (value) => {
        value === "Português" ? setlanguage(ptBr) : setlanguage(pol);
    };
    return (
        <Stack justifyContent="center" alignItems="center" width="100%" height="100vh" gap={8}>
            <Stack direction="row" justifyContent="center" alignItems="center" gap={8}>
                <Button variant="contained" onClick={() => handleLanguage("Português")}>
                    Português
                </Button>
                <Button variant="contained" onClick={() => handleLanguage("Polonês")}>
                    Polonês
                </Button>
            </Stack>

            {language && <Typography variant="h2">{language}</Typography>}
        </Stack>
    );
};
