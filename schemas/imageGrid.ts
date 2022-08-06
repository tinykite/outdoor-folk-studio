export default {
  name: 'imageGrid',
  type: 'object',
  title: 'Image Grid',
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: false,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
    },
    {
      name: 'display',
      type: 'string',
      title: 'Display as',
      description: 'How should we display these images?',
      options: {
        list: [
          {title: 'Single', value: 'single'}, // Feels like there should be an easier way to do this
          {title: 'Double (top)', value: '1x2xtop'},
          {title: 'Double (bottom)', value: '1x2xbottom'},
          {title: 'Double (standalone)', value: '1x2xstandalone'},
          {title: 'Quad', value: '2x2'},
        ],
      },
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'What caption should we include with these images?',
    },
    {
      name: 'imageCredit',
      type: 'string',
      title: 'Image credit',
      description: 'What photo credit should we include with these images?',
    },
  ],
}
