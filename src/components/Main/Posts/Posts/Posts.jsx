import s from './Posts.module.css';
import React from 'react';
import MyPost from '../MyPost/MyPost';
import { Field, reduxForm } from 'redux-form'
import { requiredField, maxLenCreator } from '../../../../common/validation';
import { textArea } from '../../../../common/formscontrols';

const maxLen10 = maxLenCreator(10);

const Posts = (props) => {


    let state = props.profilePage;

    

    let postAdd = (values) => {
        props.postAdd(values.post);

    }
    
    let postsEl = state.posts.map(p => <MyPost post= {p.post} likes= {p.likes}/>)


    return (
        <div className= {s.posts}>
            <div>Posts</div>
            <p></p>
            {postsEl}
            <p></p>
            <PostReduxForm onSubmit= {postAdd}/>
        </div>
    );
}

const PostForm = (props) => {
    return (
        <form onSubmit= {props.handleSubmit}>
            <div>
                <Field placeholder={'Post'} name={'post'} component={textArea} validate={[requiredField, maxLen10]}  />
            </div>
            <div>
                <button >Publish</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({
    form: 'post'
  })(PostForm)




export default Posts;