
import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Game.css";

const Game = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="game">
        <div className="game-intro">
          {t("game.intro")}
        </div>

        <div className="game-iframe">
          <iframe
            src="https://kahoot.it/challenge/05664719?challenge-id=9e8cbfa4-1633-4688-9c29-7cbdd1c590b3_1765022509398"
            width="800"
            height="600"
            frameBorder="0"
            allowFullScreen
            title="Kahoot Game"
          ></iframe>
        </div>

        <div className="game-end">{t("game.end1")}</div>
        <div className="game-end">{t("game.end2")}</div>
        <div className="game-end">{t("game.end3")}</div>
      </div>

      <footer className="site-footer">
        <div className="footer-content">
          <p>{t("game.footer1")}</p>
          <p>{t("game.footer2")}</p>
          <div className="footer-links">
            <a href="/privacy">{t("game.privacy")}</a> |{" "}
            <a href="/contact">{t("game.contact")}</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Game;
