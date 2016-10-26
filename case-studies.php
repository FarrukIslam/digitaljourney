<?php
/* Template Name: Case-Studies */
 get_header(); ?>
<div class="container ">
              <header class="section-header section-header--centered">
                <h4>Case Studies</h4>
                <h1 style="margin-bottom:0">We solve human problems for important companies.</h1>
              </header>
          </div>

          <section class="case-study-list__wrapper content-section">
            <ul class="case-study-list">

              <li class="case-study-list__item">
                <a href="#" class="case-study-list__item__image"><img width="1200" height="800" src="img/handsome_website_case_study_silvercar_masthead_v2-2-1200x800.jpg" alt="" sizes="(max-width: 1200px) 100vw, 1200px" /></a>
                <h3 class="case-study-list__item__title"><a href="#">Silvercar</a></h3>
                <p>
                  Silvercar chose us to help them take their brand and bring it front and center on all of their digital real estates.<br />
                  <a href="#">Read more...</a>
                </p>
              </li>
               
            </ul>
          </section>

          <section class="content-section">
            <header class="section-header">
              <h4>More Case Studies Coming Soon</h4>
              <h1>We&rsquo;re working on telling the stories of our engagements, but until then we&rsquo;re happy to share them directly with you. </h1>
            </header>

            <div class="casestudy-form">
              <div class="casestudy-form__image"></div>
              <div class="casestudy-form__form-wrap">
                <div class="casestudy-form__form">
                  <h3 class="casestudy-title">Enter your email and a strategist will be in touch with you shortly.</h3>
                  <div class="casestudy-form__form__inner">
                    <form novalidate="novalidate">
                      <p class="email-field-wrap">
                        <span class="your-email">
                          <input type="email" name="your-email" placeholder="Enter email address" />
                        </span>
                        <button class="arrow-check-btn" type="submit">
                          <span class="arrow-check">
                            <svg id="form-arrow-svg" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid">
                               <g class="arrow-group"><path id="arrow" d="M 3,3  8,3  13,8  8,13  3,13  8,8  3,3 Z" /></g>
                            </svg>
                          </span>
                        </button>
                      </p>
                    </form>
                    <p class="msg sendingMsg">Sending...</p>
                    <p class="msg successMsg">We got it. Thanks!</p>
                    <div class="progress-bar"><div class="progress-bar__progress"></div></div>
                  </div>
                </div>
              </div>
            </div>

          </section>

          <section class="page-list">
            <div>
              <div class="page-list__item">
                <a href="/why-handsome">
                  <h3>A vision, an approach and a team</h3>
                  <p>Why Handsome</p>
                </a>
                <div class="page-list__item__hover"></div>
              </div>
              <div class="page-list__item">
                <a href="/services">
                  <h3>Work that solves human problems</h3>
                  <p>Our Services</p>
                </a>
                <div class="page-list__item__hover"></div>
              </div>
              <div class="page-list__item">
                <a href="/perspectives">
                  <h3>Our latest research and perspectives</h3>
                  <p>Perspectives</p>
                </a>
                <div class="page-list__item__hover"></div>
              </div>
            </div>
         </section>
<?php get_footer(); ?>         