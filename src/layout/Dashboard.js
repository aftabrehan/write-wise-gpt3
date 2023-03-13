import { useEffect } from 'react'
import { useFormik } from 'formik'

import Header from 'components/header'
import Button from 'components/button'
import Text from 'components/text'
import Checkbox from 'components/checkbox'
import TextArea from 'components/text-area'

import { getAISuggestions } from 'lib/utils'

const Dashboard = () => {
  const formik = useFormik({
    initialValues: { text: '' },
  })

  useEffect(() => {
    const getSuggestion = async () => {
      const res = await getAISuggestions()
      console.log(res, 'res')
      formik.setFieldValue('text', res)
    }
    getSuggestion()
  }, [])

  return (
    <div className="dashboard-container">
      <Header />
      <main>
        <div className="writing-container">
          <div className="writing-header">
            <Text tag="h1" size="xl" weight="bold">
              Dashboard
            </Text>
            <Button size="sm" type="primary">
              Create New Document
            </Button>
          </div>
          <div className="writing-body">
            <div className="document-list">
              <div className="document-item">
                <Checkbox />
                <a>Home</a>
              </div>
              <div className="document-item">
                <Checkbox />
                <a>Home</a>
              </div>
              <div className="document-item">
                <Checkbox />
                <a>Home</a>
              </div>
            </div>
            <div className="document-editor">
              <TextArea
                name="text"
                placeholder="Start typing here..."
                formik={formik}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
