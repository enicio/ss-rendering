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

      <input className="content__input" type="text"/>
      <label className="content__label">
        I'M A TEACHER
        <input type="radio" name="I'M A TEACHER"/>
       </label>
       <label className="content__label">
        I'M A STUDENT
        <input type="radio" name="I'M A STUDENT"/>
      </label>
      <button className="content__button" type="button" >SEARCH</button>
    </section>
  );
}

export default Content;