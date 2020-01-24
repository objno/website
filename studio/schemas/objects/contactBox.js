export default {
  name: 'contactBox',
  description: 'The Contact Box shows a button that sends the user to a contact form.',
  title: 'Contact Box',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link'
    }
  ]
};
