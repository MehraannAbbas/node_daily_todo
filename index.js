const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 0, name: 'course0' },
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
    { id: 4, name: 'course4' },
    { id: 3, name: 'course5' },
];

app.get('/', (req, res) => {
    res.send("Hellow World");
});

app.get('/api/courses', (req, res) =>{
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
const { error } = validateCourse(req.body);
    if (error) {
     res.status(400).send(error.details[0].message);
     return;
 }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
   if(!course) res.status(404).send('The course with given id was not found');

   const { error } = validateCourse(req.body);
   if (error) {
    res.status(400).send(error.details[0].message);
    return;
}

course.name = req.body.name;
res.send(course);
});


app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
   if(!course) res.status(404).send('The course with given id was not found');

   const index = courses.indexOf(course);
   courses.splice(index, 1);

   res.send(course);

});

function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    
    return  schema.validate(course);
     
}


app.get('/api/courses/:id', (req, res) =>{
   const course = courses.find(c => c.id === parseInt(req.params.id));
   if(!course) res.status(404).send('The course wit given id was not found');
   res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Liatening on port ${port}...`));