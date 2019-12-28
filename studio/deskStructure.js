import S from '@sanity/desk-tool/structure-builder';
import MdSettings from 'react-icons/lib/md/settings';
import MdMenu from 'react-icons/lib/md/menu';
import MdHome from 'react-icons/lib/md/home';
import MdPic from 'react-icons/lib/md/image';
import MdPosts from 'react-icons/lib/md/library-books';

const hiddenDocTypes = listItem =>
  !['category', 'person', 'post', 'slide', 'link', 'homepage', 'sampleProject', 'siteSettings'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Homepage')
        .child(
          S.editor()
            .id('homepage')
            .schemaType('homepage')
            .documentId('homepage')
        )
        .icon(MdHome),
      S.listItem()
        .title('Posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Post'))
        .icon(MdPosts),
      S.listItem()
        .title('Slides')
        .schemaType('slide')
        .child(S.documentTypeList('slide').title('Slide'))
        .icon(MdPic),
      // S.listItem()
      //   .title('Navigation')
      //   .schemaType('link')
      //   .child(S.documentTypeList('link').title('Navigation'))
      //   .icon(MdMenu),
      S.listItem()
        .title('Sample projects')
        .schemaType('sampleProject')
        .child(S.documentTypeList('sampleProject').title('Sample projects')),
      S.listItem()
        .title('People')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
