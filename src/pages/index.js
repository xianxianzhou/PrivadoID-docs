import * as React from "react";
import { useState } from "react";
import Layout from "@theme/Layout";
import { contentData } from "../data/content-data";
import {
  ButtonLink,
  TutorialsCard,
  Events,
  FAQSection,
  LearnSection,
  EcosystemSection,
  Overlay,
} from "../components";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Layout>
      <div className="bootstrap-wrapper">
        <div className="section-divider"></div>
        <div className="container">
          <div className="row">
            <div className="index-page exclude">
              <section className="section container-fluid">
                <div className="row justify-content-between">
                  <div className="col-lg-auto pop-text">
                    <h2
                      className="mt-0"
                      dangerouslySetInnerHTML={{ __html: contentData.headText }}
                    ></h2>
                    <div className="padding-bottom custom-padding"></div>
                    {contentData.headButtons?.length && (
                      <div className="button-group">
                        {contentData.headButtons.map((props, index) => {
                          return <ButtonLink key={index} {...props} />;
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </section>
            </div>
            <br />
            <br />
          </div>
          <div className="section-divider"></div>
          <div className="justify-content-center tutorial-cards">
            {contentData.linksCard.map((props, idx) => (
              <TutorialsCard key={idx} {...props} />
            ))}
          </div>
        </div>
        <div className="section-divider"></div>

        <div className="container">

          <div className="section-divider"></div>

          <div className="section-divider-40"></div>
        </div>
        {/*<div className="section-divider-40"></div>*/}
      </div>
    </Layout>
  );
}

export default Home;
