// Import User-Defined Modules
import {testimonialSchema} from './testimonials.schema'
import {aboutSchema} from './about.schema'
import {brandSchema} from './brand.schema'
import {contactSchema} from './contact.schema'
import {experienceSchema} from './experience.schema'
import {skillSchema} from './skills.schema'
import {workExperienceSchema} from './workExperience.schema'
import {workSchema} from './works.schema'

/**
 * This module is used to export all the portfolio
 * related schema exports from a single module.
 */
export default {
  aboutSchema,
  brandSchema,
  contactSchema,
  experienceSchema,
  skillSchema,
  testimonialSchema,
  workExperienceSchema,
  workSchema,
}
