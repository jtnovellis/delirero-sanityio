import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant name',
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
      name: 'image',
      title: 'Image of the Restaurant',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of the Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude of the Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Adress',
      type: 'string',
      validation(rule) {
        return rule.required()
      },
    }),
    defineField({
      name: 'rating',
      title: 'Enter a rating from 1 to 5 stars',
      type: 'number',
      validation(rule) {
        return rule.required().min(1).max(5).error('Please enter a value between 1 and 5')
      },
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      validation(rule) {
        return rule.required()
      },
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'dish'}],
        },
      ],
    }),
  ],
})
