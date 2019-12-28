export default {
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
  __experimental_actions: [
    'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'slide' } }]
    }
  ]
};
