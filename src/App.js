import logo from "./assets/header-logo.png";
import logoText from "./assets/header-logo-text.png";
import twPost from "./assets/tw-post.png";
import x from "./assets/x.png";
import cloud1 from "./assets/cloud-1.png";
import cloud2 from "./assets/cloud-2.png";
import cloud3 from "./assets/cloud-3.png";
import ft1 from "./assets/ft-1.png";
import ft2 from "./assets/ft-2.png";
import ft3 from "./assets/ft-3.png";
import ft4 from "./assets/ft-4.png";
import elon from "./assets/elon.png";
import unicorn1 from "./assets/unicorn-1.png";
import unicorn2 from "./assets/unicorn-2.png";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="header-logo">
            {/* <div className="header-logo-text">
              <img src={logoText} alt="" />
            </div> */}
          </div>
          <div className="header-menu">
            <a href="#" target="_blank" rel="noopener noreferrer">
              UNISWAP
            </a>
            <a
              href="https://www.dextools.io/app/en/ether/pair-explorer/0xde24a9da83f71697f184759c266660034380603b"
              target="_blank"
              rel="noopener noreferrer">
              DEXTOOLS
            </a>
            <a
              href="https://t.me/TeslaOwnersSiliconValleyonX"
              target="_blank"
              rel="noopener noreferrer">
              TELEGRAM
            </a>
            <a
              href="https://twitter.com/elonmusk/status/1711265656341991753"
              target="_blank"
              rel="noopener noreferrer">
              TWITTER
            </a>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="main-logo-img">
          <img src={logo} alt="" />
        </div>
        {/* <div className="chart">
          <iframe
            id="dextools-widget"
            title="DEXTools Trading Chart"
            className="chart-if"
            src="#"></iframe>
        </div> */}
        <div className="main-header">
          <div className="cloud-1 cloud">
            <img src={cloud1} alt="" />
          </div>
          <p className="ca">CA: 0x0bEbCf46E947eFcF71BAF42FeC0a521e62f8747c</p>
          <div className="cloud-2 cloud">
            <img src={cloud2} alt="" />
          </div>
        </div>
        <div className="main-post">
          <div className="main-post-unicorn">
            <div className="main-post-unicorn-1">
              <img src={unicorn1} alt="" />
            </div>
            <div className="main-post-unicorn-2">
              <img src={unicorn2} alt="" />
            </div>
          </div>
          <div className="tw-post">
            <img src={twPost} alt="" />
            {/* <img src={elon} alt="" className="tw-post-pos" /> */}
          </div>
        </div>
        <div className="cloud-3 cloud">
          <img src={cloud3} alt="" />
        </div>

        <div className="main-footer">
          <div className="main-footer-left">
            <img src={x} alt="" />
          </div>
          <div className="main-footer-right">
            <div className="main-footer-right-cloud cloud">
              <img src={cloud2} alt="" />
            </div>
            <p></p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <span>
            All Rights Reserved | 2023 |
            developer@teslaownerssiliconvalleyonx.com
          </span>
          <div className="footer-socials">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={ft1} alt="" />
              <span>UNISWAP</span>
            </a>
            <a
              href="https://www.dextools.io/app/en/ether/pair-explorer/0xde24a9da83f71697f184759c266660034380603b"
              target="_blank"
              rel="noopener noreferrer">
              <img src={ft2} alt="" />
              <span>DEXTOOLS</span>
            </a>
            <a
              href="https://t.me/TeslaOwnersSiliconValleyonX"
              target="_blank"
              rel="noopener noreferrer">
              <img src={ft3} alt="" />
              <span>TELEGRAM</span>
            </a>
            <a
              href="https://twitter.com/elonmusk/status/1711265656341991753"
              target="_blank"
              rel="noopener noreferrer">
              <img src={ft4} alt="" />
              <span>TWITTER</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
