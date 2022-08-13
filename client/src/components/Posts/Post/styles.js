import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "15px",
    height: "370px",
    position: "relative",
    backgroundColor: "#cc5477",
    color: "white",
  },
  cardTitle: {
    minHeight: "100px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cardBody: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    // justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    color: "#fff",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    marginTop: "200px",
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    bottom: "1px",
  },
});
