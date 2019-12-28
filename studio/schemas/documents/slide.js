export default {
  name: 'slide',
  type: 'document',
  title: 'Slide',
  fields: [
    {
      name: 'mainImage',
      title: 'Image',
      type: 'figure'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your portfolio for search engines and social media.'
    }
  ]
};
