import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of dish',
      type: 'string',
      validation(rule) {
        return rule.required()
      },
    }),
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation(rule) {
        return rule.max(200)
      },
    }),
    defineField({
      name: 'price',
      title: 'Price of the dish',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Image of the Restaurant',
      type: 'image',
    }),
  ],
})
