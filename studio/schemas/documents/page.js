export default {
  name: 'page',
  type: 'document',
  title: 'page',
  __experimental_actions: [
    'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'simplePortableText',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'simplePortableText'
    }
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: 'About us page'
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
