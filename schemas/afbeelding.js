export default {
  title: "Afbeelding",
  name: "afbeelding",
  type: "document",
  fields: [
    {
      name: 'picture',
      type: 'picture',
      title: 'Picture',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    }
  ]
}