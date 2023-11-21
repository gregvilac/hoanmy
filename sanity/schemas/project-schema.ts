const project = {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Project Name',
            type: 'string'
        },
        {
            name: 'client',
            title: 'Client',
            type: 'string'
        },
        {
            name: 'market',
            title: 'Market',
            type: 'string',
            options:{
                list: [
                    {title: 'Commercial', value: 'commercial'},
                    {title: 'Education', value: 'education'},
                    {title: 'Government', value: 'government'},
                    {title: 'Military', value: 'military'}
                ],
                layout: 'radio'
            }
        },
        {
            name: 'completed',
            title: 'Date Completed',
            type: 'date'
        },
        {
            name:'slug',
            title: 'Project Slug',
            type: 'slug',
            options:{source: 'name'}
        },
        {
            name:'image',
            title: 'Project Featured Image',
            type: 'image',
            options:{hotspot: true},
            fields: [
                {
            name: 'alt',
            title: 'Alt Tag',
            type: 'string'
                }
            ]
              
                
        },
        {
            name: 'language',
            title: 'Language',
            type: 'string',
            options: {
                list: [
                    {title:'Vietnamese', value: 'vn'},
                    {title: 'English', value: 'en'}
                ],
                layout: 'radio'
            }
        },
      
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name:'content',
            title: 'Content',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name:'image',
            title: 'Project Photo 1',
            type: 'image',
            options:{hotspot: true},
            fields: [
                {
            name: 'alt',
            title: 'Alt Tag',
            type: 'string'
                }
            ]
              
                
        }, {
            name:'image',
            title: 'Project Photo 2',
            type: 'image',
            options:{hotspot: true},
            fields: [
                {
            name: 'alt',
            title: 'Alt Tag',
            type: 'string'
                }
            ]
              
                
        },
        {
            name:'image',
            title: 'Project Photo 3',
            type: 'image',
            options:{hotspot: true},
            fields: [
                {
            name: 'alt',
            title: 'Alt Tag',
            type: 'string'
                }
            ]
              
                
        },
        {
            name:'image',
            title: 'Project Photo 4',
            type: 'image',
            options:{hotspot: true},
            fields: [
                {
            name: 'alt',
            title: 'Alt Tag',
            type: 'string'
                }
            ]
              
                
        },
        {
            name:'image',
            title: 'Project Photo 5',
            type: 'image',
            options:{hotspot: true},
            fields: [
                {
            name: 'alt',
            title: 'Alt Tag',
            type: 'string'
                }
            ]
              
                
        },
    ]


}

export default project