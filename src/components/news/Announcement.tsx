import {createStyles, Grid, makeStyles, Theme, Typography} from "@material-ui/core";

interface announcementInterface {
    id:number;
    title:string;
    description:string;
    date:Date;
}

export default function Announcement(props:{announcement:announcementInterface}) {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            title: {
                marginBottom: 5,
            },
            text: {
                lineHeight: "200%",
            },
            dateString: {
                textTransform: "capitalize",
            }
        }),
    );
    const classes = useStyles()
    return (
        <>
            <Grid item xs={12}>
                <Typography variant={"h5"} className={classes.title}>
                    {props.announcement.title}
                </Typography>
                <Typography variant={"caption"} color={"textSecondary"} className={classes.dateString}>
                    <b>{props.announcement.date.toLocaleDateString("no-NB", {
                        weekday: 'short', // long, short, narrow
                        day: 'numeric', // numeric, 2-digit
                        year: 'numeric', // numeric, 2-digit
                        month: 'long', // numeric, 2-digit, long, short, narrow
                        hour: 'numeric', // numeric, 2-digit
                        minute: 'numeric', // numeric, 2-digit
                    })}</b>
                </Typography>
                <Typography variant={"body2"} color={"textSecondary"} className={classes.text}>
                    {props.announcement.description}
                </Typography>
            </Grid>
        </>
    )
}

export type {announcementInterface}