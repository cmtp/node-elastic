module.exports = app => {
    app.listen(app.get('port'), () => {
       console.log(`elastic API = Port ${app.get('port')}`); 
    });
};