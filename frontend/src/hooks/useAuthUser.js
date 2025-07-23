import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAuthUser } from "../lib/api";
import { useNavigate } from "react-router";

const useAuthUser = () => {
  const authUser = useQuery({
    queryKey: ["authUser"],
    queryFn: getAuthUser,
    retry: false, // auth check
    staleTime: 0,
  });

  return { isLoading: authUser.isLoading, authUser: authUser.data?.user };
};
export default useAuthUser;
