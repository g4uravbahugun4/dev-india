import '@/styles/globals.css'
import axios from "axios";
import { parseCookies, destroyCookie } from "nookies";
import { GoogleOAuthProvider } from '@react-oauth/google';
import baseUrl from "../utils/baseUrl";
import { redirectUser } from "../utils/authUser";
export default function MyApp({ Component, pageProps }) {
  return<GoogleOAuthProvider clientId="483883766761-dugimrugcrnf7us5n80fmp1evjkmbivc.apps.googleusercontent.com"> <Component {...pageProps} /></GoogleOAuthProvider>
}
MyApp.getInitialProps = async ({ Component, ctx }) => {
  const { token } = parseCookies(ctx);
  let pageProps = {};
  const protectedRoutes =
    ctx.pathname === "/" ||
    ctx.pathname === "/mapping" ||
    ctx.pathname === "/tasks"||
    ctx.pathname === "/post"||
    ctx.pathname === "/posttask" ;

    !protectedRoutes && redirectUser(ctx, "/");
 if(token){
    try {
      
      const res = await axios.get(`${baseUrl}/api/auth`, {
        headers: { Authorization: token },
      
      });

      const { user } = res.data;
      
      pageProps.user = user;
   
    } catch (error) {
      destroyCookie(ctx, "token");
   
    
  }
}

  return { pageProps };
};
