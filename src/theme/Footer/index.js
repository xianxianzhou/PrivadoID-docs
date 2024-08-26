import React, { useEffect, useState } from "react";
import classnames from "classnames";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { CookieConsent } from "../../components";
import TagManager from "react-gtm-module";
import BrowserOnly from "@docusaurus/BrowserOnly";

const COOKIES_ACCEPTED_KEY = "areCookiesAccepted";
const GTAG_ID = "GTM-PLTCF7LL";

function FooterLink({ to, href, label, ...props }) {
  const toUrl = useBaseUrl(to);
  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
            href,
          }
        : {
            to: toUrl,
          })}
      {...props}
    >
      {label}
    </Link>
  );
}

function Footer() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { themeConfig = {} } = siteConfig;
  const { footer } = themeConfig;
  const [areCookiesAccepted, setArecookiesAccepted] = useState(true);
  const [isCookieConsentOpen, setIsCookieConsentOpen] = useState(false);

  const { links = [] } = footer || {};

  if (!footer) {
    return null;
  }

  const onCookieConsentAccept = () => {
    setIsCookieConsentOpen(false);
    localStorage.setItem(COOKIES_ACCEPTED_KEY, "true");
  };

  const onCookieConsentDecline = () => {
    setIsCookieConsentOpen(false);
    localStorage.setItem(COOKIES_ACCEPTED_KEY, "false");
  };

  useEffect(() => {
    const cookiesAcceptedStorage = localStorage.getItem(COOKIES_ACCEPTED_KEY);

    setArecookiesAccepted(cookiesAcceptedStorage === "true");
    if (cookiesAcceptedStorage === null) {
      setIsCookieConsentOpen(true);
    }
  }, []);

  useEffect(() => {
    if (areCookiesAccepted && GTAG_ID) {
      TagManager.initialize({
        gtmId: GTAG_ID,
      });
    }
  }, [areCookiesAccepted]);

  return (
    <BrowserOnly>
      {() => (
        <footer
          className={classnames("footer", {
            "footer--dark": footer.style === "dark",
          })}
        >
          <div className="container">
            <div className="footer_logo-row">
              <a
                href="https://privado.id/"
                aria-current="page"
                className="nav_logo-link is-footer w-nav-brand w--current"
              >
                <img src="/img/UptickNetwork_logo02.svg" loading="lazy" width="113" height="36" alt="" />
              </a>

              <div className="footer_sm-link-wrapper">
                <a
                  href="https://x.com/uptickproject"
                  target="_blank"
                  className="w-inline-block"
                >
                  <div className="icon-1x1-medium is-footer-icon w-embed">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.069 6.73077C20.394 7.07692 19.719 7.19231 18.9315 7.30769C19.719 6.84615 20.2815 6.15385 20.5065 5.23077C19.8315 5.69231 19.044 5.92308 18.144 6.15385C17.469 5.46154 16.4565 5 15.444 5C13.0815 5 11.2815 7.30769 11.844 9.61538C8.80647 9.5 6.10647 8 4.19397 5.69231C3.18147 7.42308 3.74397 9.61538 5.31897 10.7692C4.75647 10.7692 4.19397 10.5385 3.63147 10.3077C3.63147 12.0385 4.86897 13.6538 6.55647 14.1154C5.99397 14.2308 5.43147 14.3462 4.86897 14.2308C5.31897 15.7308 6.66897 16.8846 8.35647 16.8846C7.00647 17.9231 4.98147 18.5 3.06897 18.2692C4.75647 19.3077 6.66897 20 8.69397 20C15.5565 20 19.3815 14.1154 19.1565 8.69231C19.944 8.23077 20.619 7.53846 21.069 6.73077Z"
                        fill="currentcolor"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://discord.com/invite/teqX78VZUV"
                  target="_blank"
                  className="w-inline-block"
                >
                  <div className="icon-1x1-medium is-footer-icon w-embed">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.3166 7.08877C17.1362 6.57346 15.8874 6.20731 14.6032 6C14.4432 6.26982 14.2563 6.63272 14.1274 6.92143C12.7428 6.72718 11.371 6.72718 10.0118 6.92143C9.88302 6.63278 9.69191 6.26982 9.53047 6C8.24501 6.20741 6.99512 6.57449 5.8141 7.09146C3.46398 10.4049 2.82688 13.6359 3.14539 16.8212C4.70415 17.9072 6.21475 18.567 7.69989 18.9987C8.06898 18.5251 8.39525 18.0238 8.67533 17.4998C8.1421 17.3104 7.62805 17.077 7.13928 16.8023C7.26791 16.7134 7.3935 16.6207 7.51588 16.5244C10.4776 17.8168 13.6956 17.8168 16.622 16.5244C16.745 16.62 16.8705 16.7127 16.9986 16.8023C16.509 17.0777 15.994 17.3116 15.4597 17.5012C15.7414 18.0273 16.0671 18.5291 16.4352 19C17.9217 18.5683 19.4337 17.9086 20.9925 16.8212C21.3662 13.1287 20.354 9.92724 18.3166 7.08871V7.08877ZM9.07885 14.8623C8.18975 14.8623 7.46061 14.0879 7.46061 13.1449C7.46061 12.2019 8.17421 11.4262 9.07885 11.4262C9.98356 11.4262 10.7126 12.2005 10.6971 13.1449C10.6985 14.0879 9.98356 14.8623 9.07885 14.8623ZM15.059 14.8623C14.1699 14.8623 13.4408 14.0879 13.4408 13.1449C13.4408 12.2019 14.1544 11.4262 15.059 11.4262C15.9637 11.4262 16.6928 12.2005 16.6772 13.1449C16.6772 14.0879 15.9637 14.8623 15.059 14.8623Z"
                        fill="currentcolor"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="https://github.com/UptickNetwork/PrivadoID-docs/tree/uptick_chain" target="_blank" className="w-inline-block">
                  <div className="icon-1x1-medium is-footer-icon w-embed">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.0384 2C6.5338 2 2.06897 6.58933 2.06897 12.2474C2.06897 16.7739 4.94359 20.6088 8.85796 21.9919C9.34726 22.0547 9.53074 21.7404 9.53074 21.4889C9.53074 21.2375 9.53074 20.6088 9.53074 19.7286C6.77845 20.3573 6.16683 18.3456 6.16683 18.3456C5.73869 17.1511 5.06591 16.8367 5.06591 16.8367C4.14848 16.2081 5.12707 16.2081 5.12707 16.2081C6.10567 16.2709 6.65613 17.2768 6.65613 17.2768C7.57356 18.8485 8.98028 18.4084 9.53074 18.1569C9.59191 17.4654 9.89772 17.0253 10.1424 16.7739C7.94053 16.5224 5.61637 15.6422 5.61637 11.6816C5.61637 10.55 5.98334 9.66984 6.65613 8.91543C6.59496 8.72682 6.22799 7.65808 6.77845 6.27499C6.77845 6.27499 7.63472 6.02352 9.53074 7.34374C10.3259 7.09227 11.1821 7.0294 12.0384 7.0294C12.8947 7.0294 13.7509 7.15514 14.546 7.34374C16.4421 6.02352 17.2983 6.27499 17.2983 6.27499C17.8488 7.65808 17.4818 8.72682 17.4207 8.97829C18.0323 9.66984 18.4604 10.6128 18.4604 11.7445C18.4604 15.7051 16.1362 16.5224 13.9344 16.7739C14.3014 17.0882 14.6072 17.7169 14.6072 18.6599C14.6072 20.043 14.6072 21.1117 14.6072 21.4889C14.6072 21.7404 14.7907 22.0547 15.28 21.9919C19.2555 20.6088 22.069 16.7739 22.069 12.2474C22.0078 6.58933 17.543 2 12.0384 2Z"
                        fill="currentcolor"
                      ></path>
                    </svg>
                  </div>
                </a>


              </div>
            </div>
            <div className="padding-bottom-huge"></div>
            <div className="row">
              {links.map((linkItem, i) => (
                <div key={i} className="col footer__col">
                  {linkItem.title != null ? (
                    <h4 className="footer__title">{linkItem.title}</h4>
                  ) : null}
                  {linkItem.items != null &&
                  Array.isArray(linkItem.items) &&
                  linkItem.items.length > 0 ? (
                    <div className="footer__items">
                      {linkItem.items.map((item, key) =>
                        item.html ? (
                          <div
                            key={key}
                            className="footer__item"
                            dangerouslySetInnerHTML={{
                              __html: item.html,
                            }}
                          />
                        ) : (
                          <div key={item.href || item.to} className="footer__item">
                            <FooterLink {...item} />
                          </div>
                        )
                      )}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          {isCookieConsentOpen && (
            <CookieConsent onAccept={onCookieConsentAccept} onDecline={onCookieConsentDecline} />
          )}
        </footer>
      )}
    </BrowserOnly>
  );
}

export default Footer;
