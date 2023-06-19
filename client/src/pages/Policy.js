import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            Use of Information: It describes how the store uses the collected
            information, such as processing orders, providing customer support,
            personalizing the shopping experience, and sending marketing
            communications.
          </p>

          <p>
            Sharing of Information: It outlines whether and how the store shares
            personal information with third parties, such as shipping providers
            or payment processors. It may also mention any sharing of data for
            marketing or advertising purposes.
          </p>

          <p>
            User Rights: It informs users about their rights regarding their
            personal information, such as the right to access, rectify, or
            delete their data. It may also provide instructions on how to
            exercise these rights.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
