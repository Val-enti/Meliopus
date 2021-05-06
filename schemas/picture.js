export default {
  title: "Picture",
  name: "picture",
  type: "document",
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
        
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: 'alt',
          type: 'string',
          title: 'Alt',
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: 'caption',
          type: 'string',
          title: 'Caption',
        }
      ]
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    }
  ]
}