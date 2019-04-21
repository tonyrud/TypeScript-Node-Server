import app from './app';

const PORT: number = Number(process.env.PORT) || 3010;

app.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`);
});
