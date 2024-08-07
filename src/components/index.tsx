"use client";

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect } from 'react';

const Home: FC = () => {
  useEffect(() => {
    // WebFont loader
    const WebFont = require('webfontloader');
    WebFont.load({
      google: {
        families: ["DM Sans:regular,500,700"],
      },
    });

    // Custom JS for animations or other functionalities
    const script = document.createElement('script');
    script.src = 'https://assets-global.website-files.com/63dbcee746674134a00f2de6/js/webflow.1b86714e7.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Home - Flicky App</title>
        <meta
          name="description"
          content="Cloudly X is our Tech App Webflow Template created for startups. If you are looking to take your company to the next level, this is the template you are looking for."
        />
        <meta property="og:title" content="Home - Cloudly X - Webflow Ecommerce website template" />
        <meta
          property="og:description"
          content="Cloudly X is our Tech App Webflow Template created for startups. If you are looking to take your company to the next level, this is the template you are looking for."
        />
        <meta
          property="og:image"
          content="https://assets-global.website-files.com/63dbcee746674134a00f2de6/63dd3d96d98778b4b097dff0_cloudly-x%20-tech-app-webflow-template.png"
        />
        <meta property="og:type" content="website" />
        <meta property="twitter:title" content="Home - Flicky App" />
        <meta
          property="twitter:description"
          content="Cloudly X is our Tech App Webflow Template created for startups. If you are looking to take your company to the next level, this is the template you are looking for."
        />
        <meta
          property="twitter:image"
          content="https://assets-global.website-files.com/63dbcee746674134a00f2de6/63dd3d96d98778b4b097dff0_cloudly-x%20-tech-app-webflow-template.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://assets-global.website-files.com/63dbcee746674134a00f2de6/css/cloudlytemplate.webflow.adf0f6d88.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="icon"
          href="https://assets-global.website-files.com/63dbcee746674134a00f2de6/64078a7bc9b22964d3bdf66d_favicon-cloudly-webflow-ecommerce-template.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://assets-global.website-files.com/63dbcee746674134a00f2de6/6407999ae13173fd247f6205_webclip-cloudly-webflow-ecommerce-template.png"
        />
      </Head>

      <header className="header-wrapper w-nav">
        <div className="container-default w-container">
          <div className="header-content-wrapper">
            <Link href="/home" legacyBehavior>
              <a className="header-logo-link w-nav-brand w--current">
                <img
                  src="https://assets-global.website-files.com/63dbcee746674134a00f2de6/64078a7bc9b22964d3bdf66d_favicon-cloudly-webflow-ecommerce-template.png"
                  alt="Cloudly X Webflow Template - Logo"
                  className="header-logo"
                  style={{ maxWidth: '70px' }}
                />
                <span>Flicky app</span>
              </a>
            </Link>
            <div className="header-middle right">
              <nav role="navigation" className="header-nav-menu-wrapper w-nav-menu">
                <ul role="list" className="header-nav-menu-list">
                  <li className="header-nav-list-item middle">
                    <Link href="/home" legacyBehavior><a className="header-nav-link w-nav-link w--current">Home</a></Link>
                  </li>
                  <li className="header-nav-list-item middle">
                    <Link href="/about" legacyBehavior><a className="header-nav-link w-nav-link">About</a></Link>
                  </li>
                  <li className="header-nav-list-item middle">
                    <Link href="/blog" legacyBehavior><a className="header-nav-link w-nav-link">Blog</a></Link>
                  </li>
                  <li className="header-nav-list-item show-in-tablet">
                    <Link href="/landing-page" legacyBehavior>
                      <a className="btn-primary small w-button">
                        <span className="qr-code"></span>
                        Download app
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-right-side">
              <div className="hamburger-menu-wrapper w-nav-button">
                <div className="hamburger-menu-bar top"></div>
                <div className="hamburger-menu-bar bottom"></div>
              </div>
              <Link href="/landing-page" legacyBehavior>
                <a className="btn-primary small hidden-on-tablet w-button">
                  <span className="qr-code"></span>
                  Download app
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="section hero home-hero">
          <div className="container-default w-container">
            <div className="w-layout-grid grid-2-columns home-grid-2-cols">
              <div id="w-node-_80975be9-6921-0d2e-00cf-7dca93b24a76-a40f2de7">
                <div id="w-node-_80975be9-6921-0d2e-00cf-7dca93b24a77-a40f2de7" className="mg-bottom-20px">
                  <div className="display-flex---children-wrap">
                    <div className="flex-horizontal start">
                      <h1 className="display-1 mg-bottom-0">Welcome</h1>
                      <img
                        src="https://assets-global.website-files.com/63dbcee746674134a00f2de6/63dd8ddf4940a673b6bef8b3_stars-cloudly-x-webflow-templates.png"
                        alt=""
                        className="icon-inside-header"
                      />
                    </div>
                    <div className="flex-horizontal start wrap">
                      <div className="display-1">to Flicky</div>
                      <img
                        src="https://assets-global.website-files.com/63dbcee746674134a00f2de6/6407b5dd316ad9d83b86f1d1_smartphone-cloudly-x-webflow-template.png"
                        alt=""
                        className="icon-inside-header fit-contain"
                      />
                      <div className="display-1">app</div>
                    </div>
                  </div>
                </div>
                <div className="mg-bottom-40px">
                  <div className="inner-container _596px _100-tablet">
                    <p className="mg-bottom-0">
                      Flicky is your go-to app for watching, sharing, and discovering short, engaging videos. Whether you’re into comedy, music, DIY, travel, or daily vlogs, Flicky has something for everyone.
                    </p>
                  </div>
                </div>
                <div id="w-node-_305ee44c-a06c-cafb-5bfe-69c82b989d61-a40f2de7" className="button-row-flex">
                  <Link href="https://www.apple.com/app-store/" legacyBehavior>
                    <a target="_blank" className="btn-secondary flex w-inline-block">
                      <img
                        src="https://assets-global.website-files.com/63dbcee746674134a00f2de6/63dc2370e06cc294c742a835_apple-logo-cloudly-x-webflow-templates.svg"
                        alt="Apple Logo"
                      />
                      <div>Download for iOS</div>
                    </a>
                  </Link>
                  <Link href="https://play.google.com/store/apps" legacyBehavior>
                    <a target="_blank" className="btn-secondary flex w-inline-block">
                      <img
                        src="https://assets-global.website-files.com/63dbcee746674134a00f2de6/63dc2394682caac78259a1c5_android-logo-cloudly-x-webflow-templates.svg"
                        alt="Android Logo"
                      />
                      <div>Download for Android</div>
                    </a>
                  </Link>
                </div>
              </div>
              <div id="w-node-_8e100be5-6e78-f033-946a-35162489b78c-a40f2de7" className="z-index-1">
                <img
                  src="https://assets-global.website-files.com/63dbcee746674134a00f2de6/63e2dd7e107e72495c943acf_smartphone-home-cloudly-x-webflow-template.png"
                  alt="Smartphone"
                  className="image-size smartphone z-index-1"
                />
                <div className="shape-wrapper">
                  <img
                    src="https://assets-global.website-files.com/63dbcee746674134a00f2de6/63e2df52107e7239949451c3_smile-face-with-sunglasses-cloudly-x-webflow-template.png"
                    alt="Emoji with sunglasses"
                    className="shape emoji-with-sunglasses moving-item-one"
                  />
                  <img
                    src="https://assets-global.website-files.com/63dbcee746674134a00f2de6/63e2e10667358d7c2f4bb23e_laughing-a-lot-face-cloudly-x-webflow-template.png"
                    alt="Emoji laughing a lot"
                    className="shape emoji-laughing-a-lot moving-item-two"
                  />
                  <img
                    src="https://assets-global.website-files.com/63dbcee746674134a00f2de6/63e2e1d9513de13664209d82_smilling-face-with-hearth-cloudly-x-webflow-template.png"
                    alt="Smiling face with heart eyes"
                    className="shape emoji-heart-eyes moving-item-one"
                  />
                  <img
                    src="https://assets-global.website-files.com/63dbcee746674134a00f2de6/63e2e263d05c8e665fd087d5_big-smile-face-cloudly-x-webflow-template.png"
                    alt="Big smile face"
                    className="shape emoji-big-smile moving-item-two"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .page-wrapper {
          opacity: 0;
        }
        /* Add more custom styles if needed */
      `}</style>
    </div>
  );
};

export default Home;
