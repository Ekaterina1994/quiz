import React from "react";
import Paragraph from "../../components/Paragraph";
import Headline from "../../components/Headline";

/**
 * Компонент страницы "Настройки"
 */
const NotFoundPage: React.FC = () => {
  return (
    <section className="container">
      <Headline headline="404" />
      <Paragraph text="Page not found" />
      {/* <h1 className="teal-text text-lighten-1 center-align">404</h1> */}
      {/* <p className="teal-text text-lighten-1 center-align">Page not found.</p> */}
    </section>
  );
};

export default NotFoundPage;
