import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { AppContext } from "../App/AppContext";
import { StyleSheet, css } from "aphrodite";

const Footer = () => {
	return (
    <AppContext.Consumer>
      {(value) => (
        <footer className={css(styles.footerStyle)}>
          <p>
            Copyright {getFullYear()} - {getFooterCopy(true)}
          </p>
          {value.user.isLoggedIn && (
            <p>
              <a>Contact Us</a>
            </p>
          )}
        </footer>
      )}
    </AppContext.Consumer>
  );
};

const styles = StyleSheet.create({
  footerStyle: {
    maxHeight: "8vh",
    textAlign: 'center',
    fontStyle: "italic",
  },
});
export default Footer;