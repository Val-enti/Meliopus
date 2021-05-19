export default {
   title: "Post",
   name: "post",
   type: "document",
   fields: [
     {
         name: 'picture',
         type: 'picture',
         title: 'Picture',
     },
     { 
         title: 'Title',
         name: 'title',
         type: 'string',
         validation: Rule => Rule.required()
     },
     {
         title: 'Content',
         name: 'content',
         type: 'text',
         validation: Rule => Rule.required()
     }
   ]
 }