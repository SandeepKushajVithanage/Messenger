import Sidebar from "../components/sidebar/Sidebar";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    // @ts-expect-error Server Componet
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
};

export default layout;
