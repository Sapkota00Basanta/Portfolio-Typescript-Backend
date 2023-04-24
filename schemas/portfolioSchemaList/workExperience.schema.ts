/**
 * This module consists of schema or structure defination of work experience
 * content which is used in our portfolio website.
 */
export const workExperienceSchema = {
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    {name: 'name', title: 'name', type: 'string'},
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'string',
    },
  ],
}
