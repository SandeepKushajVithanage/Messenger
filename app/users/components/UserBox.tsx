"use-client";

import Avatar from "@/app/components/Avatar";
import api from "@/app/libs/api";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

type Props = {
  user: User;
};

const UserBox = ({ user }: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);
    api
      .post("api/conversations", { userId: user.id })
      .then((response) => {
        router.push(`/conversations/${response.data.id}`);
      })
      .catch(console.log)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div
      className="w-full relative flex items-center space-x-3 bg-white p-3 hover:bg-neutral-100 rounded-lg transition cursor-pointer"
      onClick={handleClick}
    >
      <Avatar user={user} />
      <div className="min-w-0 flex-1">
        <div className="focus:outline-none">
          <div className="flex justify-between items-center mb-1">
            <p className="text-sm font-medium text-gray-900">{user.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBox;
