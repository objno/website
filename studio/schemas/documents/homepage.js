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
    },
    // {
    //   name: 'slides',
    //   title: 'Slides',
    //   type: 'array',
    //   of: [{ type: 'reference', to: { type: 'slide' } }]
    // },
    {
      name: 'callToActionElements',
      title: 'Call til Action Elements',
      type: 'array',
      of: [{ type: 'callToActionElement' }]
    },
    {
      name: 'showNewsArticles',
      type: 'boolean',
      title: 'Display news articles on homepage'
    },
    {
      name: 'showProjectAndContactBoxRow',
      type: 'boolean',
      title: 'Display «Our Projects» and Contact Box on homepage'
    },
    {
      name: 'ourProjects',
      description: 'Projects display on homepage',
      title: 'Selected Projects',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'project' } }]
    },
    {
      name: 'contactBox',
      type: 'contactBox'
    }
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'Homepage Settings'
      };
    }
    // prepare({title = 'No title', publishedAt, slug = {}, media}) {
    //   const dateSegment = format(publishedAt, 'YYYY/MM')
    //   const path = `/${dateSegment}/${slug.current}/`
    //   return {
    //     title,
    //     media,
    //     subtitle: publishedAt ? path : 'Missing publishing date'
    //   }
    // }
  }
};
