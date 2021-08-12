import React, { Component } from "react";
import "./Advice.css";

export default class index extends Component {
  render() {
    return (
      <div className="AdviceSec">
        <nav class="icl-GlobalFooter-nav" role="navigation">
          <ul class="icl-GlobalFooter-items">
            <li class="icl-GlobalFooter-item">
              <a class="icl-GlobalFooter-link" href="./">
                Career Advice-
              </a>
            </li>
            <li class="icl-GlobalFooter-item">
              <a class="icl-GlobalFooter-link" href="./">
                Browse Jobs-
              </a>
            </li>
            <li class="icl-GlobalFooter-item">
              <a class="icl-GlobalFooter-link" href="./">
                Browse Companies-
              </a>
            </li>
            <li class="icl-GlobalFooter-item">
              <a class="icl-GlobalFooter-link" href="./">
                Salaries
              </a>
            </li>
          </ul>

          <ul class="icl-GlobalFooter-items">
            <li class="icl-GlobalFooter-item">© 2020 Indeed</li>
            <li class="icl-GlobalFooter-item">
              <a class="icl-GlobalFooter-link" href="./">
                Privacy Center-
              </a>
            </li>
            <li class="icl-GlobalFooter-item">
              <a class="icl-GlobalFooter-link" href="./">
                Cookies-
              </a>
            </li>
            <li class="icl-GlobalFooter-item">
              <a class="icl-GlobalFooter-link" href="./">
                Privacy-
              </a>
            </li>
            <li class="icl-GlobalFooter-item">
              <a class="icl-GlobalFooter-link" href="./">
                Terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
