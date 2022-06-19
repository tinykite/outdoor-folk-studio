import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default createConfig({
  name: 'default',
  title: 'Outdoor-Folk-v2',

  projectId: '1xpw9z3n',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
