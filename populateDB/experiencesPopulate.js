require('./../connection/connectionDb')
const ExperienceModel = require('./../models/experienceModel')
const ExperiencesRepository = require('./../repository/experiencesRepository')

const experiencesPopulate = () => {
    
        ExperiencesRepository.map(async el => {
            try {
                await ExperienceModel(el).save()
                console.log('Populate', el)
            } catch (err){
                console.error('Error', err)
            }
        })
    
}

experiencesPopulate()