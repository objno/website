export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
    //   }
    // },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'obj-website-studio',
                  apiId: 'e2cbda5f-9d9e-4e6d-87f5-c66710fbadce'
                },
                {
                  buildHookId: '',
                  title: 'Portfolio Website',
                  name: 'obj-website',
                  apiId: '9ba6d94d-a11b-40a6-8111-c9c58a857fba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cobraz/obj-website',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://obj-website.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    // {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['portfolio']},
      layout: {width: 'medium'}
    }
  ]
}
