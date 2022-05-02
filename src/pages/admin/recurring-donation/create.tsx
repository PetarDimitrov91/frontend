import { securedPropsWithTranslation } from 'middleware/auth/keycloak'
import CreatePage from 'components/recurring-donation/CreatePage'

export const getServerSideProps = securedPropsWithTranslation([
  'common',
  'auth',
  'validation',
  'admin',
  'recurring-donation',
  'person',
])

export default CreatePage