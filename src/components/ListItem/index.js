import React from 'react';
import {
    ListItemWrapper, Infos, Texto, Price
} from './styles';

const ListItem = React.forwardRef(({item}, ref) => {
    //console.log(item);
    return (
        <ListItemWrapper key={item.id}>
            <Infos>
                <Texto>{item.quantidade}x {item.produto_nome}</Texto>
                <Texto>{`R$ ${parseFloat(item.preco).toFixed(2)} unid.`}</Texto>
                { item.is_individual === true && <Texto>{item.nome}</Texto> }
            </Infos>
            <Price>
                R$ {parseFloat(item.quantidade*item.preco).toFixed(2)}
            </Price>
        </ListItemWrapper>
    );
});

export default ListItem;

