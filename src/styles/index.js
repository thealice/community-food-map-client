import styled from "styled-components"
import tw from "twin.macro"

export const StyledForm = styled.main.attrs({
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
      ${tw`bg-purple-700 hover:bg-transparent hover:border-purple-300 text-white font-bold py-2 px-4 border border-purple-800 rounded`}
    }
  }
`
export const StyledButton = styled.button`
  ${tw`hover:bg-purple-800 text-lg mt-3 bg-transparent hover:border-purple-800 text-white font-bold py-2 px-4 border border-purple-300 rounded`}
`;
