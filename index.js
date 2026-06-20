import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 8080


app.get('/', (req, res) => {
    return res.json({message: 'Hello Dev babu, CI/CD is fully wokring '});
});

app.listen(PORT,() => {
    console.log(`Server is up and running on port ${PORT}`);
});