import { AuthenticationProvider } from "./Authentication";
import ExercisesListProvider from "./ExercisesList";

const Providers = ({ children }) => {
  return (
    <AuthenticationProvider>
      <ExercisesListProvider>{children}</ExercisesListProvider>
    </AuthenticationProvider>
  );
};
export default Providers;
