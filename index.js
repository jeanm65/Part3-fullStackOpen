const express = require('express');

const app = express();

let persons = [
    { 
      "id": 1,
      "name": "Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary", 
      "number": "39-23-6423122"
    }
]

const noteDate = new Date();

app.get('/', (request, response) => {
    response.send('welcome world!');
  })

app.get('/api/persons', (request, response) => {
  response.json(persons);
})

app.get('/info', (request, response) => {
  const personsLength = Object.keys(persons).length;
  response.send(`phonebook has info of ${personsLength} peoples <br>  ${noteDate}`);
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find(person => person.id === id);
  console.log('person', person);
  if(person){
    response.json(person);
  }else {
    response.status(404).end();
  }
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log('server running on PORT', PORT);
})