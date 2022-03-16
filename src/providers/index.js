import { AuthenticationProvider } from "./Authentication";
import { TestProvider } from "./TestProvider";

const Providers = ({ children }) => {
  return (
    <AuthenticationProvider>
      <TestProvider>{children}</TestProvider>
    </AuthenticationProvider>
  );
};
export default Providers;
