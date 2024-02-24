import { RouterProvider } from "react-router-dom"
import { router } from "./routes/Routes"
import { useAppDispatch } from "./redux/hooks";
import { setAccessToken } from "./redux/slice/authSlice";
import { getFromLocalStorage } from "./utils/localStorage";
import { authKey } from "./utils/auth.Services";

function App() { 
  const token = getFromLocalStorage(authKey)
  const dispatch = useAppDispatch()
  dispatch(setAccessToken(token as string));
  
  return (
    <div className="bg-[#FCFCFC]">
        <RouterProvider router={router} />
  </div>
  )
}

export default App
