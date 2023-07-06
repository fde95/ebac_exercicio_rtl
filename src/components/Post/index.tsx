// import styles from './Post.module.css';
import {Postagem, PostImagem, PostText} from './styles';

import PostComments from '../PostComments';
import { ReactNode } from 'react';

export type Props = {
    children: ReactNode;
    imageUrl: string;
}

const Post = (props: Props) => (
<Postagem>
    <PostImagem src={props.imageUrl} />
        <PostText>{props.children}</PostText>
    <PostComments />
</Postagem>
);

export default Post;