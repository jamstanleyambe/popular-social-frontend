import React from 'react'
import Stories from './Stories'
import Messenger from './Messenger'
import styled from 'styled-components'
const Feed = () => {
    return (
        <FeedWrapper>
            <Stories />
            < Messenger />
        </FeedWrapper>
) }
const FeedWrapper = styled.div`
    flex: 1;
    padding: 30px 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
<<<<<<< HEAD

export default Feed
||||||| 26fdeff
export default Feed
=======
export default Feed;
>>>>>>> googleauthen
