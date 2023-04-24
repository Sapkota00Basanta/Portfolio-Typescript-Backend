/**
 * This module consists of schema or structure defination of experience
 *  content which is used in our portfolio website.
 */
export const experienceSchema = {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'works',
      title: 'Works',
      type: 'array',
      of: [{type: 'workExperience'}],
    },
  ],
}
