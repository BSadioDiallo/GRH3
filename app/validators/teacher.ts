import vine, { SimpleMessagesProvider } from '@vinejs/vine'
import { Gender } from '#enums/gender_type'
import { DepartmentName } from '#enums/departments_name'

export const createTeacherValidator = vine.compile(
  vine.object({
    lastname: vine.string().trim().alpha({ allowSpaces: true }).toUpperCase(),
    firstname: vine.string().trim().alpha({ allowSpaces: true }).toUpperCase(),
    email: vine.string().trim().email(),
    phone: vine.string().regex(/^6[1256][0-9]{7}$/),
    gender: vine.number().range([Gender.Male, Gender.Female]),
    birthdate: vine.date().before('2002-01-01'),
    address: vine
      .string()
      .trim()
      .maxLength(255)
      .regex(/^[a-zA-Z0-9 ]*,[a-zA-Z0-9- ]*$/),
    department: vine.number().range([DepartmentName.GIT, DepartmentName.Droit]),
  })
)

const messages = {
  'lastname': 'Le nom ne doit contenir que des lettres',
  'lastname.alpha': 'Le nom ne doit contenir que des lettres',
  'firstname': 'Le prénom ne doit contenir que des lettres',
  'firstname.alpha': 'Le prénom ne doit contenir que des lettres',
  'email': "l'email renseigné n'est pas valide",
  'phone': "Le numéro de téléphone n'est pas valide",
  'phone.regex': "Le numéro de téléphone n'est pas valide",
  'gender': 'Le genre doit être soit homme soit femme',
  'gender.range': 'Le genre doit être soit homme soit femme',
  'address': "l'adresse doit être au format Quartier,Commune",
  'address.regex': "l'adresse doit au format Quartier,Commune",
  'address.maxLength': "l'adresse ne doit pas dépasser 255 caractères",
  'birthdate': 'La date de naissance doit être une date valide',
  'birthdate.before': 'La date de naissance doit être antérieur à la date du 01/01/2002',
  'department': 'Le department doit être un des departements disponibles',
  'department.range': 'Le department doit être un des departements disponibles',
}

createTeacherValidator.messagesProvider = new SimpleMessagesProvider(messages)
