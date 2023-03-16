import React from "react";
import { Helmet } from "react-helmet-async";

const Metadata = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title>{`${title}-MyCart`}</title>
      </Helmet>
    </div>
  );
};

export default Metadata;
