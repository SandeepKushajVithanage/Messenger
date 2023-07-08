import getCurrentUser from "@/app/actions/getCurrentUser";
import MobileFooter from "@/app/components/MobileFooter";
import DesktopSidebar from "@/app/components/sidebar/DesktopSidebar";

type Props = {
  children: React.ReactNode;
};

const Sidebar = async ({ children }: Props) => {
  const currentUser = await getCurrentUser();

  return (
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser} />
      <MobileFooter />
      <main className="h-full lg:pl-20">{children}</main>
    </div>
  );
};

export default Sidebar;
