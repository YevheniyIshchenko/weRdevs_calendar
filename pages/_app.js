import App from "next/app";
import React, { Component } from "react";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import {store} from "../components/reduxData";
import "../styles/globals.scss";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

// class MyApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     const appProps = Component.getInitialProps
//       ? await Component.getInitialProps(ctx)
//       : {};
//     return { appProps: appProps };
//   }
//   render() {
//     // const { Component, appProps } = this.props;
//     return (
//       <Provider store={store}>
//         <Component {...appProps}></Component>
//       </Provider>
//     );
//   }
// }

// const makestore = () => store;
// const wrapper = createWrapper(makestore);

// export default withRedux(makestore)(MyApp);

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

const makestore = ()=> store;
const wrapper = createWrapper(makestore)

// export default MyApp;
export default withRedux(makestore)(MyApp);
