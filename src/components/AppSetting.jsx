import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import card from "../assets/images/generic/card.png";
import defaut from "../assets/images/generic/default.png";
import darkMode from "../assets/images/generic/falcon-mode-dark.jpg";
import lightMode from "../assets/images/generic/falcon-mode-default.jpg";
import inverted from "../assets/images/generic/inverted.png";
import vibrant from "../assets/images/generic/vibrant.png";
import arrows from "../assets/images/icons/arrows-h.svg";
import { useConfig } from "../hooks/useConfig.js";

const AppSetting = () => {
  const { config, setConfig } = useConfig();
  const [visible, setVisible] = useState(false);
  const isFluid = config.isFluid;
  const navbarStyle = config.navbarStyle;
  const theme = config.theme;

  const handleClose = () => setVisible(false);
  const handleShow = () => setVisible(true);

  const handleFluid = () => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      isFluid: !prevConfig.isFluid,
    }));
    handleClose();
  };

  const handleCard = () => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      navbarStyle: "card",
    }));
  };

  const handleInverted = () => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      navbarStyle: "inverted",
    }));
  };

  const handleVibrant = () => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      navbarStyle: "vibrant",
    }));
  };

  const handleTransparent = () => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      navbarStyle: "transparent",
    }));
  };

  const handleLightMode = () => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      theme: "light",
    }));
  };

  const handleDarkMode = () => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      theme: "dark",
    }));
  };

  return (
    <>
      <Offcanvas
        className="offcanvas offcanvas-end settings-panel border-0"
        placement="end"
        show={visible}
        onHide={handleClose}
        scroll={true}
      >
        <Offcanvas.Header className="offcanvas-header settings-panel-header bg-shape">
          <Offcanvas.Title className="z-index-1 py-1 light">
            <h5 className="text-white">
              <FontAwesomeIcon icon={faPalette} className="me-2 fs-0" />
              Paramètres
            </h5>
            <p className=" fs--1 text-white opacity-75">
              Définissez votre propre style personnalisé
            </p>
          </Offcanvas.Title>
          <button
            className="btn-close btn-close-white z-index-1 mt-0"
            type="button"
            onClick={handleClose}
          ></button>
        </Offcanvas.Header>
        <OverlayScrollbarsComponent
          className="scrollbar"
          options={{
            scrollbars: {
              autoHide: "leave",
              autoHideDelay: 200,
            },
          }}
        >
          <Offcanvas.Body className="offcanvas-body scrollbar-overlay px-card">
            <h5 className="fs-0">Palette de couleurs</h5>
            <p className="fs--1">
              Choisissez le mode de couleur parfait pour votre application.
            </p>
            <div className="btn-group d-block w-100 btn-group-navbar-style">
              <div className="row gx-2">
                <div className="col-6">
                  <input
                    className="btn-check"
                    id="themeSwitcherLight"
                    name="theme-color"
                    type="radio"
                    checked={theme === "light"}
                    value="light"
                    data-theme-control="theme"
                    onChange={handleLightMode}
                  />
                  <label
                    className="btn d-inline-block btn-navbar-style fs--1"
                    htmlFor="themeSwitcherLight"
                  >
                    <span className="hover-overlay mb-2 rounded d-block">
                      <img
                        className="img-fluid img-prototype mb-0"
                        src={lightMode}
                        alt=""
                      />
                    </span>
                    <span className="label-text">Light</span>
                  </label>
                </div>
                <div className="col-6">
                  <input
                    className="btn-check"
                    id="themeSwitcherDark"
                    name="theme-color"
                    type="radio"
                    checked={theme === "dark"}
                    value="dark"
                    data-theme-control="theme"
                    onChange={handleDarkMode}
                  />
                  <label
                    className="btn d-inline-block btn-navbar-style fs--1"
                    htmlFor="themeSwitcherDark"
                  >
                    <span className="hover-overlay mb-2 rounded d-block">
                      <img
                        className="img-fluid img-prototype mb-0"
                        src={darkMode}
                        alt=""
                      />
                    </span>
                    <span className="label-text"> Dark</span>
                  </label>
                </div>
              </div>
            </div>
            <hr />

            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-start">
                <img className="me-2" src={arrows} width="20" alt="" />
                <div className="flex-1">
                  <h5 className="fs-0">Disposition fluide</h5>
                  <p className="fs--1 mb-0">
                    Basculer le système de disposition des conteneurs
                  </p>
                </div>
              </div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input ms-0"
                  id="mode-fluid"
                  type="checkbox"
                  data-theme-control="isFluid"
                  checked={isFluid}
                  onChange={handleFluid}
                />
              </div>
            </div>

            <hr />
            <h5 className="fs-0 d-flex align-items-center">
              Vertical Navbar Style
            </h5>
            <p className="fs--1 mb-0">
              Basculez entre les styles de votre barre de navigation verticale
            </p>
            <div className="btn-group d-block w-100 btn-group-navbar-style">
              <div className="row gx-2">
                <div className="col-6">
                  <input
                    className="btn-check"
                    id="navbar-style-transparent"
                    type="radio"
                    checked={navbarStyle === "transparent"}
                    name="navbarStyle"
                    value="transparent"
                    data-theme-control="navbarStyle"
                    onChange={handleTransparent}
                  />
                  <label
                    className="btn d-block w-100 btn-navbar-style fs--1"
                    htmlFor="navbar-style-transparent"
                  >
                    <img
                      className="img-fluid img-prototype"
                      src={defaut}
                      alt=""
                    />
                    <span className="label-text"> Transparent</span>
                  </label>
                </div>
                <div className="col-6">
                  <input
                    className="btn-check"
                    id="navbar-style-inverted"
                    type="radio"
                    checked={navbarStyle === "inverted"}
                    name="navbarStyle"
                    value="inverted"
                    data-theme-control="navbarStyle"
                    onChange={handleInverted}
                  />
                  <label
                    className="btn d-block w-100 btn-navbar-style fs--1"
                    htmlFor="navbar-style-inverted"
                  >
                    <img
                      className="img-fluid img-prototype"
                      src={inverted}
                      alt=""
                    />
                    <span className="label-text"> Inversé</span>
                  </label>
                </div>
                <div className="col-6">
                  <input
                    className="btn-check"
                    id="navbar-style-card"
                    type="radio"
                    name="navbarStyle"
                    value="card"
                    checked={navbarStyle === "card"}
                    data-theme-control="navbarStyle"
                    onChange={handleCard}
                  />
                  <label
                    className="btn d-block w-100 btn-navbar-style fs--1"
                    htmlFor="navbar-style-card"
                  >
                    <img
                      className="img-fluid img-prototype"
                      src={card}
                      alt=""
                    />
                    <span className="label-text"> Carte</span>
                  </label>
                </div>
                <div className="col-6">
                  <input
                    className="btn-check"
                    id="navbar-style-vibrant"
                    type="radio"
                    checked={navbarStyle === "vibrant"}
                    name="navbarStyle"
                    value="vibrant"
                    data-theme-control="navbarStyle"
                    onChange={handleVibrant}
                  />
                  <label
                    className="btn d-block w-100 btn-navbar-style fs--1"
                    htmlFor="navbar-style-vibrant"
                  >
                    <img
                      className="img-fluid img-prototype"
                      src={vibrant}
                      alt=""
                    />
                    <span className="label-text"> Vibrant</span>
                  </label>
                </div>
              </div>
            </div>
          </Offcanvas.Body>
        </OverlayScrollbarsComponent>
      </Offcanvas>

      <a href="#" className="card setting-toggle" onClick={handleShow}>
        <div className="card-body d-flex align-items-center py-md-2 px-2 py-1">
          <div
            className="bg-soft-primary position-relative rounded-start"
            style={{ height: "34px", width: "28px" }}
          >
            <div className="settings-popover">
              <span className="ripple">
                <span className="fa-spin position-absolute all-0 d-flex flex-center">
                  <span className="icon-spin position-absolute all-0 d-flex flex-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.7369 12.3941L19.1989 12.1065C18.4459 11.7041 18.0843 10.8487 18.0843 9.99495C18.0843 9.14118 18.4459 8.28582 19.1989 7.88336L19.7369 7.59581C19.9474 7.47484 20.0316 7.23291 19.9474 7.03131C19.4842 5.57973 18.6843 4.28943 17.6738 3.20075C17.5053 3.03946 17.2527 2.99914 17.0422 3.12011L16.393 3.46714C15.6883 3.84379 14.8377 3.74529 14.1476 3.3427C14.0988 3.31422 14.0496 3.28621 14.0002 3.25868C13.2568 2.84453 12.7055 2.10629 12.7055 1.25525V0.70081C12.7055 0.499202 12.5371 0.297594 12.2845 0.257272C10.7266 -0.105622 9.16879 -0.0653007 7.69516 0.257272C7.44254 0.297594 7.31623 0.499202 7.31623 0.70081V1.23474C7.31623 2.09575 6.74999 2.8362 5.99824 3.25599C5.95774 3.27861 5.91747 3.30159 5.87744 3.32493C5.15643 3.74527 4.26453 3.85902 3.53534 3.45302L2.93743 3.12011C2.72691 2.99914 2.47429 3.03946 2.30587 3.20075C1.29538 4.28943 0.495411 5.57973 0.0322686 7.03131C-0.051939 7.23291 0.0322686 7.47484 0.242788 7.59581L0.784376 7.8853C1.54166 8.29007 1.92694 9.13627 1.92694 9.99495C1.92694 10.8536 1.54166 11.6998 0.784375 12.1046L0.242788 12.3941C0.0322686 12.515 -0.051939 12.757 0.0322686 12.9586C0.495411 14.4102 1.29538 15.7005 2.30587 16.7891C2.47429 16.9504 2.72691 16.9907 2.93743 16.8698L3.58669 16.5227C4.29133 16.1461 5.14131 16.2457 5.8331 16.6455C5.88713 16.6767 5.94159 16.7074 5.99648 16.7375C6.75162 17.1511 7.31623 17.8941 7.31623 18.7552V19.2891C7.31623 19.4425 7.41373 19.5959 7.55309 19.696C7.64066 19.7589 7.74815 19.7843 7.85406 19.8046C9.35884 20.0925 10.8609 20.0456 12.2845 19.7729C12.5371 19.6923 12.7055 19.4907 12.7055 19.2891V18.7346C12.7055 17.8836 13.2568 17.1454 14.0002 16.7312C14.0496 16.7037 14.0988 16.6757 14.1476 16.6472C14.8377 16.2446 15.6883 16.1461 16.393 16.5227L17.0422 16.8698C17.2527 16.9907 17.5053 16.9504 17.6738 16.7891C18.7264 15.7005 19.4842 14.4102 19.9895 12.9586C20.0316 12.757 19.9474 12.515 19.7369 12.3941ZM10.0109 13.2005C8.1162 13.2005 6.64257 11.7893 6.64257 9.97478C6.64257 8.20063 8.1162 6.74905 10.0109 6.74905C11.8634 6.74905 13.3792 8.20063 13.3792 9.97478C13.3792 11.7893 11.8634 13.2005 10.0109 13.2005Z"
                        fill="#5DA5B8"
                      ></path>
                    </svg>
                  </span>
                </span>
              </span>
            </div>
          </div>
          <small className="text-uppercase text-primary fw-bold bg-soft-primary py-2 pe-2 ps-1 rounded-end">
            personnaliser
          </small>
        </div>
      </a>
    </>
  );
};

export default AppSetting;
