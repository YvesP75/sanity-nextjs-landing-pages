export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5e9afd04405f0d27ea588464',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qoo7p1pe',
                  apiId: 'ad9fdb67-4c73-4cd9-8979-4779ddd8272b'
                },
                {
                  buildHookId: '5e9afd05e348e31430205bd6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bw71rayy',
                  apiId: '0a864d9a-f704-416c-8a65-5baae230fbe7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/YvesP75/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bw71rayy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
