import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import UserList from "./components/UserList";

type Props = {
  children: React.ReactNode;
};

const layout = async ({ children }: Props) => {
  const users = await getUsers();

  return (
    // @ts-expect-error Server Componet
    <Sidebar>
      <div className="h-full">
        <UserList users={users} />
        {children}
      </div>
    </Sidebar>
  );
};

export default layout;
