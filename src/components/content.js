import React from 'react';

import './content.css'

function Content() {
  return(
    <section className="content">
      <div className="content__title">
        <h2 className="content__title-1">Find your</h2>
        <h2 className="content__title-2">BEST TEACHER</h2>
      </div>

      <p className="content__paragraph">
        Whether you are a student trying to find your ideal private <br />
        language teachers/tutors or a teacher trying to find great students <br />
        for your customised private lessons!
      </p>

      <input className="content__input" type="text" placeholder="Type here what are you looking for"/>
      <div className="content__form__container">
      <form className="content__form">
        <label htmlFor="teacher" className="content__label">
          <input id="teacher" type="radio" name="whoiam"/>
          I'M A TEACHER
        </label>
        <label htmlFor="student" className="content__label">
          <input id="student" type="radio" name="whoiam"/>
          I'M A STUDENT
        </label>
      </form>
      <button className="content__button" type="button" >SEARCH</button>
      </div>
    </section>
  );
}

export default Content;