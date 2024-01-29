import React, { useEffect, useState } from 'react';
import axios from '../axios';
import Stories from './Stories';
import Messenger from './Messenger';
import styled from 'styled-components';
import Pusher from 'pusher-js';
import Post from './Post'; // Assuming Post component is imported

const pusher = new Pusher('04ef066f9bf4a023aa56', {
    cluster: 'ap2'
});

const Feed = () => {
    const [postsData, setPostsData] = useState([]);

    const syncFeed = async () => {
        try {
            const res = await axios.get('/posts');
            setPostsData(res.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    useEffect(() => {
        const channel = pusher.subscribe('posts');
        channel.bind('inserted', () => {
            syncFeed();
        });
    }, []);

    useEffect(() => {
        syncFeed();
    }, []);

    return (
        <FeedWrapper>
            <Stories />
            <Messenger />
            {postsData.map((entry) => (
                <Post
                    key={entry.id} // Assuming each entry has a unique id
                    profilePic={entry.avatar}
                    message={entry.text}
                    timestamp={entry.timestamp}
                    imgName={entry.imgName}
                    username={entry.user}
                />
            ))}
        </FeedWrapper>
    );
};

const FeedWrapper = styled.div`
    flex: 1;
    padding: 30px 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default Feed;