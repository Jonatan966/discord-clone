import React, {useRef, useEffect} from 'react';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, {Mention} from '../ChannelMessage';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        const div = messagesRef.current;

        console.log(messagesRef.current);
        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                        key={n}
                        author="Jonas"
                        date="08/08/2020"
                        content="Oh Yeah!"
                    />
                ))}
                <ChannelMessage
                    author="Kauê"
                    date="08/08/2020"
                    hasMention
                    content={
                        <>
                            <Mention>@Jonas</Mention> vamos para a Lapa?
                        </>
                    }
                />
            </Messages>

            <InputWrapper>
                <Input placeholder="Conversar em #♞-xiringar-♞"/>
                <InputIcon/>
            </InputWrapper>
        </Container>
    );
}

export default ChannelData;