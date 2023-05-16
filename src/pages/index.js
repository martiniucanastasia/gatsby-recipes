import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <h1>Home</h1>
      <Link to="/about">about</Link>
      <br />
      <Link to="/company/history">history</Link>
    </Layout>
  );
};

export default Home;
