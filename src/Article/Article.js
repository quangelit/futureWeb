import React from 'react';
import { ThemeProvider, createTheme, Arwes, Button, Paragraph, Table, Header, Project, Words, Heading, Frame } from 'arwes';

class Example extends React.Component {
    render () {
        return (
            <Arwes>
                <div style={{ display: 'inline-block', padding: '20px' }}>
                    <Frame
                        animate={true}
                        level={3}
                        corners={4}
                        layer='primary'
                    >
                        <div>Cyberpunk</div>
                    </Frame>
                </div>
            </Arwes>
        );
    }
}

export default Example;