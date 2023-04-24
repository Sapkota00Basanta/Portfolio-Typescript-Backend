/**
 * This module contains the schema or structure defination
 * of brand content which is used in our portfolio website.
 */
export const brandSchema = {
  name: 'brand',
  title: 'Brand',
  type: 'document',
  fields: [
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
  ],
}
