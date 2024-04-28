import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

//step1 :- Create Context
// apde biji file ma pan aa Context no use karvo che mate react na basic rule mujab apde aa created context che (const AppContext = createContext();) tene apde "export" karavavo padshe
export const AppContext = createContext();


// ahiya input para-meter ma apde "children" lakhelu che j no matalab che k 'AppContextProvider' ni ander j pan componets/data che tene apde childeren kahiye chiye.......apde index.js ma jai ne AppContextProvider ni ander App nakhiyo mate AppContextProvider no childeren a App thayu kahevay .......to ahiya aa 'childeren' input-parameter a <AppContextProvider></AppContextProvider> ni ander j pan component hase tene darshave che

// apde biji file ma pan aa AppContextProvider no use karvo che mate react na basic rule mujab apde aa AppContextProvider che tene apde "export" karavavo padshe
export default function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    // starting ma khabar na hoy k ketala pages hase mate initially apde null mark kariyu
    const [totalPages, setTotalPages] = useState(null);

    //data filling pending......j data apde API mathi lavishu

    async function fetchBlogPosts(page = 1) {
        // API mathi dat ave tya sudhi loading on kariyu
        setLoading(true);
        // apde page ni default value set kari didhi j 1 che
        // apde API ma 2 vastu karva ni che .....1.) BaseUrl ne set karva nu che and 2.) page na number ne pan add karva nu che......j niche mujab thashe
        let url = `${baseUrl}?page=${page}`;
        console.log("printing the final URL");
        console.log(url);
        try{
            const result = await fetch(url);
            // .]AOI call thi j data ayo tene apde .JSON ma convert kariyu
            const data = await result.json();
            // API na data ne print karavi liudhu
            console.log(data);
            // apde ahiya setData ma badha na path lakhela ch ek API ma data pachi page ma jav(data.page)...API ma data pachi post ma jav(data.post) avi rite
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages)
        }
        catch(error) {
            // error ave to apde badhu j initial stage upar lai jaishu
            console.log("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        // API mathi data avi jay atle apde loading ne false kari daishu
        setLoading(false);
    }

    // page ma next ne prious ne handle karva mate aa function banaviyu
    function handlePageChange(page) {
        // j data input-parameter mathi ave che(page) tene apde setPage upar set karishu....and pachi API ne call karishu
        setPage(page);
        fetchBlogPosts(page);
    }



    // object banayo j darshave che k apde aa data ne consumer ne provide karavishu/consumer ne send karishu
    // aa object j pan REQUIED DATA hoy te apde dekhadiye chiye.....adpe j upar state variable banayiye chiye teno data pass karvo pade che 
    // aa centralize data che j apde context-provider thi banavelo che jem abadha j functions avi jay che ................aa centralize data ne apde consume karishu HOOK ni help thi...........and aa HOOK nu nam che "useContext" .
    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };

    //step2 :- Providing Context
    // AA SYSNTAX CHE TENE DHYAN MA RAKHVU
    // ama apde childeren ne value provide kareli che j AppContext ma axist karti kare che..............atle k childeren(AHIYA <APP></APP>) ne value (loading, setLoading,posts, setPosts,posts, setPosts,page, setPage) provide kareli che j <AppContext></AppContext> ni ander hati
    //  AA SYNTAX CHE TE DHYAN MA RAKHVU........HAMESHA AAVI RITE J CONTECT NO DATA PROVIDE KARISHU
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}