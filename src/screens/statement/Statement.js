import React from "react";
import "./Statement.css";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  ListItemText,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListSubheader,
  ListItemIcon,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import countryData from "./CountryData";
// import WorkIcon from "@mui/icons-material/Work";

import icons from "./Icons";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
// import Card from "../card/Card";

function Statement() {
  const [open, setOpen] = React.useState(true);

  // export default function NestedList() {
  // const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [open2, setOpen2] = React.useState(true);

  const handleClickTwo = () => {
    setOpen2(!open2);
  };
  const [open3, setOpen3] = React.useState(true);

  const handleClickThree = () => {
    setOpen3(!open3);
  };
  const [open4, setOpen4] = React.useState(true);

  const handleClickFour = () => {
    setOpen4(!open4);
  };
  const [open5, setOpen5] = React.useState(true);

  const handleClickFive = () => {
    setOpen5(!open5);
  };
  const [open6, setOpen6] = React.useState(true);

  const cardData = ["card5", "card2", "card3", "card8"];
  const handleClickSix = () => {
    setOpen6(!open6);
  };

  // function Card(props) {
  //   return <div>{props.title}</div>;
  // }
  function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }

  // const rows = [
  //   createData("United State", 2500, "$230,900", "29.9%"),
  //   createData("Germany", 3.9, "$440,000", "40.22%"),
  //   createData("Great Britain", 1.4, "$190,700", "23.44%"),
  //   createData(),
  // ];

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor:
        theme.palette.mode === "light"
          ? "rgb(52, 71, 103)"
          : "rgb(52, 71, 103)",
    },
  }));
  return (
    <div className="_createcontainer">
      <div className="container-fluid _mainBody">
        <div className="row _createrow">
          <div className="col-2 _createcolumn ">
            <div className="_createbody">
              <a>
                <img src="./assets/logo.jpg" className="_createimage"></img>
              </a>
              <span>Soft UI Dashboard Pro</span>
            </div>
            <hr></hr>
            <div className="_createdashboard">
              <Accordion>
                <AccordionSummary
                  className="accordion_sum"
                  expandIcon={<ExpandMore />}
                >
                  <Typography>
                    <i className="fa-solid fa-shop _mainicon" />
                    <span className="_maintitle">Dashboard</span>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="accordion_detail">
                  <Typography>
                    <div className="_creatediv">
                      <List>
                        <ListItem>
                          <ListItemText
                            className="_createlist"
                            primary="Default"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            className="_createlist"
                            primary="Automotive"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            className="_createlist"
                            primary="Smart Home"
                          />
                        </ListItem>
                        <ListItem onClick={handleClick}>
                          <ListItemText
                            className="_createlist"
                            primary="Virtual Reality"
                          />
                          {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            <ListItem sx={{ pl: 4 }}>
                              <ListItemText primary="V R Default" />
                            </ListItem>
                            <ListItem sx={{ pl: 4 }}>
                              <ListItemText primary="V R Info" />
                            </ListItem>
                          </List>
                        </Collapse>
                        <ListItem>
                          <ListItemText className="_createlist" primary="CRM" />
                        </ListItem>
                      </List>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  PAGES
                </ListSubheader>
              }
            >
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Pages" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }} onClick={handleClickTwo}>
                    <ListItemText primary="Profile" />
                    {open2 ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Profile overview" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Teams" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="All Projects" />
                      </ListItemButton>
                    </List>
                  </Collapse>
                  {/* =--------- */}
                  <ListItemButton sx={{ pl: 4 }} onClick={handleClickThree}>
                    <ListItemText primary="User" />
                    {open3 ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>

                  <Collapse in={open3} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Reports" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="New User" />
                      </ListItemButton>
                    </List>
                  </Collapse>
                  {/* =--------- */}
                  <ListItemButton sx={{ pl: 4 }} onClick={handleClickFour}>
                    <ListItemText primary="Account" />
                    {open4 ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>

                  <Collapse in={open4} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Setting" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Billing" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Invoice" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Security" />
                      </ListItemButton>
                    </List>
                  </Collapse>
                  {/* =--------- */}
                  <ListItemButton sx={{ pl: 4 }} onClick={handleClickFive}>
                    <ListItemText primary="Projects" />
                    {open5 ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>

                  <Collapse in={open5} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="General" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Timeline" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="New Project" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Security" />
                      </ListItemButton>
                    </List>
                  </Collapse>
                  <ListItemButton>
                    <ListItemText primary="Pricing Page" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText primary="RTL" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText primary="Widgets" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText primary="Chart" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText primary="Alert" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText primary="Notification" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
            {/* ------------------ */}
            <List>
              <ListItemButton onClick={handleClickSix}>
                <ListItemIcon>
                  <i class="fas fa-tools"></i>
                </ListItemIcon>
                <ListItemText primary="Application" />
                {open6 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open6} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Kanban" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Wizard" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Calender" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Data Table" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Analytics" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
            {/* --------------------- */}
          </div>
          <div className="col-10 _createcol2 ">
            <nav className="navbar navbar-expand-lg navbar-light bg-light _createsection">
              <div>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <span>
                        <i className="fas fa-home"></i>
                      </span>
                    </li>
                    <li className="breadcrumb-item">
                      <span>Dasboard</span>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Default
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="container-fluid _header1">
                <div>
                  <a className="navbar-brand" href="#">
                    Default
                  </a>
                  <a className="navbar-brand" href="#">
                    <i className="fas fa-bars"></i>
                  </a>
                </div>
                <div className="_header2">
                  <form className="d-flex">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Type Here....."
                      aria-label="Search"
                    />
                  </form>
                  <a className="navbar-brand" href="#">
                    <i className="fas fa-user-circle"> </i>
                    Sign in
                  </a>
                  <a className="navbar-brand" href="#">
                    <i className="fas fa-cog"></i>
                  </a>
                  <a className="navbar-brand" href="#">
                    <i className="fas fa-bell"></i>
                  </a>
                </div>
              </div>
            </nav>
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <h1 className="_createtag">General Statistics</h1>
                  {/* {cardData.map((ele, index) => {
                    return <Card key={index} title={ele} />;
                  })} */}

                  {/* <Card title="card2" />
                  <Card title="card3" />
                  <Card title="card4" /> */}
                  <div className="_cardwrap">
                    <div className="card _createcard ">
                      <div className="row g-0">
                        <div className="col-md-8">
                          <h5 className="card-title _createtitle">
                            Today's Money
                          </h5>
                          <p className="card-text _createtext">$53000</p>
                        </div>
                        <div className="col-md-4">
                          <div className="card-body _createdollar">
                            <div className="_createicon">
                              <i className="far fa-dollar-sign"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* --------------- */}
                    <div className="card _createcard _cardstyle ">
                      <div className="row g-0">
                        <div className="col-md-8">
                          <h5 className="card-title _createtitle">
                            Today's Money
                          </h5>
                          <p className="card-text _createtext">$53000</p>
                        </div>
                        <div className="col-md-4">
                          <div className="card-body _createdollar">
                            <div className="_createicon">
                              <i className="far fa-dollar-sign"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ---------- */}
                  <div className="_cardwrap">
                    <div className="card _createcard ">
                      <div className="row g-0">
                        <div className="col-md-8">
                          <h5 className="card-title _createtitle">
                            Today's Money
                          </h5>
                          <p className="card-text _createtext">$53000</p>
                        </div>
                        <div className="col-md-4">
                          <div className="card-body _createdollar">
                            <div className="_createicon">
                              <i className="far fa-dollar-sign"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* --------------- */}
                    <div className="card _createcard _cardstyle ">
                      <div className="row g-0">
                        <div className="col-md-8">
                          <h5 className="card-title _createtitle">
                            Today's Money
                          </h5>
                          <p className="card-text _createtext">$53000</p>
                        </div>
                        <div className="col-md-4 _createstyle">
                          <div className="card-body _createdollar">
                            <div className="_createicon">
                              <i className="far fa-dollar-sign"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6"></div>
              </div>
            </div>
            {/* ------------------------------------ */}
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <TableContainer className="_createtable" component={Paper}>
                    <th className="_createheading">Sales by Country </th>
                    <Table aria-label="simple table">
                      <TableBody>
                        {countryData.map((row) => (
                          <TableRow key={row.country}>
                            <TableCell>
                              <img src={row.src} alt={row.alt} />
                            </TableCell>
                            <TableCell>
                              <p className="_createcountry">Country:</p>
                              {row.country}
                            </TableCell>

                            <TableCell>
                              <p className="_createcountry">Sales:</p>
                              {row.sales}
                            </TableCell>
                            <TableCell>
                              <p className="_createcountry">Values:</p>
                              {row.value}
                            </TableCell>
                            <TableCell>
                              <p className="_createcountry">Bounce:</p>
                              {row.bounce}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
            </div>
            {/* ------------------------------------ */}
            <div className="container-fluid">
              <div className="row _createrow">
                <div className="col-4 _createchart">
                  <div className="_createbar"></div>
                  <p>
                    Active Users <h6>(+23%) than last week</h6>
                  </p>
                  <div className="_createuser">
                    {icons.map((item, index) => {
                      console.log(item, index);
                      return (
                        <div>
                          <div className="_createassign">
                            <div style={{ background: item.background }}>
                              <AssignmentIndIcon />
                            </div>
                            <div>
                              <h6>{item.title}</h6>
                            </div>
                          </div>
                          <div>
                            <p>{item.price}</p>
                            <BorderLinearProgress
                              variant="determinate"
                              value={item.progress}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="col-7 _creategraph1">
                  <div className="_creategraph">
                    <h3>Sales Overview</h3>
                    <p>
                      <i class="fas fa-arrow-alt-circle-up"></i> 4% more in 2021
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row _createfooter">
                <div className="col-6 _sectionfooter1">
                  © 2022, made with<i class="fas fa-heart"></i> by
                  <span>Creative Tim</span>
                  for a better web.
                </div>
                <div className="col-6 _sectionfooter2">
                  <span>Creative Tim</span>
                  <span>About Us</span>
                  <span>Blog </span>
                  <span>License</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statement;
