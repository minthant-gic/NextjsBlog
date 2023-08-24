
import {createUser, loginUser} from "../apis/users";
import {useMutation} from "@tanstack/react-query";

const useUserMutation = () => {
    return useMutation({
        mutationKey : ['post','users'],
        mutationFn : createUser
    })
}

const useUserSignInMutation = () => {
    return useMutation({
        mutationKey : ['post','login'],
        mutationFn : loginUser
    })
}
export const useUser = () => {
  return{
      useUserMutation,
      useUserSignInMutation,
  }
}
