import {createStyles, makeStyles, Theme} from "@material-ui/core";
import {HeaderSection} from "../../types";
import {collection} from "typesaurus";
import {useGet} from "@typesaurus/react";

let logoImg = require("./llbygg_redusert.png")
const darkness = 0.25 // Higher = darker

export default function Header() {
    const pageElem = collection("pageElements")
    let [img] = useGet<HeaderSection>(pageElem, "header")

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            header: {
                height: "85vh",
                background: "linear-gradient( rgba(0, 0, 0, " + darkness + "), rgba(0, 0, 0, " + darkness + ") ), url('" + (img ? img.data!.imgUrl : "") + "')",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                boxShadow: "inset 0 0 7em 1em #000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            },
            typography: {
                color: "white",
                marginTop: 20,
            },
            imgBg: {
                backgroundColor: "rgba(0,0,0,0.5)",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
            }
        }),
    );
    const classes = useStyles()
    return (
        <div className={classes.header}>
            <img alt={"Header"} className={"headerAnim"} src={logoImg.default} height={200} />
        </div>
    )
}