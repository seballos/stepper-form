# Stepper Form
Traverse trought a form with diferrent information

Stack: react 16, webpack 4, babel, hmr, jest, eslint, prettier

### How to use
I strongly recommend use yarn to make the build taks
```
  git clone git@github.com:seballos/stepperForm.git
  cd stepperForm
  # run dev server
  yarn dev
  # build bundle
  yarn build
```

### How to configure
Look for step js config file `src/config/index.js`
This is an schema to build the stepper, to add steps you should add a new entry 
```
{
  title: 'Title' // {String} This is the step title which is displayed at top of the content section
  slug: '/title' // {String} The way the step is accesible, I would recommend to add `/` at the beggining in order to avoid troubles with the navigation
  fields: [ // {Array<Object>} fields to render
    {
      component: 'TexField' // {Function Component} the component to render, only DateField and TextField are available, required
      label: 'Label' // {String} Display label of the field, required
      name: 'Name' // {String} Name of the field, required
      required: true // {Boolean} Indicates if the field is required, optional
    }
  ]
}
```
Currently those are the supported props to add a new step with its fields. I recommend to fill with those props to work properly

