import { useNavigation } from "react-router-dom";

const GlobalLoader = () => {
  const navigation = useNavigation();

  if (navigation.state === "idle") return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="h-1 bg-primary animate-pulse"></div>
    </div>
  );
};

export default GlobalLoader;