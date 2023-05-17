const express = require('express');
   const app = express();

   app.get('/applications', (req, res) => {
     // TODO: Retrieve the list of applications from your Render account

     const sdk = require('api')('@render-api/v1.0#5yi85d37lhqedd36');

     sdk.auth('rnd_x9e9zN2aqQ1wEUQ3evzhuKipyC28');
     sdk.getServices({limit: '20'})
       .then(({ data }) => res.send(data))
       .catch(err => console.error(err));
   });

   const PORT = process.env.PORT || 3000;

   app.listen(PORT, () => {
     console.log(`Server listening on port ${PORT}`);
   });
   