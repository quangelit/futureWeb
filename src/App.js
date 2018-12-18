import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { ThemeProvider, createTheme, Arwes, Button, Paragraph, Words, Heading, Frame, Image, SoundsProvider, createSounds } from 'arwes';



const theme = createTheme();
const sounds = createSounds({
  shared: { volume: 1 },
  players: {
    click: {
      sound: { src: ['/sound/click.mp3'] },
      settings: { oneAtATime: true }
    },
    typing: {
      sound: { src: ['/sound/typing.mp3'] },
      settings: { oneAtATime: true }
    },
    deploy: {
      sound: { src: ['/sound/deploy.mp3'] },
      settings: { oneAtATime: true }
    }
  }
});

class App extends Component {
  resources = {
    bg: '/static/img/background.jpg',
    pattern: '/static/img/glow.png',
  };

  render() {
    return (
      <div id="main">
        <ThemeProvider theme={theme}>
          <SoundsProvider sounds={sounds}>
            <Arwes animate show>
              <div className="header">
                <Heading node='h2' animate show>Blog Name</Heading>
                <Button animate show>Travel to Space</Button>
              </div>
              <div className="row">
                <div className="leftcolumn">
                  <div className="card" style={{ margin: 20 }}>
                    <Frame animate level={3} corners={4} layer='primary' show>
                      <div style={{ padding: '20px 40px' }}>
                        <Heading animate show node='h2'>TITLE HEADING</Heading>
                        <Heading animate show node='h5'>Title description, Dec 7, 2017</Heading>
                        <Image animate show resources='/static/img/wallpaper.jpg' style={{ height: 200 }}></Image>
                        <p><Words animate show>Some text..</Words></p>
                      </div>
                    </Frame>
                  </div>
                  <div className="card" style={{ margin: 20 }}>
                    <Frame animate level={3} corners={4} layer='primary' show>
                      <div style={{ padding: '20px 40px' }}>
                        <Heading animate show node='h2'>TITLE HEADING</Heading>
                        <Heading animate show node='h5'>Title description, Sep 2, 2017</Heading>
                        <Image animate show resources='/static/img/wallpaper.jpg' style={{ height: 200 }}></Image>
                        <p><Words animate show>Some text..</Words></p>
                      </div>
                    </Frame>
                  </div>
                </div>
                <div className="rightcolumn">
                  <div className="card">
                    <Frame animate level={3} corners={4} layer='primary' show>
                      <div style={{ padding: '20px 20px' }}>
                        <Heading animate show node='h2'>About Me</Heading>
                        <Image animate show resources='/static/img/wallpaper.jpg'></Image>
                        <Paragraph animate show>Some text about me in culpa qui officia deserunt mollit anim..</Paragraph>
                      </div>
                    </Frame>
                  </div>
                  <div className="card">
                    <Frame animate level={3} corners={4} layer='primary' show>
                      <div style={{ padding: '20px 20px' }}>
                        <Heading animate show node='h3'>Popular Post</Heading>
                        <Image animate show resources='/static/img/wallpaper.jpg' style={{ height: 100 }} />
                        <Image animate show resources='/static/img/wallpaper.jpg' style={{ height: 100 }} />
                        <Image animate show resources='/static/img/wallpaper.jpg' style={{ height: 100 }} />
                      </div>
                    </Frame>
                  </div>
                  <div className="card">
                    <Frame animate level={3} corners={4} layer='primary' show>
                      <div style={{ padding: '20px 20px' }}>
                        <Heading animate show node='h3'>Follow Me</Heading>
                        <Paragraph animate show>Some text..</Paragraph>
                      </div>
                    </Frame>
                  </div>
                </div>
              </div>

              <div className="footer">
                <Heading animate show node='h2'>Footer</Heading>
              </div>

            </Arwes>
          </SoundsProvider>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
