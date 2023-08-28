import React from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import Aux from "../../Aux";

const Home = ({posts}) =>{
    return(

        <Aux>
        <h1 style={{marginTop: '2%' , textAlign: 'center', color:'darkgoldenrod'}}>A Mini Blog Platform</h1>
        <p style={{color:'ActiveBorder', textAlign:'center'}}><i>"Where user can create, view and delete a blog post using React.js"</i></p>

        <hr/>
            <div className="dashboard">
                {posts.map((post, index) => (
                <Link key={index} to={`/post/${post.id}`}>
                    <Card>
                        <h3>{post.title}</h3>
                        <p>{post.content.substring(0, 100)}</p>
                        <p>{new Date(post.date).toLocaleDateString()}</p>
                    </Card>
                </Link>
                ))}
            </div>
        </Aux>

    );
}
export default Home;