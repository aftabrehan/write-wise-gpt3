import { useFormik } from 'formik'

import Stories from 'components/stories'
import Field from 'components/field'

const args = { arg: 'Default' }

const validate = (property, value) => {
  const errors = {}
  if (!value.trim()) errors[property] = 'Name is required'
  return errors
}

const Template = args => {
  const formik = useFormik({
    initialValues: { name: '' },
    validate: ({ name }) => validate('name', name),
  })
  return <Field {...args} name="name" formik={formik} />
}

const ComponentStory = () => <Stories argList={[args]} template={Template} />

export default ComponentStory
