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
          {title: '1x2', value: '1x2'},
          {title: '2x2', value: '2x2'},
        ],
      },
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'What caption should we include with this image?',
    },
  ],
}
