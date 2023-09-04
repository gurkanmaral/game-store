import "./Footer.scss"
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.5,
    },
  },
};

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className="footer"
  >
    <div className="footer-gradient" />
    <div className="footer-1">
      <div className="footer-2">
       <h4 className="footer-h4">GameStore</h4>
        <div className="footer-3 " />
           <div className=" footer-4">
          
          <p className="footer-p">
            Copyright © 2023 - 2024 GameStore. All rights reserved.
          </p>
          <div className="footer-icon">
            <TwitterIcon />
            <GitHubIcon />
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
