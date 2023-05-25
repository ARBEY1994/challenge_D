import React from "react";

import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { BsFillTruckFrontFill } from "react-icons/bs";

export default function footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <BsFillTruckFrontFill size={24} />
          </a>
          <span className="mb-3 mb-md-0 text-muted">
            &copy; 2023 Company, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="#1">
              <FaTwitter size={24} />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#1">
              <FaInstagram size={24} />
              <use href="#instagram" />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#1">
              <FaFacebook size={24} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
