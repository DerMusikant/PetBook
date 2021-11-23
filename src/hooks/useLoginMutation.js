import { gql, useMutation } from '@apollo/client'

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`
export const useLoginMutation = () => {

  const [mutation, {error, loading}] = useMutation(LOGIN)

  return { mutation, error, loading }
}
