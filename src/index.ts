import app from './app';
import { envVars } from './config';

app.listen(envVars.APP.PORT, () => {
    console.log(`🙌 Server is running on http://localhost:${envVars.APP.PORT}`);
})