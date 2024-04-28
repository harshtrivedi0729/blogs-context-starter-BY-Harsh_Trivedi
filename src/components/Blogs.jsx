import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import "./Blogs.css"

const Blogs = () => {
    //Step:-3 - Consume:- Consume karva mate apdi paseuseContext naam no hook che teni help thi apde data ne consume kari shakiye chiye.......and j apdo context hot (ahiya APPCONTEXT) che tene ape input-parameter tariye useContext ma apishu......j thi apanane loading no data ahiya easyly mali jashe..apanane harichicy(HARAY-KI) ni ander apdo component kya stand kare che te vicharva ni jarur nathi sidha sidha jaishu and kahishu k data apo to te data api deshe
    // j data apanane joiye che te apde const pachi curly brackets[{}] ma lakhva nu
    const {posts,loading} = useContext(AppContext);
    console.log("Printing inside blogs component");
    console.log(posts);


  return (
    <div className='w-11/12 max-w-[670px] h-screen py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px]  justify-center items-center'>
    {

        /* jo loading ni value true hoy to apde loading dekhadishu,jo loading ni value false hase to apde j post related data hashe te dekhadishu */
        loading ? 

        (<Spinner />) : 

        (   
            posts.length === 0 ? 
            (<div>
                <p>No Post Found</p>
            </div>) : 
            {/* Data a API thi apd pase ave che to j number of post apde dekhadvi che page upar te data a API ma che, ahiya apde jo darek post ne aek card ni saman mani laiye to kaam easy thai jashe to apde ahiya MAP function no use kariye , jovo apdin pae data aviyo tema ma 5 post no data che , tem darek post nu title,date,authour,description,and baki ni badhi details che ..to apde badhi j post mate aek ne aek kaam farithi karvu padshe to apde avu na karvu pade atle apde map function no use karishu.....aapde aek map function no use karishu j same structure ne vare-vare repeat karshe  */}
            /* posts.map((post) => (<Card/>)).............have jo apde ahiya <Card></Card> banavi ne teni ander aa badho code lakhiye to apde "post" nr as a prop pass karvo padet */
            /* MMMMMMIIIIIMMMMPPPP */
            /* MAPMfunction ma jo rounded bracket[()] pass kariye to apde "return" key word no use karva ni jarur nathi pan jyare apde MAP function ma curly brackets[{}] use kariye chiye tyare apde "return" keyword no use karvo pde che  */
            (posts.map( (post) => (
                /* map function che mate compolsory key pass karvi padshe */
                <div key={post.id}>
                    <p className="font-bold text-lg ">{post.title}</p>
                    <p className='text-sm mt-[4px]'>
                        By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category} </span>
                    </p>
                    <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
                    <p className='text-md mt-[14px]'>{post.content}</p>
                    {/* content pachi API na data ma bahu badha tags che ....ahiya tag a value nathi pan tag a array che j ni ander multiple values che.......to apde tag ni ander ni multiple values che tama thi aek value dekhadva ni rit/process define kari dav and tena upar MAP function lagavi dav to apde bahu badho code nahi lakhvo pade */}
                    <div className='flex gap-x-3'>
                    {/* jo koi unique key na male apanane to apde "index" ne as a key pass kariye chiye mate apde tag ni baju ma pan index lakhiyu and key ma pan key lakhiyu */}
                        {post.tags.map( (tag, index) => {
                            /* apde '#' tag ni agal lagadvu che mate apde niche mujab lakhiyu */
                            /* map function che mate compolsory key pass karvi padshe */
                            return <span key={index} className="text-blue-700 underline font-bold text-xs mt-[5px]">{` #${tag}`}</span>
                        } )}
                    </div>
                </div>
            ) ))
        ) 
    }
      
    </div>
  )
}

export default Blogs
