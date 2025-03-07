const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/obtener-carta-natal', async (req, res) => {
    const userId = '638517';
    const apiKey = '2a425a2861879e785ff7887afd9e0ebffb73b27a';

    try {
        const respuesta = await axios.post(
            'https://json.astrologyapi.com/v1/western_horoscope',
            req.body,
            {
                auth: {
                    username: userId,
                    password: apiKey
                }
            }
        );
        res.json(respuesta.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al conectarse con AstrologyAPI' });
    }
});

app.listen(3000, () => {
    console.log('Servidor listo en el puerto 3000 🚀');
});