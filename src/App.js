import React, { useState, useEffect } from 'react';
import { Form, Card, Image, Button } from 'semantic-ui-react';
// import fetchUrl from './githubApi';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [useName, setUseName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [urlRepos, setUrlRepos] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/example')
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);

  const setData = ({ name, login, avatar_url, repos_url }) => {
    setName(name);
    setUseName(login);
    setAvatar(avatar_url);
    setUrlRepos(repos_url);
  };

  const handleSearch = e => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          setError(data.message);
        } else {
          setData(data);
          setError(null);
        }
      });
  };

  return (
    <>
      {/* <header className="Searchbar">
        <form onSubmit={handleSubmit} className="SearchForm">
          <input
            onChange={handleSearch}
            className="SearchFormInput"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            type="text"
            autoComplete="off"
            placeholder="Search repos"
          />

          <button type="submit" className="SearchFormButton">
            Search
            {/* <span className="SearchFormButtonLabel">Search</span> */}
      {/* /* </button>  */}
      {/* // </form>  */}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Input
            onChange={handleSearch}
            fluid
            label="Search repos"
            placeholder="Search repos"
          />
          <Form.Button>Search</Form.Button>
        </Form.Group>
      </Form>
      {error ? (
        <h1> {error}</h1>
      ) : (
        <Card.Group>
          <Card>
            <Image floated="right" size="mini" src={avatar} />
            <Card.Content>
              <Card.Header>{name}</Card.Header>
              <Card.Header>{useName}</Card.Header>

              <Card.Description>{urlRepos}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  More view
                </Button>
                <Button basic color="red">
                  Interest
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      )}

      {/* </header> */}
    </>
  );
}

export default App;
