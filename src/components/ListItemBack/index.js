import React from 'react';
import {
    BackArea, BotaoDelete
} from './styles';

import Image from 'react-native-scalable-image';

const ListItemBack = React.forwardRef(({onDelete}, ref) => {
    return (
        <BackArea>
            <BotaoDelete onPress={onDelete}>
                <Image
                    width={24} 
                    source={require('../../assets/trash.png')} 
                />
            </BotaoDelete>
        </BackArea>
    );
});

export default ListItemBack;
