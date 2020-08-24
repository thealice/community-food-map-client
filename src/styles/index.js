import styled from "styled-components"
import tw from "twin.macro"

const StyledForm = styled.main.attrs({
  className: "flex-col justify-center bg-gray-800 max-w-xl rounded-lg",
})`
  & {
    form {
      ${tw`bg-transparent text-center py-8 px-5 max-w-xl h-auto`}
    }
    input {
      ${tw`border-purple-300 mb-4 w-full border-solid bg-purple-100 border rounded py-2 px-4`}
    }
    textarea {
      ${tw`border-purple-300 mb-4 w-full border-solid bg-purple-100 border rounded py-2 px-4`}
    }
    button {
      ${tw`bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 border border-purple-800 rounded`}
    }
  }
`
export default StyledForm