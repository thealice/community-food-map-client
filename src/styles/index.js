import styled from "styled-components"
import tw from "twin.macro"

const StyledForm = styled.main.attrs({
  className: "flex-col h-screen justify-center bg-gray-800 max-w-xl h-auto",
})`
  & {
    form {
      ${tw`bg-transparent text-center py-8 px-5 max-w-xl h-auto`}
    }
    input {
      ${tw`border-gray-300 mb-4 w-full border-solid border rounded py-2 px-4`}
    }
    textarea {
      ${tw`border-gray-300 mb-4 w-full border-solid border rounded py-2 px-4`}
    }
    button {
      ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
    }
  }
`
export default StyledForm