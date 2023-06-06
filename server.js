import express from "express"
import fetch from "node-fetch"
import bodyParser from "body-parser"
import cors from "cors"

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({origin:"*"}));

app.post('/submit', (req, res) => {
    const apiUrl = 'https://app.shootorder.com/items/contacts/?access_token=hes4c7izEe7Rsx4C0GkP4KKBeNqB9JJv';

    const data = {
        full_name: req.body.full_name,
        email: req.body.email,
        phone: req.body.phone,
        alt_email: req.body.alt_email,
        alt_phone: req.body.alt_phone,
        message: req.body.message,
        location: req.body.location,
        product: req.body.product,
        service: req.body.service,
        unit: req.body.unit,
        others: req.body.others,
        note: req.body.note,
        utm_source: req.body.utm_source,
        utm_medium: req.body.utm_medium,
        utm_campaign: req.body.utm_campaign,
        utm_term: req.body.utm_term
    };

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    };

    fetch(apiUrl, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            res.send('Form submitted successfully!');
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            res.status(500).send('Error submitting form');
        });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
