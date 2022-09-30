import React, {useState, useEffect} from 'react';
import logo_white from './img/alarm_white.svg';
import alarm_black from './img/alarm_black.svg';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import LangSelect from './components/LangSelect';
import lang from './lang';

function App() {

  let savedItems = JSON.parse(localStorage.getItem("savedItems"));
  if (savedItems == null) { savedItems = [] }
  
  const [items, setItems] = useState(savedItems)

  let langVersion = "sk"
  const [phrase, setPhrase] = useState(lang[langVersion].phrase)

  const handleItemSubmit = (item) => {
    setItems([...items, item])
  }
  const handleDeleteItem = (id) => {
    setItems(items.filter((item, index) => index !== id));
    savedItems.splice(id, 1)
  }
  const handleLangChange = (langVer) => {
    langVersion = langVer
    setPhrase(lang[langVersion].phrase)
  }

  useEffect(() => {
    localStorage.setItem('savedItems', JSON.stringify(items));
  }, [items])


  return (
    <div className="App">
      <header className="govuk-header " role="banner" data-module="govuk-header">
        <div className="govuk-header__container govuk-width-container">
          <div className="govuk-header__logo">
            <a href="/" className="govuk-header__link govuk-header__link--homepage">
              <span className="govuk-header__logotype">
                <img src={logo_white}
                  role="presentation"
                  focusable="false"
                  className="govuk-header__logotype-crown"
                  height="30"
                  width="30" /> {' '}
                <span className="govuk-header__logotype-text">
                  {phrase["To do list"]}
                </span>
              </span>
            </a>
          </div>
          <div className="govuk-header__content">
            
          <LangSelect onLangChange={handleLangChange} />

          </div>
        </div>
      </header>

      <div className="govuk-width-container">
        <div className="govuk-breadcrumbs">
          <ol className="govuk-breadcrumbs__list">
            <li className="govuk-breadcrumbs__list-item">
              <a className="govuk-breadcrumbs__link" href="/section"></a>
            </li>
          </ol>
        </div>
        <main className="govuk-main-wrapper govuk-main-wrapper--auto-spacing" id="main-content">
          <div className="app-whitespace-highlight">
            <div className="govuk-grid-row">

              <ListTodo items={items} onDeleteItem={handleDeleteItem} phrase={phrase} />
              <AddTodo onItemSubmit={handleItemSubmit} phrase={phrase} />

            </div>
            </div>
        </main>
      </div>


      <footer className="govuk-footer ">
        <div className="govuk-width-container ">
          <div className="govuk-footer__meta">
            <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">

              <img src={alarm_black}
                role="presentation"
                focusable="false"
                className="govuk-footer__licence-logo"
                height="17"
                width="17" />
              <span className="govuk-footer__licence-description">
                {phrase["The application is also available on"]} {' '}
                <a className="govuk-footer__link"
                  href="https://github.com/Lukas1990/react-todo"
                  rel="license"
                >github.com</a>
              </span>
            </div>
            <div className="govuk-footer__meta-item">
              <a className="govuk-footer__link govuk-footer__copyright-logo"
                href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/"
              >© gov.sk copyright</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
