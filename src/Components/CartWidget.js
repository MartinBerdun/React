import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import {CartContext} from "./CartContext";
// import { ShoppingCartOutlined } from "@material-ui/icons";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid `,
    padding: '0px 4px',
    },
}));



export default function CustomizedBadges() {
    const {calcItemsQty} = useContext(CartContext)
    return (
        <IconButton aria-label="cart" sx={{ paddingRight: 8 }}>
        <StyledBadge badgeContent={calcItemsQty()} color="primary">
        <ShoppingCartIcon />
        </StyledBadge>
    </IconButton>
    );
}


// const CartWidget = () => { 

//     const {cartList} = useContext(CartContext)
//     return (

//         <Badge badgeContent={cartList.calcItemsQty()} color="secondary">
            
//         </Badge>
//     //    <>
//     //     function CustomizedBadges() {
//     //             <IconButton aria-label="cart" sx={{ paddingRight: 8 }}>
//     //             <StyledBadge badgeContent={cartList.calcItemsQty()} color="primary">
//     //             <ShoppingCartIcon />
//     //             </StyledBadge>
//     //         </IconButton>
            
//     //     }
//     //    </>
//     )

// }

// export default CartWidget;
