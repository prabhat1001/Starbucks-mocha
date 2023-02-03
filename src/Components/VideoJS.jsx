import styled from 'styled-components';
import ReactPlayer from 'react-player';
import './Video.css'


const VideoJS = (props) => {
    const Url = 'https://youtu.be/yNQs5gwX1-U';
    console.log(Url);

    return (
        <Container>
        <Player>
            <ReactPlayer 
                width="70%"
                height="85vh" 
                className='react-player'
                playing={true}
                controls url={Url}

                //callbacks
                onReady={() => console.log('onReady callback')}
                onStart={() => console.log('onStart callback')}
                onPause={() => console.log('onPause callback')}
                onEnded={() => console.log('onEnded callback')}
                onError={() => console.log('onError callback')}  />

        </Player>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 70px);
    min-width: 20vw;
    overflow-x: hidden;
    overflow-y: hidden;
    display: block;
    /* background-color: #fff; */
    top: 30px;
    height: 79.3;
`;

const Player = styled.div`
    border-radius: 25rem;
    position: absolute;
    object-fit: fill;
    /* display: flex; */
    align-items: center;
    margin-left: 4%;
    margin-right: auto;
    min-width: 100%;

`;



export default VideoJS;
