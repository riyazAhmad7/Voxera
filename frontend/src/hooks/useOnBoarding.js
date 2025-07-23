import { useMutation, useQueryClient } from "@tanstack/react-query";
import { completeOnboarding, getAuthUser } from "../lib/api";
import toast from "react-hot-toast";

const useOnBoarding = (navigate) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: completeOnboarding,
    onSuccess: async () => {
      toast.success("Profile onboarded successfully");


      await queryClient.invalidateQueries({ queryKey: ["authUser"] });
      // Wait for the refetch to complete and get the latest user data
      const { user } = await getAuthUser();
      
      if (user?.isOnboarded && navigate) {
        navigate("/");
      }
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  return { onboardingMutation: mutate, isPending };
};

export default useOnBoarding;
