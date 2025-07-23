import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  getOutgoingFriendReqs,
  getRecommendedUsers,
  getUserFriends,
  sendFriendRequest,
} from "../lib/api";
import { Link } from "react-router";
import {
  CheckCircleIcon,
  MapPinIcon,
  UserPlusIcon,
  UsersIcon,
  Search,
} from "lucide-react";

import { capitialize } from "../lib/utils";

import FriendCard, { getLanguageFlag } from "../components/FriendCard";
import NoFriendsFound from "../components/NoFriendsFound";

const dropdownClass =
  "select select-bordered select-sm rounded-lg pr-8 min-w-[140px] focus:outline-none focus:ring-2 focus:ring-primary/50";
const inputClass =
  "input input-bordered input-sm w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50";
const buttonClass = "btn btn-primary btn-square btn-sm";

const HomePage = () => {
  const queryClient = useQueryClient();
  const [outgoingRequestsIds, setOutgoingRequestsIds] = useState(new Set());

  // Search state for friends
  const [searchTypeFriends, setSearchTypeFriends] = useState("name");
  const [searchQueryFriends, setSearchQueryFriends] = useState("");
  // Search state for users
  const [searchTypeUsers, setSearchTypeUsers] = useState("name");
  const [searchQueryUsers, setSearchQueryUsers] = useState("");

  const { data: friends = [], isLoading: loadingFriends } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  const { data: recommendedUsers = [], isLoading: loadingUsers } = useQuery({
    queryKey: ["users"],
    queryFn: getRecommendedUsers,
  });

  const { data: outgoingFriendReqs } = useQuery({
    queryKey: ["outgoingFriendReqs"],
    queryFn: getOutgoingFriendReqs,
  });

  const { mutate: sendRequestMutation, isPending } = useMutation({
    mutationFn: sendFriendRequest,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["outgoingFriendReqs"] }),
  });

  useEffect(() => {
    const outgoingIds = new Set();
    if (outgoingFriendReqs && outgoingFriendReqs.length > 0) {
      outgoingFriendReqs.forEach((req) => {
        outgoingIds.add(req.recipient._id);
      });
      setOutgoingRequestsIds(outgoingIds);
    }
  }, [outgoingFriendReqs]);

  // Filtering logic for friends
  const filteredFriends = friends.filter((friend) => {
    const query = searchQueryFriends.trim().toLowerCase();
    if (!query) return true;
    if (searchTypeFriends === "name") {
      return friend.fullName?.toLowerCase().includes(query);
    }
    if (searchTypeFriends === "nativeLanguage") {
      return friend.nativeLanguage?.toLowerCase().includes(query);
    }
    if (searchTypeFriends === "learningLanguage") {
      return friend.learningLanguage?.toLowerCase().includes(query);
    }
    return true;
  });

  // Filtering logic for users
  const filteredUsers = recommendedUsers.filter((user) => {
    const query = searchQueryUsers.trim().toLowerCase();
    if (!query) return true;
    if (searchTypeUsers === "name") {
      return user.fullName?.toLowerCase().includes(query);
    }
    if (searchTypeUsers === "nativeLanguage") {
      return user.nativeLanguage?.toLowerCase().includes(query);
    }
    if (searchTypeUsers === "learningLanguage") {
      return user.learningLanguage?.toLowerCase().includes(query);
    }
    return true;
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="container h-full mx-auto space-y-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Your Friends
          </h2>
          <Link to="/notifications" className="btn btn-outline btn-sm">
            <UsersIcon className="mr-2 size-4" />
            Friend Requests
          </Link>
        </div>

        {/* Friends Search Bar */}
        <div className="flex items-center gap-2 mb-6 w-full max-w-xl">
          <div className="relative">
            <select
              className={dropdownClass}
              value={searchTypeFriends}
              onChange={(e) => setSearchTypeFriends(e.target.value)}
            >
              <option value="name">Name</option>
              <option value="nativeLanguage">Native Language</option>
              <option value="learningLanguage">Learning Language</option>
            </select>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-base-content opacity-60">
              <Search className="size-4" />
            </span>
          </div>
          <input
            type="text"
            className={inputClass}
            placeholder={
              searchTypeFriends === "name"
                ? "Search friends by name..."
                : searchTypeFriends === "nativeLanguage"
                ? "Search friends by native language..."
                : "Search friends by learning language..."
            }
            value={searchQueryFriends}
            onChange={(e) => setSearchQueryFriends(e.target.value)}
          />
          <button className={buttonClass} tabIndex={-1} disabled>
            <Search className="size-4" />
          </button>
        </div>

        {loadingFriends ? (
          <div className="flex justify-center py-12">
            <span className="loading loading-spinner loading-lg" />
          </div>
        ) : filteredFriends.length === 0 ? (
          <NoFriendsFound />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredFriends.map((friend) => (
              <FriendCard key={friend._id} friend={friend} />
            ))}
          </div>
        )}

        <section>
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Meet New Learners
                </h2>
                <p className="opacity-70">
                  Discover perfect language exchange partners based on your
                  profile
                </p>
              </div>
            </div>
          </div>

          {/* Users Search Bar */}
          <div className="flex items-center gap-2 mb-6 w-full max-w-xl">
            <div className="relative">
              <select
                className={dropdownClass}
                value={searchTypeUsers}
                onChange={(e) => setSearchTypeUsers(e.target.value)}
              >
                <option value="name">Name</option>
                <option value="nativeLanguage">Native Language</option>
                <option value="learningLanguage">Learning Language</option>
              </select>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-base-content opacity-60">
                <Search className="size-4" />
              </span>
            </div>
            <input
              type="text"
              className={inputClass}
              placeholder={
                searchTypeUsers === "name"
                  ? "Search users by name..."
                  : searchTypeUsers === "nativeLanguage"
                  ? "Search users by native language..."
                  : "Search users by learning language..."
              }
              value={searchQueryUsers}
              onChange={(e) => setSearchQueryUsers(e.target.value)}
            />
            <button className={buttonClass} tabIndex={-1} disabled>
              <Search className="size-4" />
            </button>
          </div>

          {loadingUsers ? (
            <div className="flex justify-center py-12">
              <span className="loading loading-spinner loading-lg" />
            </div>
          ) : filteredUsers.length === 0 ? (
            <div className="card bg-base-200 p-6 text-center">
              <h3 className="font-semibold text-lg mb-2">
                No recommendations available
              </h3>
              <p className="text-base-content opacity-70">
                Check back later for new language partners!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUsers.map((user) => {
                const hasRequestBeenSent = outgoingRequestsIds.has(user._id);

                return (
                  <div
                    key={user._id}
                    className="card bg-base-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="card-body p-5 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="avatar size-16 rounded-full">
                          <img src={user.profilePic} alt={user.fullName} />
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg">
                            {user.fullName}
                          </h3>
                          {user.location && (
                            <div className="flex items-center text-xs opacity-70 mt-1">
                              <MapPinIcon className="size-3 mr-1" />
                              {user.location}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Languages with flags */}
                      <div className="flex flex-wrap gap-1.5">
                        <span className="badge badge-secondary">
                          {getLanguageFlag(user.nativeLanguage)}
                          Native: {capitialize(user.nativeLanguage)}
                        </span>
                        <span className="badge badge-outline">
                          {getLanguageFlag(user.learningLanguage)}
                          Learning: {capitialize(user.learningLanguage)}
                        </span>
                      </div>

                      {user.bio && (
                        <p className="text-sm opacity-70">{user.bio}</p>
                      )}

                      {/* Action button */}
                      <button
                        className={`btn w-full mt-2 ${
                          hasRequestBeenSent ? "btn-disabled" : "btn-primary"
                        } `}
                        onClick={() => sendRequestMutation(user._id)}
                        disabled={hasRequestBeenSent || isPending}
                      >
                        {hasRequestBeenSent ? (
                          <>
                            <CheckCircleIcon className="size-4 mr-2" />
                            Request Sent
                          </>
                        ) : (
                          <>
                            <UserPlusIcon className="size-4 mr-2" />
                            Send Friend Request
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default HomePage;
