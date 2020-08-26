const server = require('./api/server');
const carsRouter = require('./api/cars-router');
const PORT = process.env.port || 5000;

server.use('/cars', carsRouter);

server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: 'Something went wrong.'
    });
});

server.listen(PORT, () => {
    console.log(`\n== API running on port ${PORT} ==\n`);
})