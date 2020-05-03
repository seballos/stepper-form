import TextField from '../components/TextField'
import DateField from '../components/DateField'

export default [
  {
    title: 'Personal Information',
    slug: '/personal-information',
    fields: [
      {
        component: TextField,
        label: 'Name',
        name: 'name',
        required: true,
      },
      {
        component: TextField,
        label: 'LastName',
        name: 'lastName',
      },
      {
        component: DateField,
        label: 'Birthday',
        name: 'birthdate',
      },
    ],
  },
  {
    title: 'Financial Information',
    slug: '/financial-information',
    fields: [
      {
        component: TextField,
        label: 'Bank',
        name: 'bankName',
        required: true,
      },
      {
        component: TextField,
        label: 'Account Number',
        name: 'accountNumber',
      },
    ],
  },
  {
    title: 'Other Information',
    slug: '/other-information',
    fields: [
      {
        component: TextField,
        label: 'About',
        name: 'about',
        required: true,
      },
      {
        component: TextField,
        label: 'Hobbies',
        name: 'hobbies',
      },
    ],
  },
]
