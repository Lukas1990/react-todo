import React, {useState} from 'react';


function AddTodo(props) {
  const {phrase} = props

  let TextareaValue
  let CheckboxValue

  const handleSubmit = (e) => {
    e.preventDefault()
    const fields = document.getElementsByClassName("formData")
    TextareaValue = fields[0].value
    CheckboxValue = fields[1].checked

    if (TextareaValue) {
      props.onItemSubmit([TextareaValue, CheckboxValue])
    }
    fields[0].value = ""
    fields[0].focus()
  }
  
  return (
<form className="govuk-grid-column-one-half" onSubmit={handleSubmit} >
  <h2 className="govuk-heading-m">{phrase["Add a task"]}:</h2>
  <textarea className="govuk-textarea formData" id="more-detail" name="more-detail" rows="5" aria-describedby="more-detail-hint" onKeyDown={e => e.key === 'Enter' && handleSubmit(e)} ></textarea>
  <div className="govuk-form-group">
    <fieldset className="govuk-fieldset">
      <div className="govuk-checkboxes govuk-checkboxes--small">
        <div className="govuk-checkboxes__item">
            <input className="govuk-checkboxes__input formData" id="important_task" name="priority" type="checkbox" />
            <label className="govuk-label govuk-checkboxes__label" htmlFor="important_task"> {phrase["Important task"]} </label>
        </div>
      </div>
    </fieldset>
  </div>
  <button type="submit" className="govuk-button" data-module="govuk-button"> {phrase["Save the task"]} </button>
</form>
  );
}

export default AddTodo;
