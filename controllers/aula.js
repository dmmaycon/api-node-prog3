module.exports = function(app) {

    const AulaModel = app.models.aula

    app.get('/aulas/:id?', async function (request, response) {    
        const id = parseInt(request.params.id) || false
        if (!id) {
            const aulas = await AulaModel.findAll();
            response.json(aulas)
        } else {
            const aula = await AulaModel.findByPk(id);
            response.json(aula)
        }
        
    })

    app.post('/aulas', async function (request, response) {
        const aula = await AulaModel.create(request.body)
        response.json(aula)
    })
    
    app.put('/aulas/:id', async function (request, response) {
        const id = parseInt(request.params.id)
        const aula = await AulaModel.findByPk(id)
        aula.nome = request.body.nome
        await aula.save()
    })
    
    app.delete('/aulas/:id', async function (request, response) {
        const id = parseInt(request.params.id)
        const aula = await AulaModel.findByPk(id)
        aula.nome = request.body.nome
        await aula.destroy()
    })
};
