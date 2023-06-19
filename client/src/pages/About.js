import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Beauty-Shop"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            An e-commerce company that specializes in beauty and wellness
            products. It was founded in 2012 by Beauty-Shop and has since become
            one of the leading beauty platforms in India. Nykaa offers a wide
            range of products across categories such as skincare, makeup,
            haircare, fragrances, bath and body, wellness, and more. The company
            operates both an online marketplace, BeaytyShop.com, and
            brick-and-mortar stores called Nykaa Luxe and Nykaa On Trend. Beauty
            Stores offer high-end luxury beauty products, while Nykaa On Trend
            stores feature a mix of affordable and premium brands.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
