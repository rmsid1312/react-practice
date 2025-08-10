import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="flex h-screen flex-col">
      {isLoading && <Loader />}

      {/* 🔵 Header는 맨 위 */}
      <Header />

      {/* 🔵 Outlet이 header 바로 밑에서 컨텐츠 채우도록 설정 */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>

      {/* 🔵 CartOverview는 footer처럼 맨 아래 */}
      <CartOverview />
    </div>
  );
}

export default AppLayout;
