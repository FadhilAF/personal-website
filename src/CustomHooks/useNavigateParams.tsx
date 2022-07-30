import { useNavigate } from "react-router-dom";
import axios from "axios";


const useNavigateParams = () => {
  const navigate = useNavigate();

  return (url: string, params: Record<string, string> = {}) => {
    const path = axios.getUri({ url, params });

    navigate(path);
  };
};

export default useNavigateParams;
